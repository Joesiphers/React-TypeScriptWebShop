import BackDrop from "../../share/BackDrop";
import styled from "styled-components";
import { useReducer,useState,useContext} from "react";
import Input from "../../share/Input";
import { AuthContext } from "../../context/AuthContext";
import useForm  from "../../share/formHook";
interface Props{
    onClick:()=>void
};
interface InputValue{
    [keys:string]:{
        value:string, 
        isValid:boolean}
} ;
interface Action{
    type:string,
    id:string,
    value:string,
    isValid:boolean
}
export default function Login (props:Props) {
   // console.log("login Render");
    const stopPropa=(e:React.MouseEvent<HTMLElement>)=>{
        e.stopPropagation()
    }
    const auth=useContext(AuthContext);
    const loginHandler=(e:React.MouseEvent<HTMLElement>)=>{
        e.preventDefault();
        console.log("formState",{...formState});
        auth.login("zhou","token",null);
        //props.closeLogin()
    }
    const switchModeHandler=(e:React.MouseEvent<HTMLElement> )=>{
        e.preventDefault();
        setMode((loginMode)=>!loginMode)
    }
    const init={
        input:{
            email:{value:"", isValid:false},
            password:{value:"",isValid:false}
        },
        formValid:true}
 /*   const formReducer=(state:FormState, action:Action) =>{
        switch (action.type) {
            case "INPUT":
                console.log("ActionRec login",action);
                let newState={...state};
                newState.input[action.id]={value:action.value,
                                            isValid:action.isValid};
            //console.log("state",newState)
            return newState;
            default: return state;
        }
    }
    
    const [formState, dispatch]=useReducer(formReducer, init);
    const inputHandler=
        (id:string, value:string, valid:boolean)=>{
      //  console.log("login dispatch",value);
//console.log(id,value,valid)
        dispatch ({type:"INPUT",id:id,value:value,isValid:valid})
        };*/
    const [loginMode,setMode]=useState(true);
    const {inputHandler, formState}=useForm(init)
    return <> {auth.show&&!auth.token&&<div>
       
        <BackDrop onClick={props.onClick}>{/**click outside of content will close */}
           <Wrapper onClick={stopPropa}> 
           {/**stop propation, on login table, outside will close, inside not */}
               <Content   >
                   <Header>{loginMode?"Login":" SignUp"}</Header>
                   <form  >
                   <LoginBox><Label>Email</Label> 
                        <Input id="email" type="text" 
                        inputHandler={inputHandler} /> 
                   </LoginBox> 
                   <LoginBox><Label>Password</Label> 
                   <Input id="password" type="text" inputHandler={inputHandler} /> 
                   </LoginBox> 
                    {!loginMode&&<LoginBox> <Label>Password</Label> 
                    <Input id="retypePassword" type="text" inputHandler={inputHandler} />
                     </LoginBox> 
                        }
                   <button onClick={loginHandler}>{loginMode?"Login":" SignUp"}</button>
                   <button onClick={switchModeHandler}>Switch Mode</button>
                   </form>
               </Content>
            </Wrapper> 
        </BackDrop>
        </div> }
        </>
        
    

}

const Content=styled.div`
    border-width:1px;
    border-radius:5px ;
    box-shadow:0px 0px 3px 3px #333;
    border-color:lightgray ;
    background-color:white ;
    padding:2rem ;
`;
const Wrapper=styled.div`
    position:absolute ;
    top:50% ;
    left:50% ;
    margin: -10% 0 0 -15%;
`;

const LoginBox=styled.div`
    display:flex ;
    margin:2px 

`;
const Label=styled.div`
    width:40%;
    margin:2px
`;

const Header=styled.h2`
    text-align:center ;
    font-size:large ;
`;