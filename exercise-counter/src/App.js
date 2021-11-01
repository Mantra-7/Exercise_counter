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

  let cnt=0
  const playafter = (sno,d,w,t,x)=>{
    playsound()
    cnt++
    if(cnt%2===1 && cnt!==1)
    {
      let pgid=appendid(sno,'p')
      let pgbar=document.getElementById(pgid)
      let inc=((cnt-1)/(2*t))*100
      pgbar.style="width: "+inc+"%"
      pgbar.innerHTML=(cnt-1)/2
    }

    let y=x
    setTimeout(()=>{
      if(x===w) 
      {
        x=d
      }
      else x=w
      if(cnt===2*t+1) return
      playafter(sno,d,w,t,x)
    },y*1000)
  }

  const getEx =(activity)=>{
    let n=exercises.length
    for(let i=0;i<n;i++)
    {
      if(exercises[i]===activity)
      {
        playone(i)
        break;
      }
    }
  }

  const playone = (n)=>{
    if(n===exercises.length) return
    let sno=exercises[n].sno
    let d=exercises[n].duration
    let w=exercises[n].wait
    let t=exercises[n].times

    if(d===0) return

     cnt=0
     playafter(sno,d,w,t,d)
    setTimeout(()=>{playone(n+1)},((d+w)*t+7)*1000)
  }

  const onStart = ()=>{
    playone(0)
  }

  const appendid = (str, c)=>{
      str+=c
      return str
  }

  const onSet = (activity)=>{
    let durid=appendid(activity.sno,'d')
    let waitid=appendid(activity.sno,'w')
    let timesid=appendid(activity.sno,'t')
    
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
      name: "Ex1",
      duration: 0,
      wait: 0,
      times: 0,
    },
    {
      sno: 2,
      name: "Ex2",
      duration: 0,
      wait: 0,
      times: 0,
    }
  ]
  );

  
  const addex = ()=>{
    let n=exercises.length

    let sn
    if(n===0) sn=0
    else sn=exercises[n-1].sno
    let nactivity={
      sno:sn+1,
      name:"Ex"+sn+1,
      duration:0,
      wait:0,
      times:0,
    }

    let nnactivity={
      sno:sn+2,
      name:"Ex"+sn+2,
      duration:0,
      wait:0,
      times:0,
    }
    exercises.push(nactivity)
    exercises.push(nnactivity)
    onDelete(nnactivity)
}

  return (
    <>
    <Header title="Exercise counter"/>
    <Exercises exercises={exercises} onDelete={onDelete} onSet={onSet} onStart={onStart} getEx={getEx} addex={addex}/>
    </>
  );
}

export default App;
