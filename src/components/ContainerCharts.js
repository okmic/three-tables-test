import React from 'react'
import Label from './AxisLabel'
import ChartTitle from './ChartTitle'
import LineChart from './LineChart'

const styles = {
    containerCharts: {
        display: "flex",
        maxWidth: "100%",
        flexWrap: 'wrap',
        justifyContent: "center",
        alignItems: "flex-start"
    },
    chartComponentsContainer: {
        maxWidth: "100%", display: 'grid', gridTemplateColumns: 'max-content 500px', alignItems: 'center'
    },
    chartWrapper: { maxWidth: 700, alignSelf: 'flex-start' },
}


const ContainerCharts = ({ tableOne, tableTwo, tableThree, size, zoom, zoomChanget }) => {

    return (
        <>
            <button onClick={() => zoomChanget(zoom)}>{zoom ? <b> &#9745; Enlarge graphs</b> : <b> &#9746; Reduce graphs</b>}</button>
            <div style={styles.containerCharts}>
                <div style={styles.chartComponentsContainer}>
                    <div />
                    <ChartTitle text='Table One' />
                    <Label rotate />
                    <div style={styles.chartWrapper}>
                        <LineChart
                            width={size.w}
                            height={size.h}
                            data={tableOne}
                            horizontalGuides={5}
                            precision={0}
                            verticalGuides={1}
                        />
                    </div>
                    <div />
                </div>
                <div style={styles.chartComponentsContainer}>
                    <div />
                    <ChartTitle text='Table Two' />
                    <Label rotate />
                    <div style={styles.chartWrapper}>
                        <LineChart
                            width={size.w}
                            height={size.h}
                            data={tableTwo}
                            horizontalGuides={5}
                            precision={0}
                            verticalGuides={1}
                        />
                    </div>
                    <div />
                </div>
                <div style={styles.chartComponentsContainer}>
                    <div />
                    <ChartTitle text='Table Three' />
                    <Label rotate />
                    <div style={styles.chartWrapper}>
                        <LineChart
                            width={size.w}
                            height={size.h}
                            data={tableThree}
                            horizontalGuides={5}
                            precision={0}
                            verticalGuides={1}
                        />
                    </div>
                    <div />
                </div>
            </div>
        </>
    )
}

export default ContainerCharts