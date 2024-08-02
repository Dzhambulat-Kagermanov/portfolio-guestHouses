'use client'
import { TriangleArrow } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC, ReactNode, useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'
import cls from './Dropdown.module.scss'

interface Props extends IClassName {
	items: ReactNode[]
	defaultActiveItemIndex?: number
	placeholder?: ReactNode
	onSelect?: (activeItem: ReactNode) => void
	icon: { visible: boolean; customIcon?: ReactNode }
	visibleActiveItemInContentVariant?: 'note-visible-active' | 'visible-active'
	expandVariant?: 'overlay' | 'inline'
	colorDefaultIcon?: string
	borderColor?: string
	onSelectVariant?: 'expand' | 'no-expand'
	label?: string
	error?: string
	errorClass?: string
	labelClass?: string
}
const Dropdown: FC<Props> = ({
	items,
	className,
	defaultActiveItemIndex,
	onSelect,
	placeholder,
	icon: { visible, customIcon },
	visibleActiveItemInContentVariant = 'note-visible-active',
	expandVariant = 'overlay',
	colorDefaultIcon,
	borderColor,
	onSelectVariant = 'expand',
	error,
	errorClass,
	label,
	labelClass,
}) => {
	const defaultItemIndexIsValid: boolean = !!(
		defaultActiveItemIndex ||
		(defaultActiveItemIndex === 0 && items[defaultActiveItemIndex])
	)

	const [activeItemIndex, setActiveItemIndex] = useState<number | undefined>(
		defaultItemIndexIsValid ? defaultActiveItemIndex : undefined
	)
	const [isExpand, setIsExpand] = useState<boolean>(true)

	useEffect(() => {
		onSelect &&
			onSelect(
				activeItemIndex || activeItemIndex === 0 ? items[activeItemIndex] : ''
			)
	}, [activeItemIndex])

	return (
		<div className={cn(cls.wrapper)}>
			{label && (
				<Typography weight='M' className={cn(cls.label, [labelClass])} tag='h2'>
					{label}
				</Typography>
			)}
			<div
				className={cn(cls.dropdown, [className])}
				//@ts-ignore
				style={{ '--borderColor': borderColor || 'black' }}
			>
				<Button
					type='button'
					theme='outlined'
					className={cn(cls.activeItem, [], { [cls.expand]: isExpand })}
					onClick={() => {
						setIsExpand(current => !current)
					}}
				>
					{activeItemIndex || activeItemIndex === 0
						? items[activeItemIndex]
						: placeholder || 'Выберите элемент'}
					{(visible && customIcon) || (
						<TriangleArrow
							className={cn(cls.expandIcon)}
							color={colorDefaultIcon}
						/>
					)}
				</Button>
				<ul
					className={cn(cls.group, [cls[expandVariant]], {
						[cls.expand]: isExpand,
					})}
				>
					{(activeItemIndex ||
					(activeItemIndex === 0 &&
						visibleActiveItemInContentVariant === 'note-visible-active')
						? items.filter((el, index) => index !== activeItemIndex)
						: items
					).map((item, index) => {
						return (
							<li
								className={cn(cls.items)}
								key={index}
								onClick={() => {
									onSelectVariant === 'expand' && setIsExpand(false)

									setActiveItemIndex(current => {
										if (
											current ||
											(current === 0 &&
												visibleActiveItemInContentVariant ===
													'note-visible-active')
										) {
											return current <= index ? index + 1 : index
										}
										return index
									})
								}}
							>
								{item}
							</li>
						)
					})}
				</ul>
			</div>
			{error && (
				<Typography weight='M' className={cn(cls.error, [errorClass])} tag='h3'>
					{error}
				</Typography>
			)}
		</div>
	)
}

export { Dropdown }
