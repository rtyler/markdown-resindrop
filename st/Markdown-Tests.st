Smalltalk current createPackage: 'Markdown-Tests' properties: #{}!
TestCase subclass: #MarkdownTests
	instanceVariableNames: ''
	category: 'Markdown-Tests'!

!MarkdownTests methodsFor: 'not yet classified'!

testSimpleBold
	| result |
	result := Markdown toHtml: '**coffee**'.
	self assert: '<p><strong>coffee</strong></p>' equals: result.
! !

