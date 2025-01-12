import { registerRoutes } from "./register/index.js"

export const wrapRoutes = (app) => {
    registerRoutes(app)
}