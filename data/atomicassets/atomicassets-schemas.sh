#!/usr/bin/env bash

# https://bloks.io/account/atomicassets?loadContract=true&tab=Tables&table=schemas&account=atomicassets&scope=merijn.gems&limit=100&lower_bound=merijnworks1&upper_bound=merijnworks1
cleos -u https://eos.eosn.io get table atomicassets merijn.gems schemas --lower merijnworks1 --upper merijnworks1