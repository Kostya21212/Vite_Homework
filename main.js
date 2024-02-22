const API_PATH = {
  posts: "https://jsonplaceholder.typicode.com/posts",
  commentsById: function (id) {
      return `https://jsonplaceholder.typicode.com/posts/${id}/comments/`;
  },
};

const postElements = {
  pageWrap: document.getElementById('pageWrap'),
  cardWrap: document.getElementById('cardWrap'),
  loaderElements: null
};

const inputNumber = document.getElementById('inputNumber');

inputNumber.addEventListener('input', function () {
  const inputValue = parseInt(inputNumber.value);

  if (inputValue >= 1 && inputValue <= 100) {
      requestData(API_PATH.posts + `/${inputValue}`, "Post not found")
          .then(function (post) {
              createCard(post);
          })
          .catch(function (error) {
              createAlert(error);
          });
  }
});
inputNumber.addEventListener('input', function () {
  const inputValue = parseInt(inputNumber.value);

  if (inputValue >= 1 && inputValue <= 100) {
      requestData(API_PATH.posts + `/${inputValue}`, "Post not found")
          .then(function (post) {
              createCard(post);
          })
          .catch(function (error) {
              createAlert(error);
          });
  } else {
      // Скрываем блок с id и комментариями
      postElements.cardWrap.innerHTML = '';
      // Выводим сообщение об ошибке
      createAlert("Будь ласка введіть число від 1 до 100");
  }
});
function requestData(url, errorMessage = "url not found", titlePreloader) {
  return fetch(url).then(function (res) {
      if (!res.ok) {
          throw new Error(errorMessage);
      }
      return res.json();
  });
}

function createAlert(errorMessage, time = 5000) {
  const wrapper = document.createElement('div');
  const pageWrap = postElements.pageWrap;
  wrapper.classList.add('alert', 'alert-error', 'max-w-64', 'absolute', 'bottom-2', 'right-6');
  wrapper.innerHTML = `
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 26C22.9 26 22 25.1 22 24V16C22 14.9 22.9 14 24 14C25.1 14 26 14.9 26 16V24C26 25.1 25.1 26 24 26ZM26 34H22V30H26V34Z" fill="#E92C2C" />
</svg>
<div class="flex flex-col">
  <span>Error</span>
  <span class="text-content2">${errorMessage}</span>
</div>`;
  if (pageWrap) {
      pageWrap.appendChild(wrapper);
  }
  setTimeout(function () {
      if (pageWrap.contains(wrapper)) {
          pageWrap.removeChild(wrapper);
      }
  }, time);
}

function createCard(post) {
  const wrapper = document.createElement('div');
  const cardWrap = postElements.cardWrap;
  wrapper.className = 'card';
  wrapper.innerHTML = `
  <div class="card-body">
      <h2 class="card-header text-green-500">${post.title}</h2>
      <p class="text-content2 text-red-500">${post.body}</p>
      <div class="comment-list" style="display: none;"></div>
      <div class="card-footer flex justify-center">
          <button class="btn-secondary btn" onclick="toggleComments(this)">Show Comments</button>
      </div>
  </div>`;
  if (cardWrap) {
      cardWrap.innerHTML = '';
      cardWrap.appendChild(wrapper);
  }
}

async function toggleComments(button) {
  const cardBody = button.closest('.card-body');
  const commentsList = cardBody.querySelector('.comment-list');
  if (commentsList.style.display === 'none') {
      commentsList.style.display = 'block';
      const postId = parseInt(inputNumber.value);
      try {
          const comments = await requestData(API_PATH.commentsById(postId), "Comments not found");
          createCommentsList(comments, commentsList);
      } catch (error) {
          createAlert(error);
      }
  } else {
      commentsList.style.display = 'none';
  }
}

function createCommentsList(comments, commentsList) {
  commentsList.innerHTML = '';
  comments.forEach(function (comment) {
      const listItem = document.createElement('div');
      listItem.textContent = comment.body;
      commentsList.appendChild(listItem);
  });
}
