import _ from "lodash";

export interface Store {
    id: number,
    name: string,
    books: Book[]
}

export interface Book {
    id: number,
    title: string,
    author: string
}

export const shallowCopyStore = (store: Store) : Store => {
    return {...store}
}

export const deepCloneStore = (store: Store) : Store => {
    return _.cloneDeep(store)
}
