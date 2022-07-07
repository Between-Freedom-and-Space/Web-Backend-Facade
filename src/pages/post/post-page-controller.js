export const postPageAdapter = (app) => {

    app.get('/test', (request, response) => {
        response.json({
            'name': 'Stas'
        })
    })
}