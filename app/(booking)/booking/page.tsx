import { BookingPage } from '@/page/Booking'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Guest House | Бронирование',
}
const Booking: FC = () => {
	return <BookingPage />
}

export default Booking
