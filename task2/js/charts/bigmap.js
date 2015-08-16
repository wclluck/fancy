function bigmap_count() {
    var seriestype="line";
    var boundaryGapflag=false;
    //设置间隔显示
    var axisLabelinterval=0;
    var graphText= getCheckedValue(".big_map .head_line>.map_head");
    if(graphText==="柱状图"){
        seriestype="bar";
        boundaryGapflag=true;
    }
    //获取数据信息
    var soucerData = {};
    soucerData = getData("map",".big_map .head_line_in.small.address", ".big_map .head_line_in.big.aqi", ".big_map .head_line_in.small.granular", ".big_map .head_line>.map_head");
    // 基于准备好的dom，初始化echarts图表
    //alert(soucerData.axistickdata.length);
    if(soucerData.axistickdata.length > 20){
        axisLabelinterval=1;
    }
    var myChart = echarts.init(document.getElementById('map_cont_1'));

    option = {
        title: {
            text: soucerData.title,
            subtext: soucerData.subtitle
        },
        tooltip: {
            showContent: true,
        },
        calculable: true,
        xAxis: [{
            name: soucerData.axistickname,
            boundaryGap: boundaryGapflag,
            splitLine: { //网格
                show: true,
                lineStyle: {

                    type: 'dashed',
                    width: 1
                }
            },
            axisLine: { // 轴线
                show: true,
                lineStyle: {
                    color: 'gray',
                    type: 'dashed',
                    width: 1
                }
            },
            axisTick: { // 轴标记
                show: true,
                length: 0,
                lineStyle: {
                    width: 2
                }
            },
            axisLabel:{
                show:true,
                //显示间隔
                interval:axisLabelinterval,
                formatter:null
            },
            data: soucerData.axistickdata
        }],
        yAxis: [{
            type: 'value',
            splitLine: { //网格
                show: true,
                lineStyle: {

                    type: 'dashed',
                    width: 1
                }
            },
            axisLine: { // 轴线
                show: true,
                lineStyle: {
                    color: 'gray',
                    type: 'dashed',
                    width: 1
                }
            },
            axisTick: { // 轴标记
                show: true,
                length: 0,
                lineStyle: {
                    width: 2
                }
            },
        }],
        series: [{
                name: soucerData.seriesname,
                type: seriestype,
                stack: '总量',
                smooth: true,
                symbol: 'none',
                splitLine: {
                    show: true,
                    length: 80,
                    lineStyle: {
                        color: '#eee',
                        width: 1,
                        type: 'dashed'
                    }
                },
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: 'red'

                        }
                    }
                },
                data: soucerData.aqidata
            }

        ]
    };

    // 为echarts对象加载数据 
    myChart.setOption(option);
}


