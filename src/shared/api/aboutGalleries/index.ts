import axios from 'axios'
import { IAboutGalleriesData } from '../../types/aboutGalleries'
import { baseApiURL } from '../urls'

export const getAboutGalleries = () =>
	axios.get<IAboutGalleriesData[]>('/aboutGalleries', { baseURL: baseApiURL })
