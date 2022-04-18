const form = document.querySelector("form");

const btn = document.querySelector("#btn")

const createPost = async(e)=>{

    e.preventDefault();
    
    const doc = {
    title : form.title.value,
    body: form.body.value,
    likes : 0
}

if(!doc.title.length===0 && !doc.body.length===0)
{
    await fetch("http://localhost:3000/posts",
{
    method:"POST",
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
});

window.location.replace("/");
}
else{
    alert(" Title and Body is required to make a blog")
}
}

btn.addEventListener("click",createPost);