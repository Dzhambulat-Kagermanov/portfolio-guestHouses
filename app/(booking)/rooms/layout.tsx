import { RoomsLayout } from '@/app/providers/layouts'
import { IChildren } from '@/shared/types'
import { FC } from 'react'

const layout: FC<IChildren> = ({ children }) => {
	return <RoomsLayout>{children}</RoomsLayout>
}

export default layout
