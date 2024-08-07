import { FC, forwardRef, ReactNode, useState } from 'react'
import Checkbox, { ICheckboxProps } from '../Checkbox/Checkbox'

interface Props extends ICheckboxProps {
	setValidationValue: (name: string, param: any) => void
	onChange: (event: { target: { name: string; value: ReactNode } }) => void
	name: string
}
const ValidationCheckbox: FC<Props> = forwardRef(
	({ setValidationValue, name, onChange, defaultChecked, ...other }, ref) => {
		const [activeElem, setActiveElem] = useState<boolean>()

		setValidationValue(name, activeElem)
		activeElem !== null &&
			onChange({ target: { name: name, value: activeElem } })

		return (
			<Checkbox
				{...other}
				defaultChecked={defaultChecked}
				getActive={active => setActiveElem(active)}
				//@ts-ignore
				ref={ref}
			/>
		)
	}
)

export { ValidationCheckbox }
