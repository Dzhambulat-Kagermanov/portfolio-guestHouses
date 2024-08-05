import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Container } from '@/shared/ui/Container/Container'
import { InfoGroup } from '@/shared/ui/InfoGroup/InfoGroup'
import { Slider } from '@/shared/ui/Slider/Slider'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC } from 'react'
import cls from './HomeRooms.module.scss'

interface Props extends IClassName {}
const HomeRooms: FC<Props> = ({ className }) => {
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
				items={[1, 2, 3, 4, 5, 6, 7]}
				wrapperClass={cn(cls.sliderWrapper)}
				className={cn(cls.slider)}
				slideClass={cn(cls.slide)}
			/>
		</Container>
	)
}

export { HomeRooms }
