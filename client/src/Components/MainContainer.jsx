import React from 'react'
import MainMessageTable from './MessageBoard/MainMessageTable'

export default function MainContainer(user, setUser) {
  return (
    <div>MainContainer:
        <MainMessageTable user={user} setUser={setUser}/>
    </div>
  )
}
