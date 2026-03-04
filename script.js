function publishPost(){

let title=document.getElementById("title").value;
let short=document.getElementById("short").value;
let image=document.getElementById("image").value;

if(title=="" || short=="" || image==""){
alert("تمام فیلدها را پر کنید");
return;
}

let posts=JSON.parse(localStorage.getItem("posts")||"[]");

posts.unshift({
title:title,
short:short,
image:image
});

localStorage.setItem("posts",JSON.stringify(posts));

alert("✅ خبر نشر شد");

window.location="index.html";
}

window.onload=function(){

let posts=JSON.parse(localStorage.getItem("posts")||"[]");

let html="";

posts.forEach(p=>{
html+=`

<div class="post">
<h2>${p.title}</h2>
<img src="${p.image}">
<p>${p.short}</p>
</div>
`;
});let container=document.getElementById("posts");
if(container){
container.innerHTML=html;
}

}
