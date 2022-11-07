import { storageService } from "./_async-storage.service.js"
export const contactService = {
  getContacts,
  getContactById,
  sendMsg,
  getById,
}

const CONTACTS = "contactsDB"
//  const contacts = _createContacts()

// const demoContacts = [
//   {
//     _id: "153268926",
//     name: "Alon Kolker",
//     img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.18169-9/12832510_10208941747321576_5807403953123434866_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BNwBdPG-ZwIAX8OgOoM&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-6rC4SDm3-1koWSOTWrEVzuF0ry15-dYHYhNOGWw7bCw&oe=6337CA99",
//     lastMsg: "Hey bro!",
//     lastMsgTime: "05:32 am",
//     lastMsgId: 6,
//     conversation: [
//       {
//         id: 1,
//         messageType: "TEXT",
//         text: "Hey Alon 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 2,
//         messageType: "TEXT",
//         text: "Hey, What's up?",
//         senderID: 1,
//         addedOn: "12:01 PM",
//       },
//       {
//         id: 3,
//         messageType: "TEXT",
//         text: "All Good, What about you?",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 4,
//         messageType: "TEXT",
//         text: "I'm good as well",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 5,
//         messageType: "TEXT",
//         text: "Great 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 6,
//         messageType: "TEXT",
//         text: "Have you subscribed The Indian Dev ?",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//     ],
//   },
//   {
//     name: "Guy Kadosh",
//     _id: "45484518715",
//     img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t39.30808-6/278124424_10159818441575489_4786020087784983543_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c9wfqwF9iooAX_jYTsN&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-yX4OSoS-dQIY0--hrGACXCKMGEohzOwOe_i0XR5vkaQ&oe=6316CD37",
//     lastMsg: "I will call later",
//     lastMsgTime: "05:32 am",
//     lastMsgId: 6,
//     conversation: [
//       {
//         id: 1,
//         messageType: "TEXT",
//         text: "Hey Guy 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 2,
//         messageType: "TEXT",
//         text: "Hey, What's up?",
//         senderID: 1,
//         addedOn: "12:01 PM",
//       },
//       {
//         id: 3,
//         messageType: "TEXT",
//         text: "All Good, What about you?",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 4,
//         messageType: "TEXT",
//         text: "I'm good as well",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 5,
//         messageType: "TEXT",
//         text: "Great 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 6,
//         messageType: "TEXT",
//         text: "Have you subscribed The Indian Dev ?",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//     ],
//   },
//   {
//     name: "Itamar Zaguri",
//     _id: "4548454",
//     img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/81697857_3137120692982893_582755546566754304_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EtZd5MgNXzIAX-Vja_R&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT8OV4tf52ZnrNMR48yCRqsl3CpxwlEPnxHyDeQvZ0-GJA&oe=6335F01D",
//     lastMsg: "He dosent replay",
//     lastMsgTime: "05:32 am",
//     lastMsgId: 6,
//     conversation: [
//       {
//         id: 1,
//         messageType: "TEXT",
//         text: "Hey Itamar 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 2,
//         messageType: "TEXT",
//         text: "Hey, What's up?",
//         senderID: 1,
//         addedOn: "12:01 PM",
//       },
//       {
//         id: 3,
//         messageType: "TEXT",
//         text: "All Good, What about you?",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 4,
//         messageType: "TEXT",
//         text: "I'm good as well",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 5,
//         messageType: "TEXT",
//         text: "Great 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 6,
//         messageType: "TEXT",
//         text: "Have you subscribed The Indian Dev ?",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//     ],
//   },
//   {
//     name: "Matan Hatuli",
//     _id: "455845495",
//     img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/70505272_10218109318757002_5567079211132256256_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lZZQUf1hyCsAX86vUAt&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT9QgxSm67oVC5cgklu1EKYn2pJn84yd_R4BEdkax3GPsQ&oe=6336D838",
//     lastMsg: "Im a cat",
//     lastMsgTime: "05:32 am",
//     lastMsgId: 6,
//     conversation: [
//       {
//         id: 1,
//         messageType: "TEXT",
//         text: "Hey Matan 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 2,
//         messageType: "TEXT",
//         text: "Hey, What's up?",
//         senderID: 1,
//         addedOn: "12:01 PM",
//       },
//       {
//         id: 3,
//         messageType: "TEXT",
//         text: "All Good, What about you?",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 4,
//         messageType: "TEXT",
//         text: "I'm good as well",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 5,
//         messageType: "TEXT",
//         text: "Great 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 6,
//         messageType: "TEXT",
//         text: "Have you subscribed The Indian Dev ?",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//     ],
//   },
//   {
//     _id: "35900268926",
//     name: "Alen Chernick",
//     img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/54255417_10212710478740823_758990888083914752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=84a396&_nc_ohc=LM5dvBoOf7gAX8iUBCe&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT89bIi8KY6dadHV_GDUKRqNMUIp7J9bsGqtrmfjNmbkAQ&oe=633B26C1",
//     lastMsg: "Im police!",
//     lastMsgTime: "05:32 am",
//     lastMsgId: 6,
//     conversation: [
//       {
//         id: 1,
//         messageType: "TEXT",
//         text: "Hey Alen 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 2,
//         messageType: "TEXT",
//         text: "Hey, What's up?",
//         senderID: 1,
//         addedOn: "12:01 PM",
//       },
//       {
//         id: 3,
//         messageType: "TEXT",
//         text: "All Good, What about you?",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 4,
//         messageType: "TEXT",
//         text: "I'm good as well",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 5,
//         messageType: "TEXT",
//         text: "Great 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 6,
//         messageType: "TEXT",
//         text: "Have you subscribed The Indian Dev ?",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//     ],
//   },
//   {
//     name: "Yuval Shmkler",
//     _id: "454196258715",
//     img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t39.30808-6/271554926_4863694470319876_5475864369642688973_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=g05s0B3I410AX-WZGB5&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT89kjFVmTYsY9hRlw3SZOSjBbphQAfz67TNslskJ3lxzg&oe=6319A183",
//     lastMsg: "Mister bit!!",
//     lastMsgTime: "05:32 am",
//     lastMsgId: 6,
//     conversation: [
//       {
//         id: 1,
//         messageType: "TEXT",
//         text: "Hey Yuval 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 2,
//         messageType: "TEXT",
//         text: "Hey, What's up?",
//         senderID: 1,
//         addedOn: "12:01 PM",
//       },
//       {
//         id: 3,
//         messageType: "TEXT",
//         text: "All Good, What about you?",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 4,
//         messageType: "TEXT",
//         text: "I'm good as well",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 5,
//         messageType: "TEXT",
//         text: "Great 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 6,
//         messageType: "TEXT",
//         text: "Have you subscribed The Indian Dev ?",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//     ],
//   },
//   {
//     name: "Shoki",
//     _id: "454845446854",
//     img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t39.30808-1/285594330_10229152474585274_5369988111926164076_n.jpg?stp=c0.20.200.200a_dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kxhxEShWfjAAX9IoKms&tn=cy01C5YiP5UABt82&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT8bxmIC3v4E0pFkyK0eB8A_wsNMGotcNWIexpFIUawJsA&oe=631A9E5E",
//     lastMsg: "Mitcho Matcho?",
//     lastMsgTime: "05:32 am",
//     lastMsgId: 6,
//     conversation: [
//       {
//         id: 1,
//         messageType: "TEXT",
//         text: "Hey Shoki 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 2,
//         messageType: "TEXT",
//         text: "Hey, What's up?",
//         senderID: 1,
//         addedOn: "12:01 PM",
//       },
//       {
//         id: 3,
//         messageType: "TEXT",
//         text: "All Good, What about you?",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 4,
//         messageType: "TEXT",
//         text: "I'm good as well",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 5,
//         messageType: "TEXT",
//         text: "Great 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 6,
//         messageType: "TEXT",
//         text: "Have you subscribed The Indian Dev ?",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//     ],
//   },
//   {
//     name: "Zlil",
//     _id: "23926896364816599",
//     img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/205446347_10222018966935034_2113396743656864804_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=COEvhtkBo8oAX-zQFDo&_nc_oc=AQltquYUJbKBLdX6slrSwahid6Ucz26JnkmtWpcWgOfYxRGj3lib-3GGed01O9ZWKyE&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT84UsBeGztJCena4ilgWwXpTkSNi0veGMr_prvj6z0bAQ&oe=633AE8C0",
//     lastMsg: "Im a cat",
//     lastMsgTime: "05:32 am",
//     lastMsgId: 6,
//     conversation: [
//       {
//         id: 1,
//         messageType: "TEXT",
//         text: "Hey Zlil 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 2,
//         messageType: "TEXT",
//         text: "Hey, What's up?",
//         senderID: 1,
//         addedOn: "12:01 PM",
//       },
//       {
//         id: 3,
//         messageType: "TEXT",
//         text: "All Good, What about you?",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 4,
//         messageType: "TEXT",
//         text: "I'm good as well",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 5,
//         messageType: "TEXT",
//         text: "Great 😁",
//         senderID: 0,
//         addedOn: "12:00 PM",
//       },
//       {
//         id: 6,
//         messageType: "TEXT",
//         text: "Have you subscribed The Indian Dev ?",
//         senderID: 1,
//         addedOn: "12:00 PM",
//       },
//     ],
//   },
// ]
const demoContacts = [
  {
      "_id": "153268926",
      "name": "Alon Cohen",
      "img": "https://iili.io/pYnV7S.jpg",
      "lastMsg": "Trust you bro!",
      "lastMsgTime": Date.now(),
      "lastMsgId": 12,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Hey Alon 😁",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 2,
              "messageType": "TEXT",
              "text": "Hey, What's up?",
              "senderID": 1,
              "addedOn": "12:01 PM"
          },
          {
              "id": 3,
              "messageType": "TEXT",
              "text": "All Good, What about you?",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 4,
              "messageType": "TEXT",
              "text": "I'm good as well",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 5,
              "messageType": "TEXT",
              "text": "Great 😁",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 6,
              "messageType": "TEXT",
              "text": "Have you subscribed my channel ?",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 7,
              "messageType": "TEXT",
              "text": "somthing new?",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 8,
              "messageType": "TEXT",
              "text": "Yes, a lot of cool stuff!",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 9,
              "messageType": "TEXT",
              "text": "You need to see it!",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 10,
              "messageType": "TEXT",
              "text": "Ok?",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 11,
              "messageType": "TEXT",
              "text": "I will!",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 12,
              "messageType": "TEXT",
              "text": "Trust you bro!",
              "senderID": 0,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "name": "Mister guy",
      "_id": "45484518715",
      "img": "https://iili.io/pYlRzx.jpg",
      "lastMsg": "Bring your family👩‍👩‍👧‍👦",
      "lastMsgTime": 1519911809930,
      "lastMsgId": 6,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Dude!",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 2,
              "messageType": "TEXT",
              "text": "Lets catch up!",
              "senderID": 1,
              "addedOn": "12:01 PM"
          },
          {
              "id": 3,
              "messageType": "TEXT",
              "text": "Pick hour and place!",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 4,
              "messageType": "TEXT",
              "text": "Tomorrow at 10?",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 5,
              "messageType": "TEXT",
              "text": "Great 😁",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 6,
              "messageType": "TEXT",
              "text": "Bring your family👩‍👩‍👧‍👦",
              "senderID": 1,
              "addedOn": "12:00 PM"
          }
      ]
  },
    {
      "name": "Miel C K",
      "_id": "45as6918715",
      "img": "https://i.imgur.com/rqXaHEe.jpeg",
      "lastMsg": "Yeyy! i cant wait🎆🎈",
      "lastMsgTime": Date.now(),
      "lastMsgId": 6,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Daddy, you called my before?",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 2,
              "messageType": "TEXT",
              "text": "Yes my love" ,
              "senderID": 1,
              "addedOn": "12:01 PM"
          },
          {
              "id": 3,
              "messageType": "TEXT",
              "text": "Let call mommy!!! 🥰",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 4,
              "messageType": "TEXT",
              "text": "Where is savta???",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 5,
              "messageType": "TEXT",
              "text": "Lets wait for mommy and then we will go visit savta!",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 6,
              "messageType": "TEXT",
              "text": "Yeyy! i cant wait🎆🎈",
              "senderID": 0,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "name": "Itamar Lapid",
      "_id": "4548454",
      "img": "https://iili.io/pYlN1I.jpg",
      "lastMsg": "I have to go now, see you at the meeting.",
      "lastMsgTime": Date.now(),
      "lastMsgId": 7,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Itamer don't forget to bring the binders.",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 2,
              "messageType": "TEXT",
              "text": "I've already left, I'll bring tomorrow.",
              "senderID": 0,
              "addedOn": "12:01 PM"
          },
          {
              "id": 3,
              "messageType": "TEXT",
              "text": "This is very important, the client is not ready to move forward.",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 4,
              "messageType": "TEXT",
              "text": "Go back?",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 5,
              "messageType": "TEXT",
              "text": "Yes, what about matan?",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 6,
              "messageType": "TEXT",
              "text": "I fired him",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 7,
              "messageType": "TEXT",
              "text": "I have to go now, see you at the meeting.",
              "senderID": 0,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "name": "Matan Parienti",
      "_id": "455845495",
      "img": "https://iili.io/pY0I4I.md.jpg",
      "lastMsg": "If so we will do it today",
      "lastMsgTime": Date.now(),
      "lastMsgId": 6,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "The site is functioning and the customer is satisfied.",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 2,
              "messageType": "TEXT",
              "text": "Great, I'm glad to hear, it means we did our job properly.",
              "senderID": 1,
              "addedOn": "12:01 PM"
          },
          {
              "id": 3,
              "messageType": "TEXT",
              "text": "I need to talk to you about my manager",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 4,
              "messageType": "TEXT",
              "text": "No problem, we'll do it soon",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 5,
              "messageType": "TEXT",
              "text": "something important?",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 6,
              "messageType": "TEXT",
              "text": "If so we will do it today",
              "senderID": 1,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "_id": "35900268926",
      "name": "Alen Chernoi",
      "img": "https://iili.io/pYabae.jpg",
      "lastMsg": "Yes, I think Vue is much more efficient",
      "lastMsgTime": 1519911869934,
      "lastMsgId": 7,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Hey Alen 😁",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 2,
              "messageType": "TEXT",
              "text": "Hey, What's up?",
              "senderID": 1,
              "addedOn": "12:01 PM"
          },
          {
              "id": 3,
              "messageType": "TEXT",
              "text": "All Good, What about you?",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 4,
              "messageType": "TEXT",
              "text": "I'm good as well",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 5,
              "messageType": "TEXT",
              "text": "Great 😁",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 6,
              "messageType": "TEXT",
              "text": "Have you finish your overview about react ?",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 7,
              "messageType": "TEXT",
              "text": "Yes, I think Vue is much more efficient ",
              "senderID": 0,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "name": "Yuval Misterbit",
      "_id": "454196258715",
      "img": "https://iili.io/pY1rf2.jpg",
      "lastMsg": "Thanks! I will update soon!",
      "lastMsgTime": Date.now(),
      "lastMsgId": 6,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Good luck Yuval",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 2,
              "messageType": "TEXT",
              "text": "Thanks Alon!",
              "senderID": 0,
              "addedOn": "12:01 PM"
          },
          {
              "id": 3,
              "messageType": "TEXT",
              "text": "I am very excited",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 4,
              "messageType": "TEXT",
              "text": "It's natural, you're a champion, I'm sure you'll succeed",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 5,
              "messageType": "TEXT",
              "text": "Thanks again, good luck in your new job!",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 6,
              "messageType": "TEXT",
              "text": "Thanks! I will update soon!",
              "senderID": 1,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "name": "Shoki",
      "_id": "454845446854",
      "img": "https://iili.io/pYEaql.jpg",
      "lastMsg": "Everything is wonderful, we are doing great!",
      "lastMsgTime": 1519911809934,
      "lastMsgId": 6,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Hey Alon 😁",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 2,
              "messageType": "TEXT",
              "text": "Hey, What's up?",
              "senderID": 1,
              "addedOn": "12:01 PM"
          },
          {
              "id": 3,
              "messageType": "TEXT",
              "text": "All Good, What about you?",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 4,
              "messageType": "TEXT",
              "text": "I'm good as well",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 5,
              "messageType": "TEXT",
              "text": "Great 😁",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 6,
              "messageType": "TEXT",
              "text": "Is there anything new with your girl?",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
            "id": 7,
            "messageType": "TEXT",
            "text": "Everything is wonderful, we are doing great!",
            "senderID": 0,
            "addedOn": "12:00 PM"
        }
      ]
  },
  {
      "name": "Zlil",
      "_id": "23926896364816599",
      "img": "https://iili.io/pYEDpn.jpg",
      "lastMsg": "I'm sure, in a year you'll be somewhere else.",
      "lastMsgTime":1519211809934,
      "lastMsgId": 6,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Can you come and help with the opening?",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 2,
              "messageType": "TEXT",
              "text": "Yes of course! bring in more employees?",
              "senderID": 1,
              "addedOn": "12:01 PM"
          },
          {
              "id": 3,
              "messageType": "TEXT",
              "text": "The more the better",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 4,
              "messageType": "TEXT",
              "text": "I will update you immediately",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 5,
              "messageType": "TEXT",
              "text": "Thanks! You will really love the place. 😁",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 6,
              "messageType": "TEXT",
              "text": "I'm sure, in a year you'll be somewhere else.",
              "senderID": 1,
              "addedOn": "12:00 PM"
          }
      ]
  }
]
_createContacts()

