gdjs.settingsCode = {};
gdjs.settingsCode.GDnotdoneyetObjects1= [];
gdjs.settingsCode.GDnotdoneyetObjects2= [];
gdjs.settingsCode.GDbacktomenuObjects1= [];
gdjs.settingsCode.GDbacktomenuObjects2= [];

gdjs.settingsCode.conditionTrue_0 = {val:false};
gdjs.settingsCode.condition0IsTrue_0 = {val:false};
gdjs.settingsCode.condition1IsTrue_0 = {val:false};
gdjs.settingsCode.condition2IsTrue_0 = {val:false};


gdjs.settingsCode.mapOfGDgdjs_46settingsCode_46GDbacktomenuObjects1Objects = Hashtable.newFrom({"backtomenu": gdjs.settingsCode.GDbacktomenuObjects1});gdjs.settingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("backtomenu"), gdjs.settingsCode.GDbacktomenuObjects1);

gdjs.settingsCode.condition0IsTrue_0.val = false;
gdjs.settingsCode.condition1IsTrue_0.val = false;
{
gdjs.settingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.settingsCode.mapOfGDgdjs_46settingsCode_46GDbacktomenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.settingsCode.condition0IsTrue_0.val ) {
{
gdjs.settingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.settingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "t.home", false);
}}

}


};

gdjs.settingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.settingsCode.GDnotdoneyetObjects1.length = 0;
gdjs.settingsCode.GDnotdoneyetObjects2.length = 0;
gdjs.settingsCode.GDbacktomenuObjects1.length = 0;
gdjs.settingsCode.GDbacktomenuObjects2.length = 0;

gdjs.settingsCode.eventsList0(runtimeScene);
return;

}

gdjs['settingsCode'] = gdjs.settingsCode;
