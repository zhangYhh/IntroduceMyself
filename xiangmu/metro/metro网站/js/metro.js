$(".tu").toggle(function(){
    $(".san").css("display","block");
    $(".my").css("display","block");
},
function(){
    $(".san").css("display","none");
    $(".my").css("display","none");
}
);


$(".uull input").click(function(){
    if($(this).is(":checked")){
        $(this).parent().css("backgroundColor","#ad3e21")
    }else{
        $(this).parent().css("backgroundColor","#c14625")
    } 
});

$(".ull li:nth-of-type(2)").toggle(function(){
    $(".ull .xiao-b").css("display","block");
    $(this).css("backgroundColor","#c1004f");
},function(){
    $(".ull .xiao-b").css("display","none");
    $(this).css("backgroundColor","#262626");
});

$(".ull li:nth-of-type(7)").toggle(function(){
    $(".ull .xiao-u").css("display","block");
    $(this).css("backgroundColor","#2572eb");
},function(){
    $(".ull .xiao-u").css("display","none");
    $(this).css("backgroundColor","#262626");
});

$(".ull li:nth-of-type(15)").toggle(function(){
    $(".ull .xiao-bb").css("display","block");
    $(this).css("backgroundColor","#189800");
},function(){
    $(".ull .xiao-bb").css("display","none");
    $(this).css("backgroundColor","#262626");
});

$(".ull li:nth-of-type(18)").toggle(function(){
    $(".ull .xiao-t").css("display","block");
    $(this).css("backgroundColor","#56c5ff");
},function(){
    $(".ull .xiao-t").css("display","none");
    $(this).css("backgroundColor","#262626");
});

$(".ull li:nth-of-type(24)").toggle(function(){
    $(".ull .xiao-m").css("display","block");
    $(this).css("backgroundColor","#d74f2a");
},function(){
    $(".ull .xiao-m").css("display","none");
    $(this).css("backgroundColor","#262626");
});

$(".xhk").toggle(function(){
    $(".left").css({display:"block",position:"absolute",top:"83px",left:"0",height:"100%",width:"100%"}),
    $("body").css("position","relative")
},function(){
    window.location.reload()
});


let arr = [".form-li-1",".form-li-2",".form-li-3",".form-li-4"];
let arr2 = [".form-f1",".form-f2",".form-f3",".form-f4"];
for(let i=0;i<arr.length;i++){
    $(arr[i]).click(function(){
        $(this).css("backgroundColor","#1a000a")
        $(this).siblings().css("backgroundColor","#830034")
        $(arr2[i]).css({display:"block"});
        $(arr2[i]).siblings().css({display:"none"});
    })
}

// 数据
var xxy = echarts.init(document.getElementById("las")); 
var xy = echarts.init(document.getElementById("xyy"));
var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

option = {
    // title: {
    //     text: '特性示例：渐变色 阴影 点击缩放',
    //     subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    // },
    xAxis: {
        show:false,
        data: dataAxis,
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: { 
        show:false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
        grid:{
            top:10,
            bottom:10,
            left:30,
        },
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.05)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
            data: data
        }
    ]
};
xy.setOption(option);
// Enable data zoom when user click bar.
var zoomSize = 6;
xy.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    xy.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
});

$(window).resize(function(){
    xy.resize();
})

xxy.setOption(option);
// Enable data zoom when user click bar.
var zoomSize = 6;
xxy.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    xxy.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
});

$(window).resize(function(){
    xxy.resize();
})




var changb = echarts.init(document.getElementById("changc2"));
var changa = echarts.init(document.getElementById("changc"));
option = {
    // calculable : true,
    xAxis : [

        {
            show:false,
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            show:false,
            type : 'value'
        }
    ],
    grid:{
        top:10,
        bottom:3,
        left:30,
    },
    color:'#154693',
    series : [
        {
            // name:'蒸发量',
            type:'bar',
            data:[36, 99, 37, 63.2, 25.6, 76.7, 135.6, 162.2, 32.6, 30.0, 98, 40],
            // markPoint : {
            //     data : [
            //         {type : 'max', name: '最大值'},
            //         {type : 'min', name: '最小值'}
            //     ]
            // },
            // markLine : {
            //     data : [
            //         {type : 'average', name: '平均值'}
            //     ]
            // }
        },
        {
            // name:'降水量',
            type:'bar',
            data:[66, 59, 89, 46, 28.7, 70.7, 175.6, 182.2, 48.7, 48.8, 86, 45],
            // markPoint : {
            //     data : [
            //         {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
            //         {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
            //     ]
            // },
            // markLine : {
            //     data : [
            //         {type : 'average', name : '平均值'}
            //     ]
            // }
        }
    ]
};
changa.setOption(option);
// Enable data zoom when user click bar.

$(window).resize(function(){
    changa.resize();
})
changb.setOption(option);
// Enable data zoom when user click bar.

$(window).resize(function(){
    changb.resize();
})








