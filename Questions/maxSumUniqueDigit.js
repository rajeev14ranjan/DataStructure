let set = [121, 23, 3, 333, 4];

function getMask(number) {
    let mask = 0;
    while (number > 0) {
        let digit = number % 10;
        number = (number / 10) >> 0;
        mask = mask | (1 << (digit - 1))
    }
    return mask;
}

let hasTable = new Map();

function getMaxSum(allowedDigit) {
    if (hasTable.has(allowedDigit)) {
        return hasTable.get(allowedDigit)
    }

    let maxSum = 0;
    for (let num of set) {
        let numMask = getMask(num);

        // number is valid for selection
        if ((allowedDigit | numMask) == allowedDigit) {
            maxSum = Math.max(maxSum, num + getMaxSum(allowedDigit ^ numMask))
        }
    }

    hasTable.set(allowedDigit, maxSum);
    return maxSum;
}

console.log(`max sum = ${getMaxSum(1023)}`)
