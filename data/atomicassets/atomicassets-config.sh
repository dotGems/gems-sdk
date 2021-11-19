#!/usr/bin/env bash

# https://bloks.io/account/atomicassets?loadContract=true&tab=Tables&table=config&account=atomicassets&scope=atomicassets&limit=100
# can be hardcoded, values don't change
cleos -u https://eos.eosn.io get table atomicassets atomicassets config