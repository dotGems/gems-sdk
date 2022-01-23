export let CODE = "atomicassets";

export function config(options: {code?: string} = {}) {
    if ( options.code ) CODE = options.code;
}