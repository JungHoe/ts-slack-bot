import cron from "node-cron";
import { exec } from "child_process";
import dayjs from "dayjs";

// 워킹데이(월~금) 오전 9시에 index.ts 실행
cron.schedule("0 9 * * 1-5", () => {
  const now = dayjs();
  console.log(`[CRON] ${now.format("YYYY-MM-DD HH:mm:ss")} - index.ts 실행`);
  exec("npx ts-node src/index.ts", (error, stdout, stderr) => {
    if (error) {
      console.error(`[CRON] 실행 오류: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`[CRON] stderr: ${stderr}`);
    }
    if (stdout) {
      console.log(`[CRON] stdout: ${stdout}`);
    }
  });
});

// 종료 방지
setInterval(() => {}, 1000 * 60 * 60);
