console.log("PixelNardo Games carregado!");

document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("click",()=>{
        card.classList.toggle("active");
    });
});
