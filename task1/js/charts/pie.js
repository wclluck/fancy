var chart,option;
	// 基于准备好的dom，初始化echarts图表
 function myPie() {
 			chart = echarts.init(document.getElementById('pie_main'));			
				chart.setOption({
				backgroundColor : 'rgb(255,255,255)',
				tooltip : {
						 trigger: 'item',
             formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
				legend: {
          x : 'center',
                y : 'bottom',
           data:['AQI>300','200<AQI<300','AQI<200']
          },			
					
				
        calculable:true,
				series : [
					{
						        name:'AQI',
                    type:'pie',
                    radius : '40%',
                    center: ['50%', '35%'],
                    data:[
                        {value:100, name:'AQI>300'},
                        {value:100, name:'200<AQI<300'},
                        {value:165, name:'AQI<200'}
                    ]
       }
       ]     
      })
  }
   