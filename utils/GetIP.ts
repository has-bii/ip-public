import axios from "axios"

type response = {
    ip : string
}

export default async function GetIP() : Promise<string | undefined> {
    try {
        const res = await axios.get<response>("https://api.ipify.org/?format=json")
        
        if (res.data.ip)
            return res.data.ip
        
    } catch (error) {
        console.error("Cannot get IP")
    }
}