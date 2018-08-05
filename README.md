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
    <script src="https://cdn.jsdelivr.net/npm/losand@0.3.2/losand.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dsand@0.0.3/dsand.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dsand@0.0.3/pvp.js"></script>
    <script>
        const peer = PvP().then(c => _(c).$(c => c.send("hello")).on({message: (e) => console.log(e.data)}));
    </script>
~~~

~~~bash
node server.js
~~~

and access the two clients;
