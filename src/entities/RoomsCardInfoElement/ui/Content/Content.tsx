import { cn } from '@/shared/lib'
import { IRoomsCardInfoData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC } from 'react'
import cls from './Content.module.scss'

interface Props
	extends IClassName,
		Partial<Pick<IRoomsCardInfoData, 'conditions' | 'description'>> {}
const Content: FC<Props> = ({ conditions, description, className }) => {
	return (
		<div className={cn(cls.content, [className])}>
			{description ? (
				<Paragraph
					paragraphs={description}
					paragraphsClass={cn(cls.descriptionText)}
					rowGap={15}
				/>
			) : (
				'Данные отсутствуют'
			)}
			{conditions && (
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
								{title}
							</Typography>
							{description}
						</>
					))}
				/>
			)}
		</div>
	)
}

export default Content
