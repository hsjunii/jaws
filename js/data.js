// 지점 데이터
var data = [
        {
          "name": "죠스떡볶이 내발산점",
          "addr": "서울특별시 강서구 내발산동",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101240.51207594626!2d126.77527874533885!3d37.53701291744364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c5b4cd59ed1%3A0xf6407f2417b37aed!2z7KOg7Iqk65ah67O27J20!5e0!3m2!1sko!2skr!4v1548658208395"
        },
        {
          "name": "죠스떡볶이 방화역점",
          "addr": "서울특별시 강서구 방화동 830-1",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101240.56823582445!2d126.77527862845272!3d37.53697155240944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b34dc56d23971f3!2z7KOg7Iqk65ah67O27J2067Cp7ZmU7Jet7KCQ!5e0!3m2!1sko!2skr!4v1548658320528"
        },
        {
          "name": "죠스떡볶이 상동점",
          "addr": "경기도 부천시 원미구 상2동 542-1",
          "url":       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101240.56823582445!2d126.77527862845272!3d37.53697155240944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2ae7e94b7bbeb09!2z7KOg7Iqk65ah67O27J20IOyDgeuPmeygkA!5e0!3m2!1sko!2skr!4v1548658377227"
        },    
        {
          "name": "죠스떡볶이 부천시청점",
          "addr": "경기도 부천시 원미구 중1동 석천로 171",
          "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101240.56823582445!2d126.77527862845272!3d37.53697155240944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74f9ae93e3b10c30!2z7KOg7Iqk65ah67O27J2067aA7LKc7Iuc7LKt7KCQ!5e0!3m2!1sko!2skr!4v1548658423687"
        },
        {
          "name": "죠스떡볶이 신월점",
          "addr": "서울특별시 신월동 신월동 54-1번지 105호 ",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1606.7006298168728!2d127.38637992307062!3d36.35105842271774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356549672c9f8643%3A0x1da282b679e17fb1!2z7KOg7Iqk65ah67O27J20!5e0!3m2!1sko!2skr!4v1548425885225"
        },
        {
          "name": "죠스떡볶이 화곡역점",
          "addr": "서울특별시 강서구 화곡3동 1065-24",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101240.56823582445!2d126.77527862845272!3d37.53697155240944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3945ae6a42f2fc0d!2z7KOg7Iqk65ah67O26riw7ZmU6rOh7Jet7KCQ!5e0!3m2!1sko!2skr!4v1548658538791"
        },
        {
          "name": "죠스떡볶이 까치산역점",
          "addr": "서울특별시 강서구 화곡동 강서로 39",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101240.56823582445!2d126.77527862845272!3d37.53697155240944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x19d055d17e4621ba!2z7KOg7Iqk65ah67O27J206rmM7LmY7IKw7Jet7KCQ!5e0!3m2!1sko!2skr!4v1548658587958"
        },
        {
          "name": "죠스떡볶이 강서구청사거리점",
          "addr": "서울특별시 강서구 화곡6동",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101240.56823582445!2d126.77527862845272!3d37.53697155240944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4c8b6bd2c1bdd50!2z7KOg7Iqk65ah67O27J206rCV7ISc6rWs7LKt7IKs6rGw66as7KCQ!5e0!3m2!1sko!2skr!4v1548658638630"
        },
        {
          "name": "죠스떡볶이 목동점",
          "addr": "서울특별시 양천구 목동 목동로 210",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101240.56823582445!2d126.77527862845272!3d37.53697155240944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe18e3320b2b746f1!2z7KOg7Iqk65ah67O27J20!5e0!3m2!1sko!2skr!4v1548658689756"
        },
        {
          "name": "죠스떡볶이 영등포점",
          "addr": "서울특별시 영등포구 영등포동3가 11",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101240.56823582445!2d126.77527862845272!3d37.53697155240944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfcac37461d5934ef!2z7KOg7Iqk65ah67O27J20IOyYgeuTse2PrOygkA!5e0!3m2!1sko!2skr!4v1548658730213"
        }, 
        {
          "name": "죠스떡볶이 노량진점",
          "addr": "서울특별시 동작구 노량진동 노량진로 162",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101240.56823582445!2d126.77527862845272!3d37.53697155240944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x697ceab9e40f8b1f!2z7KOg7Iqk65ah67O27J2064W465-J7KeE7KCQ!5e0!3m2!1sko!2skr!4v1548658767869"
        },
        {
          "name": "죠스떡볶이 신림녹두점",
          "addr": "서울특별시 관악구 신림동 대학길 36",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101240.56823582445!2d126.77527862845272!3d37.53697155240944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32e27fb965d95ad4!2z7KOg7Iqk65ah67O27J207Iug66a864W565GQ7KCQ!5e0!3m2!1sko!2skr!4v1548658823109"
        },
        {
          "name": "죠스떡볶이 교대역점",
          "addr": "서울특별시 서초구 서초동 1673-6",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101305.60549773097!2d126.94076019583555!3d37.4890416863947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb2f2deef127b06c1!2z7KOg7Iqk65ah67O27J206rWQ64yA7Jet7KCQ!5e0!3m2!1sko!2skr!4v1548658872828"
        },
        {
          "name": "죠스떡볶이 이촌점",
          "addr": "서울특별시 용산구 이촌동 301-10",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120347.56155131487!2d126.86394638048958!3d37.567033141470134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x387eeae439e823a1!2z7KOg7Iqk65ah67O27J20IOydtOy0jOygkA!5e0!3m2!1sko!2skr!4v1548658928996"
        },
        {
          "name": "죠스떡볶이 마포점",
          "addr": "서울특별시 마포구 대흥동 백범로 5",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120347.56155131487!2d126.86394638048958!3d37.567033141470134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd71918d2d8f67d2b!2z7KOg7Iqk65ah67O27J20!5e0!3m2!1sko!2skr!4v1548658978883"
        },
        {
          "name": "죠스떡볶이 상암DMC점",
          "addr": "서울특별시 마포구 상암동 월드컵북로 402",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120347.56155131487!2d126.86394638048958!3d37.567033141470134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a56bd3b2b59d203!2z7KOg7Iqk65ah67O27J20IOyDgeyVlERNQ-ygkA!5e0!3m2!1sko!2skr!4v1548659017612"
        },
        {
          "name": "죠스떡볶이 경복궁점",
          "addr": "서울특별시 종로구 체부동 43",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120347.56155131487!2d126.86394638048958!3d37.567033141470134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e8130b7f6b8c4ad!2z7KOg7Iqk65ah67O27J206rK967O16raB7KCQ!5e0!3m2!1sko!2skr!4v1548659073267"
        },
        {
          "name": "죠스떡볶이 광화문점",
          "addr": "서울특별시 종로구 당주동 128-17",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120347.56155131487!2d126.86394638048958!3d37.567033141470134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe11e5f328880c392!2z7KOg7Iqk65ah67O27J20IOq0ke2ZlOusuOygkA!5e0!3m2!1sko!2skr!4v1548659149890"
        },
        {
          "name": "죠스떡볶이 서대문역점",
          "addr": "서울특별시 서대문구 냉천동 통일로 141",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120347.56155131487!2d126.86394638048958!3d37.567033141470134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd9781c74f56860d9!2z7KOg7Iqk65ah67O27J20IOyEnOuMgOusuOyXreygkA!5e0!3m2!1sko!2skr!4v1548659189899"
        },
        {
          "name": "죠스떡볶이 순화동점",
          "addr": "서울특별시 중구 순화동 195-1",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120347.56155131487!2d126.86394638048958!3d37.567033141470134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea0dbe8570cf3452!2z7KOg7Iqk65ah67O27J207Iic7ZmU64-Z7KCQ!5e0!3m2!1sko!2skr!4v1548659232297"
        },
        {
          "name": "죠스떡볶이 울산점",
          "addr": "울산광역시 남구 달동 신정로 11",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1311610.6930773433!2d128.0518600739822!3d35.94234226583438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc50cd2c9e288ca37!2z7KOg7Iqk65ah67O27J20!5e0!3m2!1sko!2skr!4v1548659326816"
        },
        {
          "name": "죠스떡볶이 부산봉래점",
          "addr": "번지, 24 봉래동3가 영도구 부산광역시",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1311610.6930773433!2d128.0518600739822!3d35.94234226583438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92b076f65168f401!2z7KOg7Iqk65ah67O27J20IOu2gOyCsOu0ieuemOygkA!5e0!3m2!1sko!2skr!4v1548659368825"
        },
        {
          "name": "죠스떡볶이 구미옥계점",
          "addr": "경상북도 구미시 옥계동 36",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1311610.6930773433!2d128.0518600739822!3d35.94234226583438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda32ca4bae0856bb!2z7KOg7Iqk65ah67O27J20IOq1rOuvuOyYpeqzhOygkA!5e0!3m2!1sko!2skr!4v1548659411296"
        },
        {
          "name": "죠스떡볶이 대전둔산점",
          "addr": "대전광역시 서구 둔산1동",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558344.7224504377!2d128.01244311531357!3d36.014835380495086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1da282b679e17fb1!2z7KOg7Iqk65ah67O27J20!5e0!3m2!1sko!2skr!4v1548659454056"
        },
        {
          "name": "죠스떡볶이 논산점",
          "addr": "충청남도 논산시 취암동",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558344.7224504377!2d128.01244311531357!3d36.014835380495086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfcd3990e158b3cf3!2z7KOg7Iqk65ah67O27J2064W87IKw7Leo7JWU7KCQ!5e0!3m2!1sko!2skr!4v1548659495608"
        },
        {
          "name": "죠스떡볶이 증평점",
          "addr": "충청북도 증평군 증평읍 중동리 60-2",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558343.8077193769!2d128.01217413015095!3d36.01488164573172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x296efc171889824a!2z7KOg7Iqk65ah67O27J20!5e0!3m2!1sko!2skr!4v1548659537054"
        },
        {
          "name": "죠스떡볶이 안중점",
          "addr": "경기도 평택시 안중읍 송담 85 상가동",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1543424.193659719!2d127.36954078410275!3d36.815591159419164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x248a6edda54d66e8!2z7KOg7Iqk65ah67O27J20IOyViOykkeygkCDsp4Dsl5TtlZjsnoRBUFQ!5e0!3m2!1sko!2skr!4v1548659588807"
        },
        {
          "name": "죠스떡볶이 화성중앙점",
          "addr": "경기도 화성시 반송동 86-1",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1543424.193659719!2d127.36954078410275!3d36.815591159419164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x291b9827a7f1008c!2z7KOg7Iqk65ah67O27J207KSR7JWZ7KCQ!5e0!3m2!1sko!2skr!4v1548659634558"
        },
        {
          "name": "죠스떡볶이 강릉대학로점",
          "addr": "강원도 강릉시 금학동",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964857.4675799308!2d128.0154010214618!3d37.41040900503869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80f0e692ea7dd670!2z7KOg7Iqk65ah67O27J206rCV66aJ64yA7ZWZ66Gc7KCQ!5e0!3m2!1sko!2skr!4v1548659704071"
        },
        {
          "name": "죠스떡볶이 율량2지구점",
          "addr": "충청북도 청주시 청원구 오근장동 주성로 14",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964857.4675799308!2d128.0154010214618!3d37.41040900503869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54db09aa5ab2322c!2z7KOg7Iqk65ah67O27J20IOycqOufiTLsp4DqtazsoJA!5e0!3m2!1sko!2skr!4v1548659760262"
        },
        {
          "name": "죠스떡볶이 춘천석사점",
          "addr": "강원도 춘천시 석사동 880-4번지 KR프라임타워 죠스떡볶이",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1616874.8942252812!2d128.05827452897938!3d37.67806454030449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb894c1210ec7ea9d!2z7KOg7Iqk65ah67O27J20!5e0!3m2!1sko!2skr!4v1548659819423"
        },
        {
          "name": "죠스떡볶이 안동점",
          "addr": "경상북도 안동시 옥동",
          "url":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1616874.8942252812!2d128.05827452897938!3d37.67806454030449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e5f475cc5d4a1ac!2z7KOg7Iqk65ah67O27J20!5e0!3m2!1sko!2skr!4v1548659862709"
        }
      ];