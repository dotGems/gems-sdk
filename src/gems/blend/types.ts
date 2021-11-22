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