import { WebClient } from "@slack/web-api";
import { SLACK_TOKEN, SLACK_CHANNEL, SLACK_ADMIN_DM } from "./secret";

export type ChannelType = "CHANNEL" | "ADMIN_DM";

export async function sendSlackMessage(channelType: ChannelType, text: string): Promise<void> {
  const web = new WebClient(SLACK_TOKEN);
  let channelId: string;
  if (channelType === "CHANNEL") {
    channelId = SLACK_CHANNEL;
  } else if (channelType === "ADMIN_DM") {
    channelId = SLACK_ADMIN_DM;
  } else {
    throw new Error("Invalid channel type");
  }
  await web.chat.postMessage({
    channel: channelId,
    text,
  });
}
