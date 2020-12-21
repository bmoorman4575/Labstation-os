gdjs.t_46homeCode = {};
gdjs.t_46homeCode.GDfadeObjects1= [];
gdjs.t_46homeCode.GDfadeObjects2= [];
gdjs.t_46homeCode.GDfadeObjects3= [];
gdjs.t_46homeCode.GDfadeObjects4= [];
gdjs.t_46homeCode.GDdotsObjects1= [];
gdjs.t_46homeCode.GDdotsObjects2= [];
gdjs.t_46homeCode.GDdotsObjects3= [];
gdjs.t_46homeCode.GDdotsObjects4= [];
gdjs.t_46homeCode.GDNewObjectObjects1= [];
gdjs.t_46homeCode.GDNewObjectObjects2= [];
gdjs.t_46homeCode.GDNewObjectObjects3= [];
gdjs.t_46homeCode.GDNewObjectObjects4= [];
gdjs.t_46homeCode.GDgreyObjects1= [];
gdjs.t_46homeCode.GDgreyObjects2= [];
gdjs.t_46homeCode.GDgreyObjects3= [];
gdjs.t_46homeCode.GDgreyObjects4= [];
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

gdjs.t_46homeCode.conditionTrue_0 = {val:false};
gdjs.t_46homeCode.condition0IsTrue_0 = {val:false};
gdjs.t_46homeCode.condition1IsTrue_0 = {val:false};
gdjs.t_46homeCode.condition2IsTrue_0 = {val:false};
gdjs.t_46homeCode.condition3IsTrue_0 = {val:false};


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
gdjs.copyArray(runtimeScene.getObjects("WEBBROWSER"), gdjs.t_46homeCode.GDWEBBROWSERObjects2);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.t_46homeCode.GDfadeObjects2);
gdjs.copyArray(runtimeScene.getObjects("grey"), gdjs.t_46homeCode.GDgreyObjects2);
gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.t_46homeCode.GDsettingsObjects2);
{for(var i = 0, len = gdjs.t_46homeCode.GDfadeObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadeObjects2[i].setPosition(-(27),-(31));
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDfadeObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDfadeObjects2[i].setOpacity(gdjs.t_46homeCode.GDfadeObjects2[i].getOpacity() - (6));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fadein");
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.t_46homeCode.GDgreyObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDgreyObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects2[i].setOpacity(0);
}
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
gdjs.copyArray(runtimeScene.getObjects("WEBBROWSER"), gdjs.t_46homeCode.GDWEBBROWSERObjects2);
gdjs.copyArray(runtimeScene.getObjects("grey"), gdjs.t_46homeCode.GDgreyObjects2);
gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.t_46homeCode.GDsettingsObjects2);
{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDgreyObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDgreyObjects2[i].setOpacity(0);
}
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


};gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDdotsObjects3Objects = Hashtable.newFrom({"dots": gdjs.t_46homeCode.GDdotsObjects3});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDdotsObjects3Objects = Hashtable.newFrom({"dots": gdjs.t_46homeCode.GDdotsObjects3});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDdotsObjects3Objects = Hashtable.newFrom({"dots": gdjs.t_46homeCode.GDdotsObjects3});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDdotsObjects2Objects = Hashtable.newFrom({"dots": gdjs.t_46homeCode.GDdotsObjects2});gdjs.t_46homeCode.eventsList1 = function(runtimeScene) {

{


gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WEBBROWSER"), gdjs.t_46homeCode.GDWEBBROWSERObjects3);
gdjs.copyArray(runtimeScene.getObjects("grey"), gdjs.t_46homeCode.GDgreyObjects3);
gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.t_46homeCode.GDsettingsObjects3);
{for(var i = 0, len = gdjs.t_46homeCode.GDgreyObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDgreyObjects3[i].setOpacity(gdjs.t_46homeCode.GDgreyObjects3[i].getOpacity() - (10));
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects3[i].setOpacity(gdjs.t_46homeCode.GDsettingsObjects3[i].getOpacity() - (10));
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects3[i].setOpacity(gdjs.t_46homeCode.GDWEBBROWSERObjects3[i].getOpacity() - (10));
}
}}

}


