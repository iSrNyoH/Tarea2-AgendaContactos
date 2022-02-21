function cargarcontactos(){
    fetch("http://www.raydelto.org/agenda.php").then(function(contactos){
        return contactos.json();
    }).then(function(contactos){
        console.log(contactos);
    });
}