import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import Color from 'color'
import { useMedia } from 'use-media'
import { useTransform, useViewportScroll } from 'framer-motion'
import Link from 'next/link'
import useSWR from 'swr'
import request from 'graphql-request'
import { Blob } from '../components/blobs'
import { Button } from '../components/button'
import theme from '../theme'
import { fetch } from '../util'

export const MainStyle: React.FC = ({ children }) => {
	const router = useRouter()
	const { scrollYProgress } = useViewportScroll()
	function randomIntFromInterval(min, max) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	// const [rot, set] = useState(0);
	// const rotate = useTransform(scrollYProgress, x => 360*(1-(x/2))).onChange(z => set(z));
	const isSmall = useMedia('(max-width: 1024px)')
	const mode = (large: string, small: string) => {
		console.log(isSmall)
		return isSmall
			? `${randomIntFromInterval(10, 50)}vh`
			: `${randomIntFromInterval(10, 50)}rem`
	}
	return (
		<>
			<div className="layout">
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignContent: 'center',
						alignItems: 'center',

						...(isSmall && {
							width: '90%',
							margin: '0 auto',
						}),
					}}>
					<Link href="/">
						<Button>
							<Link href="/">index</Link>
						</Button>
					</Link>
					{!isSmall && (
						<Button>
							<Link href="mailto:hey@rishi.cx">hey@rishi.cx</Link>
						</Button>
					)}

					<Button>
						<Link href="/socials">socials</Link>
					</Button>
				</div>
				{children}
			</div>
			<div className="blobs">
				{[
					{
						colors: ['#4361ee', '#3f37c9'],
						size: '300px',
						startx: mode('30rem', '50vw'),
						starty: mode('10rem', '10vh'),
					},
					{
						colors: ['#f72585', '#b5179e'],
						size: '200px',
						startx: mode('10rem', '50vw'),
						starty: mode('50rem', '70vh'),
					},
					{
						colors: ['#7209b7', '#560bad'],
						size: '300px',
						startx: mode('70rem', '1vw'),
						starty: mode('40rem', '50vh'),
					},
				].map((z) => (
					<Blob {...z} />
				))}
			</div>
			<style global jsx>
				{`
					.layout {
						padding: 5em ${theme.margins.global} ${theme.margins.global}
							${theme.margins.global};
						//width: 100vw;
					}
					@media only screen and (max-width: 1024px) {
						.layout {
							padding: 2rem;
						}
					}

					@media only screen and (max-width: 725px) {
						.layout {
							padding: 1rem;
						}
					}

					.blobs {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: center;
						z-index: -1;
						position: fixed;
						left: 0;
						top: 0;
						filter: blur(20px);
					}

					@keyframes transform {
						0%,
						100% {
							border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
						}
						20% {
							border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
						}
						40% {
							border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
						}
						60% {
							border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
						}
						80% {
							border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
						}
					}

					@keyframes movement0 {
						0%,
						100% {
							transform: none;
						}
						50% {
							transform: translate(50%, 20%) rotateY(10deg) scale(1.3);
						}
					}

					@keyframes movement1 {
						0%,
						100% {
							transform: none;
						}
						50% {
							transform: translate(-50%, 20%) rotate(-200deg) scale(1.5);
						}
					}

					@keyframes movement2 {
						0%,
						100% {
							transform: none;
						}
						50% {
							transform: translate(50%, -20%) rotate(-200deg) scale(0.7);
						}
					}

					@keyframes movement3 {
						0%,
						100% {
							transform: none;
						}
						50% {
							transform: translate(50%, 30%) rotate(-200deg) scale(0.5);
						}
					}
				`}
			</style>
		</>
	)
}
