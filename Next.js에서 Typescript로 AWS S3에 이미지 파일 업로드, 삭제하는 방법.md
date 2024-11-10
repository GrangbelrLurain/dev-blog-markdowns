---
createdAt: 2023-03-21
---

AWS S3는 클라우드 스토리지 서비스로, 이미지나 동영상 등의 파일을 업로드하고 관리할 수 있습니다. 이를 위해서는 AWS 계정이 필요하며, AWS SDK를 이용하여 이미지 파일을 업로드/삭제할 수 있습니다.

## AWS SDK 설치

AWS SDK를 사용하기 위해서는 먼저 아래의 명령어를 실행하여 AWS SDK를 설치해야 합니다.

```
npm install aws-sdk

```

## 이미지 파일 업로드

```tsx
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: 'ACCESS_KEY_ID',
  secretAccessKey: 'SECRET_ACCESS_KEY',
  region: 'REGION',
});

const uploadFile = async (file: File, bucketName: string): Promise<string> => {
  const fileStream = fs.createReadStream(file.path);

  const params = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  const result = await s3.upload(params).promise();

  return result.Location;
};

```

위 코드에서 `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY`, `REGION`은 각각 AWS 계정의 액세스 키 ID, 시크릿 액세스 키, 지역을 의미합니다. `uploadFile` 함수는 `File` 객체와 버킷 이름을 인자로 받아, 해당 파일을 지정한 버킷에 업로드하고 업로드된 파일의 URL을 반환합니다.

## 이미지 파일 삭제

```tsx
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: 'ACCESS_KEY_ID',
  secretAccessKey: 'SECRET_ACCESS_KEY',
  region: 'REGION',
});

const deleteFile = async (key: string, bucketName: string): Promise<void> => {
  const params = {
    Bucket: bucketName,
    Key: key,
  };

  await s3.deleteObject(params).promise();
};

```

위 코드에서 `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY`, `REGION`은 각각 AWS 계정의 액세스 키 ID, 시크릿 액세스 키, 지역을 의미합니다. `deleteFile` 함수는 삭제할 파일의 `Key`와 버킷 이름을 인자로 받아, 해당 파일을 삭제합니다.

위와 같이 AWS SDK를 이용하여 Next.js에서 Typescript로 이미지 파일을 업로드/삭제할 수 있습니다.