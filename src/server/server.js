const next = require("next");
const express = require("express");
const compression = require("compression");
const router = require("../routes");
const port = 3000;
const isDev = process.env.NODE_ENV !== "production";
const app = next({ dir: "./src", dev: isDev });
const routerHandler = router.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(compression({ threshold: 0 }));
  server.use(routerHandler);

  server.listen(process.env.PORT || 3000, null, (err) => {
    if (err) {
      return console.error(err.message);
    }

    return console.log(port);
  });
});
