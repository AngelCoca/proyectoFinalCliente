var listaCervezas;
var menuRestaurante;
var tipoDeCarne;

//Base de datos//
var cervezas = ["judas", "mort", "murtphys", "heineken", "paulaner", "affligem", "maes", "fosters", "guinnes", "sanMiguel", "mahou", "coronita"];
var cervezaJudas = new Cerveza ("judas", "Judas", "Judas, una cerveza traicionera", "no porque no esté todo lo buena que su cuidado diseño y su precio anuncian, sino porque esconde bastante bien un alto grado alcohólico que notaremos sólo cuando vayamos a levantarnos de nuestro asiento.");
var cervezaMort = new Cerveza ("mort", "Mort", "Cervezas de fermentación espontánea", "Son cervezas exclusivamente elaboradas por Cervecerías localizadas en el valle del Sena, al sureste de Bruselas, en la región conocida como Pajotten. Sus orígenes se remontan a inicios del siglo XVII, en viejos manuscritos monásticos.");
var cervezaHeineken = new Cerveza ("heineken", "Heineken", "El insípido ámbar australiano", "Amarilla como el sol, azul como el mar. La etiqueta de Corona te lleva a la mejor playa del mundo: aquella que sientes dentro de ti.");
var cervezaMurtphys = new Cerveza ("murtphys", "Murtphys", "La cerveza irlandesa Murphy’s Irish Red", "El origen de esta cerveza se remonta a 1856, cuando James J. Murphy fundó la fábrica de Murphy´s en Cork (Irlanda) junto con otros tres hermanos pertenecientes a una familia de industriales. Una de las primeras cervezas que se elaboraron fue una tipo Ale denominada Lady´s Well");
var cervezaPaulaner = new Cerveza ("paulaner", "Paulaner", "El más refinado arte muniqués de la elaboración de cerveza", "Como marca líder de cerveza de trigo, la Cervecería Paulaner asume responsabilidad y aboga por un consumo responsable de bebidas alcohólicas en el marco de las disposiciones legales. ");
var cervezaAffligem = new Cerveza ("affligem", "Affligem", "Affligem rebosa historia, desde la Edad Media hasta la actualidad", "Todo empieza en el molino, donde rompemos la cáscara exterior de la cebada de malta y liberamos el almidón.");
var cervezaMaes = new Cerveza ("maes", "Maes", "la primera Pilsen de baja fermentación belga", "La cerveza Maes Pils se elabora en la Cervecería Alken-Maes de Waarloos, en Bélgica, cuyos orígenes más antiguos datan de la Cervecería local Sint Michel de Waarloos de 1880, donde su Presidente, Egied Maes ");
var cervezaFosters = new Cerveza ("fosters", "Fosters", "El insípido ámbar australiano.", "La espuma es otro de sus grandes atractivos; abundante, esponjosa, duradera y blanca como ella sola, sostenida por un incesante flujo de carbónico que parece emerger de la nada.");
var cervezaGuinnes = new Cerveza ("guinnes", "Guinness","Una elaboración ingeniosa", "Con el éxito del lanzamiento de tres nuevas elaboraciones (Dublin Porter, West Indies Porter y Guinness Golden Ale), nuestros innovadores cerveceros continúan elaborando cualquier cosa que imaginan" );
var cervezaSanMiguel = new Cerveza ("sanMiguel", "San Miguel", "Cervezas de fermentación espontánea", "Son cervezas exclusivamente elaboradas por Cervecerías localizadas en el valle del Sena, al sureste de Bruselas, en la región conocida como Pajotten. Sus orígenes se remontan a inicios del siglo XVII, en viejos manuscritos monásticos.");
var cervezaMahou = new Cerveza ("mahou", "Mahou", "la primera Pilsen de baja fermentación belga", "La cerveza Maes Pils se elabora en la Cervecería Alken-Maes de Waarloos, en Bélgica, cuyos orígenes más antiguos datan de la Cervecería local Sint Michel de Waarloos de 1880, donde su Presidente, Egied Maes ");
var cervezaCoronita = new Cerveza ("coronita", "Coronita", "CORONAS, LIMAS Y EL ATARDECER DE FONDO", "Amarilla como el sol, azul como el mar. La etiqueta de Corona te lleva a la mejor playa del mundo: aquella que sientes dentro de ti.");

