gdjs.LOADUPCode = {};
gdjs.LOADUPCode.GDBTMObjects1= [];
gdjs.LOADUPCode.GDBTMObjects2= [];
gdjs.LOADUPCode.GDBTMObjects3= [];
gdjs.LOADUPCode.GDloadingObjects1= [];
gdjs.LOADUPCode.GDloadingObjects2= [];
gdjs.LOADUPCode.GDloadingObjects3= [];
gdjs.LOADUPCode.GDloadingtestObjects1= [];
gdjs.LOADUPCode.GDloadingtestObjects2= [];
gdjs.LOADUPCode.GDloadingtestObjects3= [];
gdjs.LOADUPCode.GDbackroundObjects1= [];
gdjs.LOADUPCode.GDbackroundObjects2= [];
gdjs.LOADUPCode.GDbackroundObjects3= [];
gdjs.LOADUPCode.GDnowsafunplugObjects1= [];
gdjs.LOADUPCode.GDnowsafunplugObjects2= [];
gdjs.LOADUPCode.GDnowsafunplugObjects3= [];
gdjs.LOADUPCode.GDprestoplayObjects1= [];
gdjs.LOADUPCode.GDprestoplayObjects2= [];
gdjs.LOADUPCode.GDprestoplayObjects3= [];
gdjs.LOADUPCode.GDdebugmodeboxObjects1= [];
gdjs.LOADUPCode.GDdebugmodeboxObjects2= [];
gdjs.LOADUPCode.GDdebugmodeboxObjects3= [];
gdjs.LOADUPCode.GDsystemdebugmodeObjects1= [];
gdjs.LOADUPCode.GDsystemdebugmodeObjects2= [];
gdjs.LOADUPCode.GDsystemdebugmodeObjects3= [];
gdjs.LOADUPCode.GDdebugmodesymbalObjects1= [];
gdjs.LOADUPCode.GDdebugmodesymbalObjects2= [];
gdjs.LOADUPCode.GDdebugmodesymbalObjects3= [];
gdjs.LOADUPCode.GDrtrObjects1= [];
gdjs.LOADUPCode.GDrtrObjects2= [];
gdjs.LOADUPCode.GDrtrObjects3= [];
gdjs.LOADUPCode.GDspritesObjects1= [];
gdjs.LOADUPCode.GDspritesObjects2= [];
gdjs.LOADUPCode.GDspritesObjects3= [];

gdjs.LOADUPCode.conditionTrue_0 = {val:false};
gdjs.LOADUPCode.condition0IsTrue_0 = {val:false};
gdjs.LOADUPCode.condition1IsTrue_0 = {val:false};
gdjs.LOADUPCode.condition2IsTrue_0 = {val:false};
gdjs.LOADUPCode.condition3IsTrue_0 = {val:false};
gdjs.LOADUPCode.condition4IsTrue_0 = {val:false};
gdjs.LOADUPCode.condition5IsTrue_0 = {val:false};
gdjs.LOADUPCode.conditionTrue_1 = {val:false};
gdjs.LOADUPCode.condition0IsTrue_1 = {val:false};
gdjs.LOADUPCode.condition1IsTrue_1 = {val:false};
gdjs.LOADUPCode.condition2IsTrue_1 = {val:false};
gdjs.LOADUPCode.condition3IsTrue_1 = {val:false};
gdjs.LOADUPCode.condition4IsTrue_1 = {val:false};
gdjs.LOADUPCode.condition5IsTrue_1 = {val:false};


