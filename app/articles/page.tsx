import { ArticlesPage } from '@/page/Articles'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Статьи',
}
const Articles: FC = ({}) => {
	return <ArticlesPage />
}

export default Articles
