#!/usr/bin/env bash

# https://bloks.io/account/atomicassets?loadContract=true&tab=Tables&table=templates&account=atomicassets&scope=merijn.gems&limit=100&lower_bound=2417&upper_bound=2417
cleos -u https://eos.eosn.io get table atomicassets merijn.gems templates --lower 2417 --upper 2417