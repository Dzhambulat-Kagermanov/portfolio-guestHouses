import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC, ReactNode } from 'react'
import { Typography } from '../Typography/Typography'
import cls from './Paragraph.module.scss'

interface Props extends IClassName {
	paragraphs: ReactNode[]
	paragraphsClass?: string
	rowGap?: number
	title?: string
	titleClass?: string
}
const Paragraph: FC<Props> = ({
	paragraphs,
	paragraphsClass,
	className,
	rowGap,
	titleClass,
	title,
}) => {
	return (
		<div className={cn(cls.text, [className])}>
			{title && (
				<Typography
					tag='h2'
					weight='SB'
					className={cn(cls.title, [titleClass])}
				>
					{title}
				</Typography>
			)}
			<ul
				className={cn(cls.group)}
				style={{
					//@ts-ignore
					'--paragraphs-rowGap': rowGap ? `${rowGap}px` : '25px',
				}}
			>
				{paragraphs.map((el, index) => (
					<li className={cn(cls.item)} key={index}>
						<Typography
							weight='M'
							className={cn(cls.paragraph, [paragraphsClass])}
						>
							{el}
						</Typography>
					</li>
				))}
			</ul>
		</div>
	)
}

export { Paragraph }
