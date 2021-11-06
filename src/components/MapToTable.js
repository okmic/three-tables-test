import React from 'react';
import s from '../App.module.css'

const MapToTable = (props) => {
  const remove = () => {

    props.dispatch({   
      type: "remove",
      id: props.id,
      table: props.table
    })
  }

  const updateInput = (event) => {
    if(event.target.value < 0) {
      alert("Negative characters cannot be entered. 0+")
    }else {
    props.onChangeInput(Number(event.target.value), props.id, props.status)
    }
  }
  
  return (
    <>
      <div className={s.table__item__children}>
        <div key={props.id}>
          <input type="number" value={props.body} onChange={updateInput} />
          {props.thisY && <button onClick={() => remove()}>delete</button>}
        </div>
      </div>

    </>
  )
}

export default MapToTable;
