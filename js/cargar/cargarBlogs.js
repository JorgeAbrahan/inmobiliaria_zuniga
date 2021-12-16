/* Se obtiene el contenedor de los blogs */
let contenedorBlogs = document.querySelector('.blogs-container');

db.collection('BLOGS').get().then(blogs => {
    blogs.forEach(blog => {
        /* Se obtiene con el id del blog la imagen del blog */
        storageRef.child(`img/blogs/${blog.id}`).getDownloadURL().then(url => {
            let contenedorBlog = document.createElement('div');
            contenedorBlog.className = 'blog';
            contenedorBlog.id = blog.id;
            contenedorBlog.onclick = (e) => {
                open(`/blogs/blog#${e.target.id}`, '_self');
            }


            /* Se establecen los detalles del elemento de imagen del blog */
            let imagenBlog = document.createElement('img');
            imagenBlog.className = 'blog__img';
            imagenBlog.src = url;
            imagenBlog.alt = blog.data().titulo;
            contenedorBlog.appendChild(imagenBlog);

            /* Se establecen los detalles del elemento de titulo del blog */
            let tituloBlog = document.createElement('h3');
            tituloBlog.className = 'blog__title';
            tituloBlog.innerText = blog.data().titulo;
            contenedorBlog.appendChild(tituloBlog);

            /* Se mete el contenedor del blog dentro del fragmento contenedor de los blogs */
            contenedorBlogs.appendChild(contenedorBlog);
        })
    })
})