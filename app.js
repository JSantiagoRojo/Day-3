function tecnologias() {

    let tecnologias = [];

    document.getElementById("Tecnologias").style.display = "block";

    document.getElementById("Agregar").addEventListener("click", function() {

    let respuesta = document.getElementById("respuesta").value;

    if (respuesta === "Si" || "si" ) {

    let continuar = true;

    while (continuar) {

    let nuevaTec = prompt("Ingresa la tecnología que deseas estudiar:");

    tecnologias.push(nuevaTec);

    continuar = confirm("¿Quieres ingresar otra tecnologia?");
}

for (let i = 0; i < tecnologias.length; i++) {
    alert("Tecnología: " + (i + 1) + ": " + tecnologias[i]);
}
    } else {

        alert("Sigue aprendiendo");
    }
 });
}
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("Comenzar").addEventListener("click", function() {

        document.getElementById("formularioNombre").style.display = "block";

        this.style.display = "none";
    });

    document.getElementById("IngresarNombre").addEventListener("click", function() {

        let nombre = document.getElementById("nombre").value;

        alert(`Hola ${nombre} estas a punto de iniciar la elección de tu vida`);

        document.getElementById("formularioNombre").style.display = "none";

        document.getElementById("Iniciar").style.display = "block";


    });

    //Aqui iniciamos la eleccion 

    document.getElementById("Iniciar").addEventListener("click", function() {

        document.getElementById("Elecciones").style.display = "block";

        this.style.display = "none";


        document.getElementById("ElegirOpcion").addEventListener("click", function() {

            let opcion = document.getElementById("opcion").value;

            document.getElementById("Elecciones").style.display = "none";



            //Aqui empieza el if


            if(opcion == 1){

                document.getElementById("FrontEnd").style.display = "block";


                document.getElementById("ElegirOpcionFront").addEventListener("click", function() {

                    let opcion1 = document.getElementById("opcion1").value;

                    if(opcion1 == 1){

                        alert("Suerte estudiando react");
                        document.getElementById("FrontEnd").style.display = "none";
                        tecnologias();

                    } else{
                        alert("Suerte estudiando Vue");
                        document.getElementById("FrontEnd").style.display = "none";
                        tecnologias();
                        
                    }

                });

            } else{

                 document.getElementById("BackEnd").style.display = "block";


                document.getElementById("ElegirOpcionBack").addEventListener("click", function() {

                    let opcion2 = document.getElementById("opcion2").value;

                    if(opcion2 == 1){

                        alert("Suerte estudiando C#");
                        document.getElementById("BackEnd").style.display = "none";
                        tecnologias();

                    } else{
                        alert("Suerte estudiando Java");
                        document.getElementById("BackEnd").style.display = "none";
                        tecnologias();
                };

            });

        }

        });

    });

});