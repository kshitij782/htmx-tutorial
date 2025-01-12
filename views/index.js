export const htmlTemplate = () => /*html*/`
<html>
<head>
    <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
            <!-- <div class="book-list">
            <button hx-get="/books" hx-swap="beforeend" hx-target=".book-list">show books</button>
            </div> -->

 <div class="container">
  <form hx-post="/register" hx-swap="beforeend" hx-target=".container">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" class="input-field">

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" class="input-field">
    
    <label for="password">Password</label>
    <input type="text" id="password" name="password" placeholder="Enter your password" class="input-field">
  
     <button type="submit">Submit</button>
</div>
</body>
</html>
`;