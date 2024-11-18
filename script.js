document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".image img");
    image.addEventListener("mouseover", function() {
        image.style.transform = "scale(1.1)";
        image.style.transition = "transform 0.3s ease";
    });

    image.addEventListener("mouseout", function() {
        image.style.transform = "scale(1)";
    });

    const scrollButton = document.createElement("button");
    scrollButton.textContent = "Kembali ke Atas";
    scrollButton.style.position = "fixed";
    scrollButton.style.bottom = "20px";
    scrollButton.style.right = "20px";
    scrollButton.style.padding = "10px";
    scrollButton.style.fontSize = "16px";
    scrollButton.style.backgroundColor = "#4CAF50";
    scrollButton.style.color = "#fff";
    scrollButton.style.border = "none";
    scrollButton.style.borderRadius = "5px";
    scrollButton.style.cursor = "pointer";
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    
    window.alert("Selamat datang di Proyek Power Supply!");
});