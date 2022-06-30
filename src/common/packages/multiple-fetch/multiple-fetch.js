/**
 * MultipleFetch class.
 * @author Stanislav Klokov
 * @version v1.0.0
 */
export class MultipleFetch {
    /**
     * Constructs MultipleFetch instance.
     * @param log logger enable flag.
     */
    constructor(log = false) {
        this.fetchCount = 0
        this.loggerStatus = log
    }

    /**
     * Starts async process.
     * @param callback fetch function.
     * @returns {Response}
     */
    run(callback = async () => {}) {
        this.fetchCount++
        return new Response({
            callback,
            log: this.loggerStatus,
            id: this.fetchCount
        })
    }
}

/**
 * Response class.
 * @author Stanislav Klokov
 * @version v1.0.0
 */
export class Response {
    /**
     * Constructs Response instance.
     * @param callback fetch function.
     * @param log logger enable flag.
     * @param id process id.
     */
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

    /**
     * Syncs fetch and resolves promise.
     * @returns {Promise<*>}
     */
    synchronize = async () => {
        return await this.promise
    }
}

/**
 * Logger class.
 * @author Stanislav Klokov
 * @version v1.0.0
 */
class Logger {
    /**
     * Logger engine.
     * @returns {{fail: (function(*, *): void), success: (function(*): void), start: (function(*): void)}}
     */
    static log = () => ({
        // Process starting log
        start: id => console.log(`Process: ${id} started`),

        // Process success log
        success: id => console.log(`Process: ${id} succeed`),

        // Process fail log (with reason)
        fail: (id, err) => console.warn(`Process: ${id} failed with error: ${err}`),
    })
}

