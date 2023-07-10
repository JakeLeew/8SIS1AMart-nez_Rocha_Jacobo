const pokeApiUrl = "https://pokeapi.co/api/v2/";

//vamos a crear una funcion flecha que nos permita poder obtener los elemtos de la api

const pokedex = () => {

    //necesitamos un objeto auxiliar que nos permita acceder alos campos deseados de la api para asi mostrar las estadisticas buscar ver etc que viene por parte del DOM

    const pokemonElements = {
        hp: document.getElementById("pokemonStatHp"),
        attack: document.getElementById("pokemonStaAttack"),
        defense: document.getElementById("pokemonStatDefense"),
        specialAttack: document.getElementById("pokemonStatSpecialAttack"),
        specialDefense: document.getElementById("pokemonStatSpecialDefense"),
        speed: document.getElementById("pokemonStatSpeed")
    };

    //necesitamos una auxiliar que nos permita poder cambiar la css deacuerdo al tipo de pokemon
    let currentclasstype = null;

    //cadena que nos muestre la imagen del pokemon
    const imagenTemple = "<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay' />";

    //Necesitamos un objeto que guarde las rutas de las imagenes de apyo, como lo son para la busqueda, cunado no se encuentra el pokemon, la carga
    const img = {

        imgPokemonNotFound : "../img/404.png", 
        imgLoanding : "../img/loading.gif"

    };

    //Necesitamos un objeto que contenga las referencias de los elemntos que se van a desplegar de acuerdo a la información del pokemon

    const containers = {

        imageContainer : document.getElementById("pokedisplay-container"),
        imgTypesContainer : document.getElementById("pokemonTypes"),
        imgNameElement : document.getElementById("pokemonNameResult"),
        imgAbilitiesElement : document.getElementById("pokemonAbilities"),
        imgMovesElement : document.getElementById("pokemonElement"),
        imgIdElement : document.getElementById("pokemonId")

    };

    //necesitamos un objeto que tenga todas las referencias de los botones

    const buttons = {

        all: Array.from(document.getElementsByClassName("btn")),
        search : document.getElementById("btnSearch"),
        next : document.getElementById("btnUp"),
        previous : document.getElementById("btnDown"),

    };

    //necesitamos la referencia al campo de texto que usa el usuario para escribir el nombre del pukamon

    const pokemonInput = document.getElementById("pokemonName");

    //necesitamos una funcion que se encargue de obtener el tipo de pokemon y nos devuelva el resultado de la busqqueda dentro de la api

    const pokemonTypes = (pokemonData) =>{

        let pokemonTypes = "";
        //vamos a utilizar la primera clase para dar colo a los contenedores
        const firstClass = pokemon.types[0].name;
        //donde sale types, de la api
        pokemon.types.forEach((pokemonTypeData) =>
        {
            //vamos a crear una etiqueta de clase por cada tipoo de pokemon dentro del arreglo
            pokemonType +=`<span class="pokemon-type ${pokemonTypeData.type.name}" > ${pokemonTypeData.type.name}</span>`
        });
        
        //vamos a quitar la clase previa del contnedor de habilidades y movimientos y actualizar por la nueva
        if(currentclasstype){
            containers.pokemonMoveElement.classList.remove(currentclasstype);
            containers.pokemonAbilitiesElement.classList.remove(currentclasstype);
        }
        //ahora se agrega la clase al contenedor de habilidades y movimientos
        containers.pokemonMoveElement.classList.add(firstClass);
        containers.pokemonAbilitiesElement.classList.add(firstClass);

        currentclasstype = firstClass;

        //se agregan las etiquetas creadas
        containers.pokemonTypesContainer.innerHTML = pokemonType;

    };

    const processPokemonStats = (pokemonData) => {

        //vamos a utilizar el operador ternario para realizar un encadenamiento
        pokemonData.Types?.forEach((pokemonStatData) => 
        {
            //Vamos aevaluar el nombre de la estadistica y colocar su valor respectivo dentro del contenedor
            switch (pokemonStatData.stat.name) {
                case "hp":
                    pokemonStatElements.hp.innerHTML = pokemonStatData.base_stat;
                    pokemonStatElements.hp.style = `background: linear-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat} rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
                case "attack":
                    pokemonStatElements.attack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatElements.attack.style = `background: linear-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat} rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
                case "defense":                        pokemonStatElements.defense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatElements.defense.style = `background: linear-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat} rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
                case "specialattack":
                    pokemonStatElements.specialAttack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatElements.specialAttack.style = `background: linear-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat} rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;    
                case "especialdefense":
                    pokemonStatElements.specialDefense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatElements.specialDefense.style = `background: linear-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat} rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                        break;
                case "speed":
                    pokemonStatElements.speed.innerHTML = pokemonStatData.base_stat;
                    pokemonStatElements.speed.style = `background: linear-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat} rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
            
                default:
                    break;
            };
        });
    };

    //necesitamos una funcion que haga lo mismo que la de stats pero con los movimientos 

    const processPokemonMoves = (pokemonData) => {
        let pokemonMovesContent = "";
        pokemonData.moves?.forEach ((pokemonMove) => 
        {
            pokemonMovesContent += `<li>${pokemonMove.move.name}</li>`
        });
        containers.pokemonMoveElement.innerHTML = pokemonMovesContent;
    };

    const processPokemonAbilities = (pokemonData) => {
        let pokemonAbilitiesContent = "";
        pokemonData.abilities?.forEach((pokemonAbility) => 
        {
            pokemonAbilitiesContent += `<li>${pokemonAbility.Ability.name}</li>`;
        });
        containers.pokemonMoveElement.innerHTML = pokemonMovesContent;
    };

    const setloading = () => {

        containers.imageContainers.innerHTML = imagenTemple.replace("{imgSrc}",images.imgLoanding);
        buttons.all.forEach(button => button.disabled = true);
    };

    const setloadingComplete = () => {

        buttons.all.forEach(button => checkDisabled (button));
    };

    //vamos a crear una funcion para consultar los datos de la pokeapi mediante el cual tenemos que obtener la información por medio del fetch
    //fetch recive la url para hacer la solicitur del sitio, pero tambien ppuede tomar los archivos locales
    //la peticion de fetch devuelve una promesa por eso se debe de atender mediante un try y catch
    //en javascript se llamada [then catch] y por otro lado nos devuelve un objeto JSON con la información solicitada en caso de error debemos atender la peticion fallida
    
    //fetch es una petición de tipo promesa, es un metodo *********

    //existen varios metodos de peticion de HTTP que sirven entre otras cosas su funcion es especificar el tipo de petición como son: GET, POST, PUT, DELETE, PACH, etc.
    const getPokemoData = async (pokemonName) => fetch (`${pokeApiUrl}pokemon/${pokemonName}`, {

        method : 'GET',

        /* Cabecera
        en las cabeceras de la petición se puede especificar el tipo de información que queremos utilizar también se suele colocar la identidad del usuario (sesiones)
        */

        headers : {
            'content-Type' : 'application/json'
        },
        //body (cuerpo de la respuesta)
        //body : JSON.stringify(MiObjetoJson) se usa cuando es una petición que debe devolver un registro, para el metodo POST o metodo PUT, los valores que se usan en put tienen que ser los mismos
    })
        .then((res) => res.json())
        .catch((error) => ({requestFailed:true}));

    //calidar si debe estar deshabilitado o no los botones,
    const checkDisabled = (buttons) => {
        buttons.disabled = buttons.id === "btnDown" && containers.pokemonIdElement.value <=1;
    };

     
    //Vanoos a dar la respuesta para colocar a sus respectivos contenedores la información de la consulta del pokemon
    
    const setPokemonData = async (pokemonName) => {
        //hay que poner la imagen de busqueda del pokemon y deshabilitar los botones
        if(pokemonName){
        setloading();//deshabilita los botones
        //tenemos que hacer la consulta de los datos con el uso del await para tener la respuesta 
        const pokemonData = await getPokemonData (typeof pokemonName === typeof ""?pokemonName.toLowerCase() : pokemonName);
        //si lo encontro
            if (pokemonData.requestFailed) {
                containers.imageContainer.innerHTML = imagenTemple.replace("{imgSrc}", images.imgPokemonNotFound);
            }else{
                containers.imgContainer.innerHTML = `${imagenTemple.replace("{imgSrc}", pokemonData.sprites.front_default)},${imagenTemple.replace("{imgSrc}", pokemonData.sprites.front_shiny)}`; 
                containers.pokemonNameElement.innerHTML = pokemonData.name;
                containers.pokemonNameElement.value = pokemonData.id;
                processType(pokemonData);
                processPokemonStats(pokemonData);
                processPokemonAbilities(pokemonData);
                processPokemonMoves(pokemonData);
            }
            setloadingComplete();
        }else{
            //si no encuentra el nombre envia una alerta 
            Swal.Fire({
                //https://sweetalert2.github.io/
                tittle : "Error",
                text : "Ingresa el nombre del pokemon primero",
                icon : "error",
                confirmButtonText : "Aceptar"
            });
        }    
    };

    //funcion de busqueda
    const triggers = () => {
        buttons.search.onclick = () => setPokemonData(pokemonInput.value)
        //Con el nombre vinculado del pokemon hay que realizar las acciones
        pokemonInput.onkeyup = (event) => {
            event.preventDefault(); 
            if(event.key === "Enter"){
                setPokemonData.pokemonData(pokemonInput.value);
            }
        }
        //se vincula la funcion de busqueda arriba y abajo
        buttons.next.onclick = () => setPokemonData(+containers.pokemonIdElement.value + 1);
        buttons.previous.onclick = () => setPokemonData(+containers.pokemonIdElement.value - 1);
    };
    setloadingComplete();
    triggers();
};

//carga
window.onload = pokedex;