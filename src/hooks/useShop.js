import create from 'zustand';
import produce from 'immer';

export const SHOP_INITIAL_STATE = {
  categories: [],
  // prices: [],
};

export const useShop = create((set, get) => ({
  ...SHOP_INITIAL_STATE,

  setOptionIsActive: (id, isActive, filterKey) =>
    set(
      produce(state => {
        const filterOptions = state[filterKey];

        const option = filterOptions.find(opt => opt.id === id);

        if (!filterKey || !filterOptions || !option) return;

        option.active = isActive;
      })
    ),

  clearFilterByKey: filterKey =>
    set(
      produce(state => {
        const filterOptions = state[filterKey];

        if (!filterOptions) return;

        for (let i = 0, l = filterOptions.length; i < l; i++) {
          filterOptions[i].active = false;
        }
      })
    ),

  clearAllFilters: () =>
    set(
      produce(state => {
        Object.values(state).forEach(val => {
          if (typeof val === 'function' || !Array.isArray(val)) return;

          val.forEach(opt => {
            opt.active = false;
            if (opt.value !== undefined) opt.value = null;
          });
        });
      })
    ),

  initFilters: filterObjects => {
    set(
      produce(state => {
        for (let filter of filterObjects) {
          state[filter.key] = filter.options;
        }
      })
    );
  },
}));
