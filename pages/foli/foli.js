// pages/foli/foli.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "daystr": '',
    "foday":0,
    "day":0,
    "gong":0,
    "shou":0,
    "xiu" : '',
    "zheng": '',
    "animal": '',
    "comment":'',
    "directors":'',
    "title":'星宿',
    "average":'凶',
    "stars":[1,2,3,4,5,6,7,8,9,10,11,12]
    
  },

  //显示日期，年月日
  showDate(){
    var today = new Date()
    var dateutil = require('../../utils/lunar')
    var d = dateutil.Foto.fromLunar(dateutil.Lunar.fromDate(today))
    // var d = dateutil.Foto.fromLunar(dateutil.Lunar.fromYmd(2021, 2, 15));
    var weeks = ["日", "一", "二", "三", "四", "五", "六"];
    var daystr = today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()] + " " + d.getLunar().getSolar().getXingZuo() +"座"
   
    var l = d.getFestivals();
    var directors = []
    for (var i=0, j=l.length; i<j; i++){
       directors.push(l[i].toFullString())
    }
    console.log(d.getGong());
    console.log(d.getShou());

    //设置数据
    this.setData({
       "daystr": daystr,
       "directors":directors,
       "foday":d.toString(),
       "day":today.getDate(),
       "gong": d.getGong(),
       "shou": d.getShou(),
       "xiu" : d.getXiu(),
       "zheng": d.getZheng(),
       "animal": d.getAnimal(),
       "average": d.getXiuLuck(),
       "comment": d.getXiuSong()
     })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.showDate()

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