menuA = new Menu ("Setas salteadas", "Chuletón a la brasa", "Flan de café");
menuB =  new Menu  ("Ensalada con parmesano", "Chuletas de lechal", "Variado de la casa");
menuC = new Menu ("Caldo de carne", "Pescado con champiñones", "Fruta de temporada");

//Objeto cerveza
function Cerveza(name, nombre, titulo, descripcion){
    this.id = name;
    this.title = nombre;
    this.head = titulo;
    this.description = descripcion;    
}

//Objeto menu 
function Menu(primero, segundo, postre){
    this.first = primero;
    this.second = segundo;
    this.finish = postre;
}



function iniciarArray(){
   listaCervezas = new Array (cervezaJudas, cervezaMort, cervezaHeineken, cervezaMurtphys, cervezaPaulaner, cervezaAffligem , cervezaMaes, cervezaFosters, cervezaGuinnes, cervezaSanMiguel, cervezaMahou, cervezaCoronita);
}


function cargaPaginaPrincipal(){
    document.getElementById("idContenedorCerveza").style.display = 'none';
    iniciarArray();
}

function cervezaSi(cerveza){
    document.getElementById("idContenedorCerveza").style.display = 'block'
    completarInformacionCerveza(cerveza);
}

function cervezaNo(cerveza){
    document.getElementById("idContenedorCerveza").style.display = 'none'
}

function completarInformacionCerveza(cerveza){
    //console.log(listaCervezas);
    for(var i = 0; i<listaCervezas.length; i++){
        if(listaCervezas[i].id == cerveza){
          document.getElementById("detalleCerveza").innerHTML = listaCervezas[i].title;
          document.getElementById("detalleSubTituloCerveza").innerHTML = listaCervezas[i].head;
          document.getElementById("detalleCuerpoCerveza").innerHTML = listaCervezas[i].description;
        }
    }

}


//Restaurante
function iniciarPaginaRestaurante(){
    //Inicio los arrays que contienen los menús
    menuRestaurante = new Array (menuA, menuB, menuC);

    //Oculto el range de la carne y la alerta de menú completado
    document.getElementById("alertaMensajeMenu").style.display = 'none';

    //Cargo el menú en pantalla
    cargarMenu();

    //Inicio los escuchadores para los eventos del menú
    cargaEscuchador();
    
}

function cargaEscuchador(){
    var select = document.getElementById('seleccionMenu');
    select.addEventListener('click',
    function(){
        var selectedOption = this.options[select.selectedIndex];
        //console.log(selectedOption.value + ': ' + selectedOption.text);
        rellenarPedido(selectedOption.value);
        incrementarContador();
    });
    var selectA = document.getElementById('seleccionMenuA');
    selectA.addEventListener('click',
    function(){
        var selectedOption = this.options[selectA.selectedIndex];
        //console.log(selectedOption.value + ': ' + selectedOption.text);
        rellenarPedido(selectedOption.value);
        incrementarContador();

    });
    var selectB = document.getElementById('seleccionMenuB');
    selectB.addEventListener('click',
    function(){
        var selectedOption = this.options[selectB.selectedIndex];
        //console.log(selectedOption.value + ': ' + selectedOption.text);
        rellenarPedido(selectedOption.value);
        incrementarContador();

    });

    
}

function cargarMenu(){

   for(var i = 0; i < menuRestaurante.length; i++){

            var selec = document.getElementById("seleccionMenu");
            var option = document.createElement("option");
            option.text = menuRestaurante[i].first;
            option.value = menuRestaurante[i].first;
            selec.add(option);
               
            var selecA = document.getElementById("seleccionMenuA");
            var optionA = document.createElement("option");
            optionA.text = menuRestaurante[i].second;
            optionA.value = menuRestaurante[i].second;
            selecA.add(optionA);
        
            var selecB = document.getElementById("seleccionMenuB");
            var optionB = document.createElement("option");
            optionB.text = menuRestaurante[i].finish;
            optionB.value = menuRestaurante[i].finish;
            selecB.add(optionB);
    }
}
    
function rellenarPedido(platoElegido){

    if(platosPedidos <9){
       

        var node = document.createElement("li");
        var textnode = document.createTextNode(platoElegido);
        node.appendChild(textnode);
        document.getElementById("miPedidoGeneral").appendChild(node);
    } else {
        var negrita = "Menú completo";
        var cuerpo = "Lo sentimos, únicamente puede pedir 9 platos."
        mostrarMensaje(negrita, cuerpo)
    }
}


var platosPedidos = 0;

