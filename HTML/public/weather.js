const crypto = require('crypto')
const url = require('url')
const querystring = require('query-string')
const got = require('got')

const secret = 'ShYWmJ6dUqfjhkGgy' // 秘钥
const publicKey = 'Pi2sMvhMioozhNAGA' // 公钥

// 心知 V4 接口签名
function signature (urlString, paramsObj) {
  if (!urlString) {
    return
  }
  const obj = url.parse(urlString, true, true)
  const params = Object.assign({}, paramsObj, obj.query)
  let result = querystring.stringify(params, { encode: false })
  const sig = crypto
    .createHmac('sha1', secret)
    .update(result, 'utf8')
    .digest('base64')

  result += `&sig=${encodeURIComponent(sig)}`

  return result
}

async function main () {
  const ts = Math.round(Date.now() / 1000)
  const ttl = 600
  const latitude = 29.5617
  const longitude = 120.0962

  let url = 'https://api.seniverse.com/v4?fields=precip_minutely'
  const query = signature(url, {
    ttl,
    ts,
    public_key: publicKey,
    locations: `${latitude}:${longitude}`
  })

  const rsp = await got.get(url, {
    responseType: 'json',
    searchParams: query
  }).catch(err => {
    console.log(err)
  })

  console.log('success:', JSON.stringify(rsp.body))
}

main()
