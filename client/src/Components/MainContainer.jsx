import React from 'react'
import MainMessageTable from './MessageBoard/MainMessageTable'

export default function MainContainer({user}) {



  return (
    <div>
        <MainMessageTable user={user} />
    </div>
  )
}
