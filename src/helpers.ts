import { rpc } from "./config"

export async function get_table_rows<T = any>( code: string, scope: string|number, table: string, options: {
    lower_bound?: string|number,
    upper_bound?: string|number,
    reverse?: boolean,
} = {} ): Promise<T[]> {

    const params: any = { code, scope, table, json: true }
    if ( options.lower_bound ) params.lower_bound = options.lower_bound;
    if ( options.upper_bound ) params.upper_bound = options.upper_bound;
    if ( options.reverse ) params.reverse = options.reverse;
    try {
        return (await rpc.get_table_rows(params)).rows;
    } catch (e) {
        console.error(e);
    }
    return [];
}

export function toISOString( date?: Date ) {
    if ( !date ) return "";
    return date.toISOString().split(".")[0];
}
