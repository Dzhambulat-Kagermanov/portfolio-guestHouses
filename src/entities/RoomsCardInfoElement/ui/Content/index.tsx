import { cn } from '@/shared/lib'
import { IRoomsCardInfoData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Paragraph, Typography } from '@/shared/ui'
import React, { FC } from 'react'
import cls from './index.module.scss'
import { title } from 'process'

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
					<React.Fragment key={index}>
						<Typography weight='M' tag='strong' className={cn(cls.itemTitle)}>
							{title}:{'\u00A0'}
						</Typography>
						{description}
					</React.Fragment>
				))}
			/>
		</div>
	)
}

export default Content
