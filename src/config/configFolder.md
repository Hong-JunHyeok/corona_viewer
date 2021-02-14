```javascript
 이 API는 시크릿 키를 요구합니다.
 "https://api.corona-19.kr/korea/?serviceKey=key"
 의 형식으로 사용하게 됩니다.

config에서

import {BASE_SERVER , SECRET_KEY} from 'config/config.json'
axios.get(`${BASE_SERVER}/?=${SECRET_KEY}`)

이렇게 사용할 수 있습니다.
```
