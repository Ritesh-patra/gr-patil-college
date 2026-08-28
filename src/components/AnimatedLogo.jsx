import { LOGO_PNG } from '../icons'
import './AnimatedLogo.css'

export default function AnimatedLogo({
  size = 46,
  height,
  light = false,
  className = '',
}) {
  const h = height || size

  return (
    <span
      className={`animated-logo ${light ? 'is-light' : ''} ${className}`}
      style={{ width: size, height: h }}
    >
      <img src={LOGO_PNG} alt="G. R. Patil College" />
    </span>
  )
}
