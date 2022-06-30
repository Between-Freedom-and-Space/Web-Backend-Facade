export class MultipleFetch {
    constructor(log = false) {
        this.fetchCount = 0
        this.loggerStatus = log
    }

    run(callback = async () => {}) {
        this.fetchCount++
        return new Response({
            callback,
            log: this.loggerStatus,
            id: this.fetchCount
        })
    }
}

export class Response {
    constructor({callback, log, id}) {
        this.promise = new Promise(resolve => resolve(undefined))
        try {
            log && Logger.log().start(id)
            this.promise = callback()
            log && Logger.log().success(id)
        } catch (err) {
            log && Logger.log().fail(id, err)
        }
    }

    synchronize = async () => {
        return await this.promise
    }
}

class Logger {
    static log = () => ({
        start: id => console.log(`Process: ${id} started`),
        success: id => console.log(`Process: ${id} succeed`),
        fail: (id, err) => console.warn(`Process ${id} failed with ${err}`)
    })
}

