type DigitDictionary = { [key: string]: string };

const digitDictionary: DigitDictionary = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0',
};

const numbersSpelled = Array.of('zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine')

function isANumber(character: string): boolean {
    return !isNaN(parseInt(character));
}

export function recoverCalibrationValueFromSingleRow(row: string): number {
    return parseInt(findFirstNumber(row)! + findLastNumber(row)!)
}

function findFirstNumber(row: string) {

    for (let i = 0; i < row.length; i++) {
        if (findEquivalent(row, row.substring(0, i + 1), i)) {
            return findEquivalent(row, row.substring(0, i + 1), i)
        }
    }
}

function findLastNumber(row: string) {
    for (let i = row.length - 1; i >= 0; i--) {
        if (findEquivalent(row, row.substring(i), i)) {
            return findEquivalent(row, row.substring(i), i)
        }
    }
}

function findEquivalent(row: string, subString: string, index: number) {
    let singleCharacter = row.charAt(index)
    if (isANumber(singleCharacter)) {
        return singleCharacter
    }

    if (containsSpelledNumber(subString) != '') {
        return digitDictionary[containsSpelledNumber(subString)]
    }
}

function containsSpelledNumber(lettersSequence: string) {
    for (let i = 0; i < numbersSpelled.length; i++) {
        if (lettersSequence.includes(numbersSpelled[i])) {
            return numbersSpelled[i]
        }
    }
    return ''
}


