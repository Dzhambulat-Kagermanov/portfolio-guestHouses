import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { FC, ReactNode } from 'react'
import Content from './Content'
import Head from './Head'
import cls from './index.module.scss'

export interface IRoomsElementProps
	extends IClassName,
		Omit<
			IRoomsCardAllData,
			'services' | 'slug' | 'conditions' | 'roomImages' | 'description'
		> {
	services: ReactNode[]
	roomsElementHeadClass?: string
	roomsElementContentClass?: string
}
const RoomsElement: FC<IRoomsElementProps> = ({
	className,
	availableRooms,
	maxGuests,
	previewImg,
	services,
	previewDescription,
	title,
	roomsElementHeadClass,
	roomsElementContentClass,
}) => {
	return (
		<div className={cn(cls.roomsCard, [className])}>
			<Head
				availableRooms={availableRooms}
				maxGuests={maxGuests}
				previewImg={previewImg}
				className={cn(cls.head, [roomsElementHeadClass])}
			/>
			<Content
				previewDescription={previewDescription}
				services={services}
				className={cn(cls.content, [roomsElementContentClass])}
				title={title}
			/>
		</div>
	)
}

export { RoomsElement }
