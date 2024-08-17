import { getCards } from '@/shared/api'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container, Slider, Typography } from '@/shared/ui'
import { RoomsCard } from '@/widgets/RoomsCard'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const HomeRooms: FC<Props> = async ({ className }) => {
	const roomsData = await getCards()
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.rooms, [className])}
		>
			<Typography weight='SB' className={cn(cls.title)}>
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
							className={cn(cls.roomCard)}
						/>
					)
				)}
				wrapperClass={cn(cls.sliderWrapper)}
				className={cn(cls.slider)}
				slideClass={cn(cls.slide)}
			/>
		</Container>
	)
}

export { HomeRooms }
