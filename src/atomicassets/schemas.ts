import { get_table_rows } from "../helpers"
import { AtomicAssets } from "../../types/atomicassets"

export async function get_schemas( collection_name: string, schema_name: string ): Promise<AtomicAssets.Schemas[]> {
    const code = "atomicassets";
    const scope = collection_name;
    const table = "schemas";
    const lower_bound = schema_name;
    const upper_bound = schema_name;
    return get_table_rows(code, scope, table, {lower_bound, upper_bound});
}

// (async () => {
//     console.log( await get_schemas( "merijn.gems", "merijnworks1") );
// })();
