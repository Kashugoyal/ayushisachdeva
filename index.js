function generatePosts() {

    fetch('assets/data.json')
        .then(data => data.json())
        .then((data) => {
            const posts = data.posts;
            var posts_div = document.getElementById('posts');
            posts.forEach(post => {
                const post_html = `<div class="card">
                                <img src=${'assets/images/' + post.img_url} alt="Image">
                                <div class="container">
                                    <h4><b>${post.date}</b></h4>
                                    <p>${post.description}</p>
                                </div>
                            </div>`
                posts_div.innerHTML += post_html;
            });

        })

}

window.addEventListener('load', generatePosts, false);