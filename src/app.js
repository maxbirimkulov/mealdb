import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import NotFound from "./components/notFound/notFound";
import Ingridients from "./components/ingridients/ingridients";
import MoreInfo from "./components/moreInfo/moreInfo";
import './components/home/home.css'


function App (){
    return (
        <>
        <BrowserRouter>
            <Header/>
            <main className='home'>
                    <Switch>
                        <Route exact path='/' component={()=><Home/>}/>
                        <Route exact path='/about' component={()=><About/>}/>
                        <Route exact path='/contact' component={()=><Contact/>}/>
                        <Route exact path='/:name' component={()=><Ingridients/>}/>
                        <Route exact path='/:name/:id' component={()=><MoreInfo/>}/>
                        <Route component={()=><NotFound/>}/>
                    </Switch>
            </main>
            <Footer/>
        </BrowserRouter>
        </>
    );
}

export default App;