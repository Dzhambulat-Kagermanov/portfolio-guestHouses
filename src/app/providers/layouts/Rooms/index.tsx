import { IChildren } from '@/shared/types'
import { ChangeData } from '@/widgets/ChangeData'
import { FC } from 'react'

const RoomsLayout: FC<IChildren> = ({ children }) => {
	return (
		<>
			<ChangeData />
			{children}
		</>
	)
}

export { RoomsLayout }
