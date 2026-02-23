import { useEffect, useState } from "react";

export default function ScrollProgress(){
  const [width,setWidth]=useState(0);

  useEffect(()=>{
    const onScroll=()=>{
      const scrollTop=window.scrollY;
      const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
      setWidth((scrollTop/height)*100);
    };
    window.addEventListener("scroll",onScroll);
    return()=>window.removeEventListener("scroll",onScroll);
  },[]);

  return(
    <div style={{
      position:"fixed",
      top:0,
      left:0,
      height:"3px",
      width:`${width}%`,
      background:"var(--gradient)",
      zIndex:9999
    }}/>
  );
}