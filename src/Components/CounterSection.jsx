import React from "react";


function CounterSection(props){
 return <div style={{wigth:'100%', padding: "100px 0", background:'#1b1b1b'}}>    
    <div style={{display:'flex', justifyContent:'space-between', gap: '30px', margin:'0 auto', width: '1080px' }}>
      {props.data.map(item => (
         <div style={{width:'400px', textAlign: 'center', position:'relative'}}>
            <div style={{borderLeft:'2px solid #83b0d3',
                borderRight:'2px solid #83b0d3',
                borderTop:'2px solid #83b0d3',
                marginBottom:'30px', height: '100px'}}>
            </div>
            <div style={{borderBottom:'2px solid #83b0d3', 
                borderLeft:'2px solid #83b0d3',
                borderRight:'2px solid #83b0d3',
                height: '100px'}}>
            </div>

            <div style={{position: 'absolute', width:'80%', height:'80%', top: '8%', left: 0, color:'white',  padding: '10%'}}>
                <img src={item.icon} style={{width:'70px',height:'70px'}}/>
               <h3 style={{margin:'0', fontSize:'20px'}}>{item.title}</h3>
               
               <p style={{margin: 0, fontSize:'30px',marginLeft:'10px', fontWeight:'700'}}>{item.numb}</p>
            </div>
         </div>
      ))}
    </div>
 </div>
}
export default CounterSection