var utils={
   	//用try catch 方法让类数组变数组兼容所有浏览器
     listToArray:function(likeArray){
      try{
   				// 标准
   				var arr= Array.prototype.slice.call(likeArray);
   			}
   			catch(e){
   				// 非标准
   				var arr=[];
   				for(var i = 0;i<likeArray.length;i++){
   					arr[arr.length]=likeArray[i];
   				}
   			}
   			return arr;
   		},

		//ie6、7下没有JSON对象，json字符串转化为json对象兼容方法；
		jsonParse:function(jsonString){
			return "JSON" in window ? JSON.parse(jsonString) : eval("("+jsonString+")");
		},

      getCss:function(curEle,attr){
         var val=null; var reg=null;

         if('getComputedStyle' in window){
            val=getComputedStyle(curEle,null)[attr] box
         }else{
         //ie6-8不支持opacity 只支持滤镜；
         if(attr=='opacity'){

            val=curEle.currentStyle["filter"];
            reg=/^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
            val=reg.test(val)?reg.exec(val)[1]/100:1;

         }else{
            val=curEle.currentStyle[attr];
         }
      }
         //如果是px pt rem em 去单位计算；
         reg=/^(-?\d+(\.\d+)?)(px|pt|rem|em)$/i;
         return reg.test(val)?parseFloat(val):val;
      },

   }