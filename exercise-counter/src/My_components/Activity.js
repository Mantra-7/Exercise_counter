import React from 'react'

export const Activity = ({activity,onDelete,onSet}) => {

    return (
        <div>
            <p><input id={activity.sno} type="text" /> Exercise Name</p>
            <h3><input id="duration" type="number" /> Duration</h3>
            <h3><input id="wait" type="number" /> Wait</h3>
            <button className="btn btn-success btn-sm" onClick={()=>{onSet(activity)}}>Set</button>
            <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(activity)}}>Delete</button>
        </div>
    )
}
