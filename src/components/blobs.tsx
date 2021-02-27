import { start } from 'repl'
import Color from 'color'
import { useMediaQuery } from 'react-responsive'
import { useMedia } from 'use-media'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

import { sample } from '../util'
// import './blob.module.scss'

export const Blob: React.FC<{
	colors: string[]
	startx: string
	starty: string
	size: string
}> = (props) => {
	const isSmall = useMedia('(max-width: 1024px)')
	// const { scrollYProgress } = useViewportScroll();
	// const [rot, set] = useState(0);
	// const rotate = useTransform(scrollYProgress, x => 360*(1-(x/2))).onChange(z => set(z));
	// console.log('z', props.startx);
	// useEffect(() => {
	// 	console.log(Color(props.colors[0]).rotate(rot).hex())
	// }, [props.colors, rot])
	return (
		<motion.div
			style={{
				borderRadius: '30% 50% 20% 40%',
				backgroundColor: props.colors[0],
				background: `radial-gradient(circle, ${props.colors[0]} 0%,  ${props.colors[1]} 100%);`,
				height: props.size,
				width: props.size,
				animation: `transform 40s ease-in-out infinite both alternate, movement${sample(
					['1', '2', '3', '4']
				)} 20s ease-in-out infinite both`,
				opacity: 0.7,
				position: 'absolute',
				left: props.startx,
				top: props.starty,
			}}
			onScroll={() => {
				console.log('scrolled')
			}}
		/>
	)
}
