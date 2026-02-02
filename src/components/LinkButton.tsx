import React from 'react'

type Props = {
  href: string
  label?: string
  children?: React.ReactNode
}

export default function LinkButton({ href, label, children }: Props) {
  return (
    <a className="link-btn" href={href} target="_blank" rel="noopener noreferrer">
      {children ? <span className="icon">{children}</span> : null}
      {label ? <span className="label">{label}</span> : null}
    </a>
  )
}
