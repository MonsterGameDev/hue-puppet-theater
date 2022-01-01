import { createSelector } from '@ngrx/store';
import { AppState, Group, Groups } from '../state.interfaces';

export const selectGroups = (state: AppState) => state.groups;

export const selectAllRooms = createSelector(
  selectGroups,
  (state: Groups) => state.groups.filter((group: Group) => group.type.toLowerCase() === 'room' )
);

export const selectAllZones = createSelector(
  selectGroups,
  (state: Groups)=> state.groups.filter((group: Group) => group.type.toLowerCase() === 'zone' )
)

export const selectAllLightGroups = createSelector(
  selectGroups,
  (state: Groups)=> state.groups.filter((group: Group) => group.type.toLowerCase() === 'lightgroup' )
);

export const getSelectedGroup = createSelector(
  selectGroups,
  (state: Groups): Group | undefined  => state.groups.find((group: Group) => group.id === state.selectedGroupId)
);

export const getSelectedGroupAction = createSelector(
  selectGroups,
  getSelectedGroup,
  (state, selectedGroup) => selectedGroup?.action
)

