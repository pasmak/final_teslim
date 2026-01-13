const el = document.querySelector(".portfolio");

if (el) {

    const text = el.innerText.trim();
    el.innerHTML = "";

    [...text].forEach((harf, i) => {
        el.innerHTML += `<span class="letter" data-i="${i}">${harf}</span>`;
    });

    const spans = el.querySelectorAll(".letter");

    function getTotalWidth() {
        let total = 0;
        spans.forEach(span => {
            total += span.offsetWidth;
        });
        return total;
    }

    el.addEventListener("mouseover", () => {

        const rect = el.getBoundingClientRect();
        const leftSpace = rect.left;      
        const screenWidth = window.innerWidth;
        const lettersWidth = getTotalWidth();

        const maxMovement = screenWidth - lettersWidth - (leftSpace * 2);

        spans.forEach(span => {
            const i = parseInt(span.dataset.i);
            const fraction = i / (spans.length - 1);
            const move = maxMovement * fraction;

            span.style.transform = `translateX(${move}px)`;
            span.style.color = `hsl(${fraction * 360}, 80%, 60%)`;
        });

    });

    el.addEventListener("mouseout", () => {
        spans.forEach(span => {
            span.style.transform = "translateX(0)";
            span.style.color = "black";
        });
    });
}

document.querySelector(".door-img").addEventListener("click", () => {
    window.location.href = "hakkimda.html";
});