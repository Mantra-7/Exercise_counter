import React from 'react'
import {Activity} from "./Activity"

export const Exercises = (props) => {

    return (
        <div className="container my-3">
            <div className="row g-2">
                <div className="col">
                    <h1>Exercises</h1>
                </div>
                <div className="col">
                    <button className="btn btn-success mx-2" onClick={()=>{props.onStart()}}>Start</button>
                </div>
            </div>
            {props.exercises.map((activity)=>{
                return <Activity activity={activity} key={activity.sno} onDelete={props.onDelete} onSet={props.onSet} getEx={props.getEx}/>
            })}
        </div>
    )
}
