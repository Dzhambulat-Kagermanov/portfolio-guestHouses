import dynamic from 'next/dynamic'
export const RoomsAsync = dynamic(() => import('./Rooms'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
