import { getCards } from '@/shared/api'
import { IClassName } from '@/shared/types'
import { FC } from 'react'
import Content from './Content'

interface Props {
	isFilter?: boolean
}
const RoomsList: FC<Props & IClassName> = async ({ className, isFilter }) => {
	const roomsData = (await getCards()).data

	return (
		<Content roomsData={roomsData} className={className} isFilter={isFilter} />
	)
}

export { RoomsList }
