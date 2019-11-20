import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css'

// Load Component
import Menu from './layout/Menu'
import FooterPage from './layout/FooterPage'
import Register from './layout/Register'

// Load Page
import Faq from '../page/Faq';
import FantasyKingdom from './fantasy-kingdom/FantasyKingdom';
import RidePage from './ride/RidePage';
import ThingsToDo from './things-to-do/ThingsToDo';
import Tickets from '../page/Tickets';
import CheckoutPage from './checkout/CheckoutPage';
import WaterKingdom from './water-kingdom/WaterKingdom';
import XtremeKingdom from './xtreme-kingdom/XtremeKingdom';
import HomePage from './home/HomePage';

class MainApp extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Register />
                <Switch>
                    <Route path='/faq' component={Faq} />
                    <Route path='/ticket' component={Tickets} />
                    <Route path='/ride' component={RidePage} />
                    <Route path='/checkout' component={CheckoutPage} />
                    <Route path='/things-to-do' component={ThingsToDo} />
                    <Route path='/water-kingdom' component={WaterKingdom} />
                    <Route path='/fantasy-kingdom' component={FantasyKingdom} />
                    <Route path='/xtreme-kingdom' component={XtremeKingdom} />
                    <Route path='/' exact component={HomePage} />
                </Switch>
                <FooterPage />
            </div>
        )
    }
}
export default MainApp