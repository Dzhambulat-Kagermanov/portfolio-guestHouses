import dynamic from 'next/dynamic'

export const HomeAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
