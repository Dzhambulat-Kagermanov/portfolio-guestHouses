import { getCards } from '@/shared/api'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container, Slider, Typography } from '@/shared/ui'
import { RoomsCard } from '@/widgets/RoomsCard'
import { FC } from 'react'
import cls from './index.module.scss'
import adt from 'page/Home/ui/adaptive.module.scss'

interface Props extends IClassName {}
const HomeRooms: FC<Props> = async ({ className }) => {
	const roomsData = await getCards()
	return (
		<Container
			containerClass={cn(cls.container, [adt.homeRoomsContainer])}
			innerClass={cn(cls.rooms, [className, adt.homeRooms])}
		>
			<Typography weight='SB' className={cn(cls.title, [adt.title])}>
				НАШИ НОМЕРА
			</Typography>
			<Slider
				loopAdditionalSlides={1}
				slidesPerView={'auto'}
				loop
				spaceBetween={20}
				items={roomsData.data.map(
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
				)}
				wrapperClass={cn(cls.sliderWrapper, [adt.sliderWrapper])}
				className={cn(cls.slider, [adt.slider])}
				slideClass={cn(cls.slide, [adt.slide])}
			/>
		</Container>
	)
}

export { HomeRooms }
