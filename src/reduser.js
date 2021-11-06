const reducer = (state, action) => {
    const lastItem = state.tableOneX[state.tableOneX.length - 1]
    switch (action.type) {
        case 'createData': {
                return {
                    ...state,
                    ox: [...state.tableOneX.map(ox => ox.x)],
                    oy: [...state.tableOneY.map(oy => oy.y)],
                    tx: [...state.tableTwoX.map(tx => tx.x)],
                    ty: [...state.tableTwoY.map(ty => ty.y)],
                }
        }
        case 'onChange': {
            
                if(action.status === "ox"){
                
                return{
                ...state,
                tableOneX: state.tableOneX.map(p => p.id === action.id ? { ...p, x: action.body, label: action.body} : p)
                }
            }else if(action.status === "oy") {
                
                return{
                ...state,
                tableOneY: state.tableOneY.map(p => p.id === action.id ? { ...p, y: action.body } : p),
                tableOneX: state.tableOneX.map(p => p.id === action.id ? { ...p, y: action.body} : p)
                }
            }else if(action.status === "tx") {
                
                return{
                ...state,
                tableTwoX: state.tableTwoX.map(p => p.id === action.id ? { ...p, x: action.body, label: action.body} : p)
                }
            }else if(action.status === "ty") {
                
                return{
                ...state,
                tableTwoY: state.tableTwoY.map(p => p.id === action.id ? { ...p, y: action.body } : p),
                tableTwoX: state.tableTwoX.map(p => p.id === action.id ? { ...p, y: action.body} : p)
                }
            }
            break
        }
        case 'add':{
            if(action.payload.table){
                
                return  {           
                ...state,
                tableOneX: [...state.tableOneX, {id: lastItem.id + 1, x: action.payload.x, y: action.payload.y, label: action.payload.x,  table: true, status: "ox"}],
                tableOneY: [...state.tableOneY, {id: lastItem.id + 1, y: action.payload.y, table: true, status: "oy" }]
            }}else {
                return{
                ...state,
                    tableTwoX: [...state.tableTwoX, {id: lastItem.id + 1, x: action.payload.x, y: action.payload.y, label: action.payload.x, table: false, status: "tx" }],
                    tableTwoY: [...state.tableTwoY, {id: lastItem.id + 1, y: action.payload.y, table: false, status: "ty" }] 
            }}
        }
        case "remove":{
            if(action.table){
                return  { 
                ...state,
                tableOneY: state.tableOneY.filter(o => o.id !== action.id),
                tableOneX: state.tableOneX.filter(o => o.id !== action.id) 
            }
        }else {
            return  { 
                ...state,
                tableTwoY: state.tableTwoY.filter(o => o.id !== action.id),
                tableTwoX: state.tableTwoX.filter(o => o.id !== action.id) 
            }  }
        }
        case 'output': {
            if (state.ox.length < state.tx.length){
                return{
                    ...state,
                    x: [...state.ox.map((s, i) => (s + state.tx[i]) / 2)],
                    y: [...state.oy.map((s, i) => (s + state.ty[i]) / 2)],
                    
                }
            } else {
                return{
                    ...state,
                    x: [...state.tx.map((s, i) => (s + state.ox[i]) / 2)],
                    y: [...state.ty.map((s, i) => (s + state.oy[i]) / 2)]
                } 
            }
        }
        case 'mapThree': {
            return {
                ...state,
                tableThree: [ ...state.x.map((item, index) => ({x: item, label: item, y: state.y[index]}))], 
            }
        }
        default: {
            return state
        }
    }

}


export default reducer
