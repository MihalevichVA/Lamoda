import React from 'react'

function FilterColor({ name, done, onDone }) {
  const handleCheck = (e) => {
    const done = e.target.checked
    onDone(name, done)
  }
  return (
    <div>
      <input type="checkbox" checked={done} onChange={handleCheck} />
      {name}
    </div>
  )
}

export default React.memo(FilterColor)
