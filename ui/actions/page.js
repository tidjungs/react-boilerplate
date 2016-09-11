import fetch from 'isomorphic-fetch'
import { PAGES_ENDPOINT } from '../constants/endpoints'

const receivePages = (pages) => ({
	type: 'RECEIVE_PAGES',
	pages
})

export const loadPage = () => {
	fetch(PAGES_ENDPOINT)
    .then((response) => response.json())
    .then((pages) => receivePages(pages))
}