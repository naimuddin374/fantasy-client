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
// import RidePage from './ride/RidePage';
import ThingsToDo from './things-to-do/ThingsToDo';
import Ticket from './ticket/Ticket';
import CheckoutPage from './checkout/CheckoutPage';
import WaterKingdom from './water-kingdom/WaterKingdom';
import ExtremeKingdom from './extreme-kingdom/ExtremeKingdom';
import HomePage from './home/HomePage';
import FoysLake from './foys-lake/FoysLake';
import HeritagePark from './heritage-park/HeritagePark';


class MainApp extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Register />
                <Switch>
                    <Route path='/faq' component={Faq} />
                    <Route path='/ticket' component={Ticket} />
                    {/* <Route path='/ride' component={RidePage} /> */}
                    <Route path='/checkout' component={CheckoutPage} />
                    <Route path='/things-to-do' component={ThingsToDo} />
                    <Route path='/water-kingdom' component={WaterKingdom} />
                    <Route path='/fantasy-kingdom' component={FantasyKingdom} />
                    <Route path='/extreme-kingdom' component={ExtremeKingdom} />
                    <Route path='/foys-lake' component={FoysLake} />
                    <Route path='/heritage-park' component={HeritagePark} />
                    <Route path='/' exact component={HomePage} />
                </Switch>
                <FooterPage />
            </div>
        )
    }
}
export default MainApp