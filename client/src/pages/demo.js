import React from 'react';
import VideoThumbnail from "reactautoplay";
 
const App = () => {
    return (
        <VideoThumbnail
          title='The Bachelor Premieres January 6'
          preview='https://media1.giphy.com/media/llsb2HU9sKfK57pcnf/giphy480p.mp4'
          badge='Premiere'
          badgeBG='#EF798A'
          message='1.2M Watching Now 🔥🔥'
          muted={false}
          width={350} 
          classname='customClassName' /> 
    )
}

const Product = () => {
  return (
 <>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <App />
 </>
    );
};

export default Product;
