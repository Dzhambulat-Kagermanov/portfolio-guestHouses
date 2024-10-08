'use client'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Typography } from '@/shared/ui'
import { FC, forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName, InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: any
	inputClass?: string
	contentClass?: string
	icon?: ReactNode
	iconPos?: 'left' | 'right'
	currentValue?: (inputValue: ReactNode) => void
}
const Input: FC<Props> = forwardRef(
	(
		{
			label,
			error,
			className,
			inputClass,
			icon,
			iconPos,
			contentClass,
			onChange,
			currentValue,
			onFocus,
			onBlur,
			...other
		},
		ref
	) => {
		return (
			<label className={cn(cls.label, [className])}>
				{label && (
					<Typography weight='M' className={cn(cls.labelText)} tag='h2'>
						{label}
					</Typography>
				)}
				<div className={cn(cls.content, [contentClass])}>
					<input
						// @ts-ignore
						ref={ref}
						{...other}
						className={cn(cls.input, [inputClass])}
						onChange={event => {
							const value = event.target.value
							currentValue && currentValue(value)
							onChange && onChange(event)
						}}
						style={{
							margin: iconPos && iconPos === 'left' ? '0 8px 0 0' : '0 0 0 8px',
							order: iconPos && iconPos === 'left' ? 2 : -1,
						}}
					/>
					<div className={cn(cls.icon)}>{icon}</div>
				</div>
				{error && (
					<Typography weight='M' className={cn(cls.error)} tag='h3'>
						{error}
					</Typography>
				)}
			</label>
		)
	}
)

Input.displayName = 'Input'

export { Input }
