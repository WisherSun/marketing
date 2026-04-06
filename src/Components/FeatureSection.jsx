import React from "react";
import SectionTitle from "./blockComponents/SectionTitle";


function FeatureSection(props){
    const title = 'Our Feature'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    
    return (
        <div style={{margin: '100px auto 150px'}}>
    <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
<div style={{display:'flex',
    maxWidth:'1080px',
    justifyContent:'space-between',
    gap:'10px',
    margin: '10px auto'
}}>
    {props.data.map(item => (
       
            <div style={{padding:'40px 20px', background:'#0096ff', color:'white', maxWidth:'350px' }}>
            <img src={item.img} style={{width:'60px', height:'60px'}}/>
            <p><b>{item.title}</b></p>
            <p>{item.subtitle}</p>
            <button>Read more</button>
        </div>
        
    ))}

</div>
    
        </div>
    )
}

export default FeatureSection