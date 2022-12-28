// CREATED BY MIRZOEV 28.12.2022
function findTheNumberPlate(customerID: number) : string {
    let seriaCount: number = Math.trunc((customerID)/ 999);
    let seriaNumber: number = 1 + ((customerID) % 999);
    return seriaGenerate(seriaCount) + seriaNumberGenerate(seriaNumber)
}

function seriaNumberGenerate(seriaNumber: number): string{
    if(seriaNumber < 10){
        return `00${seriaNumber}`
    }
    if(seriaNumber < 100){
        return `0${seriaNumber}`
    }
    return `${seriaNumber}`
}

function seriaGenerate(seriaCount: number): string{
    let firstLetterNumber: number = seriaCount % 26
    let secondLetterNumber: number = Math.trunc((seriaCount % 676) / 26);
    let lastLetterNumber: number = Math.trunc((seriaCount / 676));
    return getLetterByCode(firstLetterNumber) + getLetterByCode(secondLetterNumber) + getLetterByCode(lastLetterNumber)
}

function getLetterByCode(num: number): string{
    return String.fromCharCode(97 + num)
}