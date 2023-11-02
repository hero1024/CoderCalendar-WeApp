// pages/lunar/lunar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: {
      year: '',
      month: '',
      day: '',
      yearGanZhi: '',
      yearShengXiao: '',
      yearNaYin: '',
      lunarYearInChinese: '',
      lunarMonthInChinese: '',
      lunarDayInChinese: '',
      yearZhiShui: '',
      yearGenTian: '',
      yearDeJin: '',
      yearFenBing: '',
      yearKongWang: '',
      monthGanZhi: '',
      monthShengXiao: '',
      monthNaYin: '',
      monthTaiShen: '',
      monthKongWang: '',
      dayGanZhi: '',
      dayShengXiao: '',
      dayNaYin: '',
      dayTaiShen: '',
      dayZhiShen: '',
      dayChong: '',
      dayTianShen: '',
      daySha: '',
      dayLu: '',
      dayJiShen: [],
      dayXiongSha: [],
      dayYi: [],
      dayJi: [],
      dayKongWang: '',
      dayJiuXing: '',
      prevJq: '',
      nextJq: '',
      pengZuGan: '',
      pengZuZhi: '',
      liuYao: '',
      yueXiang: '',
      yueMing: '',
      wuHou: '',
      weekInChinese: '',
      xingZuo: '',
      xiu: '',
      positionFu: '',
      positionCai: '',
      positionXi: '',
      positionYangGui: '',
      positionYinGui: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.render()
    console.log(this.data)
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

  },

  render() {
    const now = new Date()
    const state = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate(),
      yearGanZhi: '',
      yearShengXiao: '',
      yearNaYin: '',
      lunarYearInChinese: '',
      lunarMonthInChinese: '',
      lunarDayInChinese: '',
      yearZhiShui: '',
      yearGenTian: '',
      yearDeJin: '',
      yearFenBing: '',
      yearKongWang: '',
      monthGanZhi: '',
      monthShengXiao: '',
      monthNaYin: '',
      monthTaiShen: '',
      monthKongWang: '',
      dayGanZhi: '',
      dayShengXiao: '',
      dayNaYin: '',
      dayTaiShen: '',
      dayZhiShen: '',
      dayChong: '',
      dayTianShen: '',
      daySha: '',
      dayLu: '',
      dayJiShen: [],
      dayXiongSha: [],
      dayYi:[],
      dayJi: [],
      dayKongWang: '',
      dayJiuXing: '',
      prevJq: '',
      nextJq: '',
      pengZuGan: '',
      pengZuZhi: '',
      liuYao: '',
      yueXiang: '',
      yueMing: '',
      wuHou: '',
      weekInChinese: '',
      xingZuo: '',
      xiu: '',
      positionFu: '',
      positionCai: '',
      positionXi: '',
      positionYangGui: '',
      positionYinGui: ''
    }

    var dateUtil = require('../../utils/lunar')

    const solar = dateUtil.Solar.fromYmd(state.year, state.month, state.day)
  
    state.weekInChinese = solar.getWeekInChinese()
    state.xingZuo = solar.getXingZuo()
  
    const lunar = solar.getLunar()
    state.yearGanZhi = lunar.getYearInGanZhi()
    state.yearShengXiao = lunar.getYearShengXiao()
    state.yearNaYin = lunar.getYearNaYin()
    state.lunarYearInChinese = lunar.getYearInChinese()
    state.yearKongWang = lunar.getYearXunKong()
  
    state.monthGanZhi = lunar.getMonthInGanZhi()
    state.monthShengXiao = lunar.getMonthShengXiao()
    state.monthNaYin = lunar.getMonthNaYin()
    state.monthTaiShen = lunar.getMonthPositionTai()
    state.lunarMonthInChinese = lunar.getMonthInChinese()
    state.monthKongWang = lunar.getMonthXunKong()
  
    state.yueXiang = lunar.getYueXiang()
    state.wuHou = lunar.getHou() + ' ' + lunar.getWuHou()
    state.yueMing = lunar.getSeason()
  
    state.dayGanZhi = lunar.getDayInGanZhi()
    state.dayShengXiao = lunar.getDayShengXiao()
    state.dayNaYin = lunar.getDayNaYin()
    state.dayTaiShen = lunar.getDayPositionTai()
    state.pengZuGan = lunar.getPengZuGan()
    state.pengZuZhi = lunar.getPengZuZhi()
    state.dayZhiShen = lunar.getZhiXing()
    state.dayTianShen = lunar.getDayTianShen() + '(' + lunar.getDayTianShenType() + '日)'
    state.daySha = lunar.getDaySha()
    state.liuYao = lunar.getLiuYao()
    state.dayLu = lunar.getDayLu()
    state.dayJiShen = lunar.getDayJiShen()
    state.dayXiongSha = lunar.getDayXiongSha()
    state.dayYi = lunar.getDayYi()
    state.dayJi = lunar.getDayJi()
    state.lunarDayInChinese = lunar.getDayInChinese()
  
    const dayNineStar = lunar.getDayNineStar()
    state.dayJiuXing = dayNineStar.toString()
  
    const prevJq = lunar.getPrevJieQi(true)
    const prevJqSolar = prevJq.getSolar()
    state.prevJq = prevJq.getName() + '：' + prevJqSolar.toYmd() + ' ' + '周' + prevJqSolar.getWeekInChinese()
  
    const nextJq = lunar.getNextJieQi(true)
    const nextJqSolar = nextJq.getSolar()
    state.nextJq = nextJq.getName() + '：' + nextJqSolar.toYmd() + ' ' + '周' + nextJqSolar.getWeekInChinese()
  
    state.dayChong = lunar.getDayShengXiao() + '日冲' + lunar.getDayChongDesc()
    state.dayKongWang = lunar.getDayXunKong()
  
    state.xiu = lunar.getGong() + '方' + lunar.getXiu() + lunar.getZheng() + lunar.getAnimal() + '(' + lunar.getXiuLuck() + ')'
  
    state.positionXi = lunar.getPositionXiDesc()
    state.positionFu = lunar.getPositionFuDesc()
    state.positionCai = lunar.getPositionCaiDesc()
    state.positionYangGui = lunar.getPositionYangGuiDesc()
    state.positionYinGui = lunar.getPositionYinGuiDesc()
  
    const lunarYear = dateUtil.LunarYear.fromYear(lunar.getYear())
    state.yearZhiShui = lunarYear.getZhiShui()
    state.yearDeJin = lunarYear.getDeJin()
    state.yearGenTian = lunarYear.getGengTian()
    state.yearFenBing = lunarYear.getFenBing()

    this.setData({
      state:state
    });
  }
  
})