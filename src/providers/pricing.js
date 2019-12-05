import React, { createContext, useReducer, useMemo } from 'react';
import pricingReducer from '../reducers/pricing';

export const PricingContext = createContext();

const initialState = { type: 'regular' };

const PricingProvider = ({ children }) => {
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

export default PricingProvider;
