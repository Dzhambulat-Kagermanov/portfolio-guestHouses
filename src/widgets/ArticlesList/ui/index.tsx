import { cn } from '@/shared/lib'
import { IArticlesCardData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { Typography } from '@/shared/ui/Typography/Typography'
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
