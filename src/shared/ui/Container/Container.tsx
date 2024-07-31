import { cn } from '@/shared/lib/cn/cn'
import { IChildren, IClassName, ITag } from '@/shared/types/shared'
import { FC } from 'react'
import cls from './Container.module.scss'

interface Props extends IChildren, ITag {
	containerClass?: string
	innerClass?: string
}
const Container: FC<Props> = ({
	innerClass,
	containerClass,
	children,
	tag = 'div',
}) => {
	const Tag = tag

	return (
		<Tag className={cn(cls.container, [containerClass])}>
			<div className={cn(cls.inner, [innerClass])}>{children}</div>
		</Tag>
	)
}

export { Container }
