class Ajax {
  post(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.response);
        callback(data);
      }
    };
  }

  get(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.response);
        console.log(data);
        callback(data);
      }
    };
  }
}

export const ajax = new Ajax();
