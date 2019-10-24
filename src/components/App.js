import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'

// Load Component
import Menu from './Menu'
import FooterPage from './FooterPage'
import Register from './Register'

// Load Page
import HomePage from '../page/home/HomePage'
import Faq from '../page/Faq'
import FantasyKingdom from '../page/fantasykingdom/FantasyKingdom'
import RidePage from './../page/ride/RidePage'
import ThingsToDo from './../page/ThingsToDo'
import Tickets from './../page/Tickets'
import CheckoutPage from '../page/checkout/CheckoutPage'
import WaterKingdom from './../page/waterkingdom/WaterKingdom'
import XtremeKingdom from './../page/xtremekingdom/XtremeKingdom'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
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
            </BrowserRouter>
        )
    }
}
