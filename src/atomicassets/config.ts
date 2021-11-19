import { get_table_rows } from "../helpers"
import { AtomicAssets } from "../../types/atomicassets"

export async function get_config(): Promise<AtomicAssets.Config[]> {
    const code = "atomicassets";
    const scope = "atomicassets";
    const table = "config";
    return get_table_rows( code, scope, table );
}

// (async () => {
//     console.log( await get_config() );
// })();