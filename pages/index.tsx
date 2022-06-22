import React from 'react';
import ReactPlayer from 'react-player'
import style from '../styles/Index.module.css'

const Index = () => {

  return (
    <section className={style.root}>
      <p><a href='https://www.youtube.com/channel/UCtn5rjH9-l1LeHULyc8udwQ'>rick álvarez</a></p>
      <p>🝰🜛🜂</p>
      <ReactPlayer width="100vw" height="33vh" url='https://youtu.be/SXnGUEzP0p8' />
      <ReactPlayer width="100vw" height="33vh" url='https://youtu.be/CO70NVlY0Gw' />
      <ReactPlayer width="100vw" height="33vh" url='https://youtu.be/IWqAFtIGrUI' />
    </section>
  );
};

export default Index;
