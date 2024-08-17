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
}
const RoomsElement: FC<IRoomsElementProps> = ({
	className,
	availableRooms,
	maxGuests,
	previewImg,
	services,
	previewDescription,
	title,
}) => {
	return (
		<div className={cn(cls.roomsCard, [className])}>
			<Head
				availableRooms={availableRooms}
				maxGuests={maxGuests}
				previewImg={previewImg}
				className={cn(cls.head)}
			/>
			<Content
				previewDescription={previewDescription}
				services={services}
				className={cn(cls.content)}
				title={title}
			/>
		</div>
	)
}

export { RoomsElement }
