export let CODE = "atomicdropsx";

export function config(options: {code?: string} = {}) {
    if ( options.code ) CODE = options.code;
}