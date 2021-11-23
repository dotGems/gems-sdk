import { get_table_rows } from "../../helpers"
import { Config, Collections, Schemas, Templates } from "./types"
import { CODE } from "./code";

export async function get_config(): Promise<Config> {
    const code = CODE;
    const scope = CODE;
    const table = "config";
    return (await get_table_rows<Config>( code, scope, table ))[0];
}

export async function get_schemas( collection_name: string, schema_name: string ): Promise<Schemas[]> {
    const code = CODE;
    const scope = collection_name;
    const table = "schemas";
    const lower_bound = schema_name;
    const upper_bound = schema_name;
    return get_table_rows(code, scope, table, {lower_bound, upper_bound});
}

export async function get_templates( collection_name: string, template_id: number ): Promise<Templates[]> {
    const code = CODE;
    const scope = collection_name;
    const table = "templates";
    const lower_bound = template_id;
    const upper_bound = template_id;
    return get_table_rows(code, scope, table, {lower_bound, upper_bound});
}

export async function get_collections( collection_name: string ): Promise<Collections[]> {
    const code = CODE;
    const scope = CODE;
    const table = "collections";
    const lower_bound = collection_name;
    const upper_bound = collection_name;
    return get_table_rows(code, scope, table, {lower_bound, upper_bound});
}

// (async () => {
//     console.log( await get_collections("merijn.gems") );
// })();