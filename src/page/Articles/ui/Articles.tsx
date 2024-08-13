'use client'
import { getArticles } from '@/shared/api'
import { cn } from '@/shared/lib'
import { arrayChunks } from '@/shared/lib/arrayChunks'
import { IArticlesCardData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { ArticleCard } from '@/widgets/ArticleCard'
import { FC } from 'react'
import cls from './Articles.module.scss'

interface Props extends IClassName {}
const Articles: FC<Props> = async ({ className }) => {
	const data = arrayChunks<IArticlesCardData>((await getArticles()).data, 2)

	return (
		<div className={cn(cls.articles, [className])}>
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
	)
}

export default Articles
