import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';

const Graph = (props) => {
    
    const state = {
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
        datasets: [
          {
            label: 'Share %',
            fill: false,
            lineTension: 0.2,
            backgroundColor: 'rgba(0, 0, 0, 1)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 10,
            data: [65, 59, 80, 81]
          }
        ]
    }

    return (
        <Fragment>
            <Line
                data={state}
                options={{
                        title: {
                        display: true,
                        text:'Stockholder share percentage over time',
                        fontSize: 30
                    },
                    legend: {
                        display: false,
                        position:'right'
                    }
                }}
            />
        </Fragment>
    );
}

export default Graph;