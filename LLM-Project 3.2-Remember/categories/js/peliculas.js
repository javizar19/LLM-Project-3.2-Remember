function init() {
    getFilms();
    let buttonCheck = document.getElementById("character-good");
    buttonCheck.addEventListener("click", function () {
        alert(this.checked);
    });
};

function getFilms() {
    //peticicon asincrona
    fetch('./data/peliculas.json')
        .then(response => response.json())
        .then((collection) => {
            console.log("name", collection.nameCollection);
            const container = document.getElementById("card-container");
            for (let figure of collection.figures)
                {
                container.innerHTML += `
                <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="img/${figure.img}" style="width:185px; height:350px;" alt="Pelicula">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${figure.name} </h5>
                            <p class="card-text">${figure.description}</p>
                            <p class="card-text">Duración: ${figure.duracion}'</p>
                            <p class="card-text"><small class="text-muted">Estilo de película: ${figure.type}</small></p>
                            <p class="card-text"><small class="text-muted">${figure.pegi}</small></p>
                            <a href="#" class="btn btn-primary">Visualizar</a>
                        </div>
                    </div>
                </div>
            </div>`
            };
        });
};


init();