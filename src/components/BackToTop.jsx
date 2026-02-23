import { useEffect,useState } from "react";

export default function BackToTop(){
  const [show,setShow]=useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      setShow(window.scrollY>400);
    });
  },[]);

  if(!show) return null;

  return(
    <button
      onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
      style={{
        position:"fixed",
        bottom:"30px",
        right:"30px",
        background:"var(--gradient)",
        border:"none",
        padding:"12px 16px",
        borderRadius:"50%",
        cursor:"pointer"
      }}>
      ↑
    </button>
  );
}