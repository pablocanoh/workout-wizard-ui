import React, {useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {getInsights} from "./routineService";

const MyChart = () => {
    const [insights, setInsights] = useState([]);

    React.useEffect(() => {
        const loadInsights = async () => {
            const insights = await getInsights();
            setInsights(insights);
        };

        loadInsights();
    }, []);

    const options = {
        xAxis: {
            categories: insights.map(insight => insight.groupNumber + 1),
            title: {
                text: 'Routine period'
            }
        },
        yAxis: {
            title: {
                text: 'Total load in Kg'
            }
        },
        title: {
            text: 'Routine progress'
        },
        series: [{
            data: insights.map(insight => insight.totalLoad),
        }],
        legend: {
            enabled: false
        },
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default MyChart;
