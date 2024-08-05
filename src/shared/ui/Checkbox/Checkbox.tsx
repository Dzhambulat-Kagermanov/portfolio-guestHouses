'use client'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import {
	FC,
	forwardRef,
	InputHTMLAttributes,
	ReactNode,
	useEffect,
	useState,
} from 'react'
import cls from './Checkbox.module.scss'

export interface ICheckboxProps
	extends IClassName,
		Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	label?: ReactNode
	getActive?: (active: boolean) => void
}
const Checkbox: FC<ICheckboxProps> = forwardRef(
	({ className, label, checked, getActive, onClick, ...other }, ref) => {
		const [isActive, setIsActive] = useState<boolean>(checked || false)
		useEffect(() => {
			getActive && getActive(isActive)
		}, [isActive])
		return (
			<div className={cn(cls.wrapper, [className])}>
				<input
					checked={checked}
					type='checkbox'
					{...other}
					//@ts-ignore
					ref={ref}
					className={cn(cls.checkbox)}
					onClick={event => {
						setIsActive(current => !current)
						onClick && onClick(event)
					}}
				/>
				{label && label}
			</div>
		)
	}
)

export default Checkbox
