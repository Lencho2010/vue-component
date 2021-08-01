export default function (vueInstance, chartOption) {
    const that = vueInstance

    console.log(that.$refs);
    var myChart = echarts.init(that.$refs.chartBody);
    var option;

    option = {
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                // mark: { show: true },
                // dataView: { show: true, readOnly: false },
                // restore: { show: true },
                // saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: '面积模式',
                type: 'pie',
                radius: [15, 60],
                center: ['50%', '40%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 40, name: 'rose 1' },
                    { value: 38, name: 'rose 2' },
                    { value: 32, name: 'rose 3' },
                    { value: 30, name: 'rose 4' },
                    { value: 28, name: 'rose 5' },
                    { value: 26, name: 'rose 6' }
                ]
            }
        ]
    };

    option && myChart.setOption(option);
}