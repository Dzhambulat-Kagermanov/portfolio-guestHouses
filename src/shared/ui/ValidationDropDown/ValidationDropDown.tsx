import { IChildren } from '@/shared/types/shared'
import { FC, forwardRef, ReactNode, useState } from 'react'
import { Dropdown, IDropDownProps } from '../Dropdown/Dropdown'

interface Props extends IDropDownProps {
	setValidationValue: (name: string, param: any) => void
	name: string
}
const ValidationDropDown: FC<Props> = forwardRef(
	({ setValidationValue, onSelect, name, ...other }, ref) => {
		const [activeElem, setActiveElem] = useState<ReactNode>('')
		setValidationValue(name, activeElem)

		return <Dropdown {...other} onSelect={active => setActiveElem(active)} />
	}
)

export { ValidationDropDown }
