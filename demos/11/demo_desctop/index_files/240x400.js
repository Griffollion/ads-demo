(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/man.png", id:"man"},
		{src:"images/shape1.png", id:"shape1"},
		{src:"images/shape2.png", id:"shape2"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,261);


(lib.shape1 = function() {
	this.initialize(img.shape1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,105);


(lib.shape2 = function() {
	this.initialize(img.shape2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,83);


(lib.off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape1();
	this.instance.setTransform(-70.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-52.5,141,105);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgIEXIAAouIARAAIAAIug");
	mask.setTransform(0.9,28);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#006CB5","#006CB5","#FD1F27","#FFF500","#FFF500"],[0,0.098,0.451,0.8,1],0,27.3,0,-27.3).s().p("AgIEXIAAouIARAAIAAIug");
	this.shape.setTransform(0.9,28);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,56);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcBNQgKgPAAgbQAAg2AnAAQATAAALAPQAKAMAAAbQAAAcgKAOQgKAOgUAAQgSAAgLgOgAAuAIQgEAJAAASQAAASAEAJQADAJAIAAQAQAAAAgkQAAgjgQAAQgIAAgDAIgAg8BZIBhixIAYAAIhhCxgAhWAFQgKgMAAgbQAAg4AnAAQATAAAKAOQALAPAAAbQAAAcgKAMQgKAOgUAAQgTAAgKgPgAhFg9QgDAJAAASQAAASADAJQAEAHAIAAQAQAAAAgiQAAgkgQAAQgIAAgEAJg");
	this.shape.setTransform(62.9,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsBEQgPgXAAgtQAAguAPgWQAPgXAdAAQAdAAAQAYQAPAYAAArQAAAugPAXQgPAWgeABQgcAAgQgYgAgWgyQgIAPAAAjQAAAlAIAPQAHAQAPAAQAQgBAIgQQAHgPAAgkQAAgigHgQQgIgQgQAAQgPAAgHAQg");
	this.shape_1.setTransform(45,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag4BRIAAgbQAJAGANADQANADALAAQARAAALgJQAKgIAAgRQAAgggnAAIgOABIgPADIgNgGIAHhXIBbAAIAAAaIhCAAIgEAsIALgCIAOgBQAaAAAQAPQAPALAAAZQAAAdgSAQQgSAQgeAAQgeAAgRgJg");
	this.shape_2.setTransform(30.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgtA6QgLgKAAgUQAAgVAQgIQAPgLAegBIAXgBIAAgHQAAgNgGgGQgGgHgMAAQgJABgJADQgKADgJAEIgJgVQALgFANgEQANgDAKAAQAZAAAOAMQANALAAAYIAABZIgVAAIgGgTIAAAAQgKAMgKAFQgKAFgOAAQgTAAgMgMgAALADQgTABgJAGQgJAGAAAMQAAAJAFAGQAGAEALAAQANAAAKgIQAJgJAAgQIAAgMg");
	this.shape_3.setTransform(9.5,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAaBDIg4hDIAABDIgdAAIAAiFIAdAAIAABCIA1hCIAfAAIg2BBIA8BEg");
	this.shape_4.setTransform(-3.5,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAuBbIAAgwIhbAAIAAAwIgaAAIAAhGIALAAQAOgVAIgbQAJgdABgiIBQAAIAABvIAUAAIAABGgAgMgSQgIAWgKARIA2AAIAAhZIgbAAQgCAZgHAZg");
	this.shape_5.setTransform(-19.3,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAkBDIAAhDIABgRIABgSIhCBmIgjAAIAAiFIAcAAIAABDIgCAkIBChnIAjAAIAACFg");
	this.shape_6.setTransform(-35.4,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAbBDIg5hDIAABDIgdAAIAAiFIAdAAIAABCIA1hCIAfAAIg2BBIA8BEg");
	this.shape_7.setTransform(-50,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgtBEQgVgYAAgsQAAgaAKgVQAKgVATgLQATgLAYAAQAcAAAXALIgKAYIgUgHQgKgDgLAAQgXAAgOASQgPARAAAeQAAAhAOAQQAOARAYAAQAMAAAKgCIAWgGIAAAZQgVAIgaAAQglAAgVgXg");
	this.shape_8.setTransform(-65.7,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-19,151.9,38);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3BDIAAiEIA4AAQAygBAAAjQAAANgHAGQgIAHgNACIAAACQARABAIAGQAIAIAAANQAAATgOALQgOAJgaABgAgjAyIAjAAQAkAAgBgYQABgLgJgEQgIgGgTAAIgjAAgAgjgKIAiAAQARAAAIgEQAIgGAAgKQAAgJgHgFQgIgDgQAAIgkAAg");
	this.shape.setTransform(71.8,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAzQgRgSAAghQAAgeAQgTQAQgTAZAAQAZAAAOARQAPAQAAAbIAAALIhaAAQAAAYAMAMQALAMATAAQAVAAAVgJIAAASQgKAFgKACQgKACgNAAQgbAAgSgSgAgWgpQgKALgBATIBEAAQAAgUgJgKQgIgKgRAAQgOAAgJAKg");
	this.shape_1.setTransform(57,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAsBaIAAgvIhsAAIAAiEIAUAAIAABzIBGAAIAAhzIAUAAIAABzIATAAIAABAg");
	this.shape_2.setTransform(42.9,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAkBDIAAg2IgjAAIghA2IgXAAIAng5QgQgEgIgHQgJgKAAgPQAAgTANgKQAMgKAWAAIA6AAIAACEgAgcgaQgBAYAgAAIAhAAIAAgtIgkAAQgcAAAAAVg");
	this.shape_3.setTransform(26.5,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfAzQgQgSAAghQAAgfARgTQAQgSAcAAQAJAAAKACQAJACAGADIgGARIgPgEQgIgCgGAAQgnAAAAAyQAAAZAKANQAKANASAAQAQAAASgHIAAASQgNAHgVAAQgbAAgQgSg");
	this.shape_4.setTransform(14.7,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglAzQgSgSAAghQAAgeAQgTQAQgTAZAAQAZAAAPARQAOAQAAAbIAAALIhaAAQABAYALAMQALAMATAAQAWAAAVgJIAAASQgLAFgKACQgKACgNAAQgcAAgQgSgAgWgpQgKALgCATIBEAAQAAgUgIgKQgIgKgRAAQgNAAgKAKg");
	this.shape_5.setTransform(1.5,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA0BCIAAhsIgDAHIgHATIgiBSIgPAAIgjhTIgJgZIAABsIgSAAIAAiDIAZAAIAjBTIAJAdIACgMIAGgOIAkhWIAaAAIAACDg");
	this.shape_6.setTransform(-14.8,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag3BRIAAgUQAJAGANADQAMACANAAQATABAMgLQAMgKAAgTQAAgkgsABQgLAAgUACIgKgGIAGhTIBXAAIAAASIhFAAIgFA2QAOgCAOAAQAaAAARANQAQANAAAXQAAAdgSAPQgRAQgdAAQgfAAgQgJg");
	this.shape_7.setTransform(-37.5,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpA6QgLgKAAgTQAAgmA/gCIAWgBIAAgIQAAgQgGgHQgHgIgPAAQgPAAgVAKIgGgPQAKgGALgDQAMgDAKAAQAYAAAMALQALALAAAXIAABZIgPAAIgEgTIgBAAQgKANgKAEQgKAFgNAAQgUAAgLgLgAAMABQgWABgKAHQgLAGAAAPQAAAKAHAGQAGAGAMAAQARAAALgKQALgLAAgSIAAgNg");
	this.shape_8.setTransform(-58.6,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAlBDIAAg9IhJAAIAAA9IgUAAIAAiEIAUAAIAAA3IBJAAIAAg3IAUAAIAACEg");
	this.shape_9.setTransform(-73.1,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-19,166,38);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgEAGQgCgCAAgEQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(88,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgUAiIAAhDIAoAAIAAAJIgdAAIAAA6g");
	this.shape_1.setTransform(84,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgRAuIAkhRIgwAAIAAgKIA7AAIAAAIIgjBTg");
	this.shape_2.setTransform(77,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAGAuIAAhAIAAgQIgDADIgNAMIgFgHIAWgTIAJAAIAABbg");
	this.shape_3.setTransform(68.7,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgVAjQgIgMAAgXQAAgXAHgLQAIgNAOAAQAOAAAIANQAIAMAAAWQAAAXgHANQgIAMgPgBQgOAAgHgMgAgOgcQgFAJAAATQAAAUAFAJQAFAJAJAAQAKAAAFgJQAEgJAAgUQAAgSgEgKQgFgJgKAAQgJAAgFAJg");
	this.shape_4.setTransform(62.1,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgdAuIAAgJIAZgYIAMgOIAGgJQABgFAAgFQAAgIgFgEQgEgEgGAAQgFAAgGABQgFACgGAFIgGgHQANgKAPAAQALAAAHAGQAIAHAAALQAAAJgFAJQgFAGgNAOIgTATIAAAAIAuAAIAAAKg");
	this.shape_5.setTransform(54.7,-1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgEAGQgCgCAAgEQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_6.setTransform(49.2,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgVAjQgIgMAAgXQAAgXAHgLQAIgNAOAAQAOAAAIANQAIAMAAAWQAAAXgHANQgIAMgPgBQgOAAgHgMgAgOgcQgFAJAAATQAAAUAFAJQAFAJAJAAQAKAAAFgJQAEgJAAgUQAAgSgEgKQgFgJgKAAQgJAAgFAJg");
	this.shape_7.setTransform(43.8,-1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAGAuIAAhAIAAgQIgDADIgNAMIgFgHIAWgTIAJAAIAABbg");
	this.shape_8.setTransform(35.5,-1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgEAGQgCgCAAgEQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_9.setTransform(30.9,2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AAGAuIAAhAIAAgQIgDADIgNAMIgFgHIAWgTIAJAAIAABbg");
	this.shape_10.setTransform(24.6,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgRAuQgGgBgGgDIAAgKIANAFIANABQAWAAAAgTQAAgRgYAAIgKAAIAAgHIAKAAQAIAAAHgFQAGgEAAgJQAAgHgEgDQgFgEgHAAQgFAAgGABQgFACgHAEIgFgHQAFgEAIgDQAHgCAIAAQAMAAAIAGQAHAGAAALQAAAJgFAFQgFAGgJACIAAAAQALABAGAEQAFAGAAAJQAAAOgJAHQgJAHgPAAQgIAAgGgBg");
	this.shape_11.setTransform(17.9,-1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgPAfQgIgEgEgIQgDgJAAgKQAAgQAIgJQAJgKANAAQAOAAAJAKQAIAKAAAPQAAAQgIAKQgJAKgOAAQgIAAgHgFgAgOgTQgGAHAAAMQAAANAGAHQAFAHAJAAQAKAAAFgHQAGgHAAgNQAAgMgGgHQgFgHgKAAQgJAAgFAHg");
	this.shape_12.setTransform(6.9,-0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AASAiIAAg6IgjAAIAAA6IgLAAIAAhDIA5AAIAABDg");
	this.shape_13.setTransform(-1,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgWAuIAAgJQAFABAGAAQAOAAAIgJQAHgKABgTIAAAAQgEAFgGADQgFADgGAAQgNAAgGgIQgIgFAAgNQAAgPAIgIQAJgIAMAAQAIAAAHAFQAHAEAEAKQAEAJAAANQAAA0gpAAQgGAAgFgBgAgNggQgGAGAAALQABAJAEAFQAFADAJAAQAEAAAFgCQAEAAADgEQADgEAAgFQAAgHgDgFQgCgGgEgDQgGgDgEAAQgIAAgFAFg");
	this.shape_14.setTransform(-12.2,-1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgVAjQgIgMAAgXQAAgXAHgLQAIgNAOAAQAOAAAIANQAIAMAAAWQAAAXgHANQgIAMgPgBQgOAAgHgMgAgOgcQgFAJAAATQAAAUAFAJQAFAJAJAAQAKAAAFgJQAEgJAAgUQAAgSgEgKQgFgJgKAAQgJAAgFAJg");
	this.shape_15.setTransform(-19.6,-1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgEAGQgCgCAAgEQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_16.setTransform(-25.1,2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AAGAuIAAhAIAAgQIgDADIgNAMIgFgHIAWgTIAJAAIAABbg");
	this.shape_17.setTransform(-31.4,-1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgVAjQgIgMAAgXQAAgXAHgLQAIgNAOAAQAOAAAIANQAIAMAAAWQAAAXgHANQgIAMgPgBQgOAAgHgMgAgOgcQgFAJAAATQAAAUAFAJQAFAJAJAAQAKAAAFgJQAEgJAAgUQAAgSgEgKQgFgJgKAAQgJAAgFAJg");
	this.shape_18.setTransform(-38,-1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgQAaQgHgJgBgRQABgQAHgJQAJgKAOAAIAJABIAJADIgDAJIgIgCIgHgBQgUAAAAAZQAAANAFAGQAFAHAJAAQAIAAAKgDIAAAJQgIAEgKAAQgNAAgJgKg");
	this.shape_19.setTransform(-48,-0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AASAiIAAgcIgRAAIgRAcIgMAAIAUgdQgIgCgEgDQgFgFAAgIQAAgJAHgGQAGgFAMAAIAdAAIAABDgAgOgNQAAAMAPAAIARAAIAAgXIgSAAQgOAAAAALg");
	this.shape_20.setTransform(-58.7,-0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AAUAiIAAgoIAAgJIAAgIIgjA5IgNAAIAAhDIAKAAIAAAqIgBALIAAAEIAjg5IANAAIAABDg");
	this.shape_21.setTransform(-66,-0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AAXAuIAAgYIg4AAIAAhDIALAAIAAA6IAjAAIAAg6IALAAIAAA6IAKAAIAAAhg");
	this.shape_22.setTransform(-73.8,0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AAOAiIgdgiIAAAiIgLAAIAAhDIALAAIAAAhIAbghIANAAIgdAhIAfAig");
	this.shape_23.setTransform(-81.2,-0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AAdAuIgLgdIgjAAIgMAdIgLAAIAlhbIAHAAIAlBbgAgDgUIgLAbIAcAAIgKgbIgEgNIgDANg");
	this.shape_24.setTransform(-89.2,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.3,-12.9,190.6,21.7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBXQgEgEAAgJQAAgQANAAQAHgBADAEQAEAFAAAIQAAAIgEAEQgEAFgGAAQgFAAgEgEgAgFAmIgGiAIAXAAIgGCAg");
	this.shape.setTransform(104.3,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0BCIAAhsIgDAHIgHATIgiBSIgPAAIgjhTIgJgZIAABsIgSAAIAAiDIAZAAIAjBTIAJAdIACgMIAGgOIAkhWIAaAAIAACDg");
	this.shape_1.setTransform(94.3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpA6QgLgKAAgTQAAgmA/gCIAWgBIAAgIQAAgQgGgHQgHgIgPAAQgPAAgVAKIgGgPQAKgGALgDQAMgDAKAAQAYAAAMALQALALAAAXIAABZIgPAAIgEgTIgBAAQgKANgKAEQgKAFgNAAQgUAAgLgLgAAMABQgWABgKAHQgLAGAAAPQAAAKAHAGQAGAGAMAAQARAAALgKQALgLAAgSIAAgNg");
	this.shape_2.setTransform(80.3,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBDIg7hDIAABDIgUAAIAAiEIAUAAIAABBIA4hBIAWAAIg3BAIA8BEg");
	this.shape_3.setTransform(70.7,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmBDIAAhQIABgQIAAgRIhGBxIgZAAIAAiEIATAAIAABSIgBAXIAAAHIBGhwIAZAAIAACEg");
	this.shape_4.setTransform(57.8,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBDIAAg9IhJAAIAAA9IgUAAIAAiEIAUAAIAAA3IBJAAIAAg3IAUAAIAACEg");
	this.shape_5.setTransform(44.5,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBaIAAgvIhbAAIAAAvIgUAAIAAhAIALAAQAQgWAJgcQAKgeAAgjIBCAAIAABzIATAAIAABAgAgLgSQgJAagNASIA8AAIAAhjIgcAAQgBAcgJAbg");
	this.shape_6.setTransform(31.9,5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7BeIAAgQQAGACAJAAQAVAAAJgYIAHgTIg2iEIAWAAIAdBMQAKAYAAAMIABAAIAHgUIAhhcIAVAAIg5CWQgHAWgLAKQgLAKgRgBQgJAAgJgCg");
	this.shape_7.setTransform(20.9,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag6BhIAAi/IARAAIADASIABAAQAHgLALgFQAKgFALABQAbgBAPATQAPASAAAgQAAAggPASQgPASgbAAQgLAAgKgFQgLgEgHgKIgBAAIABAVIAAA3gAgchEQgJALAAAZIAAAEQAAAcAJALQAKAMASAAQARAAAKgOQALgMgBgZQABgZgLgNQgKgNgRAAQgTgBgJAMg");
	this.shape_8.setTransform(9.9,5.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJBDIAAhzIgrAAIAAgRIBpAAIAAARIgsAAIAABzg");
	this.shape_9.setTransform(-1.5,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA8QgOgIgHgQQgIgQAAgUQAAgfARgTQAQgSAbAAQAcAAARATQAQASAAAfQAAAggQASQgRATgcAAQgRAAgOgJgAgdgmQgKANAAAZQAAAZAKANQAKAOATAAQATAAAKgOQALgNAAgZQAAgYgLgNQgKgOgTAAQgSAAgLANg");
	this.shape_10.setTransform(-12.3,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAzQgQgSAAghQAAgfARgTQAQgSAcAAQAJAAAKACQAJACAGADIgGARIgPgEQgIgCgGAAQgnAAAAAyQAAAZAKANQAKANASAAQAQAAASgHIAAASQgNAHgVAAQgbAAgQgSg");
	this.shape_11.setTransform(-23.1,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA0BCIAAhsIgDAHIgHATIgiBSIgPAAIgjhTIgJgZIAABsIgSAAIAAiDIAZAAIAjBTIAJAdIACgMIAGgOIAkhWIAaAAIAACDg");
	this.shape_12.setTransform(-40,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAmBDIAAhQIABgQIAAgRIhGBxIgZAAIAAiEIATAAIAABSIgBAXIAAAHIBGhwIAZAAIAACEg");
	this.shape_13.setTransform(-54.6,3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhYBDIAAiEIAUAAIAAByIA7AAIAAhyIASAAIAAByIA8AAIAAhyIAUAAIAACEg");
	this.shape_14.setTransform(-71.1,3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpA6QgLgKAAgTQAAgmA/gCIAWgBIAAgIQAAgQgGgHQgHgIgPAAQgPAAgVAKIgGgPQAKgGALgDQAMgDAKAAQAYAAAMALQALALAAAXIAABZIgPAAIgEgTIgBAAQgKANgKAEQgKAFgNAAQgUAAgLgLgAAMABQgWABgKAHQgLAGAAAPQAAAKAHAGQAGAGAMAAQARAAALgKQALgLAAgSIAAgNg");
	this.shape_15.setTransform(-87.1,3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag3BDIAAiEIA4AAQAzgBAAAjQgBANgHAGQgIAHgNACIAAACQARABAIAGQAIAIAAANQAAATgOALQgOAJgaABgAgjAyIAjAAQAkAAgBgYQABgLgJgEQgIgGgTAAIgjAAgAgjgKIAjAAQAQAAAIgEQAIgGAAgKQgBgJgGgFQgJgDgPAAIgkAAg");
	this.shape_16.setTransform(-97.5,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.3,-19,214.8,38);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtA6QgLgKAAgUQAAgVAQgIQAPgLAegBIAXgBIAAgHQAAgNgGgGQgGgHgMAAQgJABgJADQgKADgJAEIgJgVQALgFANgEQANgDAKAAQAZAAAOAMQANALAAAYIAABZIgVAAIgGgTIAAAAQgKAMgKAFQgKAFgOAAQgTAAgMgMgAALADQgTABgJAGQgJAGAAAMQAAAJAFAGQAGAEALAAQANAAAKgIQAJgJAAgQIAAgMg");
	this.shape.setTransform(105.8,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAzBDIAAhrIgCAHIgJAdIgeBHIgUAAIgdhHQgGgQgFgUIAABrIgbAAIAAiFIAmAAIAeBFIAJAkIAAgFIAJgdIAehHIAnAAIAACFg");
	this.shape_1.setTransform(90.1,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggA9QgPgJgIgPQgHgRgBgUQABggAQgSQARgTAdAAQAdABARASQARAUAAAeQAAAhgQASQgSASgdABQgSAAgOgJgAgZghQgIAMAAAVQAAAuAhAAQAiAAgBguQABgtgiAAQgRAAgIAMg");
	this.shape_2.setTransform(73.7,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuBbIAAgwIhbAAIAAAwIgaAAIAAhGIALAAQAOgVAIgbQAJgdABgiIBQAAIAABvIAUAAIAABGgAgMgSQgIAWgKARIA2AAIAAhZIgbAAQgCAZgHAZg");
	this.shape_3.setTransform(59.3,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBDIAAg0IgbAAIgeA0IghAAIAmg4QgOgDgHgIQgJgLAAgOQABgTANgLQAOgLAXAAIA8AAIAACFgAgQgoQgGAGgBAJQAAAKAIAGQAIAFALAAIAbAAIAAgoIgfAAQgKAAgGAEg");
	this.shape_4.setTransform(39,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhABBIAAgWQAFACAEAAQANAAAHgcQAHgbAEg5IBZAAIAACFIgdAAIAAhuIgkAAQgDArgGAWQgFAYgKAMQgJALgPAAQgJAAgHgDg");
	this.shape_5.setTransform(25.1,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBbIAAgwIhbAAIAAAwIgaAAIAAhGIALAAQAOgVAIgbQAJgdABgiIBQAAIAABvIAUAAIAABGgAgMgSQgIAWgKARIA2AAIAAhZIgbAAQgCAZgHAZg");
	this.shape_6.setTransform(11.8,5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBDIAAhuIgsAAIAAgXIBzAAIAAAXIgsAAIAABug");
	this.shape_7.setTransform(-6.8,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoAzQgSgSAAggQAAgfAQgUQARgSAagBQAbAAAQARQAPAQAAAdIAAANIhYAAQABAUAKAKQAKALAQAAQAMgBAKgBQALgDALgFIAAAYQgKAEgLACQgKACgOABQgegBgRgSgAgSgmQgJAIgBARIA7AAQAAgRgIgIQgIgJgOAAQgLAAgIAJg");
	this.shape_8.setTransform(-19.4,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfBDIAAg6Ig+AAIAAA6IgcAAIAAiFIAcAAIAAA2IA+AAIAAg2IAdAAIAACFg");
	this.shape_9.setTransform(-33.7,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag8BiIAAjBIAXAAIAEASIACAAQANgUAZAAQAZAAAPASQAOASAAAiQAAAfgPASQgOATgZAAQgYAAgOgTIgCAAIACAVIAAA3gAgXhAQgIAKAAAWIAAAFQAAAYAIAJQAIALAPAAQAPAAAIgMQAIgKAAgXQAAgWgIgMQgIgMgPAAQgPAAgIAKg");
	this.shape_10.setTransform(-48.2,5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoAzQgSgSAAggQAAgfAQgUQARgSAagBQAbAAAQARQAPAQAAAdIAAANIhYAAQABAUAKAKQAKALAQAAQAMgBAKgBQALgDALgFIAAAYQgKAEgLACQgKACgOABQgegBgRgSgAgSgmQgJAIgBARIA7AAQAAgRgIgIQgIgJgOAAQgLAAgIAJg");
	this.shape_11.setTransform(-62.6,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNBDIAAhuIgsAAIAAgXIBzAAIAAAXIgsAAIAABug");
	this.shape_12.setTransform(-75.2,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAgBDIAAg6Ig/AAIAAA6IgcAAIAAiFIAcAAIAAA2IA/AAIAAg2IAcAAIAACFg");
	this.shape_13.setTransform(-88.6,3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAkBDIAAhDIABgRIABgSIhCBmIgjAAIAAiFIAcAAIAABDIgCAkIBChnIAjAAIAACFg");
	this.shape_14.setTransform(-104.2,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.6,-19,229.4,38);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBCQgEgEAAgJQAAgIAEgEQADgEAGAAQAGAAAEAEQAEAEAAAIQAAAIgEAFQgEAEgGAAQgFAAgEgEgAgJgoQgEgEAAgIQAAgRANAAQAOAAAAARQAAAHgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(106.2,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBDQgVgYAAgrQAAgaAKgVQALgVATgLQAUgLAYAAQAcAAAVAKIgJASQgVgKgTAAQgcAAgRAUQgRATAAAhQAAAjAQATQARATAcAAQATAAAYgHIAAASQgSAHgcAAQglAAgWgYg");
	this.shape_1.setTransform(96.5,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBXIAAgVQAMAFALAAQAOAAAIgGQAHgGAJgRIhFiDIAWAAIA0BjIAEAMIABAAIAEgNIAshiIAXAAIg6B9QgKAYgIAKQgGALgLAEQgKAFgPAAQgOAAgKgDg");
	this.shape_2.setTransform(81.6,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvBZIAAhUIhcAAIAABUIgVAAIAAixIAVAAIAABMIBcAAIAAhMIAUAAIAACxg");
	this.shape_3.setTransform(65.4,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8BEQgUgZgBgrQABgqAUgYQAWgYAmgBQAmABAWAYQAVAYAAAqQAAArgVAYQgWAZgmAAQgmAAgWgYgAgsg1QgPATAAAiQAAAkAPASQAQAUAcAAQAdAAAPgUQAPgSABgkQgBgigPgTQgPgTgdAAQgcAAgQATg");
	this.shape_4.setTransform(47.5,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5BZIAAixIBoAAIAAATIhSAAIAAA5IAbAAQAWAAAPAGQAOAFAHAJQAHALAAASQABAagRANQgQANgdAAgAgjBHIAdAAQAUAAAMgIQAKgIAAgSQAAgSgLgHQgLgHgZAAIgYAAg");
	this.shape_5.setTransform(31.7,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglAzQgSgSAAghQAAgeAQgTQAQgTAZAAQAZAAAPARQAOAQAAAbIAAALIhaAAQAAAYAMAMQALAMASAAQAWAAAWgJIAAASQgLAFgKACQgKACgNAAQgcAAgQgSgAgWgpQgKALgCATIBEAAQAAgUgIgKQgIgKgRAAQgNAAgKAKg");
	this.shape_6.setTransform(11.9,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBDIAAhzIgrAAIAAgRIBpAAIAAARIgsAAIAABzg");
	this.shape_7.setTransform(0,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmBDIAAhQIABgQIAAgRIhGBxIgZAAIAAiEIATAAIAABSIgBAXIAAAHIBGhwIAZAAIAACEg");
	this.shape_8.setTransform(-12.7,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAjBDIAAg9QgNAIgLAEQgLAEgLAAQgVAAgLgKQgLgLAAgQIAAgyIAUAAIAAAwQAAAWAbAAQAJAAAKgDQAKgCANgIIAAg5IAUAAIAACEg");
	this.shape_9.setTransform(-27.4,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag7BeIAAgQQAGACAJAAQAVAAAJgYIAHgTIg2iEIAWAAIAdBMQAKAYAAAMIABAAIAHgUIAhhcIAVAAIg5CWQgHAWgLAKQgLAKgRgBQgJAAgJgCg");
	this.shape_10.setTransform(-40.2,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag6BCIAAgPIAGABQAOAAAJgeQAHgcAFg8IBMAAIAACEIgVAAIAAhzIgmAAQgDAsgFAXQgHAagJAMQgJALgOAAQgHAAgEgBg");
	this.shape_11.setTransform(-53.5,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfA8QgOgIgHgQQgIgQAAgUQAAgfARgTQAQgSAbAAQAcAAARATQAQASAAAfQAAAggQASQgRATgcAAQgRAAgOgJgAgdgmQgKANAAAZQAAAZALANQAJAOATAAQATAAAKgOQALgNAAgZQAAgYgLgNQgKgOgTAAQgSAAgLANg");
	this.shape_12.setTransform(-66.2,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAjBDIAAhyIhGAAIAAByIgUAAIAAiEIBvAAIAACEg");
	this.shape_13.setTransform(-80.6,3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAmBDIAAhQIABgQIAAgRIhGBxIgZAAIAAiEIATAAIAABSIgBAXIAAAHIBGhwIAZAAIAACEg");
	this.shape_14.setTransform(-100.8,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.7,-19,221.5,38);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkQD2IAKmJIB1hdIDJgFIDZBxIAAF6g");
	mask.setTransform(3.1,12.4);

	// Слой 2
	this.instance = new lib.shape2();
	this.instance.setTransform(-58.5,-41.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,-12.2,54.8,49.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoFHLQgSAAgIgEIgIgDQgFgCgDAAQgFAAgIAGQgJAEgJgDQgKgCgEgJQgEgHAAgNIgBgvQAAgYAJgIQAEgFAHgCQAHgBAGACIAMAIIAHAEIABgBQAEgFAEgCIAAgDIAAgOQACgGAFgFQAGgFAHgBQAFAAABgBIgBAAQANgCAMAJQALAJABANQAMgJAOgBQAQAAAJAKIADAEIAFg8QAFhOgBgIIgolDIH0lNIH8DTIgwF0IATDAIARgFIACgBIAAAAQAVgCALABQASACALAJQAKAJADANIABAOIgBAPIABAPQAAAJgCAGQgFAPgTAKIgNAIIgMAKQgIAGgTgBIggAAQgVAAgIgEIgBgBIgFAIIp8ADIjPAEIgOABgAiogzIgXCrIAAD4IFuAJICRgFIgcmgIh/g0g");
	mask.setTransform(-3.5,-0.5);

	// Слой 2
	this.instance = new lib.shape2();
	this.instance.setTransform(-58.5,-41.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-41.5,116,83);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAzQgQgSAAghQAAgfARgTQAQgSAcAAQAJAAAKACQAJACAGADIgGARIgPgEQgIgCgGAAQgnAAAAAyQAAAZAKANQAKANASAAQAQAAASgHIAAASQgNAHgVAAQgbAAgQgSg");
	this.shape.setTransform(95.3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmBDIAAhQIABgQIAAgRIhGBxIgZAAIAAiEIATAAIAABSIgBAXIAAAHIBGhwIAZAAIAACEg");
	this.shape_1.setTransform(81.1,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJB8IAAg6QgegCgRgSQgSgSAAgdQAAgeASgSQARgSAfgCIAAg2IARAAIAAA2QAfACASATQARASAAAdQAAAdgRASQgSASgfACIAAA6gAAJAxQAYgBAKgOQALgNAAgWQAAgvgtgEgAgpgmQgMANAAAYQAAAWALANQAKAOAYABIAAhlQgXACgKAMg");
	this.shape_2.setTransform(64.3,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfA8QgOgIgIgQQgHgQAAgUQAAgfAQgTQARgSAbAAQAcAAAQATQARASAAAfQAAAggRASQgQATgcAAQgRAAgOgJgAgdgmQgKANAAAZQAAAZALANQAKAOASAAQAUAAAJgOQALgNAAgZQAAgYgLgNQgJgOgUAAQgTAAgKANg");
	this.shape_3.setTransform(47.8,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BDIAAiEIA4AAQAzgBAAAjQAAANgIAGQgHAHgOACIAAACQARABAIAGQAIAIAAANQAAATgOALQgNAJgbABgAgjAyIAjAAQAkAAAAgYQAAgLgJgEQgIgGgTAAIgjAAgAgjgKIAjAAQARAAAHgEQAIgGgBgKQAAgJgGgFQgJgDgPAAIgkAAg");
	this.shape_4.setTransform(27.4,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBDIAAhzIgrAAIAAgRIBpAAIAAARIgsAAIAABzg");
	this.shape_5.setTransform(7.2,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAzQgRgSAAghQAAgeAQgTQAQgTAZAAQAZAAAOARQAPAQAAAbIAAALIhaAAQAAAYAMAMQALAMATAAQAVAAAVgJIAAASQgKAFgKACQgKACgNAAQgbAAgSgSgAgWgpQgKALgBATIBEAAQAAgUgJgKQgIgKgRAAQgOAAgJAKg");
	this.shape_6.setTransform(-5.6,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBDIAAg9IhJAAIAAA9IgUAAIAAiEIAUAAIAAA3IBJAAIAAg3IAUAAIAACEg");
	this.shape_7.setTransform(-20.6,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag6BhIAAi/IARAAIADASIAAAAQAIgLALgFQALgFAKABQAbgBAPATQAOASAAAgQAAAggOASQgPASgbAAQgKAAgLgFQgLgEgIgKIgBAAIABAVIAAA3gAgchEQgJALgBAZIAAAEQAAAcAKALQAJAMAUAAQAQAAALgOQAKgMgBgZQABgZgKgNQgKgNgSAAQgSgBgKAMg");
	this.shape_8.setTransform(-35.7,5.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmAzQgRgSAAghQAAgeAQgTQAQgTAZAAQAZAAAOARQAPAQAAAbIAAALIhaAAQABAYALAMQALAMASAAQAXAAAUgJIAAASQgLAFgJACQgJACgOAAQgcAAgRgSgAgWgpQgKALgBATIBDAAQABgUgJgKQgJgKgPAAQgOAAgKAKg");
	this.shape_9.setTransform(-50.8,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJBDIAAhzIgrAAIAAgRIBpAAIAAARIgsAAIAABzg");
	this.shape_10.setTransform(-63.7,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAlBDIAAg9IhJAAIAAA9IgUAAIAAiEIAUAAIAAA3IBJAAIAAg3IAUAAIAACEg");
	this.shape_11.setTransform(-77.4,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAmBDIAAhQIABgQIAAgRIhGBxIgZAAIAAiEIATAAIAABSIgBAXIAAAHIBGhwIAZAAIAACEg");
	this.shape_12.setTransform(-93.3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-19,206.4,38);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAzQgRgSAAghQAAgeAQgTQAQgTAZAAQAZAAAOARQAPAQAAAbIAAALIhaAAQAAAYAMAMQALAMASAAQAWAAAVgJIAAASQgLAFgJACQgJACgOAAQgcAAgRgSgAgWgpQgKALgCATIBEAAQAAgUgIgKQgJgKgPAAQgPAAgJAKg");
	this.shape.setTransform(69.2,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBDIAAhzIgrAAIAAgRIBpAAIAAARIgsAAIAABzg");
	this.shape_1.setTransform(56.3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmBDIAAhQIABgQIAAgRIhGBxIgZAAIAAiEIATAAIAABSIgBAXIAAAHIBGhwIAZAAIAACEg");
	this.shape_2.setTransform(42.5,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBDIAAg9QgNAIgLAEQgLAEgLAAQgVAAgLgKQgLgLAAgQIAAgyIAUAAIAAAwQAAAWAbAAQAJAAAKgDQAKgCANgIIAAg5IAUAAIAACEg");
	this.shape_3.setTransform(26.9,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMA0QgPgQgCgeIgjAAIAAA8IgVAAIAAiEIAVAAIAAA4IAjAAQACgbAQgQQANgPAZAAQAcAAAPATQAPASAAAfQAAAggPASQgQATgbAAQgaAAgNgRgAAAgmQgIAOAAAYQAAAZAIANQAHAOAUAAQATAAAJgNQAKgNgBgaQAAgYgIgOQgJgNgUAAQgUAAgHANg");
	this.shape_4.setTransform(9.4,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BCIAAgPIAGABQAOAAAIgeQAJgcAEg8IBMAAIAACEIgUAAIAAhzIgnAAQgCAsgHAXQgGAagIAMQgKALgPAAQgGAAgEgBg");
	this.shape_5.setTransform(-9.5,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBDIg7hDIAABDIgUAAIAAiEIAUAAIAABBIA4hBIAWAAIg3BAIA8BEg");
	this.shape_6.setTransform(-21.2,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuBaIAAgvIhbAAIAAAvIgUAAIAAhAIALAAQAQgWAJgcQAKgeAAgjIBCAAIAABzIATAAIAABAgAgLgSQgJAagNASIA8AAIAAhjIgcAAQgBAcgJAbg");
	this.shape_7.setTransform(-35.8,5.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfA8QgOgIgHgQQgIgQAAgUQAAgfARgTQAQgSAbAAQAcAAARATQAQASAAAfQAAAggQASQgRATgcAAQgRAAgOgJgAgdgmQgKANAAAZQAAAZALANQAJAOATAAQATAAAKgOQALgNAAgZQAAgYgLgNQgKgOgTAAQgSAAgLANg");
	this.shape_8.setTransform(-50.5,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAtBZIAAieIhZAAIAACeIgVAAIAAixICDAAIAACxg");
	this.shape_9.setTransform(-67.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.3,-19,156.6,38);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkiG6IAAt6IJFAAIAALoIh2ATIAACGg");
	mask.setTransform(2.9,8.7);

	// Слой 1
	this.instance = new lib.shape1();
	this.instance.setTransform(-70.5,-52.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-36.2,58.3,88.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoqJOQgIAAgHgGQgGgFgDgIQgFgMAEgUQgMACgKgJQgKgKABgMQgNAGgPgCQgPgDgMgJQgBAFgEADIAAADIgBATQgDATgGAIQgGAIgKAFQgKAEgKgBQgMgCgGgIQgFgHAAgRIgBg8QgBgdADgRQADgaAKgRQAIgMAIgDQAJgCAEgCQAIgEADgLIABgSQABgQAHgYIALgnQAFgVADgGQAIgPAPABIgBAAQAJgBAIAHQAHAHABAKQABAMgIAZQgHAUgEATIgBAHQAKgFALABQATAAAJANQgBhSADgpQAEhEAQg0QAIgXALgKQAHgHAKgBIACAAIAAgBIATgUQAbgeAMgrQAKgiADgHQAHgMAQgRQAUgUAFgHIACgCIADhkQABglAFgWIAJggIAJgnQADgLAMgcQAKgYADgPIACgYQAAgQACgJQADgNAHgJQAAgIAGgIQAIgKALgDQAJgCANABIAXABQAeAAAzgSQA4gUAagCIEVADQAZAAAJAKQADAEACAHIAFAMQADAFAHAGIANAKQAQAOgGANQASgCALALQAFAFACAIIBBgBQAYAAAMAHQAJAEAEAKQAEAJgEAIQgGAMgWACQAFAIAAAQIgCAlQgCAXAEAOIAFARQADAKgCAHIgDAHQAEAJAAATQgBAwgDAYIgGAxIgBAaQgCAPgGAJIAAAAIAAACQAEAIgCAWIgHA1IgEArQgBAYAEATQAEAOAFAFQAEAEAKAGQAGAFAFAIIAIAPQAJASAAAJQABAPgOAHQgOAHgMgJIAABVQAAATgFAHIAIgBIAAgBQAOABAOALQAIAGAQASQAGAHAGgBQACgBAFgHQAKgTARAAQALAAAJAKQAIAJABANQAAASABADQACAFAGAJQANAWgKAXQATgBBAACQAzABAfgGQAYgFAHABQAJABAGAEQAIAFACAHQAEAPgPALQgIAGgSAEQgUAEgYACIgsAAImqAAIAAhuIAWAAIgDAZIA+gRQg6ANAEgDIAMgEIALgEQAGgDALgIQAZgRAXgJIAWgKIAPgNIAGgEIgDgBQgRgDgHgPQgEgKABgPQACgRAAgJQABgKgEgcQgEgXADgOQAIgVABgLQABgJgEgMIgGgUQgEgQAAghQAAgiADgPIAEgUIABgHQgDgIgBgMQgBgSAAghIAAg0IgCg2QAAgMADgGIADgEIgDgQQgCgPABgTIAEiQIn1gBIgugDQgUgBgQACQgPA8gBBcQACBpgDA0IgBAPQAEAJgBAUQgEBUACCvQACCugEBYQgCAYgKAIQgIAGgMgDQgKgDgGgHQgEAEgFADIgLAEQgFADgCAEQgCADAAAEIAAAIQAAAHgFAGQgFAGgIACQgHACgPgEIgtgMQgCAGgHADQgGADgIgBQgJgCgQgKQgQgIgKAHQgCAJAAARQABATgBAIQgCAPgJAKQgJAMgMAAIgBgBgAmoAOQAMABAMATIABhkIgCADQgEAHgCANQgBARgCAFQgDAJgIALIgMARIgBADQAFgDADgDg");
	mask.setTransform(0.7,6.5);

	// Слой 1
	this.instance = new lib.shape1();
	this.instance.setTransform(-70.5,-52.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-52.5,141,105);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E0E0E0").ss(2).p("AAAhGQgdAAgUAVQgWAWAAAcQAAAeAWAUQAUAVAdAAQAeAAAUgVQAWgVAAgdQAAgcgWgWQgUgVgeAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-8.2,16.4,16.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0BCIAAhsIgDAHIgHATIgiBSIgPAAIgjhTIgJgZIAABsIgSAAIAAiDIAZAAIAjBTIAJAdIACgMIAGgOIAkhWIAaAAIAACDg");
	this.shape.setTransform(84.4,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfA8QgOgIgIgQQgHgQAAgUQAAgfAQgTQARgSAbAAQAcAAAQATQARASAAAfQAAAggRASQgQATgcAAQgRAAgOgJgAgdgmQgKANAAAZQAAAZALANQAKAOASAAQAUAAAKgOQAKgNAAgZQAAgYgKgNQgLgOgTAAQgTAAgKANg");
	this.shape_1.setTransform(68.2,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAzQgQgSAAghQAAgfARgTQAQgSAcAAQAJAAAKACQAJACAGADIgGARIgPgEQgIgCgGAAQgnAAAAAyQAAAZAKANQAKANASAAQAQAAASgHIAAASQgNAHgVAAQgbAAgQgSg");
	this.shape_2.setTransform(55.4,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAzQgQgSAAghQAAgfARgTQAQgSAcAAQAJAAAKACQAJACAGADIgGARIgPgEQgIgCgGAAQgnAAAAAyQAAAZAKANQAKANASAAQAQAAASgHIAAASQgNAHgVAAQgbAAgQgSg");
	this.shape_3.setTransform(44,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfA8QgOgIgHgQQgIgQAAgUQAAgfARgTQAQgSAbAAQAcAAARATQAQASAAAfQAAAggQASQgRATgcAAQgRAAgOgJgAgdgmQgKANAAAZQAAAZAKANQAKAOATAAQATAAALgOQAKgNAAgZQAAgYgKgNQgKgOgUAAQgSAAgLANg");
	this.shape_4.setTransform(30.8,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBLQgQgWAAgnQAAgqANgYQANgZAcgHIA7gMIAFASIg7ALQgSAFgJAOQgJAPAAAbIABAAQAHgLAMgGQAMgFAMgBQAYAAAOAQQAOAPAAAcQAAAfgQASQgQARgcABQgbgBgQgVgAgLgHQgJADgHAFQgIAGgDAHQAAAgAKARQAKARATAAQAmgBgBgvQAAgrghgBQgIAAgIAFg");
	this.shape_5.setTransform(16.3,-1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0BCIAAhsIgDAHIgHATIgiBSIgPAAIgjhTIgJgZIAABsIgSAAIAAiDIAZAAIAjBTIAJAdIACgMIAGgOIAkhWIAaAAIAACDg");
	this.shape_6.setTransform(-5.9,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmBDIAAhQIABgQIAAgRIhGBxIgZAAIAAiEIATAAIAABSIgBAXIAAAHIBGhwIAZAAIAACEg");
	this.shape_7.setTransform(-22.5,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhYBDIAAiEIAUAAIAAByIA7AAIAAhyIASAAIAAByIA8AAIAAhyIAUAAIAACEg");
	this.shape_8.setTransform(-41,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfA8QgOgIgIgQQgHgQAAgUQAAgfAQgTQARgSAbAAQAcAAAQATQARASAAAfQAAAggRASQgQATgcAAQgRAAgOgJgAgdgmQgKANAAAZQAAAZALANQAKAOASAAQAUAAAKgOQAKgNAAgZQAAgYgKgNQgLgOgTAAQgTAAgKANg");
	this.shape_9.setTransform(-59.2,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5BhIAAi/IAQAAIADASIAAAAQAJgLAKgFQAKgFAMABQAbgBAOATQAPASAAAgQgBAfgPATQgOASgaAAQgMAAgKgFQgLgEgIgKIAAAAIAAAVIAAA3gAgchEQgJALgBAZIAAAEQAAAcAKALQAJAMATAAQASAAAJgOQALgMAAgZQAAgZgLgNQgJgNgSAAQgTgBgJAMg");
	this.shape_10.setTransform(-73.5,4.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfA8QgOgIgHgQQgIgQAAgUQAAgfARgTQAQgSAbAAQAcAAARATQAQASAAAfQAAAggQASQgRATgcAAQgRAAgOgJgAgdgmQgKANAAAZQAAAZAKANQAKAOATAAQATAAALgOQAKgNAAgZQAAgYgKgNQgKgOgUAAQgTAAgKANg");
	this.shape_11.setTransform(-88.6,1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAvBZIgvhPIgwBPIgWAAIA8hcIg4hVIAXAAIArBHIAshHIAWAAIg3BVIA8Bcg");
	this.shape_12.setTransform(-102.9,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.1,-20.3,207.4,38);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBXQgEgEAAgJQAAgRANABQAHgBADAEQAEAFAAAIQAAAIgEAEQgEAFgGAAQgFAAgEgEgAgFAmIgGiAIAXAAIgGCAg");
	this.shape.setTransform(59.1,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfA8QgOgIgHgQQgIgQAAgUQAAgfARgTQAQgSAbAAQAcAAARATQAQASAAAfQAAAggQASQgRATgcAAQgRAAgOgJgAgdgmQgKANAAAZQAAAZAKANQAKAOATAAQATAAALgOQAKgNAAgZQAAgYgKgNQgKgOgUAAQgSAAgLANg");
	this.shape_1.setTransform(48.8,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcBDIg7hDIAABDIgUAAIAAiEIAUAAIAABBIA4hBIAWAAIg4BAIA9BEg");
	this.shape_2.setTransform(36.1,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBDIAAiEIBPAAIAAARIg7AAIAABzg");
	this.shape_3.setTransform(24.7,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmAzQgRgSAAghQAAgeAQgTQAQgTAZAAQAZAAAOARQAPAQAAAbIAAALIhaAAQAAAYAMAMQALAMASAAQAWAAAWgJIAAASQgMAFgJACQgJACgOAAQgcAAgRgSgAgWgpQgKALgCATIBEAAQAAgUgIgKQgJgKgPAAQgPAAgJAKg");
	this.shape_4.setTransform(12,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BCIAAgPIAGABQAOAAAIgeQAJgcAEg8IBMAAIAACEIgUAAIAAhzIgnAAQgCAsgHAXQgGAagIAMQgKALgPAAQgGAAgEgBg");
	this.shape_5.setTransform(-2.6,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3BDIAAiEIAUAAIAAA3IAoAAQAzAAAAAjQAAAVgOAKQgNALgZAAgAgjAyIAmAAQAPgBAJgFQAJgGgBgLQAAgLgIgFQgHgGgSABIglAAg");
	this.shape_6.setTransform(-21.3,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBDIAAhzIgrAAIAAgRIBpAAIAAARIgsAAIAABzg");
	this.shape_7.setTransform(-34.4,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA2BDIAAiEIAUAAIAACEgAhJBDIAAiEIAUAAIAAA3IAkAAQAYAAAMAJQANAIAAASQAAAVgNAKQgNALgYAAgAg1AyIAiAAQAfAAAAgXQAAgMgIgEQgFgGgSABIgiAAg");
	this.shape_8.setTransform(-49.4,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrBLQgQgWAAgnQAAgqANgYQANgZAcgHIA8gMIADASIg6ALQgSAFgIAOQgJAPgBAbIABAAQAIgLAMgGQAMgFALgBQAYAAAOAQQAOAPAAAcQAAAfgQASQgQARgcABQgbgBgQgVgAgMgHQgIADgHAFQgHAGgEAHQAAAgAKARQAKARATAAQAlgBAAgvQABgrgjgBQgHAAgJAFg");
	this.shape_9.setTransform(-65.9,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.4,-20.3,139.6,38);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man();
	this.instance.setTransform(-120,-130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-130.5,240,261);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E0E0E0").ss(2).p("AF3A7QhHhRhiguQhjgvhrAAQhrAAhkAvQhiAuhGBRQgJAMACANQABAOAKALQAHAHAPAAQASAAAKgMQA8hIBVglQBTgnBdAAQBcAABVAnQBVAlA8BIQAIAMASAAQAPAAAHgHQAMgLABgOQACgNgKgMg");
	this.shape.setTransform(-24.5,4.9,1,1,0,0,0,-24.5,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.4,-12.6,78.9,25.3);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC1F27").s().p("AAaBKIgNgfQgLgfgYAAIgEAAIAAA+IgkAAIAAiTIAkAAIAAA+IAAAAIAvg+IApAAIg4BCQAZAEAQAlIAQAog");
	this.shape.setTransform(177,29,0.598,0.598);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC1F27").s().p("AgtA5QgTgWgBgjQAAgiASgVQATgXAeAAQAbAAASARQASASAAAfQABAKgCAGIhaAAQAAAuAuAAQAVAAAPgJIAAAcQgTAKgbAAQgjAAgUgWgAgagSIA3AAIAAgGQAAgNgHgIQgIgIgNAAQgbAAAAAjg");
	this.shape_1.setTransform(149.4,29,0.598,0.598);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FC1F27").s().p("AhDAuQALgBAFgGQAHgHAEgOQACgLAAgWIAAg8IBqAAIAACUIgkAAIAAh7IgjAAIAAAkQAAAvgOAUQgRAXgdAAg");
	this.shape_2.setTransform(158,29.1,0.598,0.598);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FC1F27").s().p("AAsBKIAAhfIgsA+Igsg+IAABfIgkAAIAAiTIAlAAIArBEIAshEIAlAAIAACTg");
	this.shape_3.setTransform(196.6,29,0.598,0.598);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FC1F27").s().p("Ag1A3QgRgVAAghQAAgfASgXQAUgZAhAAQAjAAASAYQARAVAAAhQAAAfgSAXQgUAZghAAQgiAAgTgYgAggAAQAAA2AgAAQAhAAAAg2QAAg1ghAAQggAAAAA1g");
	this.shape_4.setTransform(185.8,29,0.598,0.598);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FC1F27").s().p("AgRBKIAAh6IgpAAIAAgZIB1AAIAAAZIgpAAIAAB6g");
	this.shape_5.setTransform(141.2,29,0.598,0.598);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FC1F27").s().p("AgtA5QgTgWAAgjQgBgiATgVQASgXAeAAQAbAAASARQASASAAAfQAAAKgBAGIhaAAQgBAuAvAAQAVAAAPgJIAAAcQgTAKgcAAQgiAAgUgWgAgagSIA3AAIAAgGQAAgNgHgIQgIgIgNAAQgbAAAAAjg");
	this.shape_6.setTransform(167.7,29,0.598,0.598);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006BB4").s().p("AgtBDQgOgNAAgTQAAgvBGAAIANAAIAAgLQAAgagfAAQgVAAgQAMIAAgdQAVgLAXAAQA8AAAAA2IAABiIghAAIAAgOIgBAAQgSARgWAAQgSAAgNgLgAgIAMQgPAGAAAPQAAAJAHAFQAGAEAKAAQANAAALgHIAAgjIgKgBQgOAAgIAEg");
	this.shape_7.setTransform(167.5,15.6,0.598,0.598);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006BB4").s().p("AgtBDQgOgNAAgTQABgVAOgNQARgNAmAAIANAAIAAgLQAAgagfAAQgUAAgRAMIAAgdQAUgLAYAAQA7AAABA2IAABiIghAAIAAgOIgBAAQgRARgXAAQgSAAgNgLgAgHAMQgQAGAAAPQABAJAGAFQAHAEAJAAQAMAAAMgHIAAgjIgKgBQgNAAgIAEg");
	this.shape_8.setTransform(141.3,15.6,0.598,0.598);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006BB4").s().p("AhDAvQALgDAFgFQAHgGAEgPQACgLAAgWIAAg8IBqAAIAACTIgkAAIAAh5IgjAAIAAAjQAAAvgOAUQgQAXgeAAg");
	this.shape_9.setTransform(158,15.7,0.598,0.598);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006BB4").s().p("AAXBKIAAhBIgtAAIAABBIglAAIAAiTIAkAAIAAA6IAvAAIAAg6IAkAAIAACTg");
	this.shape_10.setTransform(176.9,15.6,0.598,0.598);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006BB4").s().p("AgQBKIAAh6IgqAAIAAgZIB1AAIAAAZIgpAAIAAB6g");
	this.shape_11.setTransform(149.8,15.6,0.598,0.598);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006BB4").s().p("AgRBKIAAh6IgpAAIAAgZIB1AAIAAAZIgpAAIAAB6g");
	this.shape_12.setTransform(185.9,15.6,0.598,0.598);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(126.1,22.3,0.598,0.598,0,0,0,0.9,27.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B130F").s().p("ABXBmQgXgNgLgZQgJAZgWAOQgWANgcAAQgfAAgYgPQgWgQgKgaIAAA0IgzAAIAAgrQgXAwg6AAQgsAAgZgbQgagbAAgrIAAgDIglBfIg9AAIhIi3IA1AAIAxB9IABAAIAxh9IA1AAIgJAXQAbgcAqAAQAdAAAWAPQAUAOAKAZIAAhcIAzAAIAABiQAJgcAXgPQAXgRAhAAQAbAAAWANQAYANAIAZQAMgYAWgNQAWgOAfAAQAgAAAYAPQAXAPAKAbIAAg0IAwAAIAAAZIAAAAQAWgeAjAAQAoAAAOAfQAJgNANgIQAQgKASAAQBEAAAABCIAAB6IgzAAIAAhpQAAgUgFgJQgHgOgTAAQgiAAAAAtIAABnIgzAAIAAhoQAAgVgEgIQgGgPgVAAQgMAAgJAIQgOALAAAWIAABrIgyAAIAAgzQgKAagXAPQgYAPggAAQgfAAgXgOgABpgUQgJAPAAAYQAAAZAJAQQAMASAYAAQAYAAALgSQAKgQAAgZQAAgYgKgPQgLgTgYAAQgYAAgMATgAg9gTQgKAQAAAXQAAAXAKAQQALATAWAAQAgAAAGgmIAlAAQgCgIAAgNQAAgPADgLIgoAAQgEgggfAAQgXAAgLAUgAj2BOQAPAAAMgHQALgIADgJIAnAAIAAgXIh9AAQACAvArAAgAjQAAQgEgTgJgKQgKgKgSAAQgVAAgMAPQgIAKgBAOIBTAAIAAAAg");
	this.shape_13.setTransform(75.3,21.2,0.598,0.598);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF500").s().p("AteC6IAAlzIa8AAIAAFzg");
	this.shape_14.setTransform(62.8,22.3,0.598,0.598);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.instance},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.6,44.6);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_116 = function() {
		this.gotoAndPlay(20);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(116).call(this.frame_116).wait(1));

	// wave3
	this.instance = new lib.Символ1();
	this.instance.setTransform(0,-12.4,0.5,0.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-13.3,alpha:0.034},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:-14.2,alpha:0.069},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:-15.1,alpha:0.103},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:-16,alpha:0.138},0).wait(1).to({scaleX:0.59,scaleY:0.59,y:-16.8,alpha:0.172},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:-17.7,alpha:0.207},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:-18.6,alpha:0.241},0).wait(1).to({scaleX:0.64,scaleY:0.64,y:-19.5,alpha:0.276},0).wait(1).to({scaleX:0.66,scaleY:0.66,y:-20.4,alpha:0.31},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:-21.2,alpha:0.345},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:-22.1,alpha:0.379},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:-23,alpha:0.414},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-23.9,alpha:0.448},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:-24.8,alpha:0.483},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:-25.6,alpha:0.517},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:-26.5,alpha:0.552},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:-27.4,alpha:0.586},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:-28.3,alpha:0.621},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:-29.2,alpha:0.655},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:-30,alpha:0.69},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:-30.9,alpha:0.724},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:-31.8,alpha:0.759},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:-32.7,alpha:0.793},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:-33.6,alpha:0.828},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:-34.4,alpha:0.862},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-35.3,alpha:0.897},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:-36.2,alpha:0.931},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-37.1,alpha:0.966},0).wait(1).to({scaleX:1,scaleY:1,y:-37.9,alpha:1},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-38.8,alpha:0.966},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:-39.7,alpha:0.931},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:-40.6,alpha:0.897},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:-41.5,alpha:0.862},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:-42.3,alpha:0.828},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:-43.2,alpha:0.793},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-44.1,alpha:0.759},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:-45,alpha:0.724},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:-45.9,alpha:0.69},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:-46.7,alpha:0.655},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:-47.6,alpha:0.621},0).wait(1).to({scaleX:1.21,scaleY:1.21,y:-48.5,alpha:0.586},0).wait(1).to({scaleX:1.22,scaleY:1.22,y:-49.4,alpha:0.552},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:-50.3,alpha:0.517},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:-51.1,alpha:0.483},0).wait(1).to({scaleX:1.28,scaleY:1.28,y:-52,alpha:0.448},0).wait(1).to({scaleX:1.29,scaleY:1.29,y:-52.9,alpha:0.414},0).wait(1).to({scaleX:1.31,scaleY:1.31,y:-53.8,alpha:0.379},0).wait(1).to({scaleX:1.33,scaleY:1.33,y:-54.7,alpha:0.345},0).wait(1).to({scaleX:1.35,scaleY:1.35,y:-55.5,alpha:0.31},0).wait(1).to({scaleX:1.36,scaleY:1.36,y:-56.4,alpha:0.276},0).wait(1).to({scaleX:1.38,scaleY:1.38,y:-57.3,alpha:0.241},0).wait(1).to({scaleX:1.4,scaleY:1.4,y:-58.2,alpha:0.207},0).wait(1).to({scaleX:1.41,scaleY:1.41,y:-59.1,alpha:0.172},0).wait(1).to({scaleX:1.43,scaleY:1.43,y:-59.9,alpha:0.138},0).wait(1).to({scaleX:1.45,scaleY:1.45,y:-60.8,alpha:0.103},0).wait(1).to({scaleX:1.47,scaleY:1.47,y:-61.7,alpha:0.069},0).wait(1).to({scaleX:1.48,scaleY:1.48,y:-62.6,alpha:0.034},0).wait(1).to({scaleX:1.5,scaleY:1.5,y:-63.4,alpha:0},0).wait(1));

	// wave2
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(0,-12.4,0.5,0.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-13.3,alpha:0.034},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:-14.2,alpha:0.069},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:-15.1,alpha:0.103},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:-16,alpha:0.138},0).wait(1).to({scaleX:0.59,scaleY:0.59,y:-16.8,alpha:0.172},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:-17.7,alpha:0.207},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:-18.6,alpha:0.241},0).wait(1).to({scaleX:0.64,scaleY:0.64,y:-19.5,alpha:0.276},0).wait(1).to({scaleX:0.66,scaleY:0.66,y:-20.4,alpha:0.31},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:-21.2,alpha:0.345},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:-22.1,alpha:0.379},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:-23,alpha:0.414},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-23.9,alpha:0.448},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:-24.8,alpha:0.483},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:-25.6,alpha:0.517},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:-26.5,alpha:0.552},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:-27.4,alpha:0.586},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:-28.3,alpha:0.621},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:-29.2,alpha:0.655},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:-30,alpha:0.69},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:-30.9,alpha:0.724},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:-31.8,alpha:0.759},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:-32.7,alpha:0.793},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:-33.6,alpha:0.828},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:-34.4,alpha:0.862},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-35.3,alpha:0.897},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:-36.2,alpha:0.931},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-37.1,alpha:0.966},0).wait(1).to({scaleX:1,scaleY:1,y:-37.9,alpha:1},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-38.8,alpha:0.966},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:-39.7,alpha:0.931},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:-40.6,alpha:0.897},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:-41.5,alpha:0.862},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:-42.3,alpha:0.828},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:-43.2,alpha:0.793},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-44.1,alpha:0.759},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:-45,alpha:0.724},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:-45.9,alpha:0.69},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:-46.7,alpha:0.655},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:-47.6,alpha:0.621},0).wait(1).to({scaleX:1.21,scaleY:1.21,y:-48.5,alpha:0.586},0).wait(1).to({scaleX:1.22,scaleY:1.22,y:-49.4,alpha:0.552},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:-50.3,alpha:0.517},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:-51.1,alpha:0.483},0).wait(1).to({scaleX:1.28,scaleY:1.28,y:-52,alpha:0.448},0).wait(1).to({scaleX:1.29,scaleY:1.29,y:-52.9,alpha:0.414},0).wait(1).to({scaleX:1.31,scaleY:1.31,y:-53.8,alpha:0.379},0).wait(1).to({scaleX:1.33,scaleY:1.33,y:-54.7,alpha:0.345},0).wait(1).to({scaleX:1.35,scaleY:1.35,y:-55.5,alpha:0.31},0).wait(1).to({scaleX:1.36,scaleY:1.36,y:-56.4,alpha:0.276},0).wait(1).to({scaleX:1.38,scaleY:1.38,y:-57.3,alpha:0.241},0).wait(1).to({scaleX:1.4,scaleY:1.4,y:-58.2,alpha:0.207},0).wait(1).to({scaleX:1.41,scaleY:1.41,y:-59.1,alpha:0.172},0).wait(1).to({scaleX:1.43,scaleY:1.43,y:-59.9,alpha:0.138},0).wait(1).to({scaleX:1.45,scaleY:1.45,y:-60.8,alpha:0.103},0).wait(1).to({scaleX:1.47,scaleY:1.47,y:-61.7,alpha:0.069},0).wait(1).to({scaleX:1.48,scaleY:1.48,y:-62.6,alpha:0.034},0).wait(1).to({scaleX:1.5,scaleY:1.5,y:-63.4,alpha:0},0).to({_off:true},1).wait(20));

	// wave
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(0,-12.4,0.5,0.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-13.3,alpha:0.034},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:-14.2,alpha:0.069},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:-15.1,alpha:0.103},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:-16,alpha:0.138},0).wait(1).to({scaleX:0.59,scaleY:0.59,y:-16.8,alpha:0.172},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:-17.7,alpha:0.207},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:-18.6,alpha:0.241},0).wait(1).to({scaleX:0.64,scaleY:0.64,y:-19.5,alpha:0.276},0).wait(1).to({scaleX:0.66,scaleY:0.66,y:-20.4,alpha:0.31},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:-21.2,alpha:0.345},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:-22.1,alpha:0.379},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:-23,alpha:0.414},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-23.9,alpha:0.448},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:-24.8,alpha:0.483},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:-25.6,alpha:0.517},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:-26.5,alpha:0.552},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:-27.4,alpha:0.586},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:-28.3,alpha:0.621},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:-29.2,alpha:0.655},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:-30,alpha:0.69},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:-30.9,alpha:0.724},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:-31.8,alpha:0.759},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:-32.7,alpha:0.793},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:-33.6,alpha:0.828},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:-34.4,alpha:0.862},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-35.3,alpha:0.897},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:-36.2,alpha:0.931},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-37.1,alpha:0.966},0).wait(1).to({scaleX:1,scaleY:1,y:-37.9,alpha:1},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-38.8,alpha:0.966},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:-39.7,alpha:0.931},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:-40.6,alpha:0.897},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:-41.5,alpha:0.862},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:-42.3,alpha:0.828},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:-43.2,alpha:0.793},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-44.1,alpha:0.759},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:-45,alpha:0.724},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:-45.9,alpha:0.69},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:-46.7,alpha:0.655},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:-47.6,alpha:0.621},0).wait(1).to({scaleX:1.21,scaleY:1.21,y:-48.5,alpha:0.586},0).wait(1).to({scaleX:1.22,scaleY:1.22,y:-49.4,alpha:0.552},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:-50.3,alpha:0.517},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:-51.1,alpha:0.483},0).wait(1).to({scaleX:1.28,scaleY:1.28,y:-52,alpha:0.448},0).wait(1).to({scaleX:1.29,scaleY:1.29,y:-52.9,alpha:0.414},0).wait(1).to({scaleX:1.31,scaleY:1.31,y:-53.8,alpha:0.379},0).wait(1).to({scaleX:1.33,scaleY:1.33,y:-54.7,alpha:0.345},0).wait(1).to({scaleX:1.35,scaleY:1.35,y:-55.5,alpha:0.31},0).wait(1).to({scaleX:1.36,scaleY:1.36,y:-56.4,alpha:0.276},0).wait(1).to({scaleX:1.38,scaleY:1.38,y:-57.3,alpha:0.241},0).wait(1).to({scaleX:1.4,scaleY:1.4,y:-58.2,alpha:0.207},0).wait(1).to({scaleX:1.41,scaleY:1.41,y:-59.1,alpha:0.172},0).wait(1).to({scaleX:1.43,scaleY:1.43,y:-59.9,alpha:0.138},0).wait(1).to({scaleX:1.45,scaleY:1.45,y:-60.8,alpha:0.103},0).wait(1).to({scaleX:1.47,scaleY:1.47,y:-61.7,alpha:0.069},0).wait(1).to({scaleX:1.48,scaleY:1.48,y:-62.6,alpha:0.034},0).wait(1).to({scaleX:1.5,scaleY:1.5,y:-63.4,alpha:0},0).to({_off:true},1).wait(39));

	// dot
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(0,0,0.8,0.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.82,scaleY:0.82,alpha:0.108},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.21},0).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.306},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.395},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.478},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.556},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.627},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.691},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.75},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.802},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.849},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.889},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.923},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.951},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.972},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.988},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(99));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-6.5,13.1,13.1);


