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

  const onSet = (activity)=>{
    activity.name=document.getElementById(activity.sno).value
    activity.duration=strToint(document.getElementById("duration").value)
    activity.wait=strToint(document.getElementById("wait").value)
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
    },
    {
      sno: 2,
      name: "bruh2",
      duration: 5,
      wait: 7,
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