{


gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WEBBROWSER"), gdjs.t_46homeCode.GDWEBBROWSERObjects3);
gdjs.copyArray(runtimeScene.getObjects("grey"), gdjs.t_46homeCode.GDgreyObjects3);
gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.t_46homeCode.GDsettingsObjects3);
{for(var i = 0, len = gdjs.t_46homeCode.GDgreyObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDgreyObjects3[i].setOpacity(gdjs.t_46homeCode.GDgreyObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects3[i].setOpacity(gdjs.t_46homeCode.GDsettingsObjects3[i].getOpacity() + (5));
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects3[i].setOpacity(gdjs.t_46homeCode.GDWEBBROWSERObjects3[i].getOpacity() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dots"), gdjs.t_46homeCode.GDdotsObjects3);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
gdjs.t_46homeCode.condition1IsTrue_0.val = false;
gdjs.t_46homeCode.condition2IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDdotsObjects3Objects, runtimeScene, true, false);
}if ( gdjs.t_46homeCode.condition0IsTrue_0.val ) {
{
gdjs.t_46homeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.t_46homeCode.condition1IsTrue_0.val ) {
{
gdjs.t_46homeCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
}
if (gdjs.t_46homeCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dots"), gdjs.t_46homeCode.GDdotsObjects3);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
gdjs.t_46homeCode.condition1IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDdotsObjects3Objects, runtimeScene, true, false);
}if ( gdjs.t_46homeCode.condition0IsTrue_0.val ) {
{
gdjs.t_46homeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.t_46homeCode.condition1IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dots"), gdjs.t_46homeCode.GDdotsObjects3);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDdotsObjects3Objects, runtimeScene, true, false);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.t_46homeCode.GDdotsObjects3 */
{for(var i = 0, len = gdjs.t_46homeCode.GDdotsObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDdotsObjects3[i].setOpacity(122);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dots"), gdjs.t_46homeCode.GDdotsObjects2);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDdotsObjects2Objects, runtimeScene, true, true);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.t_46homeCode.GDdotsObjects2 */
{for(var i = 0, len = gdjs.t_46homeCode.GDdotsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDdotsObjects2[i].setOpacity(255);
}
}}

}


};gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDsettingsObjects3Objects = Hashtable.newFrom({"settings": gdjs.t_46homeCode.GDsettingsObjects3});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDsettingsObjects3Objects = Hashtable.newFrom({"settings": gdjs.t_46homeCode.GDsettingsObjects3});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDsettingsObjects2Objects = Hashtable.newFrom({"settings": gdjs.t_46homeCode.GDsettingsObjects2});gdjs.t_46homeCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.t_46homeCode.GDsettingsObjects3);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDsettingsObjects3Objects, runtimeScene, true, false);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.t_46homeCode.GDsettingsObjects3 */
{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects3[i].setColor("0;237;255");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects3[i].setOutline("0;200;253", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.t_46homeCode.GDsettingsObjects3);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDsettingsObjects3Objects, runtimeScene, true, true);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.t_46homeCode.GDsettingsObjects3 */
{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects3[i].setColor("0;143;162");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects3.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects3[i].setOutline("0;200;253", 0);
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
/* Reuse gdjs.t_46homeCode.GDsettingsObjects2 */
{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects2[i].setColor("27;239;255");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDsettingsObjects2[i].setOutline("124;227;255", 5);
}
}}

}


};gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDWEBBROWSERObjects2Objects = Hashtable.newFrom({"WEBBROWSER": gdjs.t_46homeCode.GDWEBBROWSERObjects2});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDWEBBROWSERObjects2Objects = Hashtable.newFrom({"WEBBROWSER": gdjs.t_46homeCode.GDWEBBROWSERObjects2});gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDWEBBROWSERObjects1Objects = Hashtable.newFrom({"WEBBROWSER": gdjs.t_46homeCode.GDWEBBROWSERObjects1});gdjs.t_46homeCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WEBBROWSER"), gdjs.t_46homeCode.GDWEBBROWSERObjects2);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDWEBBROWSERObjects2Objects, runtimeScene, true, false);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.t_46homeCode.GDWEBBROWSERObjects2 */
{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects2[i].setColor("0;237;255");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects2[i].setOutline("0;200;253", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WEBBROWSER"), gdjs.t_46homeCode.GDWEBBROWSERObjects2);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDWEBBROWSERObjects2Objects, runtimeScene, true, true);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.t_46homeCode.GDWEBBROWSERObjects2 */
{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects2[i].setColor("0;143;162");
}
}{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects2.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects2[i].setOutline("0;200;253", 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WEBBROWSER"), gdjs.t_46homeCode.GDWEBBROWSERObjects1);

gdjs.t_46homeCode.condition0IsTrue_0.val = false;
gdjs.t_46homeCode.condition1IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.t_46homeCode.mapOfGDgdjs_46t_9546homeCode_46GDWEBBROWSERObjects1Objects, runtimeScene, true, false);
}if ( gdjs.t_46homeCode.condition0IsTrue_0.val ) {
{
gdjs.t_46homeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.t_46homeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.t_46homeCode.GDWEBBROWSERObjects1 */
{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects1.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects1[i].setColor("27;239;255");
}
}{gdjs.evtTools.window.openURL("https://www.google.com", runtimeScene);
}{for(var i = 0, len = gdjs.t_46homeCode.GDWEBBROWSERObjects1.length ;i < len;++i) {
    gdjs.t_46homeCode.GDWEBBROWSERObjects1[i].setOutline("124;227;255", 5);
}
}}

}


};gdjs.t_46homeCode.eventsList4 = function(runtimeScene) {

{


gdjs.t_46homeCode.eventsList1(runtimeScene);
}


{


gdjs.t_46homeCode.eventsList2(runtimeScene);
}


{


gdjs.t_46homeCode.eventsList3(runtimeScene);
}


};gdjs.t_46homeCode.eventsList5 = function(runtimeScene) {

{


gdjs.t_46homeCode.eventsList0(runtimeScene);
}


{


gdjs.t_46homeCode.eventsList4(runtimeScene);
}


{


gdjs.t_46homeCode.condition0IsTrue_0.val = false;
{
gdjs.t_46homeCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.t_46homeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.t_46homeCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.t_46homeCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.t_46homeCode.GDNewObject2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("sidemenuopen")));
}
}}

}


};

