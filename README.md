# losand.pvp
## It's a usecase of losand

~~~
npm i losand.pvp
~~~

### import server.js file

~~~javascript
const pvp = require("losand.pvp");
pvp(__dirname + '/public', 'index.html').listen(process.env.PORT, process.env.IP);
~~~

### Creat a public folder and make in a index.html
You use it tags

~~~html
    <script src="https://cdn.jsdelivr.net/npm/losand@0.0.31/losand.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/losand@0.0.31/dsand.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/losand.pvp@0.0.13/pvp.js"></script>
    <script>
        const peer = PvP(uri, ssl).then(c => peer = c.$(c => c.send("hello")).on({message: (e) => console.log(e.data)}));
    </script>
~~~

~~~
node server.js
~~~

and access the two clients;
