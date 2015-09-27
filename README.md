# Starting the server

1. Set up environment variables in `.env`

```
NODE_ENV=development
EMAIL_ACCOUNT={your email address}
EMAIL_PASSWORD={your email password}
EMAIL_RECIPIENTS={your email address}
```

2. Start the server with foreman: `$ nf start dev=1`. Can simulate the web environment: `$ nf start web=1`.
