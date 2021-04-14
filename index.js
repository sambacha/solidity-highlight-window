const fs = require('fs')
const shiki = require('shiki')

shiki
  .getHighlighter({
    theme: 'slack-dark'
  })
  .then((highlighter) => {
    const html = highlighter.codeToHtml(
      fs.readFileSync('DebugHelper.sol', 'utf-8'),
      'solidity'
    )

    const out = `
<title>Shiki</title>
<link rel="stylesheet" href="style.css">
${html}`

    fs.writeFileSync('debug2.html', out.trim())

    console.log('done highlighting index.js')
  })
