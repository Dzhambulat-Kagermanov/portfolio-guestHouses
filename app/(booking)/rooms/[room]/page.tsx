import { RoomsCard } from '@/page/RoomsCard'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Guest House | Комната',
}
const page: FC = props => {
	console.log(props)

	return (
		<RoomsCard
			//@ts-ignore
			slug={props.params.room}
			//@ts-ignore
			selectedService={props.searchParams.service}
		/>
	)
}

export default page
