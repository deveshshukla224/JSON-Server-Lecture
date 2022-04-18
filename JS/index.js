const container = document.querySelector(".blogs");
const searchFormContainer = document.querySelector(".search-container");
const renderPosts = async (term)=>{
let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";
if(term){
    uri +=`&q=${term}`;
}
const res = await fetch(uri);
const posts = await res.json();

let template = '';
posts.forEach(post => {
    template += `
    <div class="post">
    <h2>${post.title}</h2>
    <p><small>${post.likes} Likes</small></p>
    <p>${post.body.slice(0,205)}</p>
    <a href="/details.html?id=${post.id}">Read more</a>
    </div>
    `
})
container.innerHTML= template;
}

window.addEventListener('DOMContentLoaded', ()=>renderPosts());

searchFormContainer.addEventListener("submit",(e)=>{
    e.preventDefault();
    renderPosts(searchFormContainer.term.value.trim());
})

