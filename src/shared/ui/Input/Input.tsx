import { cn } from '@/shared/lib/cn/cn'
import { IClassName } from '@/shared/types/shared'
import { FC, InputHTMLAttributes, ReactNode } from 'react'
import { Typography } from '../Typography/Typography'
import cls from './Input.module.scss'

interface Props extends IClassName, InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
	name: string
	inputClass?: string
	icon?: ReactNode
	iconPos?: 'left' | 'right'
}
const Input: FC<Props> = ({
	label,
	error,
	name,
	className,
	inputClass,
	icon,
	iconPos,
	...other
}) => {
	return (
		<label className={cn(cls.label, [className])}>
			<Typography weight='M' className={cn(cls.labelText)} tag='h2'>
				{label}
			</Typography>
			<div className={cn(cls.content)}>
				<input
					{...other}
					className={cn(cls.input, [inputClass])}
					name={name}
					style={{
						margin: iconPos && iconPos === 'left' ? '0 8px 0 0' : '0 0 0 8px',
						order: iconPos && iconPos === 'left' ? 2 : -1,
					}}
				/>
				<div className={cn(cls.icon)}>{icon}</div>
			</div>
			<Typography weight='M' className={cn(cls.error)} tag='h3'>
				{error}
			</Typography>
		</label>
	)
}

export { Input }
