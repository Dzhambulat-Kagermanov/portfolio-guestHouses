'use client'
import { Dropdown, IDropDownProps } from '@/shared/ui'
import { FC, forwardRef, ReactNode, useState } from 'react'

interface Props extends IDropDownProps {
	setValidationValue: (name: string, param: any) => void
	onChange: (event: { target: { name: string; value: ReactNode } }) => void
	name: string
	defaultActiveElem?: string
}
const ValidationDropDown: FC<Props> = forwardRef(
	(
		{
			setValidationValue,
			onSelect,
			name,
			defaultActiveElem,
			items,
			onChange,
			...other
		},
		ref
	) => {
		const [activeElem, setActiveElem] = useState<string>('')
		setValidationValue(name, activeElem)
		activeElem && onChange({ target: { name: name, value: activeElem } })

		return (
			<Dropdown
				{...other}
				defaultActiveItemIndex={items.findIndex(el => {
					return el == defaultActiveElem
				})}
				items={items}
				onSelect={active => setActiveElem(active)}
			/>
		)
	}
)

ValidationDropDown.displayName = 'ValidationDropDown'

export { ValidationDropDown }
