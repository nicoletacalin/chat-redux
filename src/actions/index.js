// TODO: add and export your own actions


const base = 'https://wagon-chat.herokuapp.com';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const GROUP_SELECTED = 'GROUP_SELECTED';


export function fetchMessages(channel) {
  const url = `${base}/${channel}/messages`;
  const promise = fetch(url).then (response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload:promise
  }
}

export function createMessage(channel, author, content) {
  const url = `${base}/${channel}/messages`;
  const body = { author, content};
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then (response => response.json());

  return {
    type: MESSAGE_POSTED,
    payload:promise
  };
}


export function selectGroup(channel) {
  return {
    type: GROUP_SELECTED,
    payload: channel
  };
}

