import { motion } from 'framer-motion'
import theme from '../theme'
import styles from './button.module.scss'

const Box = motion.div

export const Button: React.FC<{
	text?: string
	highlighted?: boolean
	component?: any
	styles?: any
	inverted?: boolean
	_hover?: any
}> = ({ text, inverted, highlighted, component, children, styles, _hover }) => {
	const Component = component || motion.h2
	return (
		<span data-aos="fade-in">
			<Component
				// className={styles.button}
				whileHover={{
					// opacity: 0.5,
					cursor: 'pointer',
					// border: '1px',
					backgroundColor: theme.colors.color,
					color: theme.colors.background,
					// borderWidth:'0.25rem',
					// borderStyle:'solid',
					..._hover,
				}}
				style={{
					opacity: 1,
					padding: '1rem',
					display: 'inline-block',
					// borderColor:theme.colors.color,
					//
					// borderRadius:'0.25rem',
					// borderWidth:'0',

					...(!highlighted
						? {
								textDecoration: 'none',
								// textDecorationStyle:'none'
						  }
						: {
								textDecoration: 'underline',
								// textDecorationStyle: 'wavy',
								textDecorationSkip: 'ink',
						  }),
					...styles,
				}}
				transition={{ ease: 'easeInOut', duration: 0.1 }}>
				{text || children}
			</Component>

			{/* <style jsx>
			{`
				.button {
					border: 3px ${theme.colors.color} solid;
					padding: 1rem;
					border-radius: 30%/50%;
				}
			`}
		</style> */}
		</span>
	)
}
