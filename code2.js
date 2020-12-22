gdjs.t_46homeCode = {};
gdjs.t_46homeCode.GDfadeObjects1= [];
gdjs.t_46homeCode.GDfadeObjects2= [];
gdjs.t_46homeCode.GDfadeObjects3= [];
gdjs.t_46homeCode.GDfadeObjects4= [];
gdjs.t_46homeCode.GDfadegreyObjects1= [];
gdjs.t_46homeCode.GDfadegreyObjects2= [];
gdjs.t_46homeCode.GDfadegreyObjects3= [];
gdjs.t_46homeCode.GDfadegreyObjects4= [];
gdjs.t_46homeCode.GDdotsObjects1= [];
gdjs.t_46homeCode.GDdotsObjects2= [];
gdjs.t_46homeCode.GDdotsObjects3= [];
gdjs.t_46homeCode.GDdotsObjects4= [];
gdjs.t_46homeCode.GDNewObjectObjects1= [];
gdjs.t_46homeCode.GDNewObjectObjects2= [];
gdjs.t_46homeCode.GDNewObjectObjects3= [];
gdjs.t_46homeCode.GDNewObjectObjects4= [];
gdjs.t_46homeCode.GDmenugreyObjects1= [];
gdjs.t_46homeCode.GDmenugreyObjects2= [];
gdjs.t_46homeCode.GDmenugreyObjects3= [];
gdjs.t_46homeCode.GDmenugreyObjects4= [];
gdjs.t_46homeCode.GDsettingsObjects1= [];
gdjs.t_46homeCode.GDsettingsObjects2= [];
gdjs.t_46homeCode.GDsettingsObjects3= [];
gdjs.t_46homeCode.GDsettingsObjects4= [];
gdjs.t_46homeCode.GDWEBBROWSERObjects1= [];
gdjs.t_46homeCode.GDWEBBROWSERObjects2= [];
gdjs.t_46homeCode.GDWEBBROWSERObjects3= [];
gdjs.t_46homeCode.GDWEBBROWSERObjects4= [];
gdjs.t_46homeCode.GDnonsidemenuariaObjects1= [];
gdjs.t_46homeCode.GDnonsidemenuariaObjects2= [];
gdjs.t_46homeCode.GDnonsidemenuariaObjects3= [];
gdjs.t_46homeCode.GDnonsidemenuariaObjects4= [];
gdjs.t_46homeCode.GDNewObject2Objects1= [];
gdjs.t_46homeCode.GDNewObject2Objects2= [];
gdjs.t_46homeCode.GDNewObject2Objects3= [];
gdjs.t_46homeCode.GDNewObject2Objects4= [];
gdjs.t_46homeCode.GDtimeObjects1= [];
gdjs.t_46homeCode.GDtimeObjects2= [];
gdjs.t_46homeCode.GDtimeObjects3= [];
gdjs.t_46homeCode.GDtimeObjects4= [];
gdjs.t_46homeCode.GDgotoappObjects1= [];
gdjs.t_46homeCode.GDgotoappObjects2= [];
gdjs.t_46homeCode.GDgotoappObjects3= [];
gdjs.t_46homeCode.GDgotoappObjects4= [];
gdjs.t_46homeCode.GDBasicSnowObjects1= [];
gdjs.t_46homeCode.GDBasicSnowObjects2= [];
gdjs.t_46homeCode.GDBasicSnowObjects3= [];
gdjs.t_46homeCode.GDBasicSnowObjects4= [];
gdjs.t_46homeCode.GDcustomappObjects1= [];
gdjs.t_46homeCode.GDcustomappObjects2= [];
gdjs.t_46homeCode.GDcustomappObjects3= [];
gdjs.t_46homeCode.GDcustomappObjects4= [];
gdjs.t_46homeCode.GDfadeotherappsObjects1= [];
gdjs.t_46homeCode.GDfadeotherappsObjects2= [];
gdjs.t_46homeCode.GDfadeotherappsObjects3= [];
gdjs.t_46homeCode.GDfadeotherappsObjects4= [];

