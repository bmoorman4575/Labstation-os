gdjs.clockCode = {};
gdjs.clockCode.GDtimeObjects1= [];
gdjs.clockCode.GDtimeObjects2= [];
gdjs.clockCode.GDdateObjects1= [];
gdjs.clockCode.GDdateObjects2= [];
gdjs.clockCode.GDmonthObjects1= [];
gdjs.clockCode.GDmonthObjects2= [];
gdjs.clockCode.GDyearObjects1= [];
gdjs.clockCode.GDyearObjects2= [];
gdjs.clockCode.GDchannelObjects1= [];
gdjs.clockCode.GDchannelObjects2= [];
gdjs.clockCode.GDtutorialObjects1= [];
gdjs.clockCode.GDtutorialObjects2= [];

gdjs.clockCode.conditionTrue_0 = {val:false};
gdjs.clockCode.condition0IsTrue_0 = {val:false};
gdjs.clockCode.condition1IsTrue_0 = {val:false};
gdjs.clockCode.condition2IsTrue_0 = {val:false};
gdjs.clockCode.conditionTrue_1 = {val:false};
gdjs.clockCode.condition0IsTrue_1 = {val:false};
gdjs.clockCode.condition1IsTrue_1 = {val:false};
gdjs.clockCode.condition2IsTrue_1 = {val:false};


gdjs.clockCode.mapOfGDgdjs_46clockCode_46GDchannelObjects1Objects = Hashtable.newFrom({"channel": gdjs.clockCode.GDchannelObjects1});gdjs.clockCode.mapOfGDgdjs_46clockCode_46GDtutorialObjects1Objects = Hashtable.newFrom({"tutorial": gdjs.clockCode.GDtutorialObjects1});gdjs.clockCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("time"), gdjs.clockCode.GDtimeObjects1);
{for(var i = 0, len = gdjs.clockCode.GDtimeObjects1.length ;i < len;++i) {
    gdjs.clockCode.GDtimeObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.clockCode.GDtimeObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.clockCode.GDtimeObjects1.length ;i < len;++i) {
    gdjs.clockCode.GDtimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("time_var")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("channel"), gdjs.clockCode.GDchannelObjects1);

gdjs.clockCode.condition0IsTrue_0.val = false;
gdjs.clockCode.condition1IsTrue_0.val = false;
{
gdjs.clockCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.clockCode.mapOfGDgdjs_46clockCode_46GDchannelObjects1Objects, runtimeScene, true, false);
}if ( gdjs.clockCode.condition0IsTrue_0.val ) {
{
{gdjs.clockCode.conditionTrue_1 = gdjs.clockCode.condition1IsTrue_0;
gdjs.clockCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8105628);
}
}}
if (gdjs.clockCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCsZ4Ue8c94YLJDbGRafCI5Q", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tutorial"), gdjs.clockCode.GDtutorialObjects1);

gdjs.clockCode.condition0IsTrue_0.val = false;
gdjs.clockCode.condition1IsTrue_0.val = false;
{
gdjs.clockCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.clockCode.mapOfGDgdjs_46clockCode_46GDtutorialObjects1Objects, runtimeScene, true, false);
}if ( gdjs.clockCode.condition0IsTrue_0.val ) {
{
{gdjs.clockCode.conditionTrue_1 = gdjs.clockCode.condition1IsTrue_0;
gdjs.clockCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8106524);
}
}}
if (gdjs.clockCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=IXgUtdoAn3k", runtimeScene);
}}

}


};

gdjs.clockCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.clockCode.GDtimeObjects1.length = 0;
gdjs.clockCode.GDtimeObjects2.length = 0;
gdjs.clockCode.GDdateObjects1.length = 0;
gdjs.clockCode.GDdateObjects2.length = 0;
gdjs.clockCode.GDmonthObjects1.length = 0;
gdjs.clockCode.GDmonthObjects2.length = 0;
gdjs.clockCode.GDyearObjects1.length = 0;
gdjs.clockCode.GDyearObjects2.length = 0;
gdjs.clockCode.GDchannelObjects1.length = 0;
gdjs.clockCode.GDchannelObjects2.length = 0;
gdjs.clockCode.GDtutorialObjects1.length = 0;
gdjs.clockCode.GDtutorialObjects2.length = 0;

gdjs.clockCode.eventsList0(runtimeScene);
return;

}

gdjs['clockCode'] = gdjs.clockCode;
