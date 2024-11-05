import React from 'react'
import { useParams } from '@remix-run/react'
function service() {
    const {id}=useParams()
  return (
    <div>service.{id} </div>
  )
}

export default service