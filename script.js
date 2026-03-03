const ADMIN_PASS = "123456";

function publishPost(){

let pass = document.getElementById("pass").value;

if(pass !== ADMIN_PASS){
alert("پسورد غلط");
return;
}

let title = document.getElementById("title").value;
let short = document.getElementById("short").value;
let full = document.getElementById("full").value;
let image = document.getElementById("image").value;

let posts = JSON.parse(localStorage.getItem("posts")||"[]");

posts.push({title,short,full,image});

localStorage.setItem("posts",JSON.stringify(posts));

alert("خبر نشر شد");
}

window.onload = function(){

let posts = JSON.parse(localStorage.getItem("posts")||"[]");

let html="";

let data = JSON.parse(localStorage.getItem("posts")||"[]");

data.forEach(p=>{
html += `

<div class="post">
<h2>${p.title}</h2>
<img src="${p.image}">
<p>${p.short}</p>
<a href="#">بیشتر</a>
</div>
`;
});document.getElementById("posts").innerHTML = html;
  }
