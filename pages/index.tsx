import type { NextPage } from "next"

import { motion } from "framer-motion"

const Index: NextPage = () => {
	return (
		<>
			<div className="container">
				<motion.h1
					initial={{opacity: 0, y: -60}}
					animate={{ opacity: [0, 1], y: [-60, 0] }}
					style={{ fontSize: "4rem" }}
					transition={{ duration: 2, type: "tween"}}>RAUL DUKE</motion.h1>
				<ul>
					<li><a href="https://link.raulduke.com">LINKS</a></li>
				</ul>
				<div className="news">
					<p>RAUL DUKE IS TEMPORARILY OUT OF OPERATION.</p>
				</div>
			</div>
    	</>
	)
}

export default Index