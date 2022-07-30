export function collectResults(resultModels) {
    return resultModels.map((resultModel) => {
        const resultAlias = resultModel.alias
        const resultAnswer = resultModel.answer
        return {
            alias: resultAlias,
            answer: resultAnswer
        }
    })
}