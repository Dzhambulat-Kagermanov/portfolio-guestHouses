import { RoomsPage } from '@/page/Rooms'
import { ChangeData } from '@/widgets/ChangeData'
import { RoomsDataChangeModal } from '@/widgets/RoomsDataChangeModal'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Номера',
}

const Rooms: FC = () => {
	return (
		<>
			<ChangeData />
			<RoomsDataChangeModal />
			<RoomsPage />
		</>
	)
}

export default Rooms
