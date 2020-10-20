import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';

import { performanceToStocks } from '../util/algorithm';

const Graph = (props) => {
    
    const data = {
        "Employee 1" : [20, 30, 15, 25],
        "Employee 2": [11, 13, 18, 24],
        "Employee 3": [0, 0, 10, 20]
    }

    let stocks = performanceToStocks(data);

    let datasets = [];
    for(const [name, stock] of Object.entries(stocks)) {
        if(name == "COMPANY") {
            datasets.push({
                label: name + ' (%)',
                fill: false,
                lineTension: 0.2,
                backgroundColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 10,
                data: stock
            });
        } else {
            datasets.push({
                label: name + ' (%)',
                fill: false,
                lineTension: 0.2,
                backgroundColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(' + (Math.round(100+100*Math.random())) + ', ' + (Math.round(100+100*Math.random())) + ', ' + (Math.round(100+100*Math.random())) + ', 1)',
                borderWidth: 5,
                data: stock
            });
        }
    }

    let labels = [];
    for(let i = 0; i < Object.entries(stocks)[0][1].length; i++) {
        labels.push("Year " + i);
    }

    const state = {
        labels,
        datasets
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
                        display: true,
                        position:'bottom'
                    }
                }}
            />
        </Fragment>
    );
}

export default Graph;