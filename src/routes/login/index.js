import { loginForm } from "../../../views/login"

 
export const registerRoutes = (app) => {
    app.get("/login", loginForm())
}