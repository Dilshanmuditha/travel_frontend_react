export interface UserState {
  isAuthorized?: boolean,
  id?: number | null,
  role:number | null,
  name:string | null,
  email:string | null,
}

export interface SelectDropDown {
  label: string
  value: number | string
}