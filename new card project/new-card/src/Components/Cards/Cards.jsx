import React from 'react'
import "./Cards.css"
import data from '../utils/data'

function Cards({ data }) {
    return (
        <div className="card">
            <img src={data.avatar_url} alt="John" style={{ width: '100%' }} />
            <h1>{data.name}</h1>
            <p className="title">{data.url}</p>
            <p>Harvard University</p>

            <button>Contact</button>
        </div >

    )
}

export default Cards