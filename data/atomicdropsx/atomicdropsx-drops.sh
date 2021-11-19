#!/usr/bin/env bash

# https://bloks.io/account/atomicdropsx?loadContract=true&tab=Tables&table=drops&account=atomicdropsx&scope=atomicdropsx&limit=100&lower_bound=81&upper_bound=81
cleos -u https://eos.eosn.io get table atomicdropsx atomicdropsx drops --lower 81 --upper 81