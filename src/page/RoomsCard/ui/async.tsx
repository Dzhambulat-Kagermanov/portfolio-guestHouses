import dynamic from 'next/dynamic'

export const RoomsCardAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
