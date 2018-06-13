(() => {
    const _ = require("losand");
    const {offing, ansing} = {offing: _([]), ansing: _([])};
    module.exports = (dir, file, contruct) =>_(require('http').createServer(
        _(require('express'))
        .map($ => ({
            app: $(),
            "static": $.static
        }))
        .map($ => $.app.configure(
                _($.app).$(a => {
                    a.use(require('cors')());
                    a.use($.static(`${__dirname}/public`));
                    a.set('view options', {layout: false});
                    a.get('/', (req, res) => res.render('index.html'));
                })._
            )
        )._
    ))
    .$(sv => _(new (require('ws').Server)({server : sv})).on({
        connection: ws => _(
            offing._.length <= 0 ?
            offing.$(a => a.push(
                _(ws)
                .$($ => $.send(_(false).json))
                .on({
                    'message': m => _(ws).draw({sdp: m})
                })._
            )) :
            ansing.$(a => a.push(
                _(ws)
                .$($ => $.send(offing._[0].sdp))
                .on({
                    'message': m => a.filter(v => v !== ws || offing.$(o => {
                        o[0].send(m);
                        o[0].close();
                        o.shift();
                        v.close();
                    }) && false)
                })._
            ))
        )
        .$(a => _(ws).on({
            'close': m => a.map($ => $.filter(v => v !== ws))
        }))
    }))._.listen(process.env.PORT, process.env.IP);
})();