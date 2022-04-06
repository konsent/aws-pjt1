const API_KEY = "b0b607eaf41301cf84cd733d7407ea3c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const ootd = document.querySelector("#ootd span:first-child");
      weather.innerText = `날씨 상황: ${data.weather[0].main} / 온도: ${data.main.temp} °C`;
      city.innerText = ` / 현재 위치: ${data.name}`;

      if (data.main.temp * 1 >= 28) {
        ootd.innerText = `민소매, 반팔, 반바지, 원피스`;
      } else if (23 <= data.main.temp && data.main.temp < 28) {
        ootd.innerText = `반바지, 얇은 셔츠, 반바지, 면바지`;
      } else if (20 <= data.main.temp && data.main.temp < 23) {
        ootd.innerText = `얇은 가디건, 긴팔, 면바지, 청바지`;
      } else if (17 <= data.main.temp && data.main.temp < 19) {
        ootd.innerText = `얇은 니트, 맨투맨, 가디건, 청바지`;
      } else if (12 <= data.main.temp && data.main.temp < 17) {
        ootd.innerText = `자켓, 가디건, 야상, 스타킹, 청바지, 면바지`;
      } else if (9 <= data.main.temp && data.main.temp < 12) {
        ootd.innerText = `자켓, 트렌치코트, 야상, 니트, 청바지, 스타킹`;
      } else if (5 <= data.main.temp && data.main.temp < 9) {
        ootd.innerText = `코트, 가죽 자켓, 히트텍, 니트, 레깅스`;
      } else if (data.main.temp * 1 < 4) {
        ootd.innerText = `패딩, 두꺼운 코트, 목도리, 기모`;
      }
    });
}

function onGeoError() {
  console.log("위치를 찾을 수가 없어요");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
