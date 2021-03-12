import {searchImages, log, getData, composeMozaic, sendToServer} from "./cbAPI";

/* Avec les promesses */
export function searchImagesP(description: string): Promise<string[]> {
  return new Promise( (resolve, reject) => {
    
  });
}

export function getDataP (url: string): Promise<ImageData> {
  return new Promise( (resolve, reject) => {
    
  });
}

export function composeMozaicP(images: ImageData[]): Promise<ImageData> {
  return new Promise( (resolve, reject) => {
    
  });
}

export function sendToServerP(image: ImageData): Promise<string> {
  return new Promise( (resolve, reject) => {
    
  });
}

