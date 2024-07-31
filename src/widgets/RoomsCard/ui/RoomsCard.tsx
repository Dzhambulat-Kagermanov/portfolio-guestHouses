import { FC, ReactNode } from 'react'
import cls from './RoomsCard.module.scss'
import { IClassName, ITag } from '@/shared/types/shared'
import { cn } from '@/shared/lib'
import Head from './Head/Head'
import Content from './Content/Content'

interface Props extends IClassName, ITag {
	image: string
	content: ReactNode
	headContent?: ReactNode
	headClass?: string
	contentClass?: string
}
const RoomsCard: FC<Props> = ({
	className,
	tag = 'div',
	image,
	content,
	headContent,
	headClass,
	contentClass,
}) => {
	const Tag = tag
	return (
		<Tag className={cn(cls.card, [className])}>
			<Head className={cn(cls.head, [headClass])} image={image}>
				{headContent}
			</Head>
			<Content className={cn(cls.content, [contentClass])}>{content}</Content>
		</Tag>
	)
}

export { RoomsCard }
