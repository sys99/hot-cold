$(document).ready(function(){

	var numeroUsuario;
	var numeroRandom = Math.floor((Math.random() * 100) + 1);
	var win = false;
	var numerosIngresados = [];

	//$('#random').text(numeroRandom);

	// FUNCION MENSAJE
	var enviarMensaje = function (mensaje) {
		$('#mensaje').text(mensaje);
	};
	var enviarAlerta = function (mensaje) {
		$('#alerta').text(mensaje);
	};

	// FUNCION VERIFICAR NÚMERO
	var verificarNumero = function (n){
		if(isNaN(n)) {
			enviarAlerta('Escribe solo números por favor');
			return true;
		} else if (n < 1 || n > 100) {
			enviarAlerta('El número debe estar entre 1 y 100');
			return true;
		} else {
			// enviarAlerta('El número es: '+ n);
			return false;
		}
	};

	//FUNCION NÚMERO A LISTA
	var listaNumeros = function(i) {
		$('#lista').append('<li>' + i + '</li>');
	};

	//FUNCION COMPARAR NÚMERO
	var compararNumero = function (n,r){
		var restaNumeros = r - n;
		var resultado = Math.abs(restaNumeros);
		if (n === r) {
			enviarMensaje('Has ganado, te tomo ' + numerosIngresados.length + ' intentos.');
			win = true;
		} else if (resultado > 20) {
			enviarMensaje('Muy Frio');
		} else if (resultado > 10 && resultado <= 20) {
			enviarMensaje('Frio');
		} else if (resultado <= 10 && resultado >= 5) {
			enviarMensaje('Caliente');
		} else if (resultado >= 1 && resultado < 5) {
			enviarMensaje('Muy Caliente');
		}
	};

	//FUNCION AGREGAR A ARRAY numerosIngresados
	var numerosUsados = function (n){
		numerosIngresados.push(n);
	};

	$('form').submit(function(event){

		event.preventDefault(); // para evitar que se recargue al página al enviar.
		numeroUsuario = parseInt($('#inNumero').val());
		if (verificarNumero(numeroUsuario) ===  false){
			if ($.inArray(numeroUsuario,numerosIngresados) > -1){
					enviarAlerta('Ya intentaste con ese número.');
			} else {
				numerosUsados(numeroUsuario);
				listaNumeros(numeroUsuario);
				compararNumero(numeroUsuario, numeroRandom);
			}
		} else {
			enviarMensaje('Intenta de nuevo');
		}
		return numeroUsuario;

	});

});
