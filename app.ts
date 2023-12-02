import cron from "node-cron"
import GetIP from "./utils/GetIP"
import sendEmail from "./utils/sendEmail"

let first : undefined | string

async function main() {
    try {
        if (first === undefined) {
            first = await GetIP()
            console.log("First IP: ", first)
            sendEmail("First IP: "+first)
        }
        
        const newIP = await GetIP()
        
        if (newIP !== undefined && (first !== newIP)) {
            first = newIP
            
            console.log("New IP: ", newIP)
            sendEmail("New IP: " +newIP)
        }
    } catch (error) {
        console.error("Error: ", JSON.stringify(error, null, 2))
    }
}

await main()

cron.schedule("*/5 * * * *", async () => {
    await main()
})