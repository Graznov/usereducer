export const reduser = (state, action) => {

    switch (action.type){
        case 'ADD_TEXT' : {

            return{
                ...state,
                arrWork : [...state.arrWork, action.payload],
                workValue : state.workValue++,
                endValue : state.endValue,
                data : action.data
            }
        }
        case 'GREEN' : {
            console.log('GREEN, action.payload: ', action.payload)
            if(action.payload){
                return {
                    ...state,
                    endValue : state.endValue--
                }
            } else {
                return {
                    ...state,
                    endValue : state.endValue++
                }
            }

        }
        case 'RED' : {

            return {
                ...state,
                arrWork : state.arrWork.filter(e => e !== action.payload),
                workValue : state.workValue--,
                endValue : state.endValue--
            }
        }
        default : return state
    }
}