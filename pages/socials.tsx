import { motion } from 'framer-motion'
import { MainStyle } from '../src/layouts'

const Socials = () => (
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
					height: '100vh',
				}}>
				<motion.h2
					style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
					@rishiosaur
				</motion.h2>
				<motion.h1>digital persona</motion.h1>
			</motion.section>
			<section
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignContent: 'center',
					alignItems: 'center',
					width: '80%',
					margin: '0 auto',
				}}>
				<h1 style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
					manifest
				</h1>
				<section>
					{/* <div style={{width:'20rem', height:'20rem'}}> */}
					{/* <img style={{width:'100%', objectFit:'cover', height:'20rem'}} src="https://rishi.js.org/img/IMG_3359.jpg"/> */}
					{/* </div> */}

					<h2 className="intro">
						Programming isn't something that I do for money.
					</h2>
					<p>
						{' '}
						It is because it's my passion. Programming, in our world, is a
						convoluted thing, filled with libraries, frameworks, and all sorts
						of keyboard trickery. However, at the end of it, there lies a
						masterful product: one that may change the world, even. That is
						exactly what appeals to me. The ability to make something
						revolutionary through something that is incredibly accessible is the
						greatest thing one can do.
					</p>

					<p>
						Ideas don't come free. They require hard work, with setbacks all
						along the way. My job isn't necessarily to create ideas; it can also
						be to help realize dreams. My job is to bear all the grunt work that
						is required to put an idea into reality, be it large or small.
					</p>
					<h2>
						I am Rishi Kothari. I am a programmer, and I make products out of
						dreams.
					</h2>
				</section>
			</section>
			<br />
			<br />

			<section
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignContent: 'center',
					alignItems: 'center',
					width: '80%',
					margin: '0 auto',
				}}>
				<section>
					{/* <div style={{width:'20rem', height:'20rem'}}> */}
					{/* <img style={{width:'100%', objectFit:'cover', height:'20rem'}} src="https://rishi.js.org/img/IMG_3359.jpg"/> */}
					{/* </div> */}

					<h2 className="intro">Who am I?</h2>
					<p>
						Hard to describe. First and foremost, I'm a maker. I love building
						things with naïvety, blissfully unaware of the real world. I dream
						of a life where <em>everyone</em> can do that with no repercussions.
						<br /> However, I'm also a realist. My current work focuses on
						capitalizing on raw human capital to enact positive social
						change—projects like PetCode and Legist.
					</p>

					<p>
						More concretely, I'm a 15-year-old living, working, and breathing
						out of Brampton, Canada. I was thrown into the world of programming
						through pure chance when I was 8, and after hitting the ground
						running, I never stopped.
					</p>
					<h2>
						You may find me on most platforms at @rishiosaur, or Instagram at
						@rishi.cx
					</h2>
				</section>
				{/* <h1 style={{writingMode:'vertical-rl', textOrientation:'mixed'}}>profile</h1> */}
			</section>
		</MainStyle>
	</motion.main>
)

export default Socials
