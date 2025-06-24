import { WebClient } from "@slack/web-api";

export interface SlackMessage {
  channel: string;
  text: string;
}

export async function sendSlackMessage(token: string, message: SlackMessage): Promise<void> {
  const web = new WebClient(token);
  await web.chat.postMessage({
    channel: message.channel,
    text: message.text,
  });
}
