import { cn } from '@/shared/lib/cn/cn'
import { IChildren, IClassName, ITag } from '@/shared/types/shared'
import { FC } from 'react'
import cls from './Typography.module.scss'

interface Props extends IClassName, IChildren, ITag {
	weight: 'R' | 'M' | 'SB' | 'B' | 'EB'
}
const Typography: FC<Props> = ({ className, children, weight, tag = 'p' }) => {
	const Tag = tag
	return (
		<Tag className={cn(cls.text, [cls[weight], className])}>{children}</Tag>
	)
}

export { Typography }
