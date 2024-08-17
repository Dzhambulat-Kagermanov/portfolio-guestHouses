import { cn } from '@/shared/lib'
import { IChildren, IClassName, ITag } from '@/shared/types'
import { FC } from 'react'
import cls from './index.module.scss'

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
