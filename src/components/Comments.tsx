import Post from '../types/Post'

interface CommentsProps {
  p: Post
  setIsComment: React.Dispatch<React.SetStateAction<boolean>>
}

const Comments = ({ p, setIsComment }: CommentsProps) => {
  return (
    <a
      role="button"
      onClick={() => {
        setIsComment(false)
      }}
    >
      <i className="fas fa-times text-black"></i>
    </a>
  )
}
export default Comments
