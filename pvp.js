(() => {
  'use strict';
  const _ = require("losand");
  const {offing, ansing} = {offing: _([]), ansing: _([])};
  module.exports = (dir, file, port, ip) => _(require('http').createServer(
    _(require('express'))
    .map($ => ({
      app: $(),
      "static": $.static
    }))
    .map($ => 
      _($.app).$(a => {
        a.use(require('cors')());
        a.use($.static(dir));
        a.set('view options', {layout: false});
        a.get('/', (req, res) => res.status(200).render(file));
      })._
    )._
  ))
  .$(sv => _(new (require('ws').Server)({server : sv})).on({
    connection: ws => _(
      offing._.length <= 0
      ? offing.$(a => a.push(
        _(ws)
        .$(s => s.send(_(false).json))
        .on({
          'message': sdp => _(ws).draw({sdp})
        })._
      ))
      : ansing.$(a => a.push(
        _(ws)
        .$(s => s.send(offing._[0].sdp))
        .on({
          'message': m => ansing.$(
            a => (
              _(a.findIndex(v => v === ws))
              .map(i => a.splice(i, 1))
              .$(s => s[0].close()),
              offing.$(
                o => _(
                  o.shift()
                )
                .been
                .send(m)
                .close()
              )
            )
          )
        })._
      ))
    )
    .$(a => _(ws).on({
      'close': m => a.map($ => $.filter(v => v !== ws))
    }))
  }))._.listen(port || process.env.PORT, ip || process.env.IP);
})();
