const RecordatorioAlto = document.getElementById('Hight');
const RecordatorioMedio = document.getElementById('Medium');
const RecordatorioBajo = document.getElementById('Low');
const boton= document.querySelector('borrar-recordatorio');

eventListeners();

function eventListeners(){
    //Cuando se envia el formulario
    document.querySelector('#Formulario').addEventListener('submit',agregarRecordatorio);
}

function agregarRecordatorio(e){
    e.preventDefault();
    //obtener datos
    const Titulo = document.querySelector('#Title').value;
    const Descripcion = document.querySelector('#comentario').value;
    let eleccion = document.getElementsByName('importancia');
    for(i=0; i<eleccion.length; i++){
        if(eleccion[i].checked){        //Reconoce el radio button que esta seleccionado
        eleccion =eleccion[i].value;
        }
    }
   
     //Intento de boton de borrar sin funcionalidad
    const botonBorrar = document.createElement("button");
    botonBorrar.classList = 'borrar-recordatorio';
    botonBorrar.innerText= 'Eliminar';
    const lista = document.createElement('li');

    // Segun el radio button elegido va a un Div diferente con estilos diferentes
    switch (eleccion)
    {
        case 'Alta':
                    lista.innerText = " Titulo: " + Titulo+"\n"+ " Descripción: " + Descripcion +"\n"+ " Prioridad: " +eleccion + "\n"+"\n";
                    lista.appendChild(botonBorrar);
                    RecordatorioAlto.appendChild(lista);
                    document.querySelector(".borrar-recordatorio").addEventListener('click', ejecutarboton);
                    break;
        case 'Media':
                    lista.innerText = " Titulo: " + Titulo+"\n"+ " Descripción: " + Descripcion +"\n"+ " Prioridad: " +eleccion + "\n"+"\n";
                    lista.appendChild(botonBorrar);
                    RecordatorioMedio.appendChild(lista);
                    document.querySelector(".borrar-recordatorio").addEventListener('click', ejecutarboton);
                    break;
        case 'Baja':
                    lista.innerText = " Titulo: " + Titulo+"\n"+ " Descripción: " + Descripcion +"\n"+ " Prioridad: " +eleccion + "\n"+"\n";
                    lista.appendChild(botonBorrar);
                    RecordatorioBajo.appendChild(lista);
                    document.querySelector(".borrar-recordatorio").addEventListener('click', ejecutarboton);
                    break;
    }
}
// Mensaje para confirmar la eliminacion del recordatorio
function ejecutarboton(e){
    var opcion = confirm("Desea eliminar el recordatorio?");
    if (opcion == true){
        e.target.parentElement.remove();
        alert("Recordatorio eliminado satisfactoriamente");
    }
}