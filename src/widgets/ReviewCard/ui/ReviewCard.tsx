import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC } from 'react'
import cls from './ReviewCard.module.scss'

interface Props extends IClassName {
	review: string
	author: string
	arrowDirection?: 'top' | 'right' | 'bottom' | 'left'
	color?: string
	arrowWidth?: number
	arrowHeight?: number
}
const ReviewCard: FC<Props> = ({
	author,
	arrowDirection = 'bottom',
	review,
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
			<Typography weight='M' className={cn(cls.review)}>
				{review}
			</Typography>
			<Typography weight='SB' className={cn(cls.author)}>
				{author}
			</Typography>
		</div>
	)
}

export { ReviewCard }
