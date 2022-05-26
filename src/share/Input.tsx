import { useReducer, useEffect, useCallback} from "react";
interface Props{
    id:string,
    inputHandler?:(id:string, value:string, valid:boolean)=>void,
    value?:string,
    isFocused?:boolean,
    isValid?:boolean,
    type?:string,
    name?:string
}
interface StoreState{
    inputValue:string,
    isValid:boolean,
    isFocused?:boolean,
}
interface Action{
    type:string,
    value:string,
    isFocused?:boolean,
}
const inputReducer=(state:StoreState, action:Action)=>{
    let newState:StoreState={...state};//深拷贝；
    console.log("Input received",action,state)
    switch (action.type){
        case "INPUT":
            newState.inputValue=action.value;
           //let newState=   {...state,inputValue:action.value};
            return newState;
        case "BLURED":
            return newState;
        case "FOCUSED":
            return newState;
        default: return state
         
    }
}
export default function Input (props:Props){
    const {id, inputHandler}=props
    const init={inputValue:props.value||"",
                isFocused:props.isFocused||false,
                isValid:props.isValid||false}
    
   
    const [inputState, dispatch]=useReducer(inputReducer, init)
    const changeHandler=useCallback( (e: React.ChangeEvent<HTMLInputElement>)=>{
        //不同的event
        //e.preventDefault();
       // console.log(e.target);
        dispatch ({type:"INPUT", value:e.target.value||""})
    },[])
    const blurHandler=useCallback(()=>{
        dispatch({type:"BLURED",value:"",isFocused:false})
    },[])
    const focusedHandler=useCallback(()=>{
        dispatch({type:"FOCUSED",value:"",isFocused:true})
    },[])
    const {inputValue}=inputState
    useEffect(()=>{
      //  console.log(id,"input Effect");
       //will cause render twice.
       if (inputHandler){ inputHandler(id,inputValue,false)}}
        ,[inputValue,id,inputHandler])
    //const inputRef=useRef<HTMLInputElement | null>(null);
    //这种写法的current是可以修改的（带null）除了可以通过e.target, 也可以从ref.current。
   // console.log("ref",inputRef,inputRef.current)
    return(
        <input 
        type={props.type||"text" }
        id={id} 
        onChange={changeHandler} 
        value={inputValue} 
        onBlur={blurHandler}
        onFocus={focusedHandler}
        name={props.name||""}
        checked={true}
        
        />
            
       
    )
    }//<label htmlFor={id}> {label}</label>{/*ref={inputRef}*/}