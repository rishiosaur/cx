import React, { useEffect, useState } from 'react'
import {
	AnimateSharedLayout,
	motion,
	useMotionValue,
	useSpring,
	useViewportScroll,
} from 'framer-motion'
import './app.scss'
import theme from '../src/theme'

const App = ({ Component, pageProps }) => {
	const { scrollY } = useViewportScroll()

	return (
		<>
			<AnimateSharedLayout>
				<Component {...pageProps} />
			</AnimateSharedLayout>
			<style jsx global>
				{`
					body {
						background-color: ${theme.colors.background};
						color: ${theme.colors.color};
					}
				`}
			</style>

			{/* <motion.div
				className="cursor"
				style={{
					translateX: cursorX,
					translateY: cursorY,
				}}
			/> */}
		</>
	)
}

export default App
