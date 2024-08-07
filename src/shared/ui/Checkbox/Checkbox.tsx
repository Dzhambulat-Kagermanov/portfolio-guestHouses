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
	({ className, label, defaultChecked, getActive, onClick, ...other }, ref) => {
		const [isActive, setIsActive] = useState<boolean>(defaultChecked || false)
		useEffect(() => {
			getActive && getActive(isActive)
		}, [isActive])
		return (
			<label className={cn(cls.wrapper, [className])}>
				<input
					defaultChecked={defaultChecked}
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
			</label>
		)
	}
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
