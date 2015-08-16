function smallmap1_count() {
    var seriestype="line";
    var boundaryGapflag=false;
    //间隔显示轴数据
    var axisLabelinterval=0;
    var graphText= getCheckedValue(".small_map1 .head_line>.map_head");
    if(graphText==="柱状图"){
        seriestype="bar";
        boundaryGapflag=true;
    }
    //获取数据信息
    var soucerData = {};
     soucerData = getData("map",".small_map1 .head_line_in.small.address", ".small_map1 .head_line_in.big.aqi", ".small_map1 .head_line_in.small.granular", ".small_map1 .head_line>.map_head");
    // 基于准备好的dom，初始化echarts图表
    if(soucerData.axistickdata.length > 20){
        axisLabelinterval=6;
    }
    var myChart = echarts.init(document.getElementById('map_cont_2'));

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
            data:soucerData.axistickdata
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

function smallmap2_count() {
    var seriestype="line";
    var boundaryGapflag=false;
    //间隔显示轴数据
    var labelinterval=0;
    var graphText= getCheckedValue(".small_map2 .head_line>.map_head");
    if(graphText==="柱状图"){
        seriestype="bar";
        boundaryGapflag=true;
    }
    //获取数据信息
    var soucerData = {};
    soucerData = getData("map",".small_map2 .head_line_in.small.address", ".small_map2 .head_line_in.big.aqi", ".small_map2 .head_line_in.small.granular", ".small_map2 .head_line>.map_head");
     if(soucerData.axistickdata.length > 20){
        labelinterval=6;
    }
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('map_cont_3'));

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
                interval:labelinterval,
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
