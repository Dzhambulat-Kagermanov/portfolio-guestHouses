import dynamic from 'next/dynamic'

export const ArticlesAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
