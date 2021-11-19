import { get_table_rows } from "../helpers"
import { AtomicAssets } from "../../types/atomicassets"

export async function get_templates( collection_name: string, template_id: number ): Promise<AtomicAssets.Templates[]> {
    const code = "atomicassets";
    const scope = collection_name;
    const table = "templates";
    const lower_bound = template_id;
    const upper_bound = template_id;
    return get_table_rows(code, scope, table, {lower_bound, upper_bound});
}

// (async () => {
//     console.log( await get_templates("merijn.gems", 2417) );
// })();