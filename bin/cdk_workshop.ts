#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { CdkWorkshopStack } from '../lib/cdk_workshop-stack';

const app = new cdk.App();
new CdkWorkshopStack(app, 'CdkWorkshopStack');