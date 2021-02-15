import * as dotenv from 'dotenv'
import { Lambda } from './lambda'

const program = () => {
  dotenv.config({
    path: process.env.PRODUCTION ? '.env.prod' : undefined,
  })

  // create a simple little lambda
  Lambda()
}

export default program