gdjs.t_46homeCode.conditionTrue_0 = {val:false};
gdjs.t_46homeCode.condition0IsTrue_0 = {val:false};
gdjs.t_46homeCode.condition1IsTrue_0 = {val:false};
gdjs.t_46homeCode.condition2IsTrue_0 = {val:false};


gdjs.t_46homeCode.eventsList0 = function(runtimeScene) {

{


gdjs.t_46homeCode.condition0IsTrue_0.val = false;
gdjs.t_46homeCode.condition1IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.t_46homeCode.condition0IsTrue_0.val ) {
{
gdjs.t_46homeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "false";
}}
if (gdjs.t_46homeCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BasicSnow"), gdjs.t_46homeCode.GDBasicSnowObjects2);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.t_46homeCode.GDfadeObjects2);
gdjs.copyArray(runtimeScene.getObjects("fadegrey"), gdjs.t_46homeCode.GDfadegreyObjects2);
gdjs.copyArray(runtimeScene.getObjects("fadeotherapps"), gdjs.t_46homeCode.GDfadeotherappsObjects2);
gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.t_46homeCode.GDsettingsObjects2);
{for(var i = 0, len = gdjs.t_46homeCode.GDfadeObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadeObjects2[i].setPosition(-(27),-(31));
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDfadeObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadeObjects2[i].setOpacity(gdjs.t_46homeCode.GDfadeObjects2[i].getOpacity() - (6));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fadein");
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.t_46homeCode.GDfadegreyObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadegreyObjects2[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDfadegreyObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadegreyObjects2[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "settingsfade");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "settingsfade");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "29;29;29");
}{for(var i = 0, len = gdjs.t_46homeCode.GDfadeObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadeObjects2[i].setZOrder(999);
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDBasicSnowObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDBasicSnowObjects2[i].setAngle(90);
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDfadeotherappsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadeotherappsObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDfadeotherappsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadeotherappsObjects2[i].setPosition(0,0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "customappsfade");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "customappsfade");
}}

}


{


gdjs.t_46homeCode.condition0IsTrue_0.val = false;
gdjs.t_46homeCode.condition1IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.t_46homeCode.condition0IsTrue_0.val ) {
{
gdjs.t_46homeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "true";
}}
if (gdjs.t_46homeCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fadegrey"), gdjs.t_46homeCode.GDfadegreyObjects2);
gdjs.copyArray(runtimeScene.getObjects("menugrey"), gdjs.t_46homeCode.GDmenugreyObjects2);
{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.t_46homeCode.GDmenugreyObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDmenugreyObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDfadegreyObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadegreyObjects2[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "settingsfade");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "settingsfade");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "29;29;29");
}}

}


{


gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.000000000001, "fadein");
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.t_46homeCode.GDfadeObjects2);
{for(var i = 0, len = gdjs.t_46homeCode.GDfadeObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadeObjects2[i].setOpacity(gdjs.t_46homeCode.GDfadeObjects2[i].getOpacity() - (6));
}
}}

}


