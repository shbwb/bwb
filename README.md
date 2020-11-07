# Basic webpage builder
A **b**asic **w**ebpage **b**uilder

# Usage
```html
<link href="https://cdn.jsdelivr.net/gh/shbwb/bwb@v.1.2/css/style.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/shbwb/bwb@v.1.2/js/plugins.js"></script>
```

You need to add these 2 urls to use **bwb**

# Navs
## Navbar
You can change the links in the code below.(tip: you can change the command "dark" to "light".)
```html
<div class="navbar-theme-dark">
  <a href="http://github.com">GitHub</a>
</div>
```
## Sidenav
These codes may help you.Try to change the links
```html
<div id="sidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closenav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
  </div>
<span style="font-size:30px;cursor:pointer" onclick="opennav()">&#9776;</span>
```

<hr />

# Features
## Type box
The css box(you can change "on" to "off")
```html
<input focus="on" placeholder="xxx">
```
## Back Button
```html
<button  onclick="goback()">Back</button>
```
Try to change the key word "goback" to "gofoward"
## Snackbar
Before you use,add this to your html file(body tag)
`<body onload="snackbar()">`
  
```html
<div id="snackbar">Welcome<strong> to </strong>use！</div>
```
## Information
```html
<div class="info" style="color:grey;" onclick="info()">Front
  <span class="infotext" id="info">Back!</span>
</div>
```

## Timer
```html
<script src="https://cdn.jsdelivr.net/gh/crqblog/blog.js@v.1.2.5/js/timer.js"></script>
```

## Mask
The mask
```html
<span class="mask">xxx</span>
```

<hr />

# Design
## Sticky

You can add this code to everywhere.
```html
<div class="sticky">xxx</div>
```

## Small
```html
<small>xxx</small>
```

## Page
**header**
```html
<div class="header text-center">
  ...
</div>
```
you should add "text-center".

**row**
```html
<div class="row">
  ...
</div>
```

**container**
```html
<div class="container">
  ...
</div>
```

**inbox**
```html
<div class="inbox">
  ...
</div>
```

**readbox**
highlight box
```html
<div class="inbox">
  ...
</div>
```
**e.g.**

```html
<div class="container">
      <h2>About us:</h2>
    <p>Author:</p></br>
<p>The project was build by Chen Ruiqi(crq)<p>
      <script src="https://cdn.jsdelivr.net/gh/crqblog/blog.js@v.1.2.5/js/timer.js"></script>
   <div class="inbox">
      <h2>Friends</h2>
      <h5>ZJY:</h5>
      <div class="fakeimg" style="height:200px;">no photo</div>
    </div>
  </div>
```
## Bar
```html
<div class="bar bar-warning">
...
</div>
```
You can change the "warning" command to "done" or "information"

<hr />

# License
[MIT](https://github.com/crqblog/bwb/blob/main/LICENSE)

<hr />

# [Support](https://bwb.js.org/pages/support/)

<!-- The first backup branch -->
