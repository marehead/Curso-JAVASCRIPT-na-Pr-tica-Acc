$(document).ready(() => {
  $("#value_field").keyup((e) => {
    console.log(e.target.value)
    console.log($("#value_field").prop('value')) //https://acervolima.com/como-alterar-o-atributo-src-de-um-elemento-img-em-javascript-jquery/
    let value = e.target.value;
      //https://docs.microsoft.com/pt-br/dotnet/standard/base-types/regular-expression-language-quick-reference
    value = value.replace(/\D/g,"");

    let options = {
      style: 'currency',
      currency: 'BRL',
      useGrouping: false,
      minimumFractionDigits: 2
    }

    value = new Intl.NumberFormat('pt-BR', options).format(value/100);

    e.target.value = value;
  });
});

