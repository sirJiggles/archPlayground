// this is the lambda
const handler = async () => {
  try {
    const t = 'this is a thing'
    console.log('here we can do some work!', t)
  } catch (error) {
    return {
      statusCode: 500,
      body: error,
    }
  }

  return {
    statusCode: 200,
    // just send back the date
    body: { theDate: new Date().toLocaleDateString() },
  }
}

// for running locally (just comment it out when not)
// export default handler()

// for running as a lambda
exports.handler = handler
