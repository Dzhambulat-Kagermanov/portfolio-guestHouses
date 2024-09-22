import { cn } from '@/shared/lib'
import { IRoomsCardInfoData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Paragraph, Typography } from '@/shared/ui'
import React, { FC } from 'react'
import cls from './index.module.scss'

interface Props extends Pick<IRoomsCardInfoData, 'conditions' | 'description'> {
	classNames?: {
		main?: string
		descriptionParagraph?: string
		description?: string
		conditionsParagraph?: string
		conditions?: string
	}
}
const Content: FC<Props> = ({ conditions, description, classNames }) => {
	return (
		<div className={cn(cls.content, [classNames?.main])}>
			<Paragraph
				className={cn(classNames?.descriptionParagraph || '')}
				paragraphs={description}
				paragraphsClass={cn(cls.descriptionText, [classNames?.description])}
				rowGap={15}
			/>

			<Paragraph
				className={cn(classNames?.conditionsParagraph || '')}
				paragraphsClass={cn(cls.conditionsText, [classNames?.conditions])}
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
