# blog.js
A clean blog builder
# Language
[中文简体](https://github.com/crqblog/blog.js/tree/main/README.zh.md)

# Usage
```html
<link href="https://cdn.jsdelivr.net/gh/crqblog/blog.js@v.1.2.4/css/style.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/gh/crqblog/blog.js@v.1.2.4/css/plugins.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/crqblog/blog.js@v.1.2.4/js/plugins.js"></script>
```

You need to add these 3 urls to use **blog.js**

## Navbar
You can change the links in the code below
```html
<div class="navbar-default">
  <a href="http://github.com">GitHub</a>
</div>
```
## Sidenav
These codes may help you.Try to change the links
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
## Information
```html
<div class="info" style="color:grey;" onclick="info()">jyzjyzjy;
  <span class="infotext" id="info">ZJYZJYZJY!</span>
</div>
```
## Page
**row**
```html
<div class="row-default">
  ...
</div>
```

**side**
```html
<div class="side-default">
  ...
</div>
```

**main**
```html
<div class="main-default">
  ...
</div>
```

**e.g.**
```html
<div class="row-default">
  <div class="side-default">
      <h2>xxxx</h2>
      <p>yyyyyyyy</p>
<p>dddddddd<strong>zzz</strong><p>
  </div>
  <div class="main-default">
      <h2>Friends</h2>
      <h5>yyy:</h5>
      <div class="fakeimg" style="height:200px;">no photo</div>
      <p>rrrr<strong>tt</strong>a<strong>vvv</strong><p>
    </div>
</div>
```

## Timer
```html
<script src="https://cdn.jsdelivr.net/gh/crqblog/blog.js@v.1.2.3/js/timer.js"></script>
```
