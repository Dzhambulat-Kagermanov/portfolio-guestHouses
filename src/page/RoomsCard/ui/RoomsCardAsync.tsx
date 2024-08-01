import dynamic from 'next/dynamic'

export const RoomsCardAsync = dynamic(() => import('./RoomsCard'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
