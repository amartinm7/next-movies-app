# next-connection
https://www.npmjs.com/package/next-connect

```bash
npm install next-connect
// or
yarn add next-connect
```

```javascript
// pages/api/hello.js
import nc from "next-connect";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(someMiddleware())
  .get((req, res) => {
    res.send("Hello world");
  })
  .post((req, res) => {
    res.json({ hello: "world" });
  })
  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export default handler;
```

