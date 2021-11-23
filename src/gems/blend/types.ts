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

export interface Collections {
    collection_names: string[];
}

export interface Recipes {
    id: number;
    templates: {
        collection_name: string;
        template_id: number;
    }[];
}
