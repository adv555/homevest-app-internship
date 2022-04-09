import swaggerJSDoc from 'swagger-jsdoc';

export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Homevest API",
      description: '<a href="/openapi-spec.json">OpenAPI specification</a>',
      version: "1.0.0",
    },
  },
  apis: ["./src/api/*/*.api.ts"],
};

export const apiSpecification = swaggerJSDoc(options);

Object.assign(apiSpecification, {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  tags: [
    {
      name: "Auth",
    },
    {
      name: "User",
    },
    {
      name: "Investor",
    },
    {
      name: "Company",
    },
    {
      name: "Estate",
    },
    {
      name: "Appartment",
    },
    {
      name: "Investment",
    },
  ],
})
