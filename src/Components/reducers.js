export const initialState = {
    some: 'Hola'
}

const reducer = (state,action)=>{
    switch (action.type) {
        case 'SET_SOME':
            return{
                ...state,
                some: action.some
            }
        default:
            return {...state}
    }
}

export default reducer;