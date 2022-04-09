import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import { apiSpecification } from "./api-specification";

export const setupSwagger = (app: Router): void => {
  app.use("/docs/api", swaggerUi.serve, swaggerUi.setup(apiSpecification));

  app.get("/openapi-spec.json", (req, res) => {
    res.send(apiSpecification);
  });
};
