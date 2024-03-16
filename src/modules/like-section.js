const sendData = async (count) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iSougRnGfvufqYKBqkTu/likes/', {
    method: 'POST',
    body: JSON.stringify({ item_id: `item${count}` }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

const getLikeData = async (count) => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iSougRnGfvufqYKBqkTu/likes');
  const data = await res.json();
  const result = data[count].likes;
  return result;
};

export { sendData, getLikeData };