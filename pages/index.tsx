import type { NextPage } from "next"
import { motion } from "framer-motion"

const Index: NextPage = () => {
	return (
		<>
			<video autoPlay className="video" muted loop>
				<source src="/V (Sol Infinito).mp4" type="video/mp4"></source>
			</video>
			<div className="container news">
				<div className="box">
					<p><a href="https://link.raulduke.com/">Raül Düke</a> is currently under construction</p>
				</div>
			</div>
		</>
	)
}

export default Index