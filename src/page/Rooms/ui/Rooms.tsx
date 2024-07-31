import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import cls from './Rooms.module.scss'

interface Props extends IClassName {}
const Rooms: FC<Props> = ({ className }) => {
	return <div className={cn(cls.rooms, [className])}>Rooms</div>
}

export default Rooms
