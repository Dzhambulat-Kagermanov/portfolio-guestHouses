import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Paragraph } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	title: string
	description: string
}
const ArticleCard: FC<Props> = ({ className, description, title }) => {
	return (
		<Paragraph
			paragraphs={[`\t${description}`]}
			title={title}
			className={cn(cls.card, [className])}
			titleClass={cn(cls.title)}
			paragraphsClass={cn(cls.description)}
		/>
	)
}

export { ArticleCard }
