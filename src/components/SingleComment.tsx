import Post from '../types/Post'

interface SingleCommentProps {
  p: Post
  setIsComment: React.Dispatch<React.SetStateAction<boolean>>
}

const SingleComment = ({ p, setIsComment }: SingleCommentProps) => {
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
export default SingleComment
