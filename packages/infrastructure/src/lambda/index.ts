import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import runLambdaRole from './runLambdaRole'
import rolePolicyAttachment from './rolePolicyAttachment'

const Lambda = () => {
  // make the role to be able to run it
  const role = runLambdaRole()

  // attach the policy
  rolePolicyAttachment(role)

  const variables: {
    [key: string]: string
  } = {
    // set other env vars here if needed later
  }

  // only add prod env var if need to
  if (process.env.PRODUCTION) {
    variables['PRODUCTION'] = 'true'
  }

  // just make a simple lambda
  return new aws.lambda.Function('lambda', {
    code: new pulumi.asset.AssetArchive({
      // zip up the output of our serverless function
      '.': new pulumi.asset.FileArchive('../lambdas/dist'),
    }),
    // if using env vars uncomment
    // environment: {
    //   // these are needed to run the lambda
    //   variables,
    // },
    // we want to run the default function from the index
    handler: 'lambda-one/index.handler',
    runtime: 'nodejs12.x',
    role: role.arn,
    timeout: 10,
  })
}

export { Lambda }
