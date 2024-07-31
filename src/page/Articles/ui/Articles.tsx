import { FC } from 'react'
import cls from './Articles.module.scss'
import { IClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib'

interface Props extends IClassName {}
const Articles: FC<Props> = ({ className }) => {
	return <div className={cn(cls.articles, [className])}>Articles</div>
}

export default Articles
