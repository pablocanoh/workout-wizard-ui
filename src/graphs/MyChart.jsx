import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const MyChart = () => {
    // Aquí definirías las opciones de tu gráfico
    const options = {
        title: {
            text: 'My chart'
        },
        series: [{
            data: [1, 2, 3, 4, 5] // Tus datos irían aquí
        }]
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
