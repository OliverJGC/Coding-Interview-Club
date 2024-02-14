const message = 'f4gpx8b32w9m'
const messageTest = 'fc3a4gpx8b32w9'

const length = message.length

for (let i = 0; i <= length; i++) {
    let lengthNum = 0
    let lengthLetters = 0
    let listNum = []
    let listLetters = []

    for (let j = i; j <= length - 1; j++) {
        if (parseInt(message[j])) {
            listNum.push(message[j])
        }
        else {
            listLetters.push(message[j])
        }

        lengthNum = listNum.length
        lengthLetters = listLetters.length

    }

    if (lengthNum == lengthLetters) {
        let newString = []
        for (w = i; i <= length; w++) {
            newString.push(message[w])
            if (newString.length == length) {
                break
            }
        }
        console.log(newString.join(""))
        break
    }
}


