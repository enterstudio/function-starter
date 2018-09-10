module.exports.handler = async (event, context, callback) => {
  const Cosmic = require('cosmicjs')
  const api = Cosmic()
  const bucket = api.bucket({
    slug: 'creative-agency'
  })
  const objects = (await bucket.getObjects()).objects
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    },
    body: JSON.stringify(objects)
  };
  callback(null, response);
}
