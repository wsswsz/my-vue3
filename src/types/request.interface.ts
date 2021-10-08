export interface ApiObj{
  [prop: string]: {
    url: string,
    method?: string,
    baseURL?: string
  }
}