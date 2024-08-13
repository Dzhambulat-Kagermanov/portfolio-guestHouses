import { getArticles } from '@/shared/api'
import { cn } from '@/shared/lib'
import { arrayChunks } from '@/shared/lib/arrayChunks'
import { IArticlesCardData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { ArticlesList } from '@/widgets/ArticlesList'
import { FC } from 'react'
import cls from './Articles.module.scss'

interface Props extends IClassName {}
const Articles: FC<Props> = async ({ className }) => {
	const data = arrayChunks<IArticlesCardData>((await getArticles()).data, 2)

	return (
		<div className={cn(cls.articlesPage, [className])}>
			<ArticlesList data={data} className={cn(cls.articles)} />
		</div>
	)
}

export default Articles
