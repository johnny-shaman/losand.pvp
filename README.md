# losand.pvp
## It's a usecase of losand

~~~bash
npm i losand.pvp
~~~

### import server.js file
~~~javascript
require("losand.pvp")(__dirname + '/public', 'index.html');
~~~

### Creat a public folder and make in a index.html
You use it tags
~~~html
    <script src="https://cdn.jsdelivr.net/npm/losand@0.1.8/losand.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/losand@0.1.8/dsand.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/losand.pvp@0.1.8/pvp.js"></script>
    <script>
        const peer = PvP().then(c => _(c).$(c => c.send("hello")).on({message: (e) => console.log(e.data)}));
    </script>
~~~

~~~bash
node server.js
~~~

and access the two clients;
