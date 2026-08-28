import AdvSplitText from './react-bits/AdvSplitText'

function asText(children) {
  if (typeof children === 'string') return children.replace(/\s+/g, ' ').trim()
  if (Array.isArray(children)) return children.map(asText).filter(Boolean).join(' ')
  return ''
}

export default function HighlightHeading({ children, as: Tag = 'h2', className = '' }) {
  const text = asText(children)

  return (
    <Tag className={`highlight-heading ${className}`}>
      <AdvSplitText text={text} />
    </Tag>
  )
}
