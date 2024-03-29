const Polldreaded = async (client, m, text) => {





let [poll, opt] = text.split("|")

if (text.split("|") < 2)
                return m.reply(`Wrong format::\nExample:- poll who is the gooat|Ronaldo, Cr7, Christiano`);

let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await client.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
         
   })

}

export default Polldreaded;
