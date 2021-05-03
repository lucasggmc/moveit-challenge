import React, { useCallback } from "react"
import Link from 'next/link';

type Props = {  
  src: string
  href: string
  index: number
  setSelectedTab: (index: number) => void
  selectedTab: number
}

const TabContent: React.FC<Props> = ({ src, href, setSelectedTab, selectedTab, index }) => {      

  const isActive = index === selectedTab;  

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <div>    
      <span className={isActive ? 'isActive' : ''}></span>

      {/* <a href={href} onClick={onClick}>
        <img src={src} />
      </a>     */}
      <Link href={`/${href}`}>
      <a onClick={onClick}>
        <img src={src}  className={isActive ? 'isActive' : ''}/>
      </a> 
      </Link>
      
    </div>
  )
}

export default TabContent