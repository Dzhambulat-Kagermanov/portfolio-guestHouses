import dynamic from 'next/dynamic'

export const BookingAsync = dynamic(() => import('./Booking'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