{


gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
}

}


};gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDgotoappObjects3Objects = Hashtable.newFrom({"gotoapp": gdjs.t_46homeCode.GDgotoappObjects3});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDgotoappObjects3Objects = Hashtable.newFrom({"gotoapp": gdjs.t_46homeCode.GDgotoappObjects3});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDgotoappObjects3Objects = Hashtable.newFrom({"gotoapp": gdjs.t_46homeCode.GDgotoappObjects3});gdjs.t_46homeCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("gotoapp"), gdjs.t_46homeCode.GDgotoappObjects3);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDgotoappObjects3Objects, runtimeScene, true, false);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("customapp"), gdjs.t_46homeCode.GDcustomappObjects3);
/* Reuse gdjs.t_46homeCode.GDgotoappObjects3 */
{for(var i = 0, len = gdjs.t_46homeCode.GDgotoappObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDgotoappObjects3[i].setColor("0;255;238");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDcustomappObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDcustomappObjects3[i].setColor("0;255;238");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gotoapp"), gdjs.t_46homeCode.GDgotoappObjects3);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDgotoappObjects3Objects, runtimeScene, true, true);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("customapp"), gdjs.t_46homeCode.GDcustomappObjects3);
/* Reuse gdjs.t_46homeCode.GDgotoappObjects3 */
{for(var i = 0, len = gdjs.t_46homeCode.GDgotoappObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDgotoappObjects3[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDcustomappObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDcustomappObjects3[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gotoapp"), gdjs.t_46homeCode.GDgotoappObjects3);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
gdjs.t_46homeCode.condition1IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDgotoappObjects3Objects, runtimeScene, true, false);
}if ( gdjs.t_46homeCode.condition0IsTrue_0.val ) {
{
gdjs.t_46homeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.t_46homeCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("customapp"), gdjs.t_46homeCode.GDcustomappObjects3);
/* Reuse gdjs.t_46homeCode.GDgotoappObjects3 */
{for(var i = 0, len = gdjs.t_46homeCode.GDgotoappObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDgotoappObjects3[i].setColor("0;128;138");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDcustomappObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDcustomappObjects3[i].setColor("0;128;255");
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "customappsfade");
}}

}


{


gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.3, "customappsfade");
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fadeotherapps"), gdjs.t_46homeCode.GDfadeotherappsObjects3);
{for(var i = 0, len = gdjs.t_46homeCode.GDfadeotherappsObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadeotherappsObjects3[i].setOpacity(gdjs.t_46homeCode.GDfadeotherappsObjects3[i].getOpacity() + (10));
}
}}

}


{


gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.9, "customappsfade");
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "custom app", false);
}}

}


};gdjs.t_46homeCode.eventsList2 = function(runtimeScene) {

{


gdjs.t_46homeCode.eventsList1(runtimeScene);
}


};gdjs.t_46homeCode.eventsList3 = function(runtimeScene) {

};gdjs.t_46homeCode.userFunc0x72f780 = function(runtimeScene) {
"use strict";
var time_var = runtimeScene.getVariables().get("time_var");
var date_var = runtimeScene.getVariables().get("date_var");
var month_var = runtimeScene.getVariables().get("month_var");
var year_var = runtimeScene.getVariables().get("year_var");


var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();


if (min < 10) {
    time_var.setString(hour+":0"+min);
}else {
    time_var.setString(hour+":"+min);
}


var date = d.getDate();


var day = d.getDay();
    var dayarr =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day=dayarr[day];
date_var.setString(date+ " " +day);

var month = d.getMonth();
    var montharr =["January","February","March","April","May","June","July","August","September","October","November","December"];
    month=montharr[month];
month_var.setString(month);

var year = d.getFullYear();

year_var.setString(year);




};
gdjs.t_46homeCode.eventsList4 = function(runtimeScene) {

{


gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("time"), gdjs.t_46homeCode.GDtimeObjects3);
{for(var i = 0, len = gdjs.t_46homeCode.GDtimeObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDtimeObjects3[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("time_var")));
}
}}

}


{



}


