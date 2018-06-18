/*
    global
        _
        $
        RTCSessionDescription
        RTCPeerConnection
        body
        iframe
*/

const PvP = _((
    uri,
    ssl,
    term = {},
    l = [
        {url: "stun:stun.l.google.com:19302"},
        {url: "stun:stun3.l.google.com:19302"},
    ]
) => new Promise((res = (v) => v) => _(PvP).$(f => _({
        message (e) {
            e.data.json._ ?
            PvP.rtc.$(r => {
                r.setRemoteDescription(
                    new RTCSessionDescription(e.data.json._)
                );
                r.createAnswer()
                .then(v => r.setLocalDescription(
                    new RTCSessionDescription(v)
                ), (e) => e);
            }) :
            PvP.rtc.$(r => {
                $(r.createDataChannel("talk"))
                .on(this.datachannel, "open");
                r.createOffer()
                .then(v => r.setLocalDescription(
                    new RTCSessionDescription(v)
                ), (e) => e);
            });
        },
        icecandidate (e) {
            e.candidate && PvP.rtc.$(
                r => PvP.signaling._.send(
                    _(r.localDescription).draw(term).json
                )
            );
        },
        datachannel (e) {
             _(this)
                .off(f.signaling.$($ => $.close())._, "message")
                .off(f.rtc._, "icecandidate", "datachannel")
            .$(o => _(o).draw({
                _: (
                    e.target === f.rtc._ ?
                    _(e.channel) :
                    _($(e.target).off(o.datachannel, "open").n)
                )
            }));
            res(PvP._);
        },
    }).$(o => {
        body.$(
            iframe
            ._({
                src: `${ssl ? "https" : "http"}://${uri}`
            })
            .css({
                width: "1px",
                height: "1px",
                display: "block",
                border: "none"
            })
        );
        f.draw({
            signaling: _($(new WebSocket(`${ssl ? "wss" : "ws"}://${uri}`)).on(o, "message").n),
            rtc : _($(new RTCPeerConnection({iceServers: l})).on(o, "icecandidate", "datachannel").n),
            _: undefined
        });
    })
)))._;

