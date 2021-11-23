export interface Blends {
    id: {
        collection_name: string;
        template_id: number;
    };
    recipe_ids: number[];
    description: string;
    start_time: Date;
    end_time: Date;
}

export interface Status {
    counters: number[];
    last_updated: Date;
}

export interface Scopes {
    collection_name: string[];
}

export interface Recipes {
    id: number;
    templates: {
        collection_name: string;
        template_id: number;
    }[];
}
