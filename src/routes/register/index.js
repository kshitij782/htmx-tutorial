import { register } from "../../controllers/register/index.js"

export const registerRoutes = (app) => {
    app.post("/register", register)
}