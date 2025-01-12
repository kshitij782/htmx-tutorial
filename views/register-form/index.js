export const registerForm = () => /*html*/`
<!DOCTYPE html>
<html>


<style>
.input-field {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type=submit]:hover {
  background-color: #45a049;
}

.container {
  width: 400px;  
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
<body>

<div class="container">
  <form>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" class="input-field">

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" class="input-field">
    
    <label for="password">Password</label>
    <input type="text" id="password" name="password" placeholder="Enter your password" class="input-field">
  
    <!-- <input type="submit" value="Submit"> -->
     <button type="submit">Submit</button>
</div>

</body>
</html>

`