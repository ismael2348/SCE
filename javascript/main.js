$(document).ready(function(){
	$("main").load("home.php");
	$("nav a").click(function(){
		var cadena = $(this).attr("id");
		$("main").load(cadena + ".php", function(){
			dibujarAsientos();

		});
	});
	$("main").on("mouseover",".asiento",function(){
		var y = $(this).position().top;
		var x = $(this).position().left + 55;
		$("#inf-basica").html("Tu posicion en x es: " + x + " y en y es : " + y)
		$("#inf-basica").css({
			"top":y,
			"left":x
		});
		$("#inf-basica").show("slow");
		console.log(x,y);
	})
	$("main").on("mouseleave",".asiento",function(){
		$("#inf-basica").hide()

	});

});






function dibujarAsientos(){
	var nFilas = 10;
	var nColumnas = 10;
	var htmlFila = "";
	
	for (var fila = 1; fila <= nFilas; fila++) {
		var htmlCol= "";
		for (var col = 1; col <= nColumnas; col++) {
			htmlCol += "<div class='asiento'> F: " + fila+" C: "+ col + "</div>";
		};
		htmlFila += "<div class='fila'>" + htmlCol + "</div>";
	};
	$("#canvas").html(htmlFila);
};