type DefaultUser = {
  login: string
  email: string
  status: string
  role: string
  password: string
  name: string
  phone: string
  cash: number
  description: string
  birthDay: string
  inWorkStatus: boolean
  createdAt: string
  avatar: string
  country: string
  city: string
  feedbacksLength: number
  rate: number
  orders: Array<any>
  deals: Array<any>
  requests: Array<any>
  online?: boolean
  premiumStatus?: '1' | '2' | '3'
  cashHistory?: Array<any>
  blocked?: boolean
}
