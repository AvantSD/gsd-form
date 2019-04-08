export default function classSet (cssClasses, ...plainClasses) {
  const dynamicClasses = Object.keys(cssClasses)
    .filter(key => cssClasses[key])
    .join(' ')

  return `${dynamicClasses} ${plainClasses.join(' ')}`.trim()
}
