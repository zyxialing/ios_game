window.__require = function t(e, n, o) {
function i(s, r) {
if (!n[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var _ = "function" == typeof __require && __require;
if (!r && _) return _(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var d = n[s] = {
exports: {}
};
e[s][0].call(d.exports, function(t) {
return i(e[s][1][t] || t);
}, d, d.exports, t, e, n, o);
}
return n[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < o.length; s++) i(o[s]);
return i;
}({
TeenPattiEntry: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "576d1vMRFVCubONSfkch3OB", "TeenPattiEntry");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("../../../scripts/framework/core/entry/Entry"), r = t("../../../scripts/framework/defines/Macros"), c = t("../../../scripts/framework/defines/Decorators"), _ = t("./view/TeenPattiView");
(function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.loadResources = function(t) {
t();
};
e.prototype.initData = function() {};
e = a([ c.registerEntry("TeenPattiEntry", r.Macro.BUNDLE_teenpatti, _.default) ], e);
})(s.Entry);
cc._RF.pop();
}, {
"../../../scripts/framework/core/entry/Entry": void 0,
"../../../scripts/framework/defines/Decorators": void 0,
"../../../scripts/framework/defines/Macros": void 0,
"./view/TeenPattiView": "TeenPattiView"
} ],
TeenPattiHandler: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d0cbefvZDFJrJ8EwstG0GP2", "TeenPattiHandler");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../../scripts/common/config/CmdConfig"), s = t("../../../../scripts/common/net/CmdDefines"), r = t("../../../../scripts/common/net/CommonGameJson"), c = t("../../../../scripts/common/net/GetCmdKey"), _ = t("../../../../scripts/common/utils/CmmUtils"), d = t("../../../../scripts/framework/core/net/service/Handler"), h = t("../../../../scripts/framework/defines/Macros"), l = t("../../../../scripts/tableCommon/teenpatti/net/TeenPattiCmd"), p = t("../../../../scripts/tableCommon/teenpatti/net/TeenPattiEvent"), u = t("./TeenPattiSender"), m = t("./TeenPattiService"), f = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "service", {
get: function() {
return App.serviceManager.get(m.TeenPattiService);
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, s.SUB_CMD_SYS.CMD_Game_Time_Out), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_GAME_HEART), this.server_game_heart, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_LOGIN_SUCC_UC), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_LOGIN_SUCC_BC), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_LOGOUT_SUCC_BC), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_TABLE_INFO_UC), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_GAME_START_BC), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_NEXT_BET_BC), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_SHOW_INFO), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_BET_SUCC_BC), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_BET_SUCC_UC), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_GAME_END_BC), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.GF_CLIENT_CHAT_REQ), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_SHOWCARD_INFORM), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SM_PRE_SLIDE_SHOW_RETURN), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SM_SLIDE_SHOW_RETURN), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SM_AJECT_SLIDE_SHOW_RETURN), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SM_AGREE_SLIDE_SHOW_RETURN), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SM_ALL_SHOW_RETURN), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SM_SEE_FLAG_RETURN), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SM_SLIDE_BET_BC), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SM_BUY_BC_RETURN), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SM_BUY_BC_START), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SM_SHOW_OTHER_CARD), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, a.default.CommonRoomTCP.SERVER_VENHU_GUIDE), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_START_GAME), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_START_GAME_RETURN), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_ALERT_RETURN), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SM_NOTIFY_GAME_START_BC_RETURN), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_CREATE_REQ), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.CLIENT_BeginGame_REQ), this.commfunction, r.CommonGameJson);
this.onS(c.GetCmdKey(s.MainCmd.CMD_GAME, l.SUB_CMD_TeenPatti.SERVER_EMOTION_BC), this.commfunction, r.CommonGameJson);
};
e.prototype.server_game_heart = function() {};
e.prototype.commfunction = function(t) {
Log.e(t);
if (t.subCmd == s.SUB_CMD_SYS.CMD_Game_Time_Out) {
if (0 == t.data.type) {
App.tips.show(t.data.desc);
dispatch(p.TeenPattiGameEvent.TeenPatti_Server_Event, t);
return;
}
var e = App.senderManager.get(u.TeenPattiSender);
_.CmmUtils.popRet1(t.data, e);
} else dispatch(p.TeenPattiGameEvent.TeenPatti_Server_Event, t);
};
e.module = h.Macro.BUNDLE_teenpatti;
return e;
}(d.Handler);
n.default = f;
cc._RF.pop();
}, {
"../../../../scripts/common/config/CmdConfig": void 0,
"../../../../scripts/common/net/CmdDefines": void 0,
"../../../../scripts/common/net/CommonGameJson": void 0,
"../../../../scripts/common/net/GetCmdKey": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/core/net/service/Handler": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/tableCommon/teenpatti/net/TeenPattiCmd": void 0,
"../../../../scripts/tableCommon/teenpatti/net/TeenPattiEvent": void 0,
"./TeenPattiSender": "TeenPattiSender",
"./TeenPattiService": "TeenPattiService"
} ],
TeenPattiSender: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "dce2eZvn3BELYgiA6JKGoBd", "TeenPattiSender");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TeenPattiSender = void 0;
var a = t("../../../../scripts/common/net/CommonGameJson"), s = t("../../../../scripts/common/net/HttpSender"), r = t("../../../../scripts/framework/defines/Macros"), c = t("../../../../scripts/tableCommon/teenpatti/net/TeenPattiCmd"), _ = t("./TeenPattiService"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "service", {
get: function() {
return App.serviceManager.get(_.TeenPattiService);
},
enumerable: !1,
configurable: !0
});
e.prototype.relogin = function() {
this.service.close();
this.service.connect();
};
e.prototype.reconnect = function() {
this.service.connect();
};
e.prototype.close = function() {
this.service.close();
};
e.prototype.creatRoom = function() {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.SERVER_CREATE_REQ;
this.send(t);
};
e.prototype.login = function(t) {
var e = new a.CommonGameJson();
e.subCmd = c.SUB_CMD_TeenPatti.SERVER_LOGIN_Req;
e.data.roomId = t;
this.send(e);
};
e.prototype.logout = function() {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.CLIENT_LOGOUT_REQ;
this.send(t);
};
e.prototype.start_btn = function() {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.CLIENT_START_GAME_REQ;
this.send(t);
};
e.prototype.send_chat_text = function(t, e) {
var n = new a.CommonGameJson();
n.subCmd = c.SUB_CMD_TeenPatti.GF_CLIENT_CHAT_REQ;
n.data.text = e;
n.data.seatid = t;
n.data.chatid = 1;
this.send(n);
};
e.prototype.send_chat_Mofa = function(t, e, n) {
var o = new a.CommonGameJson();
o.subCmd = c.SUB_CMD_TeenPatti.GF_CLIENT_EMOTION_REQ;
o.data.emmID = n;
o.data.seatid_send = t;
o.data.seatid_recieve = e;
this.send(o);
};
e.prototype.recharge = function() {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.CLIENT_READY_REQ;
this.send(t);
};
e.prototype.qipai = function() {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.CLIENT_BET_REQ;
t.data.action = c.SUB_CMD_TeenPatti.Action_PLAYER_FOLD;
this.send(t);
};
e.prototype.genzhu = function() {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.CLIENT_BET_REQ;
t.data.action = c.SUB_CMD_TeenPatti.Action_PLAYER_CALL;
this.send(t);
};
e.prototype.jiazhu = function(t) {
var e = new a.CommonGameJson();
e.subCmd = c.SUB_CMD_TeenPatti.CLIENT_BET_REQ;
e.data.action = c.SUB_CMD_TeenPatti.Action_PLAYER_CALL;
e.data.raise_bet = t;
this.send(e);
};
e.prototype.see = function() {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.CLIENT_BET_REQ;
t.data.action = c.SUB_CMD_TeenPatti.Action_PLAYER_SEE;
this.send(t);
};
e.prototype.endshow = function() {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.CLIENT_BET_REQ;
t.data.action = c.SUB_CMD_TeenPatti.Action_PLAYER_COMPARE;
this.send(t);
};
e.prototype.slideshow = function() {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.CLIENT_BET_REQ;
t.data.action = c.SUB_CMD_TeenPatti.Action_PLAYER_PRE_COMPARE;
this.send(t);
};
e.prototype.send_player_will_goto_shop = function() {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.GM_NOTIFY_BUY_REQUEST;
this.send(t);
};
e.prototype.refused = function() {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.CLIENT_BET_REQ;
t.data.action = c.SUB_CMD_TeenPatti.Action_PLAYER_OK_PRE_COMPARE;
t.data.allow = 0;
this.send(t);
};
e.prototype.agree = function() {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.CLIENT_BET_REQ;
t.data.action = c.SUB_CMD_TeenPatti.Action_PLAYER_OK_PRE_COMPARE;
t.data.allow = 1;
this.send(t);
};
e.prototype.switch_room = function() {
if (this.service.isConnected) {
var t = new a.CommonGameJson();
t.subCmd = c.SUB_CMD_TeenPatti.CLIENT_SWITCH_ROOM;
this.send(t);
} else this.reconnect();
};
e.module = r.Macro.BUNDLE_teenpatti;
return e;
}(s.default);
n.TeenPattiSender = d;
cc._RF.pop();
}, {
"../../../../scripts/common/net/CommonGameJson": void 0,
"../../../../scripts/common/net/HttpSender": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/tableCommon/teenpatti/net/TeenPattiCmd": void 0,
"./TeenPattiService": "TeenPattiService"
} ],
TeenPattiService: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "876f0GYsolNnYgM/wgxOU7o", "TeenPattiService");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TeenPattiService = void 0;
var a = t("../../../../scripts/common/config/Config"), s = t("../../../../scripts/common/net/CommonService"), r = t("../../../../scripts/framework/defines/Macros"), c = t("../../../../scripts/sdk/GameNativeConfig"), _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.priority = a.NetPriority.Game;
return e;
}
e.prototype.onOpen = function(e) {
t.prototype.onOpen.call(this, e);
dispatch(c.default.Event.game_open);
};
e.prototype.onClose = function(e) {
t.prototype.onClose.call(this, e);
dispatch(c.default.Event.game_close);
};
e.module = r.Macro.BUNDLE_teenpatti;
return e;
}(s.CommonService);
n.TeenPattiService = _;
cc._RF.pop();
}, {
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/net/CommonService": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0
} ],
TeenPattiView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "be637gyjONGDaZM8F3Lamgw", "TeenPattiView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
}, s = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(i, a) {
function s(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function r(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(s, r);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, r = this && this.__generator || function(t, e) {
var n, o, i, a, s = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: r(0),
throw: r(1),
return: r(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function r(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
s.label++;
return {
value: a[1],
done: !1
};

case 5:
s.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
s = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
s.label = a[1];
break;
}
if (6 === a[0] && s.label < i[1]) {
s.label = i[1];
i = a;
break;
}
if (i && s.label < i[2]) {
s.label = i[2];
s.ops.push(a);
break;
}
i[2] && s.ops.pop();
s.trys.pop();
continue;
}
a = e.call(t, s);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
n = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../../../scripts/common/config/CmdConfig"), _ = t("../../../../scripts/common/config/Config"), d = t("../../../../scripts/common/config/GlobalVar"), h = t("../../../../scripts/common/config/User"), l = t("../../../../scripts/common/event/CommonEvent"), p = t("../../../../scripts/common/net/CmdDefines"), u = t("../../../../scripts/common/protocol/HeartbetJson"), m = t("../../../../scripts/common/utils/CmmUtils"), f = t("../../../../scripts/common/utils/MathUtils"), C = t("../../../../scripts/common/utils/UIUtils"), S = t("../../../../scripts/framework/core/ui/GameView"), y = t("../../../../scripts/framework/defines/Decorators"), v = t("../../../../scripts/framework/defines/Enums"), g = t("../../../../scripts/framework/defines/Macros"), E = t("../../../../scripts/login/view/CommonUIHelper"), B = t("../../../../scripts/sdk/GameNativeConfig"), T = t("../../../../scripts/sdk/SdkManager"), b = t("../../../../scripts/tableCommon/GameRoomView"), M = t("../../../../scripts/tableCommon/fight/CountDownLabel"), P = t("../../../../scripts/tableCommon/fight/UpDownLabel"), R = t("../../../../scripts/tableCommon/teenpatti/TeenGameController"), w = t("../../../../scripts/tableCommon/teenpatti/movie_clip"), G = t("../../../../scripts/tableCommon/teenpatti/net/TeenPattiCmd"), D = t("../../../../scripts/tableCommon/teenpatti/net/TeenPattiEvent"), A = t("../net/TeenPattiHandler"), U = t("../net/TeenPattiSender"), N = t("../net/TeenPattiService"), L = cc._decorator, O = L.ccclass, k = (L.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.teen_seat5 = null;
e.teen_seat4 = null;
e.teen_seat3 = null;
e.teen_seat2 = null;
e.seecardBtn = null;
e.reduceCoinBtn = null;
e.addCoinBtn = null;
e.packBtn = null;
e.bindBtn = null;
e.chaarBtn = null;
e.showBtn = null;
e.sideshowBtn = null;
e.SwitchButton = null;
e.sideShowCloseBtn = null;
e.sideShowSureBtn = null;
e.game_state = null;
e.waitNode = null;
e.Button_Close = null;
e._actionTime = 19;
e._currentGenZhuBet = 0;
e._minGenzhuBet = 0;
e.roomDataConfigs = null;
e.curRoomData = null;
e._selfSeatId = -1;
e.sender = App.senderManager.get(U.TeenPattiSender);
e._curSeat = -1;
e._sel_avatar = -1;
return e;
}
e.getPrefabUrl = function() {
return "prefabs/TeenPattiView";
};
Object.defineProperty(e.prototype, "isRealGold", {
get: function() {
return d.GlobalVar.game_model == B.default.GameModel.RealGold;
},
enumerable: !1,
configurable: !0
});
e.prototype.addEvents = function() {
var t = this;
this.onD(B.default.Event.talk_about, function(e) {
t.sender.send_chat_text(t._selfSeatId, e);
});
cc.game.on("onSendEmoji", this.onSendEmoji, this);
this.onD(B.default.Event.game_open, this.openReconn);
this.onD(B.default.Event.game_close, this.onClosed);
this.onD(B.default.Event.update_money, this.onUpdateMoney);
this.onD(D.TeenPattiGameEvent.TeenPatti_Server_Event, this.parseGameMsg);
this.onD(l.ComponentGameEvent.Game_SwitchTable_Event, this.onClickSwitchRoom);
this.onD(l.ComponentGameEvent.Game_Exit_Event, this.onClickExit);
};
e.prototype.bindingNetServer = function() {
this.server = App.serviceManager.get(N.TeenPattiService, !0);
this.sender = App.senderManager.get(U.TeenPattiSender);
App.handlerManager.get(A.default);
var t = d.GlobalVar.host.split(":"), e = t[1].replace("//", ""), n = t[2], o = t[0];
this.server.initIP_PORT(e, n, o);
this.server.heartbeat = u.HeartbeatJson;
this.server.maxEnterBackgroundTime = 5;
this.sender.reconnect();
};
e.prototype.removeNetServer = function() {
App.senderManager.destory(U.TeenPattiSender);
App.handlerManager.destory(A.default);
App.serviceManager.destory(N.TeenPattiService);
this.offD(B.default.Event.game_close);
this.offD(l.ComponentGameEvent.Game_Exit_Event);
};
e.prototype.onDestroy = function() {
cc.game.off("onSendEmoji", this.onSendEmoji, this);
t.prototype.onDestroy.call(this);
};
e.prototype.onLoad = function() {
d.GlobalVar.curGameId = B.default.GameType.TeenPatti;
this.bundle = g.Macro.BUNDLE_teenpatti;
var e = {
gameName: "TeenPatti",
callback_chooseRoom: this.ChooseRoom.bind(this),
callback_refreshCoin: this.RefreshCoin.bind(this),
isFirstLoad: !0
};
this.openRoomTC(e);
this._tgc = this.getComponent(R.default);
t.prototype.onLoad.call(this);
this.initData();
this.initNode();
this.initUIEvent();
this.refresh();
this.playMusic_ResouceBundle("table_common/teenpatti/sound/TP_game_bgm");
dispatch(l.CommonEvent.Open_Show_Hide_laba, !0);
};
e.prototype.initData = function() {};
e.prototype.initNode = function() {
for (var t = this, e = cc.find("EmojiPanel/Layout", this.node).children, n = function(n) {
var i = e[n];
o.onN(i, v.NodeEvent.click, function() {
t.doSelectEmoji(n);
});
}, o = this, i = 0; i < e.length; i++) n(i);
this._tgc.operatorNode.active = !1;
this._tgc.vs_lost_node.active = !1;
this.node.active = !1;
};
e.prototype.initUIEvent = function() {
var t = this;
this.onN(this.teen_seat5, v.NodeEvent.click, function() {
t.doSelectAvatar(5);
});
this.onN(this.teen_seat4, v.NodeEvent.click, function() {
t.doSelectAvatar(4);
});
this.onN(this.teen_seat3, v.NodeEvent.click, function() {
t.doSelectAvatar(3);
});
this.onN(this.teen_seat2, v.NodeEvent.click, function() {
t.doSelectAvatar(2);
});
this.onN(this.reduceCoinBtn, v.NodeEvent.click, this.onClickSub);
this.onN(this.addCoinBtn, v.NodeEvent.click, this.onClickAdd);
this.onN(this.packBtn, v.NodeEvent.click, this.onClickPack);
this.onN(this.bindBtn, v.NodeEvent.click, this.onClickBind);
this.onN(this.chaarBtn, v.NodeEvent.click, this.onClickChaal);
this.onN(this.showBtn, v.NodeEvent.click, this.onClickShow);
this.onN(this.sideshowBtn, v.NodeEvent.click, this.onClickSideshow);
this.onN(this.SwitchButton, v.NodeEvent.click, this.onClickSwitchRoom);
this.onN(this.sideShowCloseBtn, v.NodeEvent.click, this.onClickJujueBipai);
this.onN(this.sideShowSureBtn, v.NodeEvent.click, this.onClickTongyiBipai);
this.onN(this.seecardBtn, v.NodeEvent.click, this.onClickSee);
this.onN(this.Button_Close, v.NodeEvent.click, this.hideEmoji);
};
e.prototype.refresh = function() {};
e.prototype._init = function() {
this.node.active || (this.node.active = !0);
};
e.prototype.openReconn = function() {
this.sender.creatRoom();
};
e.prototype.handler_server_createRoom = function(t) {
Log.e("createRoom==>" + JSON.stringify(t));
this.roomDataConfigs = t;
t.gameName = "TeenPatti";
t.callback_chooseRoom = this.ChooseRoom.bind(this);
t.callback_refreshCoin = this.RefreshCoin.bind(this);
t.isFirstLoad = !1;
d.GlobalVar.singleGameRule = t.ruleUrl;
this.openRoomTC(t);
};
e.prototype.openRoomTC = function(t) {
App.uiManager.isShow(b.default) ? dispatch(D.TeenPattiGameEvent.TeenPattiEvent_refreshRoom, t) : App.uiManager.open({
type: b.default,
bundle: g.Macro.BUNDLE_RESOURCES,
zIndex: _.ViewZOrder.UI,
args: t
});
};
e.prototype.ChooseRoom = function(t) {
Log.e(this.curRoomData);
this.curRoomData = this.roomDataConfigs.rooms[t];
this._init_tableinfo();
this.sender.login(this.curRoomData.roomId);
};
e.prototype._init_tableinfo = function() {
this.updateGameAllBetLabel(0);
for (var t = [ this.curRoomData.basebet, this.curRoomData.uplimit, this.curRoomData.potCnt, this.curRoomData.potlimit ], e = 0; e < this._tgc.table_info_label.length; e++) this._tgc.table_info_label[e].string = t[e] + "";
};
e.prototype.parseGameMsg = function(t) {
var e = t.subCmd, n = t.data;
e == G.SUB_CMD_TeenPatti.SERVER_CREATE_REQ ? this.handler_server_createRoom(n) : e == G.SUB_CMD_TeenPatti.SERVER_LOGIN_SUCC_UC ? this.handler_server_login_return(n) : e == G.SUB_CMD_TeenPatti.SERVER_LOGIN_SUCC_BC ? this.handler_server_login_succ_bc(n) : e == G.SUB_CMD_TeenPatti.SERVER_LOGOUT_SUCC_BC ? this.handler_server_logout_succ_bc(n) : e == G.SUB_CMD_TeenPatti.SERVER_TABLE_INFO_UC ? this.handler_server_table_info_uc(n) : e == G.SUB_CMD_TeenPatti.SERVER_GAME_START_BC ? this.handler_server_game_start_bc(n) : e == G.SUB_CMD_TeenPatti.SERVER_NEXT_BET_BC ? this.handler_server_next_bet_bc(n) : e == G.SUB_CMD_TeenPatti.SERVER_SHOW_INFO ? this.handler_show_bipai_btn(n) : e == G.SUB_CMD_TeenPatti.SERVER_BET_SUCC_BC ? this.handler_server_bet_succ_bc(n) : e == G.SUB_CMD_TeenPatti.SERVER_BET_SUCC_UC ? this.handler_server_bet_succ_uc(n) : e == G.SUB_CMD_TeenPatti.SERVER_GAME_END_BC ? this.handler_server_game_end_bc(n) : e == G.SUB_CMD_TeenPatti.GF_CLIENT_CHAT_REQ ? this.handler_server_chat_bc(n) : e == G.SUB_CMD_TeenPatti.SERVER_SHOWCARD_INFORM ? this.handler_server_show_card(n) : e == G.SUB_CMD_TeenPatti.SM_PRE_SLIDE_SHOW_RETURN ? this.handler_server_pre_slide_show_return(n) : e == G.SUB_CMD_TeenPatti.SM_SLIDE_SHOW_RETURN ? this.handler_server_sm_slide_show_return(n) : e == G.SUB_CMD_TeenPatti.SM_AJECT_SLIDE_SHOW_RETURN ? this.handler_server_alert_slide_show_return(n) : e == G.SUB_CMD_TeenPatti.SM_AGREE_SLIDE_SHOW_RETURN ? this.handler_server_agree_slide_show_return(n) : e == G.SUB_CMD_TeenPatti.SM_ALL_SHOW_RETURN ? this.handler_server_sm_all_show_return(n) : e == G.SUB_CMD_TeenPatti.SM_SEE_FLAG_RETURN ? this.handler_server_sm_see_flag_return(n) : e == G.SUB_CMD_TeenPatti.SM_SLIDE_BET_BC ? this.handler_server_slide_bet_bc_return(n) : e == G.SUB_CMD_TeenPatti.SM_BUY_BC_RETURN ? this.handler_server_player_buy_state(n) : e == G.SUB_CMD_TeenPatti.SM_BUY_BC_START ? this.handler_server_player_buy_start_state(n) : e == G.SUB_CMD_TeenPatti.SM_SHOW_OTHER_CARD ? this.handler_server_show_other_card(n) : e == c.default.CommonRoomTCP.SERVER_VENHU_GUIDE ? this.handler_server_venhu_guide(n) : e == G.SUB_CMD_TeenPatti.SERVER_START_GAME || e == G.SUB_CMD_TeenPatti.SERVER_START_GAME_RETURN || (e == G.SUB_CMD_TeenPatti.SERVER_ALERT_RETURN ? this.handler_server_alert_return(n) : e == G.SUB_CMD_TeenPatti.SM_NOTIFY_GAME_START_BC_RETURN ? this.showTipAndStart(n.cd) : e == G.SUB_CMD_TeenPatti.SERVER_EMOTION_BC ? this.PlayEmoji(n) : e == p.SUB_CMD_SYS.CMD_Game_Time_Out ? Log.d("Tip消息:", n) : Log.d("其他消息:", n));
};
e.prototype.RefreshCoin = function() {
Log.e("--------RefreshCoin");
this.sender.creatRoom();
};
e.prototype.handler_server_login_return = function(t) {
Log.d("======TeenPatti登录返回:", t);
var e = 0;
t.ret && (e = t.ret);
if (0 == e) Log.d("TeenPatti登录成功!", t); else {
Log.d("TeenPatti登录失败!", t);
t.alertStr && App.tips.show(t.alertStr);
this.doExitGame();
}
};
e.prototype.handler_server_login_succ_bc = function(t) {
var e = this.getNextSeat(t.seatid);
e && e.sitdown(t, this.isMyPlayer(t.seatid));
};
e.prototype.handler_server_logout_succ_bc = function(t) {
var e = this.getSeatByID(t.seatid);
if (null != e) if (this.isMyPlayer(e.seatid)) {
this._isLogout = !0;
if (2 == t.type) Log.d("换桌成功"); else if (0 == t.type || 3 == t.type || 4 == t.type || 5 == t.type) {
t.alertStr && App.tips.show(t.alertStr);
this.doExitGame();
} else this.doExitGame();
} else e.stand();
};
e.prototype.isMyPlayer = function(t) {
return this._selfSeatId == t;
};
e.prototype.resetSwitchClick = function() {
this.unschedule(this.resetSwitchClick);
this._clickSwitch = !1;
this._tgc.button_switch_table.interactable = !0;
};
e.prototype.handler_server_table_info_uc = function(t) {
this._init();
this.resetSwitchClick();
this._currentGameing = 1 == t.state;
this._selfSeatId = t.seatid;
Log.d("============桌子信息:", t);
t.waittime && (this._actionTime = t.waittime);
this.EachSeat(function(t) {
t.stand();
});
this.hideSideShow();
this.init_players(t.players);
if (this._currentGameing) {
this.updateGameAllBetLabel(t.total_bet);
this.EachSeat(function(e) {
e.showDealer(t.dealer == e.seatid);
e.seatid == t.cur_seat && e.setRoundCutDown(t.waittime);
});
this._tgc.operatorNode.active = !0;
this._tgc.button_show.node.active = !1;
this._tgc.button_chaar.node.active = !1;
this.setInteractableAll();
this.updateBetButton(t.cur_bet, this.isMyPlayer(t.cur_seat));
var e = this.getSelfSeat();
if (e && e.isPlaying) {
this._tgc.button_Pack.node.active = !0;
this.showSelfAction(this.isMyPlayer(t.cur_seat));
} else this.hideOperator();
} else {
this.hideOperator();
this.updateGameAllBetLabel(0);
}
this.hideTip();
1 == t.state || 2 == t.state || this.showMatchTip("{0}S");
};
e.prototype.showTipAndStart = function(t) {
this.hideTip();
this.showTips("Game starting in {0} sec", t);
};
e.prototype.showMatchTip = function(t) {
var e = this;
this.game_state ? this.game_state.setStart(t) : this.waitNode || C.default.getPrefab(g.Macro.BUNDLE_RESOURCES, "table_common/prefabs/matchNode").then(function(n) {
var o = cc.instantiate(n);
e.node.addChild(o);
o.position = cc.Vec3.ZERO;
e.game_state = o.getComponent(P.default);
e.game_state.setStart(t);
});
};
e.prototype.showTips = function(t, e) {
var n = this;
this.waitNode ? this.waitNode.setStart(t, e) : C.default.getPrefab(g.Macro.BUNDLE_RESOURCES, "table_common/prefabs/waitNode_cutdown").then(function(o) {
var i = cc.instantiate(o);
n.node.addChild(i);
i.position = cc.Vec3.ZERO;
n.waitNode = i.getComponent(M.default);
n.waitNode.setStart(t, e);
});
};
e.prototype.hideTip = function() {
this.game_state && (this.game_state.node.active = !1);
};
e.prototype.showSelfAction = function(t) {
var e = this.getSelfSeat().getAlreadySeeCard();
this._tgc.button_Pack.node.active = !0;
this._tgc.button_chaar.node.active = e;
this._tgc.button_Pack.interactable = t;
this._tgc.button_chaar.interactable = t;
this._tgc.button_blind.interactable = t;
};
e.prototype.getSelfSeat = function() {
return this._tgc.seats[0];
};
e.prototype.init_players = function(t) {
for (var e = this._selfSeatId, n = 0; n < t.length; n++) (a = t[n]).seatid == e && this._tgc.seats[0].sitdown(a, !0);
var o = function(e) {
for (var n = 0; n < t.length; n++) if (t[n].seatid == e) return t[n];
return null;
};
for (n = 1; n < 5; n++) {
var i = e + n;
i > 4 && (i -= 5);
if (i != e) {
var a;
(a = o(i)) && this._tgc.seats[n].sitdown(a, !1);
}
}
};
e.prototype.getNextSeat = function(t) {
for (var e = this._selfSeatId, n = 1; n < 5; n++) {
var o = e + n;
o > 4 && (o -= 5);
if (o == t) return this._tgc.seats[n];
}
};
e.prototype.clearGame = function() {
this.EachSeat(function(t) {
t.cleanPlayer();
});
};
e.prototype.handler_server_game_start_bc = function(t) {
this.clearGame();
Log.d("游戏开始:", t);
this._currentGameing = !0;
t.waittime && (this._actionTime = t.waittime);
for (var e = 0, n = 0; n < t.players.length; n++) {
var o = t.players[n], i = this.getSeatByID(o.seatid);
if (null != i) {
i.startGame();
i.showDealer(t.dealer == i.seatid);
this.sendCardToPlayerByIndex(i, e);
this.sendCoinToLobby(i, t.cur_bet, t.total_bet);
this.setUserBalance(i, o.money);
e++;
}
}
this._tgc.operatorNode.active = !0;
this._tgc.button_Pack.node.active = !0;
this._tgc.button_show.node.active = !1;
this._tgc.button_chaar.node.active = !1;
this.setInteractableAll();
this.updateBetButton(t.cur_bet);
this.hideTip();
};
e.prototype.setInteractableAll = function() {
this._tgc.button_Pack.interactable = !1;
this._tgc.button_addBet.interactable = !1;
this._tgc.button_reduceBet.interactable = !1;
this._tgc.button_sideshow.interactable = !1;
this._tgc.button_blind.interactable = !1;
this._tgc.button_show.interactable = !1;
this._tgc.button_chaar.interactable = !1;
};
e.prototype.handler_server_next_bet_bc = function(t) {
Log.d("提醒用户操作:", t);
this.EachSeat(function(t) {
t.stopRoundCutDown();
});
var e = this.getSeatByID(t.seatid);
if (null != e) {
if (this.isMyPlayer(t.seatid)) {
this._tgc.button_Pack.node.active = !0;
this._tgc.button_Pack.interactable = !0;
this._tgc.button_chaar.interactable = !0;
this._tgc.button_blind.interactable = !0;
this._tgc.button_show.interactable = this._tgc.button_show.node.active = 1 == t.show;
this._tgc.button_sideshow.interactable = 1 == t.sideshow;
this.isFastPay() && this.myTurnFastBuyCallback();
} else this.setInteractableAll();
for (var n = 0; n < this._tgc.seats.length; n++) this._tgc.seats[n] == e && (this._curSeat = n);
e.setRoundCutDown(this._actionTime);
this.updateBetButton(t.cur_bet, this.isMyPlayer(t.seatid));
t.total_bet && this.updateGameAllBetLabel(t.total_bet);
}
};
e.prototype.update = function() {
this._tgc.button_sideshow.node.active = !this._tgc.button_show.node.active;
this._tgc.button_blind.node.active = !this._tgc.button_chaar.node.active;
this._tgc.table_info.active = !this._tgc.operatorNode.active;
this._tgc.button_switch_table.node.active = !this._tgc.operatorNode.active;
};
e.prototype.handler_show_bipai_btn = function(t) {
Log.d("看牌按钮:", t);
};
e.prototype.handler_server_bet_succ_bc = function(t) {
var e = this.getSeatByID(t.seatid);
if (null != e) {
t.action == G.SUB_CMD_TeenPatti.Action_PLAYER_SEE || e.stopRoundCutDown();
Log.d("玩家操作:", t);
var n = e.getAlreadySeeCard(), o = this.isMyPlayer(t.seatid);
o && this.setInteractableAll();
if (t.action == G.SUB_CMD_TeenPatti.Action_PLAYER_CALL) {
this.playEffect_ResouceBundle("table_common/teenpatti/sound/Chaal");
2 == t.bet_ratio ? n ? e.setBetTypeSpType(4) : e.setBetTypeSpType(2) : n ? e.setBetTypeSpType(3) : e.setBetTypeSpType(1);
} else if (t.action == G.SUB_CMD_TeenPatti.Action_PLAYER_COMPARE) {
var i = t.status, a = t.target_status, s = this.getSeatByID(t.target_seatid);
s.setBetTypeSpType(6);
var r = null;
2 == a ? r = s : 2 == i && (r = e);
this.show_vs_lost(e, s, r);
} else if (t.action == G.SUB_CMD_TeenPatti.Action_PLAYER_SEE) {
this.playEffect_ResouceBundle("table_common/teenpatti/sound/See_cards");
e.setAlreadySeeCard(!0);
this.isMyPlayer(t.seatid) && e.showMySelfCards(t.holes, t.card_type);
} else if (t.action == G.SUB_CMD_TeenPatti.Action_PLAYER_FOLD) {
this.playEffect_ResouceBundle("table_common/teenpatti/sound/drop_card");
e.showUserDropCard();
o && this.hideOperator();
} else t.action == G.SUB_CMD_TeenPatti.Action_PLAYER_PRE_COMPARE ? Log.d("比牌") : t.action == G.SUB_CMD_TeenPatti.Action_PLAYER_OK_PRE_COMPARE && Log.d("比牌结果");
t.bet && e.setUserBetValue(t.bet);
t.money && this.setUserBalance(e, t.money);
this.sendCoinToLobby(e, t.bet, t.total_bet, !0);
}
};
e.prototype.show_compared = function(t) {
this._tgc.sideShowBg.node.active = !0;
this._tgc.sideShowRichText.string = App.zLan.getBundleString(200007, t.data.name);
};
e.prototype.show_vs_lost = function(t, e, n) {
return s(this, void 0, void 0, function() {
var o, i, a, s, c, _, d, h = this;
return r(this, function() {
this._tgc.shandianParent.destroyAllChildren();
this.show_vs_animi();
if (m.CmmUtils.isNil(this.node)) return [ 2 ];
o = App.utils.localConvertWorldPointAR(t.line_node);
i = App.utils.localConvertWorldPointAR(e.line_node);
a = App.utils.worldConvertLocalPointAR(this._tgc.tableBg, o);
s = App.utils.worldConvertLocalPointAR(this._tgc.tableBg, i);
this.playEffect_ResouceBundle("table_common/teenpatti/sound/g_cmp_fire");
c = f.default.cal_angle(a, s);
(_ = cc.instantiate(this._tgc.lost_line)).setPosition(a);
this._tgc.shandianParent.addChild(_);
_.rotation = c + 180;
d = f.default.distance(a, s);
_.getChildByName("line").scaleX = d / 568;
_.getChildByName("line").getComponent(w.default).play(!0);
this.scheduleOnce(function() {
var t = cc.instantiate(h._tgc.lost_bomb);
n.line_node.addChild(t);
t.getComponent(w.default).play(!0);
n.showUserDropCard(.8, !0);
n.isself && h.hideOperator();
}, .2);
return [ 2 ];
});
});
};
e.prototype.show_vs_animi = function() {
this.playEffect_ResouceBundle("table_common/teenpatti/sound/VS");
};
e.prototype.handler_server_bet_succ_uc = function(t) {
var e = this.getSeatByID(t.seatid);
if (e) {
this.playEffect_ResouceBundle("table_common/teenpatti/sound/See_cards");
this._tgc.button_chaar.node.active = !0;
e.setAlreadySeeCard(!0);
this.isMyPlayer(t.seatid) && e.showMySelfCards(t.holes, t.card_type);
}
};
e.prototype.handler_server_game_end_bc = function(t) {
Log.d("游戏结束:", t);
this.EachSeat(function(t) {
t.stopGame();
});
this._tgc.vs_lost_node.active = !1;
this.hideSideShow();
this.updateGameAllBetLabel(t.total_bet);
for (var e = 0; e < t.players.length; e++) {
var n = t.players[e], o = this.getSeatByID(n.seatid);
if (null != o) {
this.setUserBalance(o, n.money);
1 != n.win && o.showWinLoseValue(-Math.abs(n.bet));
}
}
var i = this.getSeatByID(t.win_seatid);
if (i) {
i.showWinLoseValue(t.total_bet);
i.isself ? this.playEffect_ResouceBundle("table_common/teenpatti/sound/self_win") : this.playEffect_ResouceBundle("table_common/teenpatti/sound/other_win");
this.sendCoinToSeat(i);
}
this.setInteractableAll();
};
e.prototype.handler_server_chat_bc = function(t) {
Log.d("广播聊天:", t);
var e = this.getSeatByID(t.seatid);
e && e.showPlayerTalkSprite(t.text);
};
e.prototype.handler_server_show_card = function(t) {
for (var e = t.cardinfos, n = 0; n < e.length; n++) {
var o = e[n], i = this.getSeatByID(o.seatid);
i && i.showMySelfCards(o.cards, o.cardtype, !0);
}
};
e.prototype.handler_server_pre_slide_show_return = function() {
this.hideSideShow();
this.show_compared(this.getSelfSeat());
};
e.prototype.handler_server_sm_slide_show_return = function(t) {
var e = this.getSeatByID(t.seatid);
if (0 == t.ret && e) {
this.sendCoinToLobby(e, t.bet);
t.money && this.setUserBalance(e, t.money);
} else Log.e("比牌失败:", t);
};
e.prototype.handler_server_slide_bet_bc_return = function(t) {
var e = this.getSeatByID(t.seatid);
Log.d("广播玩家比牌:", t);
if (null != e) {
t.bet && e.setUserBetValue(t.bet);
e.setBetTypeSpType(5);
this.setUserBalance(e, t.money);
var n = this.getSeatByID(t.tar_seatid);
if (n && n.isself) {
this.show_compared(n);
this.setInteractableAll();
}
this.playSideShowAnimation(t.seatid, t.tar_seatid);
}
};
e.prototype.handler_server_agree_slide_show_return = function(t) {
this.hideSideShow();
Log.d("同意比牌:", t);
var e = this.getSeatByID(t.tar_seatid);
e && e.stopRoundCutDown();
};
e.prototype.handler_server_alert_slide_show_return = function(t) {
this.hideSideShow();
Log.d("拒绝比牌:", t);
var e = this.getSeatByID(t.useatid);
if (e) {
e.setNoAcceptActive(!0);
e.stopRoundCutDown();
}
};
e.prototype.handler_server_sm_all_show_return = function() {};
e.prototype.handler_server_sm_see_flag_return = function() {};
e.prototype.handler_server_player_buy_state = function(t) {
var e = this.getSeatByID(t.seatid);
null != e && e.hidePayWait();
};
e.prototype.handler_server_player_buy_start_state = function(t) {
var e = this.getSeatByID(t.seatid);
null != e && this.scheduleOnce(function() {
e.showPayWait();
}, 1);
};
e.prototype.handler_server_show_other_card = function(t) {
Log.e("other亮牌:", t);
};
e.prototype.handler_server_venhu_guide = function(t) {
var e = this;
if (this.isRealGold) {
Log.d("====tennpatti转场:", t);
this.scheduleOnce(function() {
var n = t.tips;
App.alert.show({
title: _.Config.alertTitlePath.TIPS,
confirmCb: function() {
e.isSelfPlaying;
},
cancelCb: function() {
e.isSelfPlaying || e.onClickSwitchRoom();
},
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: n,
hideX: !0
});
}, .5);
}
};
e.prototype.handler_server_alert_return = function(t) {
if (2 == t.type) this.myTurnFastBuyCallback(); else if (11 == t.type || 0 == t.type) {
t.alertStr && App.tips.show(t.alertStr);
this.doExitGame();
}
};
e.prototype.myTurnFastBuyCallback = function() {
E.default.isNeedShowRecharge(this._currentGenZhuBet, h.default.self.data.gameMoney) || E.default.showRecharge();
};
e.prototype.onClickSwitchRoom = function() {
this.isSelfPlaying ? App.tips.show("You can't change tables in the game") : this.doSwitchRoom();
};
e.prototype.doSwitchRoom = function() {
if (!this._clickSwitch) {
this._clickSwitch = !0;
this._tgc.button_switch_table.interactable = !1;
this.sender.switch_room();
this.scheduleOnce(this.resetSwitchClick, 5);
}
};
e.prototype.onClickPack = function() {
this.sender.qipai();
};
e.prototype.onClickSideshow = function() {
if (this.isFastPay()) this.myTurnFastBuyCallback(); else {
this.sender.slideshow();
this.setInteractableAll();
}
};
e.prototype.onClickShow = function() {
this.isFastPay() ? this.myTurnFastBuyCallback() : this.sender.endshow();
};
e.prototype.onClickChaal = function() {
this.isFastPay() ? this.myTurnFastBuyCallback() : this._currentGenZhuBet > this._minGenzhuBet ? this.sender.jiazhu(this._currentGenZhuBet) : this.sender.genzhu();
};
e.prototype.onClickBind = function() {
this.isFastPay() ? this.myTurnFastBuyCallback() : this._currentGenZhuBet > this._minGenzhuBet ? this.sender.jiazhu(this._currentGenZhuBet) : this.sender.genzhu();
};
e.prototype.isFastPay = function() {
return !!this.isRealGold && this._currentGenZhuBet > h.default.self.data.gameMoney;
};
e.prototype.updateBetButton = function(t, e) {
this._currentGenZhuBet = t;
this._minGenzhuBet = t;
this._tgc.label_currentBet.string = "" + t;
if (e) {
this._tgc.button_addBet.interactable = !0;
this._tgc.button_reduceBet.interactable = !1;
} else {
this._tgc.button_addBet.interactable = !1;
this._tgc.button_reduceBet.interactable = !1;
}
};
e.prototype.onClickAdd = function() {
this._tgc.button_addBet.interactable = !1;
this._tgc.button_reduceBet.interactable = !0;
this._currentGenZhuBet = 2 * this._minGenzhuBet;
this._tgc.label_currentBet.string = "" + this._currentGenZhuBet;
};
e.prototype.onClickSub = function() {
this._tgc.button_addBet.interactable = !0;
this._tgc.button_reduceBet.interactable = !1;
this._currentGenZhuBet = this._minGenzhuBet;
this._tgc.label_currentBet.string = "" + this._currentGenZhuBet;
};
e.prototype.onClickSee = function() {
this.sender.see();
};
e.prototype.onClickTongyiBipai = function() {
this.sender.agree();
};
e.prototype.onClickJujueBipai = function() {
this.sender.refused();
};
Object.defineProperty(e.prototype, "isSelfPlaying", {
get: function() {
var t = this.getSelfSeat();
return this._currentGameing && t && t.isPlaying;
},
enumerable: !1,
configurable: !0
});
e.prototype.onClickExit = function() {
if (this.isSelfPlaying) {
var t = App.zLan.getString(1118);
App.alert.show({
title: _.Config.alertTitlePath.TIPS,
confirmCb: function() {},
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: t,
hideX: !0
});
} else this.doExitGame();
};
e.prototype.getSeatByID = function(t) {
for (var e = 0; e < this._tgc.seats.length; e++) {
var n = this._tgc.seats[e];
if (n.data && n.data.seatid == t) return n;
}
return null;
};
e.prototype.sendCoinToLobby = function(t, e, n, o) {
var i = this;
if (null != e) {
var a = cc.instantiate(this._tgc.fly_prefab);
if (null != a) {
a.setPosition(t.node.position);
a.parent = this._tgc.tableBg;
var s = this._tgc.tableCoinBg.node.position, r = s.x, c = s.y;
a.scale = .7;
a.runAction(cc.sequence(cc.show(), cc.moveTo(.4, r, c), cc.delayTime(.01), cc.callFunc(function() {
o || t.setUserBetValue(e);
i.updateGameAllBetLabel(n);
}), cc.removeSelf()));
}
}
};
e.prototype.sendCoinToSeat = function(t) {
var e = this, n = cc.instantiate(this._tgc.fly_prefab);
n.setPosition(this._tgc.tableCoinBg.node.position);
n.parent = this._tgc.tableBg;
var o = t.node.position, i = o.x, a = o.y;
n.scale = .7;
n.runAction(cc.sequence(cc.show(), cc.moveTo(.4, i, a), cc.delayTime(.01), cc.callFunc(function() {
e.updateGameAllBetLabel(0);
}), cc.removeSelf()));
};
e.prototype.sendCardToPlayerByIndex = function(t, e) {
var n = this, o = this._tgc.flyCardSp.node.getPosition();
t.resetCardShow();
Log.e(e);
for (var i = function(o, i, a) {
var s = App.utils.worldConvertLocalPointAR(n._tgc.teenPattiBg.node, t.getCardPost(i)), r = .42;
t.isself && (r = .68);
var c = .3 * i + .1 * e;
o.runAction(cc.sequence(cc.hide(), cc.delayTime(c), cc.show(), cc.callFunc(function() {
n.playEffect_ResouceBundle("table_common/teenpatti/sound/Deal_Card");
}), cc.spawn(cc.moveTo(.2, s.x, s.y), cc.scaleTo(.2, r, r), cc.rotateTo(.2, 180)), cc.delayTime(.1), cc.callFunc(function() {
t.setShowCardActive(i, a);
}), cc.removeSelf()));
}, a = 0; a < 3; a++) {
var s = new cc.Node("Sprite");
s.addComponent(cc.Sprite).spriteFrame = this._tgc.card_sprite;
s.setPosition(o.x, o.y);
s.setScale(.3, .3);
this._tgc.teenPattiBg.node.addChild(s);
i(s, a, 2 == a);
}
};
e.prototype.updateGameAllBetLabel = function(t) {
null != t && (this._tgc.tableAllBet.string = m.CmmUtils.NumberToGameString(t, 2));
};
e.prototype.EachSeat = function(t) {
for (var e = 0; e < this._tgc.seats.length; e++) t && t(this._tgc.seats[e]);
};
e.prototype.playSideShowAnimation = function(t, e) {
var n = this;
this.playEffect_ResouceBundle("table_common/teenpatti/sound/sideshow_card");
var o = this.getSeatByID(t), i = this.getSeatByID(e);
if (o && i) {
for (var a = o.node.getPosition(), s = i.node.getPosition(), r = 0; r < 6; r++) {
var c = new cc.Node("Sprite");
c.addComponent(cc.Sprite).spriteFrame = this._tgc.sideShowAniSprite;
c.setPosition(a.x, a.y);
c.parent = this._tgc.tableBg;
c.runAction(cc.sequence(cc.hide(), cc.delayTime(.08 * r), cc.show(), cc.moveTo(.2, s.x, s.y), cc.removeSelf()));
}
this.schedule(function() {
for (var t = 0; t < 6; t++) {
var e = new cc.Node("Sprite");
e.addComponent(cc.Sprite).spriteFrame = n._tgc.sideShowAniSprite;
e.setPosition(a.x, a.y);
e.parent = n._tgc.tableBg;
e.runAction(cc.sequence(cc.hide(), cc.delayTime(.08 * t), cc.show(), cc.moveTo(.2, s.x, s.y), cc.removeSelf()));
}
}, 2);
}
};
e.prototype.hideSideShow = function() {
this._tgc.sideShowBg.node.active = !1;
this.unscheduleAllCallbacks();
};
e.prototype.hideOperator = function() {
this._tgc.operatorNode.active = !1;
};
e.prototype.setUserBalance = function(t, e) {
t.isself ? this.isRealGold ? h.default.self.updateGameMoney(e) : h.default.self.updateMoneyExe(e) : t.setUserBalance(e);
};
e.prototype.onUpdateMoney = function() {
var t = this.getSelfSeat();
t && (this.isRealGold ? t.setUserBalance(h.default.self.data.gameMoney) : t.setUserBalance(h.default.self.data.money_exe));
};
e.prototype.onClosed = function() {
this.EachSeat(function(t) {
t.isself || t.stand();
});
this._tgc.button_Pack.node.active = !1;
this.onPingTimeout();
};
e.prototype.onPingTimeout = function() {
var t = this;
if (this._isLogout) this._isLogout = !1; else {
this.sender.close();
var e = App.zLan.getString(1037);
App.alert.show({
title: _.Config.alertTitlePath.TIPS,
confirmCb: function() {
t.doExitGame();
},
cancelCb: function() {
t.doExitGame();
},
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: e,
hideX: !1
});
}
};
e.prototype.doExitGame = function() {
this._isLogout = !0;
this.sender.logout();
this.sender.close();
this.exitGameToHall();
d.GlobalVar.checkMode && T.default.showInterstitial();
};
e.prototype.doSelectAvatar = function(t) {
this._sel_avatar = t - 1;
if (null != this._tgc.seats[this._sel_avatar].data) {
this._tgc.panel_emoji.active = !0;
var e = this._tgc.seats[this._sel_avatar].node.parent.convertToWorldSpaceAR(this._tgc.seats[this._sel_avatar].node.position), n = this._tgc.panel_emoji.parent.convertToNodeSpaceAR(e);
this._tgc.panel_emoji.position = n;
}
};
e.prototype.doSelectEmoji = function(t) {
var e = t;
this._tgc.seats[this._sel_avatar] && this.sender.send_chat_Mofa(this._selfSeatId, this._tgc.seats[this._sel_avatar].seatid, e);
this._sel_avatar = -1;
this.hideEmoji();
};
e.prototype.PlayEmoji = function(t) {
var e = this.getSeatByID(t.seatid_send);
this.getSeatByID(t.seatid_recieve).play_emoji(e.node, t.emmID);
};
e.prototype.hideEmoji = function() {
this._sel_avatar = -1;
this._tgc.panel_emoji.active = !1;
};
e.prototype.onSendEmoji = function(t, e, n, o, i) {
if (!(e >= this._tgc.seats.length) && (-1 == e || o || null != this._tgc.seats[e].data)) {
var a = this.getSeatByID(t);
if (null != a) if (-1 == e) {
if (-1 == this._curSeat) return;
if (!this._tgc.seats[this._curSeat] || this._tgc.seats[this._curSeat].node == a.node) return;
this._tgc.seats[this._curSeat].play_emoji(a.node, n, i);
} else if (o) {
var s = this.getSeatByID(e);
s && s.play_emoji(a.node, n, i);
} else {
if (!this._tgc.seats[e] || this._tgc.seats[e].node == a.node) return;
this._tgc.seats[e].play_emoji(a.node, n, i);
}
}
};
a([ y.inject("teenPattiBg/tableBg/teen_seat5", cc.Node) ], e.prototype, "teen_seat5", void 0);
a([ y.inject("teenPattiBg/tableBg/teen_seat4", cc.Node) ], e.prototype, "teen_seat4", void 0);
a([ y.inject("teenPattiBg/tableBg/teen_seat3", cc.Node) ], e.prototype, "teen_seat3", void 0);
a([ y.inject("teenPattiBg/tableBg/teen_seat2", cc.Node) ], e.prototype, "teen_seat2", void 0);
a([ y.inject("teenPattiBg/tableBg/teen_seat1/sitdown/cardNode/seecardBtn", cc.Node) ], e.prototype, "seecardBtn", void 0);
a([ y.inject("teenPattiBg/operatorNode/addReduceBg/reduceCoinBtn", cc.Node) ], e.prototype, "reduceCoinBtn", void 0);
a([ y.inject("teenPattiBg/operatorNode/addReduceBg/addCoinBtn", cc.Node) ], e.prototype, "addCoinBtn", void 0);
a([ y.inject("teenPattiBg/operatorNode/packBtn", cc.Node) ], e.prototype, "packBtn", void 0);
a([ y.inject("teenPattiBg/operatorNode/bindBtn", cc.Node) ], e.prototype, "bindBtn", void 0);
a([ y.inject("teenPattiBg/operatorNode/chaarBtn", cc.Node) ], e.prototype, "chaarBtn", void 0);
a([ y.inject("teenPattiBg/operatorNode/showBtn", cc.Node) ], e.prototype, "showBtn", void 0);
a([ y.inject("teenPattiBg/operatorNode/sideshowBtn", cc.Node) ], e.prototype, "sideshowBtn", void 0);
a([ y.inject("teenPattiBg/table_info/SwitchButton", cc.Node) ], e.prototype, "SwitchButton", void 0);
a([ y.inject("teenPattiBg/sideShowBg/sideShowCloseBtn", cc.Node) ], e.prototype, "sideShowCloseBtn", void 0);
a([ y.inject("teenPattiBg/sideShowBg/sideShowSureBtn", cc.Node) ], e.prototype, "sideShowSureBtn", void 0);
a([ y.inject("EmojiPanel/Button_Close", cc.Node) ], e.prototype, "Button_Close", void 0);
return a([ O ], e);
}(S.default));
n.default = k;
cc._RF.pop();
}, {
"../../../../scripts/common/config/CmdConfig": void 0,
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/net/CmdDefines": void 0,
"../../../../scripts/common/protocol/HeartbetJson": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/common/utils/MathUtils": void 0,
"../../../../scripts/common/utils/UIUtils": void 0,
"../../../../scripts/framework/core/ui/GameView": void 0,
"../../../../scripts/framework/defines/Decorators": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/login/view/CommonUIHelper": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0,
"../../../../scripts/sdk/SdkManager": void 0,
"../../../../scripts/tableCommon/GameRoomView": void 0,
"../../../../scripts/tableCommon/fight/CountDownLabel": void 0,
"../../../../scripts/tableCommon/fight/UpDownLabel": void 0,
"../../../../scripts/tableCommon/teenpatti/TeenGameController": void 0,
"../../../../scripts/tableCommon/teenpatti/movie_clip": void 0,
"../../../../scripts/tableCommon/teenpatti/net/TeenPattiCmd": void 0,
"../../../../scripts/tableCommon/teenpatti/net/TeenPattiEvent": void 0,
"../net/TeenPattiHandler": "TeenPattiHandler",
"../net/TeenPattiSender": "TeenPattiSender",
"../net/TeenPattiService": "TeenPattiService"
} ]
}, {}, [ "TeenPattiEntry", "TeenPattiHandler", "TeenPattiSender", "TeenPattiService", "TeenPattiView" ]);