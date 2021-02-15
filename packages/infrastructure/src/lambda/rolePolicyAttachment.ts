import * as aws from '@pulumi/aws'

const rolePolicyAttachment = (role: aws.iam.Role) => {
  new aws.iam.RolePolicyAttachment('lambdaPolicyAttachment', {
    role,
    policyArn: aws.iam.ManagedPolicy.LambdaFullAccess,
  })
}

export default rolePolicyAttachment
