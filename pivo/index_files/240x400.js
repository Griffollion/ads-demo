(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"//banners.adfox.ru/170830/adfox/711279/2195901/images/bg.jpg", id:"bg"},
		{src:"//banners.adfox.ru/170830/adfox/711279/2195901/images/comp.png", id:"comp"},
		{src:"//banners.adfox.ru/170830/adfox/711279/2195901/images/telega.png", id:"telega"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,208);


(lib.comp = function() {
	this.initialize(img.comp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,368);


(lib.telega = function() {
	this.initialize(img.telega);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,148);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATA8IAAhqIglAAIAABqIgaAAIAAh3IBZAAIAAB3g");
	this.shape.setTransform(175.2,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWA8IAAhMIABgOIgtBWIgBAEIgYAAIAAh3IAZAAIAABOIgBAMIABAAIAshWIACgEIAYAAIAAB3g");
	this.shape_1.setTransform(163,41.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAuIAAg/IgiA/IgUAAIAAhbIAZAAIAAA7IAgg7IAWAAIAABbg");
	this.shape_2.setTransform(146.7,42.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcA8IgDgbIhFAAIAAhcIAaAAIAABOIAZAAIAAhOIAZAAIAABOIAMAAIgCApg");
	this.shape_3.setTransform(132.1,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAuIAAg/IgiA/IgUAAIAAhbIAZAAIAAA7IAgg7IAWAAIAABbg");
	this.shape_4.setTransform(121.3,42.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAvIgDAAIABgPIABAAIACAAQAIAAAEgKQAFgKACgQQACgSAAgYIA2AAIAABbIgZAAIAAhNIgPAAQAAAXgEAQQgEATgHAKQgHALgMAAIgCAAg");
	this.shape_5.setTransform(111,42.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgphEIAUAAIADAIIABAAIADgCIAIgFQAFgCAHgBQAMABAHAFQAJAGAEALQAEAKAAAOQAAAQgEAIQgFAMgIAGQgJAGgLAAQgGAAgFgBQgFgCgCgCIgDgCIAAAAIAAA0IgZABgAgBg3QgFAAgDABIgFAFIgCACIAAA0IACACIAEACIAIADQAEAAAFgEQAFgEACgFQABgIAAgNQAAgNgBgIQgCgHgFgDQgDgCgEAAIgBAAg");
	this.shape_6.setTransform(102,44.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAlQgKgLgBgVIgLAAIAAApIgZAAIAAhbIAZAAIAAAnIALAAQACgUAJgKQAKgLAQAAQAVAAALANQAKAMAAAWQAAAXgKANQgLAMgVAAQgQAAgKgLgAAEgbQgEAJAAASQAAASAEAJQADAJAJAAQAJAAAFgJQADgJAAgSQAAgSgDgJQgFgIgJAAQgJAAgDAIg");
	this.shape_7.setTransform(90.2,42.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAuIAAgkIgKAAIgNAkIgZAAIAUgpQgIgDgFgEQgFgGAAgIQAAgPAKgHQAKgHARAAIAiAAIAABbgAgFgeQgFAEAAAKQAAAJAFAEQAFADAFAAIAHAAIAAgiIgHAAQgGAAgEAEg");
	this.shape_8.setTransform(73.6,42.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAvIgDAAIABgPIABAAIACAAQAIAAAEgKQAFgKACgQQACgSAAgYIA2AAIAABbIgZAAIAAhNIgPAAQAAAXgEAQQgEATgHAKQgHALgMAAIgCAAg");
	this.shape_9.setTransform(64.2,42.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAhA8IgFgbIg3AAIgGAbIgMAAIgBgpIAMAAQAEgKACgKQACgNABgNIAAggIA7AAIAABOIANAAIgDApgAgMgKQgCAOgEAPIAbAAIAAhBIgUAAQAAATgBARg");
	this.shape_10.setTransform(55.1,43.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAuIAAhbIA3AAIAAAOIgeAAIAABNg");
	this.shape_11.setTransform(196.5,21.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOAuIAAgpIgbAAIAAApIgZAAIAAhbIAZAAIAAAnIAbAAIAAgnIAZAAIAABbg");
	this.shape_12.setTransform(187.5,21.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPAuIAAg/IgiA/IgUAAIAAhbIAZAAIAAA7IAgg7IAWAAIAABbg");
	this.shape_13.setTransform(177.3,21.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgphEIAUAAIADAIIABAAIADgCIAIgFQAGgCAGgBQAMABAHAFQAJAGAEALQAEAJAAAPQAAAPgEAJQgFAMgIAGQgJAGgLABQgGAAgFgCQgFgCgCgCIgCgCIgBAAIAAA0IgZABgAgBg3QgEAAgEACIgFADIgCADIAAA0IACACIAEACIAIACQAEABAFgEQAEgDADgGQABgIAAgOQAAgMgBgIQgCgGgFgDQgDgDgEAAIgBAAg");
	this.shape_14.setTransform(167.4,23.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPBAIAAhAIgiBAIgUAAIAAhbIAZAAIAAA7IAgg7IAWAAIAABbgAgOgqQgGgEgDgEQgCgFAAgDIgBgEIAUgBIAAACIgBABIAAADQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACADAFAAQAGAAADgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAAAIgBgDIAAgBIAAgCIATABIAAAEQAAADgDAFQgCAEgGAEQgHADgLAAQgKAAgGgDg");
	this.shape_15.setTransform(156.8,19.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOAuQgDgDgBgGIgBAAIgCADQgCADgFACQgDADgKAAQgOAAgHgGQgIgHAAgLQAAgJAFgGQAFgHAIgCQAIgDAJgCIAOgCIAAgFQAAgJgCgFQgBgFgEgCQgBgCgFAAIgKACIgJAEIgEABIgCgMIAEgBIALgEIAOgCQAJAAAIADQAIADAEAHQAFAHAAANIAAAoIABAIQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIAEgBIACgBIABAKIgDABIgIACIgJABQgGAAgDgCgAgJAHQgHAEAAAKQAAAHADAEQADAEAFAAQAFAAACgDIAEgFIABgDIAAgYQgKABgGAFg");
	this.shape_16.setTransform(147,21.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglAuIAAhbIAkAAQAMAAAIADQAIAEAEAFQAEAGAAAHQAAAGgDAEQgCAEgEACIgIAEQAFAAAFACQAEADADAEQADAEAAAGQAAAIgEAGQgDAHgJADQgJADgOAAgAgMAjIALAAQAGAAAEgFQAEgFAAgHQAAgHgEgEQgDgEgGAAIgMAAgAgMgDIAMAAIADgBIAEgEQADgEAAgHQAAgHgDgEQgDgEgFAAIgLAAg");
	this.shape_17.setTransform(137.7,21.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AALAuIgSgsIgGADIAAApIgZAAIAAhbIAZAAIAAAnIALgGIATghIAPAAIgWAjIAdA4g");
	this.shape_18.setTransform(128.7,21.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAuQgGgCgEgDIgFgFIgCgCIAHgJIACADIAIAFQAFADAIAAQAHAAADgDQAFgDADgGQACgHABgLIgiABIAAgNIAiAAQgBgLgCgHQgDgGgFgDQgDgCgGAAQgFAAgFACIgJAEIgEABIgCgMIAEgCIALgDIANgCQATAAALAMQALAMAAAWQAAAQgGALQgGALgKAGQgKAFgKAAQgJAAgHgCg");
	this.shape_19.setTransform(119.2,21.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAGIAAgLIAxAAIAAALg");
	this.shape_20.setTransform(112.1,20.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLAuIAAhNIgbAAIAAgOIBNAAIAAAOIgbAAIAABNg");
	this.shape_21.setTransform(104.9,21.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRAsQgKgGgFgKQgFgLgBgQQAAgPAGgLQAFgLAJgGQAKgFAKAAQASAAAJALQAKAKAAAVIgBAGIgBAEIgxAAQABARAFAGQAEAIAJAAQAFgBAEgBQAEgCADgDIAFgEIABgCIAIAGIgBAEIgGAGQgEADgGADQgHADgJAAQgLAAgKgEgAgEghQgDADgCAGQgCAHgBALIAbAAIAAgDQABgOgEgGQgDgHgHABIgBAAQgCAAgDACg");
	this.shape_22.setTransform(96.4,21.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAOAuIAAgpIgbAAIAAApIgZAAIAAhbIAZAAIAAAnIAbAAIAAgnIAZAAIAABbg");
	this.shape_23.setTransform(86.8,21.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgphEIAUAAIADAIIABAAIADgCIAIgFQAGgCAGgBQAMABAHAFQAJAGAEALQAEAJAAAPQAAAPgEAJQgFAMgIAGQgIAGgMABQgGAAgFgCQgFgCgCgCIgCgCIgBAAIAAA0IgZABgAgBg3QgEAAgEACIgFADIgCADIAAA0IACACIAEACIAIACQAFABAEgEQAEgDACgGQACgIAAgOQAAgMgCgIQgBgGgFgDQgDgDgEAAIgBAAg");
	this.shape_24.setTransform(77,23.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRAsQgKgGgFgKQgFgLAAgQQAAgPAEgLQAGgLAJgGQAJgFALAAQARAAAKALQAKAKAAAVIgCAGIAAAEIgwAAQAAARAEAGQAGAIAIAAQAGgBADgBQAEgCADgDIAEgEIABgCIAJAGIgCAEIgFAGQgFADgGADQgGADgJAAQgLAAgKgEgAgEghQgEADgBAGQgCAHAAALIAaAAIAAgDQAAgOgDgGQgDgHgHABIgBAAQgCAAgDACg");
	this.shape_25.setTransform(67.3,21.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLAuIAAhNIgbAAIAAgOIBNAAIAAAOIgbAAIAABNg");
	this.shape_26.setTransform(58.7,21.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAOAuIAAgpIgbAAIAAApIgZAAIAAhbIAZAAIAAAnIAbAAIAAgnIAZAAIAABbg");
	this.shape_27.setTransform(49.5,21.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAWA8IAAhNIABgNIgtBWIgBAEIgYAAIAAh3IAZAAIAABOIgBAMIABAAIAshWIACgEIAYAAIAAB3g");
	this.shape_28.setTransform(38.2,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax9E3IAAptMAj7AAAIAAJtg");
	mask.setTransform(115,31.1);

	// Слой 2
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#109A82").s().p("AIfGoIJ0tQIAcAAIAANQgAqDGoIJytQILPAAIp2NQgAyuGoIAAtQILKAAIp+NQg");
	this.shape_29.setTransform(110.3,42.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#49AD9B").s().p("AAwGoIJ2tQIHVAAIp0NQgAx6GoIJ+tQIHTAAIpyNQg");
	this.shape_30.setTransform(112.7,42.5);

	this.shape_29.mask = this.shape_30.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,62.3);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2IGiIAAtDMAsRAAAIAANDg");
	mask.setTransform(141.7,41.8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019980").s().p("AgCAaIAAgtIgOAAIAAgGIAhAAIAAAGIgOAAIAAAtg");
	this.shape.setTransform(36.4,55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#019980").s().p("AgSAUQgIgJAAgLQAAgKAHgIQAHgIAMgBQAOAAAHALQAGAIAAAKIguAAQAAAIAHAFQAFAGAHAAQAFAAAGgDQAFgEACgFIAHAAQgCAIgIAFQgHAFgIABQgKgBgIgHgAgLgPQgHAFgBAHIAmAAQgBgIgGgEQgFgFgHAAQgGAAgFAFg");
	this.shape_1.setTransform(31.4,55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#019980").s().p("AASAaIgSgqIgRAqIgIAAIAXgzIAFAAIAXAzg");
	this.shape_2.setTransform(25.5,55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#019980").s().p("AgxA0IBCg9QAMgJAAgPQAAgNgJgJQgIgIgMAAQgLAAgIAIQgJAJAAANIABAJIghAAIgBgJQAAgaATgSQASgSAYAAQAZAAASASQATASAAAaQAAAagTAQIhcBXg");
	this.shape_3.setTransform(24,40.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5CB7A8").s().p("AhwA9IAiggICFAAQAKAAAIgJQAIgJAAgLQAAgLgJgJQgJgIgMgBIgSAAIAFgfIANAAQAagBASATQASASAAAYQAAAZgSASQgSATgagBg");
	this.shape_4.setTransform(31.6,44.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#019980").s().p("Ag0AtIAVhjIBUAAIAAAhIg7AAIgOBMg");
	this.shape_5.setTransform(35.8,36.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#636466").s().p("AAaBMIAAhLIgzAAIAABLIgXAAIAAiXIAXAAIAABAIAzAAIAAhAIAXAAIAACXg");
	this.shape_6.setTransform(161.6,42.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#636466").s().p("AgoBWQgPgWgBgkQgBgoAOgiQASgpAkgKIAVgFQAJgCAGgDIAAAAIADAZQgLAFgUADIgZAFQgSAFgFArIAMgIQAOgJALAAQAwAAABA9QABAggPAZQgQAcgbAAQgZAAgPgWgAgVgOIgJAGIgBAVQACBQAgAAQATAAAGgWQADgMAAgbQgBgdgGgJQgIgOgSAAQgJAAgKAGg");
	this.shape_7.setTransform(223.6,39.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#636466").s().p("AgiA+QgRgTAAghQAAglATgaQATgZAaAAQAPgBAMAFIgDAZIgCAAQgTgRgQAGQgZAFgBAyQgBA+AkACQATACATgMIAFALQgZATgZAAQgVABgPgSg");
	this.shape_8.setTransform(201.5,42.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#636466").s().p("AgKBMIAAiIIgmACIACgRIBgAAIgCARIgkgCIAACIg");
	this.shape_9.setTransform(211.7,42.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#636466").s().p("AAWBMIgrhLIgGAAIAABLIgXAAIAAiXIAXAAIAABCIAGAAIAohCIAYAAIAAABIgtBCIA1BTIAAABg");
	this.shape_10.setTransform(264.9,42.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#636466").s().p("AgmBDQgKgMAAgXQAAgVAMgLQAOgOAcAAIATAAIAAgPQAAgigYAAQgLABgSAOIgCAAIgEgWIABAAQAagJAQABQAYAAAJAPQAHAMAAAXIAABoIgUAAIgDgSIAAAAQgDAFgGAGQgNAKgOAAQgSAAgKgMgAgPAFQgIAIAAAOQAAAhAXAAQAQAAAJgRIAAgsIgTgBQgNAAgIAHg");
	this.shape_11.setTransform(236.5,42.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#636466").s().p("AAbBMIABh3IgBAAIgzB3IgZAAIAAiXIAXAAIgBB7IABAAIA2h7IAWAAIAACXg");
	this.shape_12.setTransform(147.1,42.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#636466").s().p("AAaBMIAAhLIgzAAIAABLIgXAAIAAiXIAXAAIAABAIAzAAIAAhAIAXAAIAACXg");
	this.shape_13.setTransform(250.4,42.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#636466").s().p("AgjA+QgRgTAAglQAAgkARgYQARgZAaABQAtAAAABGIgBALIhOAAQAAApAXAMQASAKAggRIAGALQgJAHgNAGQgQAHgOgBQgWABgOgSgAgagJIA1AAQAAg4gbAAQgXAAgDA4g");
	this.shape_14.setTransform(119.7,42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#636466").s().p("AgjA+QgRgTAAglQAAgkARgYQARgZAaABQAtAAAABGIgBALIhOAAQAAApAXAMQASAKAggRIAGALQgJAHgNAGQgQAHgOgBQgWABgOgSgAgagJIA1AAQAAg4gbAAQgXAAgDA4g");
	this.shape_15.setTransform(188.4,42.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#636466").s().p("AguBMIAAiXIAuAAQAoAAAAAjQAAALgHAIQgGAJgLADIAAAAQAOAEAJAKQAIALAAAPQAAATgNANQgNANgVAAgAgXA+IATAAQALAAAIgJQAHgIAAgNQAAgPgHgIQgIgIgLAAIgTAAgAgXgLIAbAAQANgIAAgSQAAgMgHgGQgHgGgIAAIgSAAg");
	this.shape_16.setTransform(175.7,42.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#636466").s().p("Ag2A0QASgFAGgMQAMgYgBhJIAAgPIBKAAIAACXIgXAAIAAiJIghAAQAAAsgFAkQgDAbgKAOQgJAOgUAGg");
	this.shape_17.setTransform(132,42.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#636466").s().p("Ag5BiIAAjEIBnAAIgDAVIhLgGIAAA+IALgFQAPgFAOAAQAbAAANATQAKANAAAYQAABJhDAAgAgggGIAABaIAVAAQAXAAAKgPQAJgMAAgZQgBgfgRgKQgIgGgJAAQgMAAgQAJg");
	this.shape_18.setTransform(106.2,40.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#019980").s().p("AAVBiQAdgLAVgRQAdgXAAgYQgBgcgkgFIgjABQASAZgJAXQgNAhgpAPQgbAJgfACIgaAAQALgxASgXQAOgSAZgKQAOgIAdgLIA6gPQAngKARgMQATgNAKgOQAFgIABgFIAACeQAAAQgMALQgLAMgQgBgAieg7QAAgPAKgLQALgLAQgCIDOAAQgDAXgVAKQgKAFgeAHQhDAPglAXQggARgSAcQgKAQgIAZIgHAbg");
	this.shape_19.setTransform(72.6,40.5);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.8,29.1,252.2,28.7);


(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BA5E1").s().p("Ax9FJIAAqRMAj7AAAIAAKRg");
	this.shape.setTransform(115,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.5,230,66);


(lib.всевиды = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4BsIgGgDIADgWIAFACIAKABQAJAAAHgFQAGgFAGgKQAFgKAHgQIg+iVIAuAAIAiBnIAdhnIAZAAIgzCSQgHAXgIAQQgHAQgKAJQgLAJgNAAQgMAAgFgCg");
	this.shape.setTransform(177.6,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBIIAAh6IgpAAIAAgVIB3AAIAAAVIgpAAIAAB6g");
	this.shape_1.setTransform(164.2,28.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBHQgFgEgBgKIgCAAIgDAFQgDAEgIAFQgHAEgPAAQgUAAgMgKQgMgKAAgSQAAgOAIgJQAIgKAMgEQAMgFAOgDQAMgDALgBIAAgIQAAgNgCgIQgDgIgFgCQgDgEgJABQgHAAgIACIgNAFIgGADIgEgSIAHgDQAGgDAKgDQAKgDAMAAQAPAAANAFQAMAEAHALQAHALAAAUIAABAQAAAJACADQACADACAAIAGgBIAEgBIABAPIgGACIgMADIgOABQgJAAgEgEgAgPALQgLAGAAAPQAAAMAFAGQAEAGAIAAQAIAAADgEQAFgEACgEIACgEIAAgmQgQACgKAHg");
	this.shape_2.setTransform(150.5,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5BKIgEgBIABgXIACAAIACAAQANgBAHgPQAIgPADgZQACgdAAgmIBVAAIAACPIgmAAIAAh5IgZAAQAAAkgGAbQgGAcgLARQgMARgRAAIgEAAg");
	this.shape_3.setTransform(134.9,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVBIIAAh6IgpAAIAAB6IgmAAIAAiPIB1AAIAACPg");
	this.shape_4.setTransform(120.7,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxA4QgRgUAAgkQAAgjARgTQARgUAgAAQAgAAASAUQARATAAAjQAAAkgSAUQgSATgfAAQggAAgRgTgAgOgyQgGAGgCAMQgDAMAAAUQAAAUADAMQACANAGAFQAGAGAIAAQAJAAAGgGQAFgFADgNQACgLAAgVQAAgUgCgMQgDgMgFgGQgGgFgJABIAAgBQgJAAgFAFg");
	this.shape_5.setTransform(105.3,28.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBEQgQgIgHgQQgJgQAAgaQAAgYAIgRQAIgSAOgIQAPgJARAAQAbAAAPARQAPAQAAAgIgBAMIgBAFIhMAAQAAAaAHALQAIALAOgBQAJAAAGgDQAGgCAFgEIAGgHIACgDIANAKIgCAFQgEAEgFAGQgHAFgKAEQgKAFgOAAIgCAAQgRAAgOgHgAgHg0QgFAEgDALQgDAKAAASIAqAAIAAgHQAAgWgEgJQgFgJgMAAQgFAAgFAEg");
	this.shape_6.setTransform(83.4,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRBIIAAh6IgqAAIgBgVIB5AAIAAAVIgqAAIAAB6g");
	this.shape_7.setTransform(70.1,28.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYBkIAAhkIg3BkIgeAAIAAiPIAmAAIAABeIAzheIAiAAIAACPgAgXhDQgKgFgDgHQgEgHgBgFIAAgGIAegCIAAADIgBACIAAAEQAAAEADADQADAEAJAAQAKAAAEgEQADgDAAgEIgBgEIgBgCIAAgDIAfACIgBAGQAAAFgEAHQgEAHgKAFQgJAGgSAAQgQAAgKgGg");
	this.shape_8.setTransform(55.7,25.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWBHQgFgEgBgKIgCAAIgDAFQgDAEgIAFQgHAEgPAAQgUAAgMgKQgMgKAAgSQAAgOAIgJQAIgKAMgEQAMgFAOgDQAMgDALgBIAAgIQAAgNgCgIQgDgIgFgCQgDgEgJABQgHAAgIACIgNAFIgGADIgEgSIAHgDQAGgDAKgDQAKgDAMAAQAPAAANAFQAMAEAHALQAHALAAAUIAABAQAAAJACADQACADACAAIAGgBIAEgBIABAPIgGACIgMADIgOABQgJAAgEgEgAgPALQgLAGAAAPQAAAMAFAGQAEAGAIAAQAIAAADgEQAFgEACgEIACgEIAAgmQgQACgKAHg");
	this.shape_9.setTransform(40.4,28.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAuBIIgDhdIAAgPIgBAAIgkBsIgZAAIgjhsIAAAAIgBAHIgEBlIgWAAIAIiPIAuAAIAbBmIAhhmIAtAAIAECPg");
	this.shape_10.setTransform(22.9,28.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXBIIAAhjIg2BjIgeAAIAAiPIAnAAIAABdIAzhdIAhAAIAACPg");
	this.shape_11.setTransform(5.1,28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAWBIIAAhAIgrAAIAABAIgmAAIAAiPIAmAAIAAA8IArAAIAAg8IAmAAIAACPg");
	this.shape_12.setTransform(-10.7,28.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXBIIAAhjIg2BjIgeAAIAAiPIAnAAIAABdIAzhdIAhAAIAACPg");
	this.shape_13.setTransform(-26.6,28.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhBhqIAgAAIAEANIACAAIADgEQAFgEAIgEQAJgEAMAAQASAAALAJQANAJAGAQQAHAQAAAWQAAAYgHAQQgGARgOAKQgMAKgSAAQgLAAgIgDIgLgFIgDgDIgBAAIAABQIgnABgAgPhUQgFADgDADIgDAEIAABSIACADIAIAEQAEADAHAAQAJAAAGgFQAHgFAEgLQADgMAAgVQAAgUgDgLQgEgLgGgFQgFgEgIAAQgIAAgFADg");
	this.shape_14.setTransform(-42,32.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAeBeIAAimIg7AAIAACmIgoAAIAAi7ICLAAIAAC7g");
	this.shape_15.setTransform(-59.6,26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.7,6.7,265.1,38.7);


(lib.всевид2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWBIIAAhAIgrAAIAABAIgnAAIAAiPIAnAAIAAA8IArAAIAAg8IAnAAIAACPg");
	this.shape.setTransform(199.9,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYBkIAAhkIg3BkIgeAAIAAiPIAmAAIAABeIAzheIAiAAIAACPgAgXhDQgJgFgEgHQgEgHgBgFIAAgGIAegCIAAADIAAACIgBAEQAAAEADADQAEAEAIAAQAKAAAEgEQADgDAAgEIgBgEIgBgCIAAgDIAfACIgBAGQAAAFgEAHQgEAHgKAFQgJAGgSAAQgQAAgKgGg");
	this.shape_1.setTransform(184.1,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBHQgFgEgBgKIgCAAIgDAFQgDAEgIAFQgHAEgPAAQgUAAgMgKQgMgKAAgSQAAgOAIgJQAIgKAMgEQAMgFAOgDQAMgDALgBIAAgIQAAgNgCgIQgDgIgFgCQgDgEgJABQgHAAgIACIgNAFIgGADIgEgSIAHgDQAGgDAKgDQAKgDAMAAQAPAAANAFQAMAEAHALQAHALAAAUIAABAQAAAJACADQACADACAAIAGgBIAEgBIABAPIgGACIgMADIgOABQgJAAgEgEgAgPALQgLAGAAAPQAAAMAFAGQAEAGAIAAQAIAAADgEQAFgEACgEIACgEIAAgmQgQACgKAHg");
	this.shape_2.setTransform(168.7,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5BKIgEgBIACgXIABAAIACAAQAMgBAIgPQAHgPAEgZQACgdAAgmIBVAAIAACPIgnAAIAAh5IgYAAQAAAkgGAbQgGAcgLARQgMARgRAAIgEAAg");
	this.shape_3.setTransform(153.2,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWBIIAAhAIgrAAIAABAIgnAAIAAiPIAnAAIAAA8IArAAIAAg8IAmAAIAACPg");
	this.shape_4.setTransform(138.8,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxA4QgRgUAAgkQAAgjARgTQARgUAgAAQAgAAASAUQARATAAAjQAAAkgSAUQgSATgfAAQggAAgRgTgAgOgyQgGAGgCAMQgDAMAAAUQAAAUADAMQACANAGAFQAGAGAIAAQAJAAAGgGQAFgFADgNQACgLAAgVQAAgUgCgMQgDgMgFgGQgGgFgJABIAAgBQgJAAgFAFg");
	this.shape_5.setTransform(123.3,28.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBEQgQgIgIgQQgIgQAAgaQAAgYAIgRQAIgSAPgIQAOgJASAAQAbAAAOARQAPAQAAAgIgBAMIgBAFIhMAAQAAAaAIALQAHALAPgBQAHAAAHgDQAGgCAEgEIAHgHIACgDIANAKIgDAFQgCAEgHAGQgGAFgJAEQgLAFgNAAIgDAAQgRAAgOgHgAgIg0QgEAEgDALQgCAKgBASIAqAAIAAgHQAAgWgFgJQgFgJgKAAQgGAAgGAEg");
	this.shape_6.setTransform(101.5,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBIIAAh6IgpAAIAAgVIB3AAIAAAVIgpAAIAAB6g");
	this.shape_7.setTransform(88.2,28.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXBkIAAhkIg2BkIgeAAIAAiPIAnAAIAABeIAzheIAhAAIAACPgAgWhDQgKgFgFgHQgDgHAAgFIgBgGIAegCIAAADIgBACIAAAEQAAAEADADQAEAEAIAAQAKAAADgEQAEgDAAgEIgBgEIAAgCIAAgDIAeACIAAAGQgBAFgEAHQgEAHgJAFQgKAGgSAAQgQAAgJgGg");
	this.shape_8.setTransform(73.8,25.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWBHQgFgEgBgKIgCAAIgDAFQgDAEgIAFQgHAEgPAAQgUAAgMgKQgMgKAAgSQAAgOAIgJQAIgKAMgEQAMgFAOgDQAMgDALgBIAAgIQAAgNgCgIQgDgIgFgCQgDgEgJABQgHAAgIACIgNAFIgGADIgEgSIAHgDQAGgDAKgDQAKgDAMAAQAPAAANAFQAMAEAHALQAHALAAAUIAABAQAAAJACADQACADACAAIAGgBIAEgBIABAPIgGACIgMADIgOABQgJAAgEgEgAgPALQgLAGAAAPQAAAMAFAGQAEAGAIAAQAIAAADgEQAFgEACgEIACgEIAAgmQgQACgKAHg");
	this.shape_9.setTransform(58.4,28.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpA4QgRgTAAgkQAAgWAIgSQAIgQAQgKQAPgJAVAAQAKAAAJADIAQAFIAHADIgEATIgGgDIgNgFQgIgCgHAAQgLgBgFAEQgHAFgEANQgEAMAAAVQABAWAEANQAEAMAHAFQAFAEAJAAQAIgBAHgCQAGgEAEgDIAGgHIACgDIANAJIgCAEIgIALQgGAGgKAFQgJAEgPAAQggAAgSgTg");
	this.shape_10.setTransform(44.7,28.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAuBIIgDhdIAAgPIgBAAIgkBsIgZAAIgjhsIAAAAIgBAHIgEBlIgWAAIAIiPIAuAAIAbBmIAhhmIAtAAIAECPg");
	this.shape_11.setTransform(20.6,28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbBEQgPgIgJgQQgIgQAAgaQAAgYAIgRQAIgSAPgIQAOgJARAAQAbAAAPARQAPAQAAAgIgBAMIgBAFIhMAAQAAAaAIALQAHALAOgBQAJAAAGgDQAHgCAEgEIAGgHIACgDIANAKIgDAFQgCAEgHAGQgFAFgLAEQgJAFgOAAIgDAAQgRAAgOgHgAgHg0QgFAEgDALQgDAKAAASIAqAAIAAgHQAAgWgFgJQgEgJgMAAQgFAAgFAEg");
	this.shape_12.setTransform(4,28.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhaBIIAAiPIAmAAIAAB6IAiAAIAAh6IAlAAIAAB6IAiAAIAAh6IAmAAIAACPg");
	this.shape_13.setTransform(-13.9,28.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWBHQgFgEgBgKIgCAAIgDAFQgDAEgIAFQgHAEgPAAQgUAAgMgKQgMgKAAgSQAAgOAIgJQAIgKAMgEQAMgFAOgDQAMgDALgBIAAgIQAAgNgCgIQgDgIgFgCQgDgEgJABQgHAAgIACIgNAFIgGADIgEgSIAHgDQAGgDAKgDQAKgDAMAAQAPAAANAFQAMAEAHALQAHALAAAUIAABAQAAAJACADQACADACAAIAGgBIAEgBIABAPIgGACIgMADIgOABQgJAAgEgEgAgPALQgLAGAAAPQAAAMAFAGQAEAGAIAAQAIAAADgEQAFgEACgEIACgEIAAgmQgQACgKAHg");
	this.shape_14.setTransform(-32.2,28.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag6BIIAAiPIA4AAQATAAANAFQAMAGAHAIQAFAJAAALQAAAIgEAHQgEAGgFAEQgGAFgGACQAHAAAGADQAIAFAEAGQAEAGABAJQAAANgGAKQgGAKgOAEQgOAGgVAAgAgUA3IARAAQALgBAGgHQAGgIAAgLQAAgKgGgHQgGgFgJgBIgTAAgAgUgGIAUAAIAEgBQAEgCAEgFQADgFAAgLQAAgLgEgGQgFgHgJABIgRAAg");
	this.shape_15.setTransform(-46.5,28.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWBHQgFgEgBgKIgCAAIgDAFQgDAEgIAFQgHAEgPAAQgUAAgMgKQgMgKAAgSQAAgOAIgJQAIgKAMgEQAMgFAOgDQAMgDALgBIAAgIQAAgNgCgIQgDgIgFgCQgDgEgJABQgHAAgIACIgNAFIgGADIgEgSIAHgDQAGgDAKgDQAKgDAMAAQAPAAANAFQAMAEAHALQAHALAAAUIAABAQAAAJACADQACADACAAIAGgBIAEgBIABAPIgGACIgMADIgOABQgJAAgEgEgAgPALQgLAGAAAPQAAAMAFAGQAEAGAIAAQAIAAADgEQAFgEACgEIACgEIAAgmQgQACgKAHg");
	this.shape_16.setTransform(-68.9,28.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWBIIAAhAIgrAAIAABAIgnAAIAAiPIAnAAIAAA8IArAAIAAg8IAnAAIAACPg");
	this.shape_17.setTransform(-84.3,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.2,6.7,304.1,38.7);


(lib._146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676766").s().p("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");
	this.shape.setTransform(219.6,233.3,1.283,1.283);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#676766").s().p("AIGHqQhmh7AAjmQAAgdACguIADg7QATk0BrieQBmiVCsAAQBPAABWAgQArAPAbAPIgTBRQgYgOglgPQhMgehEABQkNAAgPHmQBuhyCcAAQCmAABiBmQBgBiAACoQAACshcBuQhkB2ixAAQi7AAhkh7gAKCgfQguAfghA0IACACQgEAPgDAlQgDApAAAfQAAFjD6AAQB3AAA6hfQA0hSAAiRQAAiEg4hNQg+hSh2AAQhYAAhEAxgAgJJTIAAktIoCAAIgJhFQBLiVBTjmQBTjoA5jiIB/AQQg3DThhDpQhNC6heCxIGlAAIAcp4IBpAAIAAJ4ICCAAIAABKIiCAJIAAEtgAuZJTIAAw8IjdB7IgehHIERifIBuAAIAASng");
	this.shape_1.setTransform(348.6,9.6,1.283,1.283);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#676766").s().p("AjDMJQhWgUg7gjQg7glgfg0Qgfg0gBhBQAAgvAVg7IgEgUIgBgaQABglAMgrQAMguAdgzQAcgzAyg+QAyhBBHhEICFiFQBMhMA6gvQBCgyAygcQA2geArgMQAtgMAjAAQAyAAAlATQAlAUAWAVQAMAMgBALQABAHgEAEIgIAJIiaCcQgFAFgFABIgKACQgOAAgLgIQgagSgYgIQgXgJgZAAQguAAgyAfQguAfhGBDIhiBgQhCBBggAzQgeAzAAAtQAAAaAIAYQAJAaARAZIAIANQACAIAAAEQAAAKgKAKIiYCYQgLALgLAAQgLAAgLgNIgMgOIAAAUQAAAtAbApQAbAqAyAdQAyAeBLATQBIARBfABQBtAABggaQBigcBPgvQBSgyBAhCQA/hEAuhSQArhRAZhgQAYhfAAhlQAAhigZhhQgXhdgthUQguhShBhDQg/hDhTgxQhSgwhegaQhegbhtAAQhrAAheAbQhfAahSAwQhRAwhBBEQg/BCgvBTQgsBRgZBgQgYBfAABkQAACaA0B+QAzB7BfBpIgvAqQg3g8gjg2Qgng4gchEQgbhDgOhLQgPhRAAhZQAAhtAbhnQAahmAzhbQAyhZBGhHQBHhJBYgyQBag0BlgcQBogcBvAAQBxAABpAcQBnAcBYA0QBXAyBHBJQBHBHAxBZQAzBbAaBmQAaBmAABuQAABvgaBoQgaBmgzBZQgxBYhHBJQhHBIhXAzQhZAzhmAcQhlAbh1AAQhsABhXgUg");
	this.shape_2.setTransform(39.4,9.6,1.283,1.283);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-92.7,562,358.1);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telega();
	this.instance.parent = this;
	this.instance.setTransform(-15,-16,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-16,94.5,103.6);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgE7AoKQsNg/AAAGQAAAHudozQuAohgcgLQAOgJEBlaQADADBD8eQBD8gABACUAACAADAmVgASUAmTgARAADAACQACADgLDBQgMDBABACQACADgBWlQgBWjAECXQAFCYCCmqQCCmqEJIKQEKIJunJPQunJPiHkBQiGkAkTGQQkTGQAAAGIgIAAQhGAAq9g4g");
	mask.setTransform(248.6,247.4);

	// Слой 1
	this.instance = new lib.comp();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.173,1.173);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,489,431.6);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AzkHWIAAurMAj6AAAIAAOrg");
	var mask_graphics_1 = new cjs.Graphics().p("AzkHXIAAutMAnJAAAIAAOtg");
	var mask_graphics_2 = new cjs.Graphics().p("A0/HXIAAutMAp/AAAIAAOtg");
	var mask_graphics_3 = new cjs.Graphics().p("A2NHYIAAuvMAsbAAAIAAOvg");
	var mask_graphics_4 = new cjs.Graphics().p("A3QHYIAAuvMAuhAAAIAAOvg");
	var mask_graphics_5 = new cjs.Graphics().p("A4HHZIAAuxMAwPAAAIAAOxg");
	var mask_graphics_6 = new cjs.Graphics().p("A4xHZIAAuxMAxjAAAIAAOxg");
	var mask_graphics_7 = new cjs.Graphics().p("A5QHZIAAuxMAyhAAAIAAOxg");
	var mask_graphics_8 = new cjs.Graphics().p("A5iHZIAAuxMAzFAAAIAAOxg");
	var mask_graphics_9 = new cjs.Graphics().p("A5oHZIAAuxMAzRAAAIAAOxg");
	var mask_graphics_10 = new cjs.Graphics().p("A5jHKIAAuTMAzHAAAIAAOTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-125.3,y:32.3}).wait(1).to({graphics:mask_graphics_1,x:-97.5,y:32.2}).wait(1).to({graphics:mask_graphics_2,x:-63.8,y:32.2}).wait(1).to({graphics:mask_graphics_3,x:-34.7,y:32.1}).wait(1).to({graphics:mask_graphics_4,x:-10,y:32.1}).wait(1).to({graphics:mask_graphics_5,x:10.2,y:32}).wait(1).to({graphics:mask_graphics_6,x:25.9,y:32}).wait(1).to({graphics:mask_graphics_7,x:37.1,y:32}).wait(1).to({graphics:mask_graphics_8,x:43.9,y:32}).wait(1).to({graphics:mask_graphics_9,x:46.1,y:32}).wait(1).to({graphics:mask_graphics_10,x:46.1,y:31.9}).wait(5));

	// Слой 4
	this.instance = new lib.всевиды();
	this.instance.parent = this;
	this.instance.setTransform(180.3,12.1,0.85,0.85,0,0,0,93,22.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:58.9,regY:29.5,x:129.2,y:18.2},0).wait(1).to({x:109.8},0).wait(1).to({x:92.9},0).wait(1).to({x:78.7},0).wait(1).to({x:67},0).wait(1).to({x:57.9},0).wait(1).to({x:51.4},0).wait(1).to({x:47.6},0).wait(1).to({x:46.3},0).wait(1).to({regX:93,regY:22.4,x:75.3,y:12},0).wait(5));

	// Слой 6 - копия (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_2 = new cjs.Graphics().p("AzkIrIAAurMAj6AAAIAAOrg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AzkIrIAAutMAnJAAAIAAOtg");
	var mask_1_graphics_4 = new cjs.Graphics().p("A0/IrIAAuuMAp/AAAIAAOug");
	var mask_1_graphics_5 = new cjs.Graphics().p("A2NIrIAAuvMAsbAAAIAAOvg");
	var mask_1_graphics_6 = new cjs.Graphics().p("A3QIrIAAuwMAuhAAAIAAOwg");
	var mask_1_graphics_7 = new cjs.Graphics().p("A4HIrIAAuwMAwPAAAIAAOwg");
	var mask_1_graphics_8 = new cjs.Graphics().p("A4xIrIAAuxMAxjAAAIAAOxg");
	var mask_1_graphics_9 = new cjs.Graphics().p("A5QIrIAAuxMAyhAAAIAAOxg");
	var mask_1_graphics_10 = new cjs.Graphics().p("A5iIrIAAuxMAzFAAAIAAOxg");
	var mask_1_graphics_11 = new cjs.Graphics().p("A5oIrIAAuyMAzRAAAIAAOyg");
	var mask_1_graphics_12 = new cjs.Graphics().p("A5jIkIAAuSMAzHAAAIAAOSg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_1_graphics_2,x:-125.3,y:55.6}).wait(1).to({graphics:mask_1_graphics_3,x:-97.5,y:55.5}).wait(1).to({graphics:mask_1_graphics_4,x:-63.8,y:55.5}).wait(1).to({graphics:mask_1_graphics_5,x:-34.7,y:55.5}).wait(1).to({graphics:mask_1_graphics_6,x:-10,y:55.5}).wait(1).to({graphics:mask_1_graphics_7,x:10.2,y:55.5}).wait(1).to({graphics:mask_1_graphics_8,x:25.9,y:55.5}).wait(1).to({graphics:mask_1_graphics_9,x:37.1,y:55.5}).wait(1).to({graphics:mask_1_graphics_10,x:43.9,y:55.5}).wait(1).to({graphics:mask_1_graphics_11,x:46.1,y:55.5}).wait(1).to({graphics:mask_1_graphics_12,x:46.1,y:54.9}).wait(3));

	// Слой 4 - копия
	this.instance_1 = new lib.всевид2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(180.3,44,0.85,0.85,0,0,0,93,22.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regX:57.8,regY:25.9,x:128.3,y:46.9},0).wait(1).to({x:108.9},0).wait(1).to({x:92},0).wait(1).to({x:77.8},0).wait(1).to({x:66.1},0).wait(1).to({x:57},0).wait(1).to({x:50.5},0).wait(1).to({x:46.7},0).wait(1).to({x:45.4},0).wait(1).to({regX:93,regY:22.4,x:75.3,y:44},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.9,-1.4,258.5,64.9);


(lib.лого = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(208.2,25.5,2.111,2.111,0,0,0,141.7,41.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-62.8,598.5,176.5);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(117,63);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1).to({regX:32.2,regY:35.8,x:121.9,y:98.8},0).wait(1).to({x:96.6},0).wait(1).to({x:73.1},0).wait(1).to({x:51.4},0).wait(1).to({x:31.8},0).wait(1).to({x:13.9},0).wait(1).to({x:-2.1},0).wait(1).to({x:-16.2},0).wait(1).to({x:-28.4},0).wait(1).to({x:-38.7},0).wait(1).to({x:-47.2},0).wait(1).to({x:-53.8},0).wait(1).to({x:-58.5},0).wait(1).to({x:-61.3},0).wait(1).to({x:-62.3},0).wait(1).to({regX:0,regY:0,x:-94.5,y:63},0).wait(183));

	// Слой 2
	this.instance_1 = new lib.comp();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-206,-147,1.173,1.173);

	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(38.5,68.8,1,1,0,0,0,244.5,215.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(208));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:33.6,y:66.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:28.9,y:65.1},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:24.6,y:63.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:20.6,y:61.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:17,y:60.5},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:13.7,y:59.2},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:10.8,y:58.1},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:8.2,y:57},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:6,y:56.2},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:4.1,y:55.4},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:2.6,y:54.9},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:1.3,y:54.4},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:0.5,y:54},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:0,y:53.8},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-0.2,y:53.7},0).wait(1).to({regY:215.7,x:-0.1,y:53.8},0).wait(208));

	// бг
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-115,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(228));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206,-147,489,431.6);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_167 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(167).call(this.frame_167).wait(28));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("ASw/PMAAAA+fMglfAAAMAAAg+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},168).wait(27));

	// logo
	this.instance = new lib.лого();
	this.instance.parent = this;
	this.instance.setTransform(120.1,377.4,0.385,0.383,0,0,0,213,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},168).wait(27));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax6QQMAAAggfMAj1AAAMAAAAgfg");
	mask.setTransform(120.2,177);

	// Слой 7
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,132);
	this.instance_1.alpha = 0;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:38.5,regY:68.8,x:158.5,y:200.8,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:0,regY:0,x:120,y:132},0).wait(95).to({regX:38.5,regY:68.8,x:158.5,y:200.8,alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(87));

	// 146
	this.instance_2 = new lib._146();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120.7,228.7,0.3,0.3,0,0,0,218.8,122.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106).to({_off:false},0).wait(1).to({regX:219,regY:86.4,y:217.9,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({regY:122.2,y:228.7},0).wait(66).to({regX:218.8},0).wait(1).to({regX:219,regY:86.4,y:217.9,alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

	// text1
	this.instance_3 = new lib.text1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,319,0.7,0.7,0,0,0,45.7,28.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).wait(89).to({regX:64.8,regY:30.9,x:133.3,y:320.6,alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(87));

	// blue
	this.instance_4 = new lib.blue();
	this.instance_4.parent = this;
	this.instance_4.setTransform(119.9,323.4,1,1,0,0,0,115,30);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:26.5,y:319.9,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regY:30,y:323.4},0).wait(95).to({regY:26.5,y:319.9,alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(87));

	// green
	this.instance_5 = new lib.green();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,47.1,1,1,0,0,0,115,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},193).wait(2));

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},193).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.2,199,245.8,413.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;