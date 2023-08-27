const postsEl = document.getElementById('posts');
const postBtn = document.getElementById('post-btn');

let postsArray = [];

function renderPosts() {
    let html = ``;
    for (let post of postsArray) {
        html += `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <hr />
            `
    }
    postsEl.innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5);
        renderPosts();
    })



postBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const newPost = {};
    newPost.title = document.getElementById('post-title').value;
    newPost.body = document.getElementById('post-body').value;
    console.log(newPost);

    const options = {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post);
            renderPosts();
        })
})