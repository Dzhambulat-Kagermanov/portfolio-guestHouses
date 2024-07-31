import dynamic from 'next/dynamic'

export const AboutAsync = dynamic(() => import('./About'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
