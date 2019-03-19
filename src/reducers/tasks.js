const TaskReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TASKS_DATA':
            return {...state, data: [...state.data, action.data]}
        case 'DELETE_TASKS_DATA':
            let updatedData2 = state.data.slice();
            const c = updatedData2.find(c => c.id === action.id);
            c.deleted = !c.deleted;
            return {...state, data: updatedData2}
        case 'COMPLETE_TASKS_DATA':
            let updatedData = state.data.slice();
            const t = updatedData.find(t => t.id === action.id);
            t.completed = !t.completed;
            return {...state, data: updatedData}
        default:
            return state;
    }
} ;

export default TaskReducer;