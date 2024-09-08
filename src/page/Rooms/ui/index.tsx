import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { RoomsInfo } from '@/widgets/RoomsInfo'
import { RoomsList } from '@/widgets/RoomsList'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	isFilter?: boolean
}
const Rooms: FC<Props> = ({ className, isFilter }) => {
	return (
		<div className={cn(cls.rooms, [className])}>
			<RoomsList isFilter={isFilter} />
			<RoomsInfo />
		</div>
	)
}

export default Rooms