async function getContacts(filterBy = null) {
  let contacts = await storageService.query(CONTACTS)
  if (filterBy) contacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filterBy.toLowerCase()))
  return contacts
}

function _createContacts() {
  // let currContacts = storageService.query(CONTACTS)
  // // console.log(contacts.length, !contacts)
  // if (!currContacts || !currContacts.length) {
  //   console.log('if');
  //   const contacts = [
  //     {
  //       _id: "153268926",
  //       name: "Alon Kolker",
  //       img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.18169-9/12832510_10208941747321576_5807403953123434866_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BNwBdPG-ZwIAX8OgOoM&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-6rC4SDm3-1koWSOTWrEVzuF0ry15-dYHYhNOGWw7bCw&oe=6337CA99",
  //       lastMsg: "Hey bro!",
  //       lastMsgTime: "05:32 am",
  //       conversation: [
  //         {
  //           id: 1,
  //           messageType: "TEXT",
  //           text: "Hey Alon 😁",
  //           senderID: 0,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 2,
  //           messageType: "TEXT",
  //           text: "Hey, What's up?",
  //           senderID: 1,
  //           addedOn: "12:01 PM",
  //         },
  //         {
  //           id: 3,
  //           messageType: "TEXT",
  //           text: "All Good, What about you?",
  //           senderID: 0,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 4,
  //           messageType: "TEXT",
  //           text: "I'm good as well",
  //           senderID: 1,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 5,
  //           messageType: "TEXT",
  //           text: "Great 😁",
  //           senderID: 0,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 6,
  //           messageType: "TEXT",
  //           text: "Have you subscribed The Indian Dev ?",
  //           senderID: 1,
  //           addedOn: "12:00 PM",
  //         },
  //       ],
  //     },
  //     {
  //       name: "Guy Kadosh",
  //       _id: "45484518715",
  //       img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t39.30808-6/278124424_10159818441575489_4786020087784983543_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c9wfqwF9iooAX_jYTsN&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-yX4OSoS-dQIY0--hrGACXCKMGEohzOwOe_i0XR5vkaQ&oe=6316CD37",
  //       lastMsg: "I will call later",
  //       lastMsgTime: "05:32 am",
  //       conversation: [
  //         {
  //           id: 1,
  //           messageType: "TEXT",
  //           text: "Hey Guy 😁",
  //           senderID: 0,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 2,
  //           messageType: "TEXT",
  //           text: "Hey, What's up?",
  //           senderID: 1,
  //           addedOn: "12:01 PM",
  //         },
  //         {
  //           id: 3,
  //           messageType: "TEXT",
  //           text: "All Good, What about you?",
  //           senderID: 0,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 4,
  //           messageType: "TEXT",
  //           text: "I'm good as well",
  //           senderID: 1,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 5,
  //           messageType: "TEXT",
  //           text: "Great 😁",
  //           senderID: 0,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 6,
  //           messageType: "TEXT",
  //           text: "Have you subscribed The Indian Dev ?",
  //           senderID: 1,
  //           addedOn: "12:00 PM",
  //         },
  //       ],
  //     },
  //     {
  //       name: "Itamar Zaguri",
  //       _id: "4548454",
  //       img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/81697857_3137120692982893_582755546566754304_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EtZd5MgNXzIAX-Vja_R&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT8OV4tf52ZnrNMR48yCRqsl3CpxwlEPnxHyDeQvZ0-GJA&oe=6335F01D",
  //       lastMsg: "He dosent replay",
  //       lastMsgTime: "05:32 am",
  //       conversation: [
  //         {
  //           id: 1,
  //           messageType: "TEXT",
  //           text: "Hey Itamar 😁",
  //           senderID: 0,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 2,
  //           messageType: "TEXT",
  //           text: "Hey, What's up?",
  //           senderID: 1,
  //           addedOn: "12:01 PM",
  //         },
  //         {
  //           id: 3,
  //           messageType: "TEXT",
  //           text: "All Good, What about you?",
  //           senderID: 0,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 4,
  //           messageType: "TEXT",
  //           text: "I'm good as well",
  //           senderID: 1,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 5,
  //           messageType: "TEXT",
  //           text: "Great 😁",
  //           senderID: 0,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 6,
  //           messageType: "TEXT",
  //           text: "Have you subscribed The Indian Dev ?",
  //           senderID: 1,
  //           addedOn: "12:00 PM",
  //         },
  //       ],
  //     },
  //     {
  //       name: "Matan Hatuli",
  //       _id: "455845495",
  //       img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/70505272_10218109318757002_5567079211132256256_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lZZQUf1hyCsAX86vUAt&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT9QgxSm67oVC5cgklu1EKYn2pJn84yd_R4BEdkax3GPsQ&oe=6336D838",
  //       lastMsg: "Im a cat",
  //       lastMsgTime: "05:32 am",
  //       conversation: [
  //         {
  //           id: 1,
  //           messageType: "TEXT",
  //           text: "Hey Matan 😁",
  //           senderID: 0,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 2,
  //           messageType: "TEXT",
  //           text: "Hey, What's up?",
  //           senderID: 1,
  //           addedOn: "12:01 PM",
  //         },
  //         {
  //           id: 3,
  //           messageType: "TEXT",
  //           text: "All Good, What about you?",
  //           senderID: 0,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 4,
  //           messageType: "TEXT",
  //           text: "I'm good as well",
  //           senderID: 1,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 5,
  //           messageType: "TEXT",
  //           text: "Great 😁",
  //           senderID: 0,
  //           addedOn: "12:00 PM",
  //         },
  //         {
  //           id: 6,
  //           messageType: "TEXT",
  //           text: "Have you subscribed The Indian Dev ?",
  //           senderID: 1,
  //           addedOn: "12:00 PM",
  //         },
  //       ],
  //     },
  //   ]
  //   storageService.postMany(CONTACTS, contacts)
  // }
  // return currContacts
  let contacts = JSON.parse(localStorage.getItem(CONTACTS))
  if (!contacts) {
    contacts = demoContacts
  }
  localStorage.setItem(CONTACTS, JSON.stringify(contacts))
}

