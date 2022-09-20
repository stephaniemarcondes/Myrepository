function sumTwoSmallestNumbers(numbers) {  
    let numbersAscendente = numbers.sort(function(a, b) {
        return a - b;
    });
    let sum = numbersAscendente[0] + numbersAscendente[1]
    return sum }

   

