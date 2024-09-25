'use client'
import { useHomeFormData, useWindow } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { Container, Typography } from '@/shared/ui'
import { AdaptiveRoomsCard, RoomsCard } from '@/widgets/RoomsCard'
import { FC } from 'react'
import cls from './index.module.scss'
import adt from '@/page/Rooms/ui/adaptive.module.scss'

interface Props extends IClassName {
	roomsData: IRoomsCardAllData[] | []
	isFilter?: boolean
}
const Content: FC<Props> = ({ className, roomsData, isFilter }) => {
	const userSelectedGuests = useHomeFormData(state => state.guests)
	const filterGuests = isFilter ? userSelectedGuests : undefined
	const { isMdMedium } = useWindow()
	const cardsByProp = isFilter
		? roomsData.length
			? roomsData.filter(({ maxGuests }) => {
					//@ts-ignore
					if (filterGuests > maxGuests) return false
					return true
			  })
			: []
		: roomsData

	return (
		<Container
			containerClass={cn(cls.container, [adt.listContainer])}
			innerClass={cn(cls.list, [className, adt.list])}
		>
			{cardsByProp.length !== 0 ? (
				<ul className={cn(cls.roomsData, [adt.group])}>
					{isMdMedium
						? cardsByProp.map(
								({
									availableRooms,
									conditions,
									previewDescription,
									previewImg,
									services,
									slug,
									title,
									maxGuests,
								}) => {
									return (
										<AdaptiveRoomsCard
											availableRooms={availableRooms}
											conditions={conditions}
											maxGuests={maxGuests}
											previewDescription={previewDescription}
											previewImg={previewImg}
											services={services}
											slug={slug}
											title={title}
											key={slug}
										/>
									)
								}
						  )
						: cardsByProp.map(
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
										roomsElemClass={cn(cls.item, [adt.item])}
										key={index}
										roomsElemWrapperClass={cn(adt.itemWrapper)}
										roomsElementHeadClass={cn(adt.head)}
										roomsElementContentClass={cn(adt.content)}
										roomsElementServicesClass={cn(adt.services)}
										roomsElementServicesBtnClass={cn(adt.btn)}
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
