# VOD Stuff

## Frontend

## Backend

### Discord Integration

This application providesd integration with Discord and allows to import timestamps through the right-click-menu on messages.

For this the app has to register used slash, user and message commands with the discord API. This can be done by running the `commands.js` script with ```run node register```.

During operation a discord client runs and listens for events through the discord app/bot.

## Environment File

Keys, tokens and other secrets aswell as some configuration options are stored in an environment file. This environment file should be named `.env`. An partialy filled out example is provided in `sample.env`.

1. Rename `sample.end` to `.env`
2. Fill out all secrets required for your use case
