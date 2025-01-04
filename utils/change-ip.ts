import axios from "axios";

type Params = {
  comment: string;
  content: string;
  name: string;
  proxied: boolean;
  ttl: number;
  type: "A";
};

export const changeIP = async (payload: Params) => {
  try {
    const res = await axios.patch(
      `https://api.cloudflare.com/client/v4/zones/${Bun.env.ZONE_ID}/dns_records/${Bun.env.RECORD_ID}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Bun.env.CLOUDFLARE_TOKEN}`,
        },
      }
    );
  } catch (error) {}
};
