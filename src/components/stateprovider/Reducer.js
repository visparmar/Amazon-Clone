export const initialState={
    basket:[],
    user:null
}


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

             default:
             return state
    }

};
export default reducer;