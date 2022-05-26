
import { useCallback, useReducer,useState} from "react";
interface Action{
    type:string,
    payload:{    
        id:string,
        value:string,
        isValid:boolean}

}
interface FormState{
    input:{
        [keys:string]:{
            value:string, 
            isValid:boolean}
    },
    formValid:boolean
    }
 const formReducer=(state:FormState, action:Action) =>{
        switch (action.type) {
            case "INPUT":
                console.log("ActionRec Input",action);
                let newState={...state};
                newState.input[action.payload.id]={value:action.payload.value,
                                            isValid:action.payload.isValid};
            console.log("state",newState)
            return newState;
            default: return state;
        }
    };
    const useForm = (init:FormState)=>{
    
    const [formState, dispatch]=useReducer(formReducer, init);
    const inputHandler=useCallback(
        (id:string, value:string, valid:boolean)=>{
        console.log("formHook dispatch",value);
//console.log(id,value,valid)
        dispatch ({type:"INPUT",payload :{id:id,value:value,isValid:valid}})
        } , []) ;
        return ( {formState, inputHandler})
    };

export default useForm;