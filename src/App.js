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

  let strt=false

  const playpause = (activity) =>{
    let i
    for(let x=0;x<exercises.length;x++)
    {
      if(exercises[x].sno===activity.sno)
      {
        i=x
        break
      }
    }

    let ppid=appendid(activity.sno,'q')
    let ppbtn=document.getElementById(ppid)

    if(activity.times!==0)
    {
    if(activity.check)
    {
      ppbtn.innerHTML="Pause"
      ppbtn.style.background="rgb(200,200,0,1)"
      activity.check=false
       playone(activity,i,activity.cur)
    }
    else
    {
      ppbtn.style.background="#0d6efd"
      ppbtn.innerHTML="Play"
      activity.check=true
    }
  }
  }

  const playone = (activity,i,temp)=>{

    if(activity.cur===2*activity.times+1) 
    {
      activity.cur=0
      playpause(activity)
      let pgid=appendid(activity.sno,'p')
      let pgbar=document.getElementById(pgid)
      pgbar.style="width: 0%"
      if(strt) 
      {
        if(i+1===exercises.length) 
        {
          strt=false
          return
        }
        exercises[i+1].cur=0
        playpause(exercises[i+1])
      }
      return
    }

    if(activity.check)
    {
      return
    }
    if(activity.cur===0) 
    {
      playsound() 
      activity.cur++
    }
    else if(activity.cur!==temp) 
    {
      playsound()
      activity.cur++
    }
    else temp--

    if(activity.cur%2===1 && activity.cur!==1)
    {
      let pgid=appendid(activity.sno,'p')
      let pgbar=document.getElementById(pgid)
      let inc=((activity.cur-1)/(2*activity.times))*100
      pgbar.style="width: "+inc+"%"
      pgbar.innerHTML=(activity.cur-1)/2
    }

    let y
    if(activity.cur%2===1) y=activity.duration
    else y=activity.wait

    if(activity.cur===2*activity.times)
    {
      setTimeout(()=>{
        playsound()
      },(y+0.5)*1000)
    }
    setTimeout(()=>{
      playone(activity,i,temp)
    },y*1000)
  }

  const onStart = ()=>{
    strt=true
    for(let i=0;i<exercises.length;i++)
    {
      exercises[i].cur=0
      let pgid=appendid(exercises[i].sno,'p')
      let pgbar=document.getElementById(pgid)
      pgbar.style="width: 0%"
    }
    playpause(exercises[0])
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
    activity.cur=0
    activity.check=true

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
      cur: 0,
      check: true
    },
    {
      sno: 2,
      name: "Ex2",
      duration: 0,
      wait: 0,
      times: 0,
      cur: 0,
      check: true
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
      cur:0,
      check: true,
    }

    let nnactivity={
      sno:sn+2,
      name:"Ex"+sn+2,
      duration:0,
      wait:0,
      times:0,
      cur:0,
      check: true,
    }
    exercises.push(nactivity)
    exercises.push(nnactivity)
    onDelete(nnactivity)
}

  return (
    <>
    <Header title="Exercise counter"/>
    <Exercises exercises={exercises} onDelete={onDelete} onSet={onSet} onStart={onStart} playpause={playpause} addex={addex}/>
    </>
  );
}

export default App;
