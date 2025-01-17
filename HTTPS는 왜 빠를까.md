# HTTPS
HTTPS는 TLS암호화를 갖춘 HTTP입니다. TLS암호화로 HTTP요청과 응답을 암호화하여 더 안전하게 통신할 수 있습니다. 이를 통해 사용자가 더 신뢰할 수 있는 통신 환경을 구축합니다.
# 안전하지 않은 웹 사이트
Google Chrome 등의 최신 브라우저에서는 HTTPS가 적용되지 않은 웹사이트를*안전하지 않음*으로 표시하고 있습니다. 이처럼 최신 브라우저에서는 웹 사이트의 신뢰성을 인식하도록 하고 있으므로, 최신 웹 환경을 구축 시 HTTPS는 필수라고 할 수 있습니다.
# HTTPS는 왜 느렸을까?
HTTPS가 처음 배포되기 시작했을 때는 값비싼 인증서 서비스가 필요했습니다. 또한 구현도 까다로우면서 통신 속도도 느렸죠. 이로 인해 보안이 필요하지 않(다고 믿는)은 컨텐츠를 다루는 웹사이트에서는 HTTPS를 도입하지 않기로 결정하기도 했습니다. 하지만 암호화되지 않은 웹사이트는 해커의 공격에 매우 취약합니다. 인증서가 적용되지 않은 도메인을 호출할 때 다른 IP 주소를 반환하여 가짜 사이트로 보내면 브라우저에서는 해당 사이트가 진짜 사이트인지 확인할 수 없죠.
# 2010년 이후의 HTTPS
2010년에 무슨 일이 있었을까요?
사실 HTTPS가 2010년에 변한 것은 없습니다. 환경이 변했지요.
서버 클라이언트 할 것 없이 CPU, 메모리 성능이 과거와 비교할 수 없을 정도로 좋아졌습니다.
이로 인해, 암호화에 드는 비용은 더 이상 값비싼 비용이라 부를 수 없게 되었습니다.
