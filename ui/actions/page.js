export const loadPage = () => ({
	type: 'RECEIVE_PAGES',
	pages: [
	{
	  "id": 1,
	  "title": "test page#1",
	  "content": "TEST PAGE CONTENT"
	}, {
	  "id": 2,
	  "title": "test page#2",
	  "content": "TEST PAGE CONTENT"
	}
	]
})