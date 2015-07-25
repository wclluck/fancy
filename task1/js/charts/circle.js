var chart,option;
	// 基于准备好的dom，初始化echarts图表
 function myCircle() {
 	 chart = echarts.init(document.getElementById('circle_main'));

     var labelFormatter={
                normal : {
                    label : {
                        formatter : function (params){
                        return 100 - params.value + '%'
                        },
                    labelLine : {
                        show : true
                      }
                  }
                },
               };
     var labelTop = {
            normal : {
                label : {
                    show : true,
                    position : 'center',
                    formatter : '{b}',
                    textStyle: {
                        baseline : 'bottom'
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };
     var labelBottom = {
            normal : {
                color: '#ccc',
                label : {
                    show : false,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };



	chart.setOption({
    backgroundColor : 'rgb(255,255,255)',
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
                x : 'center',
                y : 'bottom',
                data:[
                    'AQI > 200','AQI < 200'
                ]
            },
    
    calculable : true,
    series : [
        {
            type:'pie',
            center : ['25%', '40%'],
            radius : ['30%', '40%'],
            x: '0%', // for funnel
            itemStyle : labelFormatter,
            
            data : [
                   {name:'other', value:46, itemStyle : labelBottom},
                   {name:'AQI > 200', value:54,itemStyle : labelTop}
                    ]
        },
        {
            type:'pie',
            center : ['70%', '40%'],
            radius : ['30%', '40%'],
            x: '20%', // for funnel
            itemStyle : labelFormatter,
            
            data : [
                   {name:'other', value:54, itemStyle : labelBottom},
                   {name:'AQI < 200', value:46,itemStyle : labelTop}
                    ]
        }
     ]
    })	
    }
   