import ShinyText from './react-bits/ShinyText'
import { school } from '../school'

export default function BrandLockup({ light = false }) {
  return (
    <span className={`brand-copy ${light ? 'is-light' : ''}`}>
      <strong>
        <ShinyText
          text={school.lockup}
          speed={2.6}
          color={light ? '#fdeeee' : '#3a0d14'}
          shineColor={light ? '#f0c419' : '#6d2d91'}
        />
      </strong>
      <small className="brand-plain">{school.motto}</small>
    </span>
  )
}
