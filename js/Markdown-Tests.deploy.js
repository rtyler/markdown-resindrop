smalltalk.addPackage('Markdown-Tests', {});
smalltalk.addClass('MarkdownTests', smalltalk.TestCase, [], 'Markdown-Tests');
smalltalk.addMethod(
unescape('_testSimpleBold'),
smalltalk.method({
selector: unescape('testSimpleBold'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send((smalltalk.Markdown || Markdown), "_toHtml_", [unescape("**coffee**")]));
smalltalk.send(self, "_assert_equals_", [unescape("%3Cp%3E%3Cstrong%3Ecoffee%3C/strong%3E%3C/p%3E"), result]);
return self;}
}),
smalltalk.MarkdownTests);



