import { get_table_rows } from "../helpers"
import { AtomicAssets } from "../../types/atomicassets"

export async function get_collections( collection_name: string ): Promise<AtomicAssets.Collections[]> {
    const code = "atomicassets";
    const scope = "atomicassets";
    const table = "collections";
    const lower_bound = collection_name;
    const upper_bound = collection_name;
    return get_table_rows(code, scope, table, {lower_bound, upper_bound});
}

// (async () => {
//     console.log( await get_collections("merijn.gems") );
// })();