import React from 'react'
import "../../styles/header/headerStyle.css"
import logoUniversidad from '../../styles/img/LogoUniversidad.png'


const Header = (props) =>{
    return(
        <div className='father'>
            <div className='title'>
            <h1>WORLD MAP COVID-19</h1>
            </div>
            <div className='Logo_Universidad' >
                <img src={logoUniversidad} alt="" />
            </div>
        </div>
    )
} 

export default Header;