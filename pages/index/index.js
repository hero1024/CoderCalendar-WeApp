//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    today:{} ,
    sg3:'',
    inter:'',
    tim2:'',
    clock1:'',
    moon: '',
    moonGif: '',
    lunarDay:'',
    weekDay: '',
  },

  getTodayString() {
    var weeks = ["日", "一", "二", "三", "四", "五", "六"];
    var today = new Date();
    return "今天是" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()];
  },
  getTotalObject() {
    var activities = [{
      name: "写开源库",
      good: "今天北斗七星汇聚，裤子造的又快又好",
      bad: "写好会发现github上已经有了更好的"
    }, {
      name: "给测试妹子埋个bug",
      good: "下辈子的幸福就靠这个bug了",
      bad: "妹子会认为你活和代码一样差"
    }, {
      name: "写单元测试",
      good: "写单元测试将减少出错",
      bad: "写单元测试会降低你的开发效率"
    }, {
      name: "洗澡",
      good: "你几天没洗澡了？",
      bad: "会把设计方面的灵感洗掉",
      weekend: true
    }, {
      name: "锻炼一下身体",
      good: "身体健康，更加性福",
      bad: "能量没消耗多少，吃得却更多",
      weekend: true
    }, {
      name: "抽烟",
      good: "抽烟有利于提神，增加思维敏捷",
      bad: "除非你活够了，死得早点没关系",
      weekend: true
    }, {
      name: "白天上线",
      good: "今天白天上线是安全的",
      bad: "可能导致灾难性后果"
    }, {
      name: "重构",
      good: "代码质量得到提高",
      bad: "你很有可能会陷入泥潭"
    }, {
      name: "使用%t",
      good: "你看起来更有品位",
      bad: "别人会觉得你在装逼"
    }, {
      name: "跳槽",
      good: "该放手时就放手",
      bad: "鉴于当前的经济形势，你的下一份工作未必比现在强"
    }, {
      name: "招人",
      good: "你面前这位有成为牛人的潜质",
      bad: "这人会写程序吗？"
    }, {
      name: "面试",
      good: "面试官今天心情很好",
      bad: "面试官不爽，会拿你出气"
    }, {
      name: "提交辞职申请",
      good: "公司找到了一个比你更能干更便宜的家伙，巴不得你赶快滚蛋",
      bad: "鉴于当前的经济形势，你的下一份工作未必比现在强"
    }, {
      name: "申请加薪",
      good: "老板今天心情很好",
      bad: "公司正在考虑裁员"
    }, {
      name: "晚上加班",
      good: "晚上是程序员精神最好的时候",
      bad: "",
      weekend: true
    }, {
      name: "在妹子面前吹牛",
      good: "改善你矮穷挫的形象",
      bad: "会被识破",
      weekend: true
    }, {
      name: "撸管",
      good: "避免缓冲区溢出",
      bad: "强撸灰飞烟灭",
      weekend: true
    }, {
      name: "浏览成人网站",
      good: "重拾对生活的信心",
      bad: "你会心神不宁",
      weekend: true
    }, {
      name: "命名变量\"%v\"",
      good: "",
      bad: ""
    }, {
      name: "写超过%l行的方法",
      good: "你的代码组织的很好，长一点没关系",
      bad: "你的代码将混乱不堪，你自己都看不懂"
    }, {
      name: "提交代码",
      good: "遇到冲突的几率是最低的",
      bad: "你遇到的一大堆冲突会让你觉得自己是不是时间穿越了"
    }, {
      name: "代码复审",
      good: "发现重要问题的几率大大增加",
      bad: "你什么问题都发现不了，白白浪费时间"
    }, {
      name: "开会",
      good: "写代码之余放松一下打个盹，有益健康",
      bad: "小心被扣屎盆子背黑锅"
    }, {
      name: "打LOL",
      good: "你将有如神助",
      bad: "你会被虐的很惨",
      weekend: true
    }, {
      name: "晚上上线",
      good: "晚上是程序员精神最好的时候",
      bad: "你白天已经筋疲力尽了"
    }, {
      name: "修复BUG",
      good: "你今天对BUG的嗅觉大大提高",
      bad: "新产生的BUG将比修复的更多"
    }, {
      name: "设计评审",
      good: "设计评审会议将变成头脑风暴",
      bad: "人人筋疲力尽，评审就这么过了"
    }, {
      name: "需求评审",
      good: "",
      bad: ""
    }, {
      name: "上微博",
      good: "今天发生的事不能错过",
      bad: "今天的微博充满负能量",
      weekend: true
    }, {
      name: "上AB站",
      good: "还需要理由吗？",
      bad: "满屏兄贵亮瞎你的眼",
      weekend: true
    }];

    var directions = ["北方", "东北方", "东方", "东南方", "南方", "西南方", "西方", "西北方"];

    var drinks = ["水", "茶", "红茶", "绿茶", "咖啡", "奶茶", "可乐", "鲜奶", "豆奶", "果汁", "果味汽水", "苏打水", "运动饮料", "酸奶", "酒"];

    var _activities = this.filter(activities);
    var today = new Date();
    var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    var numGood = this.random(iday, 98) % 3 + 2;
    var numBad = this.random(iday, 87) % 3 + 2;
    var eventArr = this.pickRandomActivity(_activities, numGood + numBad);

    var goodList = [];
    var badList = [];

    for (var i = 0; i < numGood; i++) {
      goodList.push(eventArr[i]);
    }

    for (var i = 0; i < numBad; i++) {
      badList.push(eventArr[numGood + i]);
    }
    var totalList = {
      "today": this.getTodayString(),
      "goodList": goodList,
      "badList": badList,
      "direction": directions[this.random(iday, 2) % directions.length],
      "drinks": this.pickRandom(drinks, 2),
      "stars": this.star(this.random(iday, 6) % 5 + 1)
    }
    return totalList;
  },

  star(num) {
    var result = "";
    var i = 0;
    while (i < num) {
      result += "★";
      i++;
    }
    while (i < 5) {
      result += "☆";
      i++;
    }
    return result;
  },

  // 去掉一些不合今日的事件
  filter(activities) {
    var result = [];
    // 周末的话，只留下 weekend = true 的事件
    if (this.isWeekend()) {
      for (var i = 0; i < activities.length; i++) {
        if (activities[i].weekend) {
          result.push(activities[i]);
        }
      }
      return result;
    }
    return activities;
  },

  isWeekend() {
    var today = new Date();
    return today.getDay() == 0 || today.getDay() == 6;
  },

  // 从 activities 中随机挑选 size 个
  pickRandomActivity(activities, size) {
    var picked_events = this.pickRandom(activities, size);

    for (var i = 0; i < picked_events.length; i++) {
      picked_events[i] = picked_events[i];
    }

    return picked_events;
  },

  // 从数组中随机挑选 size 个
  pickRandom(array, size) {
    var result = [];
    var today = new Date();
    var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

    for (var i = 0; i < array.length; i++) {
      result.push(array[i]);
    }
    for (var j = 0; j < array.length - size; j++) {
      var index = this.random(iday, j) % result.length;
      result.splice(index, 1);
    }

    return result;
  },

  random(dayseed, indexseed) {
    var n = dayseed % 11117;
    for (var i = 0; i < 100 + indexseed; i++) {
      n = n * n;
      n = n % 11117; // 11117 是个质数
    }
    return n;
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    this.initData()
  },

  
  initData(){
    var today = new Date()
    var weeks = ["日", "一", "二", "三", "四", "五", "六"]; 
    var weekDay = " 星期" + weeks[today.getDay()]
    var dateutil = require('../../utils/lunar')
    var date1 = dateutil.Lunar.fromDate(today);
    var moon = date1.getYueXiang()
    var moonGif = '/static/date/moon'+date1.getDay()+'.gif'
    this.setData({
      today: this.getTotalObject(),
      moon: moon,
      moonGif: moonGif,
      lunarDay: date1.toString(),
      weekDay: weekDay
    });
    this.startInter()
  },

  tick() {
    var today,z1,z2,z3,z4,z5,z6,z7,z8,z9,z10,z11,z12,ztx,scolor,tY,tM,tD;
    var sccolor=new Array("red","#00FF00");
    today = new Date()
    tY=today.getFullYear();
    tM=parseInt(today.getMonth())+1;
    tD=today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    if(hours<10) hours='0'+hours
    if(minutes<10) minutes='0'+minutes
    if(seconds<10) seconds='0'+seconds
    scolor=sccolor[seconds%2]
    var innerClock =tY+'年'+tM+'月'+tD+'日 '+hours+':'+minutes+':'+seconds;
    if (( hours >= 1 ) && (hours < 3 )){
      z1=scolor;
      ztx="丑";
    } else {
      z1="#c0c0c0";
    }
    if (( hours >= 3 ) && (hours < 5 )) {
      z2=scolor;
      ztx="寅";
    } else {
      z2="#c0c0c0";
    }
    if (( hours >= 5 ) && (hours < 7 )) {
      z3=scolor;
      ztx="卯";
    } else {
      z3="#c0c0c0";
    }
    if (( hours >= 7 ) && (hours < 9 )){
      z4=scolor;
      ztx="辰";
    } else {
      z4="#c0c0c0";
    }
    if (( hours >= 9 ) && (hours < 11)) {
      z5=scolor;
      ztx="巳";
    } else {
      z5="#c0c0c0";
    }
    if (( hours >= 11) && (hours < 13)) {
      z6=scolor;
      ztx="午";
    } else {
      z6="#c0c0c0";
    }
    if (( hours >= 13) && (hours < 15)){
      z7=scolor;
      ztx="未";
    } else {
      z7="#c0c0c0";
    }
    if (( hours >= 15) && (hours < 17)){
      z8=scolor;
      ztx="申";
    } else {
      z8="#c0c0c0";
    }
    if (( hours >= 17) && (hours < 19)){
      z9=scolor;
      ztx="酉";
    } else {
      z9="#c0c0c0";
    }
    if (( hours >= 19) && (hours < 21)){
      z10=scolor;
      ztx="戌";
    } else {
      z10="#c0c0c0";
    }
    if (( hours >= 21) && (hours < 23)){
      z11=scolor;
      ztx="亥";
    } else {
      z11="#c0c0c0";
    }
    if (((hours >= 23) || (hours < 1))) {
      z12=scolor;
      ztx="子";
    } else {
      z12="#c0c0c0";
    }
    var innerTim='<font style=color:'+z12+'>子</font>&nbsp;'
    +'<font style=color:'+z1+'>丑</font>&nbsp;'
    +'<font style=color:'+z2+'>寅</font>&nbsp;'
    +'<font style=color:'+z3+'>卯</font>&nbsp;'
    +'<font style=color:'+z4+'>辰</font>&nbsp;'
    +'<font style=color:'+z5+'>巳</font>&nbsp;'
    +'<font style=color:'+z6+'>午</font>&nbsp;'
    +'<font style=color:'+z7+'>未</font>&nbsp;'
    +'<font style=color:'+z8+'>申</font>&nbsp;'
    +'<font style=color:'+z9+'>酉</font>&nbsp;'
    +'<font style=color:'+z10+'>戌</font>&nbsp;'
    +'<font style=color:'+z11+'>亥</font>&nbsp;';

    this.setData({
      clock1: innerClock,
      sg3: innerTim,
      tim2: ztx
    });
  },
  /**
   * 启动定时器
   */
  startInter(){
    var that = this;
    that.data.inter = setInterval(
        function () {
          that.tick()
            // console.log('startTimer  1000毫秒后执行一次任务')
        }, 1000);    
  },

  /**
   * 结束定时器
   */
  endInter(){
    var that = this;
    that.clearInterval(that.data.inter)
  },

})
