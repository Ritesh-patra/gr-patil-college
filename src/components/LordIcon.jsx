export default function LordIcon({
  src,
  trigger = 'hover',
  colors = 'primary:#1a2340,secondary:#c45c26',
  size = 32,
  target,
  stroke = 'bold',
}) {
  return (
    <lord-icon
      src={src}
      trigger={trigger}
      colors={colors}
      stroke={stroke}
      target={target}
      style={{ width: size, height: size }}
    />
  )
}
