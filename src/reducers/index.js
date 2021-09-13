const initialState = {
    data:[],
    isloading:false
}
const reducer = (state=initialState,action) =>{
    switch(action.type){
        case "LOADING":
            return{
                ...state,
                isloading:true
            }
        case "FETCH_DATA":
            return{
                ...state,
                isloading:false,
                data:action.payload
            }
        default: 
            return state
    }
}

export {reducer}