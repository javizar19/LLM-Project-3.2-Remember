function init() {
    getTrips();
    let buttonCheck = document.getElementById("character-good");
    buttonCheck.addEventListener("click", function () {
        alert(this.checked);
    });
};

function getTrips() {
    //peticicon asincrona
    fetch('./data/viajes.json')
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
                    <img src="img/${figure.img}" style="width:185px; height:200px" alt="Bandera país">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Lugar: ${figure.name} </h5>
                            IDA <input id="date" type="date"><br>
                            VUELTA <input id="date" type="date">
                            <p class="card-text"><small class="text-muted">Consulta las restricciones de entrada y los requisitos de cuarentena del destino que tienes en mente en nuestro mapa interactivo. Además, te avisaremos si varían.</small></p>
                            <a href="#" class="btn btn-primary">Ver Mapa Interactivo</a>
                        </div>
                    </div>
                </div>
            </div>`
            };
        });
};


init();