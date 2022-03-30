import React from 'react'
import CollectionCard from './CollectionCard'
import "./PunkList.css"
function PunkList({punkListData, setSelectedPunk}) {
    return (
        <div className='punkList'>
            {
                punkListData.map((punk, id) => (
                    <div onClick={() => setSelectedPunk(id)}>
                        <CollectionCard
                        key={id}
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_url}
                        /> 
                    </div>
                ))
            }
        </div>
    )
}

export default PunkList