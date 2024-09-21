'use client'
import { useHomeFormData, useWindow } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { Button, Container, Typography } from '@/shared/ui'
import { RoomsCard } from '@/widgets/RoomsCard'
import { FC } from 'react'
import cls from './index.module.scss'
import adt from '@/page/Rooms/ui/adaptive.module.scss'
import { User } from '@/shared/icons'
import { title } from 'process'
import { RoomsElementAddService } from '@/features/RoomsElementAddService'

interface Props extends IClassName {
	roomsData: IRoomsCardAllData[]
	isFilter?: boolean
}
const Content: FC<Props> = ({ className, roomsData, isFilter }) => {
	const userSelectedGuests = useHomeFormData(state => state.guests)
	const filterGuests = isFilter ? userSelectedGuests : undefined
	const { isMdMedium } = useWindow()
	const cardsByProp = isFilter
		? roomsData.filter(({ maxGuests }) => {
				//@ts-ignore
				if (filterGuests > maxGuests) return false
				return true
		  })
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
										<li className={cn(cls.item)}>
											<div className={cn(cls.content)}>
												<div className={cn(cls.image)}>
													<img src={previewImg} alt={title} />
													<Typography
														weight='M'
														className={cn(cls.available)}
														tag='h2'
													>
														{availableRooms}
													</Typography>
													<div className={cn(cls.guests)}>
														<Typography weight='B'>{maxGuests}</Typography>
														<User color='var(--blue)' width={16} height={16} />
													</div>
												</div>
												<div className={cn(cls.info)}>
													<Typography weight='SB' tag='h2'>
														{title}
													</Typography>
													<Typography weight='R' tag='h3'>
														{previewDescription}
													</Typography>
													<div className={cn(cls.conditions)}>
														{conditions.map(({ description, title }) => (
															<Typography weight='M'>
																<strong>{title}: </strong>
																{description}
															</Typography>
														))}
													</div>
													{services.length > 2 && (
														<Button className={cn(cls.servicesBtn)}>
															<Typography weight='SB'>Все сервисы</Typography>
														</Button>
													)}
												</div>
												{services.length > 0 && (
													<div className={cn(cls.services)}>
														{services.slice(0, 2).map(service => (
															<RoomsElementAddService
																service={service}
																slug={slug}
															/>
														))}
													</div>
												)}
											</div>
											{services.length > 2 && (
												<div className={cn(cls.services)}>
													{services.slice(2).map(service => (
														<div className={cn(cls.service)}>
															<RoomsElementAddService
																service={service}
																slug={slug}
															/>
														</div>
													))}
												</div>
											)}
										</li>
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
