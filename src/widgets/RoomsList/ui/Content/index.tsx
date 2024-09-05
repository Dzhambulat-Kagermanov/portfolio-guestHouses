'use client'
import { useHomeFormData } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { Container, Typography } from '@/shared/ui'
import { RoomsCard } from '@/widgets/RoomsCard'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	roomsData: IRoomsCardAllData[]
	isFilter?: boolean
}
const Content: FC<Props> = ({ className, roomsData, isFilter }) => {
	const userSelectedGuests = useHomeFormData(state => state.guests)
	const filterGuests = isFilter ? userSelectedGuests : undefined

	const cardsByProp = isFilter
		? roomsData.filter(({ maxGuests }) => {
				//@ts-ignore
				if (filterGuests > maxGuests) return false
				return true
		  })
		: roomsData

	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.list, [className])}
		>
			{cardsByProp.length !== 0 ? (
				<ul className={cls.roomsData}>
					{cardsByProp.map(
						(
							{
								availableRooms,
								previewDescription,
								maxGuests,
								previewImg,
								services,
								title,
								slug,
							},
							index
						) => (
							<RoomsCard
								tag='li'
								previewDescription={previewDescription}
								availableRooms={availableRooms}
								maxGuests={maxGuests}
								previewImg={previewImg}
								services={services}
								slug={slug}
								title={title}
								roomsElemClass={cn(cls.item)}
								key={index}
							/>
						)
					)}
				</ul>
			) : (
				<Typography weight='SB' className={cn(cls.notFoundTitle)}>
					По вашему запросу ничего не найдено :\
				</Typography>
			)}
		</Container>
	)
}

export default Content
