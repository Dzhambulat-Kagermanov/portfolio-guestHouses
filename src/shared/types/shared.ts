import { ReactNode } from 'react'

export interface IClassName {
	className?: string
}
export interface IChildren {
	children: ReactNode
}
export interface ITag {
	tag?: keyof JSX.IntrinsicElements
}
