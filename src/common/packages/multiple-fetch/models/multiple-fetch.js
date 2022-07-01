import {Response} from "./response";

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