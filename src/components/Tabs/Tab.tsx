import React from 'react'

type Props = {
  src: string;
  href: string;
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default Tab