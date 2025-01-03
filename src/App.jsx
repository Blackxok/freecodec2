import { marked } from 'marked'
import React, { useEffect, useState } from 'react'
import './App.css'

// Default markdown matni
const defaultMarkdown = `
# H1 - Welcome to Markdown Previewer
## H2 - Subheading
[Visit Google](https://www.google.com)

**Bold Text Example**

Inline code: \`<div></div>\`

\`\`\`javascript
// Code Block Example
function sayHello() {
  console.log("Hello, world!");
}
\`\`\`

- List Item 1
- List Item 2

> Blockquote Example

![Sample Image](https://via.placeholder.com/150)
`

export default function App() {
	const [text, setText] = useState(defaultMarkdown)

	const handleChange = e => {
		setText(e.target.value)
	}

	useEffect(() => {
		marked.setOptions({
			breaks: true,
		})
	}, [])

	return (
		<div className='container'>
			<h1 className='title'>Markdown Previewer</h1>

			<div className='editor-container'>
				<textarea id='editor' value={text} onChange={handleChange} />
			</div>

			<div
				id='preview'
				className='preview-container'
				dangerouslySetInnerHTML={{ __html: marked(text) }}
			/>
		</div>
	)
}
