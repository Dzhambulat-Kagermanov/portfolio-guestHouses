export const name: RegExp = /^[а-яА-Яa-zA-Z]{2,20}$/
export const mail: RegExp =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const date: RegExp = /[\d-]{10,10}/
export const phone: RegExp = /\d{11}/
