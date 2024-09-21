import { RoomsPage } from '@/page/Rooms'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Номера',
}

const Rooms: FC = props => {
	return (
		// @ts-ignore
		<RoomsPage isFilter={JSON.parse(props.searchParams.filter || 'false')} />
	)
}

export default Rooms
