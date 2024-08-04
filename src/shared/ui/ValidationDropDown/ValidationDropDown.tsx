import { FC, forwardRef, ReactNode, useState } from 'react'
import { Dropdown, IDropDownProps } from '../Dropdown/Dropdown'

interface Props extends IDropDownProps {
	setValidationValue: (name: string, param: any) => void
	onChange: (event: { target: { name: string; value: ReactNode } }) => void
	name: string
}
const ValidationDropDown: FC<Props> = forwardRef(
	({ setValidationValue, onSelect, name, onChange, ...other }, ref) => {
		const [activeElem, setActiveElem] = useState<ReactNode>('')
		setValidationValue(name, activeElem)
		onChange({ target: { name: name, value: activeElem } })

		return <Dropdown {...other} onSelect={active => setActiveElem(active)} />
	}
)

export { ValidationDropDown }
