export default function (vueInstance, chartOption) {
    const that = vueInstance
    const colorList0 = ['rgb(205,85,85)', 'rgb(210,105,30)', 'rgb(0,139,0)',
        'rgb(178,58,238)', 'rgb(54,100,139)', 'rgb(255,0,255)'];

    const checkedColor = 'rgb(255,50,0)'

    var myChart = echarts.init(that.$refs.chartBody);

    const originData = [5, 20, 36, 10, 10, 20]

    const seriesData = originData.map(d => ({ value: d, isChecked: false }))

    // 指定图表的配置项和数据
    var option = {
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: seriesData,
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius: [5, 5, 0, 0],
                    label: {
                        show: true,//是否展示
                        // textStyle: {
                        //     fontWeight:'bolder',
                        //     fontSize : '12',
                        //     fontFamily : '微软雅黑',
                        // }
                    },
                    color: function (params) {
                        return colorList0[params.dataIndex]
                    },
                },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }

        }]
    };

    function selectChange(curIndex, isChecked) {
        option.series[0].itemStyle.normal.color = function (param) {//params.seriesIndex
            if (curIndex == param.dataIndex && isChecked) {
                return checkedColor;
            } else {
                return colorList0[param.dataIndex]
            }
        };
        myChart.setOption(option)
    }

    myChart.on('click', function ({ data, dataIndex }) {
        // 关系图的节点被点击时此方法被回调。
        const isChecked = !data.isChecked
        seriesData.forEach((val, index) => val.isChecked = isChecked && index === dataIndex)
        selectChange(dataIndex, isChecked)
        // myChart.dispatchAction({
        //     type: 'showTip',
        //     seriesIndex: 0,
        //     dataIndex: data.dataIndex + 1
        // });

    });
    // myChart.on('click', { seriesName: '销量' }, function () {
    //     console.log(123);
    // });

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}