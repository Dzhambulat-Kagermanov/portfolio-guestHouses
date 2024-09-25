import { getRooms } from '@/shared/api'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { FC } from 'react'
import Content from './Content'

interface Props {
	isFilter?: boolean
}
const RoomsList: FC<Props & IClassName> = async ({ className, isFilter }) => {
	let data: IRoomsCardAllData[]

	try {
		data = (await getRooms()).data
	} catch {
		data = []
	}

	return <Content roomsData={data} className={className} isFilter={isFilter} />
}

export { RoomsList }
