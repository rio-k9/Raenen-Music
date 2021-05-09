export interface ITrackStore {
  input: string,
  userInput: Function,
  hydrate: Function
}

export interface IUiStore {
  input: string,
  userInput: Function,
  hydrate: Function
}

export interface IRootStore {
  uiStore: IUiStore,
  trackStore: ITrackStore,
  hydrate: Function
}