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
  <form id="register-form" hx-post="/register" hx-swap="beforeend" hx-target=".container">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" class="input-field"
    onkeyup="this.setCustomValidity('')"
    hx-on:htmx:validation:validate = "if(this.value === ''){
    this.setCustomValidity('Please enter name')
    htmx.find('#example-form').reportValidity()
    }"
    >

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" class="input-field">
    
    <label for="password">Password</label>
    <input type="text" id="password" name="password" placeholder="Enter your password" class="input-field">
  
     <button type="submit">Submit</button>
</div>


<!-- triggers -->

<div class="book-list">
  <button hx-get="/books" hx-swap="beforeend" hx-target=".book-list" hx-trigger="mouseenter once">show books</button>
</div>


<!-- on change of input -->
<input type="text" name="q"
    hx-get="/books"
    hx-trigger="keyup changed delay:500ms, mouseout"   
    hx-target="#search-results"
    placeholder="Search...">
<div id="search-results"></div>

<!-- click while holding the ctrl key -->
<div hx-get="/books" hx-trigger="click[ctrlKey]" hx-swap="outerHTML">Click me</div>

<!-- <div hx-get="/books" hx-trigger="load delay:5s" hx-swap="outerHTML">Click me</div> -->


<!-- indicatord -->

<button hx-get="/demo" hx-trigger="click" hx-indicator="#loading-indicator">
  Click Me (indicators)
</button>
<div id="loading-indicator" style="display: none;">Loading...</div>

<script>
  document.addEventListener('htmx:beforeRequest', function (event) {
    document.getElementById('loading-indicator').style.display = 'block';
  });

  document.addEventListener('htmx:afterRequest', function (event) {
    document.getElementById('loading-indicator').style.display = 'none';
  });
</script>


<!-- cancel req -->

<div>
<button id="req-btn" hx-get="/demo">Issue req</button>
<button onclick="htmx.trigger('#req-btn', 'htmx:abort')" >cancel req</button>
</div>
</body>
</html>
`;