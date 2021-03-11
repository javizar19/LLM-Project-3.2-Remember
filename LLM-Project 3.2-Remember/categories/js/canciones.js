function init() {
    getSongs();
    let buttonCheck = document.getElementById("character-good");
    buttonCheck.addEventListener("click", function () {
        alert(this.checked);
    });
};

function getSongs() {
    //peticicon asincrona
    fetch('./data/canciones.json')
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
                        <img src="img/${figure.img}" style="width:190px; height:210px" alt="Foto canción">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Título: ${figure.name} </h5>
                            <p class="card-text">Artista: ${figure.artist}</p>
                            <p class="card-text"><small class="text-muted">Sitios disponibles: <br>${figure.place}</small></p>
                            <a href="#" class="btn btn-primary">Escuchar</a>
                        </div>
                    </div>
                </div>
            </div>`
            };
        });
};


init();