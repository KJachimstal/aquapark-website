export default (state, action) => {
  switch (action.type) {
    case 'change_type':
      return {
        type: action.pricingType,
        name: action.pricingName,
      };
    default:
      return state;
  }
};
