import dynamic from 'next/dynamic'

export const HomeAsync = dynamic(() => import('./Home'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
