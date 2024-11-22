import { REST, Routes } from 'discord.js';

/*
REGISTER DISCORD COMMANDS
Slash, user and message commands need to be registered with the discord API.
*/

const commands = [
    /*
    Import Message into Webinterface
    Type: Message Command (global)
    */
    {
        name: 'TS to Webinterface',
        type: 3
    },
    /*
    Export Message to YouTube
    Type: Message Command (global)
    */
    {
        name: 'Export TS to YT',
        type: 3
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationCommands(process.env.APP_ID), { body: commands });
    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}
