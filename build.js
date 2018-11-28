const fs = require('fs')

Array.prototype.shuffle = function shuffle() {
	for (let i = 0, l = this.length; i < l; i++) {
		let j = Math.floor(Math.random() * l)
		let t = this[i]
		this[i] = this[j]
		this[j] = t
	}

	return this
}

Array.range = function range(a, b) {
	let l = []
	for (let i = a; i < a + b; i++) l.push(i)
	return l
}

function rand(n) {
	return Math.floor(Math.random() * n)
}

function chr(x) {
	return String.fromCharCode(x)
}

function ord(c) {
	return c.charCodeAt(0)
}

const flag = "Shellmates{Ch40S-Is-4-L1f3_sTyl3-==}"
let css = ["\n.c { display: flex; }"]
let html = ""

let ids = Array.range(0, flag.length).shuffle()

let i = 0
for (let c of flag) {

	html += `<i class="nth-child（${ids[i]}）"></i>`
	css.push(`.c .nth-child（${ids[i]}）::after { color: rgba(${rand(255)},${rand(255)},${rand(255)});text-transform: uppercase; content: '${c}'; position: relative; font-weight: bold; top: ${rand(1e3) - 500}; left: ${rand(1e3) - 500}}`)
	css.push(`.c :nth-child(${ids[i]+1}){ order: ${i}; position: absolute; content: '${chr(rand(30)+60)}';font-size: ${rand(10) + 20}px;top: ${rand(500)}; left: ${rand(500)}}`)

	++i
}

html = `
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>CHOAS</title>
		<link rel="stylesheet" href="index.css">
		<style>
			body {
				background: black;
			}
		</style>
	</head>
	<body>
		<div class="c">${html}</div>
	</body>
</html>
`

fs.writeFile('index.html', html, (e) => {
	if (e) console.log('Could not write to index.html')
})

fs.writeFile('index.css', css.shuffle().join(''), e => {
	if (e) console.log('Could not write to index.js')
})
