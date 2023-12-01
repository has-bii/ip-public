import axios from "axios";
import cron from "node-cron"

type response = {
    ip : string
}

async function getIp() {
    try {
        const res = await axios.get<response>("https://api.ipify.org/?format=json")
        
        if (res.data.ip)
            console.log("IP: ", res.data.ip)
        
    } catch (error) {
        console.error("Cannot get IP")
    }
}

await getIp()

cron.schedule("0 * * * *", async () => {
    await getIp()
})