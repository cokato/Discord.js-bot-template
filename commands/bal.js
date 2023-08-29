module.exports = {
    config: {
        name: 'balance',
        description: 'See your stats',
        usage: `e!bal`,
    },
    async run (bot,message,args) {
        message.channel.send("You have");
    }
}
