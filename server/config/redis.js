const { createClient } = require('redis')

const getConnection = async () => {
  const client = createClient()

  client.on('error', (err) => console.log('Redis Client Error', err))

  await client.connect()
  return client

  // await client.set('key', 'value')
  // const value = await client.get('key')
  // console.log(value)
}

module.exports = {
  getConnection,
}
