import * as sdk from ".."

sdk.config({endpoint: "https://eos.eosn.io"});
sdk.gems.blend.config({code: "d.blend.gems"});

async function main( ) {
    // 0. Get all supported collections
    for ( const collection_name of await sdk.gems.blend.get_collections() ) {

        // 1. Get Blends
        const blends = await sdk.gems.blend.get_blends(collection_name);
        console.log(JSON.stringify(blends, null, 4));

        // 2. Get Recipes
        const recipes = await sdk.gems.blend.get_recipes(collection_name);
        console.log(JSON.stringify(recipes, null, 4));
    }
}

// USER INPUT
main().catch(e => console.error(e));
