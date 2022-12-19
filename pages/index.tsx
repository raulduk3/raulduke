import React from 'react';
import ReactPlayer from 'react-player'
import style from '../styles/Index.module.css'

const Index = () => {

  return (
    <section className={style.root}>
      <div className="header">
        <h6>🝰🜂🜛</h6>
        <p><a href='https://vimeo.com/rickyalvarez' className='main'>rick álvarez</a></p>
      </div>
      <div className={style.column}>  
        <ReactPlayer url='https://youtu.be/6rMKwRTi2cs' />
        <ReactPlayer url='https://youtu.be/rSVpTN6pRjA' />
        <ReactPlayer url='https://youtu.be/CO70NVlY0Gw' />
        <ReactPlayer url='https://youtu.be/z_O_n9QNYKo' />
        <ReactPlayer url='https://youtu.be/OiXkIOF98A0' />
      </div>
    </section>
  );
};

export default Index;
