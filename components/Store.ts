import _ from "lodash";

export interface Store {
    id: number,
    name: string,
    books: Book[]
}

interface Book {
    id: number,
    title: string,
    author: string
}

export const destructuredCopyStore = (store: Store) : Store => {
    return {...store}
}

export const assignedCopyStore = (store: Store) : Store => {
    return Object.assign({}, store)
}

export const deepCloneStore = (store: Store) : Store => {
    return _.cloneDeep(store)
}

export const structuredCloneStore = (store: Store) : Store => {
    return structuredClone(store)
}
