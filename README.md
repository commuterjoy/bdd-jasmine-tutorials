
Install
-------

Get the code,

```
git@github.com:commuterjoy/bdd-jasmine-tutorials.git
```

And the Jasmine runner and the express MVC framework,,

```
npm install jasmine-node express
```

Run the tests
-------------

Some of the test can be run in node,

```
jasmine-node --verbose tests/1
```

And some of them in the browser,

```
node server.js
open http://localhost:3000/
```

Tutorials
---------

1. Basics - describe, it, expect
2. Basics - beforeEach
3. Pattern for testing AMD modules
4. Three patterns for testing asynchronous code 
5. Simple DOM interactions 
6. Dates
7. Custom matchers
8. Pattern for inter-module communication (via a mediator)

