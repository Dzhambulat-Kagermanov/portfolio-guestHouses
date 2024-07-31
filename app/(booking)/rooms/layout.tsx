import { RoomsLayout } from '@/app/providers/layouts/Rooms'
import { IChildren } from '@/shared/types/shared'
import { FC } from 'react'

const layout: FC<IChildren> = ({ children }) => {
	return <RoomsLayout>{children}</RoomsLayout>
}

export default layout