{


gdjs.t_46homeCode.userFunc0x72f780(runtimeScene);

}


};gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDWEBBROWSERObjects3Objects = Hashtable.newFrom({"WEBBROWSER": gdjs.t_46homeCode.GDWEBBROWSERObjects3});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDWEBBROWSERObjects3Objects = Hashtable.newFrom({"WEBBROWSER": gdjs.t_46homeCode.GDWEBBROWSERObjects3});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDWEBBROWSERObjects2Objects = Hashtable.newFrom({"WEBBROWSER": gdjs.t_46homeCode.GDWEBBROWSERObjects2});gdjs.t_46homeCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WEBBROWSER"), gdjs.t_46homeCode.GDWEBBROWSERObjects3);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDWEBBROWSERObjects3Objects, runtimeScene, true, false);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.t_46homeCode.GDWEBBROWSERObjects3 */
{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects3[i].setColor("0;237;255");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects3[i].setOutline("0;200;253", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WEBBROWSER"), gdjs.t_46homeCode.GDWEBBROWSERObjects3);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDWEBBROWSERObjects3Objects, runtimeScene, true, true);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.t_46homeCode.GDWEBBROWSERObjects3 */
{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects3[i].setColor("0;143;162");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects3[i].setOutline("0;200;253", 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WEBBROWSER"), gdjs.t_46homeCode.GDWEBBROWSERObjects2);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
gdjs.t_46homeCode.condition1IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDWEBBROWSERObjects2Objects, runtimeScene, true, false);
}if ( gdjs.t_46homeCode.condition0IsTrue_0.val ) {
{
gdjs.t_46homeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.t_46homeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.t_46homeCode.GDWEBBROWSERObjects2 */
{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects2[i].setColor("27;239;255");
}
}{gdjs.evtTools.window.openURL("https://www.google.com", runtimeScene);
}{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects2[i].setOutline("124;227;255", 5);
}
}}

}


};gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDsettingsObjects2Objects = Hashtable.newFrom({"settings": gdjs.t_46homeCode.GDsettingsObjects2});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDsettingsObjects2Objects = Hashtable.newFrom({"settings": gdjs.t_46homeCode.GDsettingsObjects2});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDsettingsObjects2Objects = Hashtable.newFrom({"settings": gdjs.t_46homeCode.GDsettingsObjects2});gdjs.t_46homeCode.eventsList6 = function(runtimeScene) {

{


gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "settingsfade");
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fadegrey"), gdjs.t_46homeCode.GDfadegreyObjects2);
{for(var i = 0, len = gdjs.t_46homeCode.GDfadegreyObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadegreyObjects2[i].setOpacity(gdjs.t_46homeCode.GDfadegreyObjects2[i].getOpacity() + (10));
}
}}

}


{


gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.7, "settingsfade");
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "settings", false);
}}

}


};gdjs.t_46homeCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.t_46homeCode.GDsettingsObjects2);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDsettingsObjects2Objects, runtimeScene, true, false);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.t_46homeCode.GDsettingsObjects2 */
{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects2[i].setColor("0;237;255");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects2[i].setOutline("0;200;253", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.t_46homeCode.GDsettingsObjects2);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDsettingsObjects2Objects, runtimeScene, true, true);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.t_46homeCode.GDsettingsObjects2 */
{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects2[i].setColor("0;143;162");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects2[i].setOutline("0;200;253", 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.t_46homeCode.GDsettingsObjects2);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
gdjs.t_46homeCode.condition1IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDsettingsObjects2Objects, runtimeScene, true, false);
}if ( gdjs.t_46homeCode.condition0IsTrue_0.val ) {
{
gdjs.t_46homeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.t_46homeCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fadegrey"), gdjs.t_46homeCode.GDfadegreyObjects2);
/* Reuse gdjs.t_46homeCode.GDsettingsObjects2 */
{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects2[i].setColor("27;239;255");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects2[i].setOutline("124;227;255", 5);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "settingsfade");
}{for(var i = 0, len = gdjs.t_46homeCode.GDfadegreyObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadegreyObjects2[i].setZOrder(999);
}
}}

}


{


gdjs.t_46homeCode.eventsList6(runtimeScene);
}


};gdjs.t_46homeCode.eventsList8 = function(runtimeScene) {

{


gdjs.t_46homeCode.eventsList2(runtimeScene);
}


{


gdjs.t_46homeCode.eventsList3(runtimeScene);
}


{


gdjs.t_46homeCode.eventsList4(runtimeScene);
}


{


gdjs.t_46homeCode.eventsList5(runtimeScene);
}


{


gdjs.t_46homeCode.eventsList7(runtimeScene);
}


};gdjs.t_46homeCode.eventsList9 = function(runtimeScene) {

{


gdjs.t_46homeCode.eventsList0(runtimeScene);
}


{


gdjs.t_46homeCode.eventsList8(runtimeScene);
}


};

