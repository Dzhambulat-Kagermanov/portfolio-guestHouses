import dynamic from 'next/dynamic'

export const ArticlesAsync = dynamic(() => import('./Articles'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
