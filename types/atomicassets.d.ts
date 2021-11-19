export namespace AtomicAssets {

    export interface Collections {
        collection_name: string;
        author: string;
        allow_notify: number;
        authorized_accounts: string[];
        notify_accounts: any[];
        market_fee: string;
        serialized_data: number[];
    }

    export interface Templates  {
        template_id: number;
        schema_name: string;
        transferable: number;
        burnable: number;
        max_supply: number;
        issued_supply: number;
        immutable_serialized_data: number[];
    }

    export interface Schemas  {
        template_id: number;
        schema_name: string;
        transferable: number;
        burnable: number;
        max_supply: number;
        issued_supply: number;
        immutable_serialized_data: number[];
    }

    export interface Format {
        name: string;
        type: string;
    }

    export interface Schemas {
        schema_name: string;
        format: Format[];
    }

    export interface SupportedToken {
        sym: string;
        contract: string;
    }

    export interface Config {
        asset_counter: string;
        template_counter: number;
        offer_counter: number;
        collection_format: Format[];
        supported_tokens: SupportedToken[];
    }

}

