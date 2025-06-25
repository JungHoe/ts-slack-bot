# Playwright 공식 권장: Debian 기반 이미지 사용
FROM node:20

# 작업 디렉토리 생성 및 이동
WORKDIR /app

# package.json, package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install --production

# 소스 복사
COPY . .

# Playwright 브라우저 및 의존성 설치 (chromium만)
RUN npx playwright install chromium --with-deps

# cron 실행 (컨테이너 시작 시)
CMD ["npm", "run", "cron-start"]
