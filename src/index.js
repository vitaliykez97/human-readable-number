module.exports = function toReadable (number) {
    
    

    var obj = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 11:'eleven',12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen', 20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety', 100:'hundred', 1000:'thousand', 1000000:'million'};
    var ex = number.toString()

    // var text = 'lol'
    var arr 
    // var dozens
    var result
  
  function oneToNinetyNine ( x ){
    arr = Array.from(x.toString())
    if (x>0 && x<10){
      result = `${obj[arr[0]]}`
    } else if (x>=10 && x<20){
      result = `${obj[arr[0] + arr[1]]}`
    } else if (x>=20 && x<=99){
      if (Number(arr[1]) === 0){
        result = `${obj[arr[0] + '0']}`
      } else {
        result = `${obj[arr[0] + '0']} ${obj[arr[1]]}`
      }
    }
  }
  
  function sto (x){
    result = `${obj[x]} ${obj[100]}`
  }
  
//   function threeDigit( number ){
    if (Number(ex) === 0){result = 'zero'
    } else if (Number(ex).toString().length === 1 || Number(ex).toString().length === 2){
      oneToNinetyNine(Number(ex))
    } else if (Number(ex).toString().length === 3 && Number(ex[1]) === 0 && Number(ex[2]) === 0){
      sto(Number(ex[0]))
    } else if (Number(ex).toString().length === 3 && Number(ex[0]) !== 0){
      oneToNinetyNine(Number(ex[1] + ex[2]))
      result = `${obj[ex[0]]} ${obj[100]} ${result}` 
    } else if (Number(ex).toString().length === 3 && Number(ex[0]) === 0){
      oneToNinetyNine(Number(ex[1] + ex[2]))
    }
//   }
  
//   if (ex.length >= 1 && ex.length <= 3){
//     var result = 'sos'
//     threeDigit(ex)
//   } else if (ex.length > 3 && ex.length <= 6){
//     var result = ''
//     var numOne = ex[ex.length-3] + ex[ex.length-2] + ex[ex.length-1]
//     var numTho = ex[ex.length-6] + ex[ex.length-5] + ex[ex.length-4]
//     threeDigit(numTho)
//     console.log(result)
//     dozens = obj[1000]
//     result = `${result} ${dozens} `
//     threeDigit(numOne)
//     console.log(result)
//     text = text + 'sos'
//   } else if (ex.length > 6)
  
  
//   console.log(num)
//   console.log(ex.length)
//   console.log(ex[ex.length-3])
  console.log(result)
  return result
}
