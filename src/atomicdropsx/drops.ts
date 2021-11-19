import { get_table_rows } from "../helpers"
import { AtomicDrops } from "../../types/atomicdropsx"

export async function get_drops( drop_id: number ): Promise<AtomicDrops.Drops[]> {
    const code = "atomicdropsx";
    const scope = "atomicdropsx";
    const table = "drops";
    const lower_bound = drop_id;
    const upper_bound = drop_id;
    return get_table_rows(code, scope, table, {lower_bound, upper_bound});
}

// (async () => {
//     console.log( (await get_drops(81))[0] );
// })();