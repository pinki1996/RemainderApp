import React from 'react'
import { useSelector } from 'react-redux'

function Another() {
    const output = useSelector(function(data)
    {
      return data.allTasks
    })
  return (
    <div>
         <div>
        {
          output.map(function(task)
          {
            return <li>{task}</li>
          })
        }
      </div>
    </div>
  )
}

export default Another