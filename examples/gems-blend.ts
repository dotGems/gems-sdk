import * as gems from ".."

async function main( ) {
    // 0. Get all supported collections
    for ( const collection_name of await gems.blend.get_collections() ) {

        // 1. Get Blends
        const blends = (await gems.blend.get_blends(collection_name));
        console.log(blends);

        // 2. Get Recipes
        const recipes = (await gems.blend.get_recipes(collection_name));
        console.log(recipes);
    }
}

// USER INPUT
main().catch(e => console.error(e));
