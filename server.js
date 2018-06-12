(() => {
    const _ = require("losand");
    const {offing, ansing} = {offing: _([]), ansing: _([])};
    module.exports = (dir, file) => _(require('http').createServer(_(require('express'))
        .map($ => ({app: $(), "static": $.static})).map($ => _($.app).$(a => {
            a.use(require('cors')());
            a.set('view options', {layout: false});
            a.use($.static(dir));
            a.get('/', (req, res) => res.render(file));
        })._)._
    ))
    .$(sv => _(new (require('ws').Server)({server : sv})).on({
        connection: ws => _(
            offing._.length <= 0 ? offing.$(a => a.push(ws.send(_(false).json))) : ansing.$(a => a.push(ws.send(offing._[0].sdp)))
        )
        .$($ => _(ws).on({
            'close': m => $.map(a => a.filter(v => v !== ws)),
            'message': m => $.$($$ => $$ === offing._ ?
            $$.each(v => v === ws && _(v).draw({sdp: m})) :
            $$.filter(v => v !== ws || offing.$(o => {
                v.close();
                o[0].send(m);
                o[0].close();
                o.shift();
            }) && false))
        }))
    }))._;
})();