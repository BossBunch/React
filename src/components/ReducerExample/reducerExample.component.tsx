//import { useReducer, ChangeEvent } from "react";

//const ActionTypes: any = {};

//ActionTypes.TYPE_INCREMENT = 'increment';

//const reducer = (state, action) => {
//    switch (action.type) {
//        case ActionTypes.TYPE_INCREMENT:
//            return { ...state, activityId: parseInt(state.activityId) + 1 };

//        case 'text-Change':
//            return action.payload;
//        default:
//            return state;
//    }
//}

//const ReducerExample = () => {
//    const initialState = {
//        activityId: 0,
//        activityName: 'Quaterly Audit',
//        activityDescription: ''
//    }

//    const [state, dispatch] = useReducer(reducer, initialState);

//    const incrementApplicationId = () => {
//        dispatch({
//            type: ActionTypes.TYPE_INCREMENT
//        });
//        console.log(state.activityId);
//    }

//    const saveData = () => {
//        const newValue = {
//            activityId: state.activityId
//        }
//        console.log(newValue);
//    }

//    const onChange = (event : ChangeEvent<HTMLInputElement>) => {
//        //const newValue = {
//        //    activityId: state.activityId,
//        //    activityName: state.activityName,
//        //    activityDescription: state.activityDescription
//        //};
//        const newValue = { ...state };
//        const value = event.target.value;
//        console.log(event.target.name);
//        switch (event.target.name) {
//            case 'activityId':
//                newValue.activityId = value;
//                break;
//            case 'activityName':
//                newValue.activityName = value;
//                break;
//            case 'activityDescription':
//                newValue.activityDescription = value;
//                break;
//            //  newValue = { ...state, activityDescription:value };
//            default:
//                console.log('no case change event for textbox ' + event.target.name);
//                break;
//        }
//        console.log(value);

//        dispatch({
//          -
//        });
//        console.log(newValue);
//    }
//    return (
//        <div>
//            <div>
//                <label>Activity Id: {state.activityId} </label>
//                <input type="number" name="activityId" onChange={onChange}></input>
//                <label>{state.activityId}</label>
//            </div>
//            <div>
//                <label>Activity Name: </label>
//                <input type="text" name="activityName" onChange={onChange}></input>
//                <label>{state.activityName}</label>
//            </div>
//            <div>
//                <label>Activity Description: </label>
//                <input type="text" name="activityDescription" onChange={onChange}></input>
//                <label>{state.activityDescription}</label>

//            </div>
//            <button type="button" onClick={incrementApplicationId} >Increment Application Id</button>
//            <button type="button" onClick={saveData} >Save Data</button>

//        </div>
//    )
//}

//export default ReducerExample;