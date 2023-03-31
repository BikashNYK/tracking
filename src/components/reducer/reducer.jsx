import { ADD_PROJECT, ADD_TASK, START_TIMER, STOP_TIMER } from "../actionType/actionType";

const initialState = {
    projects : [],
    tasks : [],
    timer : {}
}

export const projectReducer = (state = initialState , action)=>{
    const {type,payload} = action
    switch (type){
        case ADD_PROJECT : 
        return {
            ...state,
            projects : [...state.projects,payload],
        }
        case ADD_TASK : 
        return {
            ...state,
            tasks: [...state.tasks,payload],
        }
        case START_TIMER : 
        return {
            ...state,
           timer : {
            ...state.timer,
            time:{
                projectId : payload.projectId,
                startTime : payload.startTime,
            }
           }
        }
        case STOP_TIMER:
            const totalTime = (payload.endTime - state.timer[payload.taskId].startTime) / (1000 * 60 * 60);
            return {
                ...state,
                timer: {
                    ...state.timer,
                    stopTimer : {
                        ...state.timer[payload.taskId],
                        endTime: payload.endTime,
                        totalTime: totalTime,
                    },
                },
            };


        default : 
        return state
    }
}