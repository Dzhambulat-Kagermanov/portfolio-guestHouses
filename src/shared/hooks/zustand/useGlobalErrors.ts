import { create } from 'zustand'

export type TError = { text: string; code?: number }
interface Props {
	error?: TError
	setError: (text: string, code?: number) => void
}

export const useGlobalErrors = create<Props>((set, get) => ({
	setError: (text, code) => set(state => ({ error: { code, text } })),
}))
