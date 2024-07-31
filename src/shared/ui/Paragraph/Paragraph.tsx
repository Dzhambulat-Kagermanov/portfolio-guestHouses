import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import { Typography } from '../Typography/Typography'
import cls from './Paragraph.module.scss'

interface Props extends IClassName {
	paragraphs: string[]
	paragraphsClass?: string
	rowGap?: number
}
const Paragraph: FC<Props> = ({
	paragraphs,
	paragraphsClass,
	className,
	rowGap,
}) => {
	return (
		<div className={cn(cls.text, [className])} style={{ rowGap: rowGap || 25 }}>
			{paragraphs.map((el, index) => (
				<Typography
					key={index}
					weight='M'
					className={cn(cls.paragraph, [paragraphsClass])}
				>
					{el}
				</Typography>
			))}
		</div>
	)
}

export { Paragraph }
