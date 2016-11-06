export * from './user.model'

export interface IHTTPResult {
  ok: boolean,
  err?: any,
  rows?: any,
  user?: any
}