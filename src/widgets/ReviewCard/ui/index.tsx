import { cn } from '@/shared/lib'
import { IClassName, IReviewsData } from '@/shared/types'
import { Typography } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName, Omit<IReviewsData, 'id'> {
	arrowDirection?: 'top' | 'right' | 'bottom' | 'left'
	color?: string
	arrowWidth?: number
	arrowHeight?: number
}
const ReviewCard: FC<Props> = ({
	author,
	arrowDirection = 'bottom',
	text,
	className,
	arrowHeight = 10,
	arrowWidth = 25,
	color = 'var(--blue)',
}) => {
	return (
		<div
			className={cn(cls.card, [cls[arrowDirection], className])}
			style={{
				// @ts-ignore
				'--main-color': color,
				'--border-width': `${arrowWidth}px`,
				'--border-height': `${arrowHeight}px`,
			}}
		>
			<Typography weight='M' tag='h2' className={cn(cls.review)}>
				{text}
			</Typography>
			<Typography weight='SB' tag='h3' className={cn(cls.author)}>
				{author}
			</Typography>
		</div>
	)
}

export { ReviewCard }
