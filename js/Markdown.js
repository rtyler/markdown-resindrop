smalltalk.addPackage('Markdown', {});
smalltalk.addClass('MarkdownTextArea', smalltalk.Widget, ['fieldName', 'columns', 'rows'], 'Markdown');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["md_textarea_container"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_id_", ["md_preview_link"]);smalltalk.send($rec, "_with_", ["Preview"]);return smalltalk.send($rec, "_onClick_", [(function(event){smalltalk.send(event, "_preventDefault", []);return smalltalk.send(self, "_previewOnClick_", [event]);})]);})(smalltalk.send(html, "_a", []));(function($rec){smalltalk.send($rec, "_class_", ["md_textarea"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_name_", [self['@fieldName']]);smalltalk.send($rec, "_at_put_", ["cols", self['@columns']]);return smalltalk.send($rec, "_at_put_", ["rows", self['@rows']]);})(smalltalk.send(html, "_textarea", []));})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", ["md_preview"]);return smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B%20border%3A%201px%20solid%20%23cecece")]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27md_textarea_container%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09href%3A%20%27%23%27%3B%0A%09%09%09%09id%3A%20%27md_preview_link%27%3B%0A%09%09%09%09with%3A%20%27Preview%27%3B%0A%09%09%09%09onClick%3A%20%5B%20%3Aevent%20%7C%20event%20preventDefault.%20self%20previewOnClick%3A%20event%20%5D.%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20%27md_textarea%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09html%20textarea%20name%3A%20fieldName%3B%20at%3A%20%27cols%27%20put%3A%20columns%3B%20at%3A%20%27rows%27%20put%3A%20rows.%0A%09%09%09%09%5D.%0A%09%09%09html%20div%20class%3A%20%27md_preview%27%3B%20style%3A%20%27display%3A%20none%3B%20border%3A%201px%20solid%20%23cecece%27.%0A%09%09%5D.'),
messageSends: ["class:", "with:", "href:", "id:", "onClick:", "preventDefault", "previewOnClick:", "a", "name:", "at:put:", "textarea", "div", "style:"],
referencedClasses: []
}),
smalltalk.MarkdownTextArea);

smalltalk.addMethod(
unescape('_setName_'),
smalltalk.method({
selector: unescape('setName%3A'),
category: 'setters',
fn: function (aName){
var self=this;
(self['@fieldName']=aName);
return self;},
args: ["aName"],
source: unescape('setName%3A%20aName%0A%09fieldName%20%3A%3D%20aName.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MarkdownTextArea);

smalltalk.addMethod(
unescape('_setColumns_'),
smalltalk.method({
selector: unescape('setColumns%3A'),
category: 'setters',
fn: function (aNumber){
var self=this;
(self['@columns']=aNumber);
return self;},
args: ["aNumber"],
source: unescape('setColumns%3A%20aNumber%0A%09columns%20%3A%3D%20aNumber.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MarkdownTextArea);

smalltalk.addMethod(
unescape('_setRows_'),
smalltalk.method({
selector: unescape('setRows%3A'),
category: 'setters',
fn: function (aNumber){
var self=this;
(self['@rows']=aNumber);
return self;},
args: ["aNumber"],
source: unescape('setRows%3A%20aNumber%0A%09rows%20%3A%3D%20aNumber.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MarkdownTextArea);

smalltalk.addMethod(
unescape('_previewOnClick_'),
smalltalk.method({
selector: unescape('previewOnClick%3A'),
category: 'actions',
fn: function (event){
var self=this;
var text=nil;
var preview=nil;
var myself=nil;
(myself=smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [smalltalk.send(event, "_target", [])]));
(preview=smalltalk.send(".md_preview", "_asJQuery", []));
(text=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3D"), "__comma", [self['@fieldName']]), "__comma", [unescape("%5D")]), "_asJQuery", []), "_val", []));
smalltalk.send(smalltalk.send(".md_textarea", "_asJQuery", []), "_toggle", []);
smalltalk.send(smalltalk.send(preview, "_toggle", []), "_empty", []);
smalltalk.send((function(html){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.Markdown || Markdown), "_asTagBrush_", [text])]);}), "_appendToJQuery_", [preview]);
((($receiver = smalltalk.send(smalltalk.send(myself, "_text", []), "__eq", ["Preview"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(myself, "_text_", ["Write"]);})() : (function(){return smalltalk.send(myself, "_text_", ["Preview"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(myself, "_text_", ["Write"]);}), (function(){return smalltalk.send(myself, "_text_", ["Preview"]);})]));
return self;},
args: ["event"],
source: unescape('previewOnClick%3A%20event%0A%09%7C%20text%20preview%20myself%20%7C%0A%0A%09myself%20%3A%3D%20window%20jQuery%3A%20%28event%20target%29.%0A%09preview%20%3A%3D%20%27.md_preview%27%20asJQuery.%0A%09text%20%3A%3D%20%28%27%3Ainput%5Bname%3D%27%2C%20fieldName%2C%20%27%5D%27%29%20asJQuery%20val.%0A%0A%09%27.md_textarea%27%20asJQuery%20toggle.%0A%09preview%20toggle%20empty.%0A%0A%09%5B%20%3Ahtml%20%7C%20html%20with%3A%20%28Markdown%20asTagBrush%3A%20text%29%20%5D%20appendToJQuery%3A%20preview.%0A%0A%09%28myself%20text%29%20%3D%20%27Preview%27%0A%09%09ifTrue%3A%20%5B%20myself%20text%3A%20%27Write%27%20%5D%0A%09%09ifFalse%3A%20%5B%20myself%20text%3A%20%27Preview%27%20%5D.%09'),
messageSends: ["jQuery:", "target", "asJQuery", "val", unescape("%2C"), "toggle", "empty", "appendToJQuery:", "with:", "asTagBrush:", "ifTrue:ifFalse:", unescape("%3D"), "text", "text:"],
referencedClasses: ["Markdown"]
}),
smalltalk.MarkdownTextArea);



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


