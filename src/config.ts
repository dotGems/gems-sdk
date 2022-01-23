// EOSIO endpoints
export let EOSIO_CHAIN_ID = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
export let EOSIO_RPC = 'https://eos.greymass.com';

export function config(options: {endpoint?: string, chain_id?: string} = {}) {
    if ( options.endpoint ) EOSIO_RPC = options.endpoint;
    if ( options.chain_id ) EOSIO_CHAIN_ID = options.chain_id;
}