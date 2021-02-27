import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<>
				<Html lang="en">
					<head>
						<link
							rel="stylesheet"
							href="https://unpkg.com/aos@next/dist/aos.css"
						/>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0"
						/>

						<title>Rishi Kothari | Software Engineer, Developer</title>
						<link
							rel="shortcut icon"
							href="https://i.ibb.co/TPKjZbS/1604320263101.jpg"
						/>
						<link rel="preload" />
						<meta
							name="title"
							content="Rishi Kothari | Software Engineer, Developer"
						/>
						<meta
							name="description"
							content="I'm Rishi Kothari, a 15-year-old developer that's excited about backend technologies with GraphQL, and the intersection of CS Theory with social good."
						/>

						<meta property="og:type" content="website" />
						<meta property="og:url" content="https://rishi.cx/" />
						<meta
							property="og:title"
							content="Rishi Kothari | Software Engineer, Developer"
						/>
						<meta
							property="og:description"
							content="I'm Rishi Kothari, a 15-year-old developer that's excited about backend technologies with GraphQL, and the intersection of CS Theory with social good."
						/>
						<meta property="og:image" content="/me.png" />

						<meta property="twitter:card" content="summary_large_image" />
						<meta property="twitter:url" content="https://rishi.cx/" />
						<meta
							property="twitter:title"
							content="Rishi Kothari | Software Engineer, Developer"
						/>
						<meta
							property="twitter:description"
							content="I'm Rishi Kothari, a 15-year-old developer that's excited about backend technologies with GraphQL, and the intersection of CS Theory with social good."
						/>
						<meta property="twitter:image" content="/me.png" />
					</head>
					<Head />

					<body>
						<Main />
						<NextScript />
						<script src="https://unpkg.com/aos@next/dist/aos.js" />
						<script>AOS.init();</script>
					</body>
				</Html>
			</>
		)
	}
}

export default MyDocument