function incrementarContador(){

    platosPedidos++;
     var totalPedidos = document.getElementById("miPedidoGeneral").children.length;
     //console.log(totalPedidos)
     //var comoDeHecho = hacerCarne(tipoDeCarne);
     document.getElementById("totalPedidos").innerHTML ="Total de platos: " + totalPedidos;
}


function mostrarMensaje(negrita, cuerpo){
    document.getElementById("alertaMensajeMenu").style.display = 'block';
    document.getElementById("alertaMensajeMenuNegrita").innerHTML = negrita;
    document.getElementById("alertaMensajeMenuCuerpo").innerHTML = cuerpo;
}

function borrarPedido(){
    document.getElementById("miPedidoGeneral").innerText = "";
    platosPedidos = 0;
    document.getElementById("totalPedidos").innerHTML ="Total de platos: " + platosPedidos;
}

function realizarPedido(){
    var lugar = "miPedidoGeneral";
  
    var pedido = obtenerDatos(lugar);
    if(pedido != ""){
       var listaPedido = crearPedido(pedido);
       montarHTMLListGroup(listaPedido)
    } else {
        var negrita = "No hay pedidos";
        var cuerpo = "Deben de haber pedidos en la lista"
        mostrarMensaje(negrita, cuerpo)
    }
}

function obtenerDatos(ubicacion){
    var datos = document.getElementById(ubicacion).innerText;
    return datos;
}

function crearPedido(pedido){
    var limite ="\n";
    var res = pedido.split(limite);
    res += ",";
    var pedido = "";
    var pedidoTotal = new Array();
    for(var i = 0; i <res.length; i++){
        if(res[i] == ","){
            pedidoTotal.push(pedido);
            //console.log(pedido)
            pedido = "";
        } else {
            pedido += res[i];
        }
    }

   return pedidoTotal;
}


function montarHTMLListGroup(pedido){
    var cabecera = "<h2>Mi pedido final </h2>"
    console.log("Pedido ->" + pedido)
    var lista = "<ul class='list-group list-group-flush'>";


    pedido.forEach(function(element) {
        lista += "<li class='list-group-item'>" +element+ "</li>";
      });
      lista+= "<li class='list-group-item'> "
        +"<button class='whatsapp' onclick='cargaModal()'  data-toggle='modal' data-target='#myModal'>"
            +"<i class='fa fa-whatsapp whatsapp-icon'></i>"
        +"</button>   </li>"
        lista += "</ul>"  
      document.getElementById("mostrarPedidoFinalMenu").innerHTML = cabecera + lista;
}

function cambioEnCheckBoxRecuerdame(){
    if(checkRecuerdame.checked == true){
       document.getElementById("mensajeAvisoCookies").innerHTML = "Si marca esta opción, acepta las cookies"
    } else {
        document.getElementById("mensajeAvisoCookies").innerHTML = ""
    }
}

