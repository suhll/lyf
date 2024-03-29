const Ping = async(client, m, dreadedspeed, sendReact) => {

await sendReact("✈️");

const Dreaded = await client.sendMessage(m.chat, { text: 'Checking speed. . .' }, {quoted: m});

await client.relayMessage(m.chat, {
      protocolMessage: {
        key: Dreaded.key,
        type: 14,
        editedMessage: {
          conversation: `${dreadedspeed.toFixed(4)}ms`
        }
      }
    }, {});
     await sendReact("🦄");

}

export default Ping;
