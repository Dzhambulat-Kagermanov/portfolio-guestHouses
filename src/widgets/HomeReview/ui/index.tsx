import { User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container, Slider, Typography } from '@/shared/ui'
import { ReviewCard } from '@/widgets/ReviewCard'
import { FC } from 'react'
import cls from './index.module.scss'
import adt from 'page/Home/ui/adaptive.module.scss'
import { getReviews } from '@/shared/api'

interface Props extends IClassName {}
const HomeReview: FC<Props> = async ({ className }) => {
	const reviews = (await getReviews()).data

	return (
		<Container
			containerClass={cn(cls.container, [adt.homeReviewContainer])}
			innerClass={cn(cls.review, [className, adt.homeReview])}
		>
			<Typography weight='SB' tag='h2' className={cn(cls.title, [adt.title])}>
				ОТЗЫВЫ О НАС
			</Typography>
			<Slider
				loopAdditionalSlides={1}
				slidesPerView={'auto'}
				loop
				spaceBetween={20}
				items={reviews.map(({ author, id, text }) => (
					<ReviewCard
						key={id}
						author={author}
						text={text}
						arrowDirection='bottom'
						className={cn(cls.reviewCard, [adt.card])}
					/>
				))}
				className={cn(cls.slider, [adt.slider])}
				slideClass={cn(cls.slide, [adt.slide])}
				wrapperClass={cn(cls.sliderWrapper, [adt.sliderWrapper])}
			/>
			<div className={cn(cls.userBlock, [adt.userBlock])}>
				<User color='white' />
			</div>
		</Container>
	)
}

export { HomeReview }
