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

import type { ExecuteTransactionBlockParams } from '@mysten/sui.js/client';
import type { UseSuiClientMutationOptions } from '../useSuiClientMutation.js';
import { useSuiClientMutation } from '../useSuiClientMutation.js';

export function useExecuteTransactionBlock(
	params: ExecuteTransactionBlockParams,
	options?: UseSuiClientMutationOptions<'executeTransactionBlock'>,
) {
	return useSuiClientMutation(
		{
			method: 'executeTransactionBlock',
			params,
		},
		options,
	);
}
