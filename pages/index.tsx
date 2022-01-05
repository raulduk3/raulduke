import type { NextPage } from "next"
import ReactPlayer from "react-player"
import { motion } from "framer-motion"


const Index: NextPage = () => {
	return (
		<>
			<ReactPlayer url="https://raulduke.com/V (Sol Infinito).mp4"
				autoPlay
				controls={false}
				playing
				loop
				muted
				width="100%"
				height="100%" />
			<div className="container news">
				<div className="box">
					<p><a href="https://link.raulduke.com/">Raül Düke</a> is  under construction</p>
				</div>
			</div>
		</>
	)
}

export default Index