async function getContactById(contactId) {
  let currContact = await storageService.query(CONTACTS)

  currContact = currContact.find((contact) => contact._id === contactId)
  return Promise.resolve(currContact)
  //   return {
  //     name: "Matan Hatuli",
  //     _id: "455845495",
  //     img: "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/70505272_10218109318757002_5567079211132256256_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lZZQUf1hyCsAX86vUAt&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT9QgxSm67oVC5cgklu1EKYn2pJn84yd_R4BEdkax3GPsQ&oe=6336D838",
  //     lastMsg: "Im a cat",
  //     lastMsgTime: "05:32 am",
  // conversation: [
  //   {
  //     id: 1,
  //     messageType: "TEXT",
  //     text: "Hey Man 😁",
  //     senderID: 0,
  //     addedOn: "12:00 PM",
  //   },
  //   {
  //     id: 2,
  //     messageType: "TEXT",
  //     text: "Hey, What's up?",
  //     senderID: 1,
  //     addedOn: "12:01 PM",
  //   },
  //   {
  //     id: 3,
  //     messageType: "TEXT",
  //     text: "All Good, What about you?",
  //     senderID: 0,
  //     addedOn: "12:00 PM",
  //   },
  //   {
  //     id: 4,
  //     messageType: "TEXT",
  //     text: "I'm good as well",
  //     senderID: 1,
  //     addedOn: "12:00 PM",
  //   },
  //   {
  //     id: 5,
  //     messageType: "TEXT",
  //     text: "Great 😁",
  //     senderID: 0,
  //     addedOn: "12:00 PM",
  //   },
  //   {
  //     id: 6,
  //     messageType: "TEXT",
  //     text: "Have you subscribed The Indian Dev ?",
  //     senderID: 1,
  //     addedOn: "12:00 PM",
  //   },
  // ],
  //   }
}

async function sendMsg(msg, contactId) {
  let currContact = await storageService.get(CONTACTS, contactId)
  let newMsg = {
    id: ++currContact.lastMsgId,
    messageType: "TEXT",
    text: msg,
    senderID: 1,
    addedOn: Date.now(),
  }
  currContact.conversation.push(newMsg)
  currContact.lastMsg = msg
  currContact.lastMsgTime =Date.now()
  await storageService.put(CONTACTS, currContact)
  return storageService.get(CONTACTS, contactId)
}
async function getById(contactId) {
  // return httpService.get(`item/${itemId}`)
  return storageService.get(CONTACTS, contactId)
}
