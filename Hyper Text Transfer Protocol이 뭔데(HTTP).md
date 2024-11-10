---
createdAt: 2024-10-20
---

HTTP는 브라우저가 웹 서버와 통신하기 위한 규약입니다.
HTTP 통신은 TCP와 UDP를 사용하여 통신하며 80번 포트를 사용하는 통신프로토콜입니다.
# HTTP 통신 과정
브라우저에서 웹 서버에 요청하면, 요청에 대해 응답하는 간단한 구조입니다.

![[Pasted image 20241020224352.png]]

# HTTP 응답 코드

| -   | 응답 코드 그룹      | 응답 코드                     | 설명                                                                                                                                |
| --- | ------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 1xx | Informational |                           |                                                                                                                                   |
| 2xx | Successful    | 200 OK                    | 가장 일반적인 경우, 요청된 웹 페이지를 돌려줄 경우                                                                                                     |
| 3xx | Redirection   | 301 Moved Permanently     | 요청된 URL이 (Location: header로 지정된) URL로 완전히 전환된 경우. client는 요청된 URL을 지우던가 새 URL로 바꿔치기 한다                                            |
|     |               | 302 Found                 | HTTP/1.0과 초기 HTTP/1.1과 호환성 유지를 위해 남겨진 코드. 원래는 요청된 URL이 301과는 달리 임시로 변경된 것을 나타내는 것이었으나, 실제 구현이 HTTP 규약의 의도를 벗어나서 303과 307로 분리하여 제정 |
|     |               | 303 See Other             | 요청된 URL이 잠시 다른 URL로 바뀐 것을 알림. (Location: header로 지정된) 바뀐 URL은 GET method로 접근해야 함                                                  |
|     |               | 307 Temporary Redirect    | 요청된 URL이 잠시 다른 URL로 바뀐 것을 알림. (Location: header로 지정된) 바뀐 URL은 GET method로 접근해야 함                                                  |
| 4xx | Client Error  | 400 Bad Request           | HTTP 요청, 특히 문법이 잘못된 경우                                                                                                            |
|     |               | 401 Unauthorized          | 웹 페이지 접근 시 필요한 인증 자격이 없거나 부족한 경우                                                                                                  |
|     |               | 403 Forbidden             | 인증 정보는 있지만 권한이 없는 웹 페이지에 접근했을 경우                                                                                                  |
|     |               | 404 Not Found             | 존재하지 않는 페이지에 접근했을 경우                                                                                                              |
| 5xx | Server Error  | 500 Internal Server Error | 웹 서버 설정이 잘못 되었거나 서버 프로그램에 오류가 있을 때                                                                                                |
|     |               | 503 Service Unavailable   | 웹 서버에 너무 많은 요청이 몰리거나 웹 서버에 부하가 걸려 응답하지 못할 때                                                                                       |

 # HTTP 메서드
## GET
`GET` 메서드는  리소스를 조회합니다.

## HEAD
`HEAD` 메서드는 `GET` 메서드와 동일하지만, Body를 제외하고 상태 줄과 헤더만 반환합니다.

## POST
`POST` 메서드는 리소스를 제출 및 등록합니다.

## PUT
`PUT` 메서드는 리소스 전체를 덮어쓰기 합니다.
(해당 리소스가 없을 경우 생성 처리합니다.)

## DELETE
`DELETE` 메서드는 리소스를 삭제합니다.

## CONNECT
`CONNECT` 메서드는 서버로의 터널을 설정합니다.

## OPTIONS
`OPTIONS` 메서드는 대상 리소스가 어떤 메서드를 지원하는지 설명합니다.

## TRACE
`TRACE` 메서드는 대상 리소스의 loop-back 테스트를 수행합니다.

## PATCH
`PATCH` 메서드는 대상 리소스를 일부 변경합니다.