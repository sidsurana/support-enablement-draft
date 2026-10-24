import {createProxy} from './ai-proxy.mjs';
export function createHandler(options={}){return createProxy({...options,project:"sid-cos-arphie-firstvalue-20261021",task:"cos.arphie.support-enablement.v1"});}
export default async function handler(req,res){return createHandler()(req,res);}
