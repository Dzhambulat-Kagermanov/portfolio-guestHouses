import dynamic from 'next/dynamic'

export const AboutAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
