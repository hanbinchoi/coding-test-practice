// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
// DOM으로 바꿔주고, <li> Append까지 한다
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.

  // IMG
  const avatarImg = document.createElement("img");
  avatarImg.className = "discussion__avatar--image";
  avatarImg.src = obj.avatarUrl; //이미지 경로가 없을경우
  avatarImg.alt = "avatal of" + obj.author;
  avatarWrapper.append(avatarImg);

  // Title
  const discussionTitle = document.createElement("h2");
  discussionTitle.className = "discussion__title";
  const discussionA = document.createElement("a");
  discussionA.href = obj.url;
  discussionA.textContent = obj.title;

  discussionTitle.append(discussionA);

  // 정보
  const discussionInform = document.createElement("div");
  discussionInform.className = "discussion__information";
  discussionInform.textContent = `${obj.author} / ${new Date(
    obj.createAt || Date.now
  ).toLocaleTimeString()}`;

  discussionContent.append(discussionTitle, discussionInform);

  // Answer확인
  const discussionAnswer = document.createElement("p");
  discussionAnswer.className = "discussion__answered";

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
// <li><ul> append
// 렌더는 디스커션 처음부터 끝까지 화면에 보여주는거
const render = (element) => {
  // element -> ul
  // 42개
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);

//input
const form = document.querySelector("form.form");
const author = form.querySelector("div.form__input--name > input");
const title = form.querySelector("div.form__input--title > input");
const textbox = form.querySelector("div.form__textbox > textarea");

form.addEventListener("submit", (event) => {
  // 새로고침 막아줌
  event.preventDefault();
  // input.value = "나나나"
  // author.value = "나나"
  // obj
  const obj = {
    id: "unique id",
    createdAt: new Date().toISOString(),
    title: title.value,
    url: "https://github.com/codestates-seb/agora-states-fe/discussions",
    author: author.value,
    answer: null,
    bodyHTML: textbox.value,
    avatarUrl:
      "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
  };
  agoraStatesDiscussions.unshift(obj);

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
    render(ul);
  }
});
render(ul);
