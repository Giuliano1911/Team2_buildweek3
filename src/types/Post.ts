import Profile from './Profile'

export default interface Post {
  _id: string
  text: string
  username: string
  user: Profile
  createdAt: string
  updatedAt: string
  __v: number
  image: string
}
