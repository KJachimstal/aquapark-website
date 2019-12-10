import React, {
  createContext, useReducer, useMemo,
} from 'react';
import pricingReducer from '../reducers/pricing';

const initialState = { type: 'regular', name: 'normalny' };

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pricingReducer, initialState);

  const contextValue = useMemo(() => ({
    state, dispatch,
  }), [state, dispatch]);

  return (
    <PricingContext.Provider value={contextValue}>
      {children}
    </PricingContext.Provider>
  );
};
