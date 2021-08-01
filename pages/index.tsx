import { Main } from 'next/document'
import Head from 'next/head'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMedia } from 'use-media'
import Link from 'next/link'
import request from 'graphql-request'
import { MainStyle } from '../src/layouts'
import { Button } from '../src/components/button'
// import Me from '../public/me.jpeg';

const hoverSettings = {
	whileHover: { skewY: 5, rotateY: 0 },
	transition: { ease: 'easeInOut', delay: 0.1, duration: 0.3 },
}

const Text: React.FC<{ style?: any; truncated?: boolean }> = ({
	truncated,
	children,
	style,
}) => (
	<span className={truncated && 'truncated'}>
		<h2
			data-aos="fade-up"
			style={{ display: 'inline', margin: 0, ...style }}
			className={truncated && 'truncated'}>
			{children}
		</h2>
	</span>
)

const Home: React.FC<{
	articles: {
		description: string
		title: string
		createdAt: string
		id: string
	}[]
}> = ({ articles }) => {
	const { scrollYProgress } = useViewportScroll()
	const isSmall = useMedia('(max-width: 1024px)')
	const opacity = useTransform(scrollYProgress, (x) => 1.3 - x)
	// const scale = useTransform(scrollYProgress, x => (1-x)/1.1)
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.2 }}>
			<MainStyle>
				<motion.section
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignContent: 'center',
						alignItems: 'center',
						opacity,
						height: '100vh',
					}}>
					<motion.h2
						style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
						current @ petcode
					</motion.h2>
					<motion.h1>software, products & coffee</motion.h1>
				</motion.section>
				<motion.h1 {...hoverSettings} style={{ fontSize: '3rem' }}>
					hey, i'm rishi.
				</motion.h1>
				<motion.section
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: 'column',
						fontSize: !isSmall ? '3rem' : 'inherit',
						width: '100%',
						lineHeight: '150%',
					}}>
					<br />
					<motion.h2
						data-aos="fade-up"
						style={{
							display: 'inline',
							margin: 0,
							fontSize: !isSmall ? '3rem' : '2rem',
						}}>
						i love writing code for high impact projects like{' '}
						<Button styles={{ padding: 0 }} component={motion.span} highlighted>
							<Link href="https://petcodeusa.com">startups</Link>
						</Button>
						,{' '}
						<Button styles={{ padding: 0 }} component={motion.span} highlighted>
							<Link href="https://z.rishi.cx/g/idyllic">languages</Link>
						</Button>
						,{' '}
						<Button styles={{ padding: 0 }} component={motion.span} highlighted>
							<Link href="https://z.rishi.cx/g/hn">APIs</Link>
						</Button>
						,{' '}
						<Button styles={{ padding: 0 }} component={motion.span} highlighted>
							<Link href="https://z.rishi.cx/g/banur">infrastructure</Link>
						</Button>
						,{' '}
						<Button styles={{ padding: 0 }} component={motion.span} highlighted>
							<Link href="https://z.rishi.cx/g/paevik">bots</Link>
						</Button>
						, and everything in between.
					</motion.h2>
					<br />
					<Text style={{ fontSize: !isSmall ? '2rem' : '1rem' }}>
						i've been programming for ~7 years now, and i've found a niche
						building performant GQL APIs, NextJS apps, and conducting research &
						business at early-stage startups. <br /> <br />
					</Text>
				</motion.section>
				<motion.h1>works</motion.h1>
				<section data-aos="fade-up" className="grid-container">
					<section className="X1" data-aos="fade-up">
						<img
							style={{ width: '100%' }}
							src="https://source.unsplash.com/edu_UJYxJBA/"
							alt="Idyllic is a minimal scripting language for scaffolding Node APIs together extremely quickly."
						/>
						<h1>
							<Button
								highlighted={isSmall}
								styles={{ padding: 0 }}
								component={motion.span}>
								<Link href="https://z.rishi.cx/g/idyllic">idyllic</Link>
							</Button>
						</h1>
						<p>
							programming language for quickly writing REST APIs. top hit on
							r/programminglanguages, {'<'}1ms average response.{' '}
						</p>
					</section>
					<section className="X2" data-aos="fade-up">
						<img
							style={{ width: '100%' }}
							src="https://source.unsplash.com/wVjd0eWNqI8/"
							alt="HN is a development-focused currency toolkit for hack club."
						/>
						<h1>
							<Button
								highlighted={isSmall}
								styles={{ padding: 0 }}
								component={motion.span}>
								<Link href="https://z.rishi.cx/g/hn">hn</Link>
							</Button>
						</h1>
						<p>
							dev-first currency toolset for the Hack Club community. 
						</p>
					</section>
					<section className="X3" data-aos="fade-up">
						<img
							style={{ width: '100%' }}
							src="https://source.unsplash.com/rlXgUH7Sh_I/"
							alt="Sepia is a tiny language with a hackable core."
						/>
						<h1>
							<Button
								highlighted={isSmall}
								styles={{ padding: 0 }}
								component={motion.span}>
								<Link href="https://z.rishi.cx/g/sepia">sepia</Link>
							</Button>
						</h1>
						<p>
							a minimalist language aimed at simplicity, security, and
							extendability. compiler compiles in {'<'}0.75s.
						</p>
					</section>
					<section className="Other" data-aos="fade-up">
						<h1>other</h1>
						<section>
							{[
								['banur', 'https://z.rishi.cx/g/banur'],
								['omega', 'https://z.rishi.cx/g/omega'],
								['hoot', 'https://z.rishi.cx/g/hoot'],
								['paevik', 'https://z.rishi.cx/g/paevik'],
								['teller', 'https://z.rishi.cx/g/teller'],
								['passerine', 'https://github.com/vrtbl/passerine'],
								['tuscot', 'https://z.rishi.cx/g/tuscot'],
							].map(([name, url]) => (
								<>
									{' '}
									<h2>
										<Button
											styles={{
												marginBottom: '0.25rem',
												padding: '0',
												paddingTop: '0.25rem',
												paddingBottom: '0.25rem',
												display: 'inline-block',
											}}
											component={motion.span}>
											<Link href={url}>{name}</Link>
										</Button>
									</h2>
								</>
							))}
						</section>
						<h2>
							More at my{' '}
							<Button
								highlighted
								styles={{
									marginBottom: '0.25rem',
									padding: '0',
									paddingTop: '0.25rem',
									paddingBottom: '0.25rem',
									display: 'inline-block',
								}}
								component={motion.span}>
								<Link href="https://z.rishi.cx/g/">Github</Link>
							</Button>
							.
						</h2>
					</section>
				</section>
				<motion.h1>prev</motion.h1>
				<section data-aos="fade-up" className="prev">
					<section className="P1" data-aos="fade-up">
						<img
							style={{ width: '100%' }}
							src="https://source.unsplash.com/QsvelL0YjMo/"
							alt="PetCode is a startup based around capitalizing on pet relationships."
						/>
						<h1>
							<Button
								highlighted={isSmall}
								styles={{ padding: 0 }}
								component={motion.span}>
								<Link href="https://petcodeusa.com">petcode</Link>
							</Button>
						</h1>
						<p>
							guiding our 9-person company & development through our early-stage
							kickstarter phase as CTO. acquired $11k in crowdsourced funding,
							network of {'>'}200 beta testers. conducted user interviews &
							identified KPIs and key SLOs for iteration.
						</p>
					</section>
					<section className="P2" data-aos="fade-up">
						<img
							style={{ width: '100%' }}
							src="https://source.unsplash.com/_K-QKkbn7Ds/"
							alt="I was the youngest speaker of hack the north ever."
						/>
						<h1>
							<Button
								highlighted={isSmall}
								styles={{ padding: 0 }}
								component={motion.span}>
								<Link href="https://hackthenorth.com">hack the north</Link>
							</Button>
						</h1>
						<p>
							spoke about GraphQL & open source technologies at the largest
							iteration of Canada's premiere hackathon to an audience of 3000+.
							youngest speaker at hack the north & first high school workshop
							lead. i'll be speaking at UWaterloo's CS Club in the future.
						</p>
					</section>
					<section className="P3" data-aos="fade-up">
						<h1>other</h1>
						<section>
							<section>
								{[
									['team study', 'https://teamstudy.com'],
									['rapid', 'https://rapidapp.gg'],
									['makasu', '/'],
									['tfss hack club', 'https://hackclub.com'],
									['turnerhacks', 'https://www.instagram.com/turnerhacks/'],
								].map(([name, url]) => (
									<>
										{' '}
										<h2>
											<Button
												styles={{
													marginBottom: '0.25rem',
													padding: '0',
													paddingTop: '0.25rem',
													paddingBottom: '0.25rem',
													display: 'inline-block',
												}}
												component={motion.span}>
												<Link href={url}>{name}</Link>
											</Button>
										</h2>
									</>
								))}
							</section>
						</section>
					</section>
				</section>
				<motion.h1>chat</motion.h1>
				<motion.section>
					<br />
					<motion.h2
						data-aos="fade-up"
						style={{
							display: 'inline',
							margin: 0,
							fontSize: !isSmall ? '3rem' : '2rem',
						}}>
						i'm always up for a chat with interesting people!
					</motion.h2>
					<br />
					<br />

					<Text style={{ fontSize: !isSmall ? '2rem' : '1rem' }}>
						i've recorded talk series in the past and conducted close to 100
						private coffee chats with people from around the world over the past
						year. i'd love to meet you—schedule one at{' '}
						<Button styles={{ padding: 0 }} component={motion.span} highlighted>
							<Link href="https://z.rishi.cx/m">z.rishi.cx/m</Link>
						</Button>
						, or email me at{' '}
						<Button styles={{ padding: 0 }} component={motion.span} highlighted>
							<Link href="mailto:hey@rishi.cx">hey@rishi.cx</Link>
						</Button>
					</Text>
				</motion.section>
				<motion.h1>writings</motion.h1>
				<motion.section>
					<br />
					<motion.h2
						data-aos="fade-up"
						style={{
							display: 'inline',
							margin: 0,
							fontSize: !isSmall ? '2rem' : '1rem',
						}}>
						i also document the occasional thought in my public journal.
					</motion.h2>
					<br />
					<br />
					<br />

					{articles.map((z) => (
						<div style={{ marginBottom: '1rem' }}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									marginBottom: '1rem',
								}}>
								<Text>{new Date(z.createdAt).toLocaleDateString()}</Text>
								<Button
									inverted
									highlighted
									component={motion.h2}
									styles={{ margin: '0 1rem 0 1rem' }}>
									<Link href={`/writings/${z.id}`}>{z.title}</Link>
								</Button>
								{!isSmall && (
									<Text truncated>
										{(function (str, num) {
											// If the length of str is less than or equal to num
											// just return str--don't truncate it.
											if (str.length <= num) {
												return str
											}
											// Return str truncated with '...' concatenated to the end of str.
											return `${str.slice(0, num)}...`
										})(z.description, 60)}
									</Text>
								)}
							</div>
						</div>
					))}
				</motion.section>
			</MainStyle>
			<style global jsx>
				{`
					.grid-container {
						cursor: url('https://images.unsplash.com/photo-1503601350100-26336a6beda2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80')
								3 12,
							pointer;
						display: grid;
						grid-template-columns: 1fr 1fr;
						grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
						gap: 2rem 2rem;
						grid-template-areas:
							'X1 .'
							'X1 X2'
							'X3 X2'
							'X3 X4'
							'. X4';
					}

					.prev {
						display: grid;
						grid-template-columns: 1fr 1fr;
						grid-template-rows: 1fr 1fr 1fr 1fr;
						gap: 2rem 2rem;
						grid-template-areas:
							'P1 .'
							'P1 P2'
							'P3 P2'
							'P3 .';
					}

					@media only screen and (max-width: 768px) {
						.grid-container {
							display: grid;
							grid-template-columns: 1fr;
							grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
							gap: 2rem 2rem;
							grid-template-areas:
								'X1'
								'X1'
								'X2'
								'X2'
								'X3'
								'X3'
								'X4'
								'X4';
						}

						.prev {
							display: grid;
							grid-template-columns: 1fr;
							grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
							gap: 2rem 2rem;
							grid-template-areas:
								'P1'
								'P1'
								'P2'
								'P2'
								'P3';
						}
					}
					.hero {
						height: 100vh;
					}

					.grid-container > section > h1 {
						font-size: 3rem;
					}

					.prev > section > h1 {
						font-size: 3rem;
					}

					.X1 {
						grid-area: X1;
					}
					.X2 {
						grid-area: X2;
					}
					.X3 {
						grid-area: X3;
					}

					.P1 {
						grid-area: P1;
					}
					.P2 {
						grid-area: P2;
					}
					.P3 {
						grid-area: P3;
					}

					.Other {
						grid-area: X4;
					}
				`}
			</style>
		</motion.main>
	)
}

export const getStaticProps = async () => {
	const fetched = await request(
		'https://api-us-east-1.graphcms.com/v2/ckjq7p0mau50s01z1aio1b4ia/master',
		`query Query {
  articles {
    title
    description
    createdAt
    id
  }
}
`
	)

	console.log(`stuff${fetched}`)

	return {
		props: {
			articles: fetched.articles,
		},
	}
}

export default Home
