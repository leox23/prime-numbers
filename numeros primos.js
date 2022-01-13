let userInput = ""
//userInput = "11-13"
userInput = prompt("Este es un calculador de numeros primos\n\rForma de uso\r1) Ingrese solo un numero entero para calcular si es numero primo\r2) Ingrese un rango para calcular cuantos numeros del rango son numeros primos (ej: 23-57) del 23 al 57")

if (String(userInput).match(/-/gm)){
  ranNums = userInput.split('-')
  ranNums[0] = parseInt(ranNums[0])
  ranNums[1] = parseInt(ranNums[1])
  console.log(ranNums)
  rangoNumerosPrimos(ranNums[0],ranNums[1])
} else{
  numPrimo(parseInt(userInput))
}

function numPrimo(x) {
  switch(x) {
    case 1:
      alert('El ' + userInput + ' No es numero primo')
      return
    case 2:
      alert('El ' + userInput + ' Es numero primo')
      return
    default:
      for(var i=2;i < x; i++){
          //console.log("comenzando el for, da de resto: " + x % i + ' -- i vale ' + i)
          if (x % i == 0) {
            alert('El numero ' + x + ' es No es un numero primo')
            return
          } else if (i == x-1){
            alert('El numero ' + x + ' Es un numero primo')
            return
          }
      }
      return

  }
}

function rangoNumerosPrimos(x,y){
  var z = 0
  if (x == 1){
    z++
    x = 2
  }
  for (var I = x; I <= y; I++){
      for (var J = 2; J < I; J++){
        //console.log('J buscando vale: ' + J + ' despues de entrar segundo al for')
        if (I % J == 0) {
          //console.log('se dio cuenta que no es numero primo (' + I + ')')
          J = I
        } else if (J == I-1){
          //console.log('el numero ' + I + ' es primo')
          z++
          J = I
        }
    }
  }

  if (z != 0){
    alert('En el rango de numeros desde el ' + ranNums[0] + ' hasta el numero ' + y + ' existen ' + z + ' numeros primos')
    return
  } else {
    alert('Dentro de ese rango de numeros no hay numeros primos')
    return
  }
}
