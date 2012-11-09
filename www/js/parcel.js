(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.PassTheParcel_AllAnimations = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{first_frame:0,1:1,2:2,3:3,4:4},true);

	// loserSecondChance
	this.instance = new lib.loserSecondChance();
	this.instance.setTransform(403.5,493.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// WinnerRed
	this.instance_1 = new lib.WinnerRed();
	this.instance_1.setTransform(403.5,493.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// Loser
	this.instance_2 = new lib.Loser();
	this.instance_2.setTransform(403.5,493.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// Winner
	this.instance_3 = new lib.Winner();
	this.instance_3.setTransform(403.5,493.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	this.gotoAndStop(2);
	

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.box1_closed = function() {
	this.initialize(img.box1_closed);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,125);


(lib.box1_red_closed = function() {
	this.initialize(img.box1_red_closed);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,125);


(lib.box1_red = function() {
	this.initialize(img.box1_red);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,125);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,125);


(lib.box2_red = function() {
	this.initialize(img.box2_red);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,125);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,125);


(lib.pattern_2 = function() {
	this.initialize(img.pattern_2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern_shadow = function() {
	this.initialize(img.pattern_shadow);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern = function() {
	this.initialize(img.pattern);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.texture_inside = function() {
	this.initialize(img.texture_inside);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern2_2 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],0,-144.7,0,144.9).s().p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	this.shape.setTransform(150,75);

	// Layer 2
	this.instance = new lib.texture_inside();

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern2_1 = function() {
	this.initialize();

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],0,-144.7,0,144.9).s().p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	this.shape_1.setTransform(150,75);

	// Layer 1
	this.instance_1 = new lib.pattern();

	this.addChild(this.instance_1,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern1_2 = function() {
	this.initialize();

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0.216,1],0,-75.1,0,75.3).s().p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	this.shape_2.setTransform(150,75);

	// Layer 2
	this.instance_2 = new lib.texture_inside();

	this.addChild(this.instance_2,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern1_1 = function() {
	this.initialize();

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	mask.setTransform(150,75);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0.216,1],0,-79,0,79.2).s().p("AYqsUIAAYpMgxTAAAIAA4pMAxTAAA").cp();
	this.shape_3.setTransform(146.5,73.3);

	this.shape_3.mask = mask;
	// Layer 1
	this.instance_3 = new lib.pattern();
	this.instance_3.setTransform(-11.2,-5.6,1.052,1.052);

	this.instance_3.mask = mask;
	this.addChild(this.instance_3,this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.2,-5.6,315.7,157.9);


(lib.pattern_shadow_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_4 = new lib.pattern_shadow();

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.light_box = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(244,231,212,0.902)","rgba(244,231,212,0)"],[0.027,1],0,0,0,0,0,218.8).s().p("EAiggifMAAABE/MhE/AAAMAAAhE/MBE/AAA").cp();
	this.shape_4.setTransform(269.7,40.3);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(48.9,-180.5,441.7,441.7);


(lib.box = function() {
	this.initialize();

	// Layer 1
	this.instance_5 = new lib.box1();

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,332,125);


(lib.pattern2_2_1 = function() {
	this.initialize();

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],0,-144.7,0,144.9).s().p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	this.shape_5.setTransform(150,75);

	// Layer 2
	this.instance_6 = new lib.texture_inside();

	this.addChild(this.instance_6,this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern2_1_1 = function() {
	this.initialize();

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],0,-144.7,0,144.9).s().p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	this.shape_6.setTransform(150,75);

	// Layer 1
	this.instance_7 = new lib.pattern_2();

	this.addChild(this.instance_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern1_2_1 = function() {
	this.initialize();

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0.216,1],0,-75.1,0,75.3).s().p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	this.shape_7.setTransform(150,75);

	// Layer 2
	this.instance_8 = new lib.texture_inside();

	this.addChild(this.instance_8,this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern1_1_1 = function() {
	this.initialize();

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	mask_1.setTransform(150,75);

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0.216,1],0,-79,0,79.2).s().p("AYqsUIAAYpMgxTAAAIAA4pMAxTAAA").cp();
	this.shape_8.setTransform(146.5,73.3);

	this.shape_8.mask = mask_1;
	// Layer 1
	this.instance_9 = new lib.pattern_2();

	this.instance_9.mask = mask_1;
	this.addChild(this.instance_9,this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.2,-5.6,315.7,157.9);


(lib.pattern_shadow_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_10 = new lib.pattern_shadow();

	this.addChild(this.instance_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.light_box_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(244,231,212,0.902)","rgba(244,231,212,0)"],[0.027,1],0,0,0,0,0,218.8).s().p("EAiggifMAAABE/MhE/AAAMAAAhE/MBE/AAA").cp();
	this.shape_9.setTransform(269.7,40.3);

	this.addChild(this.shape_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(48.9,-180.5,441.7,441.7);


(lib.box_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_11 = new lib.box1_red();

	this.addChild(this.instance_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,332,125);


(lib.pattern2_2_2 = function() {
	this.initialize();

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],0,-144.7,0,144.9).s().p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	this.shape_10.setTransform(150,75);

	// Layer 2
	this.instance_12 = new lib.texture_inside();

	this.addChild(this.instance_12,this.shape_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern2_1_2 = function() {
	this.initialize();

	// Layer 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],0,-144.7,0,144.9).s().p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	this.shape_11.setTransform(150,75);

	// Layer 1
	this.instance_13 = new lib.pattern();

	this.addChild(this.instance_13,this.shape_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern1_2_2 = function() {
	this.initialize();

	// Layer 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0.216,1],0,-75.1,0,75.3).s().p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	this.shape_12.setTransform(150,75);

	// Layer 2
	this.instance_14 = new lib.texture_inside();

	this.addChild(this.instance_14,this.shape_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern1_1_2 = function() {
	this.initialize();

	// Layer 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	mask_2.setTransform(150,75);

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0.216,1],0,-79,0,79.2).s().p("AYqsUIAAYpMgxTAAAIAA4pMAxTAAA").cp();
	this.shape_13.setTransform(146.5,73.3);

	this.shape_13.mask = mask_2;
	// Layer 1
	this.instance_15 = new lib.pattern();
	this.instance_15.setTransform(-11.2,-5.6,1.052,1.052);

	this.instance_15.mask = mask_2;
	this.addChild(this.instance_15,this.shape_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.2,-5.6,315.7,157.9);


(lib.pattern_shadow_3 = function() {
	this.initialize();

	// Layer 1
	this.instance_16 = new lib.pattern_shadow();

	this.addChild(this.instance_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.light_box_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(244,231,212,0.902)","rgba(244,231,212,0)"],[0.027,1],0,0,0,0,0,218.8).s().p("EAiggifMAAABE/MhE/AAAMAAAhE/MBE/AAA").cp();
	this.shape_14.setTransform(269.7,40.3);

	this.addChild(this.shape_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(48.9,-180.5,441.7,441.7);


(lib.box_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_17 = new lib.box2();

	this.addChild(this.instance_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,332,125);


(lib.pattern2_2_3 = function() {
	this.initialize();

	// Layer 3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],0,-144.7,0,144.9).s().p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	this.shape_15.setTransform(150,75);

	// Layer 2
	this.instance_18 = new lib.texture_inside();

	this.addChild(this.instance_18,this.shape_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern2_1_3 = function() {
	this.initialize();

	// Layer 3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],0,-144.7,0,144.9).s().p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	this.shape_16.setTransform(150,75);

	// Layer 1
	this.instance_19 = new lib.pattern_2();

	this.addChild(this.instance_19,this.shape_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern1_2_3 = function() {
	this.initialize();

	// Layer 3
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0.216,1],0,-75.1,0,75.3).s().p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	this.shape_17.setTransform(150,75);

	// Layer 2
	this.instance_20 = new lib.texture_inside();

	this.addChild(this.instance_20,this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.pattern1_1_3 = function() {
	this.initialize();

	// Layer 5 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AXcLuMgu3AAAIAA3bMAu3AAAIAAXb").cp();
	mask_3.setTransform(150,75);

	// Layer 3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0.216,1],0,-79,0,79.2).s().p("AYqMVMgxTAAAIAA4pMAxTAAAIAAYp").cp();
	this.shape_18.setTransform(146.5,73.3);

	this.shape_18.mask = mask_3;
	// Layer 1
	this.instance_21 = new lib.pattern_2();

	this.instance_21.mask = mask_3;
	this.addChild(this.instance_21,this.shape_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.2,-5.6,315.7,157.9);


(lib.pattern_shadow_4 = function() {
	this.initialize();

	// Layer 1
	this.instance_22 = new lib.pattern_shadow();

	this.addChild(this.instance_22);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.light_box_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(244,231,212,0.902)","rgba(244,231,212,0)"],[0.027,1],0,0,0,0,0,218.8).s().p("EAiggifMAAABE/MhE/AAAMAAAhE/MBE/AAA").cp();
	this.shape_19.setTransform(269.7,40.3);

	this.addChild(this.shape_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(48.9,-180.5,441.7,441.7);


(lib.box_3 = function() {
	this.initialize();

	// Layer 1
	this.instance_23 = new lib.box2_red();

	this.addChild(this.instance_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,332,125);


(lib.mc_box = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance_24 = new lib.light_box();
	this.instance_24.setTransform(-32.7,-32.1,1,1,0,0,0,241.1,93.5);
	this.instance_24.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).wait(40));

	// pattern  blue left 1
	this.pattern_left = new lib.pattern1_1();
	this.pattern_left.setTransform(-103,78.5,0.353,0.715,0,87.5,10.3,153.2,151.8);
	this.pattern_left.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.pattern_left).wait(3).to({regX:152.2,regY:152,scaleX:0.39,scaleY:0.5,skewX:-53.6,skewY:9,x:-98.7,y:79.4},17,cjs.Ease.get(0.6)).to({regX:151.8,regY:152.2,scaleX:0.39,scaleY:0.51,skewX:-83,skewY:9.3,x:-98.3,y:78.4},5,cjs.Ease.get(-0.19)).to({_off:true},1).wait(14));

	// pattern  blue left 2
	this.pattern_left_1 = new lib.pattern1_2();
	this.pattern_left_1.setTransform(-98.4,78.4,0.392,0.512,0,-83.1,9.3,151.8,152.2);
	this.pattern_left_1.shadow = new cjs.Shadow("rgba(20,154,176,1)",0,0,0);
	this.pattern_left_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pattern_left_1).wait(26).to({_off:false},0).to({regX:152.6,regY:151.2,scaleX:0.4,scaleY:0.54,skewX:-140.1,skewY:10,x:-97.2,y:76.8},7).wait(7));

	// Layer 3 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AaGR0MgzZAAAMgAygjnITaDIMAgxgCgMAAAAi/").cp();
	mask_4.setTransform(3.6,183.1);

	// left shadow
	this.pattern_left_2 = new lib.pattern_shadow_1();
	this.pattern_left_2.setTransform(-98.9,77.2,0.389,0.656,0,-67.3,9,152.3,152);
	this.pattern_left_2.alpha = 0.5;
	this.pattern_left_2.shadow = new cjs.Shadow("rgba(26,190,217,1)",0,0,0);
	this.pattern_left_2._off = true;

	this.pattern_left_2.mask = mask_4;
	this.timeline.addTween(cjs.Tween.get(this.pattern_left_2).wait(22).to({_off:false},0).to({regX:152.6,regY:151.5,scaleX:0.48,scaleY:0.73,skewX:-152.4,skewY:10,x:-97,y:77.3},11,cjs.Ease.get(1)).wait(4));

	// right mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("A9htJMA7DAAAIAAaTMg7DAAAIAA6T").cp();
	var mask_5_graphics_20 = new cjs.Graphics().p("ANwvAICEeBInlgTIALoFQADhCgFgfQgJg2grgII25iTIgew3IdjAA").cp();

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:31.8,y:21.3}).wait(20).to({graphics:mask_5_graphics_20,x:114.2,y:46.9}).wait(20));

	// pattern blue right 1
	this.pattern_right = new lib.pattern2_1();
	this.pattern_right.setTransform(94.8,66.6,0.469,0.729,0,85.5,6.5,157.3,4.3);
	this.pattern_right.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.pattern_right.mask = mask_5;
	this.timeline.addTween(cjs.Tween.get(this.pattern_right).wait(3).to({regX:157.9,regY:4.7,scaleX:0.47,scaleY:0.69,skewX:102.8,skewY:6,x:94.4,y:66.4},1,cjs.Ease.get(0.6)).to({_off:true},1).wait(21).to({regX:156.6,regY:5.6,scaleX:0.49,scaleY:0.4,skewX:281.6,skewY:5.1,x:94.1,y:67.4,_off:false},0).to({regX:157.2,regY:4.2,scaleX:0.49,scaleY:0.43,skewX:327.9,skewY:5.7,x:96.9,y:69},5).wait(9));

	// pattern  blue right 2
	this.pattern_right_1 = new lib.pattern2_2();
	this.pattern_right_1.setTransform(94.2,66.4,0.474,0.664,0,112,6,157.3,4.2);
	this.pattern_right_1.shadow = new cjs.Shadow("rgba(36,36,36,1)",0,0,0);
	this.pattern_right_1._off = true;

	this.pattern_right_1.mask = mask_5;
	this.timeline.addTween(cjs.Tween.get(this.pattern_right_1).wait(5).to({_off:false},0).to({regY:4.8,scaleX:0.49,scaleY:0.37,skewX:233.1,skewY:4.8,x:91.1,y:65.6},15).to({regX:156.6,regY:5.6,scaleX:0.49,scaleY:0.4,skewX:281.6,skewY:5.1,x:94.1,y:67.4},6,cjs.Ease.get(-0.19)).to({_off:true},1).wait(13));

	// box winner
	this.box = new lib.box();
	this.box.setTransform(2.5,207.9,1,1,0,0,0,166,151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.box}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-306.2,441.7,488.2);


(lib.mc_box_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance_25 = new lib.light_box_1();
	this.instance_25.setTransform(-32.7,-32.1,1,1,0,0,0,241.1,93.5);
	this.instance_25.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25}]}).wait(40));

	// pattern red left 1
	this.pattern_left_3 = new lib.pattern1_1_1();
	this.pattern_left_3.setTransform(-103,78.5,0.353,0.715,0,87.5,10.3,153.2,151.8);
	this.pattern_left_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.pattern_left_3).wait(3).to({regX:152.2,regY:152,scaleX:0.39,scaleY:0.5,skewX:-53.6,skewY:9,x:-98.7,y:79.4},17,cjs.Ease.get(0.6)).to({regX:151.8,regY:152.2,scaleX:0.39,scaleY:0.51,skewX:-83,skewY:9.3,x:-98.3,y:78.4},5,cjs.Ease.get(-0.19)).to({_off:true},1).wait(14));

	// pattern red left 2
	this.pattern_left_4 = new lib.pattern1_2_1();
	this.pattern_left_4.setTransform(-98.4,78.4,0.392,0.512,0,-83.1,9.3,151.8,152.2);
	this.pattern_left_4.shadow = new cjs.Shadow("rgba(20,154,176,1)",0,0,0);
	this.pattern_left_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pattern_left_4).wait(26).to({_off:false},0).to({regX:152.6,regY:151.2,scaleX:0.4,scaleY:0.54,skewX:-140.1,skewY:10,x:-97.2,y:76.8},7).wait(7));

	// Layer 3 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AaGR0MgzZAAAMgAygjnITaDIMAgxgCgMAAAAi/").cp();
	mask_6.setTransform(3.6,183.1);

	// left shadow
	this.pattern_left_5 = new lib.pattern_shadow_2();
	this.pattern_left_5.setTransform(-98.9,77.2,0.389,0.656,0,-67.3,9,152.3,152);
	this.pattern_left_5.alpha = 0.5;
	this.pattern_left_5.shadow = new cjs.Shadow("rgba(26,190,217,1)",0,0,0);
	this.pattern_left_5._off = true;

	this.pattern_left_5.mask = mask_6;
	this.timeline.addTween(cjs.Tween.get(this.pattern_left_5).wait(22).to({_off:false},0).to({regX:152.6,regY:151.5,scaleX:0.48,scaleY:0.73,skewX:-152.4,skewY:10,x:-97,y:77.3},11,cjs.Ease.get(1)).wait(4));

	// right mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_0 = new cjs.Graphics().p("A9htJMA7DAAAIAAaTMg7DAAAIAA6T").cp();
	var mask_7_graphics_20 = new cjs.Graphics().p("ANwvAICEeBInlgTIALoFQADhCgFgfQgJg2grgII25iTIgew3IdjAA").cp();

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:mask_7_graphics_0,x:31.8,y:21.3}).wait(20).to({graphics:mask_7_graphics_20,x:114.2,y:46.9}).wait(20));

	// pattern red right 1
	this.pattern_right_2 = new lib.pattern2_1_1();
	this.pattern_right_2.setTransform(94.8,66.6,0.469,0.729,0,85.5,6.5,157.3,4.3);
	this.pattern_right_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.pattern_right_2.mask = mask_7;
	this.timeline.addTween(cjs.Tween.get(this.pattern_right_2).wait(3).to({regX:157.9,regY:4.7,scaleX:0.47,scaleY:0.69,skewX:102.8,skewY:6,x:94.4,y:66.4},1,cjs.Ease.get(0.6)).to({_off:true},1).wait(21).to({regX:156.6,regY:5.6,scaleX:0.49,scaleY:0.4,skewX:281.6,skewY:5.1,x:94.1,y:67.4,_off:false},0).to({regX:157.2,regY:4.2,scaleX:0.49,scaleY:0.43,skewX:327.9,skewY:5.7,x:96.9,y:69},5).wait(9));

	// pattern red right 2
	this.pattern_right_3 = new lib.pattern2_2_1();
	this.pattern_right_3.setTransform(94.2,66.4,0.474,0.664,0,112,6,157.3,4.2);
	this.pattern_right_3.shadow = new cjs.Shadow("rgba(36,36,36,1)",0,0,0);
	this.pattern_right_3._off = true;

	this.pattern_right_3.mask = mask_7;
	this.timeline.addTween(cjs.Tween.get(this.pattern_right_3).wait(5).to({_off:false},0).to({regY:4.8,scaleX:0.49,scaleY:0.37,skewX:233.1,skewY:4.8,x:91.1,y:65.6},15).to({regX:156.6,regY:5.6,scaleX:0.49,scaleY:0.4,skewX:281.6,skewY:5.1,x:94.1,y:67.4},6,cjs.Ease.get(-0.19)).to({_off:true},1).wait(13));

	// box winner red
	this.box_1 = new lib.box_1();
	this.box_1.setTransform(2.5,207.9,1,1,0,0,0,166,151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.box_1}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-306.2,441.7,488.2);


(lib.mc_box_2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance_26 = new lib.light_box_2();
	this.instance_26.setTransform(-32.7,-32.1,1,1,0,0,0,241.1,93.5);
	this.instance_26.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26}]}).wait(40));

	// pattern blue left 1
	this.pattern_left_6 = new lib.pattern1_1_2();
	this.pattern_left_6.setTransform(-103,78.5,0.353,0.715,0,87.5,10.3,153.2,151.8);
	this.pattern_left_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.pattern_left_6).wait(3).to({regX:152.2,regY:152,scaleX:0.39,scaleY:0.5,skewX:-53.6,skewY:9,x:-98.7,y:79.4},17,cjs.Ease.get(0.6)).to({regX:151.8,regY:152.2,scaleX:0.39,scaleY:0.51,skewX:-83,skewY:9.3,x:-98.3,y:78.4},5,cjs.Ease.get(-0.19)).to({_off:true},1).wait(14));

	// pattern blue left 2
	this.pattern_left_7 = new lib.pattern1_2_2();
	this.pattern_left_7.setTransform(-98.4,78.4,0.392,0.512,0,-83.1,9.3,151.8,152.2);
	this.pattern_left_7.shadow = new cjs.Shadow("rgba(20,154,176,1)",0,0,0);
	this.pattern_left_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pattern_left_7).wait(26).to({_off:false},0).to({regX:152.6,regY:151.2,scaleX:0.4,scaleY:0.54,skewX:-140.1,skewY:10,x:-97.2,y:76.8},7).wait(7));

	// Layer 3 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AaGR0MgzZAAAMgAygjnITaDIMAgxgCgMAAAAi/").cp();
	mask_8.setTransform(3.6,183.1);

	// left shadow
	this.pattern_left_8 = new lib.pattern_shadow_3();
	this.pattern_left_8.setTransform(-98.9,77.2,0.389,0.656,0,-67.3,9,152.3,152);
	this.pattern_left_8.alpha = 0.5;
	this.pattern_left_8.shadow = new cjs.Shadow("rgba(26,190,217,1)",0,0,0);
	this.pattern_left_8._off = true;

	this.pattern_left_8.mask = mask_8;
	this.timeline.addTween(cjs.Tween.get(this.pattern_left_8).wait(22).to({_off:false},0).to({regX:152.6,regY:151.5,scaleX:0.48,scaleY:0.73,skewX:-152.4,skewY:10,x:-97,y:77.3},11,cjs.Ease.get(1)).wait(4));

	// right mask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_0 = new cjs.Graphics().p("A9htJMA7DAAAIAAaTMg7DAAAIAA6T").cp();
	var mask_9_graphics_20 = new cjs.Graphics().p("ANwvAICEeBInlgTIALoFQADhCgFgfQgJg2grgII25iTIgew3IdjAA").cp();

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:mask_9_graphics_0,x:31.8,y:21.3}).wait(20).to({graphics:mask_9_graphics_20,x:114.2,y:46.9}).wait(20));

	// pattern blue right 1
	this.pattern_right_4 = new lib.pattern2_1_2();
	this.pattern_right_4.setTransform(94.8,66.6,0.469,0.729,0,85.5,6.5,157.3,4.3);
	this.pattern_right_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.pattern_right_4.mask = mask_9;
	this.timeline.addTween(cjs.Tween.get(this.pattern_right_4).wait(3).to({regX:157.9,regY:4.7,scaleX:0.47,scaleY:0.69,skewX:102.8,skewY:6,x:94.4,y:66.4},1,cjs.Ease.get(0.6)).to({_off:true},1).wait(21).to({regX:156.6,regY:5.6,scaleX:0.49,scaleY:0.4,skewX:281.6,skewY:5.1,x:94.1,y:67.4,_off:false},0).to({regX:157.2,regY:4.2,scaleX:0.49,scaleY:0.43,skewX:327.9,skewY:5.7,x:96.9,y:69},5).wait(9));

	// pattern blue right 2
	this.pattern_right_5 = new lib.pattern2_2_2();
	this.pattern_right_5.setTransform(94.2,66.4,0.474,0.664,0,112,6,157.3,4.2);
	this.pattern_right_5.shadow = new cjs.Shadow("rgba(36,36,36,1)",0,0,0);
	this.pattern_right_5._off = true;

	this.pattern_right_5.mask = mask_9;
	this.timeline.addTween(cjs.Tween.get(this.pattern_right_5).wait(5).to({_off:false},0).to({regY:4.8,scaleX:0.49,scaleY:0.37,skewX:233.1,skewY:4.8,x:91.1,y:65.6},15).to({regX:156.6,regY:5.6,scaleX:0.49,scaleY:0.4,skewX:281.6,skewY:5.1,x:94.1,y:67.4},6,cjs.Ease.get(-0.19)).to({_off:true},1).wait(13));

	// box loser
	this.box_2 = new lib.box_2();
	this.box_2.setTransform(2.5,207.9,1,1,0,0,0,166,151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.box_2}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-306.2,441.7,488.2);


(lib.mc_box_3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance_27 = new lib.light_box_3();
	this.instance_27.setTransform(-32.7,-32.1,1,1,0,0,0,241.1,93.5);
	this.instance_27.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27}]}).wait(40));

	// pattern red left 1
	this.pattern_left_9 = new lib.pattern1_1_3();
	this.pattern_left_9.setTransform(-103,78.5,0.353,0.715,0,87.5,10.3,153.2,151.8);
	this.pattern_left_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.pattern_left_9).wait(3).to({regX:152.2,regY:152,scaleX:0.39,scaleY:0.5,skewX:-53.6,skewY:9,x:-98.7,y:79.4},17,cjs.Ease.get(0.6)).to({regX:151.8,regY:152.2,scaleX:0.39,scaleY:0.51,skewX:-83,skewY:9.3,x:-98.3,y:78.4},5,cjs.Ease.get(-0.19)).to({_off:true},1).wait(14));

	// pattern red left 2
	this.pattern_left_10 = new lib.pattern1_2_3();
	this.pattern_left_10.setTransform(-98.4,78.4,0.392,0.512,0,-83.1,9.3,151.8,152.2);
	this.pattern_left_10.shadow = new cjs.Shadow("rgba(20,154,176,1)",0,0,0);
	this.pattern_left_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pattern_left_10).wait(26).to({_off:false},0).to({regX:152.6,regY:151.2,scaleX:0.4,scaleY:0.54,skewX:-140.1,skewY:10,x:-97.2,y:76.8},7).wait(7));

	// Layer 3 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AaGR0MgzZAAAMgAygjnITaDIMAgxgCgMAAAAi/").cp();
	mask_10.setTransform(3.6,183.1);

	// left shadow
	this.pattern_left_11 = new lib.pattern_shadow_4();
	this.pattern_left_11.setTransform(-98.9,77.2,0.389,0.656,0,-67.3,9,152.3,152);
	this.pattern_left_11.alpha = 0.5;
	this.pattern_left_11.shadow = new cjs.Shadow("rgba(26,190,217,1)",0,0,0);
	this.pattern_left_11._off = true;

	this.pattern_left_11.mask = mask_10;
	this.timeline.addTween(cjs.Tween.get(this.pattern_left_11).wait(22).to({_off:false},0).to({regX:152.6,regY:151.5,scaleX:0.48,scaleY:0.73,skewX:-152.4,skewY:10,x:-97,y:77.3},11,cjs.Ease.get(1)).wait(4));

	// right mask (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("A9htJMA7DAAAIAAaTMg7DAAAIAA6T").cp();
	var mask_11_graphics_20 = new cjs.Graphics().p("ANwvAICEeBInlgTIALoFQADhCgFgfQgJg2grgII25iTIgew3IdjAA").cp();

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:31.8,y:21.3}).wait(20).to({graphics:mask_11_graphics_20,x:114.2,y:46.9}).wait(20));

	// pattern red right 1
	this.pattern_right_6 = new lib.pattern2_1_3();
	this.pattern_right_6.setTransform(94.8,66.6,0.469,0.729,0,85.5,6.5,157.3,4.3);
	this.pattern_right_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.pattern_right_6.mask = mask_11;
	this.timeline.addTween(cjs.Tween.get(this.pattern_right_6).wait(3).to({regX:157.9,regY:4.7,scaleX:0.47,scaleY:0.69,skewX:102.8,skewY:6,x:94.4,y:66.4},1,cjs.Ease.get(0.6)).to({_off:true},1).wait(21).to({regX:156.6,regY:5.6,scaleX:0.49,scaleY:0.4,skewX:281.6,skewY:5.1,x:94.1,y:67.4,_off:false},0).to({regX:157.2,regY:4.2,scaleX:0.49,scaleY:0.43,skewX:327.9,skewY:5.7,x:96.9,y:69},5).wait(9));

	// pattern red right 2
	this.pattern_right_7 = new lib.pattern2_2_3();
	this.pattern_right_7.setTransform(94.2,66.4,0.474,0.664,0,112,6,157.3,4.2);
	this.pattern_right_7.shadow = new cjs.Shadow("rgba(36,36,36,1)",0,0,0);
	this.pattern_right_7._off = true;

	this.pattern_right_7.mask = mask_11;
	this.timeline.addTween(cjs.Tween.get(this.pattern_right_7).wait(5).to({_off:false},0).to({regY:4.8,scaleX:0.49,scaleY:0.37,skewX:233.1,skewY:4.8,x:91.1,y:65.6},15).to({regX:156.6,regY:5.6,scaleX:0.49,scaleY:0.4,skewX:281.6,skewY:5.1,x:94.1,y:67.4},6,cjs.Ease.get(-0.19)).to({_off:true},1).wait(13));

	// box loser second chance
	this.box_3 = new lib.box_3();
	this.box_3.setTransform(2.5,207.9,1,1,0,0,0,166,151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.box_3}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-306.2,441.7,488.2);


(lib.WinnerRed = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// box winner red
	this.instance_28 = new lib.mc_box_1();
	this.instance_28.setTransform(47.7,187,1,1,0,0,0,47.6,186.9);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({alpha:0.25},5,cjs.Ease.get(-0.99)).to({alpha:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-306.2,441.7,488.2);


(lib.Winner = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// box winner
	this.instance_29 = new lib.mc_box();
	this.instance_29.setTransform(47.7,187,1,1,0,0,0,47.6,186.9);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({alpha:0.25},5,cjs.Ease.get(-0.99)).to({alpha:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-306.2,441.7,488.2);


(lib.Loser = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// box loser
	this.instance_30 = new lib.mc_box_2();
	this.instance_30.setTransform(47.7,187,1,1,0,0,0,47.6,186.9);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({alpha:0.25},5,cjs.Ease.get(-0.99)).to({alpha:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-306.2,441.7,488.2);


(lib.loserSecondChance = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// box loser second
	this.instance_31 = new lib.mc_box_3();
	this.instance_31.setTransform(47.7,187,1,1,0,0,0,47.6,186.9);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({alpha:0.25},5,cjs.Ease.get(-0.99)).to({alpha:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-306.2,441.7,488.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
