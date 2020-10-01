import React from 'react';

const Intro = () => {

  const [ videoEnd, setVideoEnd] = React.useState(false);

  return (
    <div className="intro">
      <div className="container">
        <h1>Hyundai Azera</h1>
        <p>Redefine success.</p>
        <video muted onEnded={() => setVideoEnd(true)} className={`video ${videoEnd && 'hidden'}`} autoPlay>
          <source src="/main.mp4"/>
        </video>
      </div>
    </div>
  );
};

export default Intro;
