import { get_table_rows } from "../helpers"
import { GemsBlend } from "../../types/blend.gems"

export async function get_blends( template_id: number ): Promise<GemsBlend.Blends[]> {
    const code = "d.blend.gems";
    const scope = "d.blend.gems";
    const table = "blends";
    const lower_bound = template_id;
    const upper_bound = template_id;
    return get_table_rows(code, scope, table, {lower_bound, upper_bound});
}

(async () => {
    console.log( (await get_blends(1614))[0] );
})();