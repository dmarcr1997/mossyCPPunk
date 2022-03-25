import React from 'react'
import punkLogo from '../assets/cryptopunk-logo.png'
import searchIcon from '../assets/search.png'
import themeSwitchIcon from '../assets/theme-switch.png'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='logoContainer'>
            <img src={punkLogo} className='punkLogo' alt='Logo' />
        </div>
        <div className='searchBar'>
            <div className='searchIconContainer'>
                <img src={searchIcon} />
            </div>
            <input className='searchInput' placeholder='Collection, item or user ... ' />
        </div>

        <div className='headerItems'>
          <p>Drops</p>
          <p>Marketplace</p>
          <p>Create</p>
        </div>

        <div className='headerActions'>
          <div className='themeSwitchContainer'>
            <img src={themeSwitchIcon} />
          </div>
        </div>

        <div className='loginButton'>GET IN</div>
    </div>
  )
}

export default Header