import fs from "fs";
import path from "path";

// Markdown 파일을 찾을 디렉토리
const directoryPath = "./";

// 결과를 저장할 배열
const markdownFiles = [];

// 디렉토리를 재귀적으로 탐색하는 함수
function scanDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      scanDirectory(filePath);
    } else if (path.extname(file).toLowerCase() === ".md") {
      markdownFiles.push({
        name: file,
        path: path.relative(dir, filePath),
      });
    }
  });
}

// 스캔 시작
scanDirectory(directoryPath);

// 결과를 JSON 파일로 저장
fs.writeFileSync("markdown-files.json", JSON.stringify(markdownFiles, null, 2));

console.log("Markdown 파일 목록이 생성되었습니다.");
