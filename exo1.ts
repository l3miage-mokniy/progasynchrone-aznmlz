import {
  searchImages,
  log,
  getData,
  composeMozaic,
  sendToServer
} from "./cbAPI";

function exo1(req: string) {​​
  searchImages(req, (urls: string[]) => {​​
    const images: ImageData[] = [];
    urls.forEach(
      url => getData(url, img => {​​
        images.push(img);
        if (images.length === urls.length) {​​
          composeMozaic(images, imgM => {​​
            sendToServer(imgM, r => log(r) )
          }​​)
        }​​
      }​​)
    );
  }​​);
}​​

const bt1 = document.querySelector("#bt1") as HTMLElement;
bt1.onclick = () => exo1("chats");
