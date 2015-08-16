        /**
         * 获取选中条件文本值
         * @param  {[type]} param [description]
         * @return {[type]}       [description]
         */
        function getCheckedValue(param) {
            var checkedValue = $(param).children("a.cur").html();
            return checkedValue;
        }

        /**
         * 获取全部参数条件数据
         * @param  {[type]} address  [description]
         * @param  {[type]} granular [description]
         * @param  {[type]} aqi      [description]
         * @param  {[type]} graph    [description]
         * @return {[type]}          [description]
         */
        function getParams(address, granular, aqi, graph) {
            var addressText = getCheckedValue(address);
            var granularText = getCheckedValue(granular);
            var aqiText = getCheckedValue(aqi);
            var graphText = getCheckedValue(graph);
            if (addressText == "undefined" || addressText == "null" || addressText === null || addressText === "") {
                //设置城市默认值
                addressText = "北京";
            }
            if (granularText == "undefined" || granularText == "null" || granularText === null || granularText === "") {
                //设置粒度默认值
                granularText = "周粒度";
            }
            if (aqiText == "undefined" || aqiText == "null" || aqiText === null || aqiText === "") {
                //设置AQI默认值
                aqiText = "AQI峰值";
            }
            if (graphText == "undefined" || graphText == "null" || graphText === null || graphText === "") {
                //设置图形默认值
                graphText = "柱状图";
            }
            return [addressText, granularText, aqiText, graphText];
        }

        /**
         * 获取条件对应的json字符串码
         * @return {[type]} [description]
         */
        function nameCode(address,granular,aqi,graph) {
            var arr = getParams(address,granular,aqi,graph);
            var addresscode = "";
            var granularcode = "";
            var aqicode = "";
            //城市编号代码
            switch (arr[0]) {
                case "北京":
                    addresscode = "1";
                    break;
                case "上海":
                    addresscode = "2";
                    break;
                case "广州":
                    addresscode = "3";
                    break;
                default:
                    addresscode = "1";
                    break;
            }
            //AQI编号代码
            switch (arr[1]) {
                case "AQI峰值":
                    aqicode = "1";
                    break;
                case "AQI平均值":
                    aqicode = "2";
                    break;
                default:
                    aqicode = "3";
                    break;
            }
            //粒度编号代码
            switch (arr[2]) {

                case "周粒度":
                    granularcode = "1";
                    break;
                case "月粒度":
                    granularcode = "2";
                    break;
                case "季粒度":
                    granularcode = "3";
                    break;
                default:
                    granularcode = "1";
                    break;
            }
            return addresscode + granularcode + aqicode;
        }


        /**
         * 按照条件获取数据
         * @param  {[type]} address  [description]
         * @param  {[type]} granular [description]
         * @param  {[type]} aqi      [description]
         * @param  {[type]} graph    [description]
         * @return {[type]}          [description]
         */
        function getData(param,address,granular,aqi,graph) {
            //获取条件code
            if(param === null || typeof(param) ==="undefined"){
                param="map";
            }
            var codetext=param+nameCode(address,granular,aqi,graph);
            var obj = {};
            $.ajax({
                url: "data/map.json",
                dataType: "json",
                async: false,
                success: function(data) {
                    console.log(data);
                    //for遍历属性
                    for(var key in data){
                      if(key ===codetext){
                            obj=data[key]; 
                      }
                    }
                }
            });
            return obj;
        }


        /**
         * 大图初始化
         * @return {[type]} [description]
         */
        function bigmap_init(){
            //条件状态切换控制
            /*图像条件选择*/
            $(".big_map .map_head>a").click(function(){ 
                $(".big_map .map_head>a").eq($(this).index()-1).addClass("cur").siblings().removeClass('cur');
                bigmap_count();
            }); 
            /*地区条件选择*/
            $(".big_map .head_line_in.small.address>a").click(function(){
                $(".big_map .head_line_in.small.address>a").eq(($(this).index()/2)-1).addClass("cur").siblings().removeClass('cur'); 
                bigmap_count();
            });
            /*粒度条件选择*/
            $(".big_map .head_line_in.small.granular>a").click(function(){
                $(".big_map .head_line_in.small.granular>a").eq($(this).index()-1).addClass("cur").siblings().removeClass('cur');
                bigmap_count();
            });
            /*AQI条件选择*/
            $(".big_map .head_line_in.big.aqi>a").click(function(){
                $(".big_map .head_line_in.big.aqi>a").eq($(this).index()-1).addClass("cur").siblings().removeClass('cur');
                bigmap_count("bar");
            });
        }

        /**
         * 小图1初始化
         * @return {[type]} [description]
         */
        function smallmap1_init(){
             //条件状态切换控制
            /*图像条件选择*/
            $(".small_map1 .map_head>a").click(function(){ 
                $(".small_map1 .map_head>a").eq($(this).index()-1).addClass("cur").siblings().removeClass('cur');
                smallmap1_count();
            }); 
            /*地区条件选择*/
            $(".small_map1 .head_line_in.small.address>a").click(function(){
                $(".small_map1 .head_line_in.small.address>a").eq(($(this).index()/2)-1).addClass("cur").siblings().removeClass('cur'); 
                smallmap1_count();
            });
            /*粒度条件选择*/
            $(".small_map1 .head_line_in.small.granular>a").click(function(){
                $(".small_map1 .head_line_in.small.granular>a").eq($(this).index()-1).addClass("cur").siblings().removeClass('cur');
                smallmap1_count();
            });
            /*AQI条件选择*/
            $(".small_map1 .head_line_in.big.aqi>a").click(function(){
                $(".small_map1 .head_line_in.big.aqi>a").eq($(this).index()-1).addClass("cur").siblings().removeClass('cur');
                smallmap1_count();
            });
        }

         /**
         * 小图1初始化
         * @return {[type]} [description]
         */
        function smallmap2_init(){
             //条件状态切换控制
            /*图像条件选择*/
            $(".small_map2 .map_head>a").click(function(){ 
                $(".small_map2 .map_head>a").eq($(this).index()-1).addClass("cur").siblings().removeClass('cur');
                smallmap2_count();
            }); 
            /*地区条件选择*/
            $(".small_map2 .head_line_in.small.address>a").click(function(){
                $(".small_map2 .head_line_in.small.address>a").eq(($(this).index()/2)-1).addClass("cur").siblings().removeClass('cur'); 
                smallmap2_count();
            });
            /*粒度条件选择*/
            $(".small_map2 .head_line_in.small.granular>a").click(function(){
                $(".small_map2 .head_line_in.small.granular>a").eq($(this).index()-1).addClass("cur").siblings().removeClass('cur');
                smallmap2_count();
            });
            /*AQI条件选择*/
            $(".small_map2 .head_line_in.big.aqi>a").click(function(){
                $(".small_map2 .head_line_in.big.aqi>a").eq($(this).index()-1).addClass("cur").siblings().removeClass('cur');
                smallmap2_count();
            });
        }