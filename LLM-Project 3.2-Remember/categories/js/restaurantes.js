function init() {
    getRestaurants();
    let buttonCheck = document.getElementById("character-good");
    buttonCheck.addEventListener("click", function () {
        alert(this.checked);
    });
};

function getRestaurants() {
    //peticicon asincrona
    fetch('./data/restaurantes.json')
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
                        <img src="img/${figure.img}" style="width:185px; height:230px" alt="Foto restaurante">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${figure.name} </h5>
                            <p class="card-text">${figure.place}</p>
                            <p class="card-text"><small class="text-muted">Reservar por tlf: ${figure.tlf}</small></p>
                            <a href="#" class="btn btn-primary">Reservar por la web</a>
                        </div>
                    </div>
                </div>
            </div>`
            };
        });
};


init();