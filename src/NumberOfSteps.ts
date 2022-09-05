export function numberOfSteps(num: number): number {

    let steps = 0
    let targetNumber = num

    while (targetNumber !== 0) {

        if (targetNumber % 2 === 0) {
            targetNumber /= 2

        }
        else {
            --targetNumber
        }

        steps++
    }


    return steps
}