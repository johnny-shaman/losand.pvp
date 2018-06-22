# losand.pvp
## It's a usecase of losand

~~~
npm i losand.pvp
~~~

### import server.js file

~~~javascript
require("losand.pvp")(__dirname + '/public', 'index.html');
~~~

### Creat a public folder and make in a index.html
You use it tags

~~~html
    <script src="https://cdn.jsdelivr.net/npm/losand@0.1.1/losand.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/losand@0.1.1/dsand.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/losand.pvp@0.1.3/pvp.js"></script>
    <script>
        const peer = PvP(uri, ssl).then(c => peer = c.$(c => c.send("hello")).on({message: (e) => console.log(e.data)}));
    </script>
~~~

~~~
node server.js
~~~

and access the two clients;
