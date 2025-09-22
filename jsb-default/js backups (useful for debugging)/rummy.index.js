window.__require = function t(e, o, i) {
function n(s, a) {
if (!o[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var _ = "function" == typeof __require && __require;
if (!a && _) return _(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var p = o[s] = {
exports: {}
};
e[s][0].call(p.exports, function(t) {
return n(e[s][1][t] || t);
}, p, p.exports, t, e, o, i);
}
return o[s].exports;
}
for (var r = "function" == typeof __require && __require, s = 0; s < i.length; s++) n(i[s]);
return n;
}({
RummyCmd: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c5565IrJl5L9IHlNftowEfP", "RummyCmd");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SUB_CMD_Rummy = void 0;
o.SUB_CMD_Rummy = {
CLIENT_BeginGame_REQ: 5031,
SERVER_RefreshMaster_BC: 6031,
SERVER_IsStart: 8014,
SERVER_CREATE_REQ: 5e3,
SERVER_GAME_HEART: 8888,
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLEINFO_BC_RETURN: 7002,
SM_LOGIN_SUCC_BC_RETURN: 7003,
GM_LOGINOUT_REQUEST: 7004,
SM_LOGOUT_SUCC_BC_RETURN: 7005,
GM_CHANGE_REQUEST: 7006,
SM_NOTIFY_GAME_START_BC_RETURN: 7008,
SM_START_BC_RETURN: 7009,
GM_SELF_CARDS_REQUEST: 7010,
SM_SELF_CARDS_RETURN: 7011,
GM_GONG_CARDS_REQUEST: 7012,
SM_GONG_CARDS_RETURN: 7013,
SM_NEXT_DEAL_BC_RETURN: 7014,
GM_DROP_CARD_REQUEST: 7015,
SM_DROP_CARD_RETURN: 7016,
SM_DROP_CARD_BC_RETURN: 7017,
GM_PICK_CARD_REQUEST: 7018,
SM_PICK_CARD_RETRUN: 7019,
SM_PICK_CARD_BC_RETRUN: 7020,
GM_DISCARD_CARD_REQUEST: 7021,
SM_DISCARD_CARD_RETURN: 7022,
SM_DISCARD_CARD_BC_RETURN: 7023,
GM_MOVE_CARD_REQUEST: 7024,
SM_MOVE_CARD_REQUEST: 7025,
GM_GROUP_CARD_REQUEST: 7026,
SM_GROUP_CARD_REQUEST: 7027,
GM_DECARE_CARD_REQUEST: 7028,
SM_DECARE_CARD_RETURN: 7029,
SM_DECARE_CARD_BC_RETURN: 7030,
GM_FINISH_REQUEST: 7031,
SM_FINISH_RETURN: 7032,
SM_GAME_END_BC_INFORM: 7033,
GM_LAST_CARD_REQUEST: 7034,
SM_LAST_CARD_RETURN: 7035,
GF_CLIENT_CHAT_REQ: 7036,
SM_CHAT_RETURN: 7037,
SM_CHAT_BC_RETURN: 7038,
GF_CLIENT_EMOTION_REQ: 7039,
SM_EXPRESSION_RETURN: 7040,
SM_EXPRESSION_BC_RETURN: 7041,
GF_CLIENT_FACE_REQ: 7042,
SM_NORMALEXPRESION_REQUEST: 7043,
SM_NORMALEXPRESION_BC_RETURN: 7044,
SM_LEVEL_CD_BC_RETURN: 7045,
GM_FLUSH_TABLEINFO_REQUEST: 7046,
GM_DECARE_CARD_CHECK_RETURN: 7047,
SM_DECARE_CARD_CHECK_RETURN: 7048,
GM_GAME_SHOW_INFO: 7051,
SM_GAME_SHOW_INFO: 7052,
GM_ADD_CARD_REQUEST: 7053,
SM_ADD_CARD_RETURN: 7054,
SM_NOTIFY_MONEY_CHANGE_BC_RETURN: 7056,
SERVER_ALERT_RETURN: 5044,
GM_NOTIFY_BUY_REQUEST: 5026,
SM_NOTIFY_DRAW_CARDS_BC_RETURN: 7059,
SM_FINISH_RETURN_BC: 7060,
SM_GAME_SHOW_SWITCH: 7061,
GF_RollDice_GM_NOTIFY_BET_CHANGE: 6017,
GF_RollDice_GM_BET_REQUEST: 6012,
GF_RollDice_GM_PLAYERS_INFO_REQUEST: 6026,
GM_OUT_CARD_RECORD_REQ: 7057,
SM_OUT_CARD_RECORD_RETURN: 7058
};
cc._RF.pop();
}, {} ],
RummyEntry: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0d723MG8rdGWLuFDHrP3D7u", "RummyEntry");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../scripts/framework/core/entry/Entry"), a = t("../../../scripts/framework/defines/Macros"), c = t("../../../scripts/framework/defines/Decorators"), _ = t("./view/RummyView");
(function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.loadResources = function(t) {
t();
};
e.prototype.initData = function() {};
e = r([ c.registerEntry("RummyEntry", a.Macro.BUNDLE_rummy, _.default) ], e);
})(s.Entry);
cc._RF.pop();
}, {
"../../../scripts/framework/core/entry/Entry": void 0,
"../../../scripts/framework/defines/Decorators": void 0,
"../../../scripts/framework/defines/Macros": void 0,
"./view/RummyView": "RummyView"
} ],
RummyEvent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2a277CEm59Pm5VBjseMweTi", "RummyEvent");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.RummyGameEvent = void 0;
(o.RummyGameEvent || (o.RummyGameEvent = {})).Rummy_Server_Event = "Rummy_Server_Event";
cc._RF.pop();
}, {} ],
RummyGameController: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "37c82LFHxZM74t1v4LAG9na", "RummyGameController");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./panel_game_rummy_info"), a = t("./panel_game_rummy_peopleitem"), c = t("./rummy_group_card"), _ = t("./panel_game_rummy_closed_deck"), p = t("./panel_game_rummy_open_deck"), l = t("./panel_game_rummy_finish_panel"), d = t("./panel_outcard"), u = cc._decorator, h = u.ccclass, m = u.property, y = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.game_bgm = null;
e.cards_root = null;
e.self_player = null;
e.top_player = null;
e.fapai_node = null;
e.histroy_button = null;
e.panel_buttons = null;
e.button_question = null;
e.panel_tableinfo_prefab = null;
e.button_buttons_discard = null;
e.button_buttons_drop = null;
e.panel_cardsDropSp = null;
e.panel_finish = null;
e.button_buttons_finish = null;
e.button_buttons_group = null;
e.panel_card_tips = null;
e.sprite_bottom_card = null;
e.sprite_card_light = null;
e.sprite_card_light_arrow = null;
e.deck_open = null;
e.deck_close = null;
e.sprite_close_deck_arrow = null;
e.sprite_close_deck_light = null;
e.sprite_finish_light = null;
e.sprite_finish_arrow = null;
e.clock_item = null;
e.clock_label = null;
e.panel_result_prefab = null;
e.card_prefab = null;
e.coinout_prefab = null;
e.gamestart_anim = null;
e.winner_anim = null;
e.button_historycards = null;
e.panel_card_counter = null;
e.panel_wait_declare = null;
e.closeDeckBg = null;
e.closeDeckLabel = null;
e.openDeckBg = null;
e.openDeckLabel = null;
e.panel_declare = null;
e.label_declare = null;
e.drop_label = null;
e.check_drop_node = null;
e.out_record = null;
e.panel_emoji = null;
return e;
}
r([ m({
displayName: "背景音效",
type: cc.AudioClip
}) ], e.prototype, "game_bgm", void 0);
r([ m(c.default) ], e.prototype, "cards_root", void 0);
r([ m(s.default) ], e.prototype, "self_player", void 0);
r([ m(a.default) ], e.prototype, "top_player", void 0);
r([ m(cc.Node) ], e.prototype, "fapai_node", void 0);
r([ m(cc.Node) ], e.prototype, "histroy_button", void 0);
r([ m({
displayName: "按钮面板",
type: cc.Node
}) ], e.prototype, "panel_buttons", void 0);
r([ m({
displayName: "房间详情",
type: cc.Button
}) ], e.prototype, "button_question", void 0);
r([ m({
displayName: "桌子信息预制物",
type: cc.Prefab
}) ], e.prototype, "panel_tableinfo_prefab", void 0);
r([ m({
displayName: "Discard",
type: cc.Button
}) ], e.prototype, "button_buttons_discard", void 0);
r([ m({
displayName: "Drop",
type: cc.Button
}) ], e.prototype, "button_buttons_drop", void 0);
r([ m({
displayName: "弃牌遮罩",
type: cc.Sprite
}) ], e.prototype, "panel_cardsDropSp", void 0);
r([ m({
displayName: "Finish面板",
type: l.default
}) ], e.prototype, "panel_finish", void 0);
r([ m({
displayName: "Finish",
type: cc.Button
}) ], e.prototype, "button_buttons_finish", void 0);
r([ m({
displayName: "Group",
type: cc.Button
}) ], e.prototype, "button_buttons_group", void 0);
r([ m({
displayName: "牌提示",
type: cc.Node
}) ], e.prototype, "panel_card_tips", void 0);
r([ m({
displayName: "底牌",
type: cc.Sprite
}) ], e.prototype, "sprite_bottom_card", void 0);
r([ m({
displayName: "Open牌-光",
type: cc.Sprite
}) ], e.prototype, "sprite_card_light", void 0);
r([ m({
displayName: "Open牌箭头",
type: cc.Sprite
}) ], e.prototype, "sprite_card_light_arrow", void 0);
r([ m({
displayName: "摸牌-Open",
type: p.default
}) ], e.prototype, "deck_open", void 0);
r([ m({
displayName: "摸牌-Close",
type: _.default
}) ], e.prototype, "deck_close", void 0);
r([ m({
displayName: "Close牌箭头",
type: cc.Sprite
}) ], e.prototype, "sprite_close_deck_arrow", void 0);
r([ m({
displayName: "Close牌-光",
type: cc.Sprite
}) ], e.prototype, "sprite_close_deck_light", void 0);
r([ m({
displayName: "Finish面板-光",
type: cc.Sprite
}) ], e.prototype, "sprite_finish_light", void 0);
r([ m({
displayName: "Finish面板-箭头",
type: cc.Sprite
}) ], e.prototype, "sprite_finish_arrow", void 0);
r([ m({
displayName: "倒计时bg",
type: cc.Node
}) ], e.prototype, "clock_item", void 0);
r([ m({
displayName: "倒计时",
type: cc.Label
}) ], e.prototype, "clock_label", void 0);
r([ m({
displayName: "结果界面预制物",
type: cc.Prefab
}) ], e.prototype, "panel_result_prefab", void 0);
r([ m({
displayName: "牌预制物",
type: cc.Prefab
}) ], e.prototype, "card_prefab", void 0);
r([ m({
displayName: "金币输赢预制物",
type: cc.Prefab
}) ], e.prototype, "coinout_prefab", void 0);
r([ m({
displayName: "开始动画",
type: cc.Node
}) ], e.prototype, "gamestart_anim", void 0);
r([ m({
displayName: "胜利动画",
type: cc.Node
}) ], e.prototype, "winner_anim", void 0);
r([ m({
displayName: "记牌器",
type: cc.Button
}) ], e.prototype, "button_historycards", void 0);
r([ m({
displayName: "记牌器面板",
type: cc.Node
}) ], e.prototype, "panel_card_counter", void 0);
r([ m({
displayName: "等待其他人面板",
type: cc.Node
}) ], e.prototype, "panel_wait_declare", void 0);
r([ m({
displayName: "closeDeckBg",
type: cc.Sprite
}) ], e.prototype, "closeDeckBg", void 0);
r([ m({
displayName: "closeDeckLabel",
type: cc.Label
}) ], e.prototype, "closeDeckLabel", void 0);
r([ m({
displayName: "openDeckBg",
type: cc.Sprite
}) ], e.prototype, "openDeckBg", void 0);
r([ m({
displayName: "openDeckLabel",
type: cc.Label
}) ], e.prototype, "openDeckLabel", void 0);
r([ m({
displayName: "Declare",
type: cc.Node
}) ], e.prototype, "panel_declare", void 0);
r([ m({
displayName: "DeclareLabel",
type: cc.Label
}) ], e.prototype, "label_declare", void 0);
r([ m({
displayName: "drop_label",
type: cc.Label
}) ], e.prototype, "drop_label", void 0);
r([ m({
displayName: "check_drop_node",
type: cc.Node
}) ], e.prototype, "check_drop_node", void 0);
r([ m({
displayName: "out_record",
type: d.default
}) ], e.prototype, "out_record", void 0);
r([ m({
displayName: "表情选择框",
type: cc.Node
}) ], e.prototype, "panel_emoji", void 0);
return r([ h ], e);
}(cc.Component);
o.default = y;
cc._RF.pop();
}, {
"./panel_game_rummy_closed_deck": "panel_game_rummy_closed_deck",
"./panel_game_rummy_finish_panel": "panel_game_rummy_finish_panel",
"./panel_game_rummy_info": "panel_game_rummy_info",
"./panel_game_rummy_open_deck": "panel_game_rummy_open_deck",
"./panel_game_rummy_peopleitem": "panel_game_rummy_peopleitem",
"./panel_outcard": "panel_outcard",
"./rummy_group_card": "rummy_group_card"
} ],
RummyHandler: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "60535Ef+l1KOK0wAbWBBPEU", "RummyHandler");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/framework/core/net/service/Handler"), s = t("../../../../scripts/common/net/GetCmdKey"), a = t("./RummyService"), c = t("./RummyCmd"), _ = t("../../../../scripts/common/config/CmdConfig"), p = t("./RummyEvent"), l = t("../../../../scripts/common/net/CommonGameJson"), d = t("../../../../scripts/framework/defines/Macros"), u = t("../../../../scripts/common/utils/CmmUtils"), h = t("./RummySender"), m = t("../../../../scripts/common/net/CmdDefines"), y = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "service", {
get: function() {
return App.serviceManager.get(a.RummyService);
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, m.SUB_CMD_SYS.CMD_Game_Time_Out), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SERVER_GAME_HEART), this.server_game_heart, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_LOGIN_RETURN), this.sm_login, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_TABLEINFO_BC_RETURN), this.sm_tableinfo_bc, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_OUT_CARD_RECORD_RETURN), this.sm_out_card_record, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_LOGIN_SUCC_BC_RETURN), this.sm_login_succ_bc, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_NOTIFY_GAME_START_BC_RETURN), this.sm_notify_game_start_bc, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_START_BC_RETURN), this.sm_start_bc, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_SELF_CARDS_RETURN), this.sm_self_cards, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_NEXT_DEAL_BC_RETURN), this.sm_next_deal_bc, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_DROP_CARD_BC_RETURN), this.sm_drop_card_bc, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_GAME_END_BC_INFORM), this.sm_game_end_bc, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_PICK_CARD_RETRUN), this.sm_pick_card, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_PICK_CARD_BC_RETRUN), this.sm_pick_card_bc, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_DISCARD_CARD_RETURN), this.sm_discard_card, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_DISCARD_CARD_BC_RETURN), this.sm_discard_card_bc, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_GONG_CARDS_RETURN), this.sm_gong_cards, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SERVER_ALERT_RETURN), this.server_alert, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.GF_CLIENT_CHAT_REQ), this.sm_chat_bc, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_LOGOUT_SUCC_BC_RETURN), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_DROP_CARD_RETURN), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_DECARE_CARD_RETURN), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_DECARE_CARD_BC_RETURN), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_MOVE_CARD_REQUEST), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_GROUP_CARD_REQUEST), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_FINISH_RETURN), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_FINISH_RETURN_BC), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_LAST_CARD_RETURN), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_GAME_SHOW_INFO), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_DECARE_CARD_CHECK_RETURN), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, _.default.CommonRoomTCP.SERVER_VENHU_GUIDE), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_NOTIFY_MONEY_CHANGE_BC_RETURN), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_ADD_CARD_RETURN), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_GAME_SHOW_SWITCH), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SM_NOTIFY_DRAW_CARDS_BC_RETURN), this.commfunction, l.CommonGameJson);
this.onS(s.GetCmdKey(m.MainCmd.CMD_GAME, c.SUB_CMD_Rummy.SERVER_CREATE_REQ), this.commfunction, l.CommonGameJson);
};
e.prototype.server_game_heart = function() {};
e.prototype.sm_login = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_tableinfo_bc = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_out_card_record = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_login_succ_bc = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_notify_game_start_bc = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_start_bc = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_self_cards = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_next_deal_bc = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_drop_card_bc = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_game_end_bc = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_pick_card = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_pick_card_bc = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_discard_card = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_discard_card_bc = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_gong_cards = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.server_alert = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.sm_chat_bc = function(t) {
dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.prototype.commfunction = function(t) {
if (t.subCmd == m.SUB_CMD_SYS.CMD_Game_Time_Out) {
var e = App.senderManager.get(h.RummySender);
u.CmmUtils.popRet1(t.data, e);
} else dispatch(p.RummyGameEvent.Rummy_Server_Event, t);
};
e.module = d.Macro.BUNDLE_rummy;
return e;
}(r.Handler);
o.default = y;
cc._RF.pop();
}, {
"../../../../scripts/common/config/CmdConfig": void 0,
"../../../../scripts/common/net/CmdDefines": void 0,
"../../../../scripts/common/net/CommonGameJson": void 0,
"../../../../scripts/common/net/GetCmdKey": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/core/net/service/Handler": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"./RummyCmd": "RummyCmd",
"./RummyEvent": "RummyEvent",
"./RummySender": "RummySender",
"./RummyService": "RummyService"
} ],
RummySender: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8fa0bWY7n9HeLna26T9dqES", "RummySender");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.RummySender = void 0;
var r = t("../../../../scripts/common/config/User"), s = t("../../../../scripts/common/net/CommonGameJson"), a = t("../../../../scripts/common/net/HttpSender"), c = t("../../../../scripts/framework/defines/Macros"), _ = t("./RummyCmd"), p = t("./RummyService"), l = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "service", {
get: function() {
return App.serviceManager.get(p.RummyService);
},
enumerable: !1,
configurable: !0
});
e.prototype.continue = function() {
this.switch_room(5);
};
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
var t = new s.CommonGameJson();
t.subCmd = _.SUB_CMD_Rummy.SERVER_CREATE_REQ;
this.send(t);
};
e.prototype.login = function(t) {
var e = new s.CommonGameJson();
e.subCmd = _.SUB_CMD_Rummy.GM_LOGIN_REQUEST;
e.data.roomId = t;
this.send(e);
};
e.prototype.logout = function() {
var t = new s.CommonGameJson();
t.subCmd = _.SUB_CMD_Rummy.GM_LOGINOUT_REQUEST;
this.send(t);
};
e.prototype.send_player_will_goto_shop = function() {
var t = new s.CommonGameJson();
t.subCmd = _.SUB_CMD_Rummy.GM_NOTIFY_BUY_REQUEST;
this.send(t);
};
e.prototype.send_request_tableinfo = function() {
var t = new s.CommonGameJson();
t.subCmd = _.SUB_CMD_Rummy.GM_FLUSH_TABLEINFO_REQUEST;
this.send(t);
};
e.prototype.send_drop = function() {
var t = new s.CommonGameJson();
t.subCmd = _.SUB_CMD_Rummy.GM_DROP_CARD_REQUEST;
this.send(t);
};
e.prototype.sendDiscard = function(t, e, o) {
this.lockOutCard = !0;
var i = new s.CommonGameJson();
i.subCmd = _.SUB_CMD_Rummy.GM_DISCARD_CARD_REQUEST;
i.data.index = t, i.data.card_index = e, i.data.card = o, i.data.discard_type = 0, 
this.send(i);
};
e.prototype.sendDiscardAndfinish = function(t, e, o) {
this.lockOutCard = !0;
var i = new s.CommonGameJson();
i.subCmd = _.SUB_CMD_Rummy.GM_DISCARD_CARD_REQUEST;
i.data.index = t;
i.data.card_index = e;
i.data.card = o;
i.data.discard_type = 1;
this.send(i);
};
e.prototype.get_last_card_request = function() {
var t = new s.CommonGameJson();
t.subCmd = _.SUB_CMD_Rummy.GM_LAST_CARD_REQUEST;
this.send(t);
};
e.prototype.get_show_info_request = function() {
var t = new s.CommonGameJson();
t.subCmd = _.SUB_CMD_Rummy.GM_GAME_SHOW_INFO;
this.send(t);
};
e.prototype.get_public_cards_request = function() {
var t = new s.CommonGameJson();
t.subCmd = _.SUB_CMD_Rummy.GM_GONG_CARDS_REQUEST;
this.send(t);
};
e.prototype.get_out_cards_request = function() {
var t = new s.CommonGameJson();
t.subCmd = _.SUB_CMD_Rummy.GM_OUT_CARD_RECORD_REQ;
this.send(t);
};
e.prototype.switch_room = function(t) {
void 0 === t && (t = 1);
var e = new s.CommonGameJson();
e.subCmd = _.SUB_CMD_Rummy.GM_CHANGE_REQUEST;
e.data.uid = r.default.self.uid;
e.data.type = t;
this.send(e);
};
e.prototype.pick_card_request = function(t) {
var e = new s.CommonGameJson();
e.subCmd = _.SUB_CMD_Rummy.GM_PICK_CARD_REQUEST;
e.data.type = t;
this.send(e);
};
e.prototype.finish_request = function() {
var t = new s.CommonGameJson();
t.subCmd = _.SUB_CMD_Rummy.GM_FINISH_REQUEST;
this.send(t);
};
e.prototype.handler_server_declare_check_request = function(t, e) {
this.lockOutCard = !0;
var o = new s.CommonGameJson();
o.subCmd = _.SUB_CMD_Rummy.GM_DECARE_CARD_CHECK_RETURN;
o.data.card = t;
o.data.index = e;
this.send(o);
};
e.prototype.move_card_request = function(t, e, o) {
var i = new s.CommonGameJson();
i.subCmd = _.SUB_CMD_Rummy.GM_MOVE_CARD_REQUEST;
i.data.card = t;
i.data.from_index = e.group;
i.data.from_card_index = e.index;
i.data.to_index = o.group;
i.data.to_card_index = o.index;
this.send(i);
};
e.prototype.add_card_request = function(t, e) {
var o = new s.CommonGameJson();
o.subCmd = _.SUB_CMD_Rummy.GM_ADD_CARD_REQUEST;
o.data.cards = [];
o.data.indexs = [];
o.data.cardindexs = [];
o.data.to_groupindex = t;
if (e && e.length) {
for (var i = 0; i < e.length; i++) {
o.data.cards.push(e[i].value);
o.data.indexs.push(e[i].group);
o.data.cardindexs.push(e[i].index);
}
this.send(o);
}
};
e.prototype.group_card_request = function(t) {
var e = new s.CommonGameJson();
e.subCmd = _.SUB_CMD_Rummy.GM_GROUP_CARD_REQUEST;
e.data.cards = [];
e.data.indexs = [];
e.data.cardindexs = [];
if (t && t.length) {
for (var o = 0; o < t.length; o++) {
e.data.cards.push(t[o].value);
e.data.indexs.push(t[o].group);
e.data.cardindexs.push(t[o].index);
}
this.send(e);
}
};
e.prototype.send_chat_text = function(t, e) {
var o = new s.CommonGameJson();
o.subCmd = _.SUB_CMD_Rummy.GF_CLIENT_CHAT_REQ;
o.data.text = e;
o.data.seatid = t;
o.data.chatid = 1;
this.send(o);
};
e.module = c.Macro.BUNDLE_rummy;
return e;
}(a.default);
o.RummySender = l;
cc._RF.pop();
}, {
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/net/CommonGameJson": void 0,
"../../../../scripts/common/net/HttpSender": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"./RummyCmd": "RummyCmd",
"./RummyService": "RummyService"
} ],
RummyService: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "082930q/g5APIp3UceCOwim", "RummyService");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.RummyService = void 0;
var r = t("../../../../scripts/common/config/Config"), s = t("../../../../scripts/common/net/CommonService"), a = t("../../../../scripts/framework/defines/Macros"), c = t("../../../../scripts/sdk/GameNativeConfig"), _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.priority = r.NetPriority.Game;
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
e.module = a.Macro.BUNDLE_rummy;
return e;
}(s.CommonService);
o.RummyService = _;
cc._RF.pop();
}, {
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/net/CommonService": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0
} ],
RummyView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5b9d47rr8pJ4bFQ0bFRQpdf", "RummyView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../old/panel_game_rummy_coinout_item"), a = t("../net/RummySender"), c = t("../../../../scripts/framework/core/ui/GameView"), _ = t("../../../../scripts/common/config/GlobalVar"), p = t("../../../../scripts/sdk/GameNativeConfig"), l = t("../../../../scripts/common/config/CmdConfig"), d = t("../../../../scripts/common/config/Config"), u = t("../../../../scripts/framework/defines/Decorators"), h = t("../old/RummyGameController"), m = t("../net/RummyEvent"), y = t("../../../../scripts/framework/defines/Enums"), f = t("../../../../scripts/common/utils/UIUtils"), v = t("../../../../scripts/common/config/User"), g = t("../../../../scripts/framework/defines/Macros"), C = t("../item/panel_game_rummy_result"), b = t("../../../../scripts/common/event/CommonEvent"), R = t("../../../../scripts/tableCommon/fight/UpDownLabel"), S = t("../../../../scripts/tableCommon/fight/CountDownLabel"), E = t("../../../../scripts/login/view/CommonUIHelper"), N = t("../../../../scripts/tableCommon/CardHelp"), M = t("../../../../scripts/tableCommon/GameRoomView"), A = t("../net/RummyService"), w = t("../net/RummyHandler"), O = t("../../../../scripts/common/protocol/HeartbetJson"), D = t("../../../../scripts/tableCommon/teenpatti/net/TeenPattiEvent"), T = t("../../../../scripts/sdk/SdkManager"), G = cc._decorator, k = G.ccclass, L = (G.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.AvatarItem = null;
e.Sprite_ClosedDeck = null;
e.CardBtn = null;
e.Button_HistroyCards = null;
e.Button_Declare = null;
e.Button_Drop = null;
e.Button_Finish = null;
e.Button_Group = null;
e.Button_Discard = null;
e.Button_HistroyCards2 = null;
e.Button_No = null;
e.Button_Yes = null;
e.Button_Close = null;
e.game_state = null;
e.waitNode = null;
e._selfSeatId = -1;
e.history_cards = [];
e._real_cards = [];
e.sender = null;
e._drop_money = 0;
e.roomDataConfigs = null;
e.curRoomData = null;
e._my_drag_card = null;
return e;
}
e.getPrefabUrl = function() {
return "prefabs/RummyView";
};
e.prototype.onDestroy = function() {
_.GlobalVar.wildJoker = null;
t.prototype.onDestroy.call(this);
};
e.prototype.onLoad = function() {
var e = this;
_.GlobalVar.curGameId = p.default.GameType.Rummy;
this.bundle = g.Macro.BUNDLE_rummy;
var o = {
gameName: "Rummy",
callback_chooseRoom: this.ChooseRoom.bind(this),
callback_refreshCoin: this.RefreshCoin.bind(this),
isFirstLoad: !0
};
this.openRoomTC(o);
t.prototype.onLoad.call(this);
this.playMusic("sound/rummy_music_bg");
this._rgc = this.node.getComponent(h.default);
this._rgc.self_player.init_player({});
this.sender = App.senderManager.get(a.RummySender);
this.clearDesktop();
this._rgc.out_record.node.active = !1;
this.onD(p.default.Event.talk_about, function(t) {
e.sender.send_chat_text(e._selfSeatId, t);
});
cc.game.on("drag.card", this.onMoveCard, this);
cc.game.on("update.card", function() {
e._rgc.cards_root.update_sort_position();
e.update_group_button();
}, this);
cc.game.on(p.default.Event.ADD_GROUP, function(t) {
var o = e._rgc.cards_root.getOutCards();
o && e.sender.add_card_request(t, o);
}, this);
cc.game.on(p.default.Event.continue, function() {
if (e.isNoMoreMoney) e.myTurnFastBuyCallback(); else {
e.sender.continue();
cc.game.emit(p.default.Event.on_continue);
}
}, this);
cc.game.on("onSendEmoji", this.onSendEmoji, this);
this._init();
this.node.active = !1;
dispatch(b.CommonEvent.Open_Show_Hide_laba, !0);
};
e.prototype.addEvents = function() {
this.onD(p.default.Event.game_open, this.openReconn);
this.onD(p.default.Event.game_close, this.onClosed);
this.onD(p.default.Event.update_money, this.onUpdateMoney);
this.onD(m.RummyGameEvent.Rummy_Server_Event, this.parseGameMsg);
this.onN(this.AvatarItem, y.NodeEvent.click, this.doSelectAvatar);
this.onN(this.Sprite_ClosedDeck, y.NodeEvent.click, this.onClickCloseDeck);
this.onN(this.CardBtn, y.NodeEvent.click, this.onClickOpenDeck);
this.onN(this.Button_HistroyCards, y.NodeEvent.click, this.onClickHistoryCards);
this.onN(this.Button_Declare, y.NodeEvent.click, this.onClickDeclare);
this.onN(this.Button_Drop, y.NodeEvent.click, this.onClickDrop);
this.onN(this.Button_Finish, y.NodeEvent.click, this.onClickFinish);
this.onN(this.Button_Group, y.NodeEvent.click, this.onClickGroup);
this.onN(this.Button_Discard, y.NodeEvent.click, this.onClickDiscard);
this.onN(this.Button_HistroyCards2, y.NodeEvent.click, this.onClickHistoryCards);
this.onN(this.Button_No, y.NodeEvent.click, this.onClickDropClose);
this.onN(this.Button_Yes, y.NodeEvent.click, this.onClickDropSend);
this.onN(this.Button_Close, y.NodeEvent.click, this.hideEmoji);
this.onD(b.ComponentGameEvent.Game_SwitchTable_Event, this.onClickSwitchRoom);
this.onD(b.ComponentGameEvent.Game_Exit_Event, this.onClickExit);
};
e.prototype.bindingNetServer = function() {
this.server = App.serviceManager.get(A.RummyService, !0);
this.sender = App.senderManager.get(a.RummySender);
App.handlerManager.get(w.default);
var t = _.GlobalVar.host.split(":"), e = t[1].replace("//", ""), o = t[2], i = t[0];
this.server.initIP_PORT(e, o, i);
this.server.heartbeat = O.HeartbeatJson;
this.server.maxEnterBackgroundTime = 5;
this.sender.reconnect();
};
e.prototype.removeNetServer = function() {
App.senderManager.destory(a.RummySender);
App.handlerManager.destory(w.default);
App.serviceManager.destory(A.RummyService);
this.offD(p.default.Event.game_close);
this.offD(b.ComponentGameEvent.Game_Exit_Event);
};
e.prototype.openReconn = function() {
this.sender.creatRoom();
};
e.prototype.handler_server_createRoom = function(t) {
Log.e("createRoom==>" + JSON.stringify(t));
this.roomDataConfigs = t;
t.gameName = "Rummy";
t.callback_chooseRoom = this.ChooseRoom.bind(this);
t.callback_refreshCoin = this.RefreshCoin.bind(this);
t.isFirstLoad = !1;
_.GlobalVar.singleGameRule = t.ruleUrl;
this.openRoomTC(t);
};
e.prototype.openRoomTC = function(t) {
App.uiManager.isShow(M.default) ? dispatch(D.TeenPattiGameEvent.TeenPattiEvent_refreshRoom, t) : App.uiManager.open({
type: M.default,
bundle: g.Macro.BUNDLE_RESOURCES,
zIndex: d.ViewZOrder.UI,
args: t
});
this.node.active = !0;
};
e.prototype.ChooseRoom = function(t) {
this.curRoomData = this.roomDataConfigs.rooms[t];
Log.e(this.curRoomData);
console.error(this.args);
this.args = {};
this.args.cur = this.curRoomData;
this.sender.login(this.curRoomData.roomId);
};
e.prototype.RefreshCoin = function() {
Log.e("--------RefreshCoin");
this.sender.creatRoom();
};
e.prototype._init = function() {
for (var t = this, e = cc.find("EmojiPanel/Layout", this.node).children, o = function(o) {
var n = e[o];
i.onN(n, y.NodeEvent.click, function() {
t.doSelectEmoji(o);
});
}, i = this, n = 0; n < e.length; n++) o(n);
};
e.prototype.unlockOutCard = function() {
this.sender.lockOutCard = !1;
this._is_fly_out = !1;
};
e.prototype.onMoveCard = function(t, e) {
if (this.sender.lockOutCard) this._rgc.cards_root.update_sort_position(); else {
if (this._rgc.cards_root.canOut) {
if (t.y > 200 && t.x < 100 && t.x > -100) {
this._my_drag_card = e;
this._is_fly_out = !0;
this.sender.handler_server_declare_check_request(e.value, e.group);
return;
}
if (t.y > 200) {
this._my_drag_card = e;
this._is_fly_out = !0;
this.sender.sendDiscard(e.group, e.index, e.value);
return;
}
}
var o = this._rgc.cards_root.getInsertData(t, e);
null == o || o.group == e.group && o.index == e.index ? this._rgc.cards_root.update_sort_position() : this.sender.move_card_request(e.value, e, o);
}
};
e.prototype.start1 = function() {
var t = [ 17, 18, 18, 18 ], e = [ {
cards: t.slice()
}, {
cards: t.slice()
}, {
cards: t.slice()
}, {
cards: [ 17, 4 ]
} ];
this._rgc.top_player.init_player({
money: 1e4,
name: "top"
});
this.handler_server_game_start_bc();
this.handler_server_self_cards_return({
cardinfos: e,
dc_card: 2,
lz_card: 5
});
this.handler_server_next_deal_bc_return({});
this.handler_server_pre_start_bc({
cd: 12
});
};
e.prototype.parseGameMsg = function(t) {
var e = t.subCmd, o = t.data;
e == l.default.RummyTcp.SERVER_CREATE_REQ ? this.handler_server_createRoom(o) : e == l.default.RummyTcp.SM_LOGIN_RETURN ? this.handler_server_login_return(o) : e == l.default.RummyTcp.SM_TABLEINFO_BC_RETURN ? this.handler_server_table_info_uc(o) : e == l.default.RummyTcp.SERVER_ALERT_RETURN && this.handler_server_alert_return(o);
this._switchRoom ? Log.d("换桌中..") : e == l.default.RummyTcp.GF_CLIENT_CHAT_REQ ? this.handler_server_chat_bc(o) : e == l.default.RummyTcp.SM_LOGIN_SUCC_BC_RETURN ? this.handler_server_login_succ_bc(o) : e == l.default.RummyTcp.SM_LOGOUT_SUCC_BC_RETURN ? this.handler_server_logout_succ_bc(o) : e == l.default.RummyTcp.SM_NOTIFY_GAME_START_BC_RETURN ? this.handler_server_pre_start_bc(o) : e == l.default.RummyTcp.SM_START_BC_RETURN ? this.handler_server_game_start_bc(o) : e == l.default.RummyTcp.SM_SELF_CARDS_RETURN ? this.handler_server_self_cards_return(o) : e == l.default.RummyTcp.SM_GONG_CARDS_RETURN ? this.handler_server_gong_cards_return(o) : e == l.default.RummyTcp.SM_NEXT_DEAL_BC_RETURN ? this.handler_server_next_deal_bc_return(o) : e == l.default.RummyTcp.SM_DROP_CARD_RETURN ? this.handler_server_drop_card_return(o) : e == l.default.RummyTcp.SM_PICK_CARD_RETRUN ? this.handler_server_pick_card_return(o) : e == l.default.RummyTcp.SM_PICK_CARD_BC_RETRUN ? this.handler_server_pick_card_bc_return(o) : e == l.default.RummyTcp.SM_DECARE_CARD_RETURN ? this.handler_server_declare_card_return(o) : e == l.default.RummyTcp.SM_DECARE_CARD_BC_RETURN ? this.handler_server_declare_card_bc_return(o) : e == l.default.RummyTcp.SM_DISCARD_CARD_RETURN ? this.handler_server_discard_card_return(o) : e == l.default.RummyTcp.SM_DISCARD_CARD_BC_RETURN ? this.handler_server_discard_card_bc_return(o) : e == l.default.RummyTcp.SM_DROP_CARD_BC_RETURN ? this.handler_server_drop_bc_return(o) : e == l.default.RummyTcp.SM_MOVE_CARD_REQUEST ? this.handler_server_move_card_return(o) : e == l.default.RummyTcp.SM_GROUP_CARD_REQUEST ? this.handler_server_group_card_return(o) : e == l.default.RummyTcp.SM_FINISH_RETURN ? this.handler_server_finish_return(o) : e == l.default.RummyTcp.SM_FINISH_RETURN_BC ? this.handler_server_finish_return_bc(o) : e == l.default.RummyTcp.SM_LAST_CARD_RETURN ? this.handler_server_last_card_return(o) : e == l.default.RummyTcp.SM_GAME_END_BC_INFORM ? this.handler_server_game_end_bc(o) : e == l.default.RummyTcp.SM_GAME_SHOW_INFO || (e == l.default.RummyTcp.SM_DECARE_CARD_CHECK_RETURN ? this.handler_server_declare_check_return(o) : e == l.default.CommonRoomTCP.SERVER_VENHU_GUIDE ? this.handler_server_venhu_guide(o) : e == l.default.RummyTcp.SM_NOTIFY_MONEY_CHANGE_BC_RETURN || (e == l.default.RummyTcp.SM_ADD_CARD_RETURN ? this.handler_server_add_card_return(o) : e == l.default.RummyTcp.SM_GAME_SHOW_SWITCH ? this.handler_server_show_swtich_btn_return(o) : e == l.default.RummyTcp.SM_NOTIFY_DRAW_CARDS_BC_RETURN ? Log.d("====rummy定庄:", o) : e == l.default.RummyTcp.SM_OUT_CARD_RECORD_RETURN && this.handler_out_card_bc(o)));
};
e.prototype.handler_server_logout_succ_bc = function(t) {
Log.d("====rummy登出:", t);
var e = this.isMySelfSeat(t.seatid), o = this.getSeatByID(t.seatid);
if (null != o) if (e) {
this._isLogout = !0;
if (1 == t.type) Log.d("换桌成功"); else if (0 == t.type || 2 == t.type || 3 == t.type) {
t.alertStr && App.tips.show(t.alertStr);
this.doExitGame();
} else 6 == t.type || (7 == t.type ? this.sender.relogin() : this.doExitGame());
} else o.stand();
};
e.prototype.handler_server_login_return = function(t) {
Log.d("登陆协议:", t);
if (0 == t.ret) Log.d("登录成功!"); else {
1 == t.ret && 1 == t.code ? E.default.showRecharge() : App.tips.show(t.alertStr);
this.doExitGame();
}
};
e.prototype.handler_server_table_info_uc = function(t) {
Log.d("=====桌子数据:", t);
this.onClickDropClose();
this._isLogout = !1;
this._switchRoom = !1;
this._selfSeatId = t.seatid;
for (var e = t.players, o = 0; o < e.length; o++) {
var i = e[o], n = this.getSeatByID(i.seatid);
null != n && n.init_player(i);
}
this._rgc.out_record.updateName(this._rgc.top_player.playerName);
t.all_score && this._rgc.self_player.setScore(t.all_score);
t.close_cardnum && this.setCloseNum(t.close_cardnum);
t.drop_money && (this._drop_money = t.drop_money);
if (t.opencards) {
this.setPublicCards(t.opencards);
this.setOpenNum();
} else this.setPublicCards([]);
t.lz_card && (_.GlobalVar.wildJoker = t.lz_card);
this.hideTip();
if (1 == t.state) ; else if (2 == t.state) {
this._isCurrentGameing = !0;
this.showOperation();
this.handler_server_self_cards_return(t, !0);
this.handler_server_next_deal_bc_return({
seatid: t.opseatid,
cd: t.cd,
dealTs: t.dealTs
});
} else this.showMatchTip("{0}S");
};
e.prototype.showMatchTip = function(t) {
var e = this;
this.game_state ? this.game_state.setStart(t) : this.waitNode || f.default.getPrefab(g.Macro.BUNDLE_RESOURCES, "table_common/prefabs/matchNode").then(function(o) {
var i = cc.instantiate(o);
e.node.addChild(i);
i.position = cc.Vec3.ZERO;
e.game_state = i.getComponent(R.default);
e.game_state.setStart(t);
});
};
e.prototype.showTips = function(t, e) {
var o = this;
this.waitNode ? this.waitNode.setStart(t, e) : f.default.getPrefab(g.Macro.BUNDLE_RESOURCES, "table_common/prefabs/waitNode_cutdown").then(function(i) {
var n = cc.instantiate(i);
o.node.addChild(n);
n.position = cc.Vec3.ZERO;
o.waitNode = n.getComponent(S.default);
o.waitNode.setStart(t, e);
});
};
e.prototype.showTipAndStart = function(t) {
this.hideTip();
this.showTips("Game starting in {0} sec", t);
};
e.prototype.hideTip = function() {
this.game_state && (this.game_state.node.active = !1);
};
e.prototype.setPublicCards = function(t) {
null == t && (t = []);
this.history_cards = t;
this._real_cards = t;
};
e.prototype.clearDesktop = function() {
this._isCurrentGameing = !1;
this.unlockOutCard();
this._rgc.panel_buttons.active = !1;
this._rgc.panel_declare.active = !1;
this.set_out_card_tips(!1);
this.set_choice_card(!1);
this.clearSeats();
};
e.prototype.clearSeats = function() {
this._rgc.self_player.hideTurn();
this._rgc.self_player.hideSpineNodeAni();
this._rgc.top_player.hideTurn();
this._rgc.top_player.hideSpineNodeAni();
};
e.prototype.showOperation = function() {
this._rgc.panel_buttons.active = !0;
this._rgc.button_buttons_drop.interactable = !1;
this._rgc.button_buttons_finish.interactable = !1;
this._rgc.button_buttons_group.interactable = !1;
this._rgc.button_buttons_discard.interactable = !1;
};
e.prototype.handler_server_chat_bc = function(t) {
var e = this.getSeatByID(t.seatid);
e && e.showPlayerTalkSprite(t.text);
};
e.prototype.getSeatByID = function(t) {
return this._selfSeatId == t ? this._rgc.self_player : this._rgc.top_player;
};
e.prototype.isMySelfSeat = function(t) {
return this._selfSeatId == t;
};
e.prototype.handler_server_pre_start_bc = function(t) {
App.globalAudio.playButtonClick();
this.showTipAndStart(t.cd);
this._rgc.self_player.setScore(t.all_score);
this._rgc.self_player.cleanPlayer();
this._rgc.top_player.cleanPlayer();
this.update_out_record();
};
e.prototype.handler_server_login_succ_bc = function(t) {
this._rgc.top_player.init_player(t);
this._rgc.out_record.updateName(t.name);
};
e.prototype.handler_out_card_bc = function(t) {
Log.d("====已经出牌:", t);
for (var e = 0; e < t.players.length; e++) {
var o = t.players[e], i = this.getSeatByID(o.seatid);
null != i && i.init_outrecord(o.cards);
}
};
e.prototype.handler_server_game_start_bc = function(t) {
Log.d("======游戏开始:", t);
this.flushGame();
this.hideTip();
this.showOperation();
this._rgc.self_player.startGame();
this._rgc.top_player.startGame();
t.lz_card && (_.GlobalVar.wildJoker = t.lz_card);
for (var e = 0; e < t.players.length; e++) {
var o = t.players[e], i = o.seatid == t.zhuang_seatid;
this.deal_card(o.drawing_card, i, o.seatid == this._selfSeatId);
}
this.hideTip();
};
e.prototype.deal_card = function(t, e, o) {
var i = cc.instantiate(this._rgc.card_prefab);
N.default.showCard(i, t);
i.scale = .3;
i.setPosition(0, 0);
this.node.addChild(i);
e || N.default.showCardMark(i);
o ? this._rgc.self_player.setBanker = e : this._rgc.top_player.setBanker = e;
var n = null;
if (o) {
(r = App.utils.localConvertWorldPointAR(this._rgc.self_player.node)).y += 150;
n = App.utils.worldConvertLocalPointAR(this.node, r);
} else {
var r;
(r = App.utils.localConvertWorldPointAR(this._rgc.top_player.node)).y -= 10;
n = App.utils.worldConvertLocalPointAR(this.node, r);
}
var s = o ? .7 : .4, a = cc.sequence(cc.spawn(cc.moveTo(.2, n.x, n.y), cc.scaleTo(.2, s, s)), cc.delayTime(1), cc.callFunc(function() {
i.destroy();
}));
i.runAction(a);
};
e.prototype.handler_server_self_cards_return = function(t, e) {
this._isCurrentGameing = !0;
this._drop_money = t.drop_money;
this._rgc.panel_finish.node.active = !0;
this._rgc.panel_card_tips.active = !0;
this._rgc.self_player.setScore(t.all_score);
_.GlobalVar.wildJoker = t.lz_card;
this.setPublicCards([ t.dc_card ]);
this.setCloseNum(t.close_cardnum);
this.setOpenNum();
if (e) {
this._rgc.cards_root.init_group(t.cardinfos);
this._rgc.deck_open.showCard(t.dc_card);
this._rgc.deck_close.init_flush(t.lz_card);
} else this.play_fapai(t.cardinfos, t.dc_card, t.lz_card);
};
e.prototype.play_fapai = function(t, e, o) {
var i = this, n = App.utils.localConvertWorldPointAR(this._rgc.deck_close.node), r = App.utils.worldConvertLocalPointAR(this._rgc.cards_root.node, n);
this._rgc.cards_root.init_fapai(t, r);
this.scheduleOnce(function() {
i._rgc.deck_close.fan_to_open(e);
}, 1.5);
this.scheduleOnce(function() {
i._rgc.deck_close.move_to_target();
}, 1.5);
this.scheduleOnce(function() {
i._rgc.deck_close.show_ghost_card(o);
i.update_group_button();
}, 1.5);
};
e.prototype.update_group_button = function() {
var t = this._rgc.cards_root.getOutCards();
this._rgc.button_buttons_group.interactable = t.length > 1 && t.length < 13;
if (this._rgc.cards_root.canOut) {
var e = 1 == t.length;
this._rgc.button_buttons_discard.interactable = e;
this._rgc.button_buttons_finish.interactable = e;
} else {
this._rgc.button_buttons_discard.interactable = !1;
this._rgc.button_buttons_finish.interactable = !1;
}
};
e.prototype.handler_server_gong_cards_return = function(t) {
if (1 != t.discard_type) {
this.setPublicCards(t.cards);
this.setOpenNum();
}
};
e.prototype.handler_server_give_card_return = function() {};
e.prototype.handler_server_show_swtich_btn_return = function() {};
e.prototype.handler_server_next_deal_bc_return = function(t) {
var e = this.isMySelfSeat(t.seatid);
Log.d("玩家操作:", t);
if (e) {
this.audioHelper.playEffect("sound/Myturntip", this.bundle);
this.unlockOutCard();
this._rgc.top_player.hideTurn();
this._rgc.button_buttons_drop.interactable = !0;
this.update_group_button();
} else this._rgc.top_player.play_turn(t.cd, t.dealTs);
e ? this._rgc.self_player.play_turn(t.cd, t.dealTs) : this._rgc.self_player.hideTurn();
this.set_out_card_tips(!1);
this.set_choice_card(e, 1 == t.can_mp);
};
e.prototype.handler_server_drop_card_return = function(t) {
this._rgc.self_player.play_dropped(t.lose_money);
this._rgc.self_player.hideTurn();
this._rgc.panel_cardsDropSp.node.active = !0;
this.updateMoney(t.cur_money);
};
e.prototype.handler_server_drop_bc_return = function(t) {
this._rgc.top_player.showLostNode(t.lose_money, !0);
};
e.prototype.handler_server_pick_card_return = function(t) {
if (0 == t.ret) {
Log.d("自己抓牌:", t);
this._rgc.button_buttons_drop.interactable = !1;
this._rgc.self_player.setScore(t.all_score);
this._rgc.cards_root.setGroup(t.cardinfos);
t.drop_money && (this._drop_money = t.drop_money);
}
};
e.prototype.handler_server_pick_card_bc_return = function(t) {
var e = this;
this.setCloseNum(t.close_cardnum);
Log.d("广播抓牌:", t);
var o = this.isMySelfSeat(t.seatid), i = this._rgc.top_player.node;
if (o) {
var n = this._rgc.cards_root.getLastCardNode();
n && (i = n.item);
}
if (1 == t.type) {
o ? this._rgc.top_player.becatch_card() : this._rgc.self_player.becatch_card();
this.update_out_record();
this.history_cards.pop();
var r = this.history_cards[this.history_cards.length - 1];
o ? this._rgc.deck_open.fapai_to_self(i, t.card, r, function() {
e._rgc.cards_root.push_card(t.card);
}) : this._rgc.deck_open.fapai_to_seat(i, t.card, r);
} else 0 == t.type && (o ? this._rgc.deck_close.fapai_to_self(i, t.card, function() {
e._rgc.cards_root.push_card(t.card);
}) : this._rgc.deck_close.fapai_to_seat(i));
this.set_choice_card(!1);
this.set_out_card_tips(o);
this.update_group_button();
};
e.prototype.handler_server_discard_card_return = function(t) {
if (0 == t.ret) {
this._rgc.self_player.setScore(t.all_score);
t.drop_money && (this._drop_money = t.drop_money);
1 == t.isfarud ? this._rgc.cards_root.update_cards() : this._rgc.cards_root.setGroup(t.cardinfos);
} else {
this._my_drag_card = null;
this.unlockOutCard();
this._rgc.cards_root.update_sort_position();
}
};
e.prototype.handler_server_discard_card_bc_return = function(t) {
var e = this, o = this.isMySelfSeat(t.seatid), i = 1 == t.discard_type;
Log.d("广播打牌:", t);
var n = this.getSeatByID(t.seatid);
n && n.becatch_card(t.card);
this.update_out_record();
if (o) if (1 == t.isfarud) ; else {
var r = this.sender.lockOutCard, s = this._is_fly_out;
this.unlockOutCard();
var a = this._my_drag_card;
this._my_drag_card = null;
if (r) if (s) {
i ? this._rgc.panel_finish.init_card(t.card) : this._rgc.deck_open.showCard(t.card);
this._rgc.cards_root.remove_card(a, !0);
} else i ? this.move_and_remove_card(a, this._rgc.panel_finish.node, function() {
e._rgc.panel_finish.init_card(t.card);
}) : this.move_and_remove_card(a, this._rgc.deck_open.node, function() {
e._rgc.deck_open.showCard(t.card);
}); else {
null == a && (a = this._rgc.cards_root.getLastCardNode());
i ? this.move_and_remove_card(a, this._rgc.panel_finish.node, function() {
e._rgc.panel_finish.init_card(t.card);
}) : this.move_and_remove_card(a, this._rgc.deck_open.node, function() {
e._rgc.deck_open.showCard(t.card);
});
}
} else i ? this._rgc.deck_open.out_from_target_to_finish(this._rgc.top_player.node, t.card, this._rgc.panel_finish) : this._rgc.deck_open.out_from_target(this._rgc.top_player.node, t.card);
this.update_group_button();
};
e.prototype.move_and_remove_card = function(t, e, o) {
var i = this, n = t.item, r = App.utils.localConvertWorldPointAR(e), s = App.utils.worldConvertLocalPointAR(n.parent, r);
this._rgc.cards_root.remove_card(t);
var a = cc.sequence(cc.spawn(cc.moveTo(.2, s.x, s.y), cc.scaleTo(.2, .63, .63)), cc.callFunc(function() {
o && o();
n.destroy();
i._rgc.cards_root.update_cards();
}));
n.runAction(a);
};
e.prototype.handler_server_declare_card_return = function(t) {
0 == t.ret ? this._rgc.panel_declare.active = !1 : t.ret;
};
e.prototype.handler_server_declare_card_bc_return = function(t) {
if (this.isMySelfSeat(t.seatid)) {
this._rgc.self_player.hideTurn();
this._rgc.top_player.turn(t.cd);
} else {
this._rgc.top_player.hideTurn();
this._rgc.panel_declare.active = !0;
this._rgc.label_declare.string = t.alertStr2;
this._rgc.self_player.turn(t.cd);
}
};
e.prototype.handler_server_declare_check_return = function(t) {
var e = this, o = this._my_drag_card;
this.unlockOutCard();
if (null != o) if (0 == t.ret) this.sender.sendDiscardAndfinish(o.group, o.index, o.value); else {
App.globalAudio.playButtonClick();
App.alert.show({
title: d.Config.alertTitlePath.TIPS,
confirmCb: function() {
e.sender.sendDiscardAndfinish(o.group, o.index, o.value);
},
cancelCb: function() {
e._rgc.cards_root.update_sort_position();
},
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: "game_sure_wanna_finish/nlabel_false_declaration_lost_tips",
hideX: !0
});
} else this._rgc.cards_root.update_sort_position();
};
Object.defineProperty(e.prototype, "isRealGold", {
get: function() {
return !(1 == this.args.cur.roomtype);
},
enumerable: !1,
configurable: !0
});
e.prototype.handler_server_venhu_guide = function(t) {
var e = this;
if (this.isRealGold) {
Log.d("====rummy转场:", t);
this.scheduleOnce(function() {
var o = t.tips;
App.alert.show({
title: d.Config.alertTitlePath.TIPS,
confirmCb: function() {
e.isCurrentGameing || e.enterGame(t.to_gtype, t.to_vid);
},
cancelCb: function() {
e.isCurrentGameing || e.sender.continue();
},
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: o,
hideX: !0
});
}, .5);
}
};
e.prototype.enterGame = function(t, e) {
var o = [];
p.default.GameType.Rummy;
Log.d("===准备转场:", o);
for (var i = 0; i < o.length; i++) {
var n = o[i];
if (n.vid == e) {
cc.game.emit(p.default.Event.goto_room, n, t);
return;
}
}
Log.e("no room goto:", t, e);
};
e.prototype.handler_server_add_card_return = function(t) {
this.handler_server_group_card_return(t);
};
e.prototype.handler_server_move_card_return = function(t) {
this.handler_server_group_card_return(t);
};
e.prototype.handler_server_group_card_return = function(t) {
if (0 == t.ret) {
this._rgc.self_player.setScore(t.all_score);
this._rgc.cards_root.update_group(t.cardinfos);
t.drop_money && (this._drop_money = t.drop_money);
}
};
e.prototype.handler_server_finish_return = function(t) {
0 == t.ret && this.updateMoney(t.cur_money);
};
e.prototype.handler_server_finish_return_bc = function(t) {
this._rgc.panel_declare.active = !1;
Log.d("rummy胡牌:", t);
};
e.prototype.handler_server_last_card_return = function() {};
e.prototype.handler_server_alert_return = function(t) {
var e = 0;
t.type && (e = t.type);
if (2 == e) this.myTurnFastBuyCallback(); else if (11 == e || 0 == e) {
t.alertStr && App.tips.show(t.alertStr);
this.doExitGame();
}
};
e.prototype.myTurnFastBuyCallback = function() {
E.default.isNeedShowRecharge(this.args.cur.min_money, v.default.self.data.gameMoney) || E.default.showRecharge();
};
e.prototype.handler_server_game_end_bc = function(t) {
var e = this;
Log.d("游戏结束:", t);
this.clearDesktop();
this._rgc.cards_root.stopGame();
for (var o = 0; o < t.players.length; o++) {
var i = t.players[o], n = i.winscore;
if (this.isMySelfSeat(i.seatid)) {
1 == i.iswin ? this.play_winner() : this._rgc.self_player.showLostNode(n, 1 == i.isfold);
this.show_game_over_score(1 == i.iswin, n);
this.updateMoney(i.money);
} else {
1 == i.iswin ? this._rgc.top_player.play_winner() : this._rgc.top_player.showLostNode(n, 1 == i.isfold);
this._rgc.top_player.setMoney(i.money);
}
}
this.scheduleOnce(function() {
e.flushGame();
e._isLogout ? e._rgc.top_player.stand() : f.default.showPrefab(e.bundle, "prefab/panel_rummy_result").then(function(e) {
var o = e.getComponent(C.default);
o && o.show_result(t.players);
});
}, 3);
};
e.prototype.flushGame = function() {
this.unscheduleAllCallbacks();
this.setPublicCards();
this.setCloseNum(0);
this.setOpenNum();
this._rgc.panel_finish.hide();
this._rgc.deck_close.hide();
this._rgc.deck_open.hide();
this._rgc.cards_root.clear();
this._rgc.self_player.cleanPlayer();
this._rgc.top_player.cleanPlayer();
this._rgc.panel_cardsDropSp.node.active = !1;
};
e.prototype.show_game_over_score = function(t, e) {
var o = cc.instantiate(this._rgc.coinout_prefab).getComponent(s.default);
t ? o.init_data(this.node, this._rgc.top_player.node, this._rgc.self_player.node, e, !1) : o.init_data(this.node, this._rgc.self_player.node, this._rgc.top_player.node, e, !0);
};
e.prototype.onClickDiscard = function() {
if (!this.sender.lockOutCard) {
this.audioHelper.playEffect("sound/Card_Catch", this.bundle);
var t = this._rgc.cards_root.getOutCards();
if (1 == t.length) {
var e = t[0];
this._my_drag_card = e;
this.sender.sendDiscard(e.group, e.index, e.value);
} else Log.d("discard存在多个出牌:", t.length);
}
};
e.prototype.onClickDrop = function() {
this._rgc.check_drop_node.active = !0;
};
e.prototype.onClickDropSend = function() {
this.sender.send_drop();
this.onClickDropClose();
};
e.prototype.onClickDropClose = function() {
this._rgc.check_drop_node.active = !1;
};
e.prototype.onClickFinish = function() {
if (!this.sender.lockOutCard) {
var t = this._rgc.cards_root.getOutCards();
if (1 == t.length) {
var e = t[0];
this._my_drag_card = e;
this.sender.handler_server_declare_check_request(e.value, e.group);
} else Log.d("finish存在多个出牌:", t.length);
}
};
e.prototype.onClickOpenDeck = function() {
this.sender.pick_card_request(1);
};
e.prototype.onClickCloseDeck = function() {
this.sender.pick_card_request(0);
};
e.prototype.onClickGroup = function() {
var t = this._rgc.cards_root.getOutCards();
t.length > 1 ? this.sender.group_card_request(t) : Log.d("finish存在多个出牌:", t.length);
this._rgc.button_buttons_group.interactable = !1;
};
e.prototype.onClickHistoryCards = function() {
App.globalAudio.playButtonClick();
this._rgc.out_record.node.active = !this._rgc.out_record.node.active;
this._rgc.histroy_button.active = !this._rgc.out_record.node.active;
this.update_out_record();
};
e.prototype.update_out_record = function() {
this._rgc.out_record.node.active && this._rgc.out_record.initData(this._rgc.top_player.getOutRecord(), this._rgc.self_player.getOutRecord());
};
e.prototype.onClickDeclare = function() {
this.sender.finish_request();
};
e.prototype.onClickSwitchRoom = function() {
var t = this;
if (this.isCurrentGameing) {
var e = this._drop_money;
App.alert.show({
title: d.Config.alertTitlePath.TIPS,
confirmCb: function() {
t.doSwitchRoom();
},
cancelCb: function() {},
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: App.zLan.getString(1020, e),
hideX: !0
});
} else this.doSwitchRoom();
};
Object.defineProperty(e.prototype, "isCurrentGameing", {
get: function() {
return this._isCurrentGameing;
},
enumerable: !1,
configurable: !0
});
e.prototype.onClickExit = function() {
if (this.isCurrentGameing) {
var t = App.zLan.getString(1118);
App.alert.show({
title: d.Config.alertTitlePath.TIPS,
confirmCb: function() {},
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: t,
hideX: !0
});
} else this.doExitGame();
};
e.prototype.play_game_start = function() {
var t = this;
App.globalAudio.playGameStart();
this._rgc.gamestart_anim.active = !0;
var e = this._rgc.gamestart_anim.getComponent(sp.Skeleton);
e.setCompleteListener(function() {
t._rgc.gamestart_anim.active = !1;
});
e.setToSetupPose();
e.clearTracks();
e.setAnimation(0, "animation", !1);
};
e.prototype.set_choice_card = function(t, e) {
if (t) {
this._rgc.sprite_card_light_arrow.node.setPosition(0, 90);
this._rgc.sprite_close_deck_arrow.node.setPosition(0, 90);
f.default.setSprite(this._rgc.sprite_card_light, this.bundle, "res/rummy/card_yellow");
f.default.setSprite(this._rgc.sprite_card_light_arrow, this.bundle, "res/rummy/arrow_yellow");
this._rgc.sprite_card_light_arrow.node.active = !e;
this._rgc.sprite_close_deck_arrow.node.active = !0;
this._rgc.sprite_close_deck_light.node.active = !0;
this._rgc.sprite_card_light.node.active = !0;
var o = cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(0, 30)), cc.moveBy(.5, cc.v2(0, -30)))), i = cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(0, 30)), cc.moveBy(.5, cc.v2(0, -30))));
this._rgc.sprite_card_light_arrow.node.runAction(o);
this._rgc.sprite_close_deck_arrow.node.runAction(i);
var n = cc.repeatForever(cc.sequence(cc.fadeTo(1, 255), cc.fadeTo(1, 50))), r = cc.repeatForever(cc.sequence(cc.fadeTo(1, 255), cc.fadeTo(1, 50)));
this._rgc.sprite_card_light.node.runAction(n);
this._rgc.sprite_close_deck_light.node.runAction(r);
} else {
this._rgc.sprite_card_light_arrow.node.stopAllActions();
this._rgc.sprite_card_light_arrow.node.active = !1;
this._rgc.sprite_close_deck_arrow.node.stopAllActions();
this._rgc.sprite_close_deck_arrow.node.active = !1;
this._rgc.sprite_close_deck_light.node.active = !1;
this._rgc.sprite_card_light.node.active = !1;
}
};
e.prototype.set_out_card_tips = function(t) {
if (t) {
f.default.setSprite(this._rgc.sprite_card_light, this.bundle, "res/rummy/card_green");
f.default.setSprite(this._rgc.sprite_card_light_arrow, this.bundle, "res/rummy/arrow_green");
this._rgc.sprite_finish_arrow.node.active = !0;
this._rgc.sprite_card_light_arrow.node.active = !0;
this._rgc.sprite_finish_light.node.active = !0;
this._rgc.sprite_card_light.node.active = !0;
this._rgc.sprite_card_light_arrow.node.setPosition(0, 90);
this._rgc.sprite_finish_arrow.node.setPosition(0, 90);
var e = cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(0, 30)), cc.moveBy(.5, cc.v2(0, -30)))), o = cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(0, 30)), cc.moveBy(.5, cc.v2(0, -30))));
this._rgc.sprite_card_light_arrow.node.runAction(e);
this._rgc.sprite_finish_arrow.node.runAction(o);
var i = cc.repeatForever(cc.sequence(cc.fadeTo(1, 255), cc.fadeTo(1, 50))), n = cc.repeatForever(cc.sequence(cc.fadeTo(1, 255), cc.fadeTo(1, 50)));
this._rgc.sprite_card_light.node.runAction(i);
this._rgc.sprite_finish_light.node.runAction(n);
} else {
this._rgc.sprite_card_light_arrow.node.stopAllActions();
this._rgc.sprite_finish_arrow.node.stopAllActions();
this._rgc.sprite_finish_light.node.stopAllActions();
this._rgc.sprite_card_light.node.stopAllActions();
this._rgc.sprite_card_light_arrow.node.active = !1;
this._rgc.sprite_finish_arrow.node.active = !1;
this._rgc.sprite_finish_light.node.active = !1;
}
};
e.prototype.play_winner = function() {
var t = this;
App.globalAudio.playWinner();
this._rgc.winner_anim.active = !0;
var e = this._rgc.winner_anim.getComponent(sp.Skeleton);
e.setCompleteListener(function() {
t._rgc.winner_anim.active = !1;
});
e.setToSetupPose();
e.clearTracks();
e.setAnimation(0, "winner", !1);
};
e.prototype.setCloseNum = function(t) {
this._rgc.closeDeckLabel.string = "CLOSE(" + t + ")";
};
e.prototype.setOpenNum = function() {
var t = this.history_cards.length;
this._rgc.openDeckLabel.string = "OPEN(" + t + ")";
};
e.prototype.updateMoney = function(t) {
v.default.self.updateGameMoney(t);
};
e.prototype.onUpdateMoney = function() {
this._rgc.self_player.setMoney(v.default.self.data.gameMoney);
};
e.prototype.onClosed = function() {
this._rgc.top_player.stand();
this.onPingTimeout();
};
e.prototype.onPingTimeout = function() {
var t = this;
if (this._isLogout) this._isLogout = !1; else {
this.sender.close();
var e = App.zLan.getString(1037);
App.alert.show({
title: d.Config.alertTitlePath.TIPS,
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
_.GlobalVar.checkMode && T.default.showInterstitial();
};
e.prototype.doSwitchRoom = function() {
if (this.isNoMoreMoney) this.myTurnFastBuyCallback(); else {
this.clearDesktop();
this.flushGame();
this._rgc.top_player.stand();
this._switchRoom = !0;
this.sender.switch_room();
}
};
Object.defineProperty(e.prototype, "isNoMoreMoney", {
get: function() {
return this.isRealGold ? this.args.cur.min_money > v.default.self.data.gameMoney : this.args.cur.min_money > v.default.self.data.chips;
},
enumerable: !1,
configurable: !0
});
e.prototype.update = function() {
this._rgc.drop_label && (this._rgc.drop_label.string = "-" + this._drop_money);
0 != this._rgc.panel_buttons.active && 0 != this._rgc.button_buttons_drop.interactable || this.onClickDropClose();
};
e.prototype.doSelectAvatar = function() {
this._rgc.panel_emoji.active = !0;
var t = this._rgc.top_player.node.parent.convertToWorldSpaceAR(this._rgc.top_player.node.position), e = this._rgc.panel_emoji.parent.convertToNodeSpaceAR(t);
e.y -= 36;
this._rgc.panel_emoji.position = e;
};
e.prototype.doSelectEmoji = function(t) {
var e = t;
this._rgc.top_player && this._rgc.top_player.play_emoji(this._rgc.self_player.node, e, !0);
this.hideEmoji();
};
e.prototype.hideEmoji = function() {
this._rgc.panel_emoji.active = !1;
};
e.prototype.onSendEmoji = function(t, e) {
this._rgc.self_player && this._rgc.self_player.play_emoji(this._rgc.top_player.node, t, e);
};
r([ u.inject("desktop/seats/seat_top/sitdown/AvatarItem", cc.Node) ], e.prototype, "AvatarItem", void 0);
r([ u.inject("desktop/Panel_CloseCards/Sprite_ClosedDeck", cc.Node) ], e.prototype, "Sprite_ClosedDeck", void 0);
r([ u.inject("desktop/Panel_OpenCards/Card", cc.Node) ], e.prototype, "CardBtn", void 0);
r([ u.inject("desktop/Panel_OpenCards/Button_HistroyCards", cc.Node) ], e.prototype, "Button_HistroyCards", void 0);
r([ u.inject("desktop/Panel_Declare/Button_Declare", cc.Node) ], e.prototype, "Button_Declare", void 0);
r([ u.inject("operation_bar/FinishDiscard/Button_Drop", cc.Node) ], e.prototype, "Button_Drop", void 0);
r([ u.inject("operation_bar/FinishDiscard/Button_Finish", cc.Node) ], e.prototype, "Button_Finish", void 0);
r([ u.inject("operation_bar/FinishDiscard/Button_Group", cc.Node) ], e.prototype, "Button_Group", void 0);
r([ u.inject("operation_bar/FinishDiscard/Button_Discard", cc.Node) ], e.prototype, "Button_Discard", void 0);
r([ u.inject("out_record/card_panel/Button_HistroyCards", cc.Node) ], e.prototype, "Button_HistroyCards2", void 0);
r([ u.inject("check_drop/Background/layout/Button_No", cc.Node) ], e.prototype, "Button_No", void 0);
r([ u.inject("check_drop/Background/layout/Button_Yes", cc.Node) ], e.prototype, "Button_Yes", void 0);
r([ u.inject("EmojiPanel/Button_Close", cc.Node) ], e.prototype, "Button_Close", void 0);
return r([ k ], e);
}(c.default));
o.default = L;
cc._RF.pop();
}, {
"../../../../scripts/common/config/CmdConfig": void 0,
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/protocol/HeartbetJson": void 0,
"../../../../scripts/common/utils/UIUtils": void 0,
"../../../../scripts/framework/core/ui/GameView": void 0,
"../../../../scripts/framework/defines/Decorators": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/login/view/CommonUIHelper": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0,
"../../../../scripts/sdk/SdkManager": void 0,
"../../../../scripts/tableCommon/CardHelp": void 0,
"../../../../scripts/tableCommon/GameRoomView": void 0,
"../../../../scripts/tableCommon/fight/CountDownLabel": void 0,
"../../../../scripts/tableCommon/fight/UpDownLabel": void 0,
"../../../../scripts/tableCommon/teenpatti/net/TeenPattiEvent": void 0,
"../item/panel_game_rummy_result": "panel_game_rummy_result",
"../net/RummyEvent": "RummyEvent",
"../net/RummyHandler": "RummyHandler",
"../net/RummySender": "RummySender",
"../net/RummyService": "RummyService",
"../old/RummyGameController": "RummyGameController",
"../old/panel_game_rummy_coinout_item": "panel_game_rummy_coinout_item"
} ],
card: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "22b2fSLvvZK+77T1tjHg1un", "card");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/config/GlobalVar"), a = t("../../../../scripts/common/utils/UIUtils"), c = t("../../../../scripts/framework/defines/Macros"), _ = cc._decorator, p = _.ccclass, l = _.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprite_mask = null;
e.cardValue = null;
e.cardColor0 = null;
e.cardColor1 = null;
e.cardGostSign = null;
e.cardGostSp = null;
e.isFlipping = !1;
e.isInited = !1;
e.initOnce = !1;
return e;
}
e.prototype.onLoad = function() {
this.init_node();
};
e.prototype.init_node = function() {
if (!this.initOnce) {
this.sprite_mask && (this.sprite_mask.node.active = !1);
this.cardValue && (this.cardValue.node.active = !1);
this.cardColor0 && (this.cardColor0.node.active = !1);
this.cardColor1 && (this.cardColor1.node.active = !1);
this.cardGostSign && (this.cardGostSign.node.active = !1);
this.cardGostSp && (this.cardGostSp.node.active = !1);
this.child_nodes = this.node.getChildByName("node");
null != this.child_nodes && (this.child_nodes.active = !1);
this.initOnce = !0;
}
};
e.prototype.init_card = function(t, e) {
var o = this;
this.init_node();
this.dissLz = e;
this.reset();
this.card = t;
if (0 != t) {
var i = (240 & t) >> 4, n = 15 & t;
this.isJoker(t) && (i = 4);
var r = "";
this.color = i;
this.value = n;
if (0 == i || 2 == i) {
r = "red";
this.cardValue.node.active = !0;
this.cardColor0.node.active = !0;
this.cardColor1.node.active = !0;
this.cardGostSign.node.active = !1;
this.cardGostSp.node.active = !1;
} else if (1 == i || 3 == i) {
r = "black";
this.cardValue.node.active = !0;
this.cardColor0.node.active = !0;
this.cardColor1.node.active = !0;
this.cardGostSign.node.active = !1;
this.cardGostSp.node.active = !1;
} else if (4 == i) {
this.cardValue.node.active = !1;
this.cardColor0.node.active = !1;
this.cardColor1.node.active = !1;
this.cardGostSign.node.active = !1;
this.cardGostSp.node.active = !0;
}
if (4 != i) {
if (this.cardColor0) {
a.default.setSprite(this.cardColor0, c.Macro.BUNDLE_RESOURCES, "table_common/textures/cards_tp/color" + i);
a.default.setSprite(this.cardColor1, c.Macro.BUNDLE_RESOURCES, "table_common/textures/cards_tp/color" + i);
this.cardColor0.node.active = !0;
this.cardColor1.node.active = !0;
this.node.getChildByName("node").active = !0;
}
this.cardValue && cc.loader.loadRes("table_common/textures/cards_tp/" + r + n, cc.SpriteFrame, function(t, e) {
o.cardValue.spriteFrame = e;
o.cardValue.node.active = !0;
o.node.getChildByName("node").active = !0;
});
}
this.isInited = !0;
this.node.getChildByName("node").active = !0;
}
};
e.prototype.set_mask = function(t) {
this.sprite_mask.node.active = t;
if (t && !this.isFlipping) {
this.cardGostSign.enabled = !0;
this.cardGostSign.node.active = !0;
}
};
e.prototype.reset = function() {
this.isInited = !1;
this.isFlipping = !1;
this.card = 0;
this.child_nodes = this.node.getChildByName("node");
this.child_nodes && (this.child_nodes.active = !1);
if (this.cardValue) {
this.cardValue.node.active = !1;
this.cardColor0.node.active = !1;
this.cardColor1.node.active = !1;
this.cardGostSign.node.active = !1;
this.cardGostSp.node.active = !1;
this.sprite_mask.node.active = !1;
}
};
e.prototype.init_card_with_flip = function(t) {
var e = this;
this.card = t;
this.isFlipping = !1;
if (0 != t) {
var o = (240 & t) >> 4, i = 15 & t;
this.isJoker(t) && (o = 4);
this.color = o;
this.value = i;
if (null != this.cardValue) {
var n = "";
if (0 == o || 2 == o) {
n = "red";
this.cardValue.node.active = !0;
this.cardColor0.node.active = !0;
this.cardColor1.node.active = !0;
this.cardGostSign.node.active = !1;
this.cardGostSp.node.active = !1;
} else if (1 == o || 3 == o) {
n = "black";
this.cardValue.node.active = !0;
this.cardColor0.node.active = !0;
this.cardColor1.node.active = !0;
this.cardGostSign.node.active = !1;
this.cardGostSp.node.active = !1;
} else if (4 == o) {
this.cardValue.node.active = !1;
this.cardColor0.node.active = !1;
this.cardColor1.node.active = !1;
this.cardGostSign.node.active = !1;
this.cardGostSp.node.active = !0;
}
if (4 != o) {
this.cardColor0 && cc.loader.loadRes("table_common/textures/cards_tp/color" + o, cc.SpriteFrame, function(t, o) {
Log.e(e.cardColor0);
Log.e(e.cardColor1);
e.cardColor0.spriteFrame = o;
e.cardColor1.spriteFrame = o;
e.cardColor0.node.active = !0;
e.cardColor1.node.active = !0;
});
this.cardValue && cc.loader.loadRes("table_common/textures/cards_tp/" + n + i, cc.SpriteFrame, function(t, o) {
e.cardValue.spriteFrame = o;
e.cardValue.node.active = !0;
});
} else this.cardGostSp.node.active = !0;
this.node.eulerAngles = cc.v3(0, -180, 0);
this.isFlipping = !0;
}
}
};
e.prototype.update = function(t) {
if (this.isFlipping) {
this.node.eulerAngles = cc.v3(0, this.node.eulerAngles.y + 400 * t, 0);
if (this.node.eulerAngles.y >= -90) {
null != this.cardValue && (4 != this.color ? this.cardGostSign.node.active = this.sprite_mask.node.active : this.cardGostSp.node.active = !0);
this.node.getChildByName("node").active = !0;
}
if (this.node.eulerAngles.y >= 0) {
this.node.eulerAngles = cc.v3(0, 0, 0);
this.isFlipping = !1;
this.isInited = !0;
}
} else if (this.isInited) {
this.child_nodes.active || (this.child_nodes.active = !0);
if (this.isLzCard(this.card)) {
this.sprite_mask.node.active = !0;
this.cardGostSign.node.active = !0;
} else {
this.sprite_mask.node.active = !1;
this.cardGostSign.node.active = !1;
}
if (this.isJoker(this.card) && !this.cardGostSp.node.active) {
this.cardGostSign.node.active = !1;
this.cardGostSp.node.active = !0;
}
}
};
e.prototype.isLzCard = function(t) {
return !this.dissLz && (!(!s.GlobalVar.wildJoker || !t) && (15 & s.GlobalVar.wildJoker) == (15 & t));
};
e.prototype.isJoker = function(t) {
return 78 == t || 79 == t;
};
r([ l(cc.Sprite) ], e.prototype, "sprite_mask", void 0);
r([ l(cc.Sprite) ], e.prototype, "cardValue", void 0);
r([ l(cc.Sprite) ], e.prototype, "cardColor0", void 0);
r([ l(cc.Sprite) ], e.prototype, "cardColor1", void 0);
r([ l(cc.Sprite) ], e.prototype, "cardGostSign", void 0);
r([ l(cc.Sprite) ], e.prototype, "cardGostSp", void 0);
r([ l(cc.Boolean) ], e.prototype, "isFlipping", void 0);
r([ l(cc.Boolean) ], e.prototype, "isInited", void 0);
return r([ p ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/utils/UIUtils": void 0,
"../../../../scripts/framework/defines/Macros": void 0
} ],
checkModeDesk: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3b5b7AnGQFLipPgJpLLJGdv", "checkModeDesk");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/config/GlobalVar"), a = cc._decorator, c = a.ccclass, _ = a.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprites = [];
e.icon = null;
return e;
}
e.prototype.onLoad = function() {
this.sprites.length > s.GlobalVar.rummyDesk && (this.icon.spriteFrame = this.sprites[s.GlobalVar.rummyDesk]);
};
r([ _(cc.SpriteFrame) ], e.prototype, "sprites", void 0);
r([ _(cc.Sprite) ], e.prototype, "icon", void 0);
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0
} ],
out_card_item: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8d0feCLOoZAfpfZYR875q/y", "out_card_item");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/component/ListView/ItemRender"), a = t("../../../../scripts/tableCommon/CardHelp"), c = cc._decorator, _ = c.ccclass, p = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e.card_marks = [];
return e;
}
e.prototype.onLoad = function() {
this.node.on(s.default.EVENT, this.onRender, this);
};
e.prototype.start = function() {
this.onRender(this.getComponent(s.default).data);
};
e.prototype.onRender = function(t) {
a.default.showCard(this.card, t.value);
for (var e = 0; e < this.card_marks.length; e++) this.card_marks[e].active = !1;
t.is_self ? this.card_marks[0].active = 1 == t.is_catch : this.card_marks[1].active = 1 == t.is_catch;
};
r([ p(cc.Node) ], e.prototype, "card", void 0);
r([ p([ cc.Node ]) ], e.prototype, "card_marks", void 0);
return r([ _ ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../../../../scripts/common/component/ListView/ItemRender": void 0,
"../../../../scripts/tableCommon/CardHelp": void 0
} ],
panel_game_rummy_card_counter: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5d3ebbD94RN/qgkb3xv2Pa9", "panel_game_rummy_card_counter");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.panel_main = null;
e.button_back = null;
e.button_mask = null;
e.item_prefab = null;
e.cards = [];
return e;
}
e.prototype.onLoad = function() {
this.button_back.node.on("click", this.onClickBack, this);
this.button_mask.node.on("click", this.onClickBack, this);
this._fadeIn = !1;
this.panel_main.getComponent(cc.Widget).left = -510;
};
e.prototype.onEnable = function() {
this.playFadeIn();
for (var t = 0; t < this.cards.length; t++) this.cards[t].destroyAllChildren();
};
e.prototype.onDisable = function() {
for (var t = 0; t < this.cards.length; t++) this.cards[t].destroyAllChildren();
};
e.prototype.onClickBack = function() {
this._fadeOut = !0;
};
e.prototype.update = function(t) {
if (this._fadeIn) {
(e = this.panel_main.getComponent(cc.Widget)).left += 1600 * t;
e.updateAlignment();
if (e.left > 0) {
e.left = 0;
e.updateAlignment();
this._fadeIn = !1;
}
} else if (this._fadeOut) {
var e;
(e = this.panel_main.getComponent(cc.Widget)).left -= 3200 * t;
e.updateAlignment();
if (e.left <= -510) {
this._fadeOut = !1;
e.updateAlignment();
null != this.fadeout_callback && this.fadeout_callback();
this.node.active = !1;
}
}
};
e.prototype.init_data = function(t) {
Log.d("牌日志:", t);
for (var e = 0; e < t.length; e++) {
var o = t[e], i = (240 & o) >> 4, n = 15 & o, r = "" + n;
1 == n ? r = "A" : 11 == n ? r = "J" : 12 == n ? r = "Q" : 13 == n && (r = "K");
var s = cc.instantiate(this.item_prefab);
s.getComponent(cc.Label).string = r;
this.cards[i].addChild(s);
}
};
e.prototype.playFadeIn = function() {
this._fadeIn = !0;
};
r([ c({
displayName: "面板",
type: cc.Node
}) ], e.prototype, "panel_main", void 0);
r([ c({
displayName: "返回",
type: cc.Button
}) ], e.prototype, "button_back", void 0);
r([ c({
displayName: "空白处",
type: cc.Button
}) ], e.prototype, "button_mask", void 0);
r([ c({
displayName: "预制物",
type: cc.Prefab
}) ], e.prototype, "item_prefab", void 0);
r([ c({
displayName: "列表",
type: [ cc.Node ]
}) ], e.prototype, "cards", void 0);
return r([ a ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {} ],
panel_game_rummy_card_set_item: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "94432HLynZO16lm+/naHTbZ", "panel_game_rummy_card_set_item");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/config/GlobalVar"), a = t("../item/card"), c = t("./rummy_drag_card"), _ = cc._decorator, p = _.ccclass, l = _.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.panel_tips_set = null;
e.setTitle = null;
e.panel_tips_invalid = null;
e.panel_tips_2ndlifeneed = null;
e.list_items = null;
e.list_items_prefab = null;
e.type = 0;
e.old_type = -1;
return e;
}
e.prototype.onLoad = function() {
this.game_node = cc.find("Canvas").getComponentInChildren("panel_game_rummy");
this.set_group_root = this.node.parent.parent.getComponent("panel_game_rummy_card_set_group");
};
e.prototype.showType = function(t) {
if (0 == t) {
this.panel_tips_invalid.active = !0;
this.panel_tips_invalid.width = this.list_items.width;
this.panel_tips_invalid.getComponentInChildren(cc.Label).string = "Not Correct";
} else if (1 == t) {
this.panel_tips_set.active = !0;
this.panel_tips_set.width = this.list_items.width;
this.is_second_life ? this.panel_tips_set.getComponentInChildren(cc.Label).string = "2nd life" : this.is_sequence ? this.panel_tips_set.getComponentInChildren(cc.Label).string = "sequence" : this.panel_tips_set.getComponentInChildren(cc.Label).string = "1st life";
} else if (2 == t) {
this.panel_tips_set.active = !0;
this.panel_tips_set.width = this.list_items.width;
this.is_sequence ? this.panel_tips_set.getComponentInChildren(cc.Label).string = "sequence" : this.panel_tips_set.getComponentInChildren(cc.Label).string = "2nd life";
} else if (3 == this.type) {
this.panel_tips_set.active = !0;
this.panel_tips_set.width = this.list_items.width;
this.panel_tips_set.getComponentInChildren(cc.Label).string = "set";
} else if (11 == this.type) {
this.panel_tips_2ndlifeneed.active = !0;
this.panel_tips_2ndlifeneed.width = this.list_items.width;
this.panel_tips_2ndlifeneed.getComponentInChildren(cc.Label).string = "1st life needed";
} else if (31 == this.type) {
this.panel_tips_2ndlifeneed.active = !0;
this.panel_tips_2ndlifeneed.width = this.list_items.width;
this.panel_tips_2ndlifeneed.getComponentInChildren(cc.Label).string = "1st life needed";
} else if (32 == this.type) {
this.panel_tips_2ndlifeneed.active = !0;
this.panel_tips_2ndlifeneed.width = this.list_items.width;
this.panel_tips_2ndlifeneed.getComponentInChildren(cc.Label).string = "2nd life needed";
}
};
e.prototype.set_watch = function() {};
e.prototype.is_same_group = function(t) {
for (var e = new Set(), o = 0; o < t.length; o++) e.add(t[o]);
if (t.length != this.cards.length) return !1;
for (o = 0; o < this.cards.length; o++) if (!e.has(this.cards[o])) return !1;
return !0;
};
e.prototype.init_type = function(t, e) {
this.is_second_life = !1;
this.is_sequence = !1;
for (var o = 0, i = 0, n = 0, r = -1, s = -1, a = -1, c = -1, _ = null, p = 0; p < t.length; p++) if (this.is_same_group(t[p].cards)) {
r = p;
_ = t[p];
break;
}
for (p = 0; p < t.length; p++) {
if (1 == t[p].type) {
-1 == s && (s = p);
o++;
}
if (2 == t[p].type) {
-1 == a && (a = p);
i++;
}
if (3 == t[p].type) {
-1 == c && (c = p);
n++;
}
}
if (0 == i && o > 1) for (p = 0; p < t.length; p++) if (1 == t[p].type && p != s) {
a = p;
break;
}
if (null != _) {
var l = _.type;
if (1 == l && o > 1) {
if (r > s) if (0 == i && a == r) this.is_second_life = !0; else {
this.is_sequence = !0;
this.is_second_life = !1;
}
} else 2 == l && i > 1 ? r > a && (this.is_sequence = !0) : 3 == l && n > 1 ? r > c && (this.is_sequence = !0) : this.is_sequence = !1;
this.type = l;
Log.d("牌组[" + JSON.stringify(this.cards) + "]类型=" + this.type + "," + r + "|" + s + "," + a + "," + c + "||" + o + "," + i + "," + n);
if (this.is_watch || !this.is_result && !this.set_group_root.is_in_game) {
this.panel_tips_invalid.active = !1;
this.panel_tips_2ndlifeneed.active = !1;
this.panel_tips_set.active = !1;
} else this.scheduleOnce(function() {
Log.d("牌组[" + JSON.stringify(this.cards) + "]类型=" + this.type + ",数量:" + this.list_items.children.length);
this.list_items.getComponent(cc.Layout).updateLayout();
this.panel_tips_invalid.active = !1;
this.panel_tips_2ndlifeneed.active = !1;
this.panel_tips_set.active = !1;
if (this.list_items.children.length >= 3) {
if (0 == this.type) {
this.panel_tips_invalid.active = !0;
this.panel_tips_invalid.width = this.list_items.width;
this.panel_tips_invalid.getComponentInChildren(cc.Label).string = "Not Correct";
} else if (1 == this.type) {
this.panel_tips_set.active = !0;
this.panel_tips_set.width = this.list_items.width;
this.is_second_life ? this.panel_tips_set.getComponentInChildren(cc.Label).string = "2nd life" : this.is_sequence ? this.panel_tips_set.getComponentInChildren(cc.Label).string = "sequence" : this.panel_tips_set.getComponentInChildren(cc.Label).string = "1st life";
this.old_type == this.type || this.is_result || e || App.globalAudio.playButtonClick();
} else if (2 == this.type) {
this.panel_tips_set.active = !0;
this.panel_tips_set.width = this.list_items.width;
this.is_sequence ? this.panel_tips_set.getComponentInChildren(cc.Label).string = "sequence" : this.panel_tips_set.getComponentInChildren(cc.Label).string = "2nd life";
this.old_type == this.type || this.is_result || e || App.globalAudio.playButtonClick();
} else if (3 == this.type) {
this.panel_tips_set.active = !0;
this.panel_tips_set.width = this.list_items.width;
this.panel_tips_set.getComponentInChildren(cc.Label).string = "set";
this.old_type == this.type || this.is_result || e || App.globalAudio.playButtonClick();
} else if (11 == this.type) {
this.panel_tips_2ndlifeneed.active = !0;
this.panel_tips_2ndlifeneed.width = this.list_items.width;
this.panel_tips_2ndlifeneed.getComponentInChildren(cc.Label).string = "1st life needed";
} else if (31 == this.type) {
this.panel_tips_2ndlifeneed.active = !0;
this.panel_tips_2ndlifeneed.width = this.list_items.width;
this.panel_tips_2ndlifeneed.getComponentInChildren(cc.Label).string = "1st life needed";
} else if (32 == this.type) {
this.panel_tips_2ndlifeneed.active = !0;
this.panel_tips_2ndlifeneed.width = this.list_items.width;
this.panel_tips_2ndlifeneed.getComponentInChildren(cc.Label).string = "2nd life needed";
}
this.old_type = this.type;
}
if (e) {
this.panel_tips_invalid.getComponentInChildren(cc.Label).string = "";
this.panel_tips_set.getComponentInChildren(cc.Label).string = "";
this.setTitle && this.setTitle.node.setContentSize(cc.size(0, 33));
this.panel_tips_2ndlifeneed.getComponentInChildren(cc.Label).string = "";
}
this.node.width = this.list_items.width;
}.bind(this), 0);
} else this.game_node.node.getComponent("panel_game").showPanelTips("找不到牌组[" + JSON.stringify(this.cards) + "," + JSON.stringify(t));
};
e.prototype.show_tips = function(t, e) {
if (!t || this.is_watch || this.list_items.children.length < 3) {
this.panel_tips_invalid.active = !1;
this.panel_tips_2ndlifeneed.active = !1;
this.panel_tips_set.active = !1;
} else this.scheduleOnce(function() {
this.panel_tips_invalid.active = !1;
this.panel_tips_2ndlifeneed.active = !1;
this.panel_tips_set.active = !1;
this.list_items.getComponent(cc.Layout).updateLayout();
var t = this.type;
if (0 == t) {
this.panel_tips_invalid.active = !0;
this.panel_tips_invalid.width = this.list_items.width;
this.panel_tips_invalid.getComponentInChildren(cc.Label).string = "Not Correct";
} else if (1 == t) {
this.panel_tips_set.active = !0;
this.panel_tips_set.width = this.list_items.width;
this.is_second_life ? this.panel_tips_set.getComponentInChildren(cc.Label).string = "2nd life" : this.is_sequence ? this.panel_tips_set.getComponentInChildren(cc.Label).string = "sequence" : this.panel_tips_set.getComponentInChildren(cc.Label).string = "1st life";
this.old_type == t || this.is_result || e || App.globalAudio.playButtonClick();
} else if (2 == t) {
this.panel_tips_set.active = !0;
this.panel_tips_set.width = this.list_items.width;
this.is_sequence ? this.panel_tips_set.getComponentInChildren(cc.Label).string = "sequence" : this.panel_tips_set.getComponentInChildren(cc.Label).string = "2nd life";
this.old_type != t && (e || App.globalAudio.playButtonClick());
} else if (3 == t) {
this.panel_tips_set.active = !0;
this.panel_tips_set.width = this.list_items.width;
this.panel_tips_set.getComponentInChildren(cc.Label).string = "set";
this.old_type != t && (e || App.globalAudio.playButtonClick());
} else if (11 == t) {
this.panel_tips_2ndlifeneed.active = !0;
this.panel_tips_2ndlifeneed.width = this.list_items.width;
this.panel_tips_2ndlifeneed.getComponentInChildren(cc.Label).string = "2nd life needed";
} else if (31 == t) {
this.panel_tips_2ndlifeneed.active = !0;
this.panel_tips_2ndlifeneed.width = this.list_items.width;
this.panel_tips_2ndlifeneed.getComponentInChildren(cc.Label).string = "1st life needed";
} else if (32 == t) {
this.panel_tips_2ndlifeneed.active = !0;
this.panel_tips_2ndlifeneed.width = this.list_items.width;
this.panel_tips_2ndlifeneed.getComponentInChildren(cc.Label).string = "2nd life needed";
}
this.old_type = t;
if (e) {
this.panel_tips_invalid.getComponentInChildren(cc.Label).string = "";
this.panel_tips_set.getComponentInChildren(cc.Label).string = "";
this.setTitle && this.setTitle.node.setContentSize(cc.size(0, 33));
this.panel_tips_2ndlifeneed.getComponentInChildren(cc.Label).string = "";
}
this.node.width = this.list_items.width;
}.bind(this), 0);
};
e.prototype.init_cards = function(t) {
this.cards = [];
for (var e = 0; e < t.length; e++) {
this.cards.push(t[e]);
var o = cc.instantiate(this.list_items_prefab);
o.getComponent("card").init_card(t[e]);
this.is_watch && o.removeComponent("drag_card");
t[e] % 16 == s.GlobalVar.wildJoker % 16 || this.isJoker(s.GlobalVar.wildJoker) && t[e] % 16 == 1 ? o.getComponent("card").set_mask(!0) : o.getComponent("card").set_mask(!1);
this.list_items.addChild(o);
}
};
e.prototype.init_cards_with_bg = function(t) {
for (var e = 0; e < t; e++) {
var o = cc.instantiate(this.list_items_prefab);
this.is_watch && o.removeComponent(c.default);
this.list_items.addChild(o);
}
};
e.prototype.init_cards_with_result = function(t, e, o) {
this.is_result = !0;
this.cards = new Array();
for (var i = 0; i < t.length; i++) {
this.cards.push(t[i]);
var n = cc.instantiate(this.list_items_prefab);
n.getComponent(a.default).init_card(t[i], !1);
n.removeComponent(c.default);
(t[i] % 16 == s.GlobalVar.wildJoker % 16 || this.isJoker(s.GlobalVar.wildJoker) && t[i] % 16 == 1) && n.getComponent(a.default).set_mask(!0);
this.list_items.addChild(n);
}
this.type = o;
};
e.prototype.remove_card = function(t) {
for (var e = new Array(), o = 0; o < this.cards.length; o++) this.cards[o] != t && e.push(this.cards[o]);
this.cards = e;
for (o = 0; o < this.list_items.children.length; o++) if (this.list_items.children[o].getComponent("card").card == t) {
this.list_items.children[o].destroy();
break;
}
if (0 == this.cards.length) this.node.destroy(); else {
this.list_items.getComponent(cc.Layout).updateLayout();
this.node.width = this.list_items.width;
this.node.getComponent(cc.Layout).updateLayout();
}
this.show_tips(!0);
};
e.prototype.add_card = function(t) {
if (0 != t) {
null == this.cards && (this.cards = new Array());
this.cards.push(t);
for (var e = 0; e < this.list_items.children.length; e++) if (this.list_items.children[e].getComponent("card").card == t) {
this.list_items.children[e].destroy();
break;
}
var o = cc.instantiate(this.list_items_prefab);
o.getComponent("card").init_card(t);
(t % 16 == s.GlobalVar.wildJoker % 16 || this.isJoker(s.GlobalVar.wildJoker) && t % 16 == 1) && o.getComponent("card").set_mask(!0);
this.list_items.addChild(o);
this.list_items.getComponent(cc.Layout).updateLayout();
this.node.width = this.list_items.width;
this.node.getComponent(cc.Layout).updateLayout();
this.show_tips(!0);
}
};
e.prototype.valid_card = function() {
for (var t = new Set(), e = 0; e < this.cards.length; e++) t.add(this.cards[e]);
var o = !0;
for (e = 0; e < this.list_items.children.length; e++) {
var i = this.list_items.children[e];
if (!t.has(i.getComponent("card").card)) {
o = !1;
this.game_node.node.getComponent("panel_game").showPanelTips("检测牌不匹配:" + this.list_items.children.length + "," + this.cards.length);
}
}
this.list_items.children.length != this.cards.length && this.game_node.node.getComponent("panel_game").showPanelTips("检测牌不匹配:" + this.list_items.children.length + "," + this.cards.length + "," + JSON.stringify(this.cards));
if (!o) {
this.list_items.destroyAllChildren();
for (e = 0; e < this.cards.length; e++) {
var n = this.cards[e], r = cc.instantiate(this.list_items_prefab);
r.getComponent("card").init_card(n);
(n % 16 == s.GlobalVar.wildJoker % 16 || this.isJoker(s.GlobalVar.wildJoker) && n % 16 == 1) && r.getComponent("card").set_mask(!0);
this.list_items.addChild(r);
}
this.list_items.getComponent(cc.Layout).updateLayout();
this.node.width = this.list_items.width;
this.node.getComponent(cc.Layout).updateLayout();
}
};
e.prototype.isJoker = function(t) {
return 78 == t || 79 == t;
};
e.prototype.insert_card = function(t, e) {
if (0 != t) {
this.cards.splice(e, 0, t);
for (var o = 0; o < this.list_items.children.length; o++) if (this.list_items.children[o].getComponent("card").card == t) {
this.list_items.children[o].destroy();
break;
}
var i = cc.instantiate(this.list_items_prefab);
i.getComponent("card").init_card(t);
(t % 16 == s.GlobalVar.wildJoker % 16 || this.isJoker(s.GlobalVar.wildJoker) && t % 16 == 1) && i.getComponent("card").set_mask(!0);
this.list_items.insertChild(i, e);
this.list_items.getComponent(cc.Layout).updateLayout();
this.node.width = this.list_items.width;
this.node.getComponent(cc.Layout).updateLayout();
this.show_tips(!0);
}
};
e.prototype.move_to = function(t, e) {
var o = this.cards.indexOf(t);
if (o < e) {
(r = e - 1) < 0 && (r = 0);
this.cards.splice(o, 1);
this.cards.splice(r, 0, t);
} else {
this.cards.splice(o, 1);
this.cards.splice(e, 0, t);
}
Log.d("移动后的[" + JSON.stringify(this.cards));
for (var i = 0; i < this.list_items.children.length; i++) {
var n = this.list_items.children[i];
if (n.getComponent("card").card == t) {
n.removeFromParent(!1);
if (i < e) {
var r;
(r = e - 1) < 0 && (r = 0);
this.list_items.insertChild(n, e);
} else this.list_items.insertChild(n, e);
break;
}
}
};
e.prototype.add_invisible_card = function(t) {
null == this.cards && (this.cards = []);
this.type = -1;
this.cards.push(t);
for (var e = 0; e < this.list_items.children.length; e++) if (this.list_items.children[e].getComponent("card").card == t) {
this.list_items.children[e].destroy();
break;
}
var o = cc.instantiate(this.list_items_prefab);
o.getComponent(cc.Sprite).enabled = !1;
this.list_items.addChild(o);
this.list_items.getComponent(cc.Layout).updateLayout();
this.node.getComponent(cc.Layout).updateLayout();
return o;
};
e.prototype.add_invisible_card_with_type = function(t, e) {
null == this.cards && (this.cards = new Array());
this.type = t;
this.cards.push(e);
for (var o = 0; o < this.list_items.children.length; o++) if (this.list_items.children[o].getComponent("card").card == e) {
this.list_items.children[o].destroy();
break;
}
var i = cc.instantiate(this.list_items_prefab);
i.getComponent(cc.Sprite).enabled = !1;
this.list_items.addChild(i);
this.list_items.getComponent(cc.Layout).updateLayout();
this.node.getComponent(cc.Layout).updateLayout();
return i;
};
e.prototype.clean_cards = function() {
this.list_items.destroyAllChildren();
this.cards = new Array();
};
e.prototype.show_all_cards = function(t) {
for (var e = 0; e < this.list_items.children.length; e++) this.list_items.children[e].getChildByName("node").active = t;
};
e.prototype.reset_space = function(t, e) {
this.list_items.getComponent(cc.Layout).spacingX = t;
this.list_items.getComponent(cc.Layout).updateLayout();
this.node.getComponent(cc.Layout).updateLayout();
this.node.width = this.list_items.width;
this.show_tips(!0, e);
};
r([ l({
displayName: "Set提示",
type: cc.Node
}) ], e.prototype, "panel_tips_set", void 0);
r([ l({
displayName: "Set文本",
type: cc.Label
}) ], e.prototype, "setTitle", void 0);
r([ l({
displayName: "Invalid提示",
type: cc.Node
}) ], e.prototype, "panel_tips_invalid", void 0);
r([ l({
displayName: "2nd Life Need提示",
type: cc.Node
}) ], e.prototype, "panel_tips_2ndlifeneed", void 0);
r([ l({
displayName: "牌列表",
type: cc.Node
}) ], e.prototype, "list_items", void 0);
r([ l({
displayName: "牌预制物",
type: cc.Prefab
}) ], e.prototype, "list_items_prefab", void 0);
return r([ p ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../item/card": "card",
"./rummy_drag_card": "rummy_drag_card"
} ],
panel_game_rummy_closed_deck: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a8856Dk/rtPDaJDEgTX3ciB", "panel_game_rummy_closed_deck");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.target_node = null;
e.hot_card = null;
e.ghost_card = null;
e.sprite_open_card = null;
e.card_prefab = null;
e.fapai_root = null;
return e;
}
e.prototype.setTargetNodeActive = function(t) {
this.target_node && (this.target_node.active = t);
};
e.prototype.init_flush = function(t) {
this.ghost_card.position = this.target_node.position;
this.ghost_card.getComponent("card").init_card(t);
this.ghost_card.rotation = -15;
this.ghost_card.setPosition(-245, 0);
this.hot_card.position = this.target_node.position;
};
e.prototype.hide = function() {
this.hot_card.position = cc.v3(0, 0, 0);
this.ghost_card.getComponent("card").reset();
this.ghost_card.eulerAngles = cc.v3(0, 0, 0);
this.ghost_card.position = cc.v3(0, 0, 0);
this.ghost_card.rotation = 0;
this.setTargetNodeActive(!1);
};
e.prototype.fan_to_open = function(t) {
var e = this;
this.sprite_open_card.node.active = !0;
var o = App.utils.localConvertWorldPointAR(this.target_node), i = this.sprite_open_card.node.parent.convertToNodeSpaceAR(o);
this.sprite_open_card.node.setPosition(i);
var n = this.sprite_open_card.node.position.x / 2;
this.sprite_open_card.getComponent(cc.Sprite).enabled = !0;
this.sprite_open_card.node.active = !0;
var r = cc.sequence(cc.moveTo(.2, n, 0), cc.callFunc(function() {
e.sprite_open_card.node.getComponent("card").init_card_with_flip(t);
}), cc.delayTime(.17), cc.moveTo(.2, 0, 0));
this.sprite_open_card.node.runAction(r);
};
e.prototype.move_to_target = function() {
var t = cc.sequence(cc.moveTo(.6, this.target_node.x, this.target_node.y), cc.callFunc(function() {}));
this.hot_card.runAction(t);
this.ghost_card.position = this.target_node.position;
};
e.prototype.show_ghost_card = function(t) {
var e = this;
this.ghost_card.active = !0;
var o = cc.sequence(cc.moveBy(.15, -80, 0), cc.callFunc(function() {
e.ghost_card.getComponent("card").init_card_with_flip(t);
}), cc.delayTime(.3), cc.spawn(cc.moveBy(.2, 50, 0), cc.rotateTo(.2, -15), cc.callFunc(function() {})));
this.ghost_card.runAction(o);
};
e.prototype.fapai_to_seat = function(t) {
var e = App.utils.localConvertWorldPointAR(this.target_node), o = this.fapai_root.convertToNodeSpaceAR(e), i = App.utils.localConvertWorldPointAR(t), n = this.fapai_root.convertToNodeSpaceAR(i), r = cc.instantiate(this.card_prefab);
this.fapai_root.addChild(r);
r.setPosition(o);
var s = cc.sequence(cc.spawn(cc.moveTo(.4, n.x, n.y), cc.scaleTo(.4, .5)), cc.delayTime(.5), cc.callFunc(function() {
r.destroy();
}));
r.runAction(s);
};
e.prototype.fapai_to_self = function(t, e, o) {
var i = App.utils.localConvertWorldPointAR(this.target_node), n = this.fapai_root.convertToNodeSpaceAR(i), r = App.utils.localConvertWorldPointAR(t), s = this.fapai_root.convertToNodeSpaceAR(r), a = cc.instantiate(this.card_prefab);
a.getComponent("card").init_card(e);
a.setPosition(n);
this.fapai_root.addChild(a);
var c = cc.sequence(cc.moveTo(.1, s.x, s.y), cc.callFunc(function() {
o && o();
}), cc.delayTime(.25), cc.callFunc(function() {
a.destroy();
}));
a.runAction(c);
};
e.prototype.out_from_target = function(t, e) {
var o = App.utils.localConvertWorldPointAR(this.target_node), i = this.fapai_root.convertToNodeSpaceAR(o), n = App.utils.localConvertWorldPointAR(t), r = this.fapai_root.convertToNodeSpaceAR(n), s = cc.instantiate(this.card_prefab);
s.getComponent("card").init_card(e);
this.fapai_root.addChild(s);
s.scale = .5;
s.setPosition(r);
var a = cc.sequence(cc.delayTime(.15), cc.spawn(cc.moveTo(.2, i.x, i.y), cc.scaleTo(.2, 1)), cc.callFunc(function() {
s.destroy();
}));
s.runAction(a);
};
r([ c({
displayName: "开局移动到位置",
type: cc.Node
}) ], e.prototype, "target_node", void 0);
r([ c({
displayName: "close牌",
type: cc.Node
}) ], e.prototype, "hot_card", void 0);
r([ c({
displayName: "鬼牌",
type: cc.Node
}) ], e.prototype, "ghost_card", void 0);
r([ c({
displayName: "open牌",
type: cc.Sprite
}) ], e.prototype, "sprite_open_card", void 0);
r([ c({
displayName: "牌预制物",
type: cc.Prefab
}) ], e.prototype, "card_prefab", void 0);
r([ c({
displayName: "发牌的节点",
type: cc.Node
}) ], e.prototype, "fapai_root", void 0);
return r([ a ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {} ],
panel_game_rummy_coinout_item: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "03116yoHO9HUZN2l+pByQHu", "panel_game_rummy_coinout_item");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_coin = null;
e.sprite_coin = null;
return e;
}
e.prototype.init_data = function(t, e, o, i, n) {
var r = this;
this.label_coin.string = "" + i;
var s = App.utils.localConvertWorldPointAR(e), a = App.utils.localConvertWorldPointAR(o), c = App.utils.worldConvertLocalPointAR(t, s), _ = App.utils.worldConvertLocalPointAR(t, a);
t.addChild(this.node);
this.node.setPosition(c);
var p = cc.sequence(cc.spawn(cc.moveTo(.3, 0, 0), cc.fadeTo(.15, 255), cc.callFunc(function() {
n && App.globalAudio.playButtonClick();
})), cc.delayTime(1), cc.moveTo(.3, _.x, _.y), cc.delayTime(.5), cc.fadeTo(.2, 50), cc.callFunc(function() {
r.node.destroy();
}));
this.node.runAction(p);
};
r([ c({
displayName: "结算金币",
type: cc.Label
}) ], e.prototype, "label_coin", void 0);
r([ c({
displayName: "金币sprite",
type: cc.Sprite
}) ], e.prototype, "sprite_coin", void 0);
return r([ a ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {} ],
panel_game_rummy_declare: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6628bqxnr5BLaCg6m9riYQM", "panel_game_rummy_declare");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_declare = null;
e.button_declare = null;
return e;
}
e.prototype.onLoad = function() {
this.button_declare.node.on("click", this.onClickDeclare, this);
};
e.prototype.start = function() {};
e.prototype.onEnable = function() {
this.button_declare.interactable = !0;
};
e.prototype.onDisable = function() {
this.countdown_interval && clearInterval(this.countdown_interval);
this.countdown_interval = null;
};
e.prototype.init_data = function(t) {
var e = t.userNick + " has declared.\r\nPlease group your cards and declare.";
this.label_declare.string = e;
};
e.prototype.onClickDeclare = function() {
this.button_declare.interactable = !1;
this.panel_game = cc.find("Canvas").getComponentInChildren("panel_game");
cc.find("Canvas").getComponentInChildren("panel_game_rummy").send_declare();
};
r([ c(cc.Label) ], e.prototype, "label_declare", void 0);
r([ c(cc.Button) ], e.prototype, "button_declare", void 0);
return r([ a ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {} ],
panel_game_rummy_finish_panel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "742944/CKdEUIHPoyeyuIYK", "panel_game_rummy_finish_panel");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_card = null;
return e;
}
e.prototype.init_card = function(t) {
this.node_card.active = !0;
this.node_card.getComponent("card").init_card(t);
};
e.prototype.hide = function() {
this.node_card.active = !1;
};
r([ c(cc.Node) ], e.prototype, "node_card", void 0);
return r([ a ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {} ],
panel_game_rummy_info: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1eeafXFTndCr6eT/ruy0X6Q", "panel_game_rummy_info");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/utils/CmmUtils"), a = t("../../../../scripts/common/utils/UIUtils"), c = t("../../../../scripts/tableCommon/emoji"), _ = t("./rummy_base_seat"), p = cc._decorator, l = p.ccclass, d = p.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_gold = null;
e.label_point = null;
e.sprite_avatar = null;
e.spineNode = null;
e.sprite_dropped = null;
e.dropNode = null;
e.dropPointTitle = null;
e.dropPointValue = null;
e.prefab_emoji = null;
e.node_emoji = null;
e._outRecord = [];
e._is_reverse = !1;
return e;
}
e.prototype.onDestroy = function() {};
e.prototype.onLoad = function() {
this.cleanPlayer();
};
e.prototype.init_player = function(t) {
this.cleanPlayer();
this.node.active = !0;
this._player = t;
a.default.loadHead(this.sprite_avatar);
this.setMoney(t.money || 0);
};
e.prototype.init_outrecord = function(t) {
null == t && (t = []);
for (var e = 0; e < t.length; e++) this._outRecord.push({
value: t[e].value,
is_self: !0,
is_catch: t[e].is_catch
});
};
e.prototype.becatch_card = function(t) {
t ? this._outRecord.push({
value: t,
is_self: !0
}) : this._outRecord.length && (this._outRecord[this._outRecord.length - 1].is_catch = 1);
};
e.prototype.getOutRecord = function() {
return this._outRecord;
};
e.prototype.stand = function() {
this._player = null;
this.node.active = !0;
};
e.prototype.startGame = function() {
this.cleanPlayer();
};
e.prototype.setScore = function(t) {
this.label_point.string = "" + t;
};
e.prototype.setMoney = function(t) {
Log.e(t);
this.label_gold.string = s.CmmUtils.NumberToGameString(t);
};
e.prototype.cleanPlayer = function() {
this._outRecord = [];
this.sprite_timeout.node.active = !1;
this.sprite_D.node.active = !1;
this.talkSpriteBg.node.active = !1;
this.dropNode.active = !1;
this.spineNode.active = !1;
this.hideTurn();
};
e.prototype.hideSpineNodeAni = function() {
this.spineNode && (this.spineNode.active = !1);
};
e.prototype.showSpineNodeAni = function() {
Log.d("===========自己======播放动画");
if (this.spineNode) {
this.spineNode.active = !0;
var t = this.spineNode.getComponent(sp.Skeleton);
t.setToSetupPose();
t.clearTracks();
t.setAnimation(0, "hb_tx", !0);
}
};
e.prototype.showLostNode = function(t, e) {
this.dropNode && (this.dropNode.active = !0);
this.dropPointTitle && (this.dropPointTitle.string = e ? "Drop" : "Lost");
this.dropPointValue && (this.dropPointValue.string = "" + t);
};
e.prototype.play_dropped = function(t) {
var e = this;
this.sprite_dropped.node.active = !0;
var o = cc.sequence(cc.fadeTo(.15, 255), cc.delayTime(.5), cc.fadeTo(.2, 50), cc.callFunc(function() {
e.sprite_dropped.node.active = !1;
}, this));
this.sprite_dropped.node.runAction(o);
this.dropNode && (this.dropNode.active = !0);
this.dropPointValue && (this.dropPointValue.string = "" + t);
};
e.prototype.play_emoji = function(t, e, o) {
this._is_reverse = o;
var i = cc.instantiate(this.prefab_emoji);
i.parent = this.node_emoji;
i.position = cc.v3(0, 0, 0);
var n = i.getComponent(c.default);
n.node.active = !0;
n.play_emoji(t, e);
};
r([ d({
displayName: "金币",
type: cc.Label
}) ], e.prototype, "label_gold", void 0);
r([ d({
displayName: "label_point",
type: cc.Label
}) ], e.prototype, "label_point", void 0);
r([ d({
displayName: "头像",
type: cc.Sprite
}) ], e.prototype, "sprite_avatar", void 0);
r([ d({
displayName: "赢了等待动画",
type: cc.Node
}) ], e.prototype, "spineNode", void 0);
r([ d({
displayName: "Dropped提示框",
type: cc.Sprite
}) ], e.prototype, "sprite_dropped", void 0);
r([ d({
displayName: "Dropped节点",
type: cc.Node
}) ], e.prototype, "dropNode", void 0);
r([ d({
displayName: "Dropped标题",
type: cc.Label
}) ], e.prototype, "dropPointTitle", void 0);
r([ d({
displayName: "Dropped分数",
type: cc.Label
}) ], e.prototype, "dropPointValue", void 0);
r([ d({
displayName: "表情预制物",
type: cc.Prefab
}) ], e.prototype, "prefab_emoji", void 0);
r([ d({
displayName: "表情挂接点",
type: cc.Node
}) ], e.prototype, "node_emoji", void 0);
return r([ l ], e);
}(_.default);
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/common/utils/UIUtils": void 0,
"../../../../scripts/tableCommon/emoji": void 0,
"./rummy_base_seat": "rummy_base_seat"
} ],
panel_game_rummy_open_deck: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6b3edlpWBpLcJa3CKVDkflr", "panel_game_rummy_open_deck");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card_prefab = null;
e.fapai_root = null;
e.card_item = null;
return e;
}
e.prototype.fapai_to_seat = function(t, e, o) {
var i = App.utils.localConvertWorldPointAR(this.node), n = this.fapai_root.convertToNodeSpaceAR(i), r = App.utils.localConvertWorldPointAR(t), s = this.fapai_root.convertToNodeSpaceAR(r), a = cc.instantiate(this.card_prefab);
this.fapai_root.addChild(a);
a.setPosition(n);
a.getComponent("card").init_card(e);
var c = cc.sequence(cc.spawn(cc.moveTo(.4, s.x, s.y), cc.scaleTo(.4, .5)), cc.delayTime(.5), cc.callFunc(function() {
a.destroy();
}));
a.runAction(c);
this.showCard(o);
};
e.prototype.hide = function() {
this.card_item.active = !1;
};
e.prototype.showCard = function(t) {
if (t) {
this.card_item.active = !0;
this.card_item.getComponent("card").init_card(t);
} else this.card_item.active = !1;
};
e.prototype.fapai_to_self = function(t, e, o, i) {
var n = App.utils.localConvertWorldPointAR(this.node), r = this.fapai_root.convertToNodeSpaceAR(n), s = App.utils.localConvertWorldPointAR(t), a = this.fapai_root.convertToNodeSpaceAR(s), c = cc.instantiate(this.card_prefab);
this.fapai_root.addChild(c);
c.getComponent("card").init_card(e);
c.setPosition(r);
var _ = cc.sequence(cc.moveTo(.2, a.x, a.y), cc.callFunc(function() {
i && i();
}), cc.delayTime(.25), cc.callFunc(function() {
c.destroy();
}));
c.runAction(_);
this.showCard(o);
};
e.prototype.out_from_target = function(t, e, o) {
var i = this, n = App.utils.localConvertWorldPointAR(this.node), r = this.fapai_root.convertToNodeSpaceAR(n), s = App.utils.localConvertWorldPointAR(t), a = this.fapai_root.convertToNodeSpaceAR(s), c = cc.instantiate(this.card_prefab);
c.getComponent("card").init_card(e);
this.fapai_root.addChild(c);
c.scale = .5;
c.setPosition(a);
var _ = cc.sequence(cc.delayTime(.15), cc.spawn(cc.moveTo(.2, r.x, r.y), cc.scaleTo(.2, .65, .65)), cc.callFunc(function() {
c.destroy();
o && o();
i.showCard(e);
}));
c.runAction(_);
};
e.prototype.out_from_target_to_finish = function(t, e, o, i) {
var n = App.utils.localConvertWorldPointAR(o.node), r = this.fapai_root.convertToNodeSpaceAR(n), s = App.utils.localConvertWorldPointAR(t), a = this.fapai_root.convertToNodeSpaceAR(s), c = cc.instantiate(this.card_prefab);
c.getComponent("card").init_card(e);
this.fapai_root.addChild(c);
c.scale = .5;
c.setPosition(a);
var _ = cc.sequence(cc.delayTime(.15), cc.spawn(cc.moveTo(.2, r.x, r.y), cc.scaleTo(.2, .65, .65)), cc.callFunc(function() {
c.destroy();
i && i();
o.init_card(e);
}));
c.runAction(_);
};
r([ c({
displayName: "牌预制物",
type: cc.Prefab
}) ], e.prototype, "card_prefab", void 0);
r([ c({
displayName: "发牌的节点",
type: cc.Node
}) ], e.prototype, "fapai_root", void 0);
r([ c({
displayName: "牌",
type: cc.Node
}) ], e.prototype, "card_item", void 0);
return r([ a ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {} ],
panel_game_rummy_peopleitem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "029a7nyTRZL/LGXJdFHy0kj", "panel_game_rummy_peopleitem");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/utils/CmmUtils"), a = t("../../../../scripts/common/utils/UIUtils"), c = t("../../../../scripts/tableCommon/emoji"), _ = t("./rummy_base_seat"), p = cc._decorator, l = p.ccclass, d = p.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.stand_item = null;
e.sit_item = null;
e.label_gold = null;
e.label_name = null;
e.label_lost_title = null;
e.label_lost_value = null;
e.sprite_avatar = null;
e.winner_anim = null;
e.spineNode = null;
e.panel_lost = null;
e.prefab_emoji = null;
e.node_emoji = null;
e._outRecord = [];
e._cooldown = 0;
e.is_zhudong = !1;
return e;
}
e.prototype.onLoad = function() {
this.cleanPlayer();
this.stand();
};
e.prototype.init_player = function(t) {
this.cleanPlayer();
this._player = t;
this.stand_item.active = !1;
this.sit_item.active = !0;
this.label_name.string = s.CmmUtils.nick(t.name);
this.label_gold.string = "" + s.CmmUtils.NumberToGameString(t.money);
a.default.loadHead(this.sprite_avatar, t);
this._cooldown = 3 + 6 * Math.random();
};
Object.defineProperty(e.prototype, "playerName", {
get: function() {
return this._player ? this._player.name : "";
},
enumerable: !1,
configurable: !0
});
e.prototype.init_outrecord = function(t) {
null == t && (t = []);
this._outRecord = t;
};
e.prototype.becatch_card = function(t) {
t ? this._outRecord.push({
value: t
}) : this._outRecord.length && (this._outRecord[this._outRecord.length - 1].is_catch = 1);
};
e.prototype.getOutRecord = function() {
return this._outRecord;
};
e.prototype.cleanPlayer = function() {
this._outRecord = [];
this.panel_lost.active = !1;
this.sprite_D.node.active = !1;
this.talkSpriteBg.node.active = !1;
this.spineNode.active = !1;
this.winner_anim.active = !1;
this.hideTurn();
};
e.prototype.stand = function() {
this._player = null;
this.stand_item.active = !0;
this.sit_item.active = !1;
};
e.prototype.setMoney = function(t) {
this.label_gold.string = "" + s.CmmUtils.NumberToGameString(t);
};
e.prototype.startGame = function() {
this.cleanPlayer();
};
e.prototype.hideSpineNodeAni = function() {
this.spineNode.active = !1;
};
e.prototype.showSpineNodeAni = function() {
this.spineNode.active = !0;
var t = this.spineNode.getComponent(sp.Skeleton);
t.setToSetupPose();
t.clearTracks();
t.setAnimation(0, "hb_tx", !0);
};
e.prototype.showLostNode = function(t, e) {
this.hideTurn();
this.panel_lost.active = !0;
this.label_lost_title.string = e ? "Drop" : "Lost";
this.label_lost_value.string = "" + t;
};
e.prototype.play_winner = function() {
var t = this;
this.winner_anim.active = !0;
var e = this.winner_anim.getComponent(sp.Skeleton);
e.setCompleteListener(function() {
t.winner_anim.active = !1;
});
e.clearTrack(0);
e.setAnimation(0, "winner", !1);
};
e.prototype.update = function(t) {
if (null != this._player) {
this._cooldown -= t;
if (this._cooldown <= 0) {
if (this.is_zhudong && 100 * Math.random() <= 50) {
cc.game.emit("onSendEmoji", Math.round(11 * Math.random()), !1);
this.is_zhudong = !1;
} else 100 * Math.random() <= 20 && cc.game.emit("onSendEmoji", Math.round(11 * Math.random()), !0);
this._cooldown = 4 + 8 * Math.random();
}
}
};
e.prototype.play_emoji = function(t, e, o) {
this.is_zhudong = o;
this._cooldown = 2.5 + 3 * Math.random();
var i = cc.instantiate(this.prefab_emoji);
i.parent = this.node_emoji;
i.position = cc.v3(0, 0, 0);
var n = i.getComponent(c.default);
n.node.active = !0;
n.play_emoji(t, e);
};
r([ d({
displayName: "站起",
type: cc.Node
}) ], e.prototype, "stand_item", void 0);
r([ d({
displayName: "坐下",
type: cc.Node
}) ], e.prototype, "sit_item", void 0);
r([ d({
displayName: "金币",
type: cc.Label
}) ], e.prototype, "label_gold", void 0);
r([ d({
displayName: "昵称",
type: cc.Label
}) ], e.prototype, "label_name", void 0);
r([ d({
displayName: "Lost标题",
type: cc.Label
}) ], e.prototype, "label_lost_title", void 0);
r([ d({
displayName: "Lost数值",
type: cc.Label
}) ], e.prototype, "label_lost_value", void 0);
r([ d({
displayName: "头像",
type: cc.Sprite
}) ], e.prototype, "sprite_avatar", void 0);
r([ d({
displayName: "获胜动画",
type: cc.Node
}) ], e.prototype, "winner_anim", void 0);
r([ d({
displayName: "赢了等待动画",
type: cc.Node
}) ], e.prototype, "spineNode", void 0);
r([ d({
displayName: "Lost面板",
type: cc.Node
}) ], e.prototype, "panel_lost", void 0);
r([ d({
displayName: "表情预制物",
type: cc.Prefab
}) ], e.prototype, "prefab_emoji", void 0);
r([ d({
displayName: "表情挂接点",
type: cc.Node
}) ], e.prototype, "node_emoji", void 0);
return r([ l ], e);
}(_.default);
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/common/utils/UIUtils": void 0,
"../../../../scripts/tableCommon/emoji": void 0,
"./rummy_base_seat": "rummy_base_seat"
} ],
panel_game_rummy_result_item: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "95260BM0pRIpqdr/aZyrWeN", "panel_game_rummy_result_item");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/config/User"), a = t("../../../../scripts/common/utils/CmmUtils"), c = t("../../../../scripts/common/utils/UIUtils"), _ = t("../old/panel_game_rummy_card_set_item"), p = cc._decorator, l = p.ccclass, d = p.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprite_my_background = null;
e.sprite_other_background = null;
e.label_name = null;
e.label_points = null;
e.label_lost_golds = null;
e.label_win_golds = null;
e.panel_lost = null;
e.panel_win = null;
e.sprite_avatar = null;
e.listbox = null;
e.listbox_prefab = null;
e.listbox_set_item_prefab = null;
return e;
}
e.prototype.get_all_set_item_space = function(t) {
var e = this.listbox.children.length;
return (1220 - (e - 1) * this.listbox.getComponent(cc.Layout).spacingX - 140 * e) / (t - e) - 140 + 5;
};
e.prototype.init_data = function(t, e) {
this.label_points.string = "" + t.gamesocre;
this.label_name.string = a.CmmUtils.nick(t.name);
if (t.winscore > 0) {
this.panel_win.active = !0;
this.label_win_golds.string = "+" + t.winscore;
} else {
this.panel_lost.active = !0;
this.label_lost_golds.string = "" + t.winscore;
}
if (t.uid == s.default.self.uid) {
this.sprite_my_background.node.active = !0;
this.sprite_other_background.node.active = !1;
} else {
this.sprite_my_background.node.active = !1;
this.sprite_other_background.node.active = !0;
}
c.default.loadHead(this.sprite_avatar, t);
if (e) {
for (var o = t.cardinfos, i = [], n = 0; n < o.length; n++) i.push(cc.instantiate(this.listbox_set_item_prefab));
for (n = 0; n < i.length; n++) {
(r = i[n]).getComponent(_.default).init_cards_with_result(o[n].cards, null, o[n].type);
this.listbox.addChild(r);
}
this.listbox.getComponent(cc.Layout).spacingX = 0;
this.listbox.getComponent(cc.Layout).updateLayout();
} else {
var r, p = cc.instantiate(this.listbox_set_item_prefab);
(r = cc.instantiate(this.listbox_set_item_prefab)).getComponent("panel_game_rummy_card_set_item").set_watch(!0);
r.getComponent("panel_game_rummy_card_set_item").init_cards_with_bg(13);
p.addChild(r);
this.listbox.addChild(p);
this.listbox.getComponent(cc.Layout).spacingX = 0;
this.listbox.getComponent(cc.Layout).updateLayout();
}
var l = this.get_all_set_item_space(13);
for (n = 0; n < this.listbox.children.length; n++) this.listbox.children[n].getComponent("panel_game_rummy_card_set_item").reset_space(l, !0);
};
r([ d(cc.Sprite) ], e.prototype, "sprite_my_background", void 0);
r([ d(cc.Sprite) ], e.prototype, "sprite_other_background", void 0);
r([ d(cc.Label) ], e.prototype, "label_name", void 0);
r([ d(cc.Label) ], e.prototype, "label_points", void 0);
r([ d(cc.Label) ], e.prototype, "label_lost_golds", void 0);
r([ d(cc.Label) ], e.prototype, "label_win_golds", void 0);
r([ d(cc.Node) ], e.prototype, "panel_lost", void 0);
r([ d(cc.Node) ], e.prototype, "panel_win", void 0);
r([ d(cc.Sprite) ], e.prototype, "sprite_avatar", void 0);
r([ d(cc.Node) ], e.prototype, "listbox", void 0);
r([ d(cc.Prefab) ], e.prototype, "listbox_prefab", void 0);
r([ d(cc.Prefab) ], e.prototype, "listbox_set_item_prefab", void 0);
return r([ l ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/common/utils/UIUtils": void 0,
"../old/panel_game_rummy_card_set_item": "panel_game_rummy_card_set_item"
} ],
panel_game_rummy_result: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "eeb5cCCk7FJx4x86Ks0gRDM", "panel_game_rummy_result");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/config/GlobalVar"), a = t("../../../../scripts/common/config/User"), c = t("../../../../scripts/common/event/CommonEvent"), _ = t("../../../../scripts/common/utils/CmmUtils"), p = t("../../../../scripts/framework/componects/EventComponent"), l = t("../../../../scripts/sdk/GameNativeConfig"), d = t("./card"), u = t("./panel_game_rummy_result_item"), h = cc._decorator, m = h.ccclass, y = h.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listbox = null;
e.listbox_prefab = null;
e.tip_label = null;
e.start_label = null;
e.joker_item = null;
e._reindex = 16;
return e;
}
e.prototype.onDestroy = function() {
cc.game.targetOff(this);
};
e.prototype.onLoad = function() {
this.onD(l.default.Event.exit_game, this.close);
this.onD(l.default.Event.login_enter, this.close);
this.joker_item.getComponent(d.default).init_card(s.GlobalVar.wildJoker, !0);
cc.game.on(l.default.Event.on_continue, this.onClose, this);
};
e.prototype.onRestart = function() {
this._reindex--;
var t = this._reindex < 0 ? 0 : this._reindex;
this.tip_label.string = "The game starts in " + t + " seconds";
this.start_label.string = "（" + t + "s）";
this._reindex < 0 && this.onClickContinue();
};
e.prototype.close = function() {
_.CmmUtils.isNil(this.node) || this.node.destroy();
};
e.prototype.show_result = function(t) {
for (var e = 0; e < t.length; e++) if ((o = t[e]).uid == a.default.self.uid) {
(i = cc.instantiate(this.listbox_prefab)).getComponent(u.default).init_data(o, 1 == o.showcard);
this.listbox.addChild(i);
}
for (e = 0; e < t.length; e++) {
var o;
if ((o = t[e]).uid != a.default.self.uid) {
var i;
(i = cc.instantiate(this.listbox_prefab)).getComponent(u.default).init_data(o, 1 == o.showcard);
this.listbox.addChild(i);
}
}
};
e.prototype.onClickExit = function() {
dispatch(c.ComponentGameEvent.Game_Exit_Event);
this.onClose();
};
e.prototype.onClickContinue = function() {
cc.game.emit(l.default.Event.continue);
};
e.prototype.onClose = function() {
this.node.destroy();
};
r([ y({
displayName: "列表",
type: cc.Node
}) ], e.prototype, "listbox", void 0);
r([ y({
displayName: "列表预制物",
type: cc.Prefab
}) ], e.prototype, "listbox_prefab", void 0);
r([ y(cc.Label) ], e.prototype, "tip_label", void 0);
r([ y(cc.Label) ], e.prototype, "start_label", void 0);
r([ y(cc.Node) ], e.prototype, "joker_item", void 0);
return r([ m ], e);
}(p.default);
o.default = f;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0,
"./card": "card",
"./panel_game_rummy_result_item": "panel_game_rummy_result_item"
} ],
panel_outcard: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e89039u3C5DK6z+AyiPcke2", "panel_outcard");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/component/ListView/List"), a = t("../../../../scripts/common/utils/CmmUtils"), c = cc._decorator, _ = c.ccclass, p = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.panel_node = null;
e.list = null;
e.other_labels = [];
e.other_btn = null;
e.self_btn = null;
e._otherData = null;
e._selfData = null;
return e;
}
o = e;
e.prototype.onEnable = function() {
this.panel_node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
this.panel_node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
o.outCardPos && this.panel_node.setPosition(o.outCardPos);
};
e.prototype.onDisable = function() {
this.panel_node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
this.panel_node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
};
e.prototype._onTouchMove = function(t) {
var e = t.getDelta(), i = this.node.height - this.panel_node.height >> 1;
this.panel_node.y += e.y;
this.panel_node.y > i ? this.panel_node.y = i : this.panel_node.y < -i && (this.panel_node.y = -i);
o.outCardPos = this.panel_node.getPosition();
};
e.prototype._onTouchEnd = function() {};
e.prototype.updateName = function(t) {
for (var e = 0; e < this.other_labels.length; e++) this.other_labels[e].string = a.CmmUtils.nick(t);
};
e.prototype.initData = function(t, e) {
Log.d("历史出牌数据:", t, e);
this._otherData = t;
this._selfData = e;
this.onClick();
};
e.prototype.onClick = function() {
var t = this.list.getComponent(s.default);
if (null != t) {
this.other_btn.isChecked ? t.setData(this._otherData) : t.setData(this._selfData);
this.scheduleOnce(function() {
t.scrollView.scrollToRight(.2);
});
} else Log.e("not list");
};
var o;
e.outCardPos = null;
r([ p(cc.Node) ], e.prototype, "panel_node", void 0);
r([ p(cc.ScrollView) ], e.prototype, "list", void 0);
r([ p([ cc.Label ]) ], e.prototype, "other_labels", void 0);
r([ p(cc.Toggle) ], e.prototype, "other_btn", void 0);
r([ p(cc.Toggle) ], e.prototype, "self_btn", void 0);
return o = r([ _ ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../../../../scripts/common/component/ListView/List": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0
} ],
rummy_add_button: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2fe5793L/RHpJFjecYRu0Wr", "rummy_add_button");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/sdk/GameNativeConfig"), a = cc._decorator, c = a.ccclass, _ = a.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
return e;
}
e.prototype.setGroup = function(t) {
this._value = t;
};
e.prototype.onClickAdd = function() {
cc.game.emit(s.default.Event.ADD_GROUP, this._value);
};
r([ _(cc.Label) ], e.prototype, "label", void 0);
return r([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/sdk/GameNativeConfig": void 0
} ],
rummy_base_seat: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "88c69ZBrCFPOIRZRDyYINbC", "rummy_base_seat");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/config/User"), a = t("../../../../scripts/common/utils/UIUtils"), c = cc._decorator, _ = c.ccclass, p = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprite_D = null;
e.sprite_timeout = null;
e.time_label1 = null;
e.time_label2 = null;
e.talkSpriteBg = null;
e.talkLabel = null;
e.talkFace = null;
e._player = null;
return e;
}
Object.defineProperty(e.prototype, "seatid", {
get: function() {
return this._player ? this._player.seatid : -1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isself", {
get: function() {
return !!this._player && this._player.uid == s.default.self.uid;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isother", {
get: function() {
return 0 == this.isself;
},
enumerable: !1,
configurable: !0
});
e.prototype.turn = function(t) {
var e = this;
this.hideTurn();
this.time_label1.node.parent.active = !1;
this.time_label2.node.parent.active = !1;
var o = 0, i = !1, n = t, r = function(t) {
var r = n - (o += t), s = r / n;
e.setFillRange(s);
if (!i && r < 10) {
i = !0;
App.globalAudio.playButtonClick();
}
};
this.sprite_timeout.node.active = !0;
r(0);
this.schedule(r);
};
e.prototype.play_turn = function(t, e) {
var o = this;
null == e && (e = t);
this.time_label1.node.parent.active = !0;
this.time_label2.node.parent.active = !0;
var i = t - e;
this.time_label1.string = "" + e;
this.time_label2.string = "" + i;
var n = 0, r = this.isother, s = e, a = function(t) {
if (!r && t < 10) {
r = !0;
App.globalAudio.playButtonClick();
}
}, c = function(t) {
var e = s - (n += t), i = e / s;
e < 0 && (e = 0);
o.time_label1.string = "" + Math.ceil(e);
o.time_label2.string = "" + Math.ceil(e);
o.setFillRange(i);
a(e);
}, _ = function(t) {
var e = s - (n += t), _ = e / s;
e < 0 && (e = 0);
o.time_label1.string = "" + Math.ceil(e);
o.setFillRange(_);
a(e);
if (!(e > 0)) {
r = o.isother;
n = 0;
s = i;
o.hideTurn();
if (i > 0) {
o.sprite_timeout.node.active = !0;
c(0);
o.schedule(c);
}
}
};
this.sprite_timeout.node.active = !0;
_(0);
this.schedule(_);
};
e.prototype.hideTurn = function() {
this.unscheduleAllCallbacks();
this.sprite_timeout.node.active = !1;
};
e.prototype.setFillRange = function(t) {
t < 0 && (t = 0);
this.sprite_timeout.fillRange = t;
this.sprite_timeout.node.active = t > 0;
};
Object.defineProperty(e.prototype, "setBanker", {
set: function(t) {
this.sprite_D.node.active = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.showPlayerTalkSprite = function(t) {
Log.d("显示聊天  ================" + t);
this.talkLabel && (this.talkLabel.node.active = !0);
this.talkFace && (this.talkFace.node.active = !0);
if ("#" == t.charAt(0)) {
var e = t.replace("#", "");
a.default.setMainSprite_Altas(this.talkFace, "table_common/textures/emoji/emoji_altas", e);
this.talkLabel.node.active = !1;
} else {
this.talkLabel.string = t;
this.talkFace.node.active = !1;
}
if (this.talkSpriteBg) {
this.talkSpriteBg.node.stopAllActions();
this.talkSpriteBg.node.active = !0;
this.talkSpriteBg.node.runAction(cc.sequence(cc.show(), cc.delayTime(2.5), cc.hide()));
}
};
r([ p(cc.Sprite) ], e.prototype, "sprite_D", void 0);
r([ p({
displayName: "倒计时光",
type: cc.Sprite
}) ], e.prototype, "sprite_timeout", void 0);
r([ p(cc.Label) ], e.prototype, "time_label1", void 0);
r([ p(cc.Label) ], e.prototype, "time_label2", void 0);
r([ p(cc.Sprite) ], e.prototype, "talkSpriteBg", void 0);
r([ p({
displayName: "talkLabel",
type: cc.Label
}) ], e.prototype, "talkLabel", void 0);
r([ p(cc.Sprite) ], e.prototype, "talkFace", void 0);
return r([ _ ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/utils/UIUtils": void 0
} ],
rummy_card_type_item: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a41e9oQNB1O/7z7TYfzkqgA", "rummy_card_type_item");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.panel_tips_set = null;
e.panel_tips_invalid = null;
e.panel_tips_2ndlifeneed = null;
return e;
}
e.prototype.showType = function(t, e, o) {
t < 3 || (1 == e ? this.showGreen(o) : 2 == e ? this.showGreen(o) : 3 == e ? this.showYellow(o) : 4 == e ? this.showYellow(o) : 5 == e ? this.showGreen(o) : 6 == e ? this.showGreen(o) : 7 == e ? this.showGreen(o) : 8 == e && this.showNotCorrect(o));
};
e.prototype.showNotCorrect = function(t) {
this.panel_tips_invalid.active = !0;
this.panel_tips_invalid.getComponentInChildren(cc.Label).string = t;
};
e.prototype.showGreen = function(t) {
this.panel_tips_set.active = !0;
this.panel_tips_set.getComponentInChildren(cc.Label).string = t;
};
e.prototype.showYellow = function(t) {
this.panel_tips_2ndlifeneed.active = !0;
this.panel_tips_2ndlifeneed.getComponentInChildren(cc.Label).string = t;
};
r([ c({
displayName: "绿色",
type: cc.Node
}) ], e.prototype, "panel_tips_set", void 0);
r([ c({
displayName: "红色",
type: cc.Node
}) ], e.prototype, "panel_tips_invalid", void 0);
r([ c({
displayName: "黄色",
type: cc.Node
}) ], e.prototype, "panel_tips_2ndlifeneed", void 0);
return r([ a ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {} ],
rummy_drag_card: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3d8b8MHkXxGeJj593zhVKYa", "rummy_drag_card");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = (s.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.defzIndex = 0;
e.topzIndex = 9999;
e._downPos = null;
e._start_pos = null;
return e;
}
e.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
};
e.prototype.onDestroy = function() {
this.node.targetOff(this);
};
Object.defineProperty(e.prototype, "data", {
get: function() {
return this._data;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function(t, e) {
this._start_pos = this.node.position;
this._data = t;
this.defzIndex = 10 * t.group + t.index;
this._isOut = !1;
this._isDrag = e;
this.resetzIndex();
};
e.prototype.resetOut = function() {
this._isOut = !1;
};
e.prototype.startDrag = function() {
this._isDrag = !0;
};
e.prototype.updateData = function(t) {
this._start_pos.x = this.node.x;
this._data = t;
this.defzIndex = 10 * t.group + t.index;
this.node.active = !0;
this.updateOut();
this.resetzIndex();
};
e.prototype.stopDrag = function() {
this._isDrag = !1;
};
e.prototype.resetzIndex = function() {
this.node.zIndex = this.defzIndex;
};
Object.defineProperty(e.prototype, "isOut", {
get: function() {
return this._isOut;
},
enumerable: !1,
configurable: !0
});
e.prototype._onTouchBegin = function(t) {
if (this._isDrag) {
this._isDown = !0;
this._downPos = t.getLocation();
}
};
e.prototype._onTouchMove = function(t) {
if (this._isDrag && this._isDown) {
var e = t.getLocation();
if (!(this._downPos.sub(e).mag() < 22)) {
this.node.zIndex = this.topzIndex;
this._isMove = !0;
var o = this.node.parent.convertToNodeSpaceAR(e);
this.node.setPosition(o);
}
}
};
e.prototype._onTouchEnd = function() {
if (this._isDrag && this._isDown) {
this._isDown = !1;
this.resetzIndex();
var t = this._isMove;
this._isMove = !1;
if (t) {
cc.game.emit("drag.card", this.node, this.data);
this.updateOut();
} else {
this._isOut = !this._isOut;
this.updateOut();
cc.game.emit("update.card", this.node, this.data);
}
}
};
e.prototype.updateOut = function() {
this._isOut ? this.node.y = this._start_pos.y + 20 : this.node.y = this._start_pos.y;
};
return r([ a ], e);
}(cc.Component));
o.default = c;
cc._RF.pop();
}, {} ],
rummy_group_card: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "370d6eQHMZGma1rp352Y4zo", "rummy_group_card");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./rummy_add_button"), a = t("./rummy_card_type_item"), c = t("./rummy_drag_card"), _ = cc._decorator, p = _.ccclass, l = _.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card_prefab = null;
e.card_type_prefab = null;
e.add_prefab = null;
e._cards = [];
e._titles = [];
e._addbtns = [];
e.groupLen = 0;
return e;
}
e.prototype.init_group = function(t) {
if (null != t) {
this.clearCards();
this.setGroup(t);
for (var e = 0; e < t.length; e++) {
var o = t[e];
this.create_cards(o.cards, e);
}
this.update_sort_position();
}
};
e.prototype.setGroup = function(t) {
if (null != t) {
this._data = t;
this.groupLen = t.length;
}
};
e.prototype.push_card = function(t, e) {
this.setGroup(e);
var o = this._cards[this._cards.length - 1];
this.addAndCreateCard(t, o.group, o.index + 1);
this.update_sort_position();
this.reset_all_card();
};
e.prototype.remove_card = function(t, e) {
for (var o = 0; o < this._cards.length; o++) if (this._cards[o].item == t.item) {
this._cards.splice(o, 1);
break;
}
if (e) {
t.item.destroy();
this.update_cards();
}
};
e.prototype.update_group = function(t) {
this.setGroup(t);
this.update_cards();
};
e.prototype.update_cards = function() {
var t = this._data, e = this._cards.slice();
this._cards = [];
for (var o = 0; o < t.length; o++) for (var i = t[o].cards, n = 0; n < i.length; n++) {
var r = i[n], s = e.shift().item;
s.getComponent("card").init_card(r);
s.getComponent(c.default).resetOut();
this._cards.push({
group: o,
index: n,
value: r,
item: s
});
}
this.update_sort_position();
};
e.prototype.init_fapai = function(t, e) {
var o = this;
this.clearCards();
this._data = t;
this.groupLen = t.length;
for (var i = this.getBundleCards(t), n = this.node.width / i.length, r = function(t) {
var o = i[t], r = cc.instantiate(s.card_prefab);
r.getComponent(c.default).init(o);
r.scale = .63;
r.setPosition(e.x + 1, e.y + 9);
s.node.addChild(r);
var a = -s.node.width / 2 + t * n;
r.runAction(cc.sequence(cc.delayTime(.05 * t), cc.spawn(cc.moveTo(.1, a, 0), cc.scaleTo(.1, 1, 1)), cc.delayTime(.3), cc.delayTime(.01 * t), cc.scaleTo(.05, 0, 1), cc.callFunc(function() {
r.getComponent(c.default).startDrag();
r.getComponent("card").init_card(o.value);
}), cc.scaleTo(.05, 1, 1)));
o.item = r;
s._cards.push(o);
}, s = this, a = 0; a < i.length; a++) r(a);
this.scheduleOnce(function() {
o.update_sort_position(!0);
}, 1.4);
};
e.prototype.getBundleCards = function(t) {
for (var e = [], o = 0; o < t.length; o++) for (var i = t[o], n = 0; n < i.cards.length; n++) {
var r = i.cards[n];
e.push({
item: null,
value: r,
group: o,
index: n
});
}
return e;
};
e.prototype.clear = function() {
this.clearCards();
};
e.prototype.clearCards = function() {
this.node.destroyAllChildren();
this._cards = [];
this._titles = [];
this._addbtns = [];
};
e.prototype.stopGame = function() {
for (var t = 0; t < this._cards.length; t++) {
var e = this._cards[t];
e.item && e.item.getComponent(c.default).stopDrag();
}
this.update_sort_position();
};
e.prototype.create_cards = function(t, e) {
for (var o = 0; o < t.length; o++) this.addAndCreateCard(t[o], e, o);
};
e.prototype.addAndCreateCard = function(t, e, o) {
var i = cc.instantiate(this.card_prefab);
i.getComponent("card").init_card(t);
var n = {
item: i,
value: t,
group: e,
index: o
};
i.getComponent(c.default).init(n, !0);
this.node.addChild(i);
this._cards.push(n);
};
e.prototype.update_sort_position = function(t) {
for (var e = 144 * (this.groupLen - 1), o = (this.node.width - e) / (this.len - this.groupLen), i = 0, n = function(e) {
var n = r._cards[e];
e > 0 && (0 == n.index ? i += 144 : i += o);
var s = i - r.node.width / 2;
n.x = s;
if (t) n.item.runAction(cc.sequence(cc.moveTo(.1, s, 0), cc.callFunc(function() {
n.item.getComponent(c.default).updateData(n);
}))); else {
n.item.x = s;
n.item.getComponent(c.default).updateData(n);
}
}, r = this, s = 0; s < this._cards.length; s++) n(s);
this.update_card_type_pos(o);
this.update_add_btn_pos(o);
};
e.prototype.reset_all_card = function() {};
e.prototype.update_card_type_pos = function(t) {
for (;this._titles.length; ) this._titles.pop().destroy();
for (var e = 0, o = 0; o < this._data.length; o++) {
var i = this._data[o], n = (i.cards.length - 1) * t + 140, r = this.create_title(i.cards.length, i.desc_type, i.desc);
if (r) {
r.width = n;
r.x = -70 - this.node.width / 2 + n / 2 + e;
this.node.addChild(r);
this._titles.push(r);
}
e += n + 4;
}
};
e.prototype.create_title = function(t, e, o) {
var i = cc.instantiate(this.card_type_prefab);
i.getComponent(a.default).showType(t, e, o);
i.zIndex = 999;
return i;
};
e.prototype.update_add_btn_pos = function(t) {
for (;this._addbtns.length; ) this._addbtns.pop().destroy();
for (var e = !1, o = this._cards.length, i = 0; i < o; i++) if (this._cards[i].item.getComponent(c.default).isOut) {
e = !0;
break;
}
if (e) {
var n = {}, r = {};
for (i = 0; i < o; i++) {
var s = this._cards[i];
r[s.group] = 1;
s.item.getComponent(c.default).isOut && (n[s.group] = 1);
}
var a = 0;
for (i = 0; i < this._data.length; i++) {
var _ = 1 == n[i], p = (this._data[i].cards.length - 1) * t + 140;
if (_) ; else {
var l = this.create_addbtn(i);
l.x = -70 - this.node.width / 2 + p / 2 + a;
this.node.addChild(l);
this._addbtns.push(l);
}
a += p + 4;
}
}
};
e.prototype.create_addbtn = function(t) {
var e = cc.instantiate(this.add_prefab);
e.getComponent(s.default).setGroup(t);
e.zIndex = 999;
return e;
};
e.prototype.getOutCards = function() {
for (var t = [], e = 0; e < this._cards.length; e++) {
var o = this._cards[e];
o.item.getComponent(c.default).isOut && t.push(o);
}
return t;
};
e.prototype.getInsertData = function(t, e) {
for (var o = this._cards.length, i = 0; i < o; i++) {
var n = this._cards[i], r = this.checkNearby(t, n, 0 == i, i == o - 1);
if (-1 != r) {
var s = n.index + r;
e.group == n.group && (e.index > n.index || (s = n.index));
return {
group: n.group,
index: s
};
}
}
return null;
};
e.prototype.checkNearby = function(t, e, o, i) {
if (o) {
if (t.x <= e.x + 70) return 0;
} else if (i) {
if (t.x >= e.x - 70) return 1;
} else if (t.x < e.x + 70 && t.x > e.x - 70) return t.x >= e.x ? 1 : 0;
return -1;
};
e.prototype.getLastCardNode = function() {
return this._cards[this._cards.length - 1];
};
Object.defineProperty(e.prototype, "canOut", {
get: function() {
return 14 == this.len;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "len", {
get: function() {
return this._cards.length;
},
enumerable: !1,
configurable: !0
});
r([ l({
displayName: "牌",
type: cc.Prefab
}) ], e.prototype, "card_prefab", void 0);
r([ l({
displayName: "牌型",
type: cc.Prefab
}) ], e.prototype, "card_type_prefab", void 0);
r([ l({
displayName: "add",
type: cc.Prefab
}) ], e.prototype, "add_prefab", void 0);
return r([ p ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./rummy_add_button": "rummy_add_button",
"./rummy_card_type_item": "rummy_card_type_item",
"./rummy_drag_card": "rummy_drag_card"
} ],
rummy_table_info: [ function(t, e) {
"use strict";
cc._RF.push(e, "0ffeaz7DRlJ7JI/7idT7wID", "rummy_table_info");
cc.Class({
extends: cc.Component,
properties: {
numsLabel0: {
default: null,
displayName: "numsLabel0",
type: cc.Label
},
numsLabel1: {
default: null,
displayName: "numsLabel1",
type: cc.Label
},
numsLabel2: {
default: null,
displayName: "numsLabel2",
type: cc.Label
},
noteLabel: {
default: null,
displayName: "noteLabel",
type: cc.Label
}
},
onClickClose: function() {
this.node.destroy();
},
setTableInfoNums: function(t, e, o) {
this.numsLabel0 && (this.numsLabel0.string = t.toString());
this.numsLabel1 && (this.numsLabel1.string = e.toString());
this.numsLabel2 && (this.numsLabel2.string = o.toString());
this.noteLabel && (this.noteLabel.string = App.zLan.getString(1026));
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "RummyEntry", "card", "panel_game_rummy_result", "panel_game_rummy_result_item", "RummyCmd", "RummyEvent", "RummyHandler", "RummySender", "RummyService", "RummyGameController", "checkModeDesk", "panel_game_rummy_card_counter", "panel_game_rummy_card_set_item", "panel_game_rummy_closed_deck", "panel_game_rummy_coinout_item", "panel_game_rummy_declare", "panel_game_rummy_finish_panel", "panel_game_rummy_info", "panel_game_rummy_open_deck", "panel_game_rummy_peopleitem", "panel_outcard", "rummy_add_button", "rummy_base_seat", "rummy_card_type_item", "rummy_drag_card", "rummy_group_card", "rummy_table_info", "RummyView", "out_card_item" ]);