# blog.js
一个简洁的博客网站建设器
# 语言
[English](https://github.com/crqblog/blog.js/)

# 开始
```html
<link href="https://cdn.jsdelivr.net/gh/crqblog/blog.js@v.1.2.4/css/style.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/gh/crqblog/blog.js@v.1.2.4/css/plugins.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/crqblog/blog.js@v.1.2.4/js/plugins.js"></script>
```
你需要添加这些代码来使用 **blog.js**
## 导航栏
尝试更换链接。
```html
<div class="navbar-default">
  <a href="http://github.com">GitHub</a>
</div>
```
## 侧边栏
这段代码或许可以帮您，试着换去链接，
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
## 消息提示
```html
<div class="info" style="color:grey;" onclick="info()">jyzjyzjy;
  <span class="infotext" id="info">ZJYZJYZJY!</span>
</div>
```
## 页面
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

**例子**
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
## 计时器
```html
<script src="https://cdn.jsdelivr.net/gh/crqblog/blog.js@v.1.2.3/js/timer.js"></script>
```
