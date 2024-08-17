import dynamic from 'next/dynamic'

export const BookingAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
