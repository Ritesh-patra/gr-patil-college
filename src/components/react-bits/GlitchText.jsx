import './GlitchText.css'

export default function GlitchText({
  children,
  speed = 0.85,
  enableShadows = true,
  enableOnHover = false,
  className = '',
}) {
  const text = typeof children === 'string' ? children : ''
  return (
    <span
      className={`glitch ${enableOnHover ? 'enable-on-hover' : ''} ${className}`}
      data-text={text}
      style={{
        '--after-duration': `${speed * 3}s`,
        '--before-duration': `${speed * 2}s`,
        '--after-shadow': enableShadows ? '-4px 0 #9b3dbe' : 'none',
        '--before-shadow': enableShadows ? '4px 0 #6d2d91' : 'none',
      }}
    >
      {children}
    </span>
  )
}
