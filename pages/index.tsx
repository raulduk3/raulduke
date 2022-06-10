import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player/lazy'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
	height: '100vh',
    maxheight: '100vh',
    position: 'relative',
	overflow: 'hidden',
    '& video': {
      objectFit: 'cover',
    }
  },
  overlay: {
    position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
  alignContent: 'center',
    top: 0,
    left: 0,
    textAlign: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  title: {
	color: '#fff',
  lineHeight: "20vh",
	fontStyle: 'none',
	fontFamily: "'thunderhouse-pro', sans-serif",
	':hover': {
		fontStyle: 'underline'
	}
  }
}));

const Index = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <ReactPlayer
        url="https://raulduke.com/Black Sapphire by AL-90 _ 21st century dorm.mp4"
        playing
        loop
        muted
        width="100vw"
        height="100vh"
      />
      <div className={classes.overlay}>
			<Typography variant="h3" component="h1" className={classes.title}>
				<a href="https://www.youtube.com/channel/UCtn5rjH9-l1LeHULyc8udwQ/videos">RICK NOISY</a>
				
			</Typography>
      </div>
    </section>
  );
};

export default Index;
