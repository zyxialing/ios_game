window.__require = function t(e, o, n) {
function i(a, s) {
if (!o[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var d = o[a] = {
exports: {}
};
e[a][0].call(d.exports, function(t) {
return i(e[a][1][t] || t);
}, d, d.exports, t, e, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
AcountDetail: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5d7a2/SxpZBvYVEsRgFJRbX", "AcountDetail");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/component/GrayNodeColor"), s = t("../../../../scripts/common/component/UIContainer"), c = t("../../../../scripts/common/config/Config"), l = t("../../../../scripts/common/config/ConstString"), d = t("../../../../scripts/common/config/GlobalVar"), p = t("../../../../scripts/common/config/User"), h = t("../../../../scripts/common/event/CommonEvent"), u = t("../../../../scripts/common/net/CommonSender"), f = t("../../../../scripts/common/utils/CmmUtils"), _ = t("../../../../scripts/framework/componects/EventComponent"), v = t("../../../../scripts/framework/defines/Enums"), y = t("../../../../scripts/framework/defines/Macros"), m = t("../../../../scripts/login/view/CommonUIHelper"), g = t("../view/InviteCheckInfoView"), b = t("./InviteEvent"), C = cc._decorator, w = C.ccclass, P = (C.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.leftTips = null;
e.label_check_color = null;
e.label_check = null;
e.label_withdrawable = null;
e.label_Balance = null;
e.label_WithdrawAmount = null;
e.node_HaveExchangeBtn = null;
e.node_NoExchangeBtn = null;
e.node_haveexchange_withdraw = null;
e.node_redeem = null;
e.withdraw_amount = null;
e.label_limitToday = null;
e.label_Rate = null;
e.Button_offline = null;
e.leftBottom = null;
e.RecordBtn = null;
e.checkBtn = null;
e.baxilimit = null;
e.chooseContainer = null;
e.withdrawableBalance = 0;
e.withdrawAmount = 0;
e.minEnableAmount = 0;
e.maxEnableAmount = 0;
e.curChooseIndex = 0;
e.withdraw_amount_limit = 0;
e.curSelectPrice = 0;
e.drawBalance = 0;
e.defaultSelectPrice = 0;
e.custom_withdraw_amount = 0;
e.accTypeMap = new Map();
e.defualtWiththdrawTypeId = 0;
e.sender = null;
return e;
}
e.prototype.addEvents = function() {
var t = this;
this.onD(b.InviteEvent.updateLeftInfo, function() {
t.updataData_balance();
});
this.onD(h.HttpEvent.updateBindCardAcount, function() {
t.refreshBind();
});
this.onD(h.HttpEvent.UpdateCheckInfo, function() {
t.CallBack_RecieveWithDraw();
});
this.onD(h.ComponentGameEvent.EditorBox_changeEnded, this.EditorBox_changeEnded.bind(this));
};
e.prototype.EditorBox_changeEnded = function(t) {
if ("withdraw_amount" == t) if ("" == this.withdraw_amount.string) {
this.curSelectPrice = this.defaultSelectPrice;
this.custom_withdraw_amount = 0;
this.chooseContainer.refresh();
} else {
var e = this.customLimit[0];
try {
e = Number.parseInt(this.withdraw_amount.string);
} catch (t) {
e = this.customLimit[0];
}
e || (e = this.customLimit[0]);
e < this.customLimit[0] && (e = this.customLimit[0]);
e > this.customLimit[1] && (e = this.customLimit[1]);
this.withdraw_amount.string = e.toString();
this.custom_withdraw_amount = e;
this.drawBalance = this.custom_withdraw_amount;
this.curSelectPrice = 0;
this.chooseContainer.refresh();
this.refresh_Limit();
}
};
e.prototype.addLocalEvents = function() {
var t = this;
this.onN(this.bindInfo.whBtn, v.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
f.CmmUtils.popTips(App.zLan.getBundleString(10390));
});
this.onN(this.bindInfo.stateBtn, v.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
m.default.showBindWidthdrawInfo(t.accTypeMap.get(t.defualtWiththdrawTypeId));
});
this.onN(this.bindInfo.bindBtn, v.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.bindInfo.bindBtn.interactable = !1;
t.bindInfo.scroll.active = !0;
});
this.onN(this.bindInfo.hideClick, v.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.bindInfo.bindBtn.interactable = !0;
t.bindInfo.scroll.active = !1;
});
this.onN(this.leftTips, v.NodeEvent.click, function() {
dispatch(b.InviteEvent.changeToPlantTrees);
});
this.onN(this.RecordBtn, v.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
m.default.showInviteRecordWeb();
});
this.onN(this.checkBtn, v.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
App.uiManager.open({
type: g.default,
bundle: y.Macro.BUNDLE_invite,
zIndex: c.ViewZOrder.UI,
args: t.serverData
});
});
this.onN(this.node_haveexchange_withdraw, v.NodeEvent.click, this.ButtonClick_WithdrawCash.bind(this));
this.onN(this.node_redeem, v.NodeEvent.click, this.ButtonClick_RedeemCash.bind(this));
this.onN(this.Button_offline, v.NodeEvent.click, this.ButtonClick_RedeemCash.bind(this));
this.onN(this.node_NoExchangeBtn, v.NodeEvent.click, this.ButtonClick_WithdrawCash.bind(this));
};
e.prototype.initNodes = function() {
if (!this.bindInfo) {
this.bindInfo = {};
this.bindInfo.stateBtn = cc.find("root/BindInfo/stateBtn", this.node);
this.bindInfo.stateBtnGray = this.bindInfo.stateBtn.getComponent(a.default);
this.bindInfo.state0 = cc.find("state0", this.bindInfo.stateBtn);
this.bindInfo.state1 = cc.find("state1", this.bindInfo.stateBtn);
this.bindInfo.label = cc.find("label", this.bindInfo.stateBtn).getComponent(cc.Label);
this.bindInfo.bindBtn = cc.find("root/BindInfo/bindBtn", this.node);
this.bindInfo.weihu = cc.find("weihu", this.bindInfo.bindBtn);
this.bindInfo.whBtn = cc.find("weihu/whBtn", this.bindInfo.bindBtn);
this.bindInfo.bindTypes = cc.find("bindType", this.bindInfo.bindBtn).children;
this.bindInfo.more = cc.find("more", this.bindInfo.bindBtn);
this.bindInfo.scroll = cc.find("scroll", this.bindInfo.bindBtn);
this.bindInfo.hideClick = cc.find("hideClick", this.bindInfo.scroll);
this.bindInfo.container = cc.find("view/moreTypes", this.bindInfo.scroll).getComponent(s.default);
this.leftTips = cc.find("root/leftBottom/leftTips", this.node);
this.label_check_color = cc.find("root/ver/Balance/check0/checkBtn/Label", this.node).getComponent(a.default);
this.label_check = cc.find("root/ver/Balance/check0/hor/check_value", this.node).getComponent(cc.Label);
this.label_withdrawable = cc.find("root/ver/Balance/check1/hor/Label_withdrawable", this.node).getComponent(cc.Label);
this.label_Balance = cc.find("root/ver/Balance/hor0/hor/Label_Balance", this.node).getComponent(cc.Label);
this.label_WithdrawAmount = cc.find("root/ver/Withdraw_Amount/Label_WithdrawAmount", this.node).getComponent(cc.Label);
this.node_HaveExchangeBtn = cc.find("root/btns/Layout", this.node);
this.node_NoExchangeBtn = cc.find("root/btns/Button_WithdrawCash", this.node);
this.node_haveexchange_withdraw = cc.find("root/btns/Layout/Button_WithdrawCash", this.node);
this.node_redeem = cc.find("root/btns/Layout/Button_Redeem", this.node);
this.withdraw_amount = cc.find("root/ver/withdraw_amount", this.node).getComponent(cc.EditBox);
this.label_limitToday = cc.find("root/leftBottom/TodayLimit/Label_Limit", this.node).getComponent(cc.Label);
this.label_Rate = cc.find("root/leftBottom/Rate/Label_Rate", this.node).getComponent(cc.Label);
this.Button_offline = cc.find("root/btns/Button_offline", this.node);
this.leftBottom = cc.find("root/leftBottom", this.node);
this.RecordBtn = cc.find("root/ver/Balance/hor0/RecordBtn", this.node);
this.checkBtn = cc.find("root/ver/Balance/check0/checkBtn", this.node);
this.chooseContainer = cc.find("root/ver/content", this.node).getComponent(s.default);
this.baxilimit = cc.find("root/baxilimit", this.node);
this.addLocalEvents();
}
};
e.prototype.InitData = function(t) {
this.initNodes();
this.sender = App.senderManager.get(u.default);
this.MyData = t;
};
e.prototype.OpenShow = function() {
this.node.active = !0;
this.refresh();
};
e.prototype.CloseShow = function() {
this.node.active = !1;
};
e.prototype.initBindTypes = function() {
var t = this.serverData.accTypes, e = App.storage.getItem(l.ConstString.default_withdraw_type_id, -1);
this.accTypeMap.clear();
for (var o = 0; o < t.length; o++) {
var n = t[o];
this.accTypeMap.set(n.id, n);
}
this.accTypeMap.has(e) || (e = -1);
if (-1 == e) {
this.defualtWiththdrawTypeId = t[0].id;
App.storage.setItem(l.ConstString.default_withdraw_type_id, this.defualtWiththdrawTypeId);
} else this.defualtWiththdrawTypeId = e;
this.bindInfo.more.active = t.length > 1;
this.bindInfo.container.initData(t, this.createItem.bind(this));
this.updateCurWithdrawType();
};
e.prototype.createItem = function(t, e) {
var o = this, n = cc.find("types", t), i = cc.find("weihu", t);
n.getChildByName(e.data.id.toString()).active = !0;
i.active = 0 == e.data.state;
t.off(v.NodeEvent.click);
t.on(v.NodeEvent.click, function() {
o.defualtWiththdrawTypeId = e.data.id;
App.storage.setItem(l.ConstString.default_withdraw_type_id, o.defualtWiththdrawTypeId);
o.updateCurWithdrawType();
o.bindInfo.bindBtn.interactable = !0;
o.bindInfo.scroll.active = !1;
});
};
e.prototype.updateCurWithdrawType = function() {
for (var t = this.bindInfo.bindTypes, e = 0; e < t.length; e++) t[e].name == this.defualtWiththdrawTypeId.toString() ? t[e].active = !0 : t[e].active = !1;
var o = this.accTypeMap.get(this.defualtWiththdrawTypeId);
this.customLimit = o.limit;
this.bindInfo.weihu.active = 0 == o.state;
this.refreshBind();
this.initBtns();
};
e.prototype.initBtns = function() {
var t = this.serverData.amounts;
this.defaultSelectPrice = t[0];
this.curSelectPrice = this.defaultSelectPrice;
this.chooseContainer.initData(t, this.createChooseItem.bind(this), null, !0);
};
e.prototype.createChooseItem = function(t, e) {
var o = this, n = cc.find("choosedSp", t);
cc.find("Label", t).getComponent(cc.Label).string = d.GlobalVar.money_symbol + f.CmmUtils.NumberToHallString(e.data);
if (e.data == this.curSelectPrice) {
n.active = !0;
this.drawBalance = this.curSelectPrice;
this.refresh_Limit();
} else n.active = !1;
t.off(v.NodeEvent.click);
t.on(v.NodeEvent.click, function() {
o.curSelectPrice = e.data;
o.withdraw_amount.string = "";
o.custom_withdraw_amount = 0;
o.chooseContainer.refresh();
});
};
e.prototype.update_WithdrawAmount = function() {
var t = 0;
this.serverData && (t = this.serverData.fee);
this.withdrawAmount = this.drawBalance;
var e = Math.floor(this.withdrawAmount - this.withdrawAmount * t);
this.label_WithdrawAmount.string = d.GlobalVar.money_symbol + f.CmmUtils.NumberToHallString(e);
};
e.prototype.updataData_balance = function() {
this.label_Balance.string = d.GlobalVar.money_symbol + f.CmmUtils.NumberToHallString(this.MyData.balance);
};
e.prototype.refresh = function() {
this.updataData_balance();
this.Button_offline.active = App.OfflineMode;
p.default.self.isBozhu && (this.leftTips.active = !1);
if (d.GlobalVar.hideWithdrawLimit) {
this.leftBottom.active = !1;
this.baxilimit.active = !0;
} else {
this.baxilimit.active = !1;
this.leftBottom.active = !0;
}
this.refreshAcctypes();
};
e.prototype.CreateHttp_Transfers = function() {
this.sender.Send_Transfers(function(t) {
console.log(JSON.stringify(t));
});
};
e.prototype.refreshAcctypes = function() {
var t = this;
this.sender.Send_Withdraw_share(function(e) {
t.serverData = e.data;
t.MyData.balance = e.data.balance;
dispatch(b.InviteEvent.updateLeftInfo);
t.CallBack_RecieveWithDraw();
});
};
e.prototype.refreshBind = function() {
this.sender.Send_Withdraw(this.updateBindCard.bind(this), this.defualtWiththdrawTypeId);
};
e.prototype.updateBindCard = function(t) {
this.cardData = t.data;
if (this.cardData.account && "" != this.cardData.account) {
this.bindInfo.label.string = this.cardData.account;
this.bindInfo.state0.active = !1;
this.bindInfo.state1.active = !0;
this.bindInfo.stateBtnGray.setGray(!0);
} else if (this.cardData.phone && "" != this.cardData.phone) {
this.bindInfo.label.string = this.cardData.phone;
this.bindInfo.state0.active = !1;
this.bindInfo.state1.active = !0;
this.bindInfo.stateBtnGray.setGray(!0);
} else {
this.bindInfo.label.string = App.zLan.getBundleString(10171);
this.bindInfo.state0.active = !0;
this.bindInfo.state1.active = !1;
this.bindInfo.stateBtnGray.setGray(!1);
}
};
e.prototype.CallBack_RecieveWithDraw = function() {
console.error("data.isHaveChange = " + this.serverData.isHaveChange + " data.inputEnable = " + this.serverData.inputEnable);
if (this.serverData.isHaveChange) {
this.node_HaveExchangeBtn.active = !0;
this.node_NoExchangeBtn.active = !1;
} else {
this.node_HaveExchangeBtn.active = !1;
this.node_NoExchangeBtn.active = !0;
}
this.serverData.inputEnable ? this.withdraw_amount.node.active = !0 : this.withdraw_amount.node.active = !1;
this.MyData.todayLimit = this.serverData.limit;
this.MyData.fee = this.serverData.fee;
this.maxEnableAmount = this.serverData.limit;
var t = this.serverData.amounts[this.serverData.amounts.length - 1];
this.serverData.limit > t ? this.maxEnableAmount = t : this.maxEnableAmount = this.serverData.limit;
this.label_check.node.parent.parent.active = this.serverData.isUnlock;
this.label_withdrawable.node.parent.parent.active = this.serverData.isUnlock;
var e = this.serverData.unlockGold + this.serverData.lockGold;
this.label_check.string = d.GlobalVar.money_symbol + f.CmmUtils.NumberToHallString(e);
this.label_withdrawable.string = d.GlobalVar.money_symbol + f.CmmUtils.NumberToHallString(this.serverData.withdrawGold);
this.label_check_color.setGray(this.serverData.unlockGold > 0);
this.initBindTypes();
};
e.prototype.refresh_Limit = function() {
this.label_limitToday.string = f.CmmUtils.NumberToString_Country(this.MyData.todayLimit, d.GlobalVar.countryCode);
this.label_Rate.string = f.CmmUtils.saveDecimal(2, (100 * this.MyData.fee).toString(), !1) + "%";
this.update_WithdrawAmount();
};
e.prototype.ButtonClick_Record = function() {
App.globalAudio.playButtonClick();
m.default.showInviteRecordWeb();
};
e.prototype.ButtonClick_Check = function() {
App.globalAudio.playButtonClick();
App.uiManager.open({
type: g.default,
bundle: y.Macro.BUNDLE_invite,
zIndex: c.ViewZOrder.UI,
args: this.serverData
});
};
e.prototype.isEnableWithdraw = function() {
var t = function() {};
if (this.withdrawAmount <= 0) {
f.CmmUtils.popTipsBack(App.zLan.getBundleString(10346), t);
return !1;
}
if (this.withdrawAmount > this.maxEnableAmount) {
f.CmmUtils.popTipsBack(App.zLan.getBundleString(10346), t);
return !1;
}
if (this.withdrawAmount > this.MyData.balance) {
f.CmmUtils.popTipsBack(App.zLan.getBundleString(10348), t);
return !1;
}
if (!this.isRightCard(this.cardData)) {
App.tips.show(App.zLan.getBundleString(10170));
return !1;
}
return !0;
};
e.prototype.ButtonClick_WithdrawCash = function() {
var t = this;
App.globalAudio.playButtonClick();
this.isEnableWithdraw() && this.sender.Send_WithdrawApis_share(function(e) {
if (0 == e.ret) {
f.CmmUtils.popTips(e.desc);
t.MyData.todayLimit = e.data.limit;
t.maxEnableAmount = t.MyData.todayLimit;
t.refresh_Limit();
t.MyData.balance = e.data.balance;
t.serverData.unlockGold = e.data.unlockGold;
t.serverData.lockGold = e.data.lockGold;
t.serverData.withdrawGold = e.data.withdrawGold;
t.serverData.limit = e.data.limit;
dispatch(b.InviteEvent.updateLeftInfo);
dispatch(h.HttpEvent.UpdateCheckInfo);
} else 0 == e.type ? App.tips.show(e.desc) : f.CmmUtils.popTips(e.desc);
}, {
amount: this.withdrawAmount,
accType: this.defualtWiththdrawTypeId
});
};
e.prototype.ButtonClick_RedeemCash = function() {
var t = this;
App.globalAudio.playButtonClick();
this.isEnableWithdraw() && this.sender.Send_ChangeToGame(function(e) {
if (0 == e.ret) {
App.tips.show(e.desc);
t.MyData.todayLimit = e.data.limit;
t.maxEnableAmount = t.MyData.todayLimit;
t.refresh_Limit();
t.MyData.balance = e.data.balance;
dispatch(b.InviteEvent.updateLeftInfo);
} else 0 == e.type ? App.tips.show(e.desc) : f.CmmUtils.popTips(e.desc);
}, this.withdrawAmount);
};
e.prototype.isRightCard = function(t) {
return !!t && 0 != t.account.length && 0 != t.accountName.length;
};
return r([ w ], e);
}(_.default));
o.default = P;
cc._RF.pop();
}, {
"../../../../scripts/common/component/GrayNodeColor": void 0,
"../../../../scripts/common/component/UIContainer": void 0,
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/config/ConstString": void 0,
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/login/view/CommonUIHelper": void 0,
"../view/InviteCheckInfoView": "InviteCheckInfoView",
"./InviteEvent": "InviteEvent"
} ],
AdsServiceView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b3e82N36lZIAawdRmv4hjhz", "AdsServiceView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/event/CommonEvent"), s = t("../../../../scripts/framework/core/ui/UIView"), c = t("../../../../scripts/framework/defines/Enums"), l = t("../../../../scripts/sdk/SdkManager"), d = cc._decorator, p = d.ccclass, h = (d.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mainNode = null;
e.tweenScale = null;
e.Button_Close = null;
e.Button_Goto = null;
e.url = null;
e.title = null;
e.content = null;
e.titleLabel = null;
e.contentLabel = null;
return e;
}
e.getPrefabUrl = function() {
return "prefabs/AdsServiceView";
};
e.prototype.onLoad = function() {
this.url = this.args.url;
this.title = this.args.title;
this.content = this.args.content;
this.mainNode = cc.find("Main", this.node);
this.Button_Close = cc.find("Button_Close", this.mainNode);
this.Button_Goto = cc.find("Button_Goto", this.mainNode);
this.titleLabel = cc.find("Main/Label_Title", this.node).getComponent(cc.Label);
this.contentLabel = cc.find("Main/ScrollView/view/Container/Content", this.node).getComponent(cc.RichText);
t.prototype.onLoad.call(this);
this.OpenShow();
};
e.prototype.addEvents = function() {
var t = this;
this.onN(this.Button_Close, c.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.close();
});
this.onN(this.Button_Goto, c.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
l.default.openUrl(t.url);
});
};
e.prototype.OpenShow = function() {
this.mainNode.active = !0;
this.mainNode.scale = 0;
cc.tween(this.mainNode).to(.5, {
scale: 1
}, cc.easeBackOut()).start();
this.titleLabel.string = this.title;
this.contentLabel.string = this.content;
};
e.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
dispatch(a.CommonEvent.Close_Panel);
};
return r([ p ], e);
}(s.default));
o.default = h;
cc._RF.pop();
}, {
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/framework/core/ui/UIView": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/sdk/SdkManager": void 0
} ],
CardModel_PDD: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b1756RQkGhPyJ086tWtrFJz", "CardModel_PDD");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/config/GlobalVar"), s = t("../../../../scripts/common/utils/CmmUtils"), c = cc._decorator, l = c.ccclass, d = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_Btn = null;
e.node_Guan = null;
e.node_Pg = null;
e.label_Value = null;
e.node_Bg = null;
e.node_Type = [];
e.m_Index = 0;
e.m_Data = null;
e.m_Callback = null;
e.tween_Guang = null;
e.tween_Bg = null;
e.tween_Pg = null;
return e;
}
e.prototype.Init = function(t, e) {
this.m_Index = t;
this.m_Callback = e;
this.ResetForBegin();
this.showType(0);
};
e.prototype.ResetForBegin = function() {
this.node_Bg.scale = 1;
this.node_Bg.active = !0;
this.node_Pg.active = !1;
this.node_Pg.scaleX = 0;
this.node_Btn.active = !1;
this.node_Guan.active = !1;
this.tween_Guang && this.tween_Guang.stop();
};
e.prototype.SetState = function(t, e) {
this.showType(e);
this.tween_Guang && this.tween_Guang.stop();
if (t) {
this.node_Btn.active = !0;
this.node_Guan.active = !0;
this.node_Guan.opacity = 128;
this.tween_Guang = cc.tween(this.node_Guan).to(.5, {
opacity: 255
}).to(.5, {
opacity: 128
}).union().repeatForever().start();
} else {
this.node_Btn.active = !1;
this.node_Guan.active = !1;
}
};
e.prototype.ShowResult = function(t) {
var e = this;
this.label_Value.string = a.GlobalVar.money_symbol + s.CmmUtils.NumberToString_Country(t, a.GlobalVar.countryCode);
this.tween_Bg && this.tween_Bg.stop();
this.tween_Pg && this.tween_Pg.stop();
this.node_Pg.scaleX = 0;
this.node_Pg.scaleY = 1.1;
this.node_Pg.active = !0;
this.node_Bg.scaleX = 1;
this.node_Bg.scaleY = 1;
this.tween_Bg = cc.tween(this.node_Bg).delay(1).call(function() {
e.node_Guan.active = !1;
}).to(.15, {
scaleX: 0,
scaleY: 1.1
}).start();
this.tween_Pg = cc.tween(this.node_Pg).delay(1.15).to(.15, {
scaleX: 1,
scaleY: 1
}).start();
};
e.prototype.ButtonClick_Choose = function() {
this.node_Btn.active = !1;
this.m_Callback && this.m_Callback(this.m_Index);
};
e.prototype.showType = function(t) {
for (var e = 0; e < this.node_Type.length; e++) {
this.node_Type[e].active = e == t;
}
};
r([ d(cc.Node) ], e.prototype, "node_Btn", void 0);
r([ d(cc.Node) ], e.prototype, "node_Guan", void 0);
r([ d(cc.Node) ], e.prototype, "node_Pg", void 0);
r([ d(cc.Label) ], e.prototype, "label_Value", void 0);
r([ d(cc.Node) ], e.prototype, "node_Bg", void 0);
r([ d(cc.Node) ], e.prototype, "node_Type", void 0);
return r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0
} ],
ElementModel_Pdd: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3aea0GRy8BAWoUkLn+a8VGn", "ElementModel_Pdd");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_Main = null;
e.node_Types = [];
e.eleType = 0;
e.tweenMove = null;
e.tweenScale = null;
return e;
}
e.prototype.start = function() {};
e.prototype.setElementType = function(t) {
this.eleType = t;
for (var e = 0; e < this.node_Types.length; e++) {
this.node_Types[e].active = e == t;
}
this.ClearTween();
this.node_Main.active = !0;
this.node.active = !0;
};
e.prototype.SetMoveToTarPos = function(t, e) {
this.ClearTween();
this.tweenMove = cc.tween(this.node).to(e, {
position: t
}, cc.easeBackOut()).start();
};
e.prototype.SetMoveToTarPos2 = function(t, e) {
this.ClearTween();
this.tweenMove = cc.tween(this.node).to(e, {
position: t
}).start();
};
e.prototype.ShowAddElement = function() {
this.node_Main.scale = 0;
this.tweenScale = cc.tween(this.node_Main).delay(1.2).to(.3, {
scale: 2
}).delay(2).to(.3, {
scale: 0
}).start();
};
e.prototype.ClearTween = function() {
this.tweenMove && this.tweenMove.stop();
this.tweenScale && this.tweenScale.stop();
};
r([ c(cc.Node) ], e.prototype, "node_Main", void 0);
r([ c(cc.Node) ], e.prototype, "node_Types", void 0);
return r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
InviteCheckInfoView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "acc1bG1hxBIWZa2Csor/S9S", "InviteCheckInfoView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/config/GlobalVar"), s = t("../../../../scripts/common/event/CommonEvent"), c = t("../../../../scripts/common/net/CommonSender"), l = t("../../../../scripts/framework/core/ui/UIView"), d = t("../../../../scripts/framework/defines/Enums"), p = cc._decorator, h = p.ccclass, u = (p.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sender = App.senderManager.get(c.default);
return e;
}
e.getPrefabUrl = function() {
return "prefabs/InviteCheckInfoView";
};
e.prototype.onLoad = function() {
this.initNode();
t.prototype.onLoad.call(this);
this.initUIEvent();
this.refresh();
};
e.prototype.initNode = function() {
this.Button_close = cc.find("Button_close", this.node);
this.tips1 = cc.find("Background/scroll/view/content/richContent", this.node).getComponent(cc.RichText);
this.lockMoney = cc.find("Background/hor/lockMoney", this.node).getComponent(cc.Label);
this.unlockMoney = cc.find("Background/hor2/unlockMoney", this.node).getComponent(cc.Label);
this.tips2 = cc.find("Background/hor/tips2", this.node).getComponent(cc.Label);
this.collectBtn = cc.find("Background/collectBtn", this.node).getComponent(cc.Button);
this.tips1Layout = cc.find("Background/scroll/view/content", this.node).getComponent(cc.Layout);
};
e.prototype.initUIEvent = function() {
var t = this;
this.onN(this.Button_close, d.NodeEvent.click, function() {
t.close();
});
this.onN(this.collectBtn.node, d.NodeEvent.click, function() {
t.sender.Send_ShareGetLockGold(t.getCallBack.bind(t));
});
};
e.prototype.getCallBack = function(t) {
console.error(t.data);
this.args.lockGold = t.data.lockGold;
this.args.unlockGold = t.data.unlockGold;
this.args.withdrawGold = t.data.withdrawGold;
dispatch(s.HttpEvent.UpdateCheckInfo);
this.close();
};
e.prototype.refresh = function() {
console.error("+++++++" + this.args);
this.tips1.string = this.args.tips1;
this.tips2.string = this.args.tips2;
this.lockMoney.string = a.GlobalVar.money_symbol + this.args.lockGold;
this.unlockMoney.string = a.GlobalVar.money_symbol + this.args.unlockGold;
this.collectBtn.interactable = this.args.unlockGold > 0;
this.tips1._updateRichText();
var t = .5 * (322 - this.tips1.node.getContentSize().height);
t < 0 && (t = 0);
this.tips1Layout.paddingTop = t;
};
return r([ h ], e);
}(l.default));
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/framework/core/ui/UIView": void 0,
"../../../../scripts/framework/defines/Enums": void 0
} ],
InviteEntry: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "98fd9IilClCbaEXFqrButuA", "InviteEntry");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../scripts/framework/core/entry/Entry"), s = t("../../../scripts/framework/defines/Decorators"), c = t("../../../scripts/framework/defines/Macros"), l = t("./view/InviteView");
(function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.addNetHandler = function() {};
e.prototype.removeNetHandler = function() {};
e.prototype.loadResources = function(t) {
t();
};
e.prototype.initData = function() {};
e.prototype.pauseMessageQueue = function() {};
e.prototype.resumeMessageQueue = function() {};
e.prototype.onUnloadBundle = function() {
t.prototype.onUnloadBundle.call(this);
};
e.prototype.onEnter = function(e) {
this.userData = e;
App.uiManager.closeBundleView(c.Macro.BUNDLE_RESOURCES);
Log.d("--------------onEnterLogin--------------");
t.prototype.onEnter.call(this, e);
};
e = r([ s.registerEntry("InviteEntry", c.Macro.BUNDLE_invite, l.default) ], e);
})(a.Entry);
cc._RF.pop();
}, {
"../../../scripts/framework/core/entry/Entry": void 0,
"../../../scripts/framework/defines/Decorators": void 0,
"../../../scripts/framework/defines/Macros": void 0,
"./view/InviteView": "InviteView"
} ],
InviteEvent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2e303hdXA9Jo42pIHb6cm4u", "InviteEvent");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.InviteEvent = void 0;
(function(t) {
t.changeToWithdraw = "changeToWithdraw";
t.changeToPlantTrees = "changeToPlantTrees";
t.updateLeftInfo = "updateLeftInfo";
})(o.InviteEvent || (o.InviteEvent = {}));
cc._RF.pop();
}, {} ],
InviteRewardModel_PDD: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a105bfBh+VFoJAgSqmP3OM0", "InviteRewardModel_PDD");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/event/CommonEvent"), s = t("../../../../scripts/framework/componects/EventComponent"), c = cc._decorator, l = c.ccclass, d = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_TargetPreson = null;
e.label_Reward = null;
e.tarPerson = 0;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
};
e.prototype.addEvents = function() {
this.onD(a.CommonEvent.Change_Language, this.notifyChanged.bind(this));
};
e.prototype.Init = function(t, e) {
this.tarPerson = t;
this.label_Reward.string = e.toString();
this.label_TargetPreson.string = t + " " + App.zLan.getBundleString(10334);
};
e.prototype.notifyChanged = function() {
0 != this.tarPerson && (this.label_TargetPreson.string = this.tarPerson + " " + App.zLan.getBundleString(10334));
};
r([ d(cc.Label) ], e.prototype, "label_TargetPreson", void 0);
r([ d(cc.Label) ], e.prototype, "label_Reward", void 0);
return r([ l ], e);
}(s.default);
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0
} ],
InviteView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "362274nVeBHg7DUpQTgwKhe", "InviteView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/component/SwitchBtns"), s = t("../../../../scripts/common/config/Config"), c = t("../../../../scripts/common/config/User"), l = t("../../../../scripts/common/event/CommonEvent"), d = t("../../../../scripts/common/net/CommonSender"), p = t("../../../../scripts/common/utils/CmmUtils"), h = t("../../../../scripts/framework/core/ui/GameView"), u = t("../../../../scripts/framework/defines/Decorators"), f = t("../../../../scripts/framework/defines/Enums"), _ = t("../../../../scripts/framework/defines/Macros"), v = t("../../../../scripts/sdk/AppInfo"), y = t("../others/InviteEvent"), m = t("../others/invite_page_base"), g = t("./AdsServiceView"), b = cc._decorator, C = b.ccclass, w = (b.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Top = null;
e.ChooseLanguage = null;
e.Button_Exit = null;
e.Button_Customer = null;
e.Button_Language = null;
e.Button_Agent = null;
e.pageCodes = null;
e.switchBtns = null;
e.sender = App.senderManager.get(d.default);
return e;
}
e.getPrefabUrl = function() {
return "prefabs/InviteView";
};
e.prototype.onLoad = function() {
this.initNode();
t.prototype.onLoad.call(this);
this.initUIEvent();
this.refresh();
this.recruitUrl = this.args.recruitUrl;
this.adminTg = this.args.adminTg;
console.error(this.args);
this.audioHelper.stopMusic();
dispatch(l.CommonEvent.Close_Panel);
dispatch(l.CommonEvent.Open_Show_Hide_laba, !1, 0);
};
e.prototype.initNode = function() {
this.pageCodes = [];
for (var t = 0; t < 5; t++) this.pageCodes.push(cc.find("root/content/page" + t, this.node).getComponent(m.default));
this.switchBtns = cc.find("Layout_L", this.Top).getComponent(a.default);
this.Button_Exit = cc.find("Button_Exit", this.Top);
this.Button_Customer = cc.find("Layout_R/Button_Customer", this.Top);
this.Button_Language = cc.find("Layout_R/Button_Language", this.Top);
var e = this.args.openDefaultPage;
c.default.self.isBozhu && (e = 1);
this.switchBtns.init(e, this.selectCB.bind(this));
this.Button_Agent = cc.find("Layout_R/Button_Agent", this.Top);
};
e.prototype.addEvents = function() {
var t = this;
this.onD(l.CommonEvent.Close_Panel, this.onShowPanel.bind(this));
this.onD(y.InviteEvent.changeToWithdraw, function(e) {
e && (t.args = e);
t.switchBtns.init(2, t.selectCB.bind(t));
});
this.onD(y.InviteEvent.changeToPlantTrees, function(e) {
e && (t.args = e);
t.switchBtns.init(3, t.selectCB.bind(t));
});
this.onN(this.Button_Agent, f.NodeEvent.click, function() {
t.sender.Send_ShareExtend1(function(e) {
App.uiManager.open({
type: g.default,
bundle: _.Macro.BUNDLE_invite,
zIndex: s.ViewZOrder.UI,
args: {
title: App.zLan.getBundleString(99900031),
content: e.data.adminText,
url: t.args.adminTg
}
});
});
});
};
e.prototype.onShowPanel = function() {
var t = this;
if (p.CmmUtils.stringNotEmpty(this.recruitUrl)) {
this.sender.Send_ShareExtend1(function(e) {
App.uiManager.open({
type: g.default,
bundle: _.Macro.BUNDLE_invite,
zIndex: s.ViewZOrder.UI,
args: {
title: App.zLan.getBundleString(99900042),
content: e.data.recruitText,
url: t.args.recruitUrl
}
});
});
this.recruitUrl = null;
} else if (p.CmmUtils.stringNotEmpty(this.adminTg)) {
this.sender.Send_ShareExtend1(function(e) {
App.uiManager.open({
type: g.default,
bundle: _.Macro.BUNDLE_invite,
zIndex: s.ViewZOrder.UI,
args: {
title: App.zLan.getBundleString(99900031),
content: e.data.adminText,
url: t.args.adminTg
}
});
});
this.adminTg = null;
}
};
e.prototype.initUIEvent = function() {
var t = this;
this.onN(this.Button_Exit, f.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
dispatch(l.CommonEvent.Open_Show_Hide_laba, !0, 0);
dispatch(l.CommonEvent.Exit_Invite);
App.entryManager.enterBundle(_.Macro.BUNDLE_RESOURCES);
});
this.onN(this.Button_Customer, f.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
v.default.showCustomService();
});
this.onN(this.Button_Language, f.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.ChooseLanguage.active = !0;
});
this.onN(this.ChooseLanguage, f.NodeEvent.click, function() {
t.ChooseLanguage.active = !1;
});
};
e.prototype.selectCB = function(t) {
for (var e = 0; e < this.pageCodes.length; e++) this.pageCodes[e].hide();
this.pageCodes[t].show(this.args);
};
e.prototype.refresh = function() {
v.default.isHaveTwoLanguage() ? this.Button_Language.active = !0 : this.Button_Language.active = !1;
this.Button_Agent.active = p.CmmUtils.stringNotEmpty(this.args.adminTg);
if (c.default.self.isBozhu) {
this.switchBtns.selectNodes[3].active = !1;
this.switchBtns.selectNodes[4].active = !1;
}
};
r([ u.inject("root/Top", cc.Node) ], e.prototype, "Top", void 0);
r([ u.inject("root/ChooseLanguage", cc.Node) ], e.prototype, "ChooseLanguage", void 0);
return r([ C ], e);
}(h.default));
o.default = w;
cc._RF.pop();
}, {
"../../../../scripts/common/component/SwitchBtns": void 0,
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/core/ui/GameView": void 0,
"../../../../scripts/framework/defines/Decorators": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/sdk/AppInfo": void 0,
"../others/InviteEvent": "InviteEvent",
"../others/invite_page_base": "invite_page_base",
"./AdsServiceView": "AdsServiceView"
} ],
Item_DrawCashBtn: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a81d0Cfla9Pu73Lhk/6P8O2", "Item_DrawCashBtn");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/config/GlobalVar"), s = t("../../../../scripts/common/utils/CmmUtils"), c = cc._decorator, l = c.ccclass, d = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.labels_Cash = [];
e.NormalNode = null;
e.CheckNode = null;
e.m_CallBack_Btn = null;
e.m_Index = 0;
return e;
}
e.prototype.setData = function(t, e) {
this._data = t;
this.m_Index = t.id;
this.m_CallBack_Btn = e;
for (var o = 0; o < this.labels_Cash.length; o++) this.labels_Cash[o].string = a.GlobalVar.money_symbol + s.CmmUtils.NumberToString_Country(t.amount, a.GlobalVar.countryCode);
};
e.prototype.setChoose = function(t) {
this.NormalNode.active = !t;
this.CheckNode.active = t;
};
e.prototype.ButtonClick_Choose = function() {
this.m_CallBack_Btn && this.m_CallBack_Btn(this.m_Index, this._data.amount);
};
r([ d(cc.Label) ], e.prototype, "labels_Cash", void 0);
r([ d(cc.Node) ], e.prototype, "NormalNode", void 0);
r([ d(cc.Node) ], e.prototype, "CheckNode", void 0);
return r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0
} ],
Item_Invite: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bd884Uk935H1p5FCelbY+Fn", "Item_Invite");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/component/ListView/ItemRender"), s = t("../../../../scripts/common/config/GlobalVar"), c = t("../../../../scripts/common/config/User"), l = cc._decorator, d = l.ccclass, p = l.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.diNode = null;
e.label_Number = null;
e.label_InviteTime = null;
e.label_PlayerID = null;
e.label_TotalAmount = null;
e.label_NotClaimable = null;
e.label_CanBeClaimed = null;
e.kyc_Verified = null;
e.kyc_NotVerified = null;
e.stateNode_CanBeClaimed = null;
e.color_CanBeClaimed = cc.Color.WHITE;
e.color_NotClaimable = cc.Color.WHITE;
e.node_Recharged = null;
e.node_NotRecharged = null;
return e;
}
e.prototype.onLoad = function() {
this.node.on(a.default.EVENT, this.onRender, this);
};
e.prototype.start = function() {
var t = this.getComponent(a.default);
null != t && this.onRender(t.data);
};
e.prototype.onRender = function(t) {
console.log(JSON.stringify(t));
this.label_Number.string = t.order;
this.label_PlayerID.string = t.uid;
this.label_InviteTime.string = t.agentTime;
c.default.self.isBozhu ? this.label_TotalAmount.string = "0" : this.label_TotalAmount.string = s.GlobalVar.money_symbol + t.total;
this.label_NotClaimable.string = s.GlobalVar.money_symbol + t.unClaim;
this.label_CanBeClaimed.string = s.GlobalVar.money_symbol + t.claim;
t.claim > 0 ? this.stateNode_CanBeClaimed.color = this.color_CanBeClaimed : this.stateNode_CanBeClaimed.color = this.color_NotClaimable;
if (0 == t.isRecharge) {
this.node_NotRecharged.active = !0;
this.node_Recharged.active = !1;
} else {
this.node_NotRecharged.active = !1;
this.node_Recharged.active = !0;
}
0 == t.complaint ? this.diNode.opacity = 1 : this.diNode.opacity = 255;
};
r([ p(cc.Node) ], e.prototype, "diNode", void 0);
r([ p(cc.Label) ], e.prototype, "label_Number", void 0);
r([ p(cc.Label) ], e.prototype, "label_InviteTime", void 0);
r([ p(cc.Label) ], e.prototype, "label_PlayerID", void 0);
r([ p(cc.Label) ], e.prototype, "label_TotalAmount", void 0);
r([ p(cc.Label) ], e.prototype, "label_NotClaimable", void 0);
r([ p(cc.Label) ], e.prototype, "label_CanBeClaimed", void 0);
r([ p(cc.Node) ], e.prototype, "kyc_Verified", void 0);
r([ p(cc.Node) ], e.prototype, "kyc_NotVerified", void 0);
r([ p(cc.Node) ], e.prototype, "stateNode_CanBeClaimed", void 0);
r([ p(cc.Color) ], e.prototype, "color_CanBeClaimed", void 0);
r([ p(cc.Color) ], e.prototype, "color_NotClaimable", void 0);
r([ p(cc.Node) ], e.prototype, "node_Recharged", void 0);
r([ p(cc.Node) ], e.prototype, "node_NotRecharged", void 0);
return r([ d ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../../../scripts/common/component/ListView/ItemRender": void 0,
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/config/User": void 0
} ],
PDDPageService: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a66ebL3ns9CMIKvMVXfUEKy", "PDDPageService");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/config/GlobalVar"), s = t("../../../../scripts/common/event/CommonEvent"), c = t("../../../../scripts/common/net/CommonSender"), l = t("../../../../scripts/common/utils/CmmUtils"), d = t("./CardModel_PDD"), p = t("./InviteRewardModel_PDD"), h = t("./RewardTC_PDD"), u = cc._decorator, f = u.ccclass, _ = u.property, v = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mainNode = null;
e.label_Limit = null;
e.label_Chances = [];
e.progress_invite = null;
e.node_CardParent = null;
e.rewardTC_PDD = null;
e.prefab_CardModel = null;
e.inviteRewardModels = [];
e.rewardPointsConfig = [ .2, .5, .8 ];
e.cardModels = [];
e.playType = 0;
e.slectedCardID = 0;
e.data_pdd = null;
return e;
}
e.prototype.OpenShow = function() {
this.mainNode.active = !0;
this.CreateHttpRequest_InitPDD();
};
e.prototype.CloseShow = function() {
this.mainNode.active = !1;
};
e.prototype.Init = function(t) {
var e = this;
this.sender = App.senderManager.get(c.default);
this.MyData = t;
this.cardModels = [];
this.node_CardParent.destroyAllChildren();
for (var o = 0; o < 6; o++) {
var n = cc.instantiate(this.prefab_CardModel);
n.setParent(this.node_CardParent);
var i = n.getComponent(d.default);
i.Init(o, function(t) {
e.Callback_SelectCard(t);
});
this.cardModels.push(i);
}
};
e.prototype.refreshLimit = function() {
this.label_Limit.string = l.CmmUtils.NumberToString_Country(this.MyData.todayLimit, a.GlobalVar.countryCode);
};
e.prototype.CreateHttpRequest_InitPDD = function() {
var t = this;
this.sender.Send_PDDInit(function(e) {
if (0 == e.ret) {
t.data_pdd = e.data;
t.MyData.todayLimit = t.data_pdd.limit;
t.refreshLimit();
t.label_Chances[0].string = t.data_pdd.spin;
t.label_Chances[1].string = t.data_pdd.seniorSpin;
t.playType = 0;
t.data_pdd.seniorSpin > 0 && (t.playType = 1);
var o = !1;
(t.data_pdd.spin > 0 || t.data_pdd.seniorSpin > 0) && (o = !0);
for (var n = 0; n < t.cardModels.length; n++) t.cardModels[n].SetState(o, t.playType);
var i = t.data_pdd.graduation[t.data_pdd.graduation.length - 1] + 10;
t.data_pdd.players > i && (i = t.data_pdd.players + 10);
var r = 0;
if (t.data_pdd.graduation.length > t.inviteRewardModels.length) for (n = 0; n < t.data_pdd.graduation.length - t.inviteRewardModels.length && t.data_pdd.players > t.data_pdd.graduation[n]; n++) r++;
for (n = 0; n < t.inviteRewardModels.length; n++) t.inviteRewardModels[n].Init(t.data_pdd.graduation[r + n], t.data_pdd.chance[r + n]);
var a;
a = t.data_pdd.players <= t.data_pdd.graduation[r + 0] ? t.data_pdd.players / t.data_pdd.graduation[r + 0] * t.rewardPointsConfig[0] : t.data_pdd.players <= t.data_pdd.graduation[r + 1] ? t.rewardPointsConfig[0] + (t.data_pdd.players - t.data_pdd.graduation[r + 0]) / (t.data_pdd.graduation[r + 1] - t.data_pdd.graduation[r + 0]) * (t.rewardPointsConfig[1] - t.rewardPointsConfig[0]) : t.data_pdd.players <= t.data_pdd.graduation[r + 2] ? t.rewardPointsConfig[1] + (t.data_pdd.players - t.data_pdd.graduation[r + 1]) / (t.data_pdd.graduation[r + 2] - t.data_pdd.graduation[r + 1]) * (t.rewardPointsConfig[2] - t.rewardPointsConfig[1]) : t.rewardPointsConfig[2] + (i - t.data_pdd.graduation[r + 2]) / (t.data_pdd.players - t.data_pdd.graduation[r + 2]) * (.9 - t.rewardPointsConfig[2]);
t.progress_invite.progress = a;
} else App.tips.show(App.zLan.getBundleString(10214));
});
};
e.prototype.CreateHttpRequest_GetPDD = function() {
var t = this;
this.sender.Send_PDDSpin(function(e) {
if (0 == e.ret) {
if (0 == t.playType) {
t.data_pdd.spin >= 1 && (t.data_pdd.spin = t.data_pdd.spin - 1);
t.label_Chances[0].string = t.data_pdd.spin + "";
} else {
t.data_pdd.seniorSpin >= 1 && (t.data_pdd.seniorSpin = t.data_pdd.seniorSpin - 1);
t.label_Chances[1].string = t.data_pdd.seniorSpin + "";
0 == t.data_pdd.seniorSpin && (t.playType = 0);
}
var o = !1;
(t.data_pdd.spin > 0 || t.data_pdd.seniorSpin > 0) && (o = !0);
t.cardModels[t.slectedCardID].ShowResult(e.data.reward);
t.scheduleOnce(function() {
t.MyData.todayLimit = t.MyData.todayLimit + e.data.reward;
t.rewardTC_PDD.OpenShow(e.data.reward, function() {
t.refreshLimit();
for (var e = 0; e < t.cardModels.length; e++) {
t.cardModels[e].ResetForBegin();
t.cardModels[e].SetState(o, t.playType);
}
});
}, 1.5);
} else App.tips.show(App.zLan.getBundleString(10214));
}, this.playType);
};
e.prototype.Callback_SelectCard = function(t) {
this.slectedCardID = t;
dispatch(s.CommonEvent.EventMaskAll, 3);
for (var e = 0; e < this.cardModels.length; e++) {
var o = this.cardModels[e];
e != t && o.SetState(!1, this.playType);
}
this.CreateHttpRequest_GetPDD();
};
r([ _(cc.Node) ], e.prototype, "mainNode", void 0);
r([ _(cc.Label) ], e.prototype, "label_Limit", void 0);
r([ _(cc.Label) ], e.prototype, "label_Chances", void 0);
r([ _(cc.ProgressBar) ], e.prototype, "progress_invite", void 0);
r([ _(cc.Node) ], e.prototype, "node_CardParent", void 0);
r([ _(h.default) ], e.prototype, "rewardTC_PDD", void 0);
r([ _(cc.Prefab) ], e.prototype, "prefab_CardModel", void 0);
r([ _(p.default) ], e.prototype, "inviteRewardModels", void 0);
return r([ f ], e);
}(cc.Component);
o.default = v;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"./CardModel_PDD": "CardModel_PDD",
"./InviteRewardModel_PDD": "InviteRewardModel_PDD",
"./RewardTC_PDD": "RewardTC_PDD"
} ],
PDDSecondPageService: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cf39cFoaBlCqZhYJ3zL0Hqx", "PDDSecondPageService");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/config/GlobalVar"), s = t("../../../../scripts/common/event/CommonEvent"), c = t("../../../../scripts/common/net/CommonSender"), l = t("../../../../scripts/common/utils/CmmUtils"), d = t("../../../../scripts/common/utils/RandomUtil"), p = t("../../../../scripts/framework/componects/EventComponent"), h = t("./InviteEvent"), u = t("./PDDSecondRewardTC"), f = t("./poolModelForComponent_PDD"), _ = cc._decorator, v = _.ccclass, y = _.property, m = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mainNode = null;
e.notCanClick = null;
e.rewardTC = null;
e.node_WithdrawBtn = null;
e.node_Btn_Withdraw = null;
e.node_Btn_Free = null;
e.node_Btn_SpinMask = null;
e.node_State3 = null;
e.label_Money = null;
e.label_FreeCount = null;
e.richText_rule = null;
e.node_WithdrawState0 = null;
e.node_WithdrawState1 = null;
e.node_Tip_Withdraw = null;
e.label_WithDrawTip = null;
e.tip_Chance = null;
e.label_WithdrawLeftTime = null;
e.modelPool = null;
e.roll_kuang = null;
e.roll_Mask = null;
e.zhe0 = null;
e.zhe1 = null;
e.node_GameWheel = null;
e.node_MainWheel = null;
e.node_WheelArea = null;
e.label_Configs = [];
e.outEleTypeConfigs = [ [ 3, 0 ], [ 3, 0, 4 ], [ 3, 0, 4, 5 ] ];
e.rollKuangWidth = [ 268, 486 ];
e.maskWidth = [ 256, 474 ];
e.zhe0PosConfigs = [ cc.v3(-103, 0, 0), cc.v3(-212, 0, 0) ];
e.zhe1PosConfigs = [ cc.v3(103, 0, 0), cc.v3(212, 0, 0) ];
e.curPlayCount = 0;
e.curTime = 0;
e.lastTime = 0;
e.leftTimeStr = "Withdrawals will be invalid after {0}";
e.luckyLeftTimeStr = "Good luck card in effect : {0}";
e.elementList = [];
e.stopPosX = 0;
e.eleWidth = 120;
e.winType = 0;
e.winMoney = 0;
e.curMoney = 0;
e.resultMoney = 0;
e.spinLeftCount = 0;
e.curState = 1;
e.config_needDay = 7;
e.config_needFriend = 3;
e.config_needFriendTotalMoney = 1e3;
e.config_needTargetMoney = 1e3;
e.curFriend = 0;
e.tweenScale_WithdrawBtn = null;
e.tweenScale_BtnFree = null;
e.tween_DelayTimeShowShuoming = null;
e.maxSpeed = 15;
e.tweenAddSpeed = null;
e.isCanClick = !0;
e.canClickTime = 0;
e.rollNeedTime = 3;
e.rollSpeed = 0;
e.isRolling = !1;
e.rollBeginTime = 0;
e.tween_WheelScale = null;
e.tween_WheelRotation = null;
e.curEleTypeConfigs = [];
e.curEleTypeId = 0;
e.timeDown = 0;
return e;
}
e.prototype.onLoad = function() {
this.onD(s.CommonEvent.Change_Language, this.notifyChanged.bind(this));
this.onD(s.CommonEvent.Exit_Invite, this.Exit_Invite.bind(this));
};
e.prototype.notifyChanged = function() {
var t = App.zLan.getBundleString(99900032);
this.richText_rule.string = String.format(t, "<color=#ECC44C>" + a.GlobalVar.money_symbol + l.CmmUtils.NumberToHallString(this.config_needTargetMoney) + "</c>");
var e = App.zLan.getBundleString(99900033);
this.label_WithDrawTip.string = String.format(e, this.config_needFriend, this.config_needDay, l.CmmUtils.NumberToHallString(this.config_needTargetMoney));
var o = App.zLan.getBundleString(99900013);
null != o && (this.leftTimeStr = o);
this.label_WithdrawLeftTime.string = String.format(this.leftTimeStr, l.CmmUtils.fromdate_00Hour(this.timeDown));
var n = App.zLan.getBundleString(99900023);
null != n && (this.luckyLeftTimeStr = n);
};
e.prototype.Init = function() {
this.sender = App.senderManager.get(c.default);
};
e.prototype.OpenShow = function() {
this.mainNode.active = !0;
this.notCanClick.active = !1;
this.node_GameWheel.active = !1;
this.node_WithdrawBtn.active = !1;
this.node_Tip_Withdraw.active = !1;
this.node_WithdrawState0.active = !1;
this.node_WithdrawState1.active = !0;
this.node_Btn_SpinMask.active = !0;
var t = App.zLan.getBundleString(99900013);
null != t && (this.leftTimeStr = t);
var e = App.zLan.getBundleString(99900023);
null != e && (this.luckyLeftTimeStr = e);
this.CreateHttpRequest_InitPDD();
};
e.prototype.CloseShow = function() {
this.mainNode.active = !1;
this.tween_DelayTimeShowShuoming && this.tween_DelayTimeShowShuoming.stop();
this.tweenScale_BtnFree && this.tweenScale_BtnFree.stop();
};
e.prototype.Exit_Invite = function() {
this.tween_DelayTimeShowShuoming && this.tween_DelayTimeShowShuoming.stop();
this.tweenScale_BtnFree && this.tweenScale_BtnFree.stop();
};
e.prototype.CreateHttpRequest_InitPDD = function() {
var t = this;
this.sender.Send_SharePDDInitData(function(e) {
Log.e(e);
t.curState = e.data.status;
t.RefreshState();
t.timeDown = e.data.leftTime;
t.refreshTimeDown();
t.config_needTargetMoney = e.data.target;
var o = App.zLan.getBundleString(99900032);
t.richText_rule.string = String.format(o, "<color=#ECC44C>" + a.GlobalVar.money_symbol + l.CmmUtils.NumberToHallString(e.data.target) + "</c>");
var n = e.data.prompt;
t.config_needDay = n[0];
t.config_needFriend = n[1];
t.config_needFriendTotalMoney = n[2];
var i = App.zLan.getBundleString(99900033);
t.label_WithDrawTip.string = String.format(i, t.config_needFriend, t.config_needDay, l.CmmUtils.NumberToHallString(t.config_needFriendTotalMoney));
t.spinLeftCount = e.data.balance;
t.curMoney = e.data.amount;
t.curState < 2 && t.PlayAnimation_BtnScale();
t.RefreshCurMoney();
t.label_FreeCount.string = e.data.balance;
t.ClearElement();
t.curPlayCount = 3;
t.CreateElement_Init();
});
};
e.prototype.ButtonClick_Withdraw = function() {
var t = this;
App.globalAudio.playAddCash();
if (this.curState <= 1) {
this.tween_DelayTimeShowShuoming && this.tween_DelayTimeShowShuoming.stop();
this.node_Tip_Withdraw.active = !0;
this.tween_DelayTimeShowShuoming = cc.tween({
a: 0
}).delay(8).call(function() {
t.node_Tip_Withdraw.active = !1;
}).start();
} else this.sender.Send_ShareGiftPDDWithdraw(function(e) {
Log.e("******Send_ShareGiftPDDWithdraw****>>>>");
Log.e(e);
if (0 == e.data.type) t.sender.Send_ShareGiftInit(function(t) {
dispatch(h.InviteEvent.changeToWithdraw, t.data);
}); else if (1 == e.data.type) {
t.tween_DelayTimeShowShuoming && t.tween_DelayTimeShowShuoming.stop();
t.node_Tip_Withdraw.active = !0;
t.tween_DelayTimeShowShuoming = cc.tween({
a: 0
}).delay(8).call(function() {
t.node_Tip_Withdraw.active = !1;
}).start();
} else if (2 == e.data.type) {
var o = App.zLan.getBundleString(99900038);
l.CmmUtils.popTips(o);
}
});
};
e.prototype.ButtonClick_WithDrawBtn_TipTC = function() {
this.node_WithdrawBtn.active = !1;
this.RefreshState();
this.ButtonClick_Withdraw();
};
e.prototype.ButtonClick_OpenShuoming = function() {
var t = this;
this.tween_DelayTimeShowShuoming && this.tween_DelayTimeShowShuoming.stop();
this.tip_Chance.active = !0;
this.tween_DelayTimeShowShuoming = cc.tween({
a: 0
}).delay(5).call(function() {
t.tip_Chance.active = !1;
}).start();
};
e.prototype.ButtonClick_Free = function() {
var t = this;
App.globalAudio.playButtonClick();
if (!(this.spinLeftCount <= 0)) {
this.SetDelayToCanClick(4);
this.sender.Send_ShareGiftPDDGet(function(e) {
t.winMoney = e.data.win;
t.winType = 0;
t.curState = e.data.status;
t.spinLeftCount = e.data.balance;
t.resultMoney = e.data.amount;
t.label_FreeCount.string = t.spinLeftCount.toString();
t.StopAnimation_BtnScale();
t.PlayRoll();
}, 0);
}
};
e.prototype.PlayRoll = function() {
var t = this;
this.tweenAddSpeed && this.tweenAddSpeed.stop();
this.rollSpeed = 0;
var e = {
s: 0
};
this.tweenAddSpeed = cc.tween(e).to(.3, {
s: this.maxSpeed
}, {
easing: "sineIn",
onUpdate: function() {
t.rollSpeed = e.s;
}
}).start();
this.rollBeginTime = this.curTime;
this.isRolling = !0;
};
e.prototype.update = function(t) {
this.curTime += t;
if (!this.isCanClick && this.canClickTime <= this.curTime) {
this.isCanClick = !0;
this.notCanClick.active = !1;
}
if (this.lastTime + 1 < this.curTime) {
this.lastTime = this.curTime;
this.refreshTimeDown();
}
this.isRolling && this.showRolling();
};
e.prototype.showRolling = function() {
var t = this;
if (this.rollBeginTime + this.rollNeedTime > this.curTime) for (var e = 0; e < this.elementList.length; e++) {
var o = (r = this.elementList[e]).node.position;
r.node.position = cc.v3(o.x + this.rollSpeed, 0, 0);
if (r.node.position.x >= this.stopPosX) {
this.elementList.splice(0, 1);
var n = this.elementList[this.elementList.length - 1].node.position.x - this.eleWidth;
r.node.position = cc.v3(n, 0, 0);
var i = this.getCurEleValue();
r.setElementType(i);
this.elementList.push(r);
}
} else {
this.isRolling = !1;
for (e = 0; e < this.elementList.length; e++) {
o = (r = this.elementList[e]).node.position;
r.node.position = cc.v3(o.x + this.rollSpeed, 0, 0);
}
this.CreateElement_Result();
for (e = 0; e < this.elementList.length; e++) {
var r = this.elementList[e], a = cc.v3(this.eleWidth * (10 - e), 0, 0);
0 == this.winMoney && (a = cc.v3(this.eleWidth * (10 - e - .5), 0, 0));
r.SetMoveToTarPos(a, 3.5);
}
this.scheduleOnce(function() {
for (var e = 0; e < 7; e++) {
t.modelPool.wDestroy(t.elementList[0]);
t.elementList.splice(0, 1);
}
if (t.winMoney > 0) {
t.SetDelayToCanClick(9);
t.showWheel();
} else t.RefreshState();
}, 3.6);
this.SetDelayToCanClick(4);
}
};
e.prototype.showWheel = function() {
var t = this;
this.tween_WheelScale && this.tween_WheelScale.stop();
this.tween_WheelRotation && this.tween_WheelRotation.stop();
this.node_GameWheel.active = !0;
this.node_MainWheel.scale = 0;
this.node_WheelArea.angle = 30;
var e, o = [], n = d.RandomUtil.randomRange(0, 5), i = 60 * n - 2160;
e = this.winMoney.toString().split(".")[1].length;
for (var r = 1, a = 0; a < e; a++) r *= 10;
if (0 == this.winType || 1 == this.winType || 2 == this.winType) for (a = 0; a < 6; a++) {
var s = d.RandomUtil.randomRange(1, r) / r;
o.push(s);
} else if (3 == this.winType) for (a = 0; a < 6; a++) {
s = d.RandomUtil.randomRange(1 - r, 0) / r;
o.push(s);
}
o[n] = this.winMoney;
var c = o[0], p = 0;
for (a = 1; a < o.length; a++) if ((s = o[a]) > c) {
c = s;
p = a;
}
if (5 != p) {
o[p] = o[5];
o[5] = c;
n == p ? i = -1860 : 5 == n && (i = 60 * p - 2160);
}
for (a = 0; a < this.label_Configs.length; a++) this.label_Configs[a].string = l.CmmUtils.saveDecimal(e, o[a].toString(), !0);
this.SetDelayToCanClick(8.2);
this.tween_WheelScale = cc.tween(this.node_MainWheel).to(.3, {
scale: 1
}, cc.easeBackOut()).delay(7.5).to(.3, {
scale: 0
}, cc.easeBackIn()).start();
this.tween_WheelRotation = cc.tween(this.node_WheelArea).delay(1).to(6, {
angle: i
}, cc.easeSineInOut()).start();
this.scheduleOnce(function() {
t.node_GameWheel.active = !1;
t.SetDelayToCanClick(3.5);
var e = {
type: 0,
content: t.winMoney,
eleType: -1
};
t.rewardTC.OpenShow(e, function() {
var e = {
value: t.curMoney
};
cc.tween(e).to(.5, {
value: t.resultMoney
}, {
easing: "sineOut",
onUpdate: function() {
t.curMoney = e.value;
t.RefreshCurMoney();
}
}).call(function() {
t.curMoney = t.resultMoney;
t.RefreshCurMoney();
}).start();
t.PlayAnimation_BtnScale();
if (2 == t.curState) {
var o = {
type: 3,
content: "",
eleType: 0
};
t.scheduleOnce(function() {
t.rewardTC.OpenShow(o, function() {
t.node_WithdrawBtn.active = !0;
t.PlayAnimation_BtnWithdraw();
});
}, .5);
}
});
}, 8.1);
};
e.prototype.callback_AddEle = function(t) {
for (var e = this, o = 3; o < this.elementList.length; o++) {
var n = this.elementList[o], i = cc.v3(n.node.position.x - this.eleWidth, 0, 0);
n.SetMoveToTarPos2(i, .5);
}
this.setCurEleValuesConfig();
this.PlayChangKuangWidth();
this.scheduleOnce(function() {
for (var o = e.elementList.length - 1; o >= 3; o--) {
var n = e.elementList[o], i = cc.v3((3 - o) * e.eleWidth, 0, 0);
n.node.position = i;
3 == o ? n.setElementType(t) : n.setElementType(e.elementList[o - 1].eleType);
}
e.PlayAnimation_BtnScale();
}, .5);
};
e.prototype.RefreshCurMoney = function() {
this.label_Money.string = l.CmmUtils.NumberForceAddCurrencyString(l.CmmUtils.saveDecimal(2, this.curMoney.toString(), !0));
};
e.prototype.ClearElement = function() {
for (var t = 0; t < this.elementList.length; t++) null != this.elementList[t] && this.modelPool.wDestroy(this.elementList[t]);
this.elementList = [];
this.roll_Mask.destroyAllChildren();
};
e.prototype.CreateElement_Init = function() {
this.curEleTypeId = 0;
this.setCurEleValuesConfig();
this.setKuang();
for (var t = 0; t < 7; t++) {
var e = this.modelPool.wInstantiate(this.roll_Mask);
e.node.position = cc.v3(this.eleWidth * (3 - t), 0, 0);
var o = this.getCurEleValue();
e.setElementType(o);
this.elementList.push(e);
}
this.stopPosX = this.elementList[0].node.position.x + this.eleWidth;
};
e.prototype.CreateElement_Result = function() {
var t = this.curEleTypeConfigs.indexOf(0);
this.curEleTypeId = (this.curEleTypeConfigs.length + t - 3) % this.curEleTypeConfigs.length;
for (var e = this.elementList[this.elementList.length - 1].node.position.x - this.eleWidth, o = 0; o < 7; o++) {
var n = this.modelPool.wInstantiate(this.roll_Mask);
n.node.position = cc.v3(e - this.eleWidth * o, 0, 0);
var i = this.getCurEleValue();
3 == o && (i = this.winType);
n.setElementType(i);
this.elementList.push(n);
}
};
e.prototype.setCurEleValuesConfig = function() {
this.curEleTypeConfigs = this.outEleTypeConfigs[0];
0 == this.curPlayCount ? this.curEleTypeConfigs = this.outEleTypeConfigs[0] : 1 == this.curPlayCount ? this.curEleTypeConfigs = this.outEleTypeConfigs[1] : this.curEleTypeConfigs = this.outEleTypeConfigs[2];
};
e.prototype.getCurEleValue = function() {
var t = this.curEleTypeConfigs[this.curEleTypeId];
this.curEleTypeId = (this.curEleTypeId + 1) % this.curEleTypeConfigs.length;
return t;
};
e.prototype.PlayChangKuangWidth = function() {
var t = this;
if (this.roll_kuang.width != this.rollKuangWidth[1]) {
var e = {
value: 0
};
cc.tween(e).to(.5, {
value: 218
}, {
easing: "sineOut",
onUpdate: function() {
t.roll_Mask.width = t.maskWidth[0] + e.value;
t.roll_kuang.width = t.rollKuangWidth[0] + e.value;
t.zhe0.position = cc.v3(t.zhe0PosConfigs[0].x - e.value / 2, t.zhe0PosConfigs[0].y, t.zhe0PosConfigs[0].z);
t.zhe1.position = cc.v3(t.zhe1PosConfigs[0].x + e.value / 2, t.zhe1PosConfigs[0].y, t.zhe1PosConfigs[0].z);
}
}).call(function() {
t.setKuang();
}).start();
}
};
e.prototype.setKuang = function() {
if (0 == this.curPlayCount) {
this.roll_Mask.width = this.maskWidth[0];
this.roll_kuang.width = this.rollKuangWidth[0];
this.zhe0.position = this.zhe0PosConfigs[0];
this.zhe1.position = this.zhe1PosConfigs[0];
} else {
this.roll_Mask.width = this.maskWidth[1];
this.roll_kuang.width = this.rollKuangWidth[1];
this.zhe0.position = this.zhe0PosConfigs[1];
this.zhe1.position = this.zhe1PosConfigs[1];
}
};
e.prototype.RefreshState = function() {
if (this.curState <= 1) {
this.node_State3.active = !1;
this.node_Btn_SpinMask.active = !1;
this.node_WithdrawState0.active = !1;
this.node_WithdrawState1.active = !0;
} else if (2 == this.curState) {
this.node_State3.active = !1;
this.node_Btn_SpinMask.active = !0;
this.node_WithdrawState0.active = !0;
this.node_WithdrawState1.active = !1;
this.StopAnimation_BtnScale();
} else {
this.node_State3.active = !0;
this.node_Btn_SpinMask.active = !0;
this.node_WithdrawState0.active = !0;
this.node_WithdrawState1.active = !1;
}
};
e.prototype.refreshTimeDown = function() {
if (-1 != this.timeDown) {
this.label_WithdrawLeftTime.string = String.format(this.leftTimeStr, l.CmmUtils.fromdate_00Hour(this.timeDown));
this.timeDown--;
}
};
e.prototype.SetDelayToCanClick = function(t) {
void 0 === t && (t = 0);
this.notCanClick.active = !0;
this.canClickTime = this.curTime + t;
this.isCanClick = !1;
};
e.prototype.PlayAnimation_BtnScale = function() {
this.tweenScale_BtnFree && this.tweenScale_BtnFree.stop();
this.node_Btn_Free.scale = 1;
this.spinLeftCount > 0 && (this.tweenScale_BtnFree = cc.tween(this.node_Btn_Free).to(.5, {
scale: 1.05
}).to(.5, {
scale: 1
}).union().repeatForever().start());
};
e.prototype.PlayAnimation_BtnWithdraw = function() {
this.tweenScale_WithdrawBtn && this.tweenScale_WithdrawBtn.stop();
this.node_Btn_Withdraw.scale = 1;
this.tweenScale_WithdrawBtn = cc.tween(this.node_Btn_Withdraw).to(.5, {
scale: 1.05
}).to(.5, {
scale: 1
}).union().repeatForever().start();
};
e.prototype.StopAnimation_BtnScale = function() {
this.tweenScale_BtnFree && this.tweenScale_BtnFree.stop();
this.node_Btn_Free.scale = 1;
};
r([ y(cc.Node) ], e.prototype, "mainNode", void 0);
r([ y(cc.Node) ], e.prototype, "notCanClick", void 0);
r([ y(u.default) ], e.prototype, "rewardTC", void 0);
r([ y(cc.Node) ], e.prototype, "node_WithdrawBtn", void 0);
r([ y(cc.Node) ], e.prototype, "node_Btn_Withdraw", void 0);
r([ y(cc.Node) ], e.prototype, "node_Btn_Free", void 0);
r([ y(cc.Node) ], e.prototype, "node_Btn_SpinMask", void 0);
r([ y(cc.Node) ], e.prototype, "node_State3", void 0);
r([ y(cc.Label) ], e.prototype, "label_Money", void 0);
r([ y(cc.Label) ], e.prototype, "label_FreeCount", void 0);
r([ y(cc.RichText) ], e.prototype, "richText_rule", void 0);
r([ y(cc.Node) ], e.prototype, "node_WithdrawState0", void 0);
r([ y(cc.Node) ], e.prototype, "node_WithdrawState1", void 0);
r([ y(cc.Node) ], e.prototype, "node_Tip_Withdraw", void 0);
r([ y(cc.Label) ], e.prototype, "label_WithDrawTip", void 0);
r([ y(cc.Node) ], e.prototype, "tip_Chance", void 0);
r([ y(cc.Label) ], e.prototype, "label_WithdrawLeftTime", void 0);
r([ y(f.default) ], e.prototype, "modelPool", void 0);
r([ y(cc.Node) ], e.prototype, "roll_kuang", void 0);
r([ y(cc.Node) ], e.prototype, "roll_Mask", void 0);
r([ y(cc.Node) ], e.prototype, "zhe0", void 0);
r([ y(cc.Node) ], e.prototype, "zhe1", void 0);
r([ y(cc.Node) ], e.prototype, "node_GameWheel", void 0);
r([ y(cc.Node) ], e.prototype, "node_MainWheel", void 0);
r([ y(cc.Node) ], e.prototype, "node_WheelArea", void 0);
r([ y(cc.Label) ], e.prototype, "label_Configs", void 0);
return r([ v ], e);
}(p.default);
o.default = m;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/common/utils/RandomUtil": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0,
"./InviteEvent": "InviteEvent",
"./PDDSecondRewardTC": "PDDSecondRewardTC",
"./poolModelForComponent_PDD": "poolModelForComponent_PDD"
} ],
PDDSecondRewardTC: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "12af3kAKatPk57lCKYhN7k6", "PDDSecondRewardTC");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./ElementModel_Pdd"), s = cc._decorator, c = s.ccclass, l = s.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_Zhezhao = null;
e.node_Main = null;
e.node_gold = null;
e.label_Money = null;
e.label_luckyTimeDown = null;
e.elePrefab = null;
e.elementModel = null;
e.node_Finish = null;
e.node_Particle = null;
e.labelSuccess = null;
e.tween_Show = null;
e.tween_SuccessLabel = null;
return e;
}
e.prototype.OpenShow = function(t, e) {
var o = this;
this.tween_Show && this.tween_Show.stop();
if (null == this.elementModel) {
var n = cc.instantiate(this.elePrefab);
n.setParent(this.node_Main);
n.active = !1;
this.elementModel = n.getComponent(a.default);
}
if (0 == t.type) {
this.label_Money.string = t.content;
this.node_gold.active = !0;
this.label_luckyTimeDown.node.active = !1;
this.elementModel.node.active = !1;
this.node_Finish.active = !1;
this.node_gold.position = cc.v3(260, 0, 0);
this.node_gold.scale = 0;
this.tween_Show = cc.tween(this.node_gold).to(.5, {
scale: 2
}, cc.easeBackOut()).delay(2).to(.5, {
scale: .5,
position: cc.v3(260, 185, 0)
}).start();
this.scheduleOnce(function() {
o.CloseShow();
e();
}, 3.05);
} else if (1 == t.type) {
this.label_luckyTimeDown.string = t.content;
this.node_gold.active = !1;
this.label_luckyTimeDown.node.active = !0;
this.elementModel.node.active = !1;
this.node_Finish.active = !1;
this.label_luckyTimeDown.node.position = cc.v3(260, 20, 0);
this.label_luckyTimeDown.node.scale = 0;
this.tween_Show = cc.tween(this.label_luckyTimeDown.node).to(.5, {
scale: 2
}, cc.easeBackOut()).delay(2).to(.5, {
scale: 1,
position: cc.v3(260, 115, 0)
}).start();
this.scheduleOnce(function() {
e();
o.CloseShow();
}, 3.05);
} else if (2 == t.type) {
this.node_gold.active = !1;
this.label_luckyTimeDown.node.active = !1;
this.elementModel.node.active = !0;
this.node_Finish.active = !1;
this.elementModel.node.position = cc.v3(328, -150, 0);
this.elementModel.setElementType(t.eleType);
this.tween_Show = cc.tween(this.elementModel.node).delay(1).to(.5, {
position: cc.v3(260, 20, 0)
}).call(function() {
e();
}).start();
this.scheduleOnce(function() {
o.CloseShow();
}, 3);
} else if (3 == t.type) {
Log.e("--------333333");
this.node_gold.active = !1;
this.label_luckyTimeDown.node.active = !1;
this.elementModel.node.active = !1;
this.node_Finish.active = !0;
this.node_Particle.active = !0;
this.node_Finish.position = cc.v3(260, 0, 0);
this.node_Finish.scale = 0;
this.labelSuccess.node.scale = 5;
this.labelSuccess.node.opacity = 0;
this.tween_Show = cc.tween(this.node_Finish).to(.5, {
scale: 1
}, cc.easeSineOut()).delay(2.5).call(function() {
o.node_Particle.active = !1;
}).to(.5, {
scale: .2,
position: cc.v3(260, 178, 0)
}).call(function() {
e();
}).start();
this.tween_SuccessLabel && this.tween_SuccessLabel.stop();
this.tween_SuccessLabel = cc.tween(this.labelSuccess.node).delay(.7).call(function() {
o.labelSuccess.node.opacity = 255;
}).to(.3, {
scale: 1
}).delay(1.5).to(.3, {
scale: 0
}).start();
this.scheduleOnce(function() {
o.CloseShow();
}, 3.6);
}
this.node_Zhezhao && (this.node_Zhezhao.active = !0);
this.node_Main.active = !0;
};
e.prototype.CloseShow = function() {
this.node_Zhezhao && (this.node_Zhezhao.active = !1);
this.node_Main.active = !1;
};
r([ l(cc.Node) ], e.prototype, "node_Zhezhao", void 0);
r([ l(cc.Node) ], e.prototype, "node_Main", void 0);
r([ l(cc.Node) ], e.prototype, "node_gold", void 0);
r([ l(cc.Label) ], e.prototype, "label_Money", void 0);
r([ l(cc.Label) ], e.prototype, "label_luckyTimeDown", void 0);
r([ l(cc.Prefab) ], e.prototype, "elePrefab", void 0);
r([ l(cc.Node) ], e.prototype, "node_Finish", void 0);
r([ l(cc.Node) ], e.prototype, "node_Particle", void 0);
r([ l(cc.Label) ], e.prototype, "labelSuccess", void 0);
return r([ c ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./ElementModel_Pdd": "ElementModel_Pdd"
} ],
ProgressTipNode: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "73dcfGsM7BDCLAlEzIKEfBs", "ProgressTipNode");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.beginPosX = 0;
e.endPosX = 0;
e.centenPointsPosX = [];
e.centenPointsProgress = [];
return e;
}
e.prototype.UpdateData = function(t) {
var e = 0, o = (this.centenPointsPosX[0] - this.beginPosX) / (this.endPosX - this.beginPosX), n = this.beginPosX;
if (t < 1) for (var i = this.beginPosX, r = 0; r < this.centenPointsProgress.length; r++) {
if (r > 0) {
e = this.centenPointsProgress[r - 1];
i = this.centenPointsPosX[r - 1];
}
o = this.centenPointsProgress[r];
if (t >= e && t < o) {
n = i + (t - e) / (o - e) * (this.centenPointsPosX[r] - i);
break;
}
} else n = this.endPosX;
this.node.position = cc.v3(n, this.node.position.y, this.node.position.z);
};
r([ c(cc.Float) ], e.prototype, "beginPosX", void 0);
r([ c(cc.Float) ], e.prototype, "endPosX", void 0);
r([ c({
type: cc.Float
}) ], e.prototype, "centenPointsPosX", void 0);
r([ c({
type: cc.Float
}) ], e.prototype, "centenPointsProgress", void 0);
return r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
RewardTC_PDD: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9630667KtpHmqXJLjhRnqtb", "RewardTC_PDD");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/config/GlobalVar"), s = t("../../../../scripts/common/utils/CmmUtils"), c = cc._decorator, l = c.ccclass, d = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_Zhezhao = null;
e.node_Main = null;
e.label_Value = null;
e.tween_Show = null;
return e;
}
e.prototype.OpenShow = function(t, e) {
var o = this;
this.label_Value.string = a.GlobalVar.money_symbol + s.CmmUtils.NumberToString_Country(t, a.GlobalVar.countryCode);
this.node_Zhezhao && (this.node_Zhezhao.active = !0);
this.tween_Show && this.tween_Show.stop();
this.node_Main.scale = 0;
this.node_Main.active = !0;
this.tween_Show = cc.tween(this.node_Main).to(.5, {
scale: 1
}, cc.easeBackOut()).start();
this.scheduleOnce(function() {
e && e();
o.CloseShow();
}, 3);
};
e.prototype.CloseShow = function() {
this.node_Zhezhao && (this.node_Zhezhao.active = !1);
this.node_Main.active = !1;
};
r([ d(cc.Node) ], e.prototype, "node_Zhezhao", void 0);
r([ d(cc.Node) ], e.prototype, "node_Main", void 0);
r([ d(cc.Label) ], e.prototype, "label_Value", void 0);
return r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0
} ],
TaskInviteModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "01d53y4ewpNc6yAIdV0K4tF", "TaskInviteModel");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/config/GlobalVar"), s = t("../../../../scripts/common/event/CommonEvent"), c = t("../../../../scripts/framework/componects/EventComponent"), l = cc._decorator, d = l.ccclass, p = l.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_Target = null;
e.label_Reward = null;
e.node_CanCollect = null;
e.node_Collected = null;
e.node_Normal = null;
e.node_Btn = null;
e.m_Callback = null;
e.m_Index = 0;
e.tarPerson = null;
return e;
}
e.prototype.Init = function(t, e) {
this.m_Index = t;
this.m_Callback = e;
};
e.prototype.addEvents = function() {
this.onD(s.CommonEvent.Change_Language, this.notifyChanged.bind(this));
};
e.prototype.notifyChanged = function() {
this.label_Target && this.tarPerson && (this.label_Target.string = this.tarPerson + " " + App.zLan.getBundleString(10334));
};
e.prototype.GetFlyBeginNode = function() {
return this.label_Reward.node;
};
e.prototype.SetData = function(t, e, o, n) {
this.tarPerson = t;
this.label_Target.string = t + " " + App.zLan.getBundleString(10334);
this.label_Reward.string = a.GlobalVar.money_symbol + e;
if (n < t) {
this.node_Normal.active = !0;
this.node_CanCollect.active = !1;
this.node_Collected.active = !1;
this.node_Btn.active = !1;
} else if (0 == o) {
this.node_Normal.active = !1;
this.node_CanCollect.active = !0;
this.node_Collected.active = !1;
this.node_Btn.active = !0;
} else {
this.node_Normal.active = !1;
this.node_CanCollect.active = !1;
this.node_Collected.active = !0;
this.node_Btn.active = !1;
}
};
e.prototype.ButtonClick_Collect = function() {
this.node_Btn.active = !1;
this.m_Callback(this.m_Index);
};
r([ p(cc.Label) ], e.prototype, "label_Target", void 0);
r([ p(cc.Label) ], e.prototype, "label_Reward", void 0);
r([ p(cc.Node) ], e.prototype, "node_CanCollect", void 0);
r([ p(cc.Node) ], e.prototype, "node_Collected", void 0);
r([ p(cc.Node) ], e.prototype, "node_Normal", void 0);
r([ p(cc.Node) ], e.prototype, "node_Btn", void 0);
return r([ d ], e);
}(c.default);
o.default = h;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0
} ],
TaskInviteService: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f972f6gncRJWqUafIZ4d7Gn", "TaskInviteService");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/net/CommonSender"), s = t("../../../../scripts/common/utils/CmmUtils"), c = t("./InviteEvent"), l = t("./ProgressTipNode"), d = t("./TaskInviteModel"), p = cc._decorator, h = p.ccclass, u = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.m_Node_Main = null;
e.m_ProgressBar = null;
e.m_ProgressTipNode = null;
e.taskInviteModels = [];
e.progressConfigPoints = [ 0, .07, .24, .42, .59, .77, 1 ];
e.maxCount = 100;
e.tarInvitePersonConfigs = [];
e.collectID = 0;
e.label = null;
e.count_Test = 0;
e.flyEffectPrefab = null;
e.node_FlyPos_End = null;
e.node_FlyParent = null;
e.node_Heidi = null;
e.tween_Heidi = null;
return e;
}
e.prototype.Init = function(t) {
var e = this;
this._data = t;
for (var o = 0; o < this.taskInviteModels.length; o++) this.taskInviteModels[o].Init(o, function(t) {
e.Callback_Collect(t);
});
this.CreateHttpRequest_Act1();
};
e.prototype.OpenShow = function() {
this.m_Node_Main.active = !0;
this.CreateHttpRequest_Act1();
};
e.prototype.CloseShow = function() {
this.m_Node_Main.active = !1;
};
e.prototype.CreateHttpRequest_Act1 = function() {
var t = this;
App.senderManager.get(a.default).Send_Act1(function(e) {
var o = s.CmmUtils.stringToIntArr(e.data.records.toString(), ","), n = e.data.config.toString();
t.node.active = e.data.enable;
var i = n.split(";"), r = s.CmmUtils.stringToIntArr(i[0], ","), a = s.CmmUtils.stringToIntArr(i[1], ",");
t.tarInvitePersonConfigs = r;
t.maxCount = r[t.taskInviteModels.length - 1];
for (var c = 0; c < t.taskInviteModels.length; c++) t.taskInviteModels[c].SetData(r[c], a[c], o[c], e.data.succ);
t.WorkoutProgress(e.data.succ);
});
};
e.prototype.CreateHttpRequest_GetReward = function() {
var t = this;
App.senderManager.get(a.default).Send_GetAct1(function(e) {
t._data.balance = t._data.balance + e.data.award;
t.node_Heidi.opacity = 0;
t.node_Heidi.active = !0;
t.tween_Heidi && t.tween_Heidi.stop();
t.tween_Heidi = cc.tween(t.node_Heidi).to(.1, {
opacity: 100
}).delay(1).to(.1, {
opacity: 0
}).call(function() {
t.node_Heidi.active = !1;
}).start();
var o = t.localConvertWorldPointAR(t.taskInviteModels[t.collectID].GetFlyBeginNode()), n = t.localConvertWorldPointAR(t.node_FlyPos_End);
t.flyLizi(o, n, 1, function() {
t.CreateHttpRequest_Act1();
dispatch(c.InviteEvent.updateLeftInfo);
});
}, this.collectID);
};
e.prototype.Callback_Collect = function(t) {
this.collectID = t;
this.CreateHttpRequest_GetReward();
};
e.prototype.WorkoutProgress = function(t) {
for (var e = 0, o = 0, n = 0; n < this.tarInvitePersonConfigs.length && t >= this.tarInvitePersonConfigs[n]; n++) {
e = n + 1;
o = this.tarInvitePersonConfigs[n];
}
var i = this.progressConfigPoints[e];
t >= this.maxCount ? i = 1 : i += (t - o) / (this.tarInvitePersonConfigs[e] - o) * (this.progressConfigPoints[e + 1] - this.progressConfigPoints[e]);
this.m_ProgressBar.progress = i;
this.m_ProgressTipNode.UpdateData(this.m_ProgressBar.progress);
};
e.prototype.ButtonClick_Add = function() {};
e.prototype.flyLizi = function(t, e, o, n) {
var i = {
prefab: this.flyEffectPrefab,
parent: this.node_FlyParent,
startPoint: t,
endPoint: e,
num: 1,
flyTime: 1,
delay: 0,
dir: !0,
disableDir: !0,
extraY: 50 * o - 200,
finishCallBack: n
};
this.flyCoinToPoint(i);
};
e.prototype.flyCoinToPoint = function(t) {
for (var e = 0, o = 0, n = [], i = 0; i < t.num; i++) {
var r = cc.instantiate(t.prefab);
n.push(r);
}
var a = function(i) {
t.parent.addChild(n[i]);
var r = s.worldConvertLocalPointAR(t.parent, t.startPoint), a = s.worldConvertLocalPointAR(t.parent, t.endPoint), c = r.add(a).multiplyScalar(.5), l = a.sub(r).mag(), d = t.dir ? (Math.random() + .01) * l : -(Math.random() + .01) * l;
t.disableDir && (d = 0);
var p = t.extraY || 0, h = t.extraX || 0, u = c.add(cc.v2(d + h, 0 + p));
n[i].position = r;
cc.tween(n[i]).delay(o).bezierTo(t.flyTime, r, u, a).call(function() {
e++;
t.updateCallBack ? t.updateCallBack(n[i]) : n[i].destroy();
e == t.num && t.finishCallBack && t.finishCallBack();
}).start();
o += t.delay;
}, s = this;
for (i = 0; i < t.num; i++) a(i);
return n;
};
e.prototype.localConvertWorldPointAR = function(t) {
return t ? t.convertToWorldSpaceAR(cc.v2(0, 0)) : null;
};
e.prototype.worldConvertLocalPointAR = function(t, e) {
return t ? t.convertToNodeSpaceAR(e) : null;
};
r([ u(cc.Node) ], e.prototype, "m_Node_Main", void 0);
r([ u(cc.ProgressBar) ], e.prototype, "m_ProgressBar", void 0);
r([ u(l.default) ], e.prototype, "m_ProgressTipNode", void 0);
r([ u(d.default) ], e.prototype, "taskInviteModels", void 0);
r([ u(cc.Label) ], e.prototype, "label", void 0);
r([ u(cc.Prefab) ], e.prototype, "flyEffectPrefab", void 0);
r([ u(cc.Node) ], e.prototype, "node_FlyPos_End", void 0);
r([ u(cc.Node) ], e.prototype, "node_FlyParent", void 0);
r([ u(cc.Node) ], e.prototype, "node_Heidi", void 0);
return r([ h ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"./InviteEvent": "InviteEvent",
"./ProgressTipNode": "ProgressTipNode",
"./TaskInviteModel": "TaskInviteModel"
} ],
TreeInviteModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ba27e48C8dMurFAbniiOWLn", "TreeInviteModel");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/event/CommonEvent"), s = t("../../../../scripts/common/utils/CmmUtils"), c = t("../../../../scripts/framework/componects/EventComponent"), l = cc._decorator, d = l.ccclass, p = l.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_Target = null;
e.label_Reward = null;
e.node_CanCollect = null;
e.node_Collected = null;
e.node_Normal = null;
e.node_Btn = null;
e.m_Callback = null;
e.m_Index = 0;
e.tarPerson = null;
return e;
}
e.prototype.Init = function(t, e) {
this.m_Index = t;
this.m_Callback = e;
};
e.prototype.addEvents = function() {
this.onD(a.CommonEvent.Change_Language, this.notifyChanged.bind(this));
};
e.prototype.notifyChanged = function() {
this.label_Target && this.tarPerson && (this.label_Target.string = this.tarPerson + " " + App.zLan.getBundleString(10334));
};
e.prototype.GetFlyBeginNode = function() {
return this.label_Reward.node;
};
e.prototype.SetData = function(t, e, o, n) {
this.tarPerson = t;
this.label_Target.string = t + " " + App.zLan.getBundleString(10334);
this.label_Reward.string = s.CmmUtils.NumberForceAddCurrencyString(e);
if (n < t) {
this.node_Normal.active = !0;
this.node_CanCollect.active = !1;
this.node_Collected.active = !1;
this.node_Btn.active = !1;
} else if (0 == o) {
this.node_Normal.active = !1;
this.node_CanCollect.active = !0;
this.node_Collected.active = !1;
this.node_Btn.active = !0;
} else {
this.node_Normal.active = !1;
this.node_CanCollect.active = !1;
this.node_Collected.active = !0;
this.node_Btn.active = !1;
}
};
e.prototype.ButtonClick_Collect = function() {
this.node_Btn.active = !1;
this.m_Callback(this.m_Index);
};
r([ p(cc.Label) ], e.prototype, "label_Target", void 0);
r([ p(cc.Label) ], e.prototype, "label_Reward", void 0);
r([ p(cc.Node) ], e.prototype, "node_CanCollect", void 0);
r([ p(cc.Node) ], e.prototype, "node_Collected", void 0);
r([ p(cc.Node) ], e.prototype, "node_Normal", void 0);
r([ p(cc.Node) ], e.prototype, "node_Btn", void 0);
return r([ d ], e);
}(c.default);
o.default = h;
cc._RF.pop();
}, {
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0
} ],
TreePageService: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b9b5f9GEXBGB54SfOnG7Yxi", "TreePageService");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/net/CommonSender"), s = t("../../../../scripts/common/utils/CmmUtils"), c = t("./ProgressTipNode"), l = t("./TreeInviteModel"), d = cc._decorator, p = d.ccclass, h = d.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mainNode = null;
e.label_WaterCount = null;
e.label_Fertilize = null;
e.label_Limit = null;
e.label_TarValue = null;
e.progressBar_Tree = null;
e.node_TreeParent = null;
e.node_TreeStates = [];
e.waterAnimation = null;
e.fertillizeAnimation = null;
e.node_TaskParent = null;
e.treeInviteModels = [];
e.progressBar_Weekly = null;
e.m_ProgressTipNode = null;
e.flyEffectPrefab = null;
e.node_FlyParent = null;
e.todayLimit = 0;
e.treeTargetValues = [];
e.waterCount = 0;
e.fertilizeCount = 0;
e.progressConfigPoints = [];
e.inviteConfigs = [];
return e;
}
e.prototype.OpenShow = function() {
var t = this;
this.mainNode.active = !0;
this.node_TreeStates = [];
for (var e = 0; e < 4; e++) {
var o = this.node_TreeParent.getChildByName("treeSprite" + e);
this.node_TreeStates.push(o);
}
this.treeInviteModels = [];
for (e = 0; e < 5; e++) {
var n = this.node_TaskParent.getChildByName("TreeInviteModel" + e).getComponent(l.default);
n.Init(e, function(e) {
t.Callback_GetInviteReward(e);
});
this.treeInviteModels.push(n);
}
this.progressConfigPoints = [ 0 ];
for (e = 0; e < this.m_ProgressTipNode.centenPointsProgress.length; e++) {
var i = this.m_ProgressTipNode.centenPointsProgress[e];
this.progressConfigPoints.push(i);
}
this.CreateHttpRequest_InitTree();
};
e.prototype.CloseShow = function() {
this.mainNode.active = !1;
};
e.prototype.Init = function() {
this.sender = App.senderManager.get(a.default);
};
e.prototype.Callback_GetInviteReward = function(t) {
App.globalAudio.playButtonClick();
this.CreateHttpRequest_GetInviteReward(t);
};
e.prototype.ButtonClick_Water = function() {
App.globalAudio.playButtonClick();
this.waterCount <= 0 ? App.tips.show(App.zLan.getBundleString(99900024)) : this.CreateHttpRequest_GetWaterAndFertilize(0);
};
e.prototype.ButtonClick_Fertilize = function() {
App.globalAudio.playButtonClick();
this.fertilizeCount <= 0 ? App.tips.show(App.zLan.getBundleString(99900025)) : this.CreateHttpRequest_GetWaterAndFertilize(1);
};
e.prototype.CreateHttpRequest_InitTree = function() {
var t = this;
this.sender.Send_ShareTreeInitData(function(e) {
if (0 == e.ret) {
t.todayLimit = e.data.quota;
t.waterCount = e.data.balance1;
t.fertilizeCount = e.data.balance2;
t.treeTargetValues = e.data.gradeScale;
t.refreshLeftCount_WaterAndFertilize();
t.refreshLimit();
var o = e.data.record, n = e.data.mondayConfig, i = s.CmmUtils.stringToIntArr(o, ","), r = n.split(";"), a = s.CmmUtils.stringToIntArr(r[0], ","), c = s.CmmUtils.stringToIntArr(r[1], ",");
t.inviteConfigs = a;
for (var l = 0; l < t.treeInviteModels.length; l++) t.treeInviteModels[l].SetData(a[l], c[l], i[l], e.data.succ);
t.WorkoutProgress(e.data.succ);
} else App.tips.show(App.zLan.getBundleString(10214));
});
};
e.prototype.CreateHttpRequest_GetInviteReward = function(t) {
var e = this;
this.sender.Send_ShareTreeGet(function(o) {
if (0 == o.ret) {
console.log("GetInviteReward=>" + JSON.stringify(o.data));
e.todayLimit = o.data.quota;
o.data.record, o.data.win;
var n = App.utils.localConvertWorldPointAR(e.treeInviteModels[t].node), i = App.utils.localConvertWorldPointAR(e.label_Limit.node);
e.flyLizi(n, i, 1, function() {
e.refreshLimit();
});
} else App.tips.show(App.zLan.getBundleString(10214));
}, 2, t);
};
e.prototype.CreateHttpRequest_GetWaterAndFertilize = function(t) {
var e = this;
this.sender.Send_ShareTreeGet(function(o) {
if (0 == o.ret) {
console.log("GetWaterAndFertilize=>" + JSON.stringify(o.data));
e.todayLimit = o.data.quota;
if (0 == t) {
e.waterCount--;
e.waterAnimation.play();
} else {
e.fertilizeCount--;
e.fertillizeAnimation.play();
}
e.refreshLeftCount_WaterAndFertilize();
e.scheduleOnce(function() {
e.refreshLimit();
}, 2);
} else App.tips.show(App.zLan.getBundleString(10214));
}, t);
};
e.prototype.refreshLeftCount_WaterAndFertilize = function() {
this.label_Fertilize.string = "X" + this.fertilizeCount;
this.label_WaterCount.string = "X" + this.waterCount;
};
e.prototype.refreshLimit = function() {
this.label_Limit.string = s.CmmUtils.NumberForceAddCurrencyString(s.CmmUtils.NumberToGameString(this.todayLimit, 2));
var t = 0, e = 3;
if (this.todayLimit >= this.treeTargetValues[this.treeTargetValues.length - 1]) {
t = this.treeTargetValues.length - 1;
this.progressBar_Tree.progress = 1;
} else {
for (var o = 0; o < this.treeTargetValues.length; o++) {
var n = this.treeTargetValues[o];
if (this.todayLimit < n) {
t = o;
break;
}
}
e = t;
var i = 0;
t > 0 && (i = this.treeTargetValues[t - 1]);
this.progressBar_Tree.progress = (this.todayLimit - i) / (this.treeTargetValues[t] - i);
}
for (o = 0; o < this.node_TreeStates.length; o++) {
this.node_TreeStates[o].active = o == e;
}
this.label_TarValue.string = s.CmmUtils.NumberForceAddCurrencyString(s.CmmUtils.NumberToGameString(this.treeTargetValues[t], 2));
};
e.prototype.WorkoutProgress = function(t) {
for (var e = 0, o = 0, n = 0; n < this.inviteConfigs.length && t >= this.inviteConfigs[n]; n++) {
e = n + 1;
o = this.inviteConfigs[n];
}
var i = this.progressConfigPoints[e];
t >= this.inviteConfigs[this.inviteConfigs.length - 1] ? i = 1 : i += (t - o) / (this.inviteConfigs[e] - o) * (this.progressConfigPoints[e + 1] - this.progressConfigPoints[e]);
this.progressBar_Weekly.progress = i;
this.m_ProgressTipNode.UpdateData(this.progressBar_Weekly.progress);
};
e.prototype.flyLizi = function(t, e, o, n) {
var i = {
prefab: this.flyEffectPrefab,
parent: this.node_FlyParent,
startPoint: t,
endPoint: e,
num: 1,
flyTime: 1,
delay: 0,
dir: !0,
disableDir: !0,
extraY: 50 * o - 200,
finishCallBack: n
};
this.flyCoinToPoint(i);
};
e.prototype.flyCoinToPoint = function(t) {
for (var e = 0, o = 0, n = [], i = 0; i < t.num; i++) {
var r = cc.instantiate(t.prefab);
n.push(r);
}
var a = function(i) {
t.parent.addChild(n[i]);
var r = App.utils.worldConvertLocalPointAR(t.parent, t.startPoint), a = App.utils.worldConvertLocalPointAR(t.parent, t.endPoint), s = r.add(a).multiplyScalar(.5), c = a.sub(r).mag(), l = t.dir ? (Math.random() + .01) * c : -(Math.random() + .01) * c;
t.disableDir && (l = 0);
var d = t.extraY || 0, p = t.extraX || 0, h = s.add(cc.v2(l + p, 0 + d));
n[i].position = r;
cc.tween(n[i]).delay(o).bezierTo(t.flyTime, r, h, a).call(function() {
e++;
t.updateCallBack ? t.updateCallBack(n[i]) : n[i].destroy();
e == t.num && t.finishCallBack && t.finishCallBack();
}).start();
o += t.delay;
};
for (i = 0; i < t.num; i++) a(i);
return n;
};
r([ h(cc.Node) ], e.prototype, "mainNode", void 0);
r([ h(cc.Label) ], e.prototype, "label_WaterCount", void 0);
r([ h(cc.Label) ], e.prototype, "label_Fertilize", void 0);
r([ h(cc.Label) ], e.prototype, "label_Limit", void 0);
r([ h(cc.Label) ], e.prototype, "label_TarValue", void 0);
r([ h(cc.ProgressBar) ], e.prototype, "progressBar_Tree", void 0);
r([ h(cc.Node) ], e.prototype, "node_TreeParent", void 0);
r([ h(cc.Animation) ], e.prototype, "waterAnimation", void 0);
r([ h(cc.Animation) ], e.prototype, "fertillizeAnimation", void 0);
r([ h(cc.Node) ], e.prototype, "node_TaskParent", void 0);
r([ h(cc.ProgressBar) ], e.prototype, "progressBar_Weekly", void 0);
r([ h(c.default) ], e.prototype, "m_ProgressTipNode", void 0);
r([ h(cc.Prefab) ], e.prototype, "flyEffectPrefab", void 0);
r([ h(cc.Node) ], e.prototype, "node_FlyParent", void 0);
return r([ p ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"./ProgressTipNode": "ProgressTipNode",
"./TreeInviteModel": "TreeInviteModel"
} ],
invite_choose_language: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "db37fsaQLJJs6kocEjeWRCs", "invite_choose_language");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/enum/GlobalEnum"), s = t("../../../../scripts/framework/componects/EventComponent"), c = t("../../../../scripts/framework/defines/Enums"), l = t("../../../../scripts/sdk/AppInfo"), d = cc._decorator, p = d.ccclass, h = d.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.englishBtn = null;
e.otherLanBtn = null;
e.englishSelect = null;
e.otherSelect = null;
return e;
}
e.prototype.onEnable = function() {
this.updateLan();
};
e.prototype.addEvents = function() {
var t = this;
this.onN(this.englishBtn, c.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
App.zLan.setLanguage(a.GlobalEnum.LanguageType.English);
t.node.active = !1;
});
this.onN(this.otherLanBtn, c.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
App.zLan.setLanguage(l.default.getCountryLange());
t.node.active = !1;
});
};
e.prototype.updateLan = function() {
if (App.zLan.getLanguage() == a.GlobalEnum.LanguageType.English) {
this.englishSelect.active = !0;
this.otherSelect.active = !1;
} else {
this.englishSelect.active = !1;
this.otherSelect.active = !0;
}
};
r([ h(cc.Node) ], e.prototype, "englishBtn", void 0);
r([ h(cc.Node) ], e.prototype, "otherLanBtn", void 0);
r([ h(cc.Node) ], e.prototype, "englishSelect", void 0);
r([ h(cc.Node) ], e.prototype, "otherSelect", void 0);
return r([ p ], e);
}(s.default);
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/common/enum/GlobalEnum": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/sdk/AppInfo": void 0
} ],
invite_page0: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "de639nDQItJ55UKkNhz2MDZ", "invite_page0");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/config/GlobalVar"), s = t("../../../../scripts/common/config/User"), c = t("../../../../scripts/common/event/CommonEvent"), l = t("../../../../scripts/common/utils/CmmUtils"), d = t("./InviteEvent"), p = t("./invite_page_base"), h = t("./threeBtnConfigs"), u = cc._decorator, f = u.ccclass, _ = u.property, v = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.personBar = null;
e.inviteBar = null;
e.label_name = null;
e.label_id = null;
e.label_level = null;
e.label_progress_person = null;
e.label_progress_flow = null;
e.label_balance = null;
e.label_Invite1 = null;
e.label_Invite2 = null;
e.label_Invite3 = null;
e.Label_One = null;
e.Label_Invitee = null;
e.lvPercents = [];
e.lv11 = null;
e.tips = null;
e.pageView = null;
e.threeBtn = null;
return e;
}
e.prototype.addEvents = function() {
this.onD(c.CommonEvent.Change_Language, this.notifyChanged.bind(this));
this.onD(d.InviteEvent.updateLeftInfo, this.notifyChanged.bind(this));
};
e.prototype.show = function(e) {
t.prototype.show.call(this);
this._data = e;
this.refreshData();
this.threeBtn.Init(e);
};
e.prototype.notifyChanged = function() {
this._data && this.refreshData();
};
e.prototype.refreshData = function() {
this.pageView.node.active = !s.default.self.isBozhu;
var t = this._data;
this.label_name.string = t.nickName;
this.label_id.string = s.default.self.uid.toString();
this.label_level.string = "Lv." + t.agentLevel;
this.label_progress_person.string = t.progress_Cur + "/" + t.levelInfo.intVal3;
this.label_progress_flow.string = Math.floor(.2 * t.progress_Cur_flow) + "/" + Math.floor(.2 * t.levelInfo.payFlow);
this.personBar.progress = t.progress_Cur / t.levelInfo.intVal3;
this.inviteBar.progress = t.progress_Cur_flow / t.levelInfo.payFlow;
this.label_balance.string = a.GlobalVar.money_symbol + t.balance;
this.label_Invite1.string = a.GlobalVar.money_symbol + t.basicReward;
this.label_Invite2.string = a.GlobalVar.money_symbol + 2 * t.basicReward;
this.label_Invite3.string = a.GlobalVar.money_symbol + 3 * t.basicReward;
this.Label_One.string = App.zLan.getBundleString(10289, a.GlobalVar.money_symbol + l.CmmUtils.NumberToHallString(t.basicReward));
this.Label_Invitee.string = a.GlobalVar.money_symbol + l.CmmUtils.NumberToHallString(t.invitedReward);
for (var e = 0; e < this.lvPercents.length; e++) this.lvPercents[e].string = 1 == e || 4 == e || 8 == e || 9 == e ? App.zLan.getBundleString(10288, t.posterInfo[e]) : t.posterInfo[e];
this.lv11.string = App.zLan.getBundleString(10283, String.format("<color=#FEA680>{0}</c>", t.posterInfo[10]));
this.tips.string = App.zLan.getBundleString(10283, String.format("<color=#FEA680>{0}</c>", App.zLan.getBundleString(10243)));
};
e.prototype.changeToWithdraw = function() {
App.globalAudio.playAddCash();
dispatch(d.InviteEvent.changeToWithdraw);
};
e.prototype.nextPage = function() {
this.pageView.scrollToPage(1, .5);
};
e.prototype.lastPage = function() {
this.pageView.scrollToPage(0, .5);
};
e.prototype.enableRepeatAnim = function() {
var t = this, e = 0;
this.schedule(function() {
e % 2 == 0 ? t.nextPage() : t.lastPage();
e++;
}, 10, cc.macro.REPEAT_FOREVER);
};
r([ _(cc.ProgressBar) ], e.prototype, "personBar", void 0);
r([ _(cc.ProgressBar) ], e.prototype, "inviteBar", void 0);
r([ _(cc.Label) ], e.prototype, "label_name", void 0);
r([ _(cc.Label) ], e.prototype, "label_id", void 0);
r([ _(cc.Label) ], e.prototype, "label_level", void 0);
r([ _(cc.Label) ], e.prototype, "label_progress_person", void 0);
r([ _(cc.Label) ], e.prototype, "label_progress_flow", void 0);
r([ _(cc.Label) ], e.prototype, "label_balance", void 0);
r([ _(cc.Label) ], e.prototype, "label_Invite1", void 0);
r([ _(cc.Label) ], e.prototype, "label_Invite2", void 0);
r([ _(cc.Label) ], e.prototype, "label_Invite3", void 0);
r([ _(cc.Label) ], e.prototype, "Label_One", void 0);
r([ _(cc.Label) ], e.prototype, "Label_Invitee", void 0);
r([ _(cc.Label) ], e.prototype, "lvPercents", void 0);
r([ _(cc.RichText) ], e.prototype, "lv11", void 0);
r([ _(cc.RichText) ], e.prototype, "tips", void 0);
r([ _(cc.PageView) ], e.prototype, "pageView", void 0);
r([ _(h.default) ], e.prototype, "threeBtn", void 0);
return r([ f ], e);
}(p.default);
o.default = v;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"./InviteEvent": "InviteEvent",
"./invite_page_base": "invite_page_base",
"./threeBtnConfigs": "threeBtnConfigs"
} ],
invite_page1: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7d30alKsxRNYZIqQb1NIQLm", "invite_page1");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/component/ListView/List"), s = t("../../../../scripts/common/config/GlobalVar"), c = t("../../../../scripts/common/config/User"), l = t("../../../../scripts/common/net/CommonSender"), d = t("../../../../scripts/framework/defines/Enums"), p = t("./InviteEvent"), h = t("./invite_page_base"), u = t("./threeBtnConfigs"), f = cc._decorator, _ = f.ccclass, v = f.property, y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.personBar = null;
e.inviteBar = null;
e.label_name = null;
e.label_id = null;
e.label_level = null;
e.label_progress_person = null;
e.label_progress_flow = null;
e.label_balance = null;
e.Button_ToReward = null;
e.btn_next = null;
e.btn_pre = null;
e.Button_refresh = null;
e.Button_collect = null;
e.tip_rule = null;
e.Button_Rule = null;
e.label_page = null;
e.flyEffectPrefab = null;
e.node_FlyPos_Start = null;
e.node_FlyPos_End = null;
e.node_FlyParent = null;
e.node_Heidi = null;
e.threeBtn = null;
e.tween_Heidi = null;
e._list = null;
e.curPageId = 0;
e.tpage = 1;
return e;
}
e.prototype.addEvents = function() {
var t = this;
this.onN(this.btn_next, d.NodeEvent.click, function() {
if (!(t.curPageId >= t.tpage)) {
t.curPageId++;
t.updatePage();
}
});
this.onN(this.btn_pre, d.NodeEvent.click, function() {
if (!(t.curPageId <= 1)) {
t.curPageId--;
t.updatePage();
}
});
this.onN(this.Button_refresh, d.NodeEvent.click, function() {
t.updatePage();
});
this.onN(this.Button_collect.node, d.NodeEvent.click, function() {
App.senderManager.get(l.default).Send_Claim(function(e) {
console.error(e.data);
t.node_Heidi.opacity = 0;
t.node_Heidi.active = !0;
t.tween_Heidi && t.tween_Heidi.stop();
t.tween_Heidi = cc.tween(t.node_Heidi).to(.1, {
opacity: 100
}).delay(1).to(.1, {
opacity: 0
}).call(function() {
t.node_Heidi.active = !1;
}).start();
var o = App.utils.localConvertWorldPointAR(t.node_FlyPos_Start), n = App.utils.localConvertWorldPointAR(t.node_FlyPos_End);
t.flyLizi(o, n, 1, function() {
t._data.balance = e.data.balance;
t.refreshData();
t.updatePage();
});
}, t.curPageId);
});
this.onN(this.Button_Rule, d.NodeEvent.click, function() {
t.tip_rule.active = !0;
t.unschedule(t.hideTipRule);
t.scheduleOnce(t.hideTipRule, 3);
});
this.onD(p.InviteEvent.updateLeftInfo, function() {
t.refreshData();
});
this._list = cc.find("right/main/ScrollView", this.node).getComponent(a.default);
};
e.prototype.hideTipRule = function() {
this.tip_rule.active = !1;
};
e.prototype.show = function(e) {
t.prototype.show.call(this);
this._data = e;
this.refreshData();
this.threeBtn.Init(e);
};
e.prototype.refreshData = function() {
var t = this._data;
this.label_name.string = t.nickName;
this.label_id.string = c.default.self.uid.toString();
this.label_level.string = "Lv." + t.agentLevel;
this.label_progress_person.string = t.progress_Cur + "/" + t.levelInfo.intVal3;
this.label_progress_flow.string = Math.floor(.2 * t.progress_Cur_flow) + "/" + Math.floor(.2 * t.levelInfo.payFlow);
this.personBar.progress = t.progress_Cur / t.levelInfo.intVal3;
this.inviteBar.progress = t.progress_Cur_flow / t.levelInfo.payFlow;
this.label_balance.string = s.GlobalVar.money_symbol + t.balance;
this.Button_ToReward.active = !c.default.self.isBozhu;
this.curPageId = 1;
this.updatePage();
};
e.prototype.updatePage = function() {
var t = this;
App.senderManager.get(l.default).Send_AgentInfo(function(e) {
console.error(e);
t.refreshList(e.data);
}, this.curPageId);
};
e.prototype.changeToWithdraw = function() {
App.globalAudio.playAddCash();
dispatch(p.InviteEvent.changeToWithdraw);
};
e.prototype.refreshList = function(t) {
this.tpage = t.tpage;
this.curPageId = t.page;
for (var e = t.list, o = 0; o < e.length; o++) e[o].order = o + 1;
e.length > 0 && this._list.setData(e);
this.checkIsCanCollect(e);
this.label_page.string = this.curPageId + "/" + this.tpage;
};
e.prototype.checkIsCanCollect = function(t) {
console.error(t);
for (var e = 0, o = 0; o < t.length; o++) {
var n = t[o];
n.claim > 0 && (e += n.claim);
}
this.Button_collect.interactable = e > 0;
};
e.prototype.flyLizi = function(t, e, o, n) {
var i = {
prefab: this.flyEffectPrefab,
parent: this.node_FlyParent,
startPoint: t,
endPoint: e,
num: 1,
flyTime: 1,
delay: 0,
dir: !0,
disableDir: !0,
extraY: 50 * o - 200,
finishCallBack: n
};
this.flyCoinToPoint(i);
};
e.prototype.flyCoinToPoint = function(t) {
for (var e = 0, o = 0, n = [], i = 0; i < t.num; i++) {
var r = cc.instantiate(t.prefab);
n.push(r);
}
var a = function(i) {
t.parent.addChild(n[i]);
var r = App.utils.worldConvertLocalPointAR(t.parent, t.startPoint), a = App.utils.worldConvertLocalPointAR(t.parent, t.endPoint), s = r.add(a).multiplyScalar(.5), c = a.sub(r).mag(), l = t.dir ? (Math.random() + .01) * c : -(Math.random() + .01) * c;
t.disableDir && (l = 0);
var d = t.extraY || 0, p = t.extraX || 0, h = s.add(cc.v2(l + p, 0 + d));
n[i].position = r;
cc.tween(n[i]).delay(o).bezierTo(t.flyTime, r, h, a).call(function() {
e++;
t.updateCallBack ? t.updateCallBack(n[i]) : n[i].destroy();
e == t.num && t.finishCallBack && t.finishCallBack();
}).start();
o += t.delay;
};
for (i = 0; i < t.num; i++) a(i);
return n;
};
r([ v(cc.ProgressBar) ], e.prototype, "personBar", void 0);
r([ v(cc.ProgressBar) ], e.prototype, "inviteBar", void 0);
r([ v(cc.Label) ], e.prototype, "label_name", void 0);
r([ v(cc.Label) ], e.prototype, "label_id", void 0);
r([ v(cc.Label) ], e.prototype, "label_level", void 0);
r([ v(cc.Label) ], e.prototype, "label_progress_person", void 0);
r([ v(cc.Label) ], e.prototype, "label_progress_flow", void 0);
r([ v(cc.Label) ], e.prototype, "label_balance", void 0);
r([ v(cc.Node) ], e.prototype, "Button_ToReward", void 0);
r([ v(cc.Node) ], e.prototype, "btn_next", void 0);
r([ v(cc.Node) ], e.prototype, "btn_pre", void 0);
r([ v(cc.Node) ], e.prototype, "Button_refresh", void 0);
r([ v(cc.Button) ], e.prototype, "Button_collect", void 0);
r([ v(cc.Node) ], e.prototype, "tip_rule", void 0);
r([ v(cc.Node) ], e.prototype, "Button_Rule", void 0);
r([ v(cc.Label) ], e.prototype, "label_page", void 0);
r([ v(cc.Prefab) ], e.prototype, "flyEffectPrefab", void 0);
r([ v(cc.Node) ], e.prototype, "node_FlyPos_Start", void 0);
r([ v(cc.Node) ], e.prototype, "node_FlyPos_End", void 0);
r([ v(cc.Node) ], e.prototype, "node_FlyParent", void 0);
r([ v(cc.Node) ], e.prototype, "node_Heidi", void 0);
r([ v(u.default) ], e.prototype, "threeBtn", void 0);
return r([ _ ], e);
}(h.default);
o.default = y;
cc._RF.pop();
}, {
"../../../../scripts/common/component/ListView/List": void 0,
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"./InviteEvent": "InviteEvent",
"./invite_page_base": "invite_page_base",
"./threeBtnConfigs": "threeBtnConfigs"
} ],
invite_page2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6abb1pZ/4JKnKGo7CldabAn", "invite_page2");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./AcountDetail"), s = t("./invite_page_base"), c = cc._decorator, l = c.ccclass, d = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.accountDetail = null;
return e;
}
e.prototype.show = function(e) {
t.prototype.show.call(this);
this._data = e;
this.accountDetail.InitData(e);
this.accountDetail.OpenShow();
};
r([ d(a.default) ], e.prototype, "accountDetail", void 0);
return r([ l ], e);
}(s.default);
o.default = p;
cc._RF.pop();
}, {
"./AcountDetail": "AcountDetail",
"./invite_page_base": "invite_page_base"
} ],
invite_page3: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "56da27WcxVINaRYhmvLBHt3", "invite_page3");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./TreePageService"), s = t("./invite_page_base"), c = t("./threeBtnConfigs"), l = cc._decorator, d = l.ccclass, p = l.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.treePageService = null;
e.threeBtn = null;
return e;
}
e.prototype.show = function(e) {
t.prototype.show.call(this);
this.treePageService.Init(e);
this.treePageService.OpenShow();
this.threeBtn.Init(e);
};
r([ p(a.default) ], e.prototype, "treePageService", void 0);
r([ p(c.default) ], e.prototype, "threeBtn", void 0);
return r([ d ], e);
}(s.default);
o.default = h;
cc._RF.pop();
}, {
"./TreePageService": "TreePageService",
"./invite_page_base": "invite_page_base",
"./threeBtnConfigs": "threeBtnConfigs"
} ],
invite_page4: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4ffeeUqXfxCIYXtrL1A8DkX", "invite_page4");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./PDDSecondPageService"), s = t("./invite_page_base"), c = t("./threeBtnConfigs"), l = cc._decorator, d = l.ccclass, p = l.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pddpageService = null;
e.threeBtn = null;
return e;
}
e.prototype.show = function(e) {
t.prototype.show.call(this);
this.pddpageService.Init(e);
this.pddpageService.OpenShow();
this.threeBtn.Init(e);
};
r([ p(a.default) ], e.prototype, "pddpageService", void 0);
r([ p(c.default) ], e.prototype, "threeBtn", void 0);
return r([ d ], e);
}(s.default);
o.default = h;
cc._RF.pop();
}, {
"./PDDSecondPageService": "PDDSecondPageService",
"./invite_page_base": "invite_page_base",
"./threeBtnConfigs": "threeBtnConfigs"
} ],
invite_page_base: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7887dPQIDNKOI6202NcU/9T", "invite_page_base");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/framework/componects/EventComponent"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.show = function() {
this.node.active = !0;
};
e.prototype.hide = function() {
this.node.active = !1;
};
return r([ c ], e);
}(a.default));
o.default = l;
cc._RF.pop();
}, {
"../../../../scripts/framework/componects/EventComponent": void 0
} ],
poolModelForComponent_PDD: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "74bc5kxrWFGNbI2rqTiaULp", "poolModelForComponent_PDD");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefab = null;
e.poolMaxCount = 0;
e.componentName = "";
e.hideParent = null;
e.poolList = [];
return e;
}
e.prototype.wInstantiate = function(t) {
void 0 === t && (t = null);
var e = null;
if (this.poolList.length <= 0) e = cc.instantiate(this.prefab).getComponent(this.componentName); else {
e = this.poolList[0];
this.poolList.splice(0, 1);
}
e.node.active = !0;
null != t && e.node.setParent(t);
return e;
};
e.prototype.wDestroy = function(t, e) {
var o = this;
void 0 === e && (e = 0);
this.poolList.some(function(e) {
return e == t;
}) || (e > 0 ? setTimeout(function() {
o.wDestroyNow(t);
}, 1e3 * e) : this.wDestroyNow(t));
};
e.prototype.wDestroy_HideParentNode = function(t, e, o) {
var n = this;
void 0 === o && (o = 0);
this.poolList.some(function(e) {
return e == t;
}) || (o > 0 ? setTimeout(function() {
n.wDestroyNow(t, e);
}, 1e3 * o) : this.wDestroyNow(t, e));
};
e.prototype.wDestroyNow = function(t, e) {
void 0 === e && (e = null);
null == e && null != this.hideParent && (e = this.hideParent);
if (this.poolList.some(function(e) {
return e == t;
})) null != e && t.node.setParent(e); else if (this.poolList.length >= this.poolMaxCount) t.node.destroy(); else if (null != t) {
null != e && t.node.setParent(e);
this.poolList.push(t);
}
};
r([ c(cc.Prefab) ], e.prototype, "prefab", void 0);
r([ c(cc.Integer) ], e.prototype, "poolMaxCount", void 0);
r([ c ], e.prototype, "componentName", void 0);
r([ c(cc.Node) ], e.prototype, "hideParent", void 0);
return r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
threeBtnConfigs: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0047bcWUN5CcJCr0KbBImQu", "threeBtnConfigs");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/sdk/SdkManager"), s = cc._decorator, c = s.ccclass, l = s.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_CopyAndSend = null;
e.node_Facebook = null;
e.node_WhatsApp = null;
e.node_Tel = null;
e.maxShowCount = 3;
e.telegramUrl = "";
e.whatsappUrl = "";
e.facebookUrl = "";
e.copyAndSendUrl = "";
return e;
}
e.prototype.Init = function(t) {
this.telegramUrl = t.telegramUrl;
this.whatsappUrl = t.whatsappUrl;
this.facebookUrl = t.facebookUrl;
this.copyAndSendUrl = t.copyAndSendUrl;
var e = 0;
if ("" != this.copyAndSendUrl) {
this.node_CopyAndSend.active = !0;
e++;
} else this.node_CopyAndSend.active = !1;
if ("" != this.whatsappUrl) {
this.node_WhatsApp.active = !0;
e++;
} else this.node_WhatsApp.active = !1;
if ("" != this.telegramUrl) {
this.node_Tel.active = !0;
e++;
} else this.node_Tel.active = !1;
Log.e(this.facebookUrl);
"" != this.facebookUrl && e < this.maxShowCount ? this.node_Facebook.active = !0 : this.node_Facebook.active = !1;
};
e.prototype.ButtonClick_EnterGroup = function() {
a.default.openUrl(this.telegramUrl);
};
e.prototype.ButtonClick_WhatsApp = function() {
a.default.openUrl(this.whatsappUrl);
};
e.prototype.ButtonClick_FackBook = function() {
a.default.shareFacebook(this.facebookUrl);
};
e.prototype.ButtonClick_CopyAndSend = function() {
a.default.setClipboardContent(this.copyAndSendUrl);
};
r([ l(cc.Node) ], e.prototype, "node_CopyAndSend", void 0);
r([ l(cc.Node) ], e.prototype, "node_Facebook", void 0);
r([ l(cc.Node) ], e.prototype, "node_WhatsApp", void 0);
r([ l(cc.Node) ], e.prototype, "node_Tel", void 0);
r([ l(cc.Integer) ], e.prototype, "maxShowCount", void 0);
return r([ c ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/sdk/SdkManager": void 0
} ]
}, {}, [ "InviteEntry", "AcountDetail", "CardModel_PDD", "ElementModel_Pdd", "InviteEvent", "InviteRewardModel_PDD", "Item_DrawCashBtn", "Item_Invite", "PDDPageService", "PDDSecondPageService", "PDDSecondRewardTC", "ProgressTipNode", "RewardTC_PDD", "TaskInviteModel", "TaskInviteService", "TreeInviteModel", "TreePageService", "invite_choose_language", "invite_page0", "invite_page1", "invite_page2", "invite_page3", "invite_page4", "invite_page_base", "poolModelForComponent_PDD", "threeBtnConfigs", "AdsServiceView", "InviteCheckInfoView", "InviteView" ]);