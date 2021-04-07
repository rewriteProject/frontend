import React from 'react';
import {Bar} from 'react-chartjs-2';


const ChartSite = () => {
    return <div>
        <Bar
            data={{
                labels: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'],
                datasets: [{
                    label:'Stunden',
                    data:[4, 5, 9, 9, 6],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderWidth:2,
                    borderColor:[
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    hoverBorderWidth:4,
                    hoverBorderColor:'#000'
                }]
            }}

            width={100}
            height={50}

            options={{
                scales: {
                  yAxes: [{
                      ticks: {
                          suggestedMin: 0,
                          suggestedMax: 10,
                      }
                  }]
                },
            }}
            title={{
                display:true,
                text:'Chart.JS für SOTA',
                fontSize:25,
                fontColor:'#000'
            }}

            legend={{
                display:true,
                position:'right',
                labels:{
                fontColor:'#000'
                }
            }}

            layout={{
                padding:{
                    left:0,
                    right:0,
                    bottom:0,
                    top:0
                }
            }}

            tooltips={{
                enabled: true
            }}

        />
    </div>
}

export default ChartSite
