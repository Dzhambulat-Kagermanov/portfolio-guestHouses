'use client'
import { FC } from 'react'
import { IRoomsCardAllData } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Slider, Typography } from '@/shared/ui'
import { RoomsCard } from '@/widgets/RoomsCard'
import { useWindow } from '@/shared/hooks'
import cls from './index.module.scss'
import adt from 'page/Home/ui/adaptive.module.scss'

interface Props {
	roomsData: IRoomsCardAllData[] | []
	sliderClassName?: string
	groupClassName?: string
	groupItemClassName?: string
}
const Content: FC<Props> = ({
	sliderClassName,
	groupClassName,
	roomsData,
	groupItemClassName,
}) => {
	const contentItems = roomsData.length
		? roomsData.map(
				(
					{
						availableRooms,
						maxGuests,
						previewDescription,
						previewImg,
						services,
						slug,
						title,
					},
					index
				) => (
					<RoomsCard
						key={index}
						availableRooms={availableRooms}
						maxGuests={maxGuests}
						previewDescription={previewDescription}
						previewImg={previewImg}
						services={services}
						slug={slug}
						title={title}
						roomsElemClass={cn(cls.card)}
						roomsElemWrapperClass={cn(cls.cardWrapper)}
						roomsElementContentClass={adt.cardContent}
						roomsElementHeadClass={adt.cardHead}
						roomsElementServicesBtnClass={adt.cardServicesBtn}
						roomsElementServicesClass={adt.cardServices}
					/>
				)
		  )
		: []
	const { isMdMedium } = useWindow()

	return (
		<>
			{isMdMedium ? (
				<ul className={cn(cls.group, [groupClassName])}>
					{roomsData.length &&
						roomsData.map(({ previewImg, conditions, title }) => (
							<li className={cn(cls.item, [groupItemClassName])} key={title}>
								<img src={previewImg} alt='комната' />
								<div className={cn(cls.banner)}>
									<Typography weight='SB' tag='h2'>
										{title}
									</Typography>
									<ul className={cn(cls.conditions)}>
										{conditions.map(({ description, title }) => (
											<li className={cn(cls.item)} key={title}>
												<Typography weight='SB'>- {description}</Typography>
											</li>
										))}
									</ul>
								</div>
							</li>
						))}
				</ul>
			) : (
				<Slider
					initialSlide={1}
					loopAdditionalSlides={1}
					loop
					wrapperClass={cn(cls.sliderWrapper, [adt.sliderWrapper])}
					className={cn(cls.slider, [adt.slider, sliderClassName])}
					slideClass={cn(cls.slide, [adt.slide])}
					breakpoints={{
						769: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						601: {
							slidesPerView: 'auto',
							spaceBetween: 40,
						},
						0: {
							spaceBetween: 20,
						},
					}}
					items={[...contentItems, ...contentItems]}
				/>
			)}
		</>
	)
}

export default Content
