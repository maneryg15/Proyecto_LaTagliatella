function validar() {
    
    var resultado = true;
      //1. obtener los elementos a manipular
      var txtNombres = document.getElementById("nombres");
      var txtApellidos = document.getElementById("apellidos");
      var textreserva =document.getElementById("resev-nombre");
      var txtemail = document.getElementById("correo");
      var txtdireccion= document.getElementById("direcciones");
      var txtTelefono = document.getElementById("telefono");
      var radiosmesa = document.getElementsByName("mesa");
    var seltcpersonas = document.getElementById("personas");
      var radiostarjeta = document.getElementsByName("tarjeta");
      var tarjeta = document.getElementById("tarjeta-nums");
      var txtfecha = document.getElementById("fecha");
      var aceptar = document.getElementById("terminos");
  
      var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
      var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      var telefono = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
      var tarjeta = /^[0-9]{16}$/g; // para validar datos que deban tener 10 numeros
      //VALIDAR NOMBRES

      if (txtNombres.value === '') {// revisar si esta vacio
          alert("Ingresar su Nombre");
          resultado = false;
      } else if (letra.test(txtNombres.value) === false) {
          alert("Nombre debe contener solo letras");
          resultado = false;
      }
      //VALIDAR APELLIDOS
      
      if (txtApellidos.value === '') {// revisar si esta vacio
        alert("Debe Ingresar el Apellido");
        resultado = false;
    } else if (letra.test(txtApellidos.value) === false) {
        alert("Nombre debe contener solo letras");
        resultado = false;
    }

    //VALIDAR Nombre de reserva
      
    if (textreserva.value === '') {// revisar si esta vacio
        alert("Debe Ingresar el Nombre de la Reserva");
        resultado = false;
    } else if (letra.test(textreserva.value) === false) {
        alert("Nombre debe contener solo letras");
        resultado = false;
    }
   // VALIDAR CORREO
     
    if (txtemail.value === '') {// revisar si esta vacio
        alert("Nombre es requerido");
        resultado = false;
    } else if (correo.test(txtemail.value) === false) {
        alert("Nombre debe contener solo letras");
        resultado = false;
    }
    //VALIDAR TELEFONO

    if (txtTelefono.value === '') {// revisar si esta vacio
        alert("Nombre es requerido");
        resultado = false;
    } else if (telefono.test(txtTelefono.value) === false) {
        alert("No debe tener mas de 10 dijitos");
        resultado = false;
    }
      //RADIO DE TIPOS De MESA ESCOGER 
      var seleccionado = false;
      for (let i = 0; i < radiosmesa.length; i++) {
          if (radiosmesa[i].checked) {
              seleccionado = true;
              break;
          }
      }
      if (!seleccionado) {
          alert("Debe seleccionar una Mesa");
          resultado = false;
      }
        //RADIO DE TIPOS D EMESA ESCOGER 
        var seleccionado = false;
        for (let i = 0; i < radiostarjeta.length; i++) {
            if (radiostarjeta[i].checked) {
                seleccionado = true;
                break;
            }
        }
        if (!seleccionado) {
            alert("Debe seleccionar una Mesa");
            resultado = false;
        }

      //validacion del N de personas 
      if (seltcpersonas.value === null && seltcpersonas.value === '0') {
          alert("Debe seleccionar el N de personas para reservar");
          resultado = false;
       }

       if (txtdireccion.value === null && txtdireccion.value === '0') {
        alert("Debe seleccionar La direecion");
        resultado = false;
     }
       
     
     //Tarjeta numero 
     if (tarjeta.value === '') {// revisar si esta vacio
        alert("Nombre es requerido");
        resultado = false;
    } else if (tarjeta.test(tarjeta.value) === false) {
        alert("No debe tener mas de 16 dijitos");
        resultado = false;
    }

       // validacion del de aceptar los terminos 
       if(!aceptar.checked){
           
          alert("Debe seleccionar un la suscripcion");
          resultado = false;
       }
       
      var fecha =txtfecha.value;
      alert(fecha);
       var anio = fecha.subscring(0,4);
        
       if (anio>2003) {
           mensaje+="fecha de nacimiento";
           resultado=false;
       }
  
      return resultado;
}
