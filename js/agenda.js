const button = document.getElementById('button')
button.addEventListener('click', ()=>{
    newContact();
})

newContact = () => {
    const contact = {
    nombre: "Michael",
    apellido: "Hernandez",
    telefono: "8494454645",
    };

    fetch("http://www.raydelto.org/agenda.php",{
    method: "POST",
    body: JSON.stringify(contact),
    headers:{
        "content-type":"application/json"
    }
})
.then(Response => Response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error));

console.log(newContact)
console.log(JSON.stringify(newContact))

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
