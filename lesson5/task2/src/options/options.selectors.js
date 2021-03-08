import { createSelector } from 'reselect';

export const optionsListSelector = state => state.optionsList;
export const selectedIdsSelector = state => state.selected;

export const selectedOptionsSelector = createSelector(
   [optionsListSelector, selectedIdsSelector],
   (allOptionsList, selectedIds) =>
      allOptionsList.filter(option => selectedIds.includes(option.id)),
);
// export const selectedOptionsSelector = state => {
//    const allOptionsList = optionsListSelector(state);
//    const selectedIds = selectedIdsSelector(state);

//    return allOptionsList.filter(option => selectedIds.includes(option.id));
// };

export const availableOptionsSelector = createSelector(
   [optionsListSelector, selectedIdsSelector],
   (allOptionsList, selectedIds) =>
      allOptionsList.filter(option => !selectedIds.includes(option.id)),
);

// export const availableOptionsSelector = state => {
//    const allOptionsList = optionsListSelector(state);
//    const selectedIds = selectedIdsSelector(state);

//    return allOptionsList.filter(option => !selectedIds.includes(option.id));
// };
