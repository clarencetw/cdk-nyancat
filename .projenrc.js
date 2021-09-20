const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Clarence',
  authorAddress: 'me@clarence.tw',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'cdk-nyancat',
  repositoryUrl: 'https://github.com/clarencetw/cdk-nyancat.git',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-s3-assets',
  ],
});
const common_exclude = ['cdk.out', 'cdk.context.json'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);
project.synth();