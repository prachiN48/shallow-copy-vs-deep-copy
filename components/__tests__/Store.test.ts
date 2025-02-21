import {shallowCopyStore, Store} from "../Store";

describe('shallowCopy', () => {
    it('should create a copy of the store object', () => {
        const originalStore: Store = {
            id: 1,
            name: 'old book store',
            books: [
                {
                    id: 1,
                    title: 'book number one',
                    author: 'author 1'
                }
            ]
        }
        const copyStore = shallowCopyStore(originalStore)
        copyStore.name = 'new book store'
        expect(copyStore.name).not.toBe(originalStore.name)
        copyStore.books.push({
            id: 2,
            title: 'book number 2',
            author: 'author 2'
        })
        // expect(copyStore.books.length).not.toBe(originalStore.books.length)
    })
})