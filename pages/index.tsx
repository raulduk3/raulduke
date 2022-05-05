import type { NextPage } from "next"
import ReactPlayer from "react-player"
import { motion } from "framer-motion"
import style from '../styles/Index.module.css'

const Index: NextPage = () => {
	return (
		<div className={style.videoHero}>
			<ReactPlayer url="https://raulduke.com/V (Sol Infinito).mp4"
				autoPlay
				controls={false}
				playing
				loop
				muted
				width="100%"
				height="100%" />
			<div className={style.overlay}>
				<div className={style.box}>
					<p><a className={style.link} href="https://raulduke.campsite.bio/">Raül Düke</a> is  under construction</p>
				</div>
			</div>
		</div>
	)
}

export default Index