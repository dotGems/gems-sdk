#!/usr/bin/env bash

# https://bloks.io/account/d.blend.gems?loadContract=true&tab=Tables&account=d.blend.gems&scope=d.blend.gems&limit=100&table=blends
cleos -u https://eos.eosn.io get table d.blend.gems d.blend.gems blends --lower 1614 --upper 1614