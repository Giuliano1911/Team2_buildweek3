import Profile from './Profile'

export default interface Post {
  _id: string
  text: string
  username: string
  user: Profile
  createdAt: Date
  updatedAt: Date
  __v: number
}
