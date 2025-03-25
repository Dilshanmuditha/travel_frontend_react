export interface UserState {
  isAuthorized?: boolean,
  role:number | null,
  name:string | null,
  email:string | null,
}

export interface SelectDropDown {
  label: string
  value: number | string
}