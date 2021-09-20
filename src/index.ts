import * as path from 'path';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as assets from '@aws-cdk/aws-s3-assets';
import * as cdk from '@aws-cdk/core';

/**
 * The interface for NyanCat
 */
export interface NyanCatProps {
  /**
   * The VPC
   */
  readonly vpc?: ec2.IVpc;
}

export class NyanCat extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: NyanCatProps = {}) {
    super(scope, id);

    const vpc = props.vpc ?? new ec2.Vpc(this, 'Vpc', { maxAzs: 3, natGateways: 0 });
    const asset = new assets.Asset(this, 'Asset', { path: path.join(__dirname, '../ec2-configure/configure.sh') });

    const instance = new ec2.Instance(this, 'Instance', {
      vpc,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T3,
        ec2.InstanceSize.NANO,
      ),
      machineImage: new ec2.AmazonLinuxImage({ generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2 }),
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC,
      },
    });
    instance.connections.allowFromAnyIpv4(ec2.Port.tcp(80));

    const localPath = instance.userData.addS3DownloadCommand({
      bucket: asset.bucket,
      bucketKey: asset.s3ObjectKey,
    });
    instance.userData.addExecuteFileCommand({
      filePath: localPath,
      arguments: '--verbose -y',
    });
    asset.grantRead(instance.role);

    new cdk.CfnOutput(this, 'InstanceIP', {
      value: `http://${instance.instancePublicDnsName}`,
    });
  }
}
