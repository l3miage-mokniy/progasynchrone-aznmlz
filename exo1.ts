import {
  searchImages,
  log,
  getData,
  composeMozaic,
  sendToServer
} from "./cbAPI";

function exo1(req: string) {
  //let URLS: string[] = [];
  searchImages(req, (urlList: string[]) => {
    //URLS = urlList
    urlList.forEach(url => getData(url, () => {}));
  });
  //ici URLS vaut tableau vide car searchImages n'est pas fini.
  //URLS.forEach(url => getData(url, ()=>{}))
  //il faut donc mettre forEach dans searchImages
}

const bt1 = document.querySelector("#bt1") as HTMLElement;
bt1.onclick = () => exo1("chats");
