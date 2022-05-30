![X-Spring-Cli](./_media/node-js.png)

# X-CMS-Cli

Download and install the cli tool.
For doing that locally 

```$bash
npm install
npm link
```
after that you can create the controller and services from the command line
```$bash
say-me-cms create GetLastest
```
```$bash
 node index.js create GetLastest
 node index.js create GetAiringToday
 node index.js create GetTvShowDetails
 node index.js create GetPeopleDetails
 node index.js create GetPopularPeople
 node index.js create SearchMultiEntities
```
```$bash
 npm run cli create -- GetLastest
```


## developing command line tools
- use the chalk lib to colorize the logs
- use the commander lib to create the command options
- use the npm link to create a symbolic link stored in the /usr/local/bin/say-hello-cms.
- use the `npm install --save-dev jest babel-jest @babel/core @babel/preset-env` or `jest --init`

Everytime you run 'say-hello-cms' you executing the cli.


![X-Spring-Cli](./_media/middy.png)
