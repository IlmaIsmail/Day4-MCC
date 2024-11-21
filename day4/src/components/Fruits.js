import { useState } from 'react';
export default function Fruits({mymsg}){
    var fruits=["Apple","orange","grapes","woodapple"]
  const [index,setIndex]= useState(0);
  const nextEle=()=>{
    if (index > fruits.length-2) {
      setIndex(0);
    } else {
      setIndex(index +1);
    }
  }
  const preEle=()=>{
    if (index < 1) {
      setIndex(fruits.length-1);
    } else {
      setIndex(index -1);
    }
  }
  return (
    <div>
      <p> {fruits[index]}</p>
      <button onClick={nextEle}>Next element</button>
      <button onClick={preEle}>Previous element</button>
      <button onClick={()=>{ alert("HI React") }}>Click Me See the alert !</button>
    </div>
  );
}