#!/usr/bin/env node

/*
in the package.json:

  "bin": {
    "say-me-cms": "bin/x-cli.js"
  },

when we install the artifact globally we are creating the link between this file bin/x-cli.js and the symbolic link
say-hello-category-path, stored in the /usr/local/bin/say-me-cms
In this way we can call it as
say-me-cms create GetLastest
and it will works
*/

// only calls to the index.js
require('../index.js')
