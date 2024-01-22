export const reduser = (state, action) => {

    switch (action.type){
        case 'ADD_TEXT' : {
            // console.log(action)
            return{
                ...state,
                arrWork : [...state.arrWork, {text:action.payload, key:action.keyData}],
                workValue : state.workValue++,
                endValue : state.endValue,
            }
        }
        case 'GREEN' : {
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
                arrWork : state.arrWork.filter(e => e.key !== action.payData),
                workValue : state.workValue--,
                endValue : state.endValue--
            }
        }
        default : return state
    }

}