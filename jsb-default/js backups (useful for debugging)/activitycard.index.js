window.__require = function t(e, o, n) {
function i(a, c) {
if (!o[a]) {
if (!e[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var p = o[a] = {
exports: {}
};
e[a][0].call(p.exports, function(t) {
return i(e[a][1][t] || t);
}, p, p.exports, t, e, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
Act10100CorePlayView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "28360IrlotIA7qKuaBW0WM4", "Act10100CorePlayView");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/config/User"), c = t("../../../../scripts/common/enum/GlobalEnum"), s = t("../../../../scripts/common/event/CommonEvent"), l = t("../../../../scripts/common/net/CommonSender"), p = t("../../../../scripts/common/utils/UIUtils"), u = t("../../../../scripts/framework/core/ui/UIView"), d = t("../../../../scripts/framework/defines/Decorators"), f = t("../../../../scripts/framework/defines/Enums"), h = t("../../../../scripts/sdk/GameNativeConfig"), m = t("../core/Act10100Event"), v = t("../item/card_cardCoreItem"), y = t("../item/card_cardShowItem"), g = cc._decorator, _ = g.ccclass, b = (g.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.rate = null;
e.coinValue = null;
e.bonusValue = null;
e.tryBtn = null;
e.closeBtn = null;
e.root = null;
e.cards = null;
e.showCards = null;
return e;
}
e.getPrefabUrl = function() {
return "prefabs/Act10100CorePlayView";
};
e.prototype.onLoad = function() {
var e = this;
t.prototype.onLoad.call(this);
this.sender = App.senderManager.get(l.default);
this.data = this.args;
this.initNode();
this.initData();
this.initUIEvent();
this.refresh();
this.updateMoney();
p.default.getPrefab(this.bundle, "effect/particle_star").then(function(t) {
e.flyLiziObj = t;
});
v.default.sameClick = !1;
};
e.prototype.initNode = function() {
var t = cc.find("root/rootPop/horLayout", this.node);
this.cards = t.getComponentsInChildren(v.default);
for (var e = 0; e < this.cards.length; e++) (n = this.cards[e]).init(this.data.mapData);
var o = cc.find("root/rootPop/showHor", this.node);
this.showCards = o.getComponentsInChildren(y.default);
for (e = 0; e < this.showCards.length; e++) {
var n;
(n = this.showCards[e]).init(this.data.mapData);
n.setElement(this.data.cards[e] - 1);
}
};
e.prototype.initData = function() {
this.targetWorldPos = this.data.worldPos;
this.rewardCards = [];
for (var t = 0; t < this.data.cards.length; t++) this.rewardCards.push(this.data.cards[t]);
var e = this.data.cards[0], o = this.data.cards[1], n = this.data.cards[2], i = 0;
e != o && e != n || (i = e == o ? 2 : 1);
switch (i) {
case 0:
this.rewardCards[i] = this.data.cards[1];
break;

case 1:
this.rewardCards[i] = this.data.cards[2];
break;

case 2:
this.rewardCards[i] = this.data.cards[0];
}
};
e.prototype.initUIEvent = function() {
var t = this;
this.onN(this.closeBtn, f.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.close();
});
this.onN(this.tryBtn, f.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.isNewGame() || t.sender.Send_Activity10100Req(function(e) {
t.data.nextBet = e.data.nextBet;
t.data.nextRate = e.data.nextRate;
t.gaiPaiAll(e.data);
}, c.GlobalEnum.ActReqType.FP_inReset);
});
this.onD(h.default.Event.update_money, this.updateMoney.bind(this));
this.onD(m.Act10100Event.Act10100Event_fanpaiRes, this.refreshData.bind(this));
};
e.prototype.refresh = function() {
this.rate.string = App.zLan.getBundleString(10218, this.data.nextRate);
for (var t = 0; t < this.cards.length; t++) this.cards[t].updateValue(this.data.nextBet);
};
e.prototype.refreshData = function(t) {
var e = this;
a.default.self.updateMoney(t.money);
if (1 == t.win) {
t.cards = this.rewardCards;
this.refresh();
dispatch(s.CommonEvent.EventMaskAll, 3);
var o = t.item;
this.playEffect("sounds/zhong");
var n = App.utils.localConvertWorldPointAR(o.node), i = App.utils.worldConvertLocalPointAR(this.node, n), r = App.utils.worldConvertLocalPointAR(this.node, this.targetWorldPos);
o.node.setParent(this.node);
o.node.position = cc.v3(i.x, i.y, 0);
cc.tween(this.root).to(1, {
opacity: 0
}).start();
cc.tween(o.node).to(2, {
position: r,
scale: 1.208
}).delay(1).call(function() {
dispatch(m.Act10100Event.Act10100Event_secondReward, t);
e.close();
}).start();
} else if (this.isFinishAllCard()) {
this.refresh();
dispatch(s.CommonEvent.EventMaskAll, 3);
this.scheduleOnce(function() {
e.gaiPaiAll(t);
}, 2);
} else {
o = t.item;
var c = App.utils.localConvertWorldPointAR(o.node), l = App.utils.localConvertWorldPointAR(this.rate.node);
this.data.nextBet = t.nextBet;
this.refresh();
this.flyLizi(c, l, 0, function() {
e.data.nextRate = t.nextRate;
e.refresh();
});
}
};
e.prototype.isNewGame = function() {
for (var t = 0; t < this.cards.length; t++) if (this.cards[t].isShowed) return !1;
return !0;
};
e.prototype.isFinishAllCard = function() {
for (var t = 0; t < this.cards.length; t++) if (!this.cards[t].isShowed) return !1;
return !0;
};
e.prototype.gaiPaiAll = function(t) {
for (var e = 0; e < this.cards.length; e++) {
var o = this.cards[e];
o.isShowed && o.gaipaiAnimation();
o.updateValue(t.nextBet);
}
this.rate.string = App.zLan.getBundleString(10218, t.nextRate);
};
e.prototype.updateMoney = function() {
this.coinValue.string = a.default.self.moneyString;
this.bonusValue.string = a.default.self.bonusOnlyString;
};
e.prototype.flyLizi = function(t, e, o, n) {
var i = {
prefab: this.flyLiziObj,
parent: this.node,
startPoint: t,
endPoint: e,
num: 1,
flyTime: .5,
delay: 0,
dir: !0,
disableDir: !0,
extraY: 50 * o - 200,
finishCallBack: n
};
App.utils.flyCoinToPoint(i);
};
r([ d.inject("root/rootPop/win/rate", cc.RichText) ], e.prototype, "rate", void 0);
r([ d.inject("root/top/coin/value", cc.Label) ], e.prototype, "coinValue", void 0);
r([ d.inject("root/top/bonus/value", cc.Label) ], e.prototype, "bonusValue", void 0);
r([ d.inject("root/rootPop/tryBtn", cc.Node) ], e.prototype, "tryBtn", void 0);
r([ d.inject("root/rootPop/closeBtn", cc.Node) ], e.prototype, "closeBtn", void 0);
r([ d.inject("root", cc.Node) ], e.prototype, "root", void 0);
return r([ _ ], e);
}(u.default));
o.default = b;
cc._RF.pop();
}, {
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/enum/GlobalEnum": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/common/utils/UIUtils": void 0,
"../../../../scripts/framework/core/ui/UIView": void 0,
"../../../../scripts/framework/defines/Decorators": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0,
"../core/Act10100Event": "Act10100Event",
"../item/card_cardCoreItem": "card_cardCoreItem",
"../item/card_cardShowItem": "card_cardShowItem"
} ],
Act10100Event: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "062c2XdILFKdbyK14KK6QE9", "Act10100Event");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Act10100Event = void 0;
(function(t) {
t.Act10100Event_closeShare = "Act10100Event_closeShare";
t.Act10100Event_openCorePlay = "Act10100Event_openCorePlay";
t.Act10100Event_fanpaiRes = "Act10100Event_fanpaiRes";
t.Act10100Event_secondReward = "Act10100Event_secondReward";
})(o.Act10100Event || (o.Act10100Event = {}));
cc._RF.pop();
}, {} ],
Act10100RankView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bd9dfODDZZK754Ex1ZiQKV2", "Act10100RankView");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/framework/defines/Decorators"), c = t("../../../../scripts/framework/core/ui/UIView"), s = t("../../../../scripts/framework/defines/Enums"), l = cc._decorator, p = l.ccclass, u = (l.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Button_close = null;
return e;
}
e.getPrefabUrl = function() {
return "prefabs/Act10100RankView";
};
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.initNode();
this.initData();
this.initUIEvent();
this.refresh();
};
e.prototype.initNode = function() {};
e.prototype.initData = function() {};
e.prototype.initUIEvent = function() {
var t = this;
this.onN(this.Button_close, s.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.close();
});
};
e.prototype.refresh = function() {};
r([ a.inject("Background/Button_close", cc.Node) ], e.prototype, "Button_close", void 0);
return r([ p ], e);
}(c.default));
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/framework/core/ui/UIView": void 0,
"../../../../scripts/framework/defines/Decorators": void 0,
"../../../../scripts/framework/defines/Enums": void 0
} ],
Act10100RuleView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "dea49jjbRpMWq1ftOkwW5Bs", "Act10100RuleView");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/framework/core/ui/UIView"), c = t("../../../../scripts/framework/defines/Decorators"), s = t("../../../../scripts/framework/defines/Enums"), l = t("../core/RuleLan10100Txt"), p = cc._decorator, u = p.ccclass, d = (p.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Button_close = null;
e.ruleTxt = null;
return e;
}
e.getPrefabUrl = function() {
return "prefabs/Act10100RuleView";
};
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.mapData = this.args;
this.initNode();
this.initData();
this.initUIEvent();
this.refresh();
};
e.prototype.initNode = function() {
this.ruleTxt.init(this.mapData);
};
e.prototype.initData = function() {};
e.prototype.initUIEvent = function() {
var t = this;
this.onN(this.Button_close, s.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.close();
});
};
e.prototype.refresh = function() {};
r([ c.inject("Background/Button_close", cc.Node) ], e.prototype, "Button_close", void 0);
r([ c.inject("Background/scroll/view/content", l.default) ], e.prototype, "ruleTxt", void 0);
return r([ u ], e);
}(a.default));
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/framework/core/ui/UIView": void 0,
"../../../../scripts/framework/defines/Decorators": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../core/RuleLan10100Txt": "RuleLan10100Txt"
} ],
Act10100ShareView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "287c26VVOJJg6LXa7tLWF1d", "Act10100ShareView");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/component/UIContainer"), c = t("../../../../scripts/common/enum/GlobalEnum"), s = t("../../../../scripts/common/net/CommonSender"), l = t("../../../../scripts/framework/core/ui/UIView"), p = t("../../../../scripts/framework/defines/Decorators"), u = t("../../../../scripts/framework/defines/Enums"), d = t("../core/Act10100Event"), f = t("../item/card_shareItem"), h = cc._decorator, m = h.ccclass, v = (h.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.refreshBtn = null;
e.Button_close = null;
e.list = null;
e.lastBtn = null;
e.nextBtn = null;
e.curSpitValue = null;
e.activityId = 10100;
e.curRpage = 1;
e.curTpage = 1;
return e;
}
e.getPrefabUrl = function() {
return "prefabs/Act10100ShareView";
};
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.mapData = this.args;
this.initNode();
this.initData();
this.initUIEvent();
this.refresh();
};
e.prototype.initNode = function() {};
e.prototype.initData = function() {
this.refreshEnable = !0;
this.shareBonus = this.mapData.shareBonus;
this.curRpage = this.mapData.page;
this.curTpage = this.mapData.tpage;
this.listData = this.mapData.list;
this.elementMap = this.mapData.elementMap;
};
e.prototype.waitRefreshBtn = function() {
var t = this;
this.scheduleOnce(function() {
t.refreshEnable = !0;
}, 3);
};
e.prototype.initUIEvent = function() {
var t = this;
this.onD(d.Act10100Event.Act10100Event_closeShare, function() {
t.close();
});
this.onN(this.refreshBtn.node, u.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
if (t.refreshEnable) {
t.refreshEnable = !1;
var e = App.senderManager.get(s.default), o = c.GlobalEnum.ActReqType.FP_shareList;
e.Send_Activity10100Req(function(e) {
t.curTpage = e.data.tpage;
t.curRpage = e.data.page;
t.listData = e.data.list;
t.refresh();
t.waitRefreshBtn();
}, o, {
page: 1
});
}
});
this.onN(this.Button_close, u.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.close();
});
this.onN(this.lastBtn, u.NodeEvent.click, function() {
t.curRpage--;
if (t.curRpage < 1) t.curRpage = 1; else {
t.refreshPage();
t.unscheduleAllCallbacks();
t.scheduleOnce(function() {
t.select_index();
}, .2);
}
});
this.onN(this.nextBtn, u.NodeEvent.click, function() {
t.curRpage++;
if (t.curRpage > t.curTpage) t.curRpage = t.curTpage; else {
t.refreshPage();
t.unscheduleAllCallbacks();
t.scheduleOnce(function() {
t.select_index();
}, .2);
}
});
};
e.prototype.select_index = function() {
var t = this, e = App.senderManager.get(s.default), o = c.GlobalEnum.ActReqType.FP_shareList;
e.Send_Activity10100Req(function(e) {
t.curTpage = e.data.tpage;
t.curRpage = e.data.page;
t.listData = e.data.list;
t.refresh();
}, o, {
page: this.curRpage
});
};
e.prototype.refreshPage = function() {
this.curSpitValue.string = App.zLan.string_format_args("<color=#FC9192>{0}</c><color=#ffffff>/{1}</color>", this.curRpage, this.curTpage);
};
e.prototype.refresh = function() {
this.list.initData(this.listData, this.onCreate.bind(this));
this.refreshPage();
};
e.prototype.onCreate = function(t, e) {
var o = t.getComponent(f.default);
e.shareBonus = this.shareBonus;
o.init(e, this.elementMap);
};
r([ p.inject("Background/refreshBtn", cc.Button) ], e.prototype, "refreshBtn", void 0);
r([ p.inject("Background/Button_close", cc.Node) ], e.prototype, "Button_close", void 0);
r([ p.inject("Background/scroll/view/content", a.default) ], e.prototype, "list", void 0);
r([ p.inject("Background/spit/last", cc.Node) ], e.prototype, "lastBtn", void 0);
r([ p.inject("Background/spit/next", cc.Node) ], e.prototype, "nextBtn", void 0);
r([ p.inject("Background/spit/curSpitValue", cc.RichText) ], e.prototype, "curSpitValue", void 0);
return r([ m ], e);
}(l.default));
o.default = v;
cc._RF.pop();
}, {
"../../../../scripts/common/component/UIContainer": void 0,
"../../../../scripts/common/enum/GlobalEnum": void 0,
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/framework/core/ui/UIView": void 0,
"../../../../scripts/framework/defines/Decorators": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../core/Act10100Event": "Act10100Event",
"../item/card_shareItem": "card_shareItem"
} ],
Act10100_CardCore: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "31e4aRVXwdHYJMNltEFjZGy", "Act10100_CardCore");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/utils/CmmUtils"), c = t("../../../../scripts/framework/componects/EventComponent"), s = t("../../../../scripts/framework/defines/Enums"), l = t("../item/card_cardItem"), p = cc._decorator, u = p.ccclass, d = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lines = [];
e.bounsTypeBtn = null;
e.coinsTypeBtn = null;
e.bounsTypeSelected = null;
e.coinsTypeSelected = null;
e.freeTimeBg = null;
e.freeTimeBg_time = null;
e.flopTxt = null;
e.flopTips = null;
e.bounsPrice = null;
e.coinPrice = null;
e.cardItems = [];
e.freeState = !1;
e.isBounsSelected = !0;
return e;
}
e.prototype.addEvents = function() {
var t = this;
this.onN(this.bounsTypeBtn, s.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.isBounsSelected = !0;
t.updateSelected();
});
this.onN(this.coinsTypeBtn, s.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.isBounsSelected = !1;
t.updateSelected();
});
this.isBounsSelected = !0;
this.updateSelected();
};
e.prototype.ChangeCoinSelect = function() {
this.isBounsSelected = !1;
this.updateSelected();
};
e.prototype.initState = function(t) {
this.freeState = t;
this.changeState();
};
e.prototype.resetLine = function() {
for (var t = 0; t < this.lines.length; t++) this.lines[t].active = !1;
};
e.prototype.showLines = function(t, e, o) {
this.resetLine();
if (o) for (var n = 0; n < this.lines.length; n++) {
var i = this.lines[n];
i.opacity = 0;
cc.tween(i).to(.2, {
opacity: 255
}).start();
i.active = !0;
}
if (e) {
this.lines[3].active = !0;
var r = t[0], a = t[1], c = t[2], s = 0;
r != a && r != c || (s = r == a ? 2 : 1);
for (n = 0; n < 3; n++) if (n != s) {
this.lines[n].opacity = 0;
cc.tween(this.lines[n]).to(.2, {
opacity: 255
}).start();
this.lines[n].active = !0;
}
}
};
e.prototype.initCard = function(t, e, o, n) {
if (t && 3 == e.length) {
var i = e[0], r = e[1], a = e[2];
if (i == r && r == a) ; else {
var c = 0;
i != r && i != a || (c = i == r ? 2 : 1);
e[c] = 0;
}
}
for (var s = 0; s < this.cardItems.length; s++) (l = this.cardItems[s]).init(n);
for (s = 0; s < e.length; s++) {
var l = e[s];
this.cardItems[s].setElement(l - 1, o);
}
};
e.prototype.initPrice = function(t, e) {
this.bounsPrice.string = a.CmmUtils.NumberToHallString(t);
this.coinPrice.string = a.CmmUtils.NumberToHallString(e);
};
e.prototype.playFanPaiAnimation = function(t, e, o) {
var n = this;
this.resetLine();
for (var i = 0; i < this.cardItems.length; i++) this.cardItems[i].gaiPaiAll();
this.scheduleOnce(function() {
n.scheduleOnce(function() {
n.cardItems[0].fanpaiAnimation(t[0] - 1, e);
}, 0);
n.scheduleOnce(function() {
n.cardItems[1].fanpaiAnimation(t[1] - 1, e);
}, .6);
n.scheduleOnce(function() {
n.cardItems[2].fanpaiAnimation(t[2] - 1, e);
}, 1.2);
n.scheduleOnce(function() {
o();
}, 1.8);
}, .5);
};
e.prototype.playGaiPaiShare = function(t) {
var e = t[0], o = t[1], n = t[2], i = 0;
e != o && e != n || (i = e == o ? 2 : 1);
this.cardItems[i].gaipaiShareAnimation();
};
e.prototype.playGaiPaiAnimation = function(t) {
this.resetLine();
for (var e = 0; e < this.cardItems.length; e++) this.cardItems[e].gaipaiAnimation();
this.scheduleOnce(function() {
t();
}, .4);
};
e.prototype.updateSelected = function() {
this.bounsTypeSelected.active = this.isBounsSelected;
this.coinsTypeSelected.active = !this.isBounsSelected;
};
e.prototype.updateFreeState = function(t) {
var e = t <= 0;
if (this.freeState != e) {
this.freeState = e;
this.changeState();
}
this.freeTimeBg_time.string = a.CmmUtils.fromdate(Math.round(t));
};
e.prototype.changeState = function() {
if (this.freeState) {
this.freeTimeBg.active = !1;
this.flopTxt.string = App.zLan.getBundleString(10219);
this.flopTips.active = !0;
} else {
this.freeTimeBg.active = !0;
this.flopTxt.string = App.zLan.getBundleString(10216);
this.flopTips.active = !1;
}
};
e.prototype.setRewardState = function(t) {
for (var e = 0; e < this.cardItems.length; e++) this.cardItems[e].setRewardState(t);
};
e.prototype.getPoses = function() {
for (var t = [], e = 0; e < this.cardItems.length; e++) {
var o = this.cardItems[e];
t.push(App.utils.localConvertWorldPointAR(o.node));
}
return t;
};
r([ d(cc.Node) ], e.prototype, "lines", void 0);
r([ d(cc.Node) ], e.prototype, "bounsTypeBtn", void 0);
r([ d(cc.Node) ], e.prototype, "coinsTypeBtn", void 0);
r([ d(cc.Node) ], e.prototype, "bounsTypeSelected", void 0);
r([ d(cc.Node) ], e.prototype, "coinsTypeSelected", void 0);
r([ d(cc.Node) ], e.prototype, "freeTimeBg", void 0);
r([ d(cc.Label) ], e.prototype, "freeTimeBg_time", void 0);
r([ d(cc.Label) ], e.prototype, "flopTxt", void 0);
r([ d(cc.Node) ], e.prototype, "flopTips", void 0);
r([ d(cc.Label) ], e.prototype, "bounsPrice", void 0);
r([ d(cc.Label) ], e.prototype, "coinPrice", void 0);
r([ d(l.default) ], e.prototype, "cardItems", void 0);
return r([ u ], e);
}(c.default);
o.default = f;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../item/card_cardItem": "card_cardItem"
} ],
ActivityCardEntry: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f5ae9uEJnxM64TGmHiHthLV", "ActivityCardEntry");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../scripts/framework/core/entry/Entry"), c = t("../../../scripts/framework/defines/Decorators"), s = t("../../../scripts/framework/defines/Macros"), l = t("./view/ActivityCardView");
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
Log.d("--------------onEnterLogin--------------");
t.prototype.onEnter.call(this, e);
};
e = r([ c.registerEntry("ActivityCardEntry", s.Macro.BUNDLE_ACTIVITY_card, l.default) ], e);
})(a.Entry);
cc._RF.pop();
}, {
"../../../scripts/framework/core/entry/Entry": void 0,
"../../../scripts/framework/defines/Decorators": void 0,
"../../../scripts/framework/defines/Macros": void 0,
"./view/ActivityCardView": "ActivityCardView"
} ],
ActivityCardView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5c743uO3olIjb1SieL9zHaN", "ActivityCardView");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/component/GrayLabelColor"), c = t("../../../../scripts/common/config/Config"), s = t("../../../../scripts/common/config/GlobalVar"), l = t("../../../../scripts/common/config/User"), p = t("../../../../scripts/common/enum/GlobalEnum"), u = t("../../../../scripts/common/event/CommonEvent"), d = t("../../../../scripts/common/net/CommonSender"), f = t("../../../../scripts/common/utils/CmmUtils"), h = t("../../../../scripts/common/utils/RandomUtil"), m = t("../../../../scripts/common/utils/UIUtils"), v = t("../../../../scripts/framework/core/ui/GameView"), y = t("../../../../scripts/framework/core/update/Update"), g = t("../../../../scripts/framework/defines/Decorators"), _ = t("../../../../scripts/framework/defines/Enums"), b = t("../../../../scripts/framework/defines/Macros"), A = t("../../../../scripts/login/view/CommonUIHelper"), w = t("../../../../scripts/sdk/GameNativeConfig"), C = t("../../../../scripts/zgameCommon/GameCommonUIHelper"), E = t("../core/Act10100Event"), B = t("../core/Act10100_CardCore"), R = t("./Act10100CorePlayView"), P = t("./Act10100RankView"), S = t("./Act10100RuleView"), k = t("./Act10100ShareView"), O = cc._decorator, N = O.ccclass, L = (O.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.exitBtn = null;
e.core = null;
e.rankBtn = null;
e.ruleBtn = null;
e.shareBtn = null;
e.coinValue = null;
e.bonusValue = null;
e.shareGetTips = null;
e.Flop = null;
e.flopTxtColor = null;
e.Reward = null;
e.Share = null;
e.sender = App.senderManager.get(d.default);
e.activityId = 10100;
e.freeLeftTime = 0;
return e;
}
e.getPrefabUrl = function() {
return "prefabs/ActivityCardView";
};
e.prototype.onLoad = function() {
var e = this;
t.prototype.onLoad.call(this);
this.onN(this.exitBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.sender.Send_Act_16(function(t) {
l.default.self.initBindRewardInfo(t.data);
});
App.entryManager.enterBundle(b.Macro.BUNDLE_RESOURCES);
});
this.updateMoney();
this.initActivity();
this.playMusic("sounds/bgm");
m.default.getPrefab(this.bundle, "effect/particle_star").then(function(t) {
e.flyLiziObj = t;
});
dispatch(u.Hall_Event.activity_close);
};
e.prototype.addEvents = function() {
this.onD(w.default.Event.update_money, this.updateMoney.bind(this));
this.onD(E.Act10100Event.Act10100Event_closeShare, this.updateShareClose.bind(this));
this.onD(E.Act10100Event.Act10100Event_secondReward, this.updateRewardClose.bind(this));
this.onD(E.Act10100Event.Act10100Event_openCorePlay, this.enter2game.bind(this));
};
e.prototype.initActivity = function() {
var t = this;
this.sender.Send_InitActivity(10100, function(e) {
t.data = e.data;
t.freeLeftTime = t.data.leftTime;
t.coverElementData();
t.initUIEvent();
t.refresh(null, !0);
});
};
e.prototype.initUIEvent = function() {
var t = this;
this.onN(this.rankBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
App.uiManager.open({
type: P.default,
bundle: b.Macro.BUNDLE_ACTIVITY_card,
zIndex: c.ViewZOrder.UI
});
});
this.onN(this.ruleBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
App.uiManager.open({
type: S.default,
bundle: b.Macro.BUNDLE_ACTIVITY_card,
zIndex: c.ViewZOrder.UI,
args: t.elementDataMap
});
});
this.onN(this.shareBtn.node, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
var e = p.GlobalEnum.ActReqType.FP_shareList;
t.sender.Send_Activity10100Req(function(e) {
e.data.shareBonus = t.data.shareBonus;
e.data.elementMap = t.elementDataMap;
App.uiManager.open({
type: k.default,
bundle: b.Macro.BUNDLE_ACTIVITY_card,
zIndex: c.ViewZOrder.UI,
args: e.data
});
}, e, {
page: 1
});
});
this.onN(this.Flop.node, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
if (t.freeLeftTime > 0) if (t.core.isBounsSelected) {
if (l.default.self.bonusOnlyNumber < t.data.bonusPrice) {
t.core.ChangeCoinSelect();
if (l.default.self.moneyNumber < t.data.cashPrice) {
App.tips.show(App.zLan.getBundleString(10231));
return;
}
}
} else if (l.default.self.moneyNumber < t.data.cashPrice) {
App.tips.show(App.zLan.getBundleString(10231));
return;
}
t.fanpaiRequest();
t.Flop.interactable = !1;
t.Share.interactable = !1;
t.flopTxtColor.setGray(!0);
});
this.onN(this.Reward.node, _.NodeEvent.click, function() {
t.Reward.interactable = !1;
t.playEffect("sounds/getReward");
t.getReward();
});
this.onN(this.Share.node, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
var e = p.GlobalEnum.ActReqType.FP_share;
t.Share.interactable = !1;
t.sender.Send_Activity10100Req(function(e) {
t.data.share = 0;
t.data.nextRate = "";
t.data.cards = [ 0, 0, 0 ];
var o = [], n = App.utils.localConvertWorldPointAR(t.shareGetTips.node), i = e.data.bonus - l.default.self.bonusOnlyNumber;
o.push({
position: n,
type: 2,
value: i
});
t.flyCoin(o);
t.core.playGaiPaiAnimation(t.refresh.bind(t));
var r = App.utils.localConvertWorldPointAR(t.Share.node), a = App.utils.localConvertWorldPointAR(t.shareBtn.node);
t.flyLizi(r, a, 0, null);
}, e);
});
};
e.prototype.refresh = function(t, e) {
var o = "" != this.data.nextRate, n = this.data.win, i = this.data.share;
this.Flop.interactable = !n;
this.shareBtn.interactable = !n;
this.flopTxtColor.setGray(!this.Flop.interactable);
if (n) {
this.Reward.node.active = !0;
this.Reward.interactable = !0;
this.Share.node.active = !1;
} else {
this.Reward.interactable = !1;
if (o) {
this.Reward.node.active = !1;
this.Share.node.active = !0;
}
}
this.Share.interactable = i;
t || this.core.initCard(e, this.data.cards, o, this.elementDataMap);
this.core.showLines(this.data.cards, o, n);
this.core.initState(this.freeLeftTime <= 0);
this.core.initPrice(this.data.bonusPrice, this.data.cashPrice);
this.shareGetTips.string = App.zLan.getBundleString(10207, f.CmmUtils.NumberToHallString(this.data.shareBonus));
1 == this.data.win ? this.core.setRewardState(!0) : this.core.setRewardState(!1);
};
e.prototype.update = function(t) {
if (this.data) {
this.freeLeftTime > 0 ? this.freeLeftTime -= t : this.freeLeftTime = 0;
this.core.updateFreeState(this.freeLeftTime);
}
};
e.prototype.updateMoney = function() {
this.coinValue.string = l.default.self.moneyString;
this.bonusValue.string = l.default.self.bonusOnlyString;
};
e.prototype.getFanPaiResult = function() {
h.RandomUtil.randomRange(0, 3);
};
e.prototype.fanpaiRequest = function() {
var t = this, e = this.core.isBounsSelected ? 0 : 1, o = p.GlobalEnum.ActReqType.FP_out;
this.sender.Send_Activity10100Req(function(e) {
t.data.cards = e.data.cards;
t.data.win = e.data.win;
t.data.leftTime = e.data.leftTime;
t.freeLeftTime = t.data.leftTime;
t.data.share = e.data.share;
t.data.nextRate = e.data.nextRate;
t.data.nextBet = e.data.nextBet;
l.default.self.updateMoney(e.data.money);
l.default.self.updateOnlyBouns(e.data.bonus);
var o = "" != t.data.nextRate;
t.core.playFanPaiAnimation(t.data.cards, o, function() {
1 == t.data.win && App.globalAudio.playBundleEffect("sounds/zhong", b.Macro.BUNDLE_ACTIVITY_card);
1 == t.data.share && App.globalAudio.playBundleEffect("sounds/zhong2", b.Macro.BUNDLE_ACTIVITY_card);
if (1 == t.data.share) {
t.core.playGaiPaiShare(t.data.cards);
t.refresh(!0);
} else t.refresh(!0);
});
}, o, {
useCash: e,
delay: 500
});
};
e.prototype.getReward = function() {
var t = this, e = this.core.isBounsSelected ? 0 : 1, o = p.GlobalEnum.ActReqType.FP_get;
this.sender.Send_Activity10100Req(function(e) {
console.error(e);
var o = e.data.vv, n = e.data.vt, i = e.data.free, r = e.data.gameId;
t.data.win = 0;
t.data.cards = [ 0, 0, 0 ];
var a = t.core.getPoses(), c = [], p = o;
switch (n) {
case 1:
for (var u = 0; u < a.length; u++) c.push({
position: a[u],
type: 1,
value: p
});
t.flyCoin(c);
break;

case 2:
for (u = 0; u < a.length; u++) c.push({
position: a[u],
type: 2,
value: p
});
t.flyCoin(c);
break;

case 3:
c.push({
type: 3,
value: p
});
C.default.showHallReward({
data: c,
show: !0
});
break;

case 4:
if (0 == o) {
if (t.onEnterRoom(r, i)) return;
} else {
var d = App.zLan.getBundleString(10228, s.GlobalVar.money_symbol + o);
f.CmmUtils.popTips(d);
l.default.self.addMoney(o);
}
}
t.core.playGaiPaiAnimation(t.refresh.bind(t));
}, o, {
useCash: e
});
};
e.prototype.coverElementData = function() {
var t = this.data.elements;
this.elementDataMap = new Map();
for (var e = 0; e < t.length; e++) {
var o = t[e].split(","), n = {};
n.type = Number.parseFloat(o[0]);
if (4 == n.type) {
n.gameId = Number.parseFloat(o[1]);
n.value = Number.parseFloat(o[2]);
n.bet = Number.parseFloat(o[4]);
} else n.value = Number.parseFloat(o[1]);
this.elementDataMap.set(e, n);
}
};
e.prototype.onEnterRoom = function(t, e) {
var o = s.GlobalVar.gameRoomData(t);
if (App.updateManager.getStatus(o.gameAlias) == y.Update.Status.UP_TO_DATE) {
var n = App.zLan.getBundleString(10227, o.gameName, e, o.gameName, o.gameName);
f.CmmUtils.popTips(n);
return !1;
}
s.GlobalVar.gotoGame(o, this.appEnterGame.bind(this));
};
e.prototype.appEnterGame = function(t) {
A.default.showCommon_loadingView(t);
};
e.prototype.updateShareClose = function(t) {
var e = this;
this.data.cards = t.cards;
this.data.share = 0;
this.data.nextRate = t.nextRate;
this.data.nextBet = t.nextBet;
this.refresh();
dispatch(u.CommonEvent.EventMaskAll, 2);
this.scheduleOnce(function() {
e.core.playGaiPaiShare(e.data.cards);
}, 1);
};
e.prototype.updateRewardClose = function(t) {
this.data.cards = t.cards;
this.data.share = 0;
this.data.win = 1;
this.data.nextRate = "";
this.refresh();
};
e.prototype.enter2game = function(t) {
this.data.nextRate = t.nextRate;
this.data.nextBet = t.nextBet;
this.data.worldPos = t.worldPos;
this.data.mapData = this.elementDataMap;
App.uiManager.open({
type: R.default,
bundle: b.Macro.BUNDLE_ACTIVITY_card,
zIndex: c.ViewZOrder.UI,
args: this.data
});
};
e.prototype.flyCoin = function(t) {
for (var e = this, o = function(o) {
var n = t[o], i = n.type, r = n.value, a = n.position;
switch (i) {
case 1:
m.default.getPrefab(b.Macro.BUNDLE_RESOURCES, "zgame_common/prefabs/item/fly_glod").then(function(t) {
e.coinPrefab = t;
e.FlyToCoin({
value: r,
type: i
}, a);
});
break;

case 2:
m.default.getPrefab(b.Macro.BUNDLE_RESOURCES, "zgame_common/prefabs/item/fly_bond").then(function(t) {
e.bondsPrefab = t;
e.FlyToCoin({
value: r,
type: i
}, a);
});
}
}, n = 0; n < t.length; n++) o(n);
};
e.prototype.FlyToCoin = function(t, e) {
var o = this, n = e, i = cc.Vec2.ZERO, r = 0;
switch (t.type) {
case 1:
this.coinValue.string = l.default.self.moneyString;
var a = l.default.self.data.money;
r = t.value / 5;
i = App.utils.localConvertWorldPointAR(this.coinValue.node);
this.flyPrefab(this.coinPrefab, n, i, function() {
l.default.self.updateMoneyInfo();
}, function(t) {
a += r;
App.globalAudio.playHallMultipleEffect("all_audio/freecoin3");
o.coinValue.string = f.CmmUtils.NumberToHallString(a);
t.destroy();
});
break;

case 2:
var c = l.default.self.bonusOnlyNumber;
this.bonusValue.string = c.toString();
r = t.value / 5;
i = App.utils.localConvertWorldPointAR(this.bonusValue.node);
this.flyPrefab(this.bondsPrefab, n, i, function() {
l.default.self.updateMoneyInfo();
}, function(t) {
c += r;
App.globalAudio.playHallMultipleEffect("all_audio/freecoin3");
o.bonusValue.string = f.CmmUtils.NumberToHallString(c);
t.destroy();
});
}
};
e.prototype.flyPrefab = function(t, e, o, n, i) {
var r = {
prefab: t,
parent: this.node,
startPoint: e,
endPoint: o,
num: 5,
flyTime: 1,
delay: .07,
dir: !0,
disableDir: !0,
extraY: -200,
extraX: -200,
finishCallBack: n,
updateCallBack: i
};
App.utils.flyCoinToPoint(r);
};
e.prototype.flyLizi = function(t, e, o, n) {
var i = {
prefab: this.flyLiziObj,
parent: this.node,
startPoint: t,
endPoint: e,
num: 1,
flyTime: 1 - .3 * o,
delay: 0,
dir: !0,
disableDir: !0,
extraY: 50 * o - 200,
finishCallBack: n
};
App.utils.flyCoinToPoint(i);
};
r([ g.inject("root/exitBtn", cc.Node) ], e.prototype, "exitBtn", void 0);
r([ g.inject("root/cardBg/core", B.default) ], e.prototype, "core", void 0);
r([ g.inject("root/cardBg/rankBtn", cc.Node) ], e.prototype, "rankBtn", void 0);
r([ g.inject("root/cardBg/ruleBtn", cc.Node) ], e.prototype, "ruleBtn", void 0);
r([ g.inject("root/cardBg/shareBtn", cc.Button) ], e.prototype, "shareBtn", void 0);
r([ g.inject("root/top/coin/value", cc.Label) ], e.prototype, "coinValue", void 0);
r([ g.inject("root/top/bonus/value", cc.Label) ], e.prototype, "bonusValue", void 0);
r([ g.inject("root/cardBg/core/shareGetTips", cc.RichText) ], e.prototype, "shareGetTips", void 0);
r([ g.inject("root/cardBg/core/Flop", cc.Button) ], e.prototype, "Flop", void 0);
r([ g.inject("root/cardBg/core/Flop/flopTxt", a.default) ], e.prototype, "flopTxtColor", void 0);
r([ g.inject("root/cardBg/core/Reward", cc.Button) ], e.prototype, "Reward", void 0);
r([ g.inject("root/cardBg/core/Share", cc.Button) ], e.prototype, "Share", void 0);
return r([ N ], e);
}(v.default));
o.default = L;
cc._RF.pop();
}, {
"../../../../scripts/common/component/GrayLabelColor": void 0,
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/enum/GlobalEnum": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/common/utils/RandomUtil": void 0,
"../../../../scripts/common/utils/UIUtils": void 0,
"../../../../scripts/framework/core/ui/GameView": void 0,
"../../../../scripts/framework/core/update/Update": void 0,
"../../../../scripts/framework/defines/Decorators": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/login/view/CommonUIHelper": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0,
"../../../../scripts/zgameCommon/GameCommonUIHelper": void 0,
"../core/Act10100Event": "Act10100Event",
"../core/Act10100_CardCore": "Act10100_CardCore",
"./Act10100CorePlayView": "Act10100CorePlayView",
"./Act10100RankView": "Act10100RankView",
"./Act10100RuleView": "Act10100RuleView",
"./Act10100ShareView": "Act10100ShareView"
} ],
RuleLan10100Txt: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "eb4deZcTyxOKKnNyXxW99QN", "RuleLan10100Txt");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/event/CommonEvent"), c = t("../../../../scripts/common/utils/CmmUtils"), s = t("../../../../scripts/framework/componects/EventComponent"), l = cc._decorator, p = l.ccclass, u = l.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.rule = null;
e.title1 = null;
e.title2 = null;
e.title3 = null;
e.coinValues = [];
e.bounsValues = [];
e.roSpines = [];
e.roBet = null;
e.hotSpins = [];
e.hotBet = null;
e.classicSpins = [];
e.classicBet = null;
e.buffaloSpins = [];
e.buffaloBet = null;
return e;
}
e.prototype.addEvents = function() {
this.onD(a.CommonEvent.Change_Language, this.notifyChanged.bind(this));
};
e.prototype.init = function(t) {
this.mapData = t;
this.notifyChanged();
};
e.prototype.notifyChanged = function() {
this.rule.string = App.zLan.getBundleString(10208);
this.title1.string = App.zLan.getBundleString(10209);
this.title2.string = App.zLan.getBundleString(10210);
this.title3.string = App.zLan.getBundleString(10211);
for (var t = this.mapData.get(1), e = this.mapData.get(7), o = this.mapData.get(15), n = this.mapData.get(16), i = this.mapData.get(17), r = this.mapData.get(18), a = 0; a < this.coinValues.length; a++) this.coinValues[a].string = c.CmmUtils.NumberToHallString(t.value);
for (a = 0; a < this.bounsValues.length; a++) this.bounsValues[a].string = c.CmmUtils.NumberToHallString(e.value);
for (a = 0; a < this.roSpines.length; a++) this.roSpines[a].string = App.zLan.getBundleString(10213, o.value);
this.roBet.string = App.zLan.getBundleString(10212, o.bet);
for (a = 0; a < this.buffaloSpins.length; a++) this.buffaloSpins[a].string = App.zLan.getBundleString(10213, n.value);
this.buffaloBet.string = App.zLan.getBundleString(10212, n.bet);
for (a = 0; a < this.hotSpins.length; a++) this.hotSpins[a].string = App.zLan.getBundleString(10213, i.value);
this.hotBet.string = App.zLan.getBundleString(10212, i.bet);
for (a = 0; a < this.classicSpins.length; a++) this.classicSpins[a].string = App.zLan.getBundleString(10213, r.value);
this.classicBet.string = App.zLan.getBundleString(10212, r.bet);
};
r([ u(cc.Label) ], e.prototype, "rule", void 0);
r([ u(cc.Label) ], e.prototype, "title1", void 0);
r([ u(cc.Label) ], e.prototype, "title2", void 0);
r([ u(cc.Label) ], e.prototype, "title3", void 0);
r([ u(cc.Label) ], e.prototype, "coinValues", void 0);
r([ u(cc.Label) ], e.prototype, "bounsValues", void 0);
r([ u(cc.Label) ], e.prototype, "roSpines", void 0);
r([ u(cc.Label) ], e.prototype, "roBet", void 0);
r([ u(cc.Label) ], e.prototype, "hotSpins", void 0);
r([ u(cc.Label) ], e.prototype, "hotBet", void 0);
r([ u(cc.Label) ], e.prototype, "classicSpins", void 0);
r([ u(cc.Label) ], e.prototype, "classicBet", void 0);
r([ u(cc.Label) ], e.prototype, "buffaloSpins", void 0);
r([ u(cc.Label) ], e.prototype, "buffaloBet", void 0);
return r([ p ], e);
}(s.default);
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0
} ],
card_cardCoreItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "36f0ccJ0OdJ8LdGD77Lt7M5", "card_cardCoreItem");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/config/User"), c = t("../../../../scripts/common/enum/GlobalEnum"), s = t("../../../../scripts/common/net/CommonSender"), l = t("../../../../scripts/common/utils/CmmUtils"), p = t("../../../../scripts/framework/componects/EventComponent"), u = t("../../../../scripts/framework/defines/Enums"), d = t("../../../../scripts/framework/defines/Macros"), f = t("../core/Act10100Event"), h = cc._decorator, m = h.ccclass, v = h.property, y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.eventMask = null;
e.card = null;
e.effect = null;
e.force = null;
e.moneyNode = null;
e.curMoney = null;
e.elements = null;
e.isShowed = !1;
e.needMoney = 0;
return e;
}
o = e;
e.prototype.addEvents = function() {
this.onN(this.node, u.NodeEvent.click, this.onClick.bind(this));
};
e.prototype.init = function(t) {
if (!this.elements) {
this.elements = [];
for (var e = this.force.children, o = 0; o < e.length; o++) {
var n = e[o];
this.elements.push({
node: n,
txt: n.getComponentInChildren(cc.Label)
});
}
for (o = 0; o < this.elements.length; o++) {
n = this.elements[o];
var i = t.get(o + 1);
4 == i.type ? n.txt.string = App.zLan.getBundleString(10213, i.value) : n.txt.string = i.value;
}
this.gaiPai();
}
this.isShowed = !1;
};
e.prototype.updateValue = function(t) {
this.curMoney.string = l.CmmUtils.NumberToHallString(t);
this.needMoney = t;
};
e.prototype.setElement = function(t) {
if (this.elements && t >= 0) {
for (var e = 0; e < this.elements.length; e++) this.elements[e].node.active = !1;
this.elements[t].node.active = !0;
this.force.active = !0;
}
};
e.prototype.gaiPai = function() {
this.force.active = !1;
};
e.prototype.fanpaiAnimation = function(t) {
var e = this;
this.isShowed = !0;
this.moneyNode.active = !1;
this.data && 1 == this.data.win || App.globalAudio.playBundleEffect("sounds/nfan", d.Macro.BUNDLE_ACTIVITY_card);
cc.tween(this.card).to(.2, {
scaleX: 0
}).call(function() {
e.setElement(t);
}).to(.2, {
scaleX: 1
}).call(function() {
e.data && 1 == e.data.win && (e.effect.active = !0);
}).start();
};
e.prototype.gaipaiAnimation = function() {
var t = this;
this.isShowed = !1;
this.effect.active = !1;
cc.tween(this.card).to(.2, {
scaleX: 0
}).call(function() {
t.gaiPai();
}).to(.2, {
scaleX: 1
}).call(function() {
t.moneyNode.active = !0;
}).start();
};
e.prototype.onClick = function() {
var t = this;
if (!this.isShowed && !o.sameClick) {
o.sameClick = !0;
this.scheduleOnce(function() {
o.sameClick = !1;
}, .1);
if (a.default.self.moneyNumber < this.needMoney) App.tips.show("Insufficient coins"); else {
var e = App.senderManager.get(s.default);
this.isShowed = !0;
this.eventMask.active = !0;
e.Send_Activity10100Req(function(e) {
console.error(e);
t.eventMask.active = !1;
var o = e.data.card - 1;
t.data = e.data;
e.data.item = t;
t.fanpaiAnimation(o);
dispatch(f.Act10100Event.Act10100Event_fanpaiRes, e.data);
}, c.GlobalEnum.ActReqType.FP_in);
}
}
};
var o;
r([ v(cc.Node) ], e.prototype, "eventMask", void 0);
r([ v(cc.Node) ], e.prototype, "card", void 0);
r([ v(cc.Node) ], e.prototype, "effect", void 0);
r([ v(cc.Node) ], e.prototype, "force", void 0);
r([ v(cc.Node) ], e.prototype, "moneyNode", void 0);
r([ v(cc.Label) ], e.prototype, "curMoney", void 0);
return o = r([ m ], e);
}(p.default);
o.default = y;
cc._RF.pop();
}, {
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/enum/GlobalEnum": void 0,
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../core/Act10100Event": "Act10100Event"
} ],
card_cardItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "091ads9oNxHbKnmH0I2mEf5", "card_cardItem");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/enum/GlobalEnum"), c = t("../../../../scripts/common/net/CommonSender"), s = t("../../../../scripts/common/utils/CmmUtils"), l = t("../../../../scripts/framework/componects/EventComponent"), p = t("../../../../scripts/framework/defines/Enums"), u = t("../../../../scripts/framework/defines/Macros"), d = t("../core/Act10100Event"), f = cc._decorator, h = f.ccclass, m = f.property, v = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.effect = null;
e.back = null;
e.back_click_fan = null;
e.force = null;
e.elements = null;
e.btn = null;
return e;
}
e.prototype.addEvents = function() {
this.btn = this.node.getComponent(cc.Button);
this.onN(this.node, p.NodeEvent.click, this.onClick.bind(this));
};
e.prototype.init = function(t) {
if (!this.elements) {
this.elements = [];
for (var e = this.force.children, o = 0; o < e.length; o++) {
var n = e[o];
this.elements.push({
node: n,
txt: n.getComponentInChildren(cc.Label)
});
}
for (o = 0; o < this.elements.length; o++) {
n = this.elements[o];
var i = t.get(o + 1);
4 == i.type ? n.txt.string = App.zLan.getBundleString(10213, i.value) : n.txt.string = s.CmmUtils.NumberToHallString(i.value);
}
this.gaiPai();
}
};
e.prototype.setElement = function(t, e) {
if (this.elements) if (t >= 0) {
for (var o = 0; o < this.elements.length; o++) this.elements[o].node.active = !1;
this.elements[t].node.active = !0;
this.force.active = !0;
this.back_click_fan.active = !1;
} else {
this.back_click_fan.active = !!e;
this.gaiPai();
}
};
e.prototype.gaiPai = function() {
this.force.active = !1;
};
e.prototype.gaiPaiAll = function() {
this.force.active = !1;
this.effect.active = !1;
this.back_click_fan.active = !1;
};
e.prototype.fanpaiAnimation = function(t, e) {
var o = this;
this.scheduleOnce(function() {
App.globalAudio.playBundleEffect("sounds/wfan", u.Macro.BUNDLE_ACTIVITY_card);
}, .1);
cc.tween(this.node).to(.2, {
scaleX: 0
}).call(function() {
o.setElement(t, e);
}).to(.2, {
scaleX: 1
}).start();
};
e.prototype.gaipaiAnimation = function() {
var t = this;
this.effect.active = !1;
App.globalAudio.playBundleEffect("sounds/wfan", u.Macro.BUNDLE_ACTIVITY_card);
cc.tween(this.node).to(.2, {
scaleX: 0
}).call(function() {
t.back_click_fan.active = !1;
t.gaiPai();
}).to(.2, {
scaleX: 1
}).start();
};
e.prototype.gaipaiShareAnimation = function() {
var t = this;
App.globalAudio.playBundleEffect("sounds/wfan", u.Macro.BUNDLE_ACTIVITY_card);
cc.tween(this.node).to(.2, {
scaleX: 0
}).call(function() {
t.gaiPai();
}).to(.2, {
scaleX: 1
}).call(function() {
t.back_click_fan.active = !0;
}).start();
};
e.prototype.onClick = function() {
var t = this;
if (this.back_click_fan.active) {
App.globalAudio.playButtonClick();
this.btn.interactable = !1;
this.scheduleOnce(function() {
t.btn.interactable = !0;
}, 1);
App.senderManager.get(c.default).Send_Activity10100Req(function(e) {
var o = App.utils.localConvertWorldPointAR(t.node);
e.data.worldPos = o;
dispatch(d.Act10100Event.Act10100Event_openCorePlay, e.data);
}, a.GlobalEnum.ActReqType.FP_inReset);
}
};
e.prototype.setRewardState = function(t) {
if (t) {
this.effect.opacity = 0;
cc.tween(this.effect).to(.2, {
opacity: 255
}).start();
}
this.effect.active = t;
};
r([ m(cc.Node) ], e.prototype, "effect", void 0);
r([ m(cc.Node) ], e.prototype, "back", void 0);
r([ m(cc.Node) ], e.prototype, "back_click_fan", void 0);
r([ m(cc.Node) ], e.prototype, "force", void 0);
return r([ h ], e);
}(l.default);
o.default = v;
cc._RF.pop();
}, {
"../../../../scripts/common/enum/GlobalEnum": void 0,
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../core/Act10100Event": "Act10100Event"
} ],
card_cardShowItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a1d22DPYq5DYbXbnJ/DnwVx", "card_cardShowItem");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/framework/componects/EventComponent"), c = cc._decorator, s = c.ccclass, l = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e.force = null;
e.elements = null;
return e;
}
e.prototype.init = function(t) {
if (!this.elements) {
this.elements = [];
for (var e = this.force.children, o = 0; o < e.length; o++) {
var n = e[o];
this.elements.push({
node: n,
txt: n.getComponentInChildren(cc.Label)
});
}
for (o = 0; o < this.elements.length; o++) {
n = this.elements[o];
var i = t.get(o + 1);
4 == i.type ? n.txt.string = App.zLan.getBundleString(10213, i.value) : n.txt.string = i.value;
}
}
};
e.prototype.setElement = function(t) {
if (this.elements && t >= 0) {
for (var e = 0; e < this.elements.length; e++) this.elements[e].node.active = !1;
this.elements[t].node.active = !0;
this.force.active = !0;
}
};
e.prototype.gaiPai = function() {
this.force.active = !1;
};
e.prototype.fanpaiAnimation = function(t) {
var e = this;
cc.tween(this.card).to(.2, {
scaleX: 0
}).call(function() {
e.setElement(t);
}).to(.2, {
scaleX: 1
}).start();
};
e.prototype.gaipaiAnimation = function() {
var t = this;
cc.tween(this.card).to(.2, {
scaleX: 0
}).call(function() {
t.gaiPai();
}).to(.2, {
scaleX: 1
}).start();
};
r([ l(cc.Node) ], e.prototype, "card", void 0);
r([ l(cc.Node) ], e.prototype, "force", void 0);
return r([ s ], e);
}(a.default);
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/framework/componects/EventComponent": void 0
} ],
card_elementParent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "47129VZ7nNPFrZuPiSgkFdW", "card_elementParent");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/utils/CmmUtils"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.elements = null;
return e;
}
e.prototype.init = function(t) {
if (!this.elements) {
this.elements = [];
for (var e = this.node.children, o = 0; o < e.length; o++) {
var n = e[o];
this.elements.push({
node: n,
txt: n.getComponentInChildren(cc.Label)
});
}
for (o = 0; o < this.elements.length; o++) {
n = this.elements[o];
var i = t.get(o + 1);
4 == i.type ? n.txt.string = App.zLan.getBundleString(10213, i.value) : n.txt.string = a.CmmUtils.NumberToHallString(i.value);
}
}
};
e.prototype.setElement = function(t) {
if (this.elements && t >= 0) {
for (var e = 0; e < this.elements.length; e++) this.elements[e].node.active = !1;
this.elements[t].node.active = !0;
}
};
return r([ s ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0
} ],
card_shareItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f13e5gOUjhNpZK7AGmaIfTK", "card_shareItem");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/config/User"), c = t("../../../../scripts/common/enum/GlobalEnum"), s = t("../../../../scripts/common/net/CommonSender"), l = t("../../../../scripts/common/utils/CmmUtils"), p = t("../core/Act10100Event"), u = t("./card_elementParent"), d = cc._decorator, f = d.ccclass, h = d.property, m = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card_elementParents = [];
e.nameLabel = null;
e.btn = null;
return e;
}
e.prototype.init = function(t, e) {
this.shareBonus = t.shareBonus;
this.id = t.data.id;
this.nameLabel.string = t.data.nickName;
var o = [], n = t.data.cards.split(",");
o.push(Number.parseFloat(n[0]));
o.push(Number.parseFloat(n[1]));
o.push(Number.parseFloat(n[2]));
for (var i = 0; i < this.card_elementParents.length; i++) {
var r = this.card_elementParents[i];
r.init(e);
r.setElement(o[i] - 1);
}
};
e.prototype.onClick = function() {
var t = this;
l.CmmUtils.popSureOrCancelTips(App.zLan.getBundleString(10229, this.shareBonus), function() {
if (a.default.self.bonusOnlyNumber < t.shareBonus) App.tips.show(App.zLan.getBundleString(10230)); else {
t.btn.interactable = !1;
var e = App.senderManager.get(s.default), o = {}, n = c.GlobalEnum.ActReqType.FP_useShare;
o.index = t.id;
e.Send_Activity10100Req(function(e) {
a.default.self.updateOnlyBouns(e.data.bonus);
t.btn.interactable = !0;
var o = {};
o.cards = e.data.cards;
o.nextRate = e.data.nextRate;
o.nextBet = e.data.nextBet;
dispatch(p.Act10100Event.Act10100Event_closeShare, o);
}, n, o);
}
});
};
r([ h(u.default) ], e.prototype, "card_elementParents", void 0);
r([ h(cc.Label) ], e.prototype, "nameLabel", void 0);
r([ h(cc.Button) ], e.prototype, "btn", void 0);
return r([ f ], e);
}(cc.Component);
o.default = m;
cc._RF.pop();
}, {
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/enum/GlobalEnum": void 0,
"../../../../scripts/common/net/CommonSender": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../core/Act10100Event": "Act10100Event",
"./card_elementParent": "card_elementParent"
} ]
}, {}, [ "ActivityCardEntry", "Act10100Event", "Act10100_CardCore", "RuleLan10100Txt", "card_cardCoreItem", "card_cardItem", "card_cardShowItem", "card_elementParent", "card_shareItem", "Act10100CorePlayView", "Act10100RankView", "Act10100RuleView", "Act10100ShareView", "ActivityCardView" ]);