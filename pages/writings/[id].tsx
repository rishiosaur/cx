import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { useMedia } from 'use-media'
import { fetch } from '../../src/util'
import { MainStyle } from '../../src/layouts'

const Writing = ({ article }) => {
	const isSmall = useMedia('(max-width: 1024px)')

	return (
		<MainStyle>
			{/* <div style={{height:'50vh', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', justifyItems:'center', margin: '0 auto'}}> */}
			<div
				style={{
					height: '50vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<motion.section
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						margin: 'auto',
						// justifySelf:'center',

						// height: '100vh',
					}}>
					<motion.h2
						style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
						{new Date(article.createdAt).toLocaleDateString()}
					</motion.h2>
					<div>
						<motion.h1 style={{ margin: 0 }}>{article.title}</motion.h1>
						<h2>{article.description}</h2>
					</div>
				</motion.section>
			</div>
			<motion.section
				style={{ width: isSmall ? '100%' : '60%', margin: '0 auto' }}>
				<ReactMarkdown>{article.content}</ReactMarkdown>
			</motion.section>

			{/* </div> */}
		</MainStyle>
	)
}

export default Writing

export const getStaticProps = async ({ params: { id } }) => {
	console.log(id)
	const { article } = await fetch(`
	{article(where:{
    id:"${id}"
  }) {
		id
		content
		description
		createdAt
		title
	}}`)
	return { props: { article } }
}

export const getStaticPaths = async () => {
	const { articles } = await fetch(`
	{
	articles {
	id
	}}
	`)

	return {
		paths: articles.map(({ id }) => ({ params: { id } })),
		fallback: false,
	}
}
