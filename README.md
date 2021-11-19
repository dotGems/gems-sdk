# .gems Javascript SDK

[![Build Status](https://travis-ci.org/dotGems/gems-sdk.svg?branch=master)](https://travis-ci.org/dotGems/gems-sdk)
[![npm version](https://badge.fury.io/js/gems-sdk.svg)](https://badge.fury.io/js/gems-sdk)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dotGems/gems-sdk/master/LICENSE)

## Install

Using Yarn:

```bash
$ yarn add gems-sdk
```

or using NPM:

```bash
$ npm install --save gems-sdk
```

## Quick Start

```js
import * as gems from "gems-sdk"

// Round Computations
const drop_id = 81;
const drop = (await gems.atomicdropsx.get_drops(drop_id))[0]

// drop =>
{
  drop_id: 81,
  collection_name: 'merijn.gems',
  assets_to_mint: [ { template_id: 2420, tokens_to_back: [] } ],
  listing_price: '10.0000 EOS',
  settlement_symbol: '4,EOS',
  price_recipient: 'merijn.gems',
  fee_rate: '0.02000000000000000',
  auth_required: 0,
  account_limit: 0,
  account_limit_cooldown: 0,
  max_claimable: 21,
  current_claimed: 21,
  start_time: 1634486400,
  end_time: 0,
  display_data: ''
}
```