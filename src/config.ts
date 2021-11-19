import { JsonRpc } from 'eosjs';
import fetch from "isomorphic-fetch";

// EOSIO endpoints
export const EOSIO_CHAIN_ID = process.env.EOSIO_CHAIN_ID || 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
export const EOSIO_RPC = process.env.EOSIO_RPC || 'https://eos.greymass.com';
export const rpc = new JsonRpc(EOSIO_RPC, {fetch});
