import React from "react";
import SectionTitle from './blockComponents/SectionTitle'


function ServiceSection(props){
    const title = 'Our Service'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    
    
    return(
        <div style={{width:'100%',background:'#F9F9F9', padding:'100px 0 130px'}}>
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <div style={{display: 'flex', margin:'50px auto', justifyContent:'space-between', gap:'15px', flexWrap:'wrap',  maxWidth:'1080px'}}>
                {props.data.map(item =>(
                <div style={{maxWidth:'28%', borderTop:'4px solid #0096ff', background:'white', padding:'20px'}}>
                    <div style={{display:'flex'}}>
                        <img src={item.icon} style={{width:'40px', marginRight:'10px', height:'40px', padding:'10px', background:'#0096ff3b'}}/>
                        <h3>{item.title}</h3>
                    </div>
                    <p>{item.info}</p>
                </div>
            ))}
            </div>
            
        </div>
    )
}
export default ServiceSection