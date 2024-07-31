import { cn } from '@/shared/lib'
import { IChildren, IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import cls from './Head.module.scss'

interface Props extends IClassName, Partial<IChildren> {
	image: string
	alt?: string
}
const Head: FC<Props> = ({ className, alt, image, children }) => {
	return (
		<div className={cn(cls.head, [className])}>
			<img src={image} alt={alt || ''} />
			{children}
		</div>
	)
}

export default Head
