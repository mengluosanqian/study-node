import '../font/iconfont.css'

function packFont () {
  const oele = document.createElement('div')
  const oSpan = document.createElement('span')
  console.log('111')
  oSpan.className = 'fuzhi1'
  oele.appendChild(oSpan)
  return oele
}

document.body.appendChild(packFont())
