import { RoomsPage } from '@/page/Rooms'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Guest House | Номера',
}

const Rooms: FC = () => {
	return <RoomsPage />
}

export default Rooms
