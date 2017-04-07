var store = {
  state: {
    Foo: {
        name: '',
        bxjh:'1年',
        bfe: '',
        tbtime: '',
        zbtime: ''
    },
    Bar: { },
    Fromdata: {
      xingming: '',
      number: '',
      zhengjianType: 0,
      zhengjianNub: '',
      chushengdate: '',
      xingbie: '女' ,
      email: '',
      bbxingming: '',
      bbnumber: '',
      bbzhengjianType: 0,
      bbzhengjianNub: '',
      bbchushengdate: '',
      bbxingbie: '男' ,
      bbemail: ''
    }
  },
  setFooName (name) {
    this.state.Foo.name = name
  }, 
  setFootbtime (tbtime) {
    this.state.Foo.tbtime = tbtime
  },
  setFoozbtime (zbtime) {
    this.state.Foo.zbtime = zbtime
  },
  setFooBxjh (bxjh) {
    this.state.Foo.bxjh = bxjh
  },
  setFooBfe (bfe) {
    this.state.Foo.bfe = bfe
  },
  setFromdataxm(xingming) {
    this.state.Fromdata.xingming = xingming
  },
  setFromdatanum (number) {
    this.state.Fromdata.number = number
  },
  setFromdatazjtp (zhengjianType) {
    this.state.Fromdata.zhengjianType = zhengjianType
  },
  setFromdazjnum(zhengjianNub) {
    this.state.Fromdata.zhengjianNub = zhengjianNub
  },
  setFromdatacsrq (chushengdate) {
    this.state.Fromdata.chushengdate = chushengdate
  },
  setFromdataxb (xingbie) {
    this.state.Fromdata.xingbie = xingbie
  },
  setFromdataemil (email) {
    this.state.Fromdata.email = email
  },
   setFromdatabxm(bbxingming) {
    this.state.Fromdata.bbxingming = bbxingming
  },
  setFromdatabnum (bbnumber) {
    this.state.Fromdata.bbnumber = bbnumber
  },
  setFromdatabzjtp (bbzhengjianType) {
    this.state.Fromdata.bbzhengjianType = bbzhengjianType
  },
  setFromdazjbnum(bbzhengjianNub) {
    this.state.Fromdata.bbzhengjianNub = bbzhengjianNub
  },
  setFromdatabcsrq (bbchushengdate) {
    this.state.Fromdata.bbchushengdate = bbchushengdate
  },
  setFromdatabxb (bbxingbie) {
    this.state.Fromdata.bbxingbie = bbxingbie
  },
  setFromdatabbemil (bbemail) {
    this.state.Fromdata.bbemail = bbemail
  }
}