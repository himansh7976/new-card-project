import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Him.css"

import "./Him.css"


function Him() {



    // const [data, setdata] = useState('himanshu');
    // console.log(data);
    const [data, setdata] = useState([])
    useEffect(() => {
        const apifetch = async () => {
            let res = await fetch("https://api.github.com/users/himansh7976");
            console.log(res);

            let res2 = await res.json();
            console.log(res2);
            setdata(res2);






        }
        apifetch();
    }, [])




    // let get = async () => {
    //     let res = await fetch("https://api.github.com/users/himansh7976");
    //     console.log(res);
    //     let js = await res.json();
    //     console.log(js);

    // }
    // get();



    return (

        <div className="game">
            <div className="rank">2</div>
            <div className="front">
                <img src={data.avatar_url} alt="game" />
                <h3 className="name">{data.login}</h3>
                <div className="status">
                    <p className="viewers">132.5k</p>
                    <div className="streamers">
                        <img src={data.avatar_url} alt />
                        <img src={data.avatar_url} alt />
                        <img src={data.avatar_url} alt />
                    </div>
                </div>
            </div>
            <div className="back">
                <div className="streaming-info">
                    <p className="game-stat">174.4k <span>Watching</span></p>
                    <p className="game-stat">3,172<span>Streams</span></p>
                </div>
                <div className="streamers">
                    <div className="streamer">
                        <div className="icon">
                            <img src={data.avatar_url} alt />
                        </div>
                        <p className="name">gamer 1</p>
                        <p className="number">18k</p>
                    </div>
                    <div className="streamer">
                        <div className="icon">
                            <img src={data.avatar_url} alt />
                        </div>
                        <p className="name">gamer 2</p>
                        <p className="number">9,600</p>
                    </div>
                    <div className="streamer">
                        <div className="icon" >
                            <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt />
                        </div>
                        <p className="name">gamer 3</p>
                        <p className="number">7,407</p>
                    </div>
                </div>
                <button className="btn" >See more </button>
            </div>
            <div className="backgroundWrapper" />
        </div>

    );
}

export default Him