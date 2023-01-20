import React from 'react'
import ButtonBases from '../Butt0nBases/ButtonBases'
import BasicCard from './BasicCard'
import './HomePage.css'
import MediaCard from './MediaCard'


export default function HomePage() {
    return (
        <div>
            <div className="container user-cards-mui">
                <BasicCard />
            </div>
            <div>
            <MediaCard />
            </div>
            <ButtonBases/>
        </div>
    )
}