gdjs.t_46homeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.t_46homeCode.GDfadeObjects1.length = 0;
gdjs.t_46homeCode.GDfadeObjects2.length = 0;
gdjs.t_46homeCode.GDfadeObjects3.length = 0;
gdjs.t_46homeCode.GDfadeObjects4.length = 0;
gdjs.t_46homeCode.GDfadegreyObjects1.length = 0;
gdjs.t_46homeCode.GDfadegreyObjects2.length = 0;
gdjs.t_46homeCode.GDfadegreyObjects3.length = 0;
gdjs.t_46homeCode.GDfadegreyObjects4.length = 0;
gdjs.t_46homeCode.GDdotsObjects1.length = 0;
gdjs.t_46homeCode.GDdotsObjects2.length = 0;
gdjs.t_46homeCode.GDdotsObjects3.length = 0;
gdjs.t_46homeCode.GDdotsObjects4.length = 0;
gdjs.t_46homeCode.GDNewObjectObjects1.length = 0;
gdjs.t_46homeCode.GDNewObjectObjects2.length = 0;
gdjs.t_46homeCode.GDNewObjectObjects3.length = 0;
gdjs.t_46homeCode.GDNewObjectObjects4.length = 0;
gdjs.t_46homeCode.GDmenugreyObjects1.length = 0;
gdjs.t_46homeCode.GDmenugreyObjects2.length = 0;
gdjs.t_46homeCode.GDmenugreyObjects3.length = 0;
gdjs.t_46homeCode.GDmenugreyObjects4.length = 0;
gdjs.t_46homeCode.GDsettingsObjects1.length = 0;
gdjs.t_46homeCode.GDsettingsObjects2.length = 0;
gdjs.t_46homeCode.GDsettingsObjects3.length = 0;
gdjs.t_46homeCode.GDsettingsObjects4.length = 0;
gdjs.t_46homeCode.GDWEBBROWSERObjects1.length = 0;
gdjs.t_46homeCode.GDWEBBROWSERObjects2.length = 0;
gdjs.t_46homeCode.GDWEBBROWSERObjects3.length = 0;
gdjs.t_46homeCode.GDWEBBROWSERObjects4.length = 0;
gdjs.t_46homeCode.GDnonsidemenuariaObjects1.length = 0;
gdjs.t_46homeCode.GDnonsidemenuariaObjects2.length = 0;
gdjs.t_46homeCode.GDnonsidemenuariaObjects3.length = 0;
gdjs.t_46homeCode.GDnonsidemenuariaObjects4.length = 0;
gdjs.t_46homeCode.GDNewObject2Objects1.length = 0;
gdjs.t_46homeCode.GDNewObject2Objects2.length = 0;
gdjs.t_46homeCode.GDNewObject2Objects3.length = 0;
gdjs.t_46homeCode.GDNewObject2Objects4.length = 0;
gdjs.t_46homeCode.GDtimeObjects1.length = 0;
gdjs.t_46homeCode.GDtimeObjects2.length = 0;
gdjs.t_46homeCode.GDtimeObjects3.length = 0;
gdjs.t_46homeCode.GDtimeObjects4.length = 0;
gdjs.t_46homeCode.GDgotoappObjects1.length = 0;
gdjs.t_46homeCode.GDgotoappObjects2.length = 0;
gdjs.t_46homeCode.GDgotoappObjects3.length = 0;
gdjs.t_46homeCode.GDgotoappObjects4.length = 0;
gdjs.t_46homeCode.GDBasicSnowObjects1.length = 0;
gdjs.t_46homeCode.GDBasicSnowObjects2.length = 0;
gdjs.t_46homeCode.GDBasicSnowObjects3.length = 0;
gdjs.t_46homeCode.GDBasicSnowObjects4.length = 0;
gdjs.t_46homeCode.GDcustomappObjects1.length = 0;
gdjs.t_46homeCode.GDcustomappObjects2.length = 0;
gdjs.t_46homeCode.GDcustomappObjects3.length = 0;
gdjs.t_46homeCode.GDcustomappObjects4.length = 0;
gdjs.t_46homeCode.GDfadeotherappsObjects1.length = 0;
gdjs.t_46homeCode.GDfadeotherappsObjects2.length = 0;
gdjs.t_46homeCode.GDfadeotherappsObjects3.length = 0;
gdjs.t_46homeCode.GDfadeotherappsObjects4.length = 0;

gdjs.t_46homeCode.eventsList9(runtimeScene);
return;

}

gdjs['t_46homeCode'] = gdjs.t_46homeCode;
