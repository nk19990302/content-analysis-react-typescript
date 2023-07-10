export const calculateMedian = (numbers: number[]): number => {
    numbers.sort((a, b) => a - b);

    const middleIndex = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        return roundTo3Digit((numbers[middleIndex - 1] + numbers[middleIndex]) / 2);
    } else {
        return roundTo3Digit(numbers[middleIndex]);
    }
}

export const calculateMean = (numbers: number[]): number => {
    const sum = numbers.reduce((a, b) => Number(a) + Number(b));
    return roundTo3Digit(sum / numbers.length);
}

export const calculateMode = (numbers: number[]) => {
    const modeMap: { [key: number]: number } = {};
    let maxCount = 0;
    let mode: number | string = "NA";

    numbers.forEach(number => {
        if (modeMap[number] === undefined) {
            modeMap[number] = 1;
        } else {
            modeMap[number]++;
        }

        if (modeMap[number] > maxCount) {
            maxCount = modeMap[number];
            mode = number;
        }
    });

    if (maxCount === 1) {
        mode = "NA";
    }

    return mode;
}

export const roundTo3Digit = (num: number): number => {
    return Math.round(num * 1000) / 1000
}