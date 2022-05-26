import {createContext,useState,useEffect} from "react";
interface ContextValue {
    userId:string;
    token:string;
    login: (userId:string,token:string,tokenExpiryTime:any)=>void;
    logout(): void;//work too,:()=>void;
    showLogin:()=>void;//后面的引用链条都要保持一致。
    closeLogin:()=>void;
    show:boolean
  }/**/   
interface UserData {
    userId:string,
    token:string,
    tokenExpiryTime?:any
}
  const   init:ContextValue={
        userId:"",
        token:"",
        show:false,
        login:()=>{},
        logout:()=>{},
        showLogin:()=>{},
        closeLogin:()=>{}
    }
export const AuthContext = createContext( init)
export function useAuth(){
    const [show, setShow]=useState(false);//如果重新渲染则为关
    const showLogin=()=>{setShow(true)};
    const closeLogin=()=>{
            setShow(false) // for click outsid of login box to close the login    
    }
    const [userId,setUserId]=useState("");
    const [token,setToken]=useState("");
    const [tokenExpTime,setExpTime]=useState(new Date(Date.now()));
    const login=(userId:string,token:string,tokenExpiryTime?:Date)=>{
        //console.log(userId,"loggedin",token,tokenExpiryTime)
        setUserId(userId);
        setToken(token);
        if (tokenExpiryTime){setExpTime(tokenExpiryTime)};
        //get a time objext.
        let expTime=tokenExpiryTime||new Date(Date.now()+1000*60*60);
        //setExpTime(expTime);
       // console.log(expTime,"calculate remaining time");
        localStorage.setItem("userData",
            JSON.stringify(
                {userId, token,tokenExpiryTime:expTime.toString()}
                ))
    }
    const logout=()=>{
        localStorage.removeItem("userData");
        setToken("");
        setUserId("null");
       // console.log("logout")
        
    }
        /**check if there are any loggedin in localStorage
     * if yes, then use login to pass id,token to AuthContext
     * for pages to get confim logged in already
     */
         let logoutTimer:ReturnType<typeof setTimeout>;
         
    useEffect(()=>{
        const userData=JSON.parse(localStorage.getItem("userData")||"{}");
        //console.log(userData,"getItem");
             //check login record use getItem
        if (userData&&userData.token)
            {let remainingTime=new Date(userData.tokenExpiryTime).valueOf()-Date.now().valueOf();
           // console.log(new Date(userData.tokenExpiryTime),"remaining",remainingTime); 
            if (remainingTime>0){
                     //a time string from userData converted to time Object.
               // console.log(userData.tokenExpiryTime,"loging effect")
                login(userData.userId,userData.token,userData.tokenExpiryTime);
                 //activae the login function pass login information to Context
                logoutTimer= setTimeout(logout, remainingTime); //logout when time is out
                }}
                 else {
                     clearTimeout (logoutTimer);
                  //   console.log("clear timer",logoutTimer)
             }
         },[userId,token,tokenExpTime,login])
      /**           
                 setExpTime(remainingTime); */ 
    return {userId,token,show,login,logout,showLogin,closeLogin} as ContextValue
}