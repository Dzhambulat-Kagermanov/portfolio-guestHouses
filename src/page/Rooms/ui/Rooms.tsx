import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { RoomsList } from '@/widgets/RoomsList'
import { FC } from 'react'
import cls from './Rooms.module.scss'

interface Props extends IClassName {}
const Rooms: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.rooms, [className])}>
			<RoomsList />
			Rooms
		</div>
	)
}

export default Rooms
