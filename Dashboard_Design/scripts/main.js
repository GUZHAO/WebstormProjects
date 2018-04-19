// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('histo'));
// 绘制图表
myChart.setOption({
    tooltip: {},
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
