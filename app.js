function changeMode(e) {
    var myBody = document.body
    if (!myBody.classList.contains("light-mode")) {
        myBody.classList.add("light-mode")
        console.log("light mode on");
    } else {
        myBody.classList.remove("light-mode")
        console.log("Dark mode on");
    }
}

// SIGN UP PAGE
function getDetails() {
    var name = document.getElementById("signUp-name").value
    var email = document.getElementById("signUp-email").value
    var password = document.getElementById("signUp-password").value

    console.log(name, email, password);

    var myCard = document.getElementById("myCard");
    var form = document.getElementById("form");

    form.style.display = "none";

    myCard.innerHTML = `
<div class="id-card">
    <div class="id-header">
        <div class="badge">PRO MEMBER</div>
        <div class="avatar-icon">✨</div>
    </div>
    
    <div class="id-body">
        <h2 class="user-title">${name}</h2>
        
        <div class="info-box">
            <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
            </div>
            <div class="info-row">
                <span class="label">Password:</span>
                <span class="value">${password}</span>
            </div>
        </div>
    </div>

    <div class="id-footer">
        <span>Status: Active</span>
        <span>Secure ID</span>
    </div>
</div>`;
}

// LOGIN PAGE
function logIn() {
    var logInEmail = document.getElementById("logIn-email").value
    var logInPassword = document.getElementById("logIn-password").value

    console.log(logInEmail, logInPassword);

    var myCard = document.getElementById("myCard");
    var form = document.getElementById("form");

    form.style.display = "none";
    myCard.style.display = "block";

    myCard.innerHTML = `
<div class="id-card">
    <div class="id-header">
        <div class="badge">PRO MEMBER</div>
        <div class="avatar-icon">✨</div>
    </div>
    
    <div class="id-body">        
        <div class="info-box">
            <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">${logInEmail}</span>
            </div>
            <div class="info-row">
                <span class="label">Password:</span>
                <span class="value">${logInPassword}</span>
            </div>
        </div>
    </div>

    <div class="id-footer">
        <span>Status: Active</span>
        <span>Secure ID</span>
    </div>
</div>`;
}

// POST PAGE
function deletePost() {
    var card = event.target.parentNode.parentNode.parentNode
    card.remove()
}

function editPost() {
    var card = event.target.parentNode.parentNode.parentNode
    var title = card.children
}

function post() {
    var date = new Date()
    var title = document.getElementById("title")
    var desc = document.getElementById("desc")

    if (title.value.trim() && desc.value.trim()) {
        var posts = JSON.parse(localStorage.getItem("allPosts")) || [];
        
        var newPost = {
            title: title.value,
            desc: desc.value,
            date: date.toLocaleDateString()
        };

        posts.push(newPost);
        localStorage.setItem("allPosts", JSON.stringify(posts));

        window.location.href = "index.html";

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Title and Discription can't be empty!",
        });
    }
}

window.onload = function() {
    var postsContainer = document.getElementById("postContainer");
    
    if (postsContainer) {
        var savedPosts = JSON.parse(localStorage.getItem("allPosts")) || [];

        postsContainer.innerHTML = "";
        for (var i = 0; i < savedPosts.length; i++) {
            if (savedPosts[i].title && savedPosts[i].desc) {
                postsContainer.innerHTML += `
                    <div class="mb-3">
                        <div class="card">
                            <div class="card-header headingColor">@blog</div>
                            <div class="card-body color">
                                <div class="title">
                                    <b>${savedPosts[i].title}</b>
                                </div>
                                <figure>
                                    <blockquote class="blockquote">
                                        <p>${savedPosts[i].desc}</p>
                                    </blockquote>
                                    <figcaption class="blockquote-footer">
                                        ${savedPosts[i].date} 
                                    </figcaption>
                                </figure>

                                <div class="ms-auto m-2">
                                    <button class="btn bgColor px-5" onclick="editPost()">Edit</button>
                                    <button class="btn bg-danger fg-white" onclick="deletePost()">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }
        }
    }
};

function selectImg (src) {
    console.log(src);
    
} 