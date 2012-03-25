smalltalk.addPackage('Markdown', {});
smalltalk.addClass('Markdown', smalltalk.Object, [], 'Markdown');

smalltalk.Markdown.klass.iVarNames = ['showdown'];
smalltalk.addMethod(
unescape('_toHtml_'),
smalltalk.method({
selector: unescape('toHtml%3A'),
category: 'actions',
fn: function (markdownText){
var self=this;
(($receiver = self['@showdown']) == nil || $receiver == undefined) ? (function(){return (self['@showdown']=new Showdown.converter());})() : $receiver;
return smalltalk.send(self['@showdown'], "_makeHtml_", [markdownText]);
return self;},
args: ["markdownText"],
source: unescape('toHtml%3A%20markdownText%0A%09%22Process/parse%20the%20markdownText%20and%20return%20a%20String%20of%20Markdown%22%0A%09showdown%20ifNil%3A%20%5B%20showdown%20%3A%3D%20%3Cnew%20Showdown.converter%28%29%3E%20%5D.%0A%09%5E%20showdown%20makeHtml%3A%20markdownText.%0A'),
messageSends: ["ifNil:", "makeHtml:"],
referencedClasses: []
}),
smalltalk.Markdown.klass);

smalltalk.addMethod(
unescape('_asTagBrush_'),
smalltalk.method({
selector: unescape('asTagBrush%3A'),
category: 'actions',
fn: function (markdownText){
var self=this;
var html=nil;
(html=smalltalk.send(self, "_toHtml_", [markdownText]));
return smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromJQuery_canvas_", [smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [smalltalk.send(smalltalk.send(unescape("%3Cdiv%3E"), "__comma", [html]), "__comma", [unescape("%3C/div%3E")])]), nil]);
return self;},
args: ["markdownText"],
source: unescape('asTagBrush%3A%20markdownText%0A%09%22%20Generate%20a%20TagBrush%20object%20that%20can%20be%20used%20in%20the%20Amber%20rendering%20pipeline%22%0A%09%7C%20html%20%7C%0A%09html%20%3A%3D%20self%20toHtml%3A%20markdownText.%0A%09%22%20The%20HTML%20gets%20wrapped%20in%20a%20%3Cdiv/%3E%20to%20make%20sure%20that%20there%27s%20a%20root%20element%20for%20display%22%0A%09%5E%20TagBrush%20fromJQuery%3A%20%28window%20jQuery%3A%20%27%3Cdiv%3E%27%2C%20html%2C%20%27%3C/div%3E%27%29%20canvas%3A%20nil.'),
messageSends: ["toHtml:", "fromJQuery:canvas:", "jQuery:", unescape("%2C")],
referencedClasses: ["TagBrush"]
}),
smalltalk.Markdown.klass);


