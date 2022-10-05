import "../styles/style.css";
import React from 'react';
import WorldMap from '../components/world_map/world_map';
import Dashboard from "../components/table_statistics/dashboard";
import Header from '../components/header/header';
import {OptionButton} from '../components/options_button/options_button'


function App(){
    return(
        <div className="App">
            
            <Header />

            <div className='contenedor'>
                <WorldMap />
                <Dashboard/>
            </div>

        </div>
    );
}

export default App;