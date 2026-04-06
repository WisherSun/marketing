import React from "react";
import SectionTitle from "./blockComponents/SectionTitle";

function PriceSection(props){
    const title = 'Our Price'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

 return  <div style={{wigth:'100%', padding: "80px 0", background:'#F9F9F9'}}>
    <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
    <div style={{display:'flex', justifyContent:'space-between', gap: '10px', margin:'50px auto', width: '1080px' }}>
      {props.data.map(item => (
         <div style={{padding:'20px',width:'300px', textAlign: 'center', background:'white'}}>
            <img src={item.image} style={{width:'100px',height:'100px'}}/>
            <h3>{item.title}</h3>
            <div style={{background: '#0096ff', borderRadius: '50%', textAlign:'center', margin: '10px auto', width:'150px', height:'50px', padding:'50px 0'}}>
            <p style={{padding:0, margin: 0, fontWeight:'700', color: 'white', fontSize:'24px', lineHeight:'1'}}>{item.price}</p>
            <p style={{padding:0, margin: 0, fontWeight:'700', color: 'white', fontSize:'24px', lineHeight:'1'}}>{item.time}</p>
            </div>
            {item.info.map(q =>(
               <p>{q}</p>
            ))}
         </div>
      ))}
    </div>
 </div>
}
export default PriceSection