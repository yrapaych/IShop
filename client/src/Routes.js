import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {MainPage} from './pages/MainPage'
import { ItemPage } from './pages/ItemPage';
import { ItemGridPage } from './pages/ItemGridPage';
import { NavBar } from './components/NavBar';
import { OrderPage } from './pages/OrderPage';

export const useRoutes= ()=>{
    return(
        <BrowserRouter>
        
    <div className="fullscreen-container">
      <NavBar></NavBar>
      <div className="container">
        <Switch>
            <Route path="/item/:id">
                <ItemPage/>
            </Route>
            <Route path="/find">
                <ItemGridPage/>
            </Route>
            <Route path='/order'>
                <OrderPage/>
            </Route>
            <Route exact path="/">
                <MainPage/>
            </Route>
        </Switch>
        </div></div>
        </BrowserRouter>
    )
}