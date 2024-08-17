import { getArticles } from '@/shared/api'
import { arrayChunks, cn } from '@/shared/lib'
import { IArticlesCardData, IClassName } from '@/shared/types'
import { ArticlesList } from '@/widgets/ArticlesList'
import { FC } from 'react'
import cls from './index.module.scss'

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
