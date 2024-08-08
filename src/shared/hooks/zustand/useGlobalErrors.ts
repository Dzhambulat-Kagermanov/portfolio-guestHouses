import { create } from 'zustand'

interface Props {
	error?: { text: string; code: number }
	setError: (text: string, code: number) => void
}

export const useGlobalErrors = create<Props>((set, get) => ({
	setError: (text, code) => set(state => ({ error: { code, text } })),
}))
