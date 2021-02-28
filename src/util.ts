import request from 'graphql-request'

export const sample = <T>(items: T[]) =>
	items[Math.floor(Math.random() * items.length)]

export const fetch = (query: string) =>
	request(
		'https://api-us-east-1.graphcms.com/v2/ckjq7p0mau50s01z1aio1b4ia/master',
		query
	)
