import React from 'react';

import DataContainer from "./data_container";
import "../../styles/table_statistics/dashboardStyle.css"

class Dashboard extends React.Component {

    render(){
        return(
            
            <div className='contenedor-informacion'>
                <div className='header-informacion'>
                    <h1>Información Covid-19</h1>
                </div>

                <div className='seccion-datos'>
                    <DataContainer></DataContainer>
                </div>


                
            </div>
        );
    }

}

export default Dashboard