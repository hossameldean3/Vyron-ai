import { Redis } from '@upstash/redis';
const redis = new Redis({ url: process.env.UPSTASH_REDIS_REST_URL || '', token: process.env.UPSTASH_REDIS_REST_TOKEN || '' });

async function loop(){
  while(true){
    try {
      const item = await redis.rpop('vyron:jobs');
      if (!item) { await new Promise(r=>setTimeout(r, 2000)); continue; }
      const job = JSON.parse(item);
      console.log('PROCESS JOB', job.id, job.prompt);
      // TODO: call your AI render backend, upload result to Cloudflare Stream or S3, then email user.
    } catch (err) {
      console.error('worker error', err);
      await new Promise(r=>setTimeout(r, 3000));
    }
  }
}
loop();
