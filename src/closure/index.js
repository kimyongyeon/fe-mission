// 블록스코프 이해하기
let i = 0;
let k = 111;
for (i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(`i = ${i}`);
  }, 100);

  console.log("==================");

  with (k) {
    setTimeout(function () {
      console.log(`ii = ${i}`);
    }, 100);
  }
}

