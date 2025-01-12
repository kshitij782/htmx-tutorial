import express from "express";
import { htmlTemplate } from "./views/index.js";
import { bookData } from "./views/bookData.js";
import { connect } from "./src/helpers/connect.js";
import { wrapRoutes } from "./src/routes/wrapRoutes.js";
import bodyParser from "body-parser";
connect();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

app.use(express.json())

const data = [
    {
        id: 1, 
        title: "book 1",
        author: "author 1"
    },
    {
        id: 2, 
        title: "book 2",
        author: "author 2"
    }
]

app.get('/', (req, res) => {
    res.send(htmlTemplate())
})

// app.get("/success", (req, res) => {
//     res.send(`
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Registration Success</title>
//         <style>
//           body {
//             font-family: Arial, sans-serif;
//             background-color: #f4f4f9;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//             margin: 0;
//           }
//           .success-container {
//             text-align: center;
//             background-color: #ffffff;
//             padding: 30px;
//             border-radius: 10px;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//             max-width: 400px;
//             width: 90%;
//           }
//           h1 {
//             color: #4CAF50;
//             margin-bottom: 10px;
//           }
//           p {
//             font-size: 16px;
//             color: #555;
//             margin: 10px 0;
//           }
//           .btn {
//             display: inline-block;
//             margin-top: 20px;
//             padding: 10px 20px;
//             color: white;
//             background-color: #4CAF50;
//             text-decoration: none;
//             border-radius: 5px;
//             transition: background-color 0.3s ease;
//           }
//           .btn:hover {
//             background-color: #45a049;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="success-container">
//           <h1>🎉 Registration Successful!</h1>
//           <p>Thank you for signing up. We're excited to have you on board!</p>
//           <p>Start exploring our platform by clicking the button below:</p>
//           <a href="/" class="btn">Go to Homepage</a>
//         </div>
//       </body>
//       </html>
//     `);
//   });
  

app.get('/books', (req, res) => {
    res.status(200).send(bookData(data))
})
wrapRoutes(app);

app.listen(8080, () => {
    console.log("Server is running on port", 8080)
})