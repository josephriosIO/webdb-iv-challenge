const server = require("./server");

const port = env.process.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** running on port ${port}***\n`);
});
