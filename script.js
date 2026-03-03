function publishPost(){

let title=document.getElementById("title").value;
let short=document.getElementById("short").value;
let image=document.getElementById("image").value;

let posts=JSON.parse(localStorage.getItem("posts")||"[]");

posts.push({title,short,image});

localStorage.setItem("posts",JSON.stringify(posts));

alert("خبر نشر شد");
}

window.onload=function(){

let posts=JSON.parse(localStorage.getItem("posts")||"[]");

let data=JSON.parse(localStorage.getItem("posts")||"[]");

let html="";

data.forEach(p=>{
html+=`

<div class="post">
<h2>${p.title}</h2>
<img src="${p.image}">
<p>${p.short}</p>
</div>
`;
});document.getElementById("posts").innerHTML=html;
}
