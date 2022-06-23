import React from 'react';
import ReactPlayer from 'react-player'
import style from '../styles/Index.module.css'

const Index = () => {

  return (
    <section className={style.root}>
       <h6>🝰🜂🝲</h6>
      <p><a href='https://www.youtube.com/channel/UCtn5rjH9-l1LeHULyc8udwQ' className='main'>rick álvarez</a></p>
      <div className={style.column}>
        <div className='label'>
            <h3>Videos</h3>
        </div>  
        <ReactPlayer height="15vh"  url='https://youtu.be/SXnGUEzP0p8' />
        <ReactPlayer height="15vh" url='https://youtu.be/IWqAFtIGrUI' />
        <ReactPlayer height="15vh" url='https://youtu.be/CO70NVlY0Gw' />
        <ReactPlayer height="15vh" url='https://youtu.be/z_O_n9QNYKo' />
        <ReactPlayer height="15vh" url='https://youtu.be/OiXkIOF98A0' />
      </div>
    </section>
  );
};

export default Index;
