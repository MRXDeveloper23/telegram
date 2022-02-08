const hamburger = document.querySelector(".hamburger");
const modal = document.querySelector(".modal");
const menu = document.querySelector(".nav-menu");
const listElements = menu.querySelectorAll("li");
const chatList = document.querySelector(".chatlist");
const userSection = document.querySelector(".user-section");
const sendMessage = document.querySelector(".send-message");

hamburger.addEventListener("click", () => {
  modal.style.display = "block";
});
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

let DATA = {
  users: [
    {
      id: 1,
      first_name: "Abdulaziz",
      last_name: "Yo'ldashev",
      avatar: "../images/avatar1.jpg",
      bio: "Yaxshilik ezgulik yo'lida",
      user_name: "@Mahmudov",
      groups_common: 1,
      shared_links: 2,
      shared_photos: 3,
      shared_voice: 4,
      activity: "online",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "Salom",
          time: new Date().toLocaleTimeString(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "Ahvollar qalay",
          time: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      id: 2,
      first_name: "Muhammadqodir",
      last_name: "Mahmudov",
      avatar: "../images/avatar2.jpg",
      bio: "Bio",
      user_name: "@Mahmudov",
      groups_common: 4,
      shared_links: 15,
      shared_photos: 20,
      shared_voice: 15,
      activity: "last seen recently",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "Assalomu alaykum",
          time: new Date().toLocaleTimeString(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "Vaaleykum assalom",
          time: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      id: 3,
      first_name: "Dolimbek",
      last_name: "Qobilov",
      avatar: "../images/avatar3.jpg",
      bio: "Bio",
      user_name: "@Mahmudov",
      groups_common: 3,
      shared_links: 1,
      shared_photos: 2,
      shared_voice: 4,
      activity: "last seen 1 hour ago",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "Assalomu alaykum",
          time: new Date().toLocaleTimeString(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "Ishlar qalay",
          time: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      id: 4,
      first_name: "Sardor",
      last_name: "Dadaxonov",
      avatar: "../images/avatar4.jpg",
      bio: "Yengilmas ajdar",
      user_name: "@Sardor",
      groups_common: 6,
      shared_links: 7,
      shared_photos: 8,
      shared_voice: 9,
      activity: "online",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "Salom",
          time: new Date().toLocaleTimeString(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "Salom",
          time: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      id: 5,
      first_name: "Nuriddin",
      last_name: "Karimov",
      avatar: "../images/avatar5.jpg",
      bio: "Barchasini noldan o'rganaman",
      user_name: "@Karimov",
      groups_common: 2,
      shared_links: 9,
      shared_photos: 10,
      shared_voice: 12,
      activity: "last seen recently",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "Vaaleykum assalom",
          time: new Date().toLocaleTimeString(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "Qachon ketasiz",
          time: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      id: 6,
      first_name: "Biloliddin",
      last_name: "Tursunov",
      avatar: "../images/avatar6.jpg",
      bio: "Bio",
      user_name: "@Biloliddin",
      groups_common: 3,
      shared_links: 2,
      shared_photos: 5,
      shared_voice: 14,
      activity: "online",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "Assalomu alaykum",
          time: new Date().toLocaleTimeString(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "Vaaleykum assalom",
          time: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      id: 7,
      first_name: "Muhammadsodiq",
      last_name: "Mehmonqo'ziyev",
      avatar: "../images/avatar7.jpg",
      bio: "Bio",
      user_name: "@Muhammadsodiq",
      groups_common: 5,
      shared_links: 13,
      shared_photos: 50,
      shared_voice: 17,
      activity: "last seen 5 minutes ago",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "Assalomu alaykum va rahmatullohi va barokatuh",
          time: new Date().toLocaleTimeString(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "Vaaleykum assalom va rahmatullohi va barokatuh",
          time: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      id: 8,
      first_name: "Husanboy",
      last_name: "Ergashev",
      avatar: "../images/avatar8.jpg",
      bio: "Boksyor",
      user_name: "@Ergashev",
      groups_common: 2,
      shared_links: 5,
      shared_photos: 30,
      shared_voice: 14,
      activity: "last seen 6 minutes ago",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "Salom",
          time: new Date().toLocaleTimeString(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "Salom ishlar qalay",
          time: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      id: 9,
      first_name: "Xayrullo",
      last_name: "Xoshimjonov",
      avatar: "../images/avatar9.jpg",
      bio: "Bio",
      user_name: "@Xayrullo",
      groups_common: 3,
      shared_links: 1,
      shared_photos: 25,
      shared_voice: 16,
      activity: "last seen recently",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "Assalomu alaykum",
          time: new Date().toLocaleTimeString(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "Vaaleykum assalom",
          time: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      id: 10,
      first_name: "Shohruhbek",
      last_name: "Abdujabborov",
      avatar: "../images/avatar10.jpg",
      bio: "Bio",
      user_name: "@Abdujabborov",
      groups_common: 3,
      shared_links: 12,
      shared_photos: 10,
      shared_voice: 12,
      activity: "last seen recently",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "Salom",
          time: new Date().toLocaleTimeString(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "Salom",
          time: new Date().toLocaleTimeString(),
        },
      ],
    },
  ],
  me: {
    id: 1,
    first_name: "Khurmatillo",
    last_name: "Mamasoliev",
    avatar: "../images/avatar1.jpg",
    bio: "Mag'lubiyat hech qachon yakun emas",
    user_name: "@MRXDeveloper23",
  },
};
menu.addEventListener("click", (event) => {
  let target = event.target.parentElement.parentElement;
  if (target.nodeName !== "UL") {
    target.classList.add("active");
  }
  listElements.forEach((listElement) => {
    if (target !== listElement) {
      listElement.classList.remove("active");
    }
  });

  if (target.children[0].className === "personal") {
    getPersonalChats(DATA.users);
  } else {
    chatList.innerHTML = "";
  }
});

const getPersonalChats = (users) => {
  for (let user of users) {
    chatList.appendChild(createUser(user));
  }
};
const createUser = (user) => {
  let listItem = document.createElement("li");
  listItem.className = "user-info";
  let avatarBox = document.createElement("div");
  avatarBox.className = "avatar";
  let img = document.createElement("img");
  img.setAttribute("src", user.avatar);
  img.setAttribute("alt", "avatar");
  let userCaption = document.createElement("div");
  userCaption.className = "user-caption";
  let username = document.createElement("span");
  username.textContent = `${user.last_name} ${user.first_name}`;
  username.className = "username";
  let lastText = document.createElement("span");
  lastText.textContent = `${
    user.messages[user.messages.length - 1].text
  }`;
  lastText.className = "last-text";
  avatarBox.appendChild(img);
  userCaption.appendChild(username);
  userCaption.appendChild(lastText);
  listItem.appendChild(avatarBox);
  listItem.appendChild(userCaption);
  listItem.id = user.id;
  return listItem;
};

chatList.addEventListener("click", (event) => {
  let target =
    event.target.nodeName == "LI"
      ? event.target
      : event.target.parentElement.parentElement;
  const userLists = chatList.querySelectorAll("li");
  if (
    target.nodeName !== "UL" &&
    target.nodeName !== "DIV"
  ) {
    target.classList.add("active");
  }
  if (target.classList.contains("active")) {
    createUserInfo(target);
  }
  userLists.forEach((listElement) => {
    if (target !== listElement) {
      listElement.classList.remove("active");
    }
  });
  event.stopPropagation();
});

const createUserInfo = (listElement) => {
  let pointedUser = DATA.users.filter(
    (user) => user.id == listElement.id
  );
  pointedUser = pointedUser[0];
  createMessages(pointedUser);
  let name = document.querySelector(".name");
  name.textContent = `${pointedUser.first_name}`;
  let activity = document.querySelector(".last-seen");
  activity.textContent = `${pointedUser.activity}`;
  sendMessage.setAttribute("id", listElement.id);
  const messageInput = document.querySelector(
    ".message-input"
  );
  messageInput.textContent = "";
  userSection.style.display = "block";
};
function createMessages(user) {
  let chatBar = document.querySelector(".chat-bar");
  let container = document.querySelector(
    ".chat-bar .container"
  );
  container.innerHTML = "";
  for (let message of user.messages) {
    if (message.is_from_me) {
      let avatar = document.createElement("div");
      avatar.className = "avatar_in_chat";
      let image = document.createElement("img");
      image.setAttribute("src", "../images/myAvatar.png");
      image.setAttribute("alt", "Avatar");
      avatar.append(image);
      let fromMe = document.createElement("li");
      fromMe.className = "from_me";
      let text = document.createElement("p");
      text.textContent = message.text;
      text.className = "text";
      fromMe.append(avatar, text);
      container.appendChild(fromMe);
    } else {
      let avatar = document.createElement("div");
      avatar.className = "avatar_in_chat";
      let image = document.createElement("img");
      image.setAttribute("src", user.avatar);
      image.setAttribute("alt", "Avatar");
      avatar.append(image);
      let toMe = document.createElement("li");
      toMe.className = "to_me";
      let text = document.createElement("p");
      text.textContent = message.text;
      text.className = "text";
      toMe.append(text, avatar);
      container.appendChild(toMe);
    }
  }
  chatBar.append(container);
}
//Adding messages
sendMessage.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = event.target.getAttribute("id");
  const user = DATA.users.filter((user) => user.id == id);
  const message = {
    id: user[0].messages.length + 1,
    is_from_me: true,
    text: event.target[0].value,
    time: new Date().toLocaleTimeString(),
  };
  user[0].messages.push(message);
  event.target[0].value = "";
  createMessages(user[0]);
});
