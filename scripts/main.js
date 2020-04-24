const wishlistContainer = document.getElementById("wishlist")

document.getElementById("saveThing").addEventListener("click", (event) => {
    const wishlistItem = document.getElementById("favoriteThing").value;
    const wishlistStore = document.getElementById("store").value;

    wishlistContainer.innerHTML += `
        <section>
            <p>I can purchase ${wishlistItem} at ${wishlistStore}</p>
        </section>
    `;
});