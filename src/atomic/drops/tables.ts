import { get_table_rows } from "../../helpers"
import { Drops } from "./types"
import { CODE } from "./code";

export async function get_drops( drop_id: number ): Promise<Drops[]> {
    const code = CODE;
    const scope = CODE;
    const table = "drops";
    const lower_bound = drop_id;
    const upper_bound = drop_id;
    return get_table_rows(code, scope, table, {lower_bound, upper_bound});
}

// (async () => {
//     console.log( (await get_drops(81))[0] );
// })();