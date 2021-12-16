    let lista = document.querySelectorAll("input");
    let container = document.getElementById("resultado");
    let button = document.getElementById("button");

    let arrayLista;

   
    let clicks = 0;
    
    let persona = {};    

    function registrar(){

     
        if (clicks == 0){
            arrayLista = Array.from(lista);
            const newArray = arrayLista.map(function (element) {return element.value})
            persona.nombre = newArray[0];
            persona.apellido = newArray[1];
            persona.edad = newArray[2];
        
            let keys = Object.keys(persona);

            resultado.classList.add("prompt")
        
            let item1 = document.createElement("span");
            let item2 = document.createElement("span");
            let item3 = document.createElement("span");
            let textItem1 = document.createTextNode(`${keys[0]} : ${persona.nombre}.`)
            let textItem2 = document.createTextNode(`${keys[1]} : ${persona.apellido}.`)
            let textItem3 = document.createTextNode(`${keys[2]} : ${persona.edad} años.`)

            item1.appendChild(textItem1);
            item2.appendChild(textItem2);
            item3.appendChild(textItem3);
            container.appendChild(item1);
            container.appendChild(item2);
            container.appendChild(item3);
        }else{
            button.removeAttribute("id");            
            alert("Recarga la pagina para registrarte de nuevo.")
        }
        
        clicks++
      
    }

    button.addEventListener("click", registrar);
