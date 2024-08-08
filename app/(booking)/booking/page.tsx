import { BookingPage } from '@/page/Booking'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Guest House | Бронирование',
}
const Booking: FC = props => {
	//@ts-ignore
	return <BookingPage slug={props.searchParams.slug} />
}

export default Booking
