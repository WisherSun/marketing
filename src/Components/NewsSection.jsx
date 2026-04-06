import React from "react";
import SectionTitle from "./blockComponents/SectionTitle";
import time from "../assets/images/time.svg"

function NewsSection(props){
    const title = 'News & Media'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

 return  <div style={{margin:'100px 0'}}>
    <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
    <div style={{maxWidth:'1080px', display:'flex',gap:'20px', justifyContent:'space-between', margin:'50px auto 0'}}>
      {props.data.map(item =>(
         <div style={{background:'white', boxShadow:'0 10px 30px 0 rgb(0 0 0 / 5%)', textAlign:'left'}}>
            <img src={item.image} style={{width:'100%'}}/>
            <p style={{fontWeight:'600', padding:'0px 20px 0'}}>{item.title}</p>
            <p style={{padding:'0 20px'}}>{item.subtitle}</p>
            <button style={{background:'#0096ff14', borderRadius:'6px', margin:'0 20px', padding:'5px 10px', border:'none', color:'#0096ff'}}>Read more</button>
            <div style={{height:'4px', width:'85%', margin:'20px auto 0', background: '#f2f2f2'}}></div>

            <div style={{display:'flex', alignItems:'center', gap:'10px', margin:'0 0 10px 20px'}}>
               <img src={time} style={{width:'30px', height:'30px'}}/>
               <p style={{color:'#FF6900'}}>{item.time}</p>
            </div>
         </div>
      ))}

    </div>
 </div>
}
export default NewsSection