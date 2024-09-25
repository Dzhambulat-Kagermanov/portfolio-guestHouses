import { getArticles } from '@/shared/api'
import { arrayChunks, cn } from '@/shared/lib'
import { IArticlesCardData, IClassName } from '@/shared/types'
import { ArticlesList } from '@/widgets/ArticlesList'
import { FC } from 'react'
import cls from './index.module.scss'
import adt from './adaptive.module.scss'

interface Props extends IClassName {}
const Articles: FC<Props> = async ({ className }) => {
	let data: IArticlesCardData[][] | []

	try {
		data = arrayChunks<IArticlesCardData>((await getArticles()).data, 2)
	} catch {
		data = []
	}

	return (
		<div className={cn(cls.articlesPage, [className])}>
			<ArticlesList
				data={data}
				className={cn(cls.articles, [adt.articles])}
				groupClass={cn(adt.group)}
				articleCardClass={cn(adt.article)}
				titleClass={cn(adt.title)}
			/>
		</div>
	)
}

export default Articles
