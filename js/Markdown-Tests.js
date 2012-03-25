smalltalk.addPackage('Markdown-Tests', {});
smalltalk.addClass('MarkdownTests', smalltalk.TestCase, [], 'Markdown-Tests');
smalltalk.addMethod(
unescape('_testSimpleBold'),
smalltalk.method({
selector: unescape('testSimpleBold'),
category: 'not yet classified',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send((smalltalk.Markdown || Markdown), "_toHtml_", [unescape("**coffee**")]));
smalltalk.send(self, "_assert_equals_", [unescape("%3Cp%3E%3Cstrong%3Ecoffee%3C/strong%3E%3C/p%3E"), result]);
return self;},
args: [],
source: unescape('testSimpleBold%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20Markdown%20toHtml%3A%20%27**coffee**%27.%0A%09self%20assert%3A%20%27%3Cp%3E%3Cstrong%3Ecoffee%3C/strong%3E%3C/p%3E%27%20equals%3A%20result.'),
messageSends: ["toHtml:", "assert:equals:"],
referencedClasses: ["Markdown"]
}),
smalltalk.MarkdownTests);



