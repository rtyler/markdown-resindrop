Smalltalk current createPackage: 'Markdown' properties: #{}!
Object subclass: #Markdown
	instanceVariableNames: ''
	category: 'Markdown'!

Markdown class instanceVariableNames: 'showdown'!

!Markdown class methodsFor: 'actions'!

toHtml: markdownText
	"Process/parse the markdownText and return a String of Markdown"
	showdown ifNil: [ showdown := <new Showdown.converter()> ].
	^ showdown makeHtml: markdownText.
!

asTagBrush: markdownText
	" Generate a TagBrush object that can be used in the Amber rendering pipeline"
	| html |
	html := self toHtml: markdownText.
	" The HTML gets wrapped in a <div/> to make sure that there's a root element for display"
	^ TagBrush fromJQuery: (window jQuery: '<div>', html, '</div>') canvas: nil.
! !

