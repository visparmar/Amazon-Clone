export const initialState={
    basket:[],
    user:null
}

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

  
const reducer=(state,action)=>{
    // console.log(action);

    switch(action.type){
        case 'ADD_TO_BASKET':
             return {
                ...state,
                basket:[...state.basket,action.item],
             };

             case 'Remove_From_Basket':
                // console.log(typeof(action.id));
                return {
                    ...state,
                    basket:state.basket.filter(item=>item.id!==action.id),
                 };  

                 case 'SET_USER':
                    // console.log(typeof(action.id));
                    return {
                        ...state,
                        user:action.user,
                     }; 
                     case 'Blank_Basket':
                    // console.log(typeof(action.id));
                    return {
                        ...state,
                        basket:[],
                        
                     }; 

             default:
             return state
    }

};
export default reducer;