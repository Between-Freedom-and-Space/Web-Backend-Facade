export function collectResults(resultModels) {
    const result = []

    resultModels.forEach((resultModel) => {
        const resultAlias = resultModel.alias
        const resultAnswer = resultModel.answer
        result.push({
            alias: resultAlias,
            answer: resultAnswer
        })
    })

    return result
}