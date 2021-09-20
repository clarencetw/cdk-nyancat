import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import { NyanCat } from './index';

const app = new cdk.App();

const env = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};

const stack = new cdk.Stack(app, 'stack', { env });

const vpc = ec2.Vpc.fromLookup(stack, 'VPC', {
  isDefault: true,
});

new NyanCat(stack, 'NyanCat', {
  vpc,
});
