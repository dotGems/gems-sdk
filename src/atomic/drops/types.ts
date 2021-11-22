export interface AssetsToMint {
    template_id: number;
    tokens_to_back: any[];
}

export interface Drops {
    drop_id: number;
    collection_name: string;
    assets_to_mint: AssetsToMint[];
    listing_price: string;
    settlement_symbol: string;
    price_recipient: string;
    fee_rate: string;
    auth_required: number;
    account_limit: number;
    account_limit_cooldown: number;
    max_claimable: number;
    current_claimed: number;
    start_time: number;
    end_time: number;
    display_data: string;
}
