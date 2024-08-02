import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Container } from '@/shared/ui/Container/Container'
import { InfoGroup } from '@/shared/ui/InfoGroup/InfoGroup'
import { Slider } from '@/shared/ui/Slider/Slider'
import { Typography } from '@/shared/ui/Typography/Typography'
import { RoomsCard } from '@/widgets/RoomsCard'
import { FC } from 'react'
import cls from './HomeRooms.module.scss'

interface Props extends IClassName {}
const HomeRooms: FC<Props> = ({ className }) => {
	const itemJSX = (
		<RoomsCard
			content={
				<div className={cn(cls.cardContent)}>
					<InfoGroup
						items={[
							<Typography weight='R' className={cn(cls.cardContentItem)}>
								Площадь номера: 11 м2
							</Typography>,
							<Typography weight='R' className={cn(cls.cardContentItem)}>
								1 двуспальная кровать или 2 односпальные кровати
							</Typography>,
							<Typography weight='R' className={cn(cls.cardContentItem)}>
								Кондиционер
							</Typography>,
							<Typography weight='R' className={cn(cls.cardContentItem)}>
								Интернет
							</Typography>,
							<Typography weight='R' className={cn(cls.cardContentItem)}>
								Телевизор
							</Typography>,
						]}
						title='2-х местный'
					/>
					<Button className={cn(cls.button)}>
						<Typography weight='M'>Подробнее</Typography>
					</Button>
				</div>
			}
			image='/images/Home/Rooms/item-1.png'
		/>
	)
	const Item = [itemJSX, itemJSX, itemJSX, itemJSX]
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
				items={Item}
				wrapperClass={cn(cls.sliderWrapper)}
				className={cn(cls.slider)}
				slideClass={cn(cls.slide)}
			/>
		</Container>
	)
}

export { HomeRooms }
