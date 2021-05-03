import React, { ReactElement, useState } from "react"
import TabContent from "./TabContent"

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <>      
        {children.map((item, index) => (          
          <TabContent
            key={index}            
            src={item.props.src}
            href={item.props.href}
            index={index}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        ))}      
    </>
  )
}

export default Tabs