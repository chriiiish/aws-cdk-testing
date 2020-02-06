import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import core = require('@aws-cdk/core');
import Src = require('../lib/base-stack');

test('Contains one S3 Bucket', () => {
    const app = new core.App();
    // WHEN
    const stack = new Src.BaseStack(app, 'MyTestStack');
    // THEN
    expect(stack).toHaveResource("AWS::S3::Bucket");
});

test("Has bucket versioning", () => {
  const app = new core.App();
  // WHEN
  const stack = new Src.BaseStack(app, 'MyTestStack');
  // THEN
  expect(stack).toHaveResource("AWS::S3::Bucket", {
    VersioningConfiguration: {
      Status: "Enabled"
    }
  });
});
