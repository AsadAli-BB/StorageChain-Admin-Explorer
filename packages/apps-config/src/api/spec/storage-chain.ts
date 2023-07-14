// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type {OverrideBundleDefinition} from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  "instances": {
    "council": [
      "councilCollective"
    ],
    "technicalCommittee": [
      "techCommitteeCollective"
    ]
  },
  "types": [
    {
      "minmax": [
        0,
        undefined
      ],
      "types": {
        "AccountId": "EthereumAccountId",
        "AccountId20": "EthereumAccountId",
        "AccountId32": "EthereumAccountId",
        "Address": "AccountId20",
        "Keys": "SessionKeys3",
        "LookupSource": "AccountId20",
        "Balance": "u128",
        "Nominator": {
          "nominations": "Vec<Bond>",
          "total": "Balance"
        },
        "Bond": {
          "owner": "EthereumAccountId",
          "amount": "Balance"
        },
        "ValidatorStatus": {
          "_enum": {
            "Active": "Null",
            "Idle": "Null",
            "Leaving": "RoundIndex"
          }
        },
        "EthereumSignature": {
          "r": "H256",
          "s": "H256",
          "v": "U8"
        },
        "Account": {
          "nonce": "U256",
          "balance": "u128"
        },
        "EthTransaction": "LegacyTransaction",
        "ExtrinsicSignature": "EthereumSignature"
      }
    }
  ]


};

export default definitions;