function cargaModal(){
    console.log("Carga modal")
    var user=getCookie("nameUser");
    if (user != "") {
        document.getElementById("nombreInputModal").value = user;
        console.log("nameUser " + user)
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function creaCookies(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function enviarPedidoWhatsapp(){

    try{
    var nombreCliente = document.getElementById("nombreInputModal").value;
    var numeroMesa = document.getElementById("numeroMesaInputModal").value;

        if(nombreCliente != "" && numeroMesa != ""){
            document.getElementById("mensajeAvisoCookies").innerHTML = "";

            if(checkRecuerdame.checked == true){
                creaCookies("nameUser", nombreCliente, 30);
            }

            crearMensaje("w");

        } else {
            document.getElementById("mensajeAvisoCookies").innerHTML = "Campos vacíos";
        }

    }catch{
        document.getElementById("mensajeAvisoCookies").innerHTML = "Comprueba los datos";
    }
}

function crearMensaje(app){

    if(app == "w"){
        crearWhatsapp()
    } else if (app =="t") {
        
    } else {
        
    }
}
   
function crearWhatsapp(){
    var nombreCliente = document.getElementById("nombreInputModal").value;
    var numeroMesa = document.getElementById("numeroMesaInputModal").value;

    var pedido = obtenerDatos("mostrarPedidoFinalMenu");
    var listaPedido = crearPedido(pedido)

    console.log(listaPedido)
    var mensaje = "";

    listaPedido.forEach(function(element) {
        mensaje += element+"%0A";
      });

      var cadena = "cadena de texto",
    patron = / /g,
    nuevoValor    = "%20",
    mensaje = mensaje.replace(patron, nuevoValor);

    var introEnlace =  "https://api.whatsapp.com/send?phone="
    var telefonoRestautante = "34606594837"
    var introTexto = "&text=";
    var presentacion = "Buenas%20me%20llamo%20"+nombreCliente+"%20estoy%20sentado%20en%20la%20mesa%20"+numeroMesa+"%20me%20gustaría%20pedir%20lo%20siguiente%0A"
    mensaje =introEnlace+telefonoRestautante+introTexto+presentacion+mensaje;
    console.log(mensaje)

    window.open(
        mensaje, '_blank' 
    );
  
  
}


/*-------VALIDADORES------------*/
function pulsadoNombre(e){

    var esTexto = comprobarSiEsTexto(e);
    if(esTexto){
       return true;
    } else {
        return false;
    }

}
function comprobarSiEsTexto(caracter){
    caracter = caracter.keyCode
    var esTexto = false;
 
   if((caracter >= 65 && caracter <= 90) || (caracter >= 97 && caracter <= 122) || caracter == 186 ||
       caracter == 37 ||  caracter == 40 || caracter == 38 || caracter == 39 || caracter == 8 ){
         esTexto=true;
       }

    return esTexto;
}

function pulsadoNumero(e){
    var esNumero = comprobarSiEsNumero(e);
    if(esNumero){
        return true;
    } else {
        return false;
    }
}

function comprobarSiEsNumero(caracter){
    caracter = caracter.keyCode
    var esNumero = false;

    if((caracter > 47 && caracter <= 57)|| caracter == 186 ||
       caracter == 37 ||  caracter == 40 || caracter == 38 || caracter == 39 || caracter == 8 ){
        esNumero = true;
       }
    
    return esNumero;
}
/*-------VALIDADORES------------*/



/*---------RESEÑAS -----------*/


var datosJson;
function cargaPaginaResenyas(){

   var url = "../recursos/datosResenyas.json";
    var xmlhttp;
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      // code for older browsers
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        datosJson = this.responseText;
        rellenarPaginaResenyas(datosJson);
        
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();




}


function rellenarPaginaResenyas(datos){

    try{
    var datosAMostrar =" <div class='container'><ul class='list-unstyled'>";
    var datosJson = JSON.parse(datos);
    for(var i in datosJson.resenyas) {
        datosAMostrar += " <li id='listaComentariosJS' class='media'>"+
        "<img  height='64' width='64' src='../recursos/"+datosJson.resenyas[i].imagen+"' class='mr-3' alt='Icono perfil'></img>"+
        "<div class='media-body'>"+
          "<h5 class='mt-0 mb-1'>" + datosJson.resenyas[i].titulo+"</h5>"+
          "<p>"+ datosJson.resenyas[i].cuerpo+"</p>"+
         " <p><i class='fas fa-thumbs-up'></i> Me gusta <i class='fas fa-thumbs-down'></i> No me gusta</p>"+
        "</div>"+
        "<hr>"+
      "</li>"
    }
    datosAMostrar += "<ul> </div>"
    document.getElementById("comentariosJson").innerHTML = datosAMostrar;
    } catch (e){
        console.log("Error " +e)
    }
}

function crearNuevoComentarioJson(){
    var tituloComentario = document.getElementById("idTituloComentario").value;
    var cuerpoComentario = document.getElementById("idCuerpoComentario").value;
    var imagenComentario =   "imagenes/icon.png";
    var obj = { titulo: tituloComentario, imagen: imagenComentario, cuerpo: cuerpoComentario};
    var myJSON = JSON.stringify(obj);

    crearComentarioNuevo(myJSON)
    console.log(myJSON)
}

function crearComentarioNuevo(dato){



    var datosAMostrar = "";
    var datosJson = JSON.parse(dato);
    console.log(datosJson)

        datosAMostrar += " <li class='media'>"+
        "<img  height='64' width='64' src='../recursos/"+datosJson.imagen+"' class='mr-3' alt='Icono perfil'></img>"+
        "<div class='media-body'>"+
          "<h5 class='mt-0 mb-1'>" + datosJson.titulo+"</h5>"+
          "<p>"+ datosJson.cuerpo+"</p>"+
         " <p><i class='fas fa-thumbs-up'></i> Me gusta <i class='fas fa-thumbs-down'></i> No me gusta</p>"+
        "</div>"+
        "<hr>"+
      "</li>"
      document.getElementById("listaComentariosJS").innerHTML = datosAMostrar;
}

/*---------RESEÑAS -----------*/