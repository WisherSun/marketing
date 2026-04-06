import React from "react";
import SectionTitle from "./blockComponents/SectionTitle";

import arrow from '../assets/images/arrow.svg'

function FAQSection(props){
    const title = 'Frequently Asked Questions'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

 return  <div style={{width:'1080px', margin:'100px auto 50px'}}>
    <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
    {
      props.data.map(item => (
         <div style={{boxShadow:'0px 0px 30px 0px rgba(0, 0, 0, 0.09)', }}>
            <div style={{display:'flex', justifyContent:'space-between', padding:'5px 20px', marginBottom:'10px'}}>
               <p style={{fontSize:'30px', fontWeight:'700'}}>{item.title}</p>
               <img src={arrow} style={{width:'30px'}}/>
            </div>

            <div style={{padding:'20px', margin:'0 0 20px'}}>
               {item.subtitle}
            </div>
         </div>
      ))
    }
 
 </div>
}
export default FAQSection