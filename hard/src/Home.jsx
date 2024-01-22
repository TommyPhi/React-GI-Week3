import React, {useState} from 'react'
import Header from './components/Header'
import TaskCard from './components/TaskCard'

export default function Home() {
    const [taskList, setTaskList] = useState([])

    const handleRemove = (e) => {
        e.target.parentElement.remove();
    }

    const handleAddTask = () => {
        setTaskList(taskList.concat(<TaskCard key={taskList.length } handleRemove = {handleRemove}/>))
    }

  return (
    <div>
      <Header />
      <main>
        {taskList}
      <button id='addTaskBtn' onClick={handleAddTask}>+</button>
      </main>
    </div>
  )
}
