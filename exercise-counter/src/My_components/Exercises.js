import React from 'react'
import {Activity} from "./Activity"

export const Exercises = (props) => {
    const divStyle = {
        width: "300px",
      };
    return (
        <div className="container">
            <h2>Exercises</h2>
            {props.exercises.map((activity)=>{
                return <Activity activity={activity} key={activity.sno} onDelete={props.onDelete} onSet={props.onSet}/>
            })}
        </div>
    )
}
