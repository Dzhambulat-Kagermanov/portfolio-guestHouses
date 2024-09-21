import { cn } from '@/shared/lib'
import { IArticlesCardData, IClassName } from '@/shared/types'
import { Container, Typography } from '@/shared/ui'
import { ArticleCard } from '@/widgets/ArticleCard'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	data: IArticlesCardData[][]
	containerClass?: string
	articleCardClass?: string
	contentClass?: string
	groupClass?: string
	titleClass?: string
}
const ArticlesList: FC<Props> = ({
	data,
	className,
	articleCardClass,
	contentClass,
	containerClass,
	groupClass,
	titleClass,
}) => {
	return (
		<Container
			innerClass={cn(cls.articles, [className])}
			containerClass={cn(cls.container, [containerClass])}
		>
			<Typography weight='SB' className={cn(cls.title, [titleClass])}>
				Статьи
			</Typography>
			<div className={cn(cls.content, [contentClass])}>
				{data.map(array => {
					return (
						<div className={cn(cls.group, [groupClass])}>
							{array.map(({ description, id, title }) => {
								return (
									<ArticleCard
										key={id}
										description={description}
										title={title}
										className={cn(cls.item, [articleCardClass])}
									/>
								)
							})}
						</div>
					)
				})}
			</div>
		</Container>
	)
}

export { ArticlesList }
