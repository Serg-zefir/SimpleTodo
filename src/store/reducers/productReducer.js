const initState = {}

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PRODUCT_SUCCESS':
      console.log('create product success');
      return state;
    case 'CREATE_PRODUCT_ERROR':
      console.log('create product error');
      return state;
    case 'UPDATE_PRODUCT_SUCCESS':
      console.log('UPDate product success');
      return state;
    case 'UPDATE_PRODUCT_ERROR':
      console.log('UPDate product error');
      return state;
    case 'DELETE_PRODUCT_SUCCESS':
      console.log('DELEte product success');
      return state;
    case 'DELETE_PRODUCT_ERROR':
      console.log('DELEte product error');
      return state;
    default:
      return state;
  }
};

export default productReducer;