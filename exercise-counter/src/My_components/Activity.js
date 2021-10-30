import React from 'react'

export const Activity = ({activity,onDelete,onSet}) => {

    

    const appendid = (str, c)=>{
        str+=c
        return str
    }

    let durid=appendid(activity.sno,'d')
    let waitid=appendid(activity.sno,'w')
    let timesid=appendid(activity.sno,'t')
    let pgid=appendid(activity.sno,'p')

    const pgBar = {
        width: "25%",
      };

    return (
        <div className="row g-2">
            <div className="col-4 row align-items-center">
                <button className="col-2 btn btn-primary btn-sm mx-2" >Play</button>
                <div className="col-7">
                    <div className="progress">
                            <div className="progress-bar progress-bar-striped" role="progressbar" style={pgBar} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <label htmlFor="Exercise-name" className="form-label my-1">Exercise Name : </label>
                <input type="text" className="form-control" id={activity.sno}/>
                <div className="row g-3 align-items-center my-2">
                    <div className="col-auto">
                        <label htmlFor="duraion-input" className="col-form-label">Duration : </label>
                    </div>
                    <div className="col-auto">
                        <input type="number" id={durid} className="form-control"/>
                    </div>
                    <div className="col-auto">
                        <span className="form-text">
                        Duration of exercise
                        </span>
                    </div>
                </div>
                <div className="row g-3 align-items-center my-2">
                    <div className="col-auto">
                        <label htmlFor="wait-input" className="col-form-label">Wait : </label>
                    </div>
                    <div className="col-auto">
                        <input type="number" id={waitid} className="form-control"/>
                    </div>
                    <div className="col-auto">
                        <span className="form-text">
                        Wait between each exercise
                        </span>
                    </div>
                </div>
                <div className="row g-3 align-items-center my-2">
                    <div className="col-auto">
                        <label htmlFor="times-input" className="col-form-label">Times : </label>
                    </div>
                    <div className="col-auto">
                        <input type="number" id={timesid} className="form-control"/>
                    </div>
                    <div className="col-auto">
                        <span className="form-text">
                        Number of times this exercise will go
                        </span>
                    </div>
                </div>
                <button className="btn btn-success btn-sm mx-2" onClick={()=>{onSet(activity)}}>Set</button>
                <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(activity)}}>Delete</button>
            </div>
            <hr />
        </div>
    )
}
