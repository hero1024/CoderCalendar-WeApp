// pages/hdrl/hdrl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rotate:0,
    area:"坎(水)-正北",
    detailArea:0,
    detail: '生气在西北方，天医在西南方，延年在东北方，伏位在西方。祸害在北方，六煞在东南方，五鬼在南方，绝命在东方。',
    daoDate: '',
    daoFest: ["下元水官大帝圣诞", "建生大会[此日下元解厄，水官同天地二官考校罪福]"],
    today: '',
    jdetail: ["东北延年（武曲）中吉","西北生气（贪狼）大吉","西方伏位（左辅）小吉","西南天医（巨门）次吉"],
    xdetail : ["北方祸害（禄存）小凶","东方绝命（破军）至凶","东南六煞（文曲）次凶","南方五鬼（廉贞）大凶"],
    gua: ''
  },

  initFunc () {
    var today = new Date()
    var dateutil = require('../../utils/lunar')
    var d = dateutil.Tao.fromLunar(dateutil.Lunar.fromDate(today));
    // var d = dateutil.Tao.fromLunar(dateutil.Lunar.fromYmd(2021, 10, 15));
    var l = d.getFestivals();
    var daoFest = []
    for (var i=0, j=l.length; i<j; i++){
      console.log(l[i].toFullString());
      daoFest.push(l[i].toFullString())
    }
    var weeks = ["日", "一", "二", "三", "四", "五", "六"];
    var mgua = ["离","坎", "坤", "震", "巽", "坤", "乾", "兑","艮"]
    var fgua = ["离","坎", "坤", "震", "巽", "艮", "乾", "兑","艮"]
    const last2 = today.getFullYear().toString().substring(2)
    console.log(last2); 
    const last2Num = Number(last2)
    var man = (100 - last2Num)%9
    var woman = (last2Num - 4)%9
    var daystr = today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()] 
    var gua =  mgua[man] + "（男）" + fgua[woman] +"（女）"
    this.setData({
      daoDate: d.toFullString(),
      daoFest: daoFest,
      today: daystr,
      gua: gua
    })
},

  compassFunc () {
    var that = this;
    wx.onCompassChange(function (res) {
        // 计算应偏移度数
      var rotate = 360 - res.direction.toFixed(0)
      var area = parseInt(rotate/90)
      var detailArea = rotate%90
      var detail 
      var jdetail = []
      var xdetail = []
      if(area==1){
        if(detailArea == 0) {
          area = "兑(泽)-正西"
          detail = '生气在西北方，天医在西南方，延年在东北方，伏位在西方。祸害在北方，六煞在东南方，五鬼在南方，绝命在东方。'
          jdetail = ["东北延年（武曲）中吉","西北生气（贪狼）大吉","西方伏位（左辅）小吉","西南天医（巨门）次吉"]
          xdetail = ["北方祸害（禄存）小凶","东方绝命（破军）至凶","东南六煞（文曲）次凶","南方五鬼（廉贞）大凶"]
        } else {
          area = "坤(地)-西南"
          detail = '生气在东北方，天医在西方，延年在西北方，伏位在西南方。祸害在东方，六煞在南方，五鬼在东南方，绝命在北方。'
          jdetail = ["东北生气（贪狼）大吉","西北延年（武曲）中吉","西方天医（巨门）次吉","西南伏位（左辅）小吉"]
          xdetail = ["北方绝命（破军）至凶","东方祸害（禄存）小凶","东南五鬼（廉贞）大凶","南方六煞（文曲）次凶"]
        }
      } else if (area == 2) {
        if(detailArea == 0) {
          area = "离(火)-正南"
          detail = '生气在东方，天医在东南方，延年在北方，伏位在南方。祸害在东北方，六煞在西南方，五鬼在西方，绝命在西北方。'
          jdetail = ["北方延年（武曲）中吉","东方生气（贪狼）大吉","东南天医（巨门）次吉","南方伏位（左辅）小吉"]
          xdetail = ["东北祸害（禄存）小凶","西北绝命（破军）至凶","西方五鬼（廉贞）大凶","西南六煞（文曲）次凶"]
        } else {
          area = "巽(风)-东南"
          detailArea= 90-detailArea
          detail = '生气在北方，天医在南方，延年在东方，伏位在东南方。祸害在西北方，六煞在西方，五鬼在西南方，绝命在东北方。'
          jdetail = ["北方生气（贪狼）大吉","东方延年（武曲）中吉","东南伏位（左辅）小吉","南方天医（巨门）次吉"]
          xdetail = ["东北绝命（破军）至凶","西北祸害（禄存）小凶","西方六煞（文曲）次凶","西南五鬼（廉贞）大凶"]
        }
      }else if(area==3){
        if(detailArea == 0) {
          area = "震(雷)-正东"
          detail = '生气在南方，天医在北方，延年在东南方，伏位在东方。祸害在西南方，六煞在东北方，五鬼在西北方，绝命在西方。'
          jdetail = ["北方天医（巨门）次吉","东方伏位（左辅）小吉","东南延年（武曲）中吉","南方生气（贪狼）大吉"]
          xdetail = ["东北六煞（文曲）次凶","西北五鬼（廉贞）大凶","西方绝命（破军）至凶","西南祸害（禄存）小凶"]
        } else {
          area = "艮(山)-东北"
          detail = '生气在西南方，天医在西北方，延年在西方，伏位在东北方。祸害在南方，六煞在东方，五鬼在北方，绝命在东南方。'
          jdetail = ["东北伏位（左辅）小吉","西北天医（巨门）次吉","西方延年（武曲）中吉","西南生气（贪狼）大吉"]
          xdetail = ["北方五鬼（廉贞）大凶","东方六煞（文曲）次凶","东南绝命（破军）至凶","南方祸害（禄存）小凶"]
        }
      } else {
        if(detailArea == 0) {
          area = "坎(水)-正北"
          detail = '生气在东南方，天医在东方，延年在南方，伏位在北方。祸害在西方，六煞尖西北方，五鬼在东北方，绝命在西南方。'
          jdetail = ["北方伏位（左辅）小吉","东方天医（巨门）次吉","东南生气（贪狼）大吉","南方延年（武曲）中吉"]
          xdetail = ["东北五鬼（廉贞）大凶","西北六煞（文曲）次凶","西方祸害（禄存）小凶","西南绝命（破军）至凶"]
        } else {
          area = "乾(天)-西北"
          detailArea= 90-detailArea
          detail = '生气在西方，天医在东北方，延年在西南方，伏位在西北方。祸害在东南方，六煞在北方，五鬼在东方，绝命在南方。'
          jdetail = ["东北天医（巨门）次吉","西北伏位（左辅）小吉","西方生气（贪狼）大吉","西南延年（武曲）中吉"]
          xdetail = ["北方六煞（文曲）次凶","东方五鬼（廉贞）大凶","东南祸害（禄存）小凶","南方绝命（破军）至凶"]
        }
      }
      
      var dateutil = require('../../utils/lunar')
      var d = dateutil.Tao.fromLunar(dateutil.Lunar.fromDate(new Date()));
      that.setData({
        daoDate: d.toFullString(),
        rotate:rotate,
        area: area,
        detailArea: detailArea,
        detail: detail,
        jdetail: jdetail,
        xdetail, xdetail
      })

    });
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initFunc ()
    this.compassFunc ()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})