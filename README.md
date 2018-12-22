# losand.pvp
## It's a usecase about ...
- [\_(losand).\_](https://www.npmjs.com/package/losand) 
- [$(dsand).$()](https://www.npmjs.com/package/dsand)

~~~bash
npm i losand.pvp
~~~

### import server.js file
~~~javascript
require("losand.pvp")(__dirname + '/public', 'index.html', port, ip);
//port and ip is opthional
~~~

### Creat a public folder and make in a index.html
You use it tags
~~~html
  <script src="https://cdn.jsdelivr.net/npm/losand@1.5.0/losand.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dsand@0.6.5/dsand.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dsand@0.6.5/pvp.js"></script>
  <script>
    _($.role).draw({
      pvpCE (channel) {
        /* Anything do when connection Established
           Channel is WebRTC Data Channel 
        */
        $(channel).class("hear").on("message");
      },
      hear (e) {
        alert(e.data);
      }
    })
    PvP()()();
  </script>
~~~

~~~bash
node server.js
~~~

and access the two clients;

## Usage on BrowserSide PvP function
```javascript
PvP(
  // 1st Negotiation info
  {
  blockedUserList: [],
  gameRating: 1000,
  friendOnry: true
})(
  // 2nd Custom Origin
  "https://test.io/"
)(
  // 3rd STUN Address or TURNServer Authentication info Object
  "stun:l.google...",
  {
    url: "turn:...",
    credential: "...",
    username: ""
  }
)

// $.pvp get's WebRTC DataChannel Object
$.pvp.send("hello");
```
