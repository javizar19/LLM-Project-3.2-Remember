
function validar() {
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;

    if (usuario == "javier" && Contraseña == "1234") {
        alert("Usuario y Contraseña validos");
    }
    else {
        alert("Verifique sus credenciales");
    }
}

function filtcat(c) {

    var x = document.getElementById("todo");

    var y = x.querySelectorAll("div");

    var i, c;

    for (i = 0; i < y.length; i++) {

        if (y[i].className == c || c == "all") { y[i].style.display = "inline-block" }

        else { y[i].style.display = "none" }

    }

}




function comprar(){
    alert("Añadido a la lista de compra")
}
function noComprar(){
    alert("Añadido a la lista de NO compra")
}


function registrar(){
    alert("Te has registrado correctamente")
}


let booksJSON = [];

function init() {
    getBooks();
    const tagSeach = document.querySelector("#input-seach");
    tagSeach.addEventListener("keyup", function () {

        if (this.value.length >= 3) {
            let titleSearch = this.value.toLowerCase();
            let results = booksJSON.filter(
                (book) => {
                    let title = book.title.toLowerCase();
                    return title.indexOf(titleSearch) > -1;
                });
            populateTable(results);
        }else if (this.value.length == 0){
            populateTable(booksJSON);
        }

    });

}

function getBooks() {
    fetch('data/books.json')
        .then(result => result.json())
        .then(data => {
            booksJSON = data;
            populateTable(data);
        });
}

function populateTable(data) {
    // Init container
    const tagContainer = document.querySelector("#list-books");
    tagContainer.innerHTML = "";

    // For every book we must create a row
    data.forEach(book => {

        console.log("datos del libro", book.title);

        // Content of info writers
        let htmlWriters = "";
        book.writers.forEach(writer => {
            htmlWriters += `${writer.name} ${writer.surname} ,`;
        });
        htmlWriters = htmlWriters.substr(0, htmlWriters.length - 1);

        let htmlBook = `
                    
              <tr>
                  <th><u><i> ${book.title}<i></u></th>
                  <td>${book.yearRelease}</td>
                  <td><b>${book.price}€</b></td>
                  <img src="./img/${book.img} " alt="" style="height: 150px;margin-bottom: 20px;">
              </tr>
          `;
        // Add the new row with all data of one book
        tagContainer.innerHTML += htmlBook;

    });
}

console.log("no sé como va");

class Auto {


    total() {
        alert('hola')
    }

}
var Usuario = new Auto();

init();

function saveUserInStorage() {
    // Comprovar en primer lloc si l'objecte Storage es troba definit al motor del navegador
    if (typeof (Storage) == "undefined") {
        alert("localStorage no soportat pel navegador");
    } else {
        // LocalStorage disponible
        // Guardar i extreure objectes json del Storage:
        let userObj = {
            "username": document.getElementById('user-name').value,
            "name": document.getElementById('user-password').value,
            "email": document.getElementById('user-email').value,
            "telephone": document.getElementById('user-mobile').value
        };
        //convierte json en texto JSON.stringify
        localStorage.setItem("user", JSON.stringify(userObj));
        alert("Usuario registrado correctamente");
    }
}

function getUserFromStorage() {
    // Recupera l'item del storage i el transforma a un objecte JSON.
    let userObjStorage = JSON.parse(localStorage.getItem("user"));
    console.log(userObjStorage);
    let container = document.getElementById("container-user");
    container.innerHTML = `<p>Name: ${userObjStorage.name} </p>
                           <p>Mobile: ${userObjStorage.mobile} </p>
                          `;
}
