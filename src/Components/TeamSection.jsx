import React from "react";
import SectionTitle from './blockComponents/SectionTitle'

import insta from '../assets/images/instaBlue.svg'
import fb from '../assets/images/fbBlue.svg'
import twitter from '../assets/images/twitterBlue.svg'

function TeamSection(props){
    const title = 'Our Team'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

 return  <div style={{margin:'100px 0'}}>
    <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
    <div style={{display:'flex', justifyContent:'space-between', gap:'30px', margin:'50px auto', width:'1080px'}}>
      {
         props.data.map(item => (
            <div style={{width:'340px', borderRadius:'5px',boxShadow:'0px 5px 4px 0px rgba(0, 0, 0, 0.05)'}}>
               <img src={item.image} style={{width:'100%'}}/>
               <p>{item.name}</p>
               <p>{item.position}</p>
               <div style={{margin:'20px auto',background:'grey', width:'100px', height:'2px'}}></div>
               <div style={{display:'flex', justifyContent:'center', gap:'10px', marginBottom:'30px'}}>
                  <a href={item.instaLink} style={{background: '#0096ff33', borderRadius:'5px', textAlign:'center', textDecoration:'none', padding:'5px', width:'25px', height:'25px'}}><img src={insta} style={{width:'25px', height:'25px'}}/></a>
                  <a href={item.fbLink} style={{background: '#0096ff33', borderRadius:'5px', textAlign:'center', textDecoration:'none', padding:'5px', width:'25px', height:'25px'}}><img src={fb} style={{width:'25px', height:'25px'}}/></a>
                  <a href={item.twitterLink} style={{background: '#0096ff33', borderRadius:'5px', textAlign:'center', textDecoration:'none', padding:'5px', width:'25px', height:'25px'}}><img src={twitter} style={{width:'25px', height:'25px'}}/></a>
               </div>
            </div>
         ))
      }
    </div>
 
 </div>
}
export default TeamSection