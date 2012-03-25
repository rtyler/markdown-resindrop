smalltalk.addPackage('Markdown', {});
smalltalk.addClass('MarkdownTextArea', smalltalk.Widget, ['fieldName', 'columns', 'rows'], 'Markdown');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["md_textarea_container"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_id_", ["md_preview_link"]);smalltalk.send($rec, "_with_", ["Preview"]);return smalltalk.send($rec, "_onClick_", [(function(event){smalltalk.send(event, "_preventDefault", []);return smalltalk.send(self, "_previewOnClick_", [event]);})]);})(smalltalk.send(html, "_a", []));(function($rec){smalltalk.send($rec, "_class_", ["md_textarea"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_name_", [self['@fieldName']]);smalltalk.send($rec, "_at_put_", ["cols", self['@columns']]);return smalltalk.send($rec, "_at_put_", ["rows", self['@rows']]);})(smalltalk.send(html, "_textarea", []));})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", ["md_preview"]);return smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B%20border%3A%201px%20solid%20%23cecece")]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.MarkdownTextArea);

smalltalk.addMethod(
unescape('_setName_'),
smalltalk.method({
selector: unescape('setName%3A'),
fn: function (aName){
var self=this;
(self['@fieldName']=aName);
return self;}
}),
smalltalk.MarkdownTextArea);

smalltalk.addMethod(
unescape('_setColumns_'),
smalltalk.method({
selector: unescape('setColumns%3A'),
fn: function (aNumber){
var self=this;
(self['@columns']=aNumber);
return self;}
}),
smalltalk.MarkdownTextArea);

smalltalk.addMethod(
unescape('_setRows_'),
smalltalk.method({
selector: unescape('setRows%3A'),
fn: function (aNumber){
var self=this;
(self['@rows']=aNumber);
return self;}
}),
smalltalk.MarkdownTextArea);

smalltalk.addMethod(
unescape('_previewOnClick_'),
smalltalk.method({
selector: unescape('previewOnClick%3A'),
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
return self;}
}),
smalltalk.MarkdownTextArea);



smalltalk.addClass('Markdown', smalltalk.Object, [], 'Markdown');

smalltalk.Markdown.klass.iVarNames = ['showdown'];
smalltalk.addMethod(
unescape('_toHtml_'),
smalltalk.method({
selector: unescape('toHtml%3A'),
fn: function (markdownText){
var self=this;
(($receiver = self['@showdown']) == nil || $receiver == undefined) ? (function(){return (self['@showdown']=new Showdown.converter());})() : $receiver;
return smalltalk.send(self['@showdown'], "_makeHtml_", [markdownText]);
return self;}
}),
smalltalk.Markdown.klass);

smalltalk.addMethod(
unescape('_asTagBrush_'),
smalltalk.method({
selector: unescape('asTagBrush%3A'),
fn: function (markdownText){
var self=this;
var html=nil;
(html=smalltalk.send(self, "_toHtml_", [markdownText]));
return smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromJQuery_canvas_", [smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [smalltalk.send(smalltalk.send(unescape("%3Cdiv%3E"), "__comma", [html]), "__comma", [unescape("%3C/div%3E")])]), nil]);
return self;}
}),
smalltalk.Markdown.klass);


