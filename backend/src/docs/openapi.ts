import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.4", // as of 20.10.2026
    info: {
      title: "schnack Backend API",
      version: "0.0.1",
    },
  },
  apis: ["./src/routes/*Routes.ts"], // files containing annotations as above
};

const openapiSpec = swaggerJSDoc(options);

export default openapiSpec;
