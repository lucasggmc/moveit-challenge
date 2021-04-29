import React, { useCallback } from "react"

type Props = {  
  src: string
  index: number
  setSelectedTab: (index: number) => void
  selectedTab: number
}

const TabContent: React.FC<Props> = ({ src, setSelectedTab, selectedTab, index }) => {      

  const isActive = index === selectedTab;  

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <div>    
      <span className={isActive ? 'isActive' : ''}></span>

      <a href="#" onClick={onClick}>
        <img src={src} />
      </a>    
    </div>
  )
}

export default TabContent