gdjs.t_46homeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.t_46homeCode.GDfadeObjects1.length = 0;
gdjs.t_46homeCode.GDfadeObjects2.length = 0;
gdjs.t_46homeCode.GDfadeObjects3.length = 0;
gdjs.t_46homeCode.GDfadeObjects4.length = 0;
gdjs.t_46homeCode.GDdotsObjects1.length = 0;
gdjs.t_46homeCode.GDdotsObjects2.length = 0;
gdjs.t_46homeCode.GDdotsObjects3.length = 0;
gdjs.t_46homeCode.GDdotsObjects4.length = 0;
gdjs.t_46homeCode.GDNewObjectObjects1.length = 0;
gdjs.t_46homeCode.GDNewObjectObjects2.length = 0;
gdjs.t_46homeCode.GDNewObjectObjects3.length = 0;
gdjs.t_46homeCode.GDNewObjectObjects4.length = 0;
gdjs.t_46homeCode.GDgreyObjects1.length = 0;
gdjs.t_46homeCode.GDgreyObjects2.length = 0;
gdjs.t_46homeCode.GDgreyObjects3.length = 0;
gdjs.t_46homeCode.GDgreyObjects4.length = 0;
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

gdjs.t_46homeCode.eventsList5(runtimeScene);
return;

}

gdjs['t_46homeCode'] = gdjs.t_46homeCode;
