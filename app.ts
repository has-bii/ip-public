import cron from "node-cron";
import GetIP from "./utils/GetIP";
import sendEmail from "./utils/sendEmail";
import { changeIP } from "./utils/change-ip";

let first: undefined | string;

async function main() {
  try {
    if (first === undefined) {
      first = await GetIP();
      console.log("First IP: ", first);
      sendEmail("First IP", "First IP: " + first);
    }

    const newIP = await GetIP();

    if (newIP !== undefined && first !== newIP) {
      first = newIP;

      console.log("New IP: ", newIP);
      sendEmail("IP Has Changed!!!", "New IP: " + newIP);
      changeIP({
        comment: `Updated at ${new Date().toUTCString()}`,
        content: newIP,
        name: "hasbii.tech",
        proxied: true,
        ttl: 3600,
        type: "A",
      });
    }
  } catch (error) {
    console.error("Error: ", JSON.stringify(error, null, 2));
  }
}

await main();

cron.schedule("0 * * * *", async () => {
  await main();
});
