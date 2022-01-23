import { EOSIO_RPC } from "./config"
import fetch from "isomorphic-fetch";

function post( url: string, body: any ) {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    return fetch( url, {method: "POST", headers, body: JSON.stringify(body)});
}

export async function get_table_rows<T = any>( code: string, scope: string|number, table: string, options: {
    lower_bound?: string|number,
    upper_bound?: string|number,
    reverse?: boolean,
} = {} ): Promise<T[]> {
    const url = EOSIO_RPC + "/v1/chain/get_table_rows"

    const params: any = { code, scope, table, json: true }
    if ( options.lower_bound ) params.lower_bound = options.lower_bound;
    if ( options.upper_bound ) params.upper_bound = options.upper_bound;
    if ( options.reverse ) params.reverse = options.reverse;
    try {
        const response = await post( url, params );
        return (await response.json()).rows;
    } catch (e) {
        console.error(e);
    }
    return [];
}

export function toISOString( date?: Date ) {
    if ( !date ) return "";
    return date.toISOString().split(".")[0];
}
