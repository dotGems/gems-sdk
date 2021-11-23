import { get_table_rows } from "../../helpers"
import { Blends, Status, Recipes, Scopes } from "./types"
import { CODE } from "./code"

export async function get_blends( collection_name: string, template_id?: number ): Promise<Blends[]> {
    const code = CODE;
    const scope = collection_name;
    const table = "blends";
    const lower_bound = template_id;
    const upper_bound = template_id;
    return get_table_rows(code, scope, table, { lower_bound, upper_bound });
}

export async function get_recipes( collection_name: string, id?: number ): Promise<Recipes[]> {
    const code = CODE;
    const scope = collection_name;
    const table = "recipes";
    const lower_bound = id;
    const upper_bound = id;
    return get_table_rows(code, scope, table, { lower_bound, upper_bound } );
}

export async function get_status( ): Promise<Status[]> {
    const code = CODE;
    const scope = CODE;
    const table = "status";
    return get_table_rows(code, scope, table);
}

export async function get_scopes( ): Promise<Scopes[]> {
    const code = CODE;
    const scope = CODE;
    const table = "scopes";
    return get_table_rows(code, scope, table);
}

// (async () => {
//     console.log( (await get_blends("memewarsreal")) );
//     console.log( (await get_recipes("memewarsreal")) );
// })();