gdjs.LOADUPCode.eventsList0 = function(runtimeScene) {

{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LOADUPCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BTM"), gdjs.LOADUPCode.GDBTMObjects2);
gdjs.copyArray(runtimeScene.getObjects("backround"), gdjs.LOADUPCode.GDbackroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("debugmodebox"), gdjs.LOADUPCode.GDdebugmodeboxObjects2);
gdjs.copyArray(runtimeScene.getObjects("debugmodesymbal"), gdjs.LOADUPCode.GDdebugmodesymbalObjects2);
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.LOADUPCode.GDloadingObjects2);
gdjs.copyArray(runtimeScene.getObjects("loadingtest"), gdjs.LOADUPCode.GDloadingtestObjects2);
gdjs.copyArray(runtimeScene.getObjects("nowsafunplug"), gdjs.LOADUPCode.GDnowsafunplugObjects2);
gdjs.copyArray(runtimeScene.getObjects("prestoplay"), gdjs.LOADUPCode.GDprestoplayObjects2);
gdjs.copyArray(runtimeScene.getObjects("rtr"), gdjs.LOADUPCode.GDrtrObjects2);
gdjs.copyArray(runtimeScene.getObjects("sprites"), gdjs.LOADUPCode.GDspritesObjects2);
gdjs.copyArray(runtimeScene.getObjects("systemdebugmode"), gdjs.LOADUPCode.GDsystemdebugmodeObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loading");
}{for(var i = 0, len = gdjs.LOADUPCode.GDloadingObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDloadingObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDloadingtestObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDloadingtestObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDbackroundObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDbackroundObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDnowsafunplugObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDnowsafunplugObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDprestoplayObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDprestoplayObjects2[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "transition");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "transition");
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.LOADUPCode.GDdebugmodeboxObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDdebugmodeboxObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDsystemdebugmodeObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDsystemdebugmodeObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDdebugmodesymbalObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDdebugmodesymbalObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDrtrObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDrtrObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDBTMObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDBTMObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDspritesObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDspritesObjects2[i].pauseAnimation();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "lights");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "lights");
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
gdjs.LOADUPCode.condition1IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.LOADUPCode.condition0IsTrue_0.val ) {
{
gdjs.LOADUPCode.condition1IsTrue_0.val = !(gdjs.evtTools.systemInfo.isPreview(runtimeScene));
}}
if (gdjs.LOADUPCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
gdjs.LOADUPCode.condition1IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "loading");
}if ( gdjs.LOADUPCode.condition0IsTrue_0.val ) {
{
{gdjs.LOADUPCode.conditionTrue_1 = gdjs.LOADUPCode.condition1IsTrue_0;
gdjs.LOADUPCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8006132);
}
}}
if (gdjs.LOADUPCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "loading");
}if (gdjs.LOADUPCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.LOADUPCode.GDloadingObjects2);
{for(var i = 0, len = gdjs.LOADUPCode.GDloadingObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDloadingObjects2[i].rotate(70, runtimeScene);
}
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.LOADUPCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.LOADUPCode.GDloadingObjects2);
{for(var i = 0, len = gdjs.LOADUPCode.GDloadingObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDloadingObjects2[i].setOpacity(gdjs.LOADUPCode.GDloadingObjects2[i].getOpacity() + (20));
}
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.LOADUPCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("loadingtest"), gdjs.LOADUPCode.GDloadingtestObjects2);
{for(var i = 0, len = gdjs.LOADUPCode.GDloadingtestObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDloadingtestObjects2[i].setOpacity(gdjs.LOADUPCode.GDloadingtestObjects2[i].getOpacity() + (20));
}
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
gdjs.LOADUPCode.condition1IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.01, "loading");
}if ( gdjs.LOADUPCode.condition0IsTrue_0.val ) {
{
{gdjs.LOADUPCode.conditionTrue_1 = gdjs.LOADUPCode.condition1IsTrue_0;
gdjs.LOADUPCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8008964);
}
}}
if (gdjs.LOADUPCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("loadingtest"), gdjs.LOADUPCode.GDloadingtestObjects2);
{for(var i = 0, len = gdjs.LOADUPCode.GDloadingtestObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDloadingtestObjects2[i].setString("loading . . .");
}
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
gdjs.LOADUPCode.condition1IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6.5, "loading");
}if ( gdjs.LOADUPCode.condition0IsTrue_0.val ) {
{
{gdjs.LOADUPCode.conditionTrue_1 = gdjs.LOADUPCode.condition1IsTrue_0;
gdjs.LOADUPCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8010980);
}
}}
if (gdjs.LOADUPCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("loadingtest"), gdjs.LOADUPCode.GDloadingtestObjects2);
gdjs.copyArray(runtimeScene.getObjects("sprites"), gdjs.LOADUPCode.GDspritesObjects2);
{for(var i = 0, len = gdjs.LOADUPCode.GDloadingtestObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDloadingtestObjects2[i].setString("loading . . .<sprites>");
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDspritesObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDspritesObjects2[i].playAnimation();
}
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
gdjs.LOADUPCode.condition1IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 8, "loading");
}if ( gdjs.LOADUPCode.condition0IsTrue_0.val ) {
{
{gdjs.LOADUPCode.conditionTrue_1 = gdjs.LOADUPCode.condition1IsTrue_0;
gdjs.LOADUPCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8012772);
}
}}
if (gdjs.LOADUPCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("loadingtest"), gdjs.LOADUPCode.GDloadingtestObjects2);
gdjs.copyArray(runtimeScene.getObjects("sprites"), gdjs.LOADUPCode.GDspritesObjects2);
{for(var i = 0, len = gdjs.LOADUPCode.GDloadingtestObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDloadingtestObjects2[i].setString("loading . . .<sounds>");
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDspritesObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDspritesObjects2[i].pauseAnimation();
}
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
gdjs.LOADUPCode.condition1IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10.5, "loading");
}if ( gdjs.LOADUPCode.condition0IsTrue_0.val ) {
{
{gdjs.LOADUPCode.conditionTrue_1 = gdjs.LOADUPCode.condition1IsTrue_0;
gdjs.LOADUPCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8008380);
}
}}
if (gdjs.LOADUPCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("loadingtest"), gdjs.LOADUPCode.GDloadingtestObjects2);
{for(var i = 0, len = gdjs.LOADUPCode.GDloadingtestObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDloadingtestObjects2[i].setString("DONE!");
}
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11.4, "loading");
}if (gdjs.LOADUPCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BTM"), gdjs.LOADUPCode.GDBTMObjects2);
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.LOADUPCode.GDloadingObjects2);
gdjs.copyArray(runtimeScene.getObjects("loadingtest"), gdjs.LOADUPCode.GDloadingtestObjects2);
{for(var i = 0, len = gdjs.LOADUPCode.GDBTMObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDBTMObjects2[i].setOpacity(gdjs.LOADUPCode.GDBTMObjects2[i].getOpacity() - (10));
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDloadingObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDloadingObjects2[i].setOpacity(gdjs.LOADUPCode.GDloadingObjects2[i].getOpacity() - (10));
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDloadingtestObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDloadingtestObjects2[i].setOpacity(gdjs.LOADUPCode.GDloadingtestObjects2[i].getOpacity() - (10));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "lights");
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
gdjs.LOADUPCode.condition1IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11.4, "loading");
}if ( gdjs.LOADUPCode.condition0IsTrue_0.val ) {
{
gdjs.LOADUPCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.LOADUPCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("backround"), gdjs.LOADUPCode.GDbackroundObjects2);
{for(var i = 0, len = gdjs.LOADUPCode.GDbackroundObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDbackroundObjects2[i].setOpacity(gdjs.LOADUPCode.GDbackroundObjects2[i].getOpacity() + (10));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "lights");
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11.9, "loading");
}if (gdjs.LOADUPCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nowsafunplug"), gdjs.LOADUPCode.GDnowsafunplugObjects2);
{for(var i = 0, len = gdjs.LOADUPCode.GDnowsafunplugObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDnowsafunplugObjects2[i].setOpacity(gdjs.LOADUPCode.GDnowsafunplugObjects2[i].getOpacity() + (3));
}
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 12.5, "loading");
}if (gdjs.LOADUPCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("prestoplay"), gdjs.LOADUPCode.GDprestoplayObjects2);
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.LOADUPCode.GDprestoplayObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDprestoplayObjects2[i].setOpacity(gdjs.LOADUPCode.GDprestoplayObjects2[i].getOpacity() + (3));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
gdjs.LOADUPCode.condition1IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.LOADUPCode.condition0IsTrue_0.val ) {
{
gdjs.LOADUPCode.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}}
if (gdjs.LOADUPCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("backround"), gdjs.LOADUPCode.GDbackroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("nowsafunplug"), gdjs.LOADUPCode.GDnowsafunplugObjects2);
gdjs.copyArray(runtimeScene.getObjects("prestoplay"), gdjs.LOADUPCode.GDprestoplayObjects2);
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "transition");
}{for(var i = 0, len = gdjs.LOADUPCode.GDbackroundObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDbackroundObjects2[i].setOpacity(gdjs.LOADUPCode.GDbackroundObjects2[i].getOpacity() - (7));
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDnowsafunplugObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDnowsafunplugObjects2[i].setOpacity(gdjs.LOADUPCode.GDnowsafunplugObjects2[i].getOpacity() - (6));
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDprestoplayObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDprestoplayObjects2[i].setOpacity(gdjs.LOADUPCode.GDprestoplayObjects2[i].getOpacity() - (6));
}
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.00001, "transition");
}if (gdjs.LOADUPCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("backround"), gdjs.LOADUPCode.GDbackroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("nowsafunplug"), gdjs.LOADUPCode.GDnowsafunplugObjects2);
gdjs.copyArray(runtimeScene.getObjects("prestoplay"), gdjs.LOADUPCode.GDprestoplayObjects2);
{for(var i = 0, len = gdjs.LOADUPCode.GDprestoplayObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDprestoplayObjects2[i].setOpacity(gdjs.LOADUPCode.GDprestoplayObjects2[i].getOpacity() - (6));
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDnowsafunplugObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDnowsafunplugObjects2[i].setOpacity(gdjs.LOADUPCode.GDnowsafunplugObjects2[i].getOpacity() - (6));
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDbackroundObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDbackroundObjects2[i].setOpacity(gdjs.LOADUPCode.GDbackroundObjects2[i].getOpacity() - (7));
}
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "transition");
}if (gdjs.LOADUPCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "transition");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "t.home", true);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "lights");
}}

}


};gdjs.LOADUPCode.eventsList1 = function(runtimeScene) {

{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
gdjs.LOADUPCode.condition1IsTrue_0.val = false;
gdjs.LOADUPCode.condition2IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.LOADUPCode.condition0IsTrue_0.val ) {
{
gdjs.LOADUPCode.condition1IsTrue_0.val = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
}if ( gdjs.LOADUPCode.condition1IsTrue_0.val ) {
{
gdjs.LOADUPCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableString(gdjs.VariablesContainer.badVariable) == "false";
}}
}
if (gdjs.LOADUPCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("false");
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
gdjs.LOADUPCode.condition1IsTrue_0.val = false;
gdjs.LOADUPCode.condition2IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.LOADUPCode.condition0IsTrue_0.val ) {
{
gdjs.LOADUPCode.condition1IsTrue_0.val = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
}if ( gdjs.LOADUPCode.condition1IsTrue_0.val ) {
{
gdjs.LOADUPCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableString(gdjs.VariablesContainer.badVariable) == "true";
}}
}
if (gdjs.LOADUPCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("true");
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "true";
}if (gdjs.LOADUPCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("debugmodebox"), gdjs.LOADUPCode.GDdebugmodeboxObjects2);
gdjs.copyArray(runtimeScene.getObjects("debugmodesymbal"), gdjs.LOADUPCode.GDdebugmodesymbalObjects2);
gdjs.copyArray(runtimeScene.getObjects("rtr"), gdjs.LOADUPCode.GDrtrObjects2);
gdjs.copyArray(runtimeScene.getObjects("systemdebugmode"), gdjs.LOADUPCode.GDsystemdebugmodeObjects2);
{for(var i = 0, len = gdjs.LOADUPCode.GDdebugmodeboxObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDdebugmodeboxObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDsystemdebugmodeObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDsystemdebugmodeObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDdebugmodesymbalObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDdebugmodesymbalObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.LOADUPCode.GDrtrObjects2.length ;i < len;++i) {
    gdjs.LOADUPCode.GDrtrObjects2[i].hide(false);
}
}}

}


{


gdjs.LOADUPCode.condition0IsTrue_0.val = false;
gdjs.LOADUPCode.condition1IsTrue_0.val = false;
gdjs.LOADUPCode.condition2IsTrue_0.val = false;
gdjs.LOADUPCode.condition3IsTrue_0.val = false;
gdjs.LOADUPCode.condition4IsTrue_0.val = false;
{
gdjs.LOADUPCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
}if ( gdjs.LOADUPCode.condition0IsTrue_0.val ) {
{
gdjs.LOADUPCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}if ( gdjs.LOADUPCode.condition1IsTrue_0.val ) {
{
gdjs.LOADUPCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.LOADUPCode.condition2IsTrue_0.val ) {
{
gdjs.LOADUPCode.condition3IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs.LOADUPCode.condition3IsTrue_0.val ) {
{
gdjs.LOADUPCode.condition4IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}}
}
}
}
if (gdjs.LOADUPCode.condition4IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("true");
}}

}


};gdjs.LOADUPCode.eventsList2 = function(runtimeScene) {

{


{
}

}


};gdjs.LOADUPCode.eventsList3 = function(runtimeScene) {

{


gdjs.LOADUPCode.eventsList0(runtimeScene);
}


{


gdjs.LOADUPCode.eventsList1(runtimeScene);
}


{


gdjs.LOADUPCode.eventsList2(runtimeScene);
}


};

