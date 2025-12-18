const listaPosts = document.querySelector("#listaPosts");
/*
const httprequest = new XMLHttpRequest();

httprequest.addEventListener("readystatechange", () => {
      console.log("readyState ->", httprequest.readyState);
});

httprequest.open('GET', 'https://jsonplaceholder.typicode.com/posts');
httprequest.send();

//console.log(httprequest);
let posts;

httprequest.onreadystatechange = function() {
    if (httprequest.readyState === 4 && httprequest.status === 200) {
        posts = JSON.parse(httprequest.response);
        exibePosts();
        //console.log(httprequest.response);
    }
}
*/

let posts;

/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        exibePosts();
    })
*/

/*
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
*/

/*
fetch('https://jsonplaceholder.typicode.com/posts/2', {
    method: 'PUT',
    body: JSON.stringify({
        title: 'foo-updated',
        body: 'bar-updated',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
*/

fetch('https://jsonplaceholder.typicode.com/posts/2', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'foo-updated2',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))

function exibePosts() {
    setTimeout(() => {
        let saida = "";
        posts.forEach(post => {
            saida += `<li> ${post.title} </li>
            <li> ${post.body} </li> <hr></hr>`;
        });
        listaPosts.innerHTML = saida;
    }, 3000);
}