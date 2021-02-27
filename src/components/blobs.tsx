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
}> = ({  colors, startx, starty, size  }) => (
		<motion.div
			style={{
				borderRadius: '30% 50% 20% 40%',
				backgroundColor: colors[0],
				background: `radial-gradient(circle, ${colors[0]} 0%,  ${colors[1]} 100%);`,
				height: size,
				width: size,
				animation: `transform 40s ease-in-out infinite both alternate, movement${sample(
					['1', '2', '3', '4']
				)} 20s ease-in-out infinite both`,
				opacity: 0.7,
				position: 'absolute',
				left: startx,
				top: starty,
			}}
		/>
	)
