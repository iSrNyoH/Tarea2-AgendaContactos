function almacenar(){
    function contacto(nombre, apellido, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
    var AlmacenarNombre = document.getElementById("nombre").value;
    var AlmacenarApellido = document.getElementById("apellido").value;
    var AlamacenarTelefono = document.getElementById("telefono").value;

    nuevoContacto = new contacto(AlmacenarNombre,AlmacenarApellido,AlamacenarTelefono);
    console.log(nuevoContacto);
    agregar();
}

function cargarcontactos(){
    fetch("http://www.raydelto.org/agenda.php")
    .then(Response => Response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData = (data) =>{
        console.log(data)
        let body = ''
        for (let i = 0; i<data.length; i++){
        body += '<tr><td>'+data[i].nombre+'</td><td>'+data[i].apellido+'</td><td>'+data[i].telefono+'</td></tr>'
        }

        document.getElementById('datos').innerHTML = body
    }
}

var datos=[];

function agregar(){
    datos.push(nuevoContacto);
    console.log(datos);
}