import { useState } from 'react';
import {sculptureList} from './data/data';
export default function Artist(){
    const [index,setIndex]= useState(0);
    const nextEle=()=>{
        console.log(sculptureList[index].name)
      if (index > sculptureList.length-2) {
        setIndex(0);
      } else {
        setIndex(index +1);
      }
    }
    const preEle=()=>{
      if (index < 1) {
        setIndex(sculptureList.length-1);
      } else {
        setIndex(index -1);
      }
    }

    return(
        <div>
            <h3>{sculptureList[index].name}</h3>
            <img src={sculptureList[index].url} alt={sculptureList[index].alt}/>
            <p>Artist Name:<b>{sculptureList[index].artist}</b></p>
            <p>{sculptureList[index].description}</p>
            <button onClick={nextEle}>Next element</button>
            <button onClick={preEle}>Previous element</button>
        </div>
    );

}