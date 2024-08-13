import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	title: string
	description: string
}
const ArticleCard: FC<Props> = ({ className, description, title }) => {
	return (
		<Paragraph
			paragraphs={[description]}
			title={title}
			className={cn(cls.card, [className])}
			titleClass={cn(cls.title)}
			paragraphsClass={cn(cls.description)}
		/>
	)
}

export { ArticleCard }
