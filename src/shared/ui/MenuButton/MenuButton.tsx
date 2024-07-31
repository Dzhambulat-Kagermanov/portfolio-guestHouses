import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { ButtonHTMLAttributes, FC } from 'react'
import { Button } from '../Button/Button'
import cls from './MenuButton.module.scss'

interface Props extends IClassName, ButtonHTMLAttributes<HTMLButtonElement> {}
const MenuButton: FC<Props> = ({ className, ...other }) => {
	return (
		<Button className={cn(cls.menu, [className])} theme='clear' {...other}>
			<span></span>
			<span></span>
			<span></span>
		</Button>
	)
}

export { MenuButton }
