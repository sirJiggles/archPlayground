import * as dotenv from 'dotenv'
import { Lambda } from './lambda'
import { api } from './api'

const program = () => {
  dotenv.config({
    path: process.env.PRODUCTION ? '.env.prod' : undefined,
  })

  // create a simple little lambda
  const lambda = Lambda()
  // make an api gateway and use the lambda
  api({
    eventHandler: lambda,
    name: 'arch-playground-api',
  })
}

export default program
