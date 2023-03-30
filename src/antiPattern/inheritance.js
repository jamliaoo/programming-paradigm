class 祖先 {
  打開錢包() {
    console.log('哇 好多錢');
  }
}

class 我爺的爺 extends 祖先  {
  打開錢包() {
    console.log('哇 好多錢');
  }
}

class 我爺的爸 extends 我爺的爺 {
  打開錢包() {
    console.log('哇 好多錢');
  }
}

class 我爺 extends 我爺的爸 {
  打開錢包() {
    console.log('花光了');
  }
}

class 我爸 extends 我爺 {
  打開錢包() {
    throw new Error('你連錢包都沒有');
  }
}

class 我 extends 我爸 {
  打開錢包() {
    throw new Error('你連錢包都沒有');
  }
}
