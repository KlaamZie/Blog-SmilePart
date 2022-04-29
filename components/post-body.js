import parse from 'html-react-parser'
export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
        {parse(content)}
    </div>
  )
}
