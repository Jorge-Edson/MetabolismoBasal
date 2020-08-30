$(document).on("click", "#Calcular", function()
{
  //Declaração de variáveis.
  var atividade = $("#Atividade").val();
  var idade = $("#Idade").val();
  var altura = $("#Altura").val();
  var peso = $("#Peso").val();
  var sexo = $("#Sexo").val();
  var resultado;
  var resultado1;
  
  //Cálculo de gasto basal e taxa de metabolismo basal.
  if (sexo == 2)
  {
    resultado = Math.round(66 + ((13.7 * peso) + (5 * altura) - (6.8 * idade)));
    resultado1 = Math.round(atividade * resultado);
  }
  else if (sexo == 3)
  {
    resultado = Math.round(655 + ((9.6 * peso) + (1.8 * altura) - (4.7 * idade)));
    resultado1 = Math.round(atividade * resultado);
  }
  
  //Exibição de resultados.
  $("#Resultado").val(resultado);
  $("#MetabolismoBasal").val(resultado1);
});