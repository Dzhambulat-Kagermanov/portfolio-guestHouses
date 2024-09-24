import axios from 'axios'
import { IAboutGalleriesData } from '../../types/aboutGalleries'
import { baseURL } from '../urls'

export const getAboutGalleries = () =>
	axios.get<IAboutGalleriesData[]>('/aboutGalleries', { baseURL })
