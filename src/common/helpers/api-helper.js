export function createGetBasePath(path) {
    return () => process.env.MONO_BACKEND_URL + path
}