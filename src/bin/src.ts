#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BaseStack } from '../lib/base-stack';

const app = new cdk.App();
new BaseStack(app, 'BaseStack', {
    env: {
        account: '116827804402', 
        region: 'us-east-1'
    },
    tags: {
        project: "cdk-testing"
    }
});
