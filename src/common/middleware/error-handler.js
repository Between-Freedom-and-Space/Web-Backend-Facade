export function errorHandlerMiddleware(err, req, res, next) {
    console.error(err.stack)
    res.status(503)
    res.send(JSON.stringify({
        'status_code': 503,
        'status_message': 'Web-Backend-Facade unavailable',
        'error': {
            'message': err.message,
            'error_id': '-1'
        }
    }))
}