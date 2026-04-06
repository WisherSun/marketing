import React from "react";

import bg from '../assets/images/videoBg.jpg' 

function VideoSection(){
 return <div style={{ width:'100%', 
 height:'600px',
 backgroundImage: `url(${bg})`,
 backgroundRepeat: 'no-repeat',
 backgroundAttachment:'fixed',
 backgroundPosition:'top',
 backgroundSize:'cover'
 }}>

 </div>
}
export default VideoSection
