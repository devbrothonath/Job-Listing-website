import React from 'react'
import { Link } from 'react-router-dom'

const JobFormBtn = () => {
  return (
    <div>
        <button>
            <Link to={"/add-job"}>Add Job</Link>
        </button>
    </div>
  )
}

export default JobFormBtn