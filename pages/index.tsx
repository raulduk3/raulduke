import type { NextPage } from "next"

import { motion } from "framer-motion"

const Index: NextPage = () => {
	return (
		<>
			<div className="container">
				<motion.h1
					initial={{opacity: 0, y: -60}}
					animate={{ opacity: [0, 1], y: [-60, 0] }}
					style={{ fontSize: "8.5rem", textAlign:"center", padding: "0.8em 0.5em", margin: "0" }}
					transition={{ duration: 1.3, type: "tween"}}>RAUL DUKE</motion.h1>
				<ul>
					<li><a href="https://link.raulduke.com">VIDEO</a></li>
				</ul>
				{/* <div className="news">
					<p>RAUL DUKE IS TEMPORARILY OUT OF OPERATION.</p>
				</div> */}
			</div>
		</>
	)
}

export default Index