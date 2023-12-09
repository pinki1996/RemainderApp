
const Redux = require ("redux")

// ..initial state
const initialData ={
    allTasks:["Eating", "Dancing"]
}

//Action
export function addTask(task)
{
    return{
        type:"ADD_TASK",
        payload: task
    }
}

//Reducer
const myReducer = (state = initialData,action) =>
{
    if(action.type=="ADD_TASK")
    {
        //LOGIC TO add the task to store
        return {
            allTasks: [...state.allTasks, action.payload]
        }
    }
    return state
}

// const secondReducer = () =>
// {
    
// }

//combine reducer
// const totalReducer = Redux.combineReducers({
//     myReducer:myReducer,
//     secondReducer:secondReducer
// })


//create a store
export const myStore = Redux.createStore(myReducer)