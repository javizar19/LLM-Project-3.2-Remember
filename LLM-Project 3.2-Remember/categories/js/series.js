function init() {
    getSeries();
    let buttonCheck = document.getElementById("character-good");
    buttonCheck.addEventListener("click", function () {
        alert(this.checked);
    });
};

function getSeries() {
    //peticicon asincrona
    fetch('./data/series.json')
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
                    <img src="img/${figure.img}" style="width:185px; height:230px" alt="Foto serie">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Serie: ${figure.name} </h5>
                            <p class="card-text">Sinopsis: <br>${figure.description}</p>
                            <p class="card-text"><small class="text-muted">Visualizar en: ${figure.red}</small></p>
                            <a href="#" class="btn btn-primary">Visualizar</a>
                        </div>
                    </div>
                </div>
            </div>`
            };
        });
};


init();