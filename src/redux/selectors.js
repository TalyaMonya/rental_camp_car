export const selectCampers = state => state.catalog.items;

export const selectFavoriteCampers = state => state.catalog.favoriteList;

export const selectVehicleEquipFilter = state => state.filters.vehicleEquipment;

export const selectVehicleTypeFilter = state => state.filters.vehicleType;

export const selectIsLoading = state => state.catalog.isLoading;