import React from 'react';
import ReactPlayer from 'react-player'
import style from '../styles/Index.module.css'

const Index = () => {

  return (
    <section className={style.root}>
       <h6>🝰🜛🜂</h6>
      <p><a href='https://www.youtube.com/channel/UCtn5rjH9-l1LeHULyc8udwQ' className='main'>rick álvarez</a></p>
      <div className={style.column}>
        <ReactPlayer width='100%'  url='https://youtu.be/SXnGUEzP0p8' />
        <ReactPlayer width='100%' url='https://youtu.be/CO70NVlY0Gw' />
        <ReactPlayer width='100%' url='https://youtu.be/IWqAFtIGrUI' />
      </div>
    </section>
  );
};

export default Index;
