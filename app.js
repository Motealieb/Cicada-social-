let posts = [];

function createPost(){

    const input = document.getElementById("postInput");

    if(input.value.trim() === ""){
        alert("Write something first");
        return;
    }

    const post = {
        id: Date.now(),
        user: "Cicada User",
        content: input.value,
        likes: 0
    };

    posts.unshift(post);

    input.value = "";

    renderPosts();
}

function likePost(id){

    posts = posts.map(post => {

        if(post.id === id){
            post.likes++;
        }

        return post;
    });

    renderPosts();
}

function deletePost(id){

    posts = posts.filter(post => post.id !== id);

    renderPosts();
}

function renderPosts(){

    const feed = document.getElementById("feed");

    feed.innerHTML = "";

    posts.forEach(post => {

        feed.innerHTML += `
        
        <div class="post">

            <h3>${post.user}</h3>

            <p>${post.content}</p>

            <div class="actions">

                <button onclick="likePost(${post.id})">
                    ❤️ ${post.likes}
                </button>

                <button onclick="deletePost(${post.id})">
                    🗑 Delete
                </button>

            </div>

        </div>
        
        `;
    });
}
