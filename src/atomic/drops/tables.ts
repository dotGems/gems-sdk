import { get_table_rows } from "../../helpers"
import { Drops } from "./types"
import { CODE } from "./code";

export async function get_drops( drop_ids: number[] ): Promise<Drops[]> {
    const code = CODE;
    const scope = CODE;
    const table = "drops";
    const lower_bound = Math.min(...drop_ids);
    const upper_bound = Math.max(...drop_ids);
    const rows = await get_table_rows<Drops>(code, scope, table, {lower_bound, upper_bound});
    return rows.filter(({drop_id}) => drop_ids.includes(drop_id))
}

export async function get_drop( drop_id: number ): Promise<Drops|null> {
    const code = CODE;
    const scope = CODE;
    const table = "drops";
    const lower_bound = drop_id;
    const upper_bound = drop_id;
    const rows = await get_table_rows(code, scope, table, {lower_bound, upper_bound});
    return rows.length ? rows[0] : null;
}

// (async () => {
//     // console.log( await get_drops([81, 83]) );
//     // console.log( await get_drop(81) );
// })();