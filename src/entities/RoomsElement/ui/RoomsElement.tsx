import { cn } from '@/shared/lib'
import { IRoomsCardAllData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { FC, ReactNode } from 'react'
import Content from './Content/Content'
import Head from './Head/Head'
import cls from './RoomsElement.module.scss'

interface Props
	extends IClassName,
		Omit<
			IRoomsCardAllData,
			'services' | 'slug' | 'conditions' | 'roomImages' | 'description'
		> {
	services: ReactNode[]
}
const RoomsElement: FC<Props> = ({
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
