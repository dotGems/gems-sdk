import { toISOString } from "../../helpers"

export async function addrecipe( id: { collection_name: string, template_id: number }, templates: { collection_name: string, template_id: number }[] ) {
    return {
        id,
        templates,
    }
}

export async function delblend( id: { collection_name: string, template_id: number } ) {
    return {
        id,
    }
}

export async function delrecipe( id: { collection_name: string, template_id: number }, recipe_id: number ) {
    return {
        id,
        recipe_id,
    }
}

export async function setblend( id: { collection_name: string, template_id: number }, description?: string, start_time?: Date, end_time?: Date ) {
    return {
        id,
        description,
        start_time: toISOString(start_time),
        end_time: toISOString(end_time),
    }
}
