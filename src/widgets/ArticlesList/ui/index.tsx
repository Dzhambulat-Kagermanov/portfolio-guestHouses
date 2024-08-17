import { cn } from '@/shared/lib'
import { IArticlesCardData, IClassName } from '@/shared/types'
import { Container, Typography } from '@/shared/ui'
import { ArticleCard } from '@/widgets/ArticleCard'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	data: IArticlesCardData[][]
}
const ArticlesList: FC<Props> = ({ data, className }) => {
	return (
		<Container
			innerClass={cn(cls.articles, [className])}
			containerClass={cn(cls.container)}
		>
			<Typography weight='SB' className={cn(cls.title)}>
				Статьи
			</Typography>
			<div className={cn(cls.content)}>
				{data.map(array => {
					return (
						<div className={cn(cls.group)}>
							{array.map(({ description, id, title }) => {
								return (
									<ArticleCard
										key={id}
										description={description}
										title={title}
										className={cn(cls.item)}
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
