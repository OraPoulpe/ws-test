import * as env from 'env-var';

export const server = {
  port: env.get('PORT').default(3000).asPortNumber(),
  wsPort: env.get('WS_PORT').default(80).asPortNumber(),
};
// export const serverToListen = {
//   host: env.get('LISTENING_HOST').required().asString(),
//   port: env.get('LISTENING_PORT').required().asPortNumber(),
// };
