function validacion(){
    nombre = document.getElementById('nombre').value;
    apell = document.getElementById('apellido').value;
    mail = document.getElementById('email').value;
    /*Decidí utilizar required en los campos para evitar repetir*/
    if (!(isNaN(nombre))){
        alert('El nombre no puede ser un numero');
        nombre.value = '';
        return false;
    }
    else if (!(isNaN(apell))){
        alert('El apellido no puede ser un numero');
        apell.value = '';
        return false;
    }
    else if(!(validarEmail(mail))){
        alert("La dirección de email es incorrecta.");
        mail.value = '';
        return false;
    }
    return true;
}

function validarEmail(valor) {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor))){
        return false;
    } 
    return true;
    
}
