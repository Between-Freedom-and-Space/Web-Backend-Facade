import multipleFetchConfig from './config.json'

/**
 * @summary Multiple fetch provider.
 * @param fetchTarget fetch entities.
 */
export function multipleFetch(fetchTarget) {
    if (multipleFetchConfig.logger) {
        console.log(fetchTarget)
    }
    if (!fetchTarget) {
        return {}
    }
    return {...fetchTarget}
}
