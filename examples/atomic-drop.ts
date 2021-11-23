import * as gems from ".."
import { deserialize, ObjectSchema } from "atomicassets"

async function main(drop_id: number) {
    // 0. Get config // can hardcode values
    const config = (await gems.atomic.assets.get_config())[0];

    // 1. Get Drop details
    const drop = (await gems.atomic.drops.get_drops(drop_id))[0];
    const collection_name = drop.collection_name
    const template_id = drop.assets_to_mint[0].template_id // could have multiples (but not common)
    console.log(drop);

    // 2. Get Collection details
    const collections = (await gems.atomic.assets.get_collections( collection_name ))[0];
    const description = deserialize(new Uint8Array(collections.serialized_data), ObjectSchema( config.collection_format ) );
    console.log(description);

    // 3. Get Template IDs details
    const templates = await gems.atomic.assets.get_templates( collection_name, template_id );
    const { schema_name, immutable_serialized_data } = templates[0];
    console.log(templates[0]);

    // 4. Get Schemas
    const schemas = await gems.atomic.assets.get_schemas( collection_name, schema_name );
    const { format } = schemas[0];

    // Deserialize Immutable
    const metadata = deserialize(new Uint8Array(immutable_serialized_data), ObjectSchema( format ) );
    console.log(metadata);
}

// USER INPUT
const drop_id = 81;
main(drop_id).catch(e => console.error(e));