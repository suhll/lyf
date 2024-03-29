const bcGC = async(client, m, text, Owner, NotOwner, participants, pushname) => {

if (!Owner) return m.reply(NotOwner);
if (!text) return m.reply("provide a broadcast message");

let getGroups = await client.groupFetchAllParticipating() 
         let groups = Object.entries(getGroups) 
             .slice(0) 
             .map(entry => entry[1]) 
         let res = groups.map(v => v.id) 

await m.reply("sending broadcast message...")

for (let i of res) { 


let txt = ` IOP Broadcast\n\n🀄 Message: ${text}\n\nWritten by: ${pushname}` 

await client.sendMessage(i, { 
                 image: { 
                     url: "https://telegra.ph/file/3ce097390435588fecf73.jpg" 
                 }, mentions: participants.map(a => a.id),
                 caption: `${txt}` 
             }) 
         } 

}

export default bcGC;
