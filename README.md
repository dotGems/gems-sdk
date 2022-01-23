# .gems Javascript SDK

[![Build Status](https://github.com/dotGems/gems-sdk/actions/workflows/test.yml/badge.svg)](https://github.com/dotGems/gems-sdk/actions/workflows/test.yml)
[![npm version](https://badge.fury.io/js/gems-sdk.svg)](https://badge.fury.io/js/gems-sdk)
[![MIT licensed](https://img.shields.io/badge/license-GNU-blue.svg)](https://raw.githubusercontent.com/dotGems/gems-sdk/master/LICENSE)

## Overview

- EOSIO RPC calls
- Typescript Interfaces/Types
- EOSIO Smart Contract
  - tables
  - actions
  - code

## Install

Using Yarn:

```bash
$ yarn add gems-sdk
```

or using NPM:

```bash
$ npm install --save gems-sdk
```

or using latest GitHub:

```bash
$ npm install --save dotGems/gems-sdk
```

## Quick Start

```js
import * as sdk from "gems-sdk"

(async () => {
  // Get .gems blends
  const collection_name = "memewarsreal";
  const blends = await sdk.gems.blend.get_blends(collection_name);
  console.log(blends);

  // Get .gems blend recipes
  const recipes = await sdk.gems.blend.get_recipes(collection_name);
  console.log(recipes);

  // Get AtomicDrops
  const drop_id = 81;
  const drop = await sdk.atomic.drops.get_drop(drop_id);
  console.log(drop);
})()
```

## Configure

```js
import * as sdk from "gems-sdk"

// change EOSIO endpoint
sdk.config({endpoint: "https://eos.eosn.io"});

// change particular smart contract
sdk.gems.blend.config({code: "d.blend.gems"});
```