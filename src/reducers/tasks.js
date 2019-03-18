const TaskReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TASKS_DATA':
            return {...state, data: [...state.data, action.data]}
        // case 'DELETE_TASKS_DATA':
        // //     return {...state, data: [...state.data, action.data]}
        // case 'COMPLETE_TASKS_DATA':
        //     // return {...state, data: [...state.data, action.data]}
        default:
            return state;
    }
} ;

export default TaskReducer;