const id = new URLSearchParams(window.location.search).get("id");
const details = document.querySelector(".details");
const delete_button = document.querySelector(".delete_button")
const renderDetail = async ()=>{
    let res = await fetch("http://localhost:3000/posts/"+ id);
    let post =  await res.json();
    let template = `
    <h1> ${post.title} </h1>
    <p> ${post.body} </p>
 `

details.innerHTML = template};

window.addEventListener('DOMContentLoaded',()=>renderDetail());

delete_button.addEventListener("click", async()=>{
    const res = await fetch("http://localhost:3000/posts/" + id, {
        method:"DELETE"
    })
    window.location.replace("/")
})
