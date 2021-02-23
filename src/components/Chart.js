import React,{ useState} from 'react';
import {Bar} from 'react-chartjs-2';

function Chart() {
    const [chartData, setChartData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
          {
            label:'Income',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072,
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
    })

    return (
        <div>
            <div className="chart">
                <Bar
                data={chartData}
                width={100}
                height={50}
                options={{ 
                    title: {
                        display: true,
                        text: 'Income',
                        fontSize: 25
                        
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                
                 }}
                />  
            </div>
        </div>
    )
}
export default Chart