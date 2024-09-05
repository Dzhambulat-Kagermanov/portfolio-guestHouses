import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { ButtonHTMLAttributes, FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName, ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: 'clear' | 'fill' | 'outlined'
	circle?: boolean
	hover?: boolean
}
const Button: FC<Props> = ({
	className,
	children,
	theme,
	type,
	circle,
	hover = true,
	...other
}) => {
	return (
		<button
			{...other}
			type={type || 'button'}
			className={cn(cls.button, [cls[theme || 'fill'], className], {
				[cls.circle]: circle,
				[cls.hover]: hover,
			})}
		>
			{children}
		</button>
	)
}

export { Button }
