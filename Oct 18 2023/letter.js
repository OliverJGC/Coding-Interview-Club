const list = [['A', 'B'], ['B', 'E'], ['H', 'E'], ['Z', 'H']]

let letterA = []

const functionLoop = () => {
    for (let i = 0; i < letterA.length; i++) {
        console.log(letterA[i])
    }
}

const findA = () => {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            if (list[i][j] == 'A') {
                letterA.push([list[i][j],list[i][j + 1]])
            }
        }
    }
    functionLoop()
}

findA()