gdjs.LOADUPCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LOADUPCode.GDBTMObjects1.length = 0;
gdjs.LOADUPCode.GDBTMObjects2.length = 0;
gdjs.LOADUPCode.GDBTMObjects3.length = 0;
gdjs.LOADUPCode.GDloadingObjects1.length = 0;
gdjs.LOADUPCode.GDloadingObjects2.length = 0;
gdjs.LOADUPCode.GDloadingObjects3.length = 0;
gdjs.LOADUPCode.GDloadingtestObjects1.length = 0;
gdjs.LOADUPCode.GDloadingtestObjects2.length = 0;
gdjs.LOADUPCode.GDloadingtestObjects3.length = 0;
gdjs.LOADUPCode.GDbackroundObjects1.length = 0;
gdjs.LOADUPCode.GDbackroundObjects2.length = 0;
gdjs.LOADUPCode.GDbackroundObjects3.length = 0;
gdjs.LOADUPCode.GDnowsafunplugObjects1.length = 0;
gdjs.LOADUPCode.GDnowsafunplugObjects2.length = 0;
gdjs.LOADUPCode.GDnowsafunplugObjects3.length = 0;
gdjs.LOADUPCode.GDprestoplayObjects1.length = 0;
gdjs.LOADUPCode.GDprestoplayObjects2.length = 0;
gdjs.LOADUPCode.GDprestoplayObjects3.length = 0;
gdjs.LOADUPCode.GDdebugmodeboxObjects1.length = 0;
gdjs.LOADUPCode.GDdebugmodeboxObjects2.length = 0;
gdjs.LOADUPCode.GDdebugmodeboxObjects3.length = 0;
gdjs.LOADUPCode.GDsystemdebugmodeObjects1.length = 0;
gdjs.LOADUPCode.GDsystemdebugmodeObjects2.length = 0;
gdjs.LOADUPCode.GDsystemdebugmodeObjects3.length = 0;
gdjs.LOADUPCode.GDdebugmodesymbalObjects1.length = 0;
gdjs.LOADUPCode.GDdebugmodesymbalObjects2.length = 0;
gdjs.LOADUPCode.GDdebugmodesymbalObjects3.length = 0;
gdjs.LOADUPCode.GDrtrObjects1.length = 0;
gdjs.LOADUPCode.GDrtrObjects2.length = 0;
gdjs.LOADUPCode.GDrtrObjects3.length = 0;
gdjs.LOADUPCode.GDspritesObjects1.length = 0;
gdjs.LOADUPCode.GDspritesObjects2.length = 0;
gdjs.LOADUPCode.GDspritesObjects3.length = 0;

gdjs.LOADUPCode.eventsList3(runtimeScene);
return;

}

gdjs['LOADUPCode'] = gdjs.LOADUPCode;
