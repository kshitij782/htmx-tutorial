export const loginForm = () => /*html*/`
 <div class="container">
  <form hx-post="/register" hx-swap="beforeend" hx-target=".container">

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" class="input-field">
    
    <label for="password">Password</label>
    <input type="text" id="password" name="password" placeholder="Enter your password" class="input-field">
  
     <button type="submit">Submit</button>
</div>
`