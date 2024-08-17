import { cn } from '@/shared/lib'
import { IClassName, ITag } from '@/shared/types'
import { Typography } from '@/shared/ui'
import { FC, ReactNode } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName, ITag {
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
	tag = 'div',
	rowGap,
	titleClass,
	title,
}) => {
	const Tag = tag
	return (
		<Tag className={cn(cls.text, [className])}>
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
					'--paragraphs-rowGap':
						rowGap || rowGap === 0 ? `${rowGap}px` : '25px',
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
		</Tag>
	)
}

export { Paragraph }
