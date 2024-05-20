let posts = [
    { id: 1, title: "Nike", image: "N1.jpg", category: "First", price: "350€" },
    { id: 2, title: "Jordan", image: "N2.jpg", category: "Second", price: "80€" },
    { id: 3, title: "Brklyn", image: "N3.jpg", category: "First", price: "320€" },
    { id: 4, title: "Joma", image: "N4.jpg", category: "Second", price: "100€" },
    { id: 5, title: "Champion", image: "N5.jpg", category: "First", price: "430€" },
    { id: 6, title: "Nike", image: "N6.jpg", category: "Second", price: "490€" },
    { id: 7, title: "Kapa", image: "N7.jpg", category: "First" ,price: "560€" },
    { id: 8, title: "Supreme", image: "N8.jpg", category: "Second", price: "400€" }
];

function loadPosts(category) {
    const container = document.getElementById("cardsContainer");
    let postsHtml = '';

    if (category === "Корзина") {
        category = "All"; 
    }
    posts.forEach(function(post){
        if (category === "All" || post.category === category) {
            postsHtml += `<div class="image-card">
                                <div class="image_and_text-container">
                                    <img class="image" src="${post.image}" alt="${post.title}">
                                    <h4 class = "COLOR">${post.title}</h4>
                                    <p  class = "COLOR">${post.price}</p>
                                    <button onclick="addToCart(${post.id})" >Додати в корзину</button>

                                </div>
                            </div>`;
        }
    });

    container.innerHTML = postsHtml;
}

loadPosts("All");

const filterButtons = document.querySelectorAll('.navig button');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        loadPosts(this.textContent);
    });
});

