import {
    assignedCopyStore,
    deepCloneStore,
    destructuredCopyStore, jsonParsedCloneStore,
    Store,
    structuredCloneStore
} from "../Store";

describe('destructuredCopy', () => {
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
        const copyStore = destructuredCopyStore(originalStore)
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

describe('assignedCopy', () => {
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
        const copyStore = assignedCopyStore(originalStore)
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

describe('deepClone', () => {
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
        const copyStore = deepCloneStore(originalStore)
        copyStore.name = 'new book store'
        expect(copyStore.name).not.toBe(originalStore.name)
        copyStore.books.push({
            id: 2,
            title: 'book number 2',
            author: 'author 2'
        })
        expect(copyStore.books.length).not.toBe(originalStore.books.length)
    })
})

describe('structuredClone', () => {
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
        const copyStore = structuredCloneStore(originalStore)
        copyStore.name = 'new book store'
        expect(copyStore.name).not.toBe(originalStore.name)
        copyStore.books.push({
            id: 2,
            title: 'book number 2',
            author: 'author 2'
        })
        expect(copyStore.books.length).not.toBe(originalStore.books.length)
    })
})

describe('jsonParsedClone', () => {
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
        const copyStore = jsonParsedCloneStore(originalStore)
        copyStore.name = 'new book store'
        expect(copyStore.name).not.toBe(originalStore.name)
        copyStore.books.push({
            id: 2,
            title: 'book number 2',
            author: 'author 2'
        })
        expect(copyStore.books.length).not.toBe(originalStore.books.length)
    })
})
