// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { useMemo } from 'react';
import { useAccounts } from './useAccounts';
import { defaultSortOrder, groupByType } from '../helpers/accounts';

export function useAccountGroups() {
	const { data: accounts } = useAccounts();

	const sortedAndGroupedAccounts = useMemo(() => {
		return groupByType(accounts ?? []);
	}, [accounts]);

	const list = () => {
		return defaultSortOrder.flatMap((type) => {
			const group = sortedAndGroupedAccounts[type];
			return Object.values(group).flat();
		});
	};

	return { ...sortedAndGroupedAccounts, list };
}
