import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { ButtonHTMLAttributes, FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName, ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: 'clear' | 'fill' | 'outlined'
	circle?: boolean
}
const Button: FC<Props> = ({
	className,
	children,
	theme,
	circle,
	...other
}) => {
	return (
		<button
			{...other}
			className={cn(cls.button, [cls[theme || 'fill'], className], {
				[cls.circle]: circle,
			})}
		>
			{children}
		</button>
	)
}

export { Button }
