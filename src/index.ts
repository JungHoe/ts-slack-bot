import { sendSlackMessage } from "./slack";
import { fetchDataFromSite } from "./crawler";
import dayjs from "dayjs";

async function main() {
  const TODAY = dayjs().format("YYYY.MM.DD");
  const data = await fetchDataFromSite();
  if (!data || data.length === 0) {
    console.log("오늘 연차 현황이 없습니다.");
    return;
  }
  const lines = data.map((item) => ` - ${item.name} - ${item.type}`).join("\n");
  const text = `${TODAY} 연차 현황 입니다.\n${lines}`;
  // 슬랙 메시지 전송
  await sendSlackMessage("CHANNEL", text);
  console.log("슬랙 메시지 전송 완료!");
}

main();
