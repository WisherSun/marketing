import React from "react";
import logo from '../assets/images/logo.png'
import facebook from '../assets/images/facebook.svg'
import linkedin from '../assets/images/linkedin.svg'
import twitter from '../assets/images/twitter.svg'
import iconMap from '../assets/images/map.svg'
import iconPhone from '../assets/images/phone.svg'
import iconWeb from '../assets/images/global.svg'

function Footer(){
    return (
        <div style={{width:'100%', background:'#000033', color:'white', textAlign:'left', padding:'50px 0'}}>
            <div style={{ maxWidth:'1080px', margin:'0 auto'}}>
                <img src={logo} style={{}}/>
                <div style={{display:"flex", flexWrap:'wrap', justifyContent:'space-between'}} >
                    <p>Test</p>
                    <div style={{width: '300px'}}>

                        <p  style={{margin:0}}>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div style={{display:'flex', justifyContent:'space-between', maxWidth: '200px', marginTop:'30px'}}>
                            <a href='https://www.facebook.com/' style={{height:'30px', background:'orange', padding:'5px', marginRight:'5px', textDecoration:'none'}}><img src={facebook} style={{width:'30px', height:'30px'}}/></a>
                            <a href='https://www.linkedin.com/' style={{height:'30px', background:'orange', padding:'5px', marginRight:'5px'}}><img src={linkedin} style={{width:'30px', height:'30px'}}/></a>
                            <a href='https://www.twitter.com/' style={{height:'30px', background:'orange', padding:'5px', marginRight:'5px'}}><img src={twitter} style={{width:'30px', height:'30px'}}/></a>
                        </div>           
                    </div>

                    <div style={{width: '350px'}}>

                        <div style={{display:"flex", alignItems:'center'}}>
                            <img src={iconMap} style={{width:'30px', height:'30px', margin:'5px'}}/><p style={{margin:0}}>1245 Rang Raod Sadar, E152 95RB</p>
                        </div>

                        <div style={{display:"flex", alignItems:'center'}}>
                            <img src={iconPhone} style={{width:'30px', height:'30px', margin:'5px'}}/><p style={{margin:0}}>(923) 3354 2252 <br/>(982) 2325 2249</p>
                        </div>

                        <div style={{display:"flex", alignItems:'center'}}>
                            <img src={iconWeb} style={{width:'30px', height:'30px', margin:'5px'}}/><p style={{margin:0}}>example@example.com</p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Footer

