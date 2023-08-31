// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 *  ######################################
 *  ### DO NOT EDIT THIS FILE DIRECTLY ###
 *  ######################################
 *
 * This file is generated from:
 * /crates/sui-open-rpc/spec/openrpc.json
 */

import type { DevInspectTransactionBlockParams } from '@mysten/sui.js/client';
import type { UseSuiClientMutationOptions } from '../useSuiClientMutation.js';
import { useSuiClientMutation } from '../useSuiClientMutation.js';

export function useDevInspectTransactionBlock(
	params: DevInspectTransactionBlockParams,
	options?: UseSuiClientMutationOptions<'devInspectTransactionBlock'>,
) {
	return useSuiClientMutation(
		{
			method: 'devInspectTransactionBlock',
			params,
		},
		options,
	);
}
