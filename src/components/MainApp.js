import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css'

// Load Component
import Menu from './layout/Menu'
import FooterPage from './layout/FooterPage'

import Faq from '../page/Faq';
import FantasyKingdom from './fantasy-kingdom/FantasyKingdom';
// import RidePage from './ride/RidePage';
import ThingsToDo from './things-to-do/ThingsToDo';
import Ticket from './ticket/Ticket';
import Checkout from './checkout/Checkout';
import WaterKingdom from './water-kingdom/WaterKingdom';
import ExtremeKingdom from './extreme-kingdom/ExtremeKingdom';
import HomePage from './home/HomePage';
import FoysLake from './foys-lake/FoysLake';
import HeritagePark from './heritage-park/HeritagePark';
import Atlantis from './atlantis/Atlantis';
import NewsEvents from './../page/NewsEvents';
import NewsEventDetail from '../page/NewsEventDetail';
import AlertMessage from './layout/AlertMessage';
import Register from './layout/Register';
import Login from './layout/Login'


class MainApp extends React.Component {
    render() {
        return (
            <div>
                <AlertMessage />
                <Menu history={this.props.history} />
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL}/faq`} component={Faq} />
                    <Route path={`${process.env.PUBLIC_URL}/ticket/:id`} exact component={Ticket} />
                    <Route path={`${process.env.PUBLIC_URL}/ticket`} exact component={Ticket} />
                    <Route path={`${process.env.PUBLIC_URL}/register`} component={Register} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/checkout`} component={Checkout} />
                    <Route path={`${process.env.PUBLIC_URL}/atlantis`} component={Atlantis} />
                    <Route path={`${process.env.PUBLIC_URL}/things-to-do`} component={ThingsToDo} />
                    <Route path={`${process.env.PUBLIC_URL}/water-kingdom`} component={WaterKingdom} />
                    <Route path={`${process.env.PUBLIC_URL}/fantasy-kingdom`} component={FantasyKingdom} />
                    <Route path={`${process.env.PUBLIC_URL}/extreme-racing`} component={ExtremeKingdom} />
                    <Route path={`${process.env.PUBLIC_URL}/foys-lake`} component={FoysLake} />
                    <Route path={`${process.env.PUBLIC_URL}/heritage-park`} component={HeritagePark} />
                    <Route path={`${process.env.PUBLIC_URL}/news-events`} component={NewsEvents} />
                    <Route path={`${process.env.PUBLIC_URL}/news-event-detail/:id`} component={NewsEventDetail} />
                    <Route path={`${process.env.PUBLIC_URL}/`} exact component={HomePage} />
                </Switch>
                <FooterPage />
            </div>
        )
    }
}
export default MainApp