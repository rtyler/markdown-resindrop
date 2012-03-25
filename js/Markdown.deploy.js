smalltalk.addPackage('Markdown', {});
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


