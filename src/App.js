import React, { useState, useEffect, useReducer } from 'react'
import styles from './App.module.css'
import reduser from './reduser'
import Table from './components/Table'
import ContainerCharts from './components/ContainerCharts'


function App() {

  const [state, dispatch] = useReducer(reduser, {
    tableOneX: [
      { id: 1, x: 1, y: 3, label: 1, table: true, status: 'ox' },
      { id: 2, x: 2, y: 5, label: 2, table: true, status: 'ox' },
      { id: 3, x: 4, y: 7, label: 4, table: true, status: 'ox' },
      { id: 4, x: 7, y: 3, label: 7, table: true, status: 'ox' },
    ],
    tableOneY: [
      { id: 1, y: 2, table: true, status: 'oy' },
      { id: 2, y: 4, table: true, status: 'oy' },
      { id: 3, y: 6, table: true, status: 'oy' },
      { id: 4, y: 7, table: true, status: 'oy' },
    ],
    tableTwoX: [
      { id: 1, x: 2, y: 1, label: 2, table: false, status: 'tx' },
      { id: 2, x: 4, y: 1, label: 4, table: false, status: 'tx' },
      { id: 3, x: 6, y: 1, label: 6, table: false, status: 'tx' },
      { id: 4, x: 9, y: 2, label: 9, table: false, status: 'tx' },
      { id: 5, x: 11, y: 4, label: 11, table: false, status: 'tx' },
    ],
    tableTwoY: [
      { id: 1, y: 1, table: false, status: 'ty' },
      { id: 2, y: 1, table: false, status: 'ty' },
      { id: 3, y: 1, table: false, status: 'ty' },
      { id: 4, y: 2, table: false, status: 'ty' },
      { id: 5, y: 4, table: false, status: 'ty' },
    ],
    tableThree: [],
    ox: [],
    oy: [],
    tx: [],
    ty: [],
    x: [],
    y: []
  })

  const [dynamic, setDynamic] = useState(false)
  const [calculate, setCalculate] = useState(true)
  const [zoom, setZoom] = useState(true)
  const [size, setSize] = useState({ w: 200, h: 100 })

  const zoomChanget = (status, zoom) => {
    if (status) {
      if (zoom) { }
      setSize({
        w: 500, h: 500
      })
      setZoom(false)
    } else {
      setSize({
        w: 200, h: 100
      })
      setZoom(true)
    }
  }

  useEffect(() => {

    dispatch({
      type: 'createData'
    })
    dispatch({
      type: 'output',
    })
    dispatch({
      type: 'mapThree',
    })
  }, [state.tableOneX, state.tableOneY, state.tableTwoX, state.tableTwoY]
  )
  return (
    <div className='App'>
      <div className={styles.container__table}>
        <Table dataX={state.tableOneX} dataY={state.tableOneY} dispatch={dispatch} table={true} />
        <Table dataX={state.tableTwoX} dataY={state.tableTwoY} dispatch={dispatch} table={false} />
        <div className={styles.box_table}>
          {calculate 
            ? <div className={styles.calculate} onClick={() => setCalculate(false)}>
            <button onClick={() => setDynamic(true)}>Calculate</button>
            </div>
            : <div className={styles.table}>
              <div className={styles.three__item + ' ' + styles.itemX}>
                {state.x.map((x, index) => <input key={index} value={dynamic ? x : ""} />)}
              </div>
              <div className={styles.three__item + ' ' + styles.itemY}>
                {state.y.map((y, index) => <input key={index} value={dynamic ? y : ""} />)}
              </div>
            </div>}
        </div>
      </div>
      {dynamic && <div className={styles.charts}>
        <ContainerCharts
          tableOne={state.tableOneX}
          tableTwo={state.tableTwoX}
          tableThree={state.tableThree}
          size={size}
          zoom={zoom}
          zoomChanget={zoomChanget}
        />
      </div>}
    </div>
  );
}

export default (App)
