import { cn } from '@/shared/lib'
import { IRoomsCardInfoData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Paragraph, Typography } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props
	extends IClassName,
		Pick<IRoomsCardInfoData, 'conditions' | 'description'> {}
const Content: FC<Props> = ({ conditions, description, className }) => {
	return (
		<div className={cn(cls.content, [className])}>
			<Paragraph
				paragraphs={description}
				paragraphsClass={cn(cls.descriptionText)}
				rowGap={15}
			/>

			<Paragraph
				paragraphsClass={cn(cls.conditionsText)}
				rowGap={15}
				paragraphs={conditions.map(({ description, title }, index) => (
					<>
						<Typography
							key={index}
							weight='M'
							tag='strong'
							className={cn(cls.itemTitle)}
						>
							{title}:{'\u00A0'}
						</Typography>
						{description}
					</>
				))}
			/>
		</div>
	)
}

export default Content
