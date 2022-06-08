import styled from "styled-components"
import useForm  from "../../share/formHook";
import Input from "../../share/Input";
import React, { useState} from "react";
import { changeAcc,IUser } from "./accountSlice";
import { useAppDispatch, useAppSelector } from "../../reduxHooks";
// const user={
//     firstName:"string",
//     lastName:"string",
//     email:"string",
//     phone:"string",
//     gender:"string",
//     }
// let init:initate ={
//     input:{firstName:
//             {value:"v" as keyof typeof user,isValid:false} },
//     formValid:true};
// Object.keys(user).forEach((key)=>{
//         //console.log( user[key] );
//         init.input[key]={value:"",isValid:false}
//     })
const users=["firstName", "lastName", "email", "phone", "gender",
    "streetNumber","streetSecondLine","city","state", "postCode" ]
interface In{
   [key:string] :{value:string, isValid:boolean };
}
interface Iformdata{
    input:{
    [key:string]:{
        value:string, 
        isValid:false
    }},
    formValid:boolean
}
let int:Iformdata={input:{},formValid:false };
for (var i of users ){
    int.input[i]={value:"", isValid:false}
} //create a init obj from array 
console.log(int)


const AccDetails = ()=>{
    const [imgUrl, setImgUrl]=useState<string>();
    const [file, setFile]=useState<File> ();
    const dispatch=useAppDispatch()
    const accInfo=useAppSelector(state=>state.account)
    
    const {inputHandler, formState}=useForm (int);
    
    const [checked,setChecked]=useState(" ")
    const checkedHandler=(e:React.ChangeEvent<HTMLInputElement> )=>{
        setChecked(e.target.value);
        inputHandler(e.target.id,e.target.value,true )
    } 
    const submit=()=>{
        console.log ("formstate",formState)
    }
    let formDatas:{
        [key:string]:string;
    }={};
    const formChange=(e:React.ChangeEvent<HTMLFormElement>)=>{
        formDatas[e.target.name ]=e.target.value;
        console.log(formDatas,e.target);
    }
    const formSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(formDatas);
    }
    const imgHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let files=e.target.files;
        if (files&&files.length>=1){
            setFile(files[0])
        }
    }
    const fileReader= new FileReader();
    if (file){
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
           {typeof (fileReader.result)==="string"&&setImgUrl(fileReader.result);}
           
        }
    }

    return(
        <>
            <Wrapper> <Left> 
            <p className="plass">
                    <Label>First Name:</Label>
                    <Input id="firstName" type="text" inputHandler={inputHandler} />
                    <br />
                    <Label>Last Name:</Label>
                    <Input id="lastName" type="text" inputHandler={inputHandler}/>
                </p>
                <p className="plass"  >
                    <Label>Gender:</Label>
                    <input type="radio" id="gender" checked={checked==="male"} onChange ={checkedHandler}
                     value="male"/><label htmlFor="male">male</label>
                    <input type="radio" id="gender" checked={checked==="female"} onChange ={checkedHandler}
                     value="female" /><label htmlFor="female">female</label>

                </p>
                <p className="plass">
                    <Label>Email:</Label>
                    <Input type="text" id="email" inputHandler={inputHandler} />

                </p>
 </Left>
                <Right>
                    <img src={imgUrl} alt="" width="200" style={{"border":"solid 1px grey"}} />
                    <p>  <InputLabel htmlFor="imgchoose" >
                    Hi choose your image</InputLabel>
                    <input type="file" name="file" id="imgchoose" accept=".png,.jpg" 
                    onChange={imgHandler}  hidden />
                    </p>
                    </Right>
                </Wrapper>
                <p>
                    <label>Address:</label>
                </p>
                <p className="plass">
                    <Label htmlFor="address"> Street number</Label>
                    <Input type="text" id="streetNumber" inputHandler={inputHandler}  /> <br />
                    <Input type="text" id="streetSecondLine" inputHandler={inputHandler}  /> <br />
                    <Label htmlFor="suburb">Suburb</Label>
                    <Input type="text" id="city" inputHandler={inputHandler} /> <br />
                    <Label>State</Label>
                    <Input id="state" type="text" inputHandler={inputHandler} /> <br />
                    <Label>Post Code</Label>
                    <Input id="postCode" type="text" inputHandler={inputHandler} /> <br />
                    <Label>Contact Number</Label>
                    <Input id="phone" type="text" inputHandler={inputHandler} />
                    
                </p>
                <button onClick={submit}>Submit</button>
                <form onChange={formChange} onSubmit={formSubmit}>
                    <input name="t1" id="1T" type="text"/>
                    <input type="text" name="t2" />
                    <input type="file" name="file" accept=".png,.jpg"/>
                    <button type="submit">submit </button>
                    
                </form>
            </>
    )
}

export default AccDetails;

const Label=styled.label`
    position:absolute ;
    left:0 ;
    `;
const Wrapper=styled.div`
    display:flex ;

`;
const Left=styled.div`
    width:50vw ;
    `;
const Right=styled.div`
    width:50vw
    `;
const InputLabel=styled.label`
    border:solid 2px purple;
    margin-left: 8em;
    text-Align:center;
    border-radius:5px;
    line-height: 30px ;
    padding:5px ;
    background-color:lightgray ;
`;