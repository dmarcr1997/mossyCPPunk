import React, { useState, useEffect } from 'react'
import instagramLogo from '../assets/instagram.png'
import twitterLogo from '../assets/twitter.png'
import moreLogo from '../assets/more.png'
import './Main.css'
function Main({ selectedPunk, punkListData}) {
    const [activePunk, setActivePunk ] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img className='selectedPunk' src={activePunk.image_url} alt="active punk" />
                    </div>
                </div>
                <div className='punkDetails' style={{ color: '#fff' }}>
                    <div className='title'>
                        {activePunk.name}
                    </div>
                </div>
                <span className='itemNumber'>.#{activePunk.token_id}</span>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={activePunk.owner.profile_img_url}
                        alt=""
                        />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>@mossy_nodes</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt=''/>
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} alt=''/>
                        </div>
                        <div className='ownerLink'>
                            <img src={moreLogo} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main