import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { RoomsInfo } from '@/widgets/RoomsInfo'
import { RoomsList } from '@/widgets/RoomsList'
import { ChangeData } from '@/widgets/ChangeData'
import { RoomsDataChangeModal } from '@/widgets/RoomsDataChangeModal'
import { FC } from 'react'
import cls from './index.module.scss'
import adt from './adaptive.module.scss'

interface Props extends IClassName {
	isFilter?: boolean
}
const Rooms: FC<Props> = ({ className, isFilter }) => {
	return (
		<div className={cn(cls.rooms, [className])}>
			<ChangeData
				containerClass={adt.changeDataContainer}
				className={adt.changeData}
				changeButtonClass={adt.changeButton}
				itemsClass={adt.item}
				groupClass={adt.group}
			/>
			<RoomsDataChangeModal />
			<RoomsList isFilter={isFilter} />
			<RoomsInfo />
		</div>
	)
}

export default Rooms
