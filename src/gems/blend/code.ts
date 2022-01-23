export let CODE = "d.blend.gems";

export function config(options: {code?: string} = {}) {
    if ( options.code ) CODE = options.code;
}
