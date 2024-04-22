import React from 'react'
import { Icon } from 'semantic-ui-react'
export default function Icons({iconName,iconsize}) {

  return (
    <>
      <Icon name={iconName} size={iconsize} />
    </>
  )
}
