const fotos = ["imagens/amor da minha vida 1.jpg","imagens/amor da minha vida 2.jpg","imagens/amor da minha vida 3.jpg","imagens/amor da minha vida 4.jpg","imagens/amor da minha vida 5.jpg","imagens/amor da minha vida 6.jpg"]
const frases = ["Você me enfeitiçou corpo e alma, e eu a amo… amo… amo","Desde o primeiro momento em que a vi, meus sentimentos foram impressionados de uma forma que nunca se apagou.","Você deve permitir que eu lhe diga o quanto eu a admiro e a amo ardentemente","Eu lutaria contra o mundo por você.","Seus olhos me encantaram mais do que qualquer outra coisa no mundo.","A vaidade e o orgulho são coisas diferentes, embora as palavras sejam usadas como sinônimos. O orgulho diz respeito à opinião que temos de nós mesmos; a vaidade, ao que queremos que os outros pensem de nós."];

const maxPorCarta = 3;

function dividirFotos() {
    let grupos = [];
    for (let i = 0; i < fotos.length; i += maxPorCarta) {
        grupos.push(fotos.slice(i, i + maxPorCarta));
    }
    return grupos;
}

function render() {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    const grupos = dividirFotos();

    grupos.forEach((grupo, index) => {
        const card = document.createElement("div");
        card.className = "card";

        grupo.forEach((foto, i) => {
            const img = document.createElement("img");
            img.src = foto;
            card.appendChild(img);

            if (frases[index * maxPorCarta + i]) {
                const p = document.createElement("p");
                p.innerText = frases[index * maxPorCarta + i];
                card.appendChild(p);
            }
        });

        container.appendChild(card);
    });
}

render();
