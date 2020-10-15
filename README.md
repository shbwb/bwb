# blog.js
A clean blog builder
# Help
* [Usage](https://github.com/crqblog/blog.js/#Usage)

* [Navbar](https://github.com/crqblog/blog.js/#Navbar)

* [Sidenav](https://github.com/crqblog/blog.js/#Sidenav)
# Usage
```javascript
<link href="https://cdn.jsdelivr.net/gh/crqblog/blog.js@v.1.1.4/css/style.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/crqblog/blog.js@v.1.1.4/js/plugins.js"></script>
```
You need to add these two urls to use **blog.js**
## Navbar
You can change the links in the code below
```html
<div class="navbar">
  <a href="http://github.com">GitHub</a>
</div>
```
## Sidenav
These code may help you.Try to change the links
```html
<div id="sidenav" class="sidenav">
  <a href="jsvascript:void(0)" class="closebtn" onclick="closenav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
  </div>
<span style="font-size:30px;cursor:pointer" onclick="opennav()">&#9776;</span>
```
