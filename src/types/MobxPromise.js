// @flow

export type MobxPromise<T> = {
  value: T,
  state: 'pending' | 'fulfilled' | 'rejected',
}
