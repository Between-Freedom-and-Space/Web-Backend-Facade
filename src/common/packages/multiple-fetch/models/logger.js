/**
 * Logger class.
 * @author Stanislav Klokov
 * @version v1.0.0
 */
export class Logger {
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