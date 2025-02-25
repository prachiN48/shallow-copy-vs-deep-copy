import _ from "lodash";

export interface Store {
    id: number,
    name: string,
    books: Book[]
}

interface Book {
    id: number,
    title: string,
    author: string,
    firstPublished?: Date
}

export const destructuredCopyStore = (store: Store) : Store => {
    return {
        ...store,
        books: [...store.books]
    }
}

export const assignedCopyStore = (store: Store) : Store => {
    return Object.assign({}, store)
}

export const jsonParsedCloneStore = (store: Store) : Store => {
    return JSON.parse(JSON.stringify(store))
}

export const deepCloneStore = (store: Store) : Store => {
    return _.cloneDeep(store)
}

export const structuredCloneStore = (store: Store) : Store => {
    return structuredClone(store)
}

