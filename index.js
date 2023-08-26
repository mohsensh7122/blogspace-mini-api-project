/**
 Challenge:

 With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.
 
 Hints: 
 * Create a `div` in the HTML file to store these items
 * Loop over the items creating a string of HTML elements you 
   can then put into the div with `innerHTML`
 */

const postsEl = document.getElementById('posts');

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArray = data.slice(0, 5);
        let html = ``;
        for (let post of postsArray){
            html += `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <hr />
            `
        }
        postsEl.innerHTML = html;
    })