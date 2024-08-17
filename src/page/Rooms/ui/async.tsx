import dynamic from 'next/dynamic'
export const RoomsAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
