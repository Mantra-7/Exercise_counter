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

  const ntg =()=>{
    console.log("huh")
  }

  let audio = new Audio('https://www.soundjay.com/buttons/sounds/beep-07a.mp3');

    const playsound = ()=>{
        audio.play();
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

  let t=0

  const onStart = ()=>{
    let n=exercises.length
    for(let i=0;i<n;i++)
    {
      let x=exercises[i].duration
      let y=exercises[i].wait
      let z=exercises[i].times

      for(let j=0;j<z;j++)
      {
        playsound()
        setTimeout(()=>{playsound()},x*1000)
      }
    }
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
    
    activity.name=document.getElementById(activity.sno).value
    activity.duration=strToint(document.getElementById(durid).value)
    activity.wait=strToint(document.getElementById(waitid).value)
    activity.times=strToint(document.getElementById(timesid).value)

    let n=exercises.length
    for(let i=0;i<n-1;i++)
    {
      if(exercises[i].sno===activity.sno)
      {
        exercises[i]=activity
        break
      }
    }

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
    <Exercises exercises={exercises} onDelete={onDelete} onSet={onSet} onStart={onStart}/>
    </>
  );
}

export default App;
