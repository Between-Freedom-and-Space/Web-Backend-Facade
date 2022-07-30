import {Logger} from "./logger.js";

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