import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import { NyanCat } from '../src/index';

let app: cdk.App;
let env: { region: string; account: string };
let stack: cdk.Stack;

beforeEach(() => {
  app = new cdk.App();
  env = {
    region: 'us-east-1',
    account: '888888888888',
  };
  stack = new cdk.Stack(app, 'demo-stack', { env });
});

test('Snapshot - NyanCat', () => {
  const vpc = ec2.Vpc.fromLookup(stack, 'VPC', {
    isDefault: true,
  });

  new NyanCat(stack, 'NyanCat', {
    vpc,
  });

  expect(app.synth().getStackArtifact(stack.artifactId).template).toMatchSnapshot();
});
