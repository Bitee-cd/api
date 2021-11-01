fetch('https://jsonplaceholder.typicode.com/posts')
 .then(response => response.json())
 .then((data) =>{
     console.log(data);
     let postsBlock = document.getElementById('postLayout')
     let html = "";
     data.forEach(e => {
         html +=`
         <div class="col-md-4 mb-3">
         <a href="post.html" class="text-decoration-none text-black" onclick="getId(${e.id})">
         <div class="card h-100">
             <div class="card-body">
                <div class="d-flex justify-content-end">
                    <h6 class="text-danger">${e.id}</h6>
                </div>
                   <h5 class="title mb-3">${e.title}</h5>
                   <p><i>${e.body}</i></p>
             </div>
         </div>
         </a>
     </div>
         `
     });
     postsBlock.innerHTML = html;
 });

 function getId(num) {
    localStorage.setItem('clickedId', num );
}

