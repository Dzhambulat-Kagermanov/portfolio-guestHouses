import { RoomsCard } from '@/page/RoomsCard'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Guest House | Комната',
}
const page: FC = params => {
	return <RoomsCard slug={'slug'} />
}

export default page
