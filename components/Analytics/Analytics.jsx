import React from 'react'
import { Bar } from 'react-chartjs-2'
import fullData from './context/fullData'
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import styles from './Analytics.module.css'


function Analytics() {
  return (

<div className={styles.globalContainer}>
        <form className={styles.form}>
            <label htmlFor="year" className={styles.label}>Total des ventes pour :</label>
            <select id="year" className={styles.select}>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
            </select>
        </form>


        <div className='chart-container'>
            <Bar
            redraw={true}
            data={{
                labels: ['Jan/Fev', 'Mar/Avr', 'Mai/Juin', 'Juil/Août', 'Sep/Oct', 'Nov/Dec'],
                datasets: [
                    {
                        label: 'Nombre de commandes',
                        data: fullData['2020'].chart1,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            '#DA727B',
                            // 'rgba(54, 162, 235, 0.2)',
                            // 'rgba(255, 206, 86, 0.2)',
                            // 'rgba(75, 192, 192, 0.2)',
                            // 'rgba(153, 102, 255, 0.2)',
                            // 'rgba(255, 159, 64, 0.2)',
                            // 'rgba(20, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            // 'rgba(54, 162, 235, 1)',
                            // 'rgba(255, 206, 86, 1)',
                            // 'rgba(75, 192, 192, 1)',
                            // 'rgba(153, 102, 255, 1)',
                            // 'rgba(255, 159, 64, 1)',
                            // 'rgba(20, 159, 64, 1)',
                        ]
                    }
                ]
            }}
            options={{
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 20
                        }
                        }]
                        },
                        legend: {
                            labels: {
                                boxWidth: 0,
                            }
                        },
                }}
        />
    </div>

    </div>

    
    
  )
}

export default Analytics