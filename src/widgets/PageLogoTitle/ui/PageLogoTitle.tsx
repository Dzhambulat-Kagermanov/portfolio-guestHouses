import { cn } from '@/shared/lib'
import { IChildren, IClassName, ITag } from '@/shared/types/shared'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC, ReactNode } from 'react'
import cls from './PageLogoTitle.module.scss'

interface Props extends IClassName, ITag, Partial<IChildren> {
	text: ReactNode
	titleClass?: string
}
const PageLogoTitle: FC<Props> = ({
	className,
	tag = 'div',
	children,
	titleClass,
	text,
}) => {
	const Tag = tag
	return (
		<Tag className={cn(cls.wrapper, [className])}>
			<Typography weight='SB' className={cn(cls.title, [titleClass])}>
				{text}
			</Typography>
			{children}
		</Tag>
	)
}

export { PageLogoTitle }
