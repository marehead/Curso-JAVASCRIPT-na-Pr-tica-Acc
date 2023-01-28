function minhaFuncao(imc) {
  if(imc<18.5) {
    console.log('Baixo peso')
  } else if(imc>=18.5 && imc<25) {
    console.log('peso normal')
  } else if(imc>=25 && imc <30) {
    console.log('excesso de peso')
  } else if(imc>=30 && imc <35) {
    console.log('obesidade')
  } else {
    console.log('obesidade extrema')
  }
}

minhaFuncao(18.5)