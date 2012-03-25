Smalltalk current createPackage: 'Markdown' properties: #{}!
Widget subclass: #MarkdownTextArea
	instanceVariableNames: 'fieldName columns rows'
	category: 'Markdown'!

!MarkdownTextArea methodsFor: 'actions'!

previewOnClick: event
	| text preview myself |

	myself := window jQuery: (event target).
	preview := '.md_preview' asJQuery.
	text := (':input[name=', fieldName, ']') asJQuery val.

	'.md_textarea' asJQuery toggle.
	preview toggle empty.

	[ :html | html with: (Markdown asTagBrush: text) ] appendToJQuery: preview.

	(myself text) = 'Preview'
		ifTrue: [ myself text: 'Write' ]
		ifFalse: [ myself text: 'Preview' ].
! !

!MarkdownTextArea methodsFor: 'rendering'!

renderOn: html
	html div
		class: 'md_textarea_container';
		with: [
			html a
				href: '#';
				id: 'md_preview_link';
				with: 'Preview';
				onClick: [ :event | event preventDefault. self previewOnClick: event ].
			html div
				class: 'md_textarea';
				with: [
					html textarea name: fieldName; at: 'cols' put: columns; at: 'rows' put: rows.
				].
			html div class: 'md_preview'; style: 'display: none; border: 1px solid #cecece'.
		].
! !

!MarkdownTextArea methodsFor: 'setters'!

setName: aName
	fieldName := aName.
!

setColumns: aNumber
	columns := aNumber.
!

setRows: aNumber
	rows := aNumber.
! !

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

