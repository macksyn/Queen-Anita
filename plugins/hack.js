const { smd, sleep } = require('../lib');

smd({ cmdname: "hack", type: "fun", info: "hacking prank", filename: __filename }, async (citel) => {
  const messages = [
    "Injecting Malware",
    " █ 10%",
    " █ █ 20%",
    " █ █ █ 30%",
    " █ █ █ █ 40%",
    " █ █ █ █ █ 50%",
    " █ █ █ █ █ █ 60%",
    " █ █ █ █ █ █ █ 70%",
    " █ █ █ █ █ █ █ █ 80%",
    " █ █ █ █ █ █ █ █ █ 90%",
    " █ █ █ █ █ █ █ █ █ █ 100%",
    "System hyjacking on process.. \x0a Conecting to Server 📡 ",
    "Please Wait...",
    "Device successfully connected... \x0a Receiving data...",
    "Data hyjacked from divice 100% completed \\n killing all evidence killing and all malwares...",
    " HACKING COMPLETED ",
    " SENDING LOG DOCUMENTS TO YOUR DM...",
    "✅ DATA SUCCESSFULLY SENT And Connection Disconnected!",
    " BACKLOGS CLEARED!!"
  ];

  let editedMessage;
  for (const message of messages) {
    editedMessage = await citel.send(editedMessage || message);
    await sleep(1000);
    editedMessage = await citel.edit(editedMessage, message);
  }
});
