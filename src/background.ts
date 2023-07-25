import { Client } from "@notionhq/client";
import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveword",
    title: "Save",
    contexts: ["selection"],
  });
});

// const currentURL = window.location.href;
// console.log(currentURL);

// function createPopupWindow(x: number, y: number) {
//   const popupWidth = 320;
//   const popupHeight = 240;
//   const left = Math.max(0, x - Math.floor(popupWidth / 2));
//   const top = Math.max(0, y - Math.floor(popupHeight / 2));

//   chrome.windows.create({
//     url: "popup.html",
//     type: "popup",
//     width: popupWidth,
//     height: popupHeight,
//     left: left,
//     top: top,
//   });
// }

chrome.contextMenus.onClicked.addListener(
  (info: chrome.contextMenus.OnClickData) => {
    if (info.menuItemId === "saveword") {
      const currentDate = new Date();
      const istOffset = 330; // Offset for Asia/Kolkata time zone in minutes (UTC+5:30)
      const istTime = new Date(currentDate.getTime() + istOffset * 60 * 1000);
      const isoDate = istTime.toISOString();

      chrome.storage.local.get(["dbId", "token"], (res) => {
        const notion = new Client({
          auth: res.token,
        });
        const requestBody: CreatePageParameters = {
          parent: {
            type: "database_id",
            database_id: res.dbId,
          },
          properties: {
            Name: {
              title: [
                {
                  text: {
                    content: String(info.selectionText),
                  },
                },
              ],
            },
            Link: {
              url: String(info.pageUrl),
            },
            Date: {
              date: {
                start: String(isoDate),
                time_zone: "Asia/Kolkata",
              },
            },
          },
        };
        const createPage = async () => {
          const response = await notion.pages.create(requestBody);
          // const url = `https://www.notion.so/${removeHyphen(
          //   res.dbId
          // )}?p=${removeHyphen(response.id)}`;
        };
        try {
          createPage();
        } catch (err) {
          throw err;
        }
      });
    }
  }
);
