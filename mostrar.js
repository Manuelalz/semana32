var mostrarsum=function()
{
	var n1=document.getElementById("hijo1");
	var n2=document.getElementById("hijo2");
	var n3=document.getElementById("hijo3");
	var n4=document.getElementById("hijo4");

	n4.className="hijo4";
	n3.className="ejercicio";
	n2.className="resta";
	n1.className="suma2";
	n1.innerHTML=(img.src="sum1.png");
}

var mostrarres=function()
{
	var n1=document.getElementById("hijo1");
	var n2=document.getElementById("hijo2");
	var n3=document.getElementById("hijo3");
	var n4=document.getElementById("hijo4");

	n4.className="hijo4";
	n3.className="ejercicio";
	n2.className="resta2";
	n1.className="suma";
}

var ejer=function()
{
	var n1=document.getElementById("hijo1");
	var n2=document.getElementById("hijo2");
	var n3=document.getElementById("hijo3");
	var n4=document.getElementById("hijo4");

	n2.className="resta";
	n1.className="suma";
	n3.className="ejercicio2";
	n4.className="hijo44";
}

var realizar=function()
{
	var number1=Number(document.getElementById("num1").value);
	var number2=Number(document.getElementById("num2").value);
	var number3=Number(document.getElementById("num3").value);
	var total=document.getElementById("total");
	var resultado=number1+number2-number3;

	console.log(total);
	total.innerHTML=("el resultado es: "+resultado);
	total.className="total2";
}
