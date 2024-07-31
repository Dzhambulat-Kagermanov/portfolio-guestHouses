import { FC } from 'react'
import cls from './Content.module.scss'
import { IChildren, IClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib'

interface Props extends IClassName, IChildren {}
const Content: FC<Props> = ({ className, children }) => {
	return <div className={cn(cls.content, [className])}>{children}</div>
}

export default Content