// stage content:



(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_424 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(424).call(this.frame_424).wait(34));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(458));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(119.8,24.3,0.85,0.85,0,0,0,106,22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(458));

	// Слой 10
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(120,359.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(372).to({_off:false},0).wait(1).to({regX:-2.3,regY:-0.5,x:117.7,y:358.7,alpha:0.121},0).wait(1).to({alpha:0.234},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.437},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:1},0).wait(1).to({regX:0,regY:0,x:120,y:359.2},0).wait(41).to({regX:-2.3,regY:-0.5,x:117.7,y:358.7,alpha:0.871},0).wait(1).to({alpha:0.751},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.284},0).wait(1).to({alpha:0.218},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(13));

	// Слой 15
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(356,200.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(358).to({_off:false},0).wait(1).to({regX:-0.7,regY:3.1,x:332.3,y:203.6,alpha:0.098},0).wait(1).to({x:310.5,alpha:0.19},0).wait(1).to({x:289.8,alpha:0.278},0).wait(1).to({x:270.4,alpha:0.36},0).wait(1).to({x:252.1,alpha:0.438},0).wait(1).to({x:234.9,alpha:0.51},0).wait(1).to({x:219,alpha:0.577},0).wait(1).to({x:204.3,alpha:0.64},0).wait(1).to({x:190.7,alpha:0.697},0).wait(1).to({x:178.3,alpha:0.75},0).wait(1).to({x:167.1,alpha:0.798},0).wait(1).to({x:157.1,alpha:0.84},0).wait(1).to({x:148.2,alpha:0.878},0).wait(1).to({x:140.5,alpha:0.91},0).wait(1).to({x:134.1,alpha:0.938},0).wait(1).to({x:128.7,alpha:0.96},0).wait(1).to({x:124.6,alpha:0.978},0).wait(1).to({x:121.7,alpha:0.99},0).wait(1).to({x:119.9,alpha:0.998},0).wait(1).to({x:119.3,alpha:1},0).wait(1).to({regX:0,regY:0,x:120,y:200.5},0).wait(47).to({regX:-0.7,regY:3.1,x:95.5,y:203.6,alpha:0.902},0).wait(1).to({x:73,alpha:0.81},0).wait(1).to({x:51.6,alpha:0.723},0).wait(1).to({x:31.5,alpha:0.64},0).wait(1).to({x:12.6,alpha:0.563},0).wait(1).to({x:-5.1,alpha:0.49},0).wait(1).to({x:-21.6,alpha:0.423},0).wait(1).to({x:-36.8,alpha:0.36},0).wait(1).to({x:-50.8,alpha:0.303},0).wait(1).to({x:-63.7,alpha:0.25},0).wait(1).to({x:-75.2,alpha:0.203},0).wait(1).to({x:-85.6,alpha:0.16},0).wait(1).to({x:-94.8,alpha:0.123},0).wait(1).to({x:-102.7,alpha:0.09},0).wait(1).to({x:-109.4,alpha:0.063},0).wait(1).to({x:-114.9,alpha:0.04},0).wait(1).to({x:-119.2,alpha:0.023},0).wait(1).to({x:-122.2,alpha:0.01},0).wait(1).to({x:-124,alpha:0.003},0).wait(1).to({x:-124.7,alpha:0},0).to({_off:true},1).wait(12));

	// Слой 14
	this.instance_3 = new lib.Символ21();
	this.instance_3.setTransform(-20,162.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(358).to({_off:false},0).wait(1).to({regX:0.1,regY:3,x:-6.2,y:165.5,alpha:0.098},0).wait(1).to({x:6.7,alpha:0.19},0).wait(1).to({x:19,alpha:0.278},0).wait(1).to({x:30.5,alpha:0.36},0).wait(1).to({x:41.4,alpha:0.438},0).wait(1).to({x:51.5,alpha:0.51},0).wait(1).to({x:61,alpha:0.577},0).wait(1).to({x:69.7,alpha:0.64},0).wait(1).to({x:77.8,alpha:0.697},0).wait(1).to({x:85.1,alpha:0.75},0).wait(1).to({x:91.8,alpha:0.798},0).wait(1).to({x:97.7,alpha:0.84},0).wait(1).to({x:103,alpha:0.878},0).wait(1).to({x:107.5,alpha:0.91},0).wait(1).to({x:111.4,alpha:0.938},0).wait(1).to({x:114.5,alpha:0.96},0).wait(1).to({x:117,alpha:0.978},0).wait(1).to({x:118.7,alpha:0.99},0).wait(1).to({x:119.8,alpha:0.998},0).wait(1).to({x:120.1,alpha:1},0).wait(1).to({regX:0,regY:0,x:120,y:162.5},0).wait(47).to({regX:0.1,regY:3,x:143.5,y:165.5,alpha:0.902},0).wait(1).to({x:165.7,alpha:0.81},0).wait(1).to({x:186.7,alpha:0.723},0).wait(1).to({x:206.5,alpha:0.64},0).wait(1).to({x:225.1,alpha:0.563},0).wait(1).to({x:242.5,alpha:0.49},0).wait(1).to({x:258.7,alpha:0.423},0).wait(1).to({x:273.7,alpha:0.36},0).wait(1).to({x:287.5,alpha:0.303},0).wait(1).to({x:300.1,alpha:0.25},0).wait(1).to({x:311.5,alpha:0.203},0).wait(1).to({x:321.7,alpha:0.16},0).wait(1).to({x:330.7,alpha:0.123},0).wait(1).to({x:338.5,alpha:0.09},0).wait(1).to({x:345.1,alpha:0.063},0).wait(1).to({x:350.5,alpha:0.04},0).wait(1).to({x:354.7,alpha:0.023},0).wait(1).to({x:357.7,alpha:0.01},0).wait(1).to({x:359.5,alpha:0.003},0).wait(1).to({x:360.1,alpha:0},0).to({_off:true},1).wait(12));

	// logo_back
	this.instance_4 = new lib.Символ18();
	this.instance_4.setTransform(120,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(358).to({y:-118.9},0).wait(1).to({y:-89.3},0).wait(1).to({y:-61.1},0).wait(1).to({y:-34.3},0).wait(1).to({y:-9},0).wait(1).to({y:14.9},0).wait(1).to({y:37.3},0).wait(1).to({y:58.3},0).wait(1).to({y:77.8},0).wait(1).to({y:95.9},0).wait(1).to({y:112.5},0).wait(1).to({y:127.7},0).wait(1).to({y:141.4},0).wait(1).to({y:153.7},0).wait(1).to({y:164.6},0).wait(1).to({y:174},0).wait(1).to({y:181.9},0).wait(1).to({y:188.4},0).wait(1).to({y:193.5},0).wait(1).to({y:197.1},0).wait(1).to({y:199.3},0).wait(1).to({y:200},0).wait(51).to({y:168.9},0).wait(1).to({y:139.3},0).wait(1).to({y:111.1},0).wait(1).to({y:84.3},0).wait(1).to({y:59},0).wait(1).to({y:35.1},0).wait(1).to({y:12.7},0).wait(1).to({y:-8.2},0).wait(1).to({y:-27.8},0).wait(1).to({y:-45.9},0).wait(1).to({y:-62.5},0).wait(1).to({y:-77.7},0).wait(1).to({y:-91.4},0).wait(1).to({y:-103.7},0).wait(1).to({y:-114.6},0).wait(1).to({y:-124},0).wait(1).to({y:-131.9},0).wait(1).to({y:-138.4},0).wait(1).to({y:-143.5},0).wait(1).to({y:-147.1},0).wait(1).to({y:-149.3},0).wait(1).to({y:-150},0).wait(7));

	// Режим изоляции
	this.instance_5 = new lib.Символ5();
	this.instance_5.setTransform(120,183);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).to({_off:true},303).wait(36));

	// text4
	this.instance_6 = new lib.Символ17();
	this.instance_6.setTransform(344,360.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(243).to({_off:false},0).wait(1).to({regX:1.3,regY:3.8,x:324.6,y:364.1,alpha:0.089},0).wait(1).to({x:304.9,alpha:0.174},0).wait(1).to({x:286.1,alpha:0.254},0).wait(1).to({x:268.3,alpha:0.331},0).wait(1).to({x:251.4,alpha:0.403},0).wait(1).to({x:235.5,alpha:0.471},0).wait(1).to({x:220.6,alpha:0.535},0).wait(1).to({x:206.7,alpha:0.595},0).wait(1).to({x:193.7,alpha:0.651},0).wait(1).to({x:181.6,alpha:0.702},0).wait(1).to({x:170.6,alpha:0.75},0).wait(1).to({x:160.4,alpha:0.793},0).wait(1).to({x:151.3,alpha:0.833},0).wait(1).to({x:143.1,alpha:0.868},0).wait(1).to({x:135.9,alpha:0.899},0).wait(1).to({x:129.6,alpha:0.926},0).wait(1).to({x:124.3,alpha:0.948},0).wait(1).to({x:120,alpha:0.967},0).wait(1).to({x:116.6,alpha:0.981},0).wait(1).to({x:114.2,alpha:0.992},0).wait(1).to({x:112.8,alpha:0.998},0).wait(1).to({x:112.3,alpha:1},0).wait(1).to({regX:0,regY:0,x:111,y:360.3},0).wait(68).to({regX:1.3,regY:3.8,x:91.3,y:364.1,alpha:0.911},0).wait(1).to({x:71.2,alpha:0.826},0).wait(1).to({x:52.1,alpha:0.746},0).wait(1).to({x:34,alpha:0.669},0).wait(1).to({x:16.8,alpha:0.597},0).wait(1).to({x:0.7,alpha:0.529},0).wait(1).to({x:-14.5,alpha:0.465},0).wait(1).to({x:-28.7,alpha:0.405},0).wait(1).to({x:-41.9,alpha:0.349},0).wait(1).to({x:-54.1,alpha:0.298},0).wait(1).to({x:-65.4,alpha:0.25},0).wait(1).to({x:-75.7,alpha:0.207},0).wait(1).to({x:-85,alpha:0.167},0).wait(1).to({x:-93.3,alpha:0.132},0).wait(1).to({x:-100.6,alpha:0.101},0).wait(1).to({x:-107,alpha:0.074},0).wait(1).to({x:-112.4,alpha:0.052},0).wait(1).to({x:-116.8,alpha:0.033},0).wait(1).to({x:-120.2,alpha:0.019},0).wait(1).to({x:-122.7,alpha:0.008},0).wait(1).to({x:-124.2,alpha:0.002},0).wait(1).to({x:-124.7,alpha:0},0).to({_off:true},1).wait(102));

	// text3
	this.instance_7 = new lib.Символ16();
	this.instance_7.setTransform(-120,328.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(243).to({_off:false},0).wait(1).to({regX:0.5,regY:5.8,x:-98.1,y:334.6,alpha:0.089},0).wait(1).to({x:-77.8,alpha:0.174},0).wait(1).to({x:-58.5,alpha:0.254},0).wait(1).to({x:-40.1,alpha:0.331},0).wait(1).to({x:-22.8,alpha:0.403},0).wait(1).to({x:-6.4,alpha:0.471},0).wait(1).to({x:8.9,alpha:0.535},0).wait(1).to({x:23.3,alpha:0.595},0).wait(1).to({x:36.7,alpha:0.651},0).wait(1).to({x:49.1,alpha:0.702},0).wait(1).to({x:60.5,alpha:0.75},0).wait(1).to({x:70.9,alpha:0.793},0).wait(1).to({x:80.3,alpha:0.833},0).wait(1).to({x:88.8,alpha:0.868},0).wait(1).to({x:96.2,alpha:0.899},0).wait(1).to({x:102.6,alpha:0.926},0).wait(1).to({x:108.1,alpha:0.948},0).wait(1).to({x:112.6,alpha:0.967},0).wait(1).to({x:116,alpha:0.981},0).wait(1).to({x:118.5,alpha:0.992},0).wait(1).to({x:120,alpha:0.998},0).wait(1).to({x:120.5,alpha:1},0).wait(1).to({regX:0,regY:0,x:120,y:328.8},0).wait(68).to({regX:0.5,regY:5.8,x:141.8,y:334.6,alpha:0.911},0).wait(1).to({x:162.2,alpha:0.826},0).wait(1).to({x:181.5,alpha:0.746},0).wait(1).to({x:199.8,alpha:0.669},0).wait(1).to({x:217.2,alpha:0.597},0).wait(1).to({x:233.6,alpha:0.529},0).wait(1).to({x:248.9,alpha:0.465},0).wait(1).to({x:263.3,alpha:0.405},0).wait(1).to({x:276.7,alpha:0.349},0).wait(1).to({x:289.1,alpha:0.298},0).wait(1).to({x:300.5,alpha:0.25},0).wait(1).to({x:310.9,alpha:0.207},0).wait(1).to({x:320.3,alpha:0.167},0).wait(1).to({x:328.8,alpha:0.132},0).wait(1).to({x:336.2,alpha:0.101},0).wait(1).to({x:342.6,alpha:0.074},0).wait(1).to({x:348.1,alpha:0.052},0).wait(1).to({x:352.6,alpha:0.033},0).wait(1).to({x:356,alpha:0.019},0).wait(1).to({x:358.5,alpha:0.008},0).wait(1).to({x:360,alpha:0.002},0).wait(1).to({x:360.5,alpha:0},0).to({_off:true},1).wait(102));

	// text2
	this.instance_8 = new lib.Символ15();
	this.instance_8.setTransform(116,86.8,0.8,0.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(207).to({_off:false},0).wait(1).to({regX:0.6,regY:3.6,scaleX:0.82,scaleY:0.82,x:116.5,y:89.7,alpha:0.089},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:89.8,alpha:0.174},0).wait(1).to({scaleX:0.85,scaleY:0.85,alpha:0.254},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:89.9,alpha:0.331},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:116.6,alpha:0.403},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:90,alpha:0.471},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.535},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:90.1,alpha:0.595},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.651},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:90.2,alpha:0.702},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.75},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.793},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:90.3,alpha:0.833},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.868},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.899},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.926},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.948},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:90.4,alpha:0.967},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.981},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.992},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({alpha:1},0).wait(1).to({regX:0,regY:0,x:116,y:86.8},0).wait(77).to({regX:0.6,regY:3.6,scaleX:0.98,scaleY:0.98,x:116.6,y:90.3,alpha:0.911},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.826},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:90.2,alpha:0.746},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:90.1,alpha:0.669},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.597},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:90,alpha:0.529},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.465},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:89.9,alpha:0.405},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:116.5,alpha:0.349},0).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.298},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:89.8,alpha:0.25},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.207},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.167},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.132},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:89.7,alpha:0.101},0).wait(1).to({scaleX:0.82,scaleY:0.82,alpha:0.074},0).wait(1).to({scaleX:0.81,scaleY:0.81,alpha:0.052},0).wait(1).to({scaleX:0.81,scaleY:0.81,alpha:0.033},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.019},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.008},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.002},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(129));

	// Слой 1 - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_230 = new cjs.Graphics().p("EgPcAn2MAAAgiPIfDAAMAAAAiPg");
	var mask_graphics_231 = new cjs.Graphics().p("EgPcAncMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_232 = new cjs.Graphics().p("EgPcAnEMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_233 = new cjs.Graphics().p("EgPcAmtMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_234 = new cjs.Graphics().p("EgPcAmXMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_235 = new cjs.Graphics().p("EgPcAmDMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_236 = new cjs.Graphics().p("EgPcAlvMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_237 = new cjs.Graphics().p("EgPcAldMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_238 = new cjs.Graphics().p("EgPcAlMMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_239 = new cjs.Graphics().p("EgPcAk8MAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_240 = new cjs.Graphics().p("EgPcAktMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_241 = new cjs.Graphics().p("EgPcAkgMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_242 = new cjs.Graphics().p("EgPcAkTMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_243 = new cjs.Graphics().p("EgPcAkIMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_244 = new cjs.Graphics().p("EgPcAj+MAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_245 = new cjs.Graphics().p("EgPcAj1MAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_246 = new cjs.Graphics().p("EgPcAjuMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_247 = new cjs.Graphics().p("EgPcAjnMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_248 = new cjs.Graphics().p("EgPcAjiMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_249 = new cjs.Graphics().p("EgPcAjeMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_250 = new cjs.Graphics().p("EgPcAjbMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_251 = new cjs.Graphics().p("EgPcAjZMAAAgiOIfDAAMAAAAiOg");
	var mask_graphics_252 = new cjs.Graphics().p("EgPcAjYMAAAgiNIfDAAMAAAAiNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(230).to({graphics:mask_graphics_230,x:100,y:255}).wait(1).to({graphics:mask_graphics_231,x:100,y:252.5}).wait(1).to({graphics:mask_graphics_232,x:100,y:250.1}).wait(1).to({graphics:mask_graphics_233,x:100,y:247.8}).wait(1).to({graphics:mask_graphics_234,x:100,y:245.6}).wait(1).to({graphics:mask_graphics_235,x:100,y:243.5}).wait(1).to({graphics:mask_graphics_236,x:100,y:241.6}).wait(1).to({graphics:mask_graphics_237,x:100,y:239.7}).wait(1).to({graphics:mask_graphics_238,x:100,y:238}).wait(1).to({graphics:mask_graphics_239,x:100,y:236.5}).wait(1).to({graphics:mask_graphics_240,x:100,y:235}).wait(1).to({graphics:mask_graphics_241,x:100,y:233.6}).wait(1).to({graphics:mask_graphics_242,x:100,y:232.4}).wait(1).to({graphics:mask_graphics_243,x:100,y:231.3}).wait(1).to({graphics:mask_graphics_244,x:100,y:230.3}).wait(1).to({graphics:mask_graphics_245,x:100,y:229.4}).wait(1).to({graphics:mask_graphics_246,x:100,y:228.6}).wait(1).to({graphics:mask_graphics_247,x:100,y:228}).wait(1).to({graphics:mask_graphics_248,x:100,y:227.4}).wait(1).to({graphics:mask_graphics_249,x:100,y:227}).wait(1).to({graphics:mask_graphics_250,x:100,y:226.7}).wait(1).to({graphics:mask_graphics_251,x:100,y:226.6}).wait(1).to({graphics:mask_graphics_252,x:100,y:226.5}).wait(1).to({graphics:null,x:0,y:0}).wait(205));

	// Слой 11
	this.instance_9 = new lib.Символ14();
	this.instance_9.setTransform(119.5,250.5);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(230).to({_off:false},0).to({_off:true},160).wait(68));

	// Слой 1 - копия (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_230 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_231 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_232 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_233 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_234 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_237 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_238 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_239 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_243 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_244 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_245 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_249 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_1_graphics_251 = new cjs.Graphics().p("AvebuMAAAgiMIfEAAMAAAAiMg");
	var mask_1_graphics_252 = new cjs.Graphics().p("AvcbuMAAAgiMIfDAAMAAAAiMg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(230).to({graphics:mask_1_graphics_230,x:-59.5,y:177.5}).wait(1).to({graphics:mask_1_graphics_231,x:-45.3,y:177.5}).wait(1).to({graphics:mask_1_graphics_232,x:-31.7,y:177.5}).wait(1).to({graphics:mask_1_graphics_233,x:-18.8,y:177.5}).wait(1).to({graphics:mask_1_graphics_234,x:-6.6,y:177.5}).wait(1).to({graphics:mask_1_graphics_235,x:5,y:177.5}).wait(1).to({graphics:mask_1_graphics_236,x:15.9,y:177.5}).wait(1).to({graphics:mask_1_graphics_237,x:26.1,y:177.5}).wait(1).to({graphics:mask_1_graphics_238,x:35.7,y:177.5}).wait(1).to({graphics:mask_1_graphics_239,x:44.7,y:177.5}).wait(1).to({graphics:mask_1_graphics_240,x:52.9,y:177.5}).wait(1).to({graphics:mask_1_graphics_241,x:60.5,y:177.5}).wait(1).to({graphics:mask_1_graphics_242,x:67.5,y:177.5}).wait(1).to({graphics:mask_1_graphics_243,x:73.7,y:177.5}).wait(1).to({graphics:mask_1_graphics_244,x:79.4,y:177.5}).wait(1).to({graphics:mask_1_graphics_245,x:84.3,y:177.5}).wait(1).to({graphics:mask_1_graphics_246,x:88.6,y:177.5}).wait(1).to({graphics:mask_1_graphics_247,x:92.3,y:177.5}).wait(1).to({graphics:mask_1_graphics_248,x:95.2,y:177.5}).wait(1).to({graphics:mask_1_graphics_249,x:97.5,y:177.5}).wait(1).to({graphics:mask_1_graphics_250,x:99.2,y:177.5}).wait(1).to({graphics:mask_1_graphics_251,x:99.8,y:177.5}).wait(1).to({graphics:mask_1_graphics_252,x:100,y:177.5}).wait(1).to({graphics:null,x:0,y:0}).wait(205));

	// Слой 11 - копия
	this.instance_10 = new lib.Символ13();
	this.instance_10.setTransform(119.5,250.5);
	this.instance_10._off = true;

	this.instance_10.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(230).to({_off:false},0).to({_off:true},160).wait(68));

	// Слой 5
	this.instance_11 = new lib.Символ12();
	this.instance_11.setTransform(345.8,98.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(119).to({_off:false},0).wait(1).to({regX:0.5,regY:3.2,x:324.9,y:101.6,alpha:0.093},0).wait(1).to({x:304.6,alpha:0.181},0).wait(1).to({x:285.3,alpha:0.265},0).wait(1).to({x:267,alpha:0.345},0).wait(1).to({x:249.8,alpha:0.419},0).wait(1).to({x:233.7,alpha:0.49},0).wait(1).to({x:218.5,alpha:0.556},0).wait(1).to({x:204.4,alpha:0.617},0).wait(1).to({x:191.4,alpha:0.673},0).wait(1).to({x:179.4,alpha:0.726},0).wait(1).to({x:168.5,alpha:0.773},0).wait(1).to({x:158.6,alpha:0.816},0).wait(1).to({x:149.7,alpha:0.855},0).wait(1).to({x:141.9,alpha:0.889},0).wait(1).to({x:135.1,alpha:0.918},0).wait(1).to({x:129.3,alpha:0.943},0).wait(1).to({x:124.6,alpha:0.964},0).wait(1).to({x:121,alpha:0.98},0).wait(1).to({x:118.4,alpha:0.991},0).wait(1).to({x:116.8,alpha:0.998},0).wait(1).to({x:116.3,alpha:1},0).wait(1).to({regX:0,regY:0,x:115.8,y:98.4},0).wait(52).to({regX:0.5,regY:3.2,x:84.6,y:101.6,alpha:0.862},0).wait(1).to({x:55.3,alpha:0.735},0).wait(1).to({x:28.3,alpha:0.617},0).wait(1).to({x:3.6,alpha:0.51},0).wait(1).to({x:-18.6,alpha:0.413},0).wait(1).to({x:-38.5,alpha:0.327},0).wait(1).to({x:-56.2,alpha:0.25},0).wait(1).to({x:-71.4,alpha:0.184},0).wait(1).to({x:-84.3,alpha:0.128},0).wait(1).to({x:-94.9,alpha:0.082},0).wait(1).to({x:-103.1,alpha:0.046},0).wait(1).to({x:-109,alpha:0.02},0).wait(1).to({x:-112.5,alpha:0.005},0).wait(1).to({x:-113.7,alpha:0},0).to({_off:true},1).wait(251));

	// Слой 3
	this.instance_12 = new lib.Символ11();
	this.instance_12.setTransform(-79.8,68.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(119).to({_off:false},0).wait(1).to({regX:0.5,regY:3.1,x:-63.4,y:71.5,alpha:0.093},0).wait(1).to({x:-48.4,alpha:0.181},0).wait(1).to({x:-34.2,alpha:0.265},0).wait(1).to({x:-20.7,alpha:0.345},0).wait(1).to({x:-7.9,alpha:0.419},0).wait(1).to({x:4,alpha:0.49},0).wait(1).to({x:15.1,alpha:0.556},0).wait(1).to({x:25.5,alpha:0.617},0).wait(1).to({x:35.2,alpha:0.673},0).wait(1).to({x:44.1,alpha:0.726},0).wait(1).to({x:52.2,alpha:0.773},0).wait(1).to({x:59.5,alpha:0.816},0).wait(1).to({x:66,alpha:0.855},0).wait(1).to({x:71.8,alpha:0.889},0).wait(1).to({x:76.8,alpha:0.918},0).wait(1).to({x:81.1,alpha:0.943},0).wait(1).to({x:84.5,alpha:0.964},0).wait(1).to({x:87.2,alpha:0.98},0).wait(1).to({x:89.2,alpha:0.991},0).wait(1).to({x:90.3,alpha:0.998},0).wait(1).to({x:90.7,alpha:1},0).wait(1).to({regX:0,regY:0,x:90.2,y:68.4},0).wait(52).to({regX:0.5,regY:3.1,x:122.4,y:71.5,alpha:0.862},0).wait(1).to({x:151.7,alpha:0.735},0).wait(1).to({x:178.7,alpha:0.617},0).wait(1).to({x:203.4,alpha:0.51},0).wait(1).to({x:225.6,alpha:0.413},0).wait(1).to({x:245.6,alpha:0.327},0).wait(1).to({x:263.2,alpha:0.25},0).wait(1).to({x:278.4,alpha:0.184},0).wait(1).to({x:291.4,alpha:0.128},0).wait(1).to({x:301.9,alpha:0.082},0).wait(1).to({x:310.1,alpha:0.046},0).wait(1).to({x:316,alpha:0.02},0).wait(1).to({x:319.5,alpha:0.005},0).wait(1).to({x:320.7,alpha:0},0).to({_off:true},1).wait(251));

	// Слой 1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_119 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_120 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_121 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_122 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_123 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_124 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_125 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_126 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_127 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_128 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_129 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_130 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_131 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_132 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_133 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_134 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_135 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_136 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_137 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_138 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_139 = new cjs.Graphics().p("AvhbuMAAAgiMIfDAAMAAAAiMg");
	var mask_2_graphics_140 = new cjs.Graphics().p("AvebuMAAAgiMIfEAAMAAAAiMg");
	var mask_2_graphics_141 = new cjs.Graphics().p("AvcbuMAAAgiMIfDAAMAAAAiMg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_2_graphics_119,x:-59.5,y:177.5}).wait(1).to({graphics:mask_2_graphics_120,x:-45.3,y:177.5}).wait(1).to({graphics:mask_2_graphics_121,x:-31.7,y:177.5}).wait(1).to({graphics:mask_2_graphics_122,x:-18.8,y:177.5}).wait(1).to({graphics:mask_2_graphics_123,x:-6.6,y:177.5}).wait(1).to({graphics:mask_2_graphics_124,x:5,y:177.5}).wait(1).to({graphics:mask_2_graphics_125,x:15.9,y:177.5}).wait(1).to({graphics:mask_2_graphics_126,x:26.1,y:177.5}).wait(1).to({graphics:mask_2_graphics_127,x:35.7,y:177.5}).wait(1).to({graphics:mask_2_graphics_128,x:44.7,y:177.5}).wait(1).to({graphics:mask_2_graphics_129,x:52.9,y:177.5}).wait(1).to({graphics:mask_2_graphics_130,x:60.5,y:177.5}).wait(1).to({graphics:mask_2_graphics_131,x:67.5,y:177.5}).wait(1).to({graphics:mask_2_graphics_132,x:73.7,y:177.5}).wait(1).to({graphics:mask_2_graphics_133,x:79.4,y:177.5}).wait(1).to({graphics:mask_2_graphics_134,x:84.3,y:177.5}).wait(1).to({graphics:mask_2_graphics_135,x:88.6,y:177.5}).wait(1).to({graphics:mask_2_graphics_136,x:92.3,y:177.5}).wait(1).to({graphics:mask_2_graphics_137,x:95.2,y:177.5}).wait(1).to({graphics:mask_2_graphics_138,x:97.5,y:177.5}).wait(1).to({graphics:mask_2_graphics_139,x:99.2,y:177.5}).wait(1).to({graphics:mask_2_graphics_140,x:99.8,y:177.5}).wait(1).to({graphics:mask_2_graphics_141,x:100,y:177.5}).wait(1).to({graphics:null,x:0,y:0}).wait(316));

	// Слой 13 - копия
	this.instance_13 = new lib.Символ7();
	this.instance_13.setTransform(120.5,280.5);
	this.instance_13._off = true;

	this.instance_13.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(119).to({_off:false},0).to({_off:true},28).wait(311));

	// Слой 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_124 = new cjs.Graphics().p("AAnTDIAAwaIMDAAIAAQag");
	var mask_3_graphics_125 = new cjs.Graphics().p("AAnTrIAAwaIMDAAIAAQag");
	var mask_3_graphics_126 = new cjs.Graphics().p("AAnUSIAAwaIMDAAIAAQag");
	var mask_3_graphics_127 = new cjs.Graphics().p("AAnU2IAAwaIMDAAIAAQag");
	var mask_3_graphics_128 = new cjs.Graphics().p("AAnVYIAAwaIMDAAIAAQag");
	var mask_3_graphics_129 = new cjs.Graphics().p("AAnV5IAAwaIMDAAIAAQag");
	var mask_3_graphics_130 = new cjs.Graphics().p("AAnWXIAAwaIMDAAIAAQag");
	var mask_3_graphics_131 = new cjs.Graphics().p("AAnW0IAAwaIMDAAIAAQag");
	var mask_3_graphics_132 = new cjs.Graphics().p("AAnXPIAAwaIMDAAIAAQag");
	var mask_3_graphics_133 = new cjs.Graphics().p("AAnXoIAAwaIMDAAIAAQag");
	var mask_3_graphics_134 = new cjs.Graphics().p("AAnYAIAAwaIMDAAIAAQag");
	var mask_3_graphics_135 = new cjs.Graphics().p("AAnYVIAAwaIMDAAIAAQag");
	var mask_3_graphics_136 = new cjs.Graphics().p("AAnYpIAAwaIMDAAIAAQag");
	var mask_3_graphics_137 = new cjs.Graphics().p("AAnY6IAAwaIMDAAIAAQag");
	var mask_3_graphics_138 = new cjs.Graphics().p("AAnZKIAAwaIMDAAIAAQag");
	var mask_3_graphics_139 = new cjs.Graphics().p("AAnZYIAAwaIMDAAIAAQag");
	var mask_3_graphics_140 = new cjs.Graphics().p("AAnZkIAAwaIMDAAIAAQag");
	var mask_3_graphics_141 = new cjs.Graphics().p("AAnZuIAAwaIMDAAIAAQag");
	var mask_3_graphics_142 = new cjs.Graphics().p("AAnZ3IAAwaIMDAAIAAQag");
	var mask_3_graphics_143 = new cjs.Graphics().p("AAnZ9IAAwaIMDAAIAAQag");
	var mask_3_graphics_144 = new cjs.Graphics().p("AAnaCIAAwaIMDAAIAAQag");
	var mask_3_graphics_145 = new cjs.Graphics().p("AAnaFIAAwaIMDAAIAAQag");
	var mask_3_graphics_146 = new cjs.Graphics().p("AAnaFIAAwaIMDAAIAAQag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(124).to({graphics:mask_3_graphics_124,x:81,y:122}).wait(1).to({graphics:mask_3_graphics_125,x:81,y:126}).wait(1).to({graphics:mask_3_graphics_126,x:81,y:129.8}).wait(1).to({graphics:mask_3_graphics_127,x:81,y:133.4}).wait(1).to({graphics:mask_3_graphics_128,x:81,y:136.9}).wait(1).to({graphics:mask_3_graphics_129,x:81,y:140.1}).wait(1).to({graphics:mask_3_graphics_130,x:81,y:143.2}).wait(1).to({graphics:mask_3_graphics_131,x:81,y:146.1}).wait(1).to({graphics:mask_3_graphics_132,x:81,y:148.8}).wait(1).to({graphics:mask_3_graphics_133,x:81,y:151.3}).wait(1).to({graphics:mask_3_graphics_134,x:81,y:153.6}).wait(1).to({graphics:mask_3_graphics_135,x:81,y:155.8}).wait(1).to({graphics:mask_3_graphics_136,x:81,y:157.7}).wait(1).to({graphics:mask_3_graphics_137,x:81,y:159.5}).wait(1).to({graphics:mask_3_graphics_138,x:81,y:161}).wait(1).to({graphics:mask_3_graphics_139,x:81,y:162.4}).wait(1).to({graphics:mask_3_graphics_140,x:81,y:163.7}).wait(1).to({graphics:mask_3_graphics_141,x:81,y:164.7}).wait(1).to({graphics:mask_3_graphics_142,x:81,y:165.5}).wait(1).to({graphics:mask_3_graphics_143,x:81,y:166.2}).wait(1).to({graphics:mask_3_graphics_144,x:81,y:166.6}).wait(1).to({graphics:mask_3_graphics_145,x:81,y:166.9}).wait(1).to({graphics:mask_3_graphics_146,x:81,y:167}).wait(1).to({graphics:null,x:0,y:0}).wait(311));

	// Слой 13
	this.instance_14 = new lib.Символ8();
	this.instance_14.setTransform(120.5,280.5);
	this.instance_14._off = true;

	this.instance_14.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(124).to({_off:false},0).to({_off:true},23).wait(311));

	// Слой 6
	this.instance_15 = new lib.off();
	this.instance_15.setTransform(120.5,280.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(147).to({_off:false},0).wait(46).to({alpha:0.862},0).wait(1).to({alpha:0.735},0).wait(1).to({alpha:0.617},0).wait(1).to({alpha:0.51},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.082},0).wait(1).to({alpha:0.046},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(251));

	// text1_2
	this.instance_16 = new lib.Символ3();
	this.instance_16.setTransform(321.4,110.4);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:-5.7,regY:-1.1,x:297,y:109.3,alpha:0.078},0).wait(1).to({x:279.2,alpha:0.154},0).wait(1).to({x:262,alpha:0.226},0).wait(1).to({x:245.6,alpha:0.294},0).wait(1).to({x:230,alpha:0.36},0).wait(1).to({x:215.2,alpha:0.422},0).wait(1).to({x:201.1,alpha:0.482},0).wait(1).to({x:187.8,alpha:0.538},0).wait(1).to({x:175.2,alpha:0.59},0).wait(1).to({x:163.4,alpha:0.64},0).wait(1).to({x:152.3,alpha:0.686},0).wait(1).to({x:142.1,alpha:0.73},0).wait(1).to({x:132.5,alpha:0.77},0).wait(1).to({x:123.8,alpha:0.806},0).wait(1).to({x:115.8,alpha:0.84},0).wait(1).to({x:108.5,alpha:0.87},0).wait(1).to({x:102.1,alpha:0.898},0).wait(1).to({x:96.4,alpha:0.922},0).wait(1).to({x:91.4,alpha:0.942},0).wait(1).to({x:87.2,alpha:0.96},0).wait(1).to({x:83.8,alpha:0.974},0).wait(1).to({x:81.1,alpha:0.986},0).wait(1).to({x:79.2,alpha:0.994},0).wait(1).to({x:78.1,alpha:0.998},0).wait(1).to({x:77.7,alpha:1},0).wait(1).to({regX:0,regY:0,x:83.4,y:110.4},0).wait(71).to({regX:-5.7,regY:-1.1,x:77.4,y:109.3,alpha:0.998},0).wait(1).to({x:76.3,alpha:0.992},0).wait(1).to({x:74.6,alpha:0.981},0).wait(1).to({x:72.1,alpha:0.967},0).wait(1).to({x:69,alpha:0.948},0).wait(1).to({x:65.1,alpha:0.926},0).wait(1).to({x:60.6,alpha:0.899},0).wait(1).to({x:55.4,alpha:0.868},0).wait(1).to({x:49.4,alpha:0.833},0).wait(1).to({x:42.8,alpha:0.793},0).wait(1).to({x:35.5,alpha:0.75},0).wait(1).to({x:27.4,alpha:0.702},0).wait(1).to({x:18.7,alpha:0.651},0).wait(1).to({x:9.3,alpha:0.595},0).wait(1).to({x:-0.9,alpha:0.535},0).wait(1).to({x:-11.6,alpha:0.471},0).wait(1).to({x:-23.2,alpha:0.403},0).wait(1).to({x:-35.4,alpha:0.331},0).wait(1).to({x:-48.3,alpha:0.254},0).wait(1).to({x:-61.9,alpha:0.174},0).wait(1).to({x:-76.2,alpha:0.089},0).wait(1).to({x:-91.3,alpha:0},0).to({_off:true},1).wait(339));

	// text1_1
	this.instance_17 = new lib.Символ4();
	this.instance_17.setTransform(-114.9,76.4);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:-9.3,regY:1.8,x:-105.7,y:78.2,alpha:0.078},0).wait(1).to({x:-88.1,alpha:0.154},0).wait(1).to({x:-71.1,alpha:0.226},0).wait(1).to({x:-55,alpha:0.294},0).wait(1).to({x:-39.6,alpha:0.36},0).wait(1).to({x:-24.9,alpha:0.422},0).wait(1).to({x:-11,alpha:0.482},0).wait(1).to({x:2.1,alpha:0.538},0).wait(1).to({x:14.5,alpha:0.59},0).wait(1).to({x:26.2,alpha:0.64},0).wait(1).to({x:37.1,alpha:0.686},0).wait(1).to({x:47.3,alpha:0.73},0).wait(1).to({x:56.7,alpha:0.77},0).wait(1).to({x:65.3,alpha:0.806},0).wait(1).to({x:73.2,alpha:0.84},0).wait(1).to({x:80.3,alpha:0.87},0).wait(1).to({x:86.7,alpha:0.898},0).wait(1).to({x:92.4,alpha:0.922},0).wait(1).to({x:97.3,alpha:0.942},0).wait(1).to({x:101.4,alpha:0.96},0).wait(1).to({x:104.8,alpha:0.974},0).wait(1).to({x:107.4,alpha:0.986},0).wait(1).to({x:109.3,alpha:0.994},0).wait(1).to({x:110.4,alpha:0.998},0).wait(1).to({x:110.8,alpha:1},0).wait(1).to({regX:0,regY:0,x:120.1,y:76.4},0).wait(71).to({regX:-9.3,regY:1.8,x:111.3,y:78.2,alpha:0.998},0).wait(1).to({x:112.8,alpha:0.992},0).wait(1).to({x:115.2,alpha:0.981},0).wait(1).to({x:118.7,alpha:0.967},0).wait(1).to({x:123.1,alpha:0.948},0).wait(1).to({x:128.5,alpha:0.926},0).wait(1).to({x:134.9,alpha:0.899},0).wait(1).to({x:142.3,alpha:0.868},0).wait(1).to({x:150.6,alpha:0.833},0).wait(1).to({x:160,alpha:0.793},0).wait(1).to({x:170.3,alpha:0.75},0).wait(1).to({x:181.6,alpha:0.702},0).wait(1).to({x:193.9,alpha:0.651},0).wait(1).to({x:207.2,alpha:0.595},0).wait(1).to({x:221.4,alpha:0.535},0).wait(1).to({x:236.7,alpha:0.471},0).wait(1).to({x:252.9,alpha:0.403},0).wait(1).to({x:270.1,alpha:0.331},0).wait(1).to({x:288.3,alpha:0.254},0).wait(1).to({x:307.5,alpha:0.174},0).wait(1).to({x:327.7,alpha:0.089},0).wait(1).to({x:348.8,alpha:0},0).to({_off:true},1).wait(339));

	// man
	this.instance_18 = new lib.Символ2();
	this.instance_18.setTransform(120,532);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({y:511.5,alpha:0.078},0).wait(1).to({y:491.8,alpha:0.154},0).wait(1).to({y:472.9,alpha:0.226},0).wait(1).to({y:454.9,alpha:0.294},0).wait(1).to({y:437.7,alpha:0.36},0).wait(1).to({y:421.3,alpha:0.422},0).wait(1).to({y:405.8,alpha:0.482},0).wait(1).to({y:391.2,alpha:0.538},0).wait(1).to({y:377.3,alpha:0.59},0).wait(1).to({y:364.3,alpha:0.64},0).wait(1).to({y:352.2,alpha:0.686},0).wait(1).to({y:340.8,alpha:0.73},0).wait(1).to({y:330.4,alpha:0.77},0).wait(1).to({y:320.7,alpha:0.806},0).wait(1).to({y:311.9,alpha:0.84},0).wait(1).to({y:304,alpha:0.87},0).wait(1).to({y:296.8,alpha:0.898},0).wait(1).to({y:290.5,alpha:0.922},0).wait(1).to({y:285.1,alpha:0.942},0).wait(1).to({y:280.5,alpha:0.96},0).wait(1).to({y:276.7,alpha:0.974},0).wait(1).to({y:273.8,alpha:0.986},0).wait(1).to({y:271.7,alpha:0.994},0).wait(1).to({y:270.4,alpha:0.998},0).wait(1).to({y:270,alpha:1},0).wait(72).to({y:270.5,alpha:0.998},0).wait(1).to({y:272.2,alpha:0.992},0).wait(1).to({y:274.9,alpha:0.981},0).wait(1).to({y:278.7,alpha:0.967},0).wait(1).to({y:283.6,alpha:0.948},0).wait(1).to({y:289.6,alpha:0.926},0).wait(1).to({y:296.6,alpha:0.899},0).wait(1).to({y:304.8,alpha:0.868},0).wait(1).to({y:314,alpha:0.833},0).wait(1).to({y:324.3,alpha:0.793},0).wait(1).to({y:335.8,alpha:0.75},0).wait(1).to({y:348.2,alpha:0.702},0).wait(1).to({y:361.8,alpha:0.651},0).wait(1).to({y:376.5,alpha:0.595},0).wait(1).to({y:392.3,alpha:0.535},0).wait(1).to({y:409.1,alpha:0.471},0).wait(1).to({y:427,alpha:0.403},0).wait(1).to({y:446.1,alpha:0.331},0).wait(1).to({y:466.2,alpha:0.254},0).wait(1).to({y:487.3,alpha:0.174},0).wait(1).to({y:509.6,alpha:0.089},0).wait(1).to({y:533,alpha:0},0).to({_off:true},1).wait(339));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0083F3").s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(458));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-150,722.5,1012.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;