function sumEvenOdd() {

    const userNum = document.getElementById('user-number').value
    console.log(userNum)
    const arrayNum = [];
    let sumEven = 0
    let sumOdd = 0

    for (let index = 0; index < userNum; index++) {
        const num = prompt(`Escriba el ${index+1}º numero`)
        arrayNum.push(num)
        
        let evenNum = Number(arrayNum[index]) % 2 === 0
        let oddNum = Number(arrayNum[index]) % 2 !== 0
        
        evenNum ? sumEven += Number(arrayNum[index]) : sumOdd += Number(arrayNum[index])
    }
    console.log(arrayNum)
    console.log('SumaPares', sumEven)
    console.log('SumaImpares', sumOdd)

   const result = document.getElementById('result')
   result.innerHTML = `La suma de los numeros pares es ${sumEven} y de los impares es ${sumOdd}`
} 