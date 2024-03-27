
const intialState = {
    bills:[]
}

export const billReducer = (state=intialState,actions)=>{
    const {type,payload} = actions
switch(type){
case "LIST_DATA":
    return{
      bills:[...state.bills,payload]
    }
    default:
      return state;
}

}