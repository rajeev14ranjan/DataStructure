let numberSet = [121, 23, 3, 333, 4];

function getMask(number) {
    let mask = 0;
    while (number > 0) {
        let digit = number % 10;
        number = (number / 10) >> 0;
        mask = mask | (1 << digit)
    }
    return mask;
}

let hashTable = new Map();

function getMaxSum(allowedDigits) {
    if (hashTable.has(allowedDigits)) {
        return hashTable.get(allowedDigits)
    }

    let maxSum = 0;
    for (let num of numberSet) {
        let numMask = getMask(num);

        // number is valid for selection
        if ((allowedDigits | numMask) == allowedDigits) {
            maxSum = Math.max(maxSum, num + getMaxSum(allowedDigits ^ numMask))
        }
    }

    hashTable.set(allowedDigits, maxSum);
    return maxSum;
}

console.log(`max sum = ${getMaxSum(1023)}`)
