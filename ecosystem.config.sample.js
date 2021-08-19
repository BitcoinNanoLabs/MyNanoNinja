module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'Bitcoin Nano Ninja',
      script    : 'bin/www',
      "log_date_format" : "YYYY-MM-DD HH:mm:ss",
      env: {
        NODE_ENV: 'production',
        DOMAIN: 'https://bitcoinnano.org/ninja',
        NODE_RPC: 'https://api.bitcoinnano.org',
        NODE_INTERNAL: '12000',
        MONGO_URL: 'mongodb://localhost:27017/bitcoinnanoninja',
        MONGO_SESSIONURL: 'mongodb://localhost:27017/bitcoinnanoninja-session',
        SESSION_SECRET: 'ohyeahnanoisgreat',
        SENTRY_URL: '',
        FACEBOOK_CLIENTID: '',
        FACEBOOK_CLIENTSECRET: '',
        TWITTER_CONSUMERKEY: '',
        TWITTER_CONSUMERSECRET: '',
        GOOGLE_CLIENTID: '',
        GOOGLE_CLIENTSECRET: '',
        GITHUB_CLIENTID: '',
        GITHUB_CLIENTSECRET: '',
        REDDIT_CLIENTID: '',
        REDDIT_CLIENTSECRET: '',
        DISCORD_CLIENTID: '',
        DISCORD_CLIENTSECRET: '',
        EMAIL_HOST: 'smtp.myhost.com',
        EMAIL_USER: 'alert@mynano.ninja',
        EMAIL_PASS: 'mypassword',
        DPOW_USER: 'user',
        DPOW_KEY: 'longhash',
        DRPC_REPSONLINE: '[]',
        VERIFICATION_AMOUNT: '1',
        MATOMO_URL: "https://piwik.org/piwik.php",
        MATOMO_TOKEN: "yourtoken",
        MATOMO_SITE: "1",
        PORT: 4000
      }
    },
    {
      name      : 'Bitcoin Nano Ninja - CRON',
      script    : 'cron',
      "log_date_format" : "YYYY-MM-DD HH:mm:ss",
      env: {
        NODE_ENV: 'production',
        DOMAIN: 'https://bitcoinnano.org/ninja',
        NODE_RPC: 'https://api.bitcoinnano.org',
        NODE_WS: 'wss://ws.bitcoinnano.org',
        MONGO_URL: 'mongodb://localhost:27017/bitcoinnanoninja',
        SENTRY_URL: '',
        EMAIL_HOST: 'smtp.myhost.com',
        EMAIL_USER: 'alert@mynano.ninja',
        EMAIL_PASS: 'mypassword',
        DISCORD_HOOK: 'https://webhook.url',
        DRPC_REPSONLINE: '[]'
      }
    }
  ]
};
