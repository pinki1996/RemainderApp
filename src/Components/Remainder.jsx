import React from 'react'
import { addTask } from '../Redux'
import {useDispatch, useSelector} from "react-redux"


function Remainder() 
{
    const output = useSelector(function(data)
    {
      return data.allTasks
    })
 
    console.log(output)
  const [myTask, setMyTask] = React.useState("")

  const dispatch = useDispatch()

function collectIt(event)
{
    setMyTask(event.target.value)
}

function submitData()
{
    
    dispatch(addTask(myTask))
}

  return (
    <div>
        <input type="text" onChange={collectIt}/>
        <button onClick={submitData}>Submit</button>

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

export default Remainder