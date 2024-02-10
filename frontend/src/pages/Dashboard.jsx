import React from 'react'
import Appbar from '../Components/Appbar'
import Balance from '../Components/Balance'
import Users from '../Components/Users'

function Dashboard() {
  return (
    <div>
      <Appbar/>
      <div className='m-8'>
        <Balance balance={"10,000"}/>
        <Users/>
      </div>
    </div>
  )
}

export default Dashboard
