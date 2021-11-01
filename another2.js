const post =  localStorage.getItem('clickedId')

const url = `https://jsonplaceholder.typicode.com/posts/${post}`
fetch(url)
.then(response => response.json())
.then((data) => {
    console.log(data);
    let postsBlock = document.getElementById('posts-layout')
    let html = `<div class="">
        <div class=" text-center p-5">
        <h4 class="text-danger">${data.id}</h4>
              <h2 class="title mb-3">${data.title}</h5>
              <p><i>${data.body}</i></p>
        </div>
        <a href="index.html"><button class='btn btn-secondary'>Back</button></a>
   
</div>`
postsBlock.innerHTML = html;
})