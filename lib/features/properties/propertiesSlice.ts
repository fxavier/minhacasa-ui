import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Property } from '@/types/property';

interface PropertiesState {
  items: Property[];
  loading: boolean;
  error: string | null;
  filters: {
    priceRange: [number, number];
    propertyType: string | null;
    bedrooms: number | null;
    bathrooms: number | null;
    searchTerm: string;
    purpose: 'buy' | 'rent';
  };
}

const initialState: PropertiesState = {
  items: [],
  loading: false,
  error: null,
  filters: {
    priceRange: [0, 1000000],
    propertyType: null,
    bedrooms: null,
    bathrooms: null,
    searchTerm: '',
    purpose: 'buy',
  },
};

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<Property[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    updateFilters: (state, action: PayloadAction<Partial<PropertiesState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setProperties, setLoading, setError, updateFilters } = propertiesSlice.actions;
export default propertiesSlice.reducer;