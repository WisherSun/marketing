import React from "react";
import SectionTitle from "./blockComponents/SectionTitle";

function ProjectSection(props){
    const title = 'Our Projects'
    const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

 return  <div style={{maxWidth:'100%', margin:'100px 0'}}>
    <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
    <div style={{display:'flex', gap: '10px', overflow: "hidden", paddingTop: "50px", margin: '0 auto 50px', maxWidth: '1080px' }}>
      {props.data.map(item => (
         <div style={{padding:'100px 20px 20px 20px', width:'25%', height:'200px', background: 'lightgrey'}}>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
         </div>
      ))}
    </div>
 </div>
}
export default ProjectSection