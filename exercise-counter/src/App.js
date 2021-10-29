import './App.css';
import {Header} from "./My_components/Header"
import {Exercises} from "./My_components/Exercises"
import React, { useState } from 'react';

function App() {
  const onDelete = (activity)=>{
    setExercises(exercises.filter((new_activity)=>{
      return new_activity!==activity
    }))
  }

  const strToint = (str)=>{
      let n=str.length
      let ans=0
      let temp=1
      for(let i=n-1;i>=0;i--)
      {
          ans+=temp*(str[i]-'0')
          temp*=10
      }
      return ans
    }

  const appendid = (str, c)=>{
      str+=c
      return str
  }

  const onSet = (activity)=>{
    let durid=appendid(activity.sno,'d')
    let waitid=appendid(activity.sno,'w')
    let timesid=appendid(activity.sno,'t')
    let pgid=appendid(activity.sno,'p')

    console.log(waitid)
    console.log(document.getElementById(waitid))
    
    activity.name=document.getElementById(activity.sno).value
    activity.duration=strToint(document.getElementById(durid).value)
    activity.wait=strToint(document.getElementById(waitid).value)
    activity.times=strToint(document.getElementById(timesid).value)
    console.log(activity)

    let n=exercises.length
    for(let i=0;i<n-1;i++)
    {
      if(exercises[i].sno===activity.sno)
      {
        exercises[i]=activity
        break
      }
    }
    console.log(exercises)

    setExercises(exercises)
  }

  const [exercises, setExercises] = useState([
    {
      sno: 1,
      name: "bruh",
      duration: 5,
      wait: 2,
      times: 2,
    },
    {
      sno: 2,
      name: "bruh2",
      duration: 5,
      wait: 7,
      times: 4,
    }
  ]
  );
  return (
    <>
    <Header title="Exercise counter"/>
    <Exercises exercises={exercises} onDelete={onDelete} onSet={onSet}/>
    </>
  );
}

export default App;
