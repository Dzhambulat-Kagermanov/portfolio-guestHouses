'use client'
import { cn } from '@/shared/lib/cn/cn'
import { IClassName } from '@/shared/types/shared'
import { FC, forwardRef, ReactNode, TextareaHTMLAttributes } from 'react'
import { Typography } from '../Typography/Typography'
import cls from './Textarea.module.scss'

interface Props
	extends IClassName,
		TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string
	error?: any
	name: string
	textAreaClass?: string
	contentClass?: string
	currentValue?: (textarea: ReactNode) => void
}
const Textarea: FC<Props> = forwardRef(
	(
		{
			label,
			error,
			name,
			className,
			textAreaClass,
			currentValue,
			onChange,
			contentClass,
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
					<textarea
						//@ts-ignore
						ref={ref}
						className={cn(cls.textArea, [textAreaClass])}
						name={name}
						onChange={event => {
							const value = event.target.value
							currentValue && currentValue(value)
							onChange && onChange(event)
						}}
						{...other}
					/>
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

export { Textarea }
