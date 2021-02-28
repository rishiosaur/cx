import { start } from 'repl'
import Color from 'color'
import { useMediaQuery } from 'react-responsive'
import { useMedia } from 'use-media'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

import useSWR from 'swr'
import request from 'graphql-request'
import { sample } from '../util'
// import './blob.module.scss'

const useStart = () => {
	const isSmall = useMedia('(max-width: 1024px)')
	function randomIntFromInterval(min, max) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
	return [
		isSmall
			? `${randomIntFromInterval(10, 50)}vh`
			: `${randomIntFromInterval(10, 50)}rem`,
		isSmall
			? `${randomIntFromInterval(10, 50)}vh`
			: `${randomIntFromInterval(10, 50)}rem`,
	]
}

function getColor() {
	const letters = '4567ABC'.split('')
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * letters.length)]
	}
	return color
}

export const Blob: React.FC<{
	colors: string[]
	startx: string
	starty: string
	size: string
}> = ({ colors, startx, starty, size }) => {
	const [x, y] = useStart()

	return (
		<motion.div
			style={{
				borderRadius: '30% 50% 20% 40%',
				backgroundColor: colors[0],
				background: `radial-gradient(circle, ${colors[0]} 0%,  ${
				colors[1]
				} 100%);`,
				height: size,
				width: size,
				animation: `transform 40s ease-in-out infinite both alternate, movement${sample(
					['1', '2', '3', '4']
				)} 20s ease-in-out infinite both`,
				opacity: 0.7,
				position: 'absolute',
				left: x,
				top: y,
			}}
		/>
	)
}
