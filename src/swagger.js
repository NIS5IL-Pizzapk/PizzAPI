const swaggerAutogen = require("swagger-autogen")();

swaggerAutogen("src/swagger_output.json", ["src/server.js"]);
