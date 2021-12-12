import React from 'react';
import s from '../App.module.css'
import MapToTable from './MapToTable';


const Table = ({ dataX, dataY, dispatch, table }) => {

  const add = () => {
    dispatch({
      type: "add",
      payload: { x: Math.floor(Math.random() * 6 + 5), y: Math.floor(Math.random() * 6 + 5), table: table }
    })
  }

  const onChangeInput = (body, id, status) => {
    return dispatch({
      type: "onChange",
      id: id,
      body: body,
      status: status
    }
    )
  }

  return (
    <div className={s.box_table}>
      <div className={s.table}>
        <div className={s.itemX}>
          {dataX.map(t => <MapToTable 
          key={t.id} id={t.id} 
          body={t.x} 
          dispatch={dispatch} 
          table={table} 
          onChangeInput={onChangeInput} 
          status={t.status} 
          />)}
        </div>
        <div className={s.itemY}>
          {dataY.map(t => <MapToTable 
          key={t.id} id={t.id} 
          body={t.y} 
          dispatch={dispatch} 
          thisY={dataY.length > 1 ? true : false} 
          table={table} 
          onChangeInput={onChangeInput} 
          status={t.status} 
          />)}
        </div>
      </div>
      <div className="table__item">
        <button onClick={() => add()}>Add</button>
      </div>

    </div>
  )
}

export default React.memo(Table)
