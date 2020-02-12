import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import History from './util/History'


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                {/* <BrowserRouter basename={'/fantasykingdom'}> */}
                <Routes history={History} />
            </BrowserRouter>
        )
    }
}
export default App