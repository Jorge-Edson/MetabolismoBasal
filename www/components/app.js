$(document).on("click", "#Calcular", function()
{
  var atividade = $("#Atividade").val();
  var idade = $("#Idade").val();
  var altura = $("#Altura").val();
  var peso = $("#Peso").val();
  var sexo = $("#Sexo").val();
  var resultado;

  switch (atividade)
  {
    case 1: atividade = null;
    case 2: atividade = 1.2;
    case 3: atividade = 1.375;
    case 4: atividade = 1.55;
    case 5: atividade = 1.725;
    case 6: atividade = 1.9;
  }  
  
  if (sexo == 2)
  {
    resultado = atividade * (66 + ((13.7 * peso) + (5 * altura) - (6.8 * idade)));
  }
  else if (sexo == 3)
  {
    resultado = atividade * (655 + ((9.6 * peso) + (1.8 * altura) - (4.7 * idade)));
  }

  $("#Resultado").val(resultado);
});