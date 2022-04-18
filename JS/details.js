const id = new URLSearchParams(window.location.search).get("id");
const details = document.querySelector(".details");
const renderDetail = async ()=>{
    let res = await fetch("http://localhost:3000/posts/"+ id);
    let post =  await res.json();
    let template = `
    <h1> ${post.title} </h1>
    <p> ${post.body} </p>
 `

details.innerHTML = template};

window.addEventListener('DOMContentLoaded',()=>renderDetail());
