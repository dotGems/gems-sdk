#!/usr/bin/env bash

# https://bloks.io/account/atomicassets?loadContract=true&tab=Tables&table=collections&account=atomicassets&scope=atomicassets&limit=100&lower_bound=merijn.gems&upper_bound=merijn.gems
cleos -u https://eos.eosn.io get table atomicassets atomicassets collections --lower merijn.gems --upper merijn.gems