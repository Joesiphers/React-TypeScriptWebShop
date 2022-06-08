import './App.css';
import { StrictMode } from 'react';
import Banner from './pages/banner';
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import ScrollToTop from './share/ScrollToTop';
import Home from './pages/home';
import ProductDetail from './components/Products/ProductDetail';
import RpiDocs from './components/RPidocs/PiDocuments';
import Contact from './pages/Contact';
import MyAccount from './components/account/MyAccount';
import Login from './components/Login/Login';
import { AuthContext,useAuth } from './context/AuthContext';
import styled from 'styled-components';
import store from "./store";
import {Provider} from "react-redux";

  function App() {
  const auth=useAuth();
  const {userId, token, show,login,logout,
      showLogin, closeLogin}=auth;
  const value={userId:userId,token:token,show:show,login:login,logout:logout,
    showLogin:showLogin,closeLogin:closeLogin
  }
  return <StrictMode >
    <Provider store={store}>
  <AuthContext.Provider value ={value}>
        <BrowserRouter>
        <Banner/>
        <Main>
        <ScrollToTop>
          <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/product" >
              <Route path=":productId" element={<ProductDetail/>} /> 
            </Route>
            <Route path="/doc" element={<RpiDocs/>} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/account/*" element={<MyAccount/>} />
          </Routes>
        </ScrollToTop>
        <Login onClick={closeLogin} />
        </Main>
        </BrowserRouter>
        </AuthContext.Provider>
        </Provider>
        </StrictMode>
}
/*           <Route path="/product" element={<Product/>} >
*/
export default App;
/*   
 CSS rules to specify families
    
    font-family: 'Black Han Sans', sans-serif;
    font-family: 'IBM Plex Mono', monospace;
    font-family: 'Roboto', sans-serif; margin-top: 5rem;
*/
  const Main =styled.div`
    width:100% ;
  `;