const addCart=(id)=>({type:"ADD_TO_CART",payload:id})
const removeCart=(id)=>({type:"REMOVE_FROM_CART",payload:id})
const mapDispatch={
    addCart,
    removeCart
}
export default mapDispatch;
