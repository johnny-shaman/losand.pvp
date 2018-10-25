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
  <script src="https://cdn.jsdelivr.net/npm/losand@1.1.0/losand.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dsand@0.2.0/dsand.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dsand@0.2.0/pvp.js"></script>
  <script>
    _($.role).draw({
      establish (c) {
        // Anything do when connection Established
      }
    })
    PvP();
  </script>
~~~

~~~bash
node server.js
~~~

and access the two clients;
