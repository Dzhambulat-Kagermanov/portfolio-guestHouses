import { User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container, Slider, Typography } from '@/shared/ui'
import { ReviewCard } from '@/widgets/ReviewCard'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const HomeReview: FC<Props> = ({ className }) => {
	const items = [
		<ReviewCard
			key={1}
			author='Json'
			review='jwidjiwdjwdjiwjcom,w kdoqwkqd kqw'
			arrowDirection='bottom'
		/>,
		<ReviewCard
			key={2}
			author='Json'
			review='jwidjiwdjwdjiwjcom,w kdoqwkqd kqw'
			arrowDirection='bottom'
		/>,
		<ReviewCard
			key={3}
			author='Json'
			review='jwidjiwdjwdjiwjcom,w kdoqwkqd kqw'
			arrowDirection='bottom'
		/>,
		<ReviewCard
			key={4}
			author='Json'
			review='jwidjiwdjwdjiwjcom,w kdoqwkqd kqw'
			arrowDirection='bottom'
		/>,
	]

	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.review, [className])}
		>
			<Typography weight='SB' className={cn(cls.title)}>
				ОТЗЫВЫ О НАС
			</Typography>
			<Slider
				loopAdditionalSlides={1}
				slidesPerView={'auto'}
				loop
				spaceBetween={20}
				items={items}
				className={cn(cls.slider)}
				slideClass={cn(cls.slide)}
				wrapperClass={cn(cls.sliderWrapper)}
			/>
			<div className={cn(cls.userBlock)}>
				<User color='white' />
			</div>
		</Container>
	)
}

export { HomeReview }
