const express = require("express")
const { Client, GatewayIntentBits } = require("discord.js")
//import express from 'express';
//import { Client, GatewayIntentBits } from 'discord.js';

const app = express() // Create express app
const port = process.env.PORT || 3000 // Get port from .env or 3000
const wsPort = 3001


/*
* API INTEGRATION
*/

app.get('/test', (req, res) => {
    res.json({test: "WOW"})
    //res.send('Hello World!')
})

// Create a WebSocket server
const wss = new WebSocketServer({ port: wsPort })
let clients = []
wss.on('connection', ws => {
    clients.push(ws)
    console.log('New client connected')
    ws.on('close', () => {
        clients = clients.filter(client => client !== ws)
        console.log('Client disconnected')
    })
})

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
})
console.log(`WebSocket server is running on ws://localhost:${wsPort}`)

/*
* DISCORD INTEGRATION
*/

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    //console.log(interaction)
    try {
    console.log(interaction.targetMessage)
    } catch (error) {
    console.error(error);
    }
    await interaction.deferReply();
    await interaction.deleteReply();
    return
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'Import Message') {
    await interaction.reply('Pong!');
    }
});

client.login(process.env.DISCORD_TOKEN);

