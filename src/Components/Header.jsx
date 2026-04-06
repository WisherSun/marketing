import React from "react";


function Header(props){
    const menu = ['Home', 'About', 'Service', 'Page', 'Blog', 'Contact']
    
    return <div style={{position:'fixed',
        top:0,
        left:0,
        backgroundColor:'#f9f9f9', 
        width: '100%',
        zIndex: 5,
        height: '90px',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        

    }}>
        <img src={props.logo} style={{height:'30px'}}/>

        <div style={{display: 'flex', gap:'5px'}}>
            
            {menu.map(item => (
                <button>{item}</button> 

            ))}
        </div>
     </div>
}
export default Header