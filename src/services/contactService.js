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
      "name": "Alon Kolker",
      "img": "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.18169-9/12832510_10208941747321576_5807403953123434866_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BNwBdPG-ZwIAX8OgOoM&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-6rC4SDm3-1koWSOTWrEVzuF0ry15-dYHYhNOGWw7bCw&oe=6337CA99",
      "lastMsg": "מה חדש?",
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
              "text": "Have you subscribed The Indian Dev ?",
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
              "text": "מה נשמע?",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 9,
              "messageType": "TEXT",
              "text": "FDSF",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 10,
              "messageType": "TEXT",
              "text": "ASDASD",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 11,
              "messageType": "TEXT",
              "text": "test",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 12,
              "messageType": "TEXT",
              "text": "מה חדש?",
              "senderID": 0,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "name": "Guy Kadosh",
      "_id": "45484518715",
      "img": "https://scontent.fhfa2-2.fna.fbcdn.net/v/t39.30808-6/278124424_10159818441575489_4786020087784983543_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c9wfqwF9iooAX_jYTsN&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-yX4OSoS-dQIY0--hrGACXCKMGEohzOwOe_i0XR5vkaQ&oe=6316CD37",
      "lastMsg": "I will call later",
      "lastMsgTime": Date.now(),
      "lastMsgId": 6,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Hey Guy 😁",
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
              "text": "Have you subscribed The Indian Dev ?",
              "senderID": 1,
              "addedOn": "12:00 PM"
          }
      ]
  },
    {
      "name": "Miel Kolker",
      "_id": "45as6918715",
      "img": "https://i.imgur.com/rqXaHEe.jpeg",
      "lastMsg": "ישששש! אין כמו אמא!",
      "lastMsgTime": Date.now(),
      "lastMsgId": 6,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "מה קורה מתוקה שלי?",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 2,
              "messageType": "TEXT",
              "text": " בסדר אבא אני רעבהההההה" ,
              "senderID": 1,
              "addedOn": "12:01 PM"
          },
          {
              "id": 3,
              "messageType": "TEXT",
              "text": "בוא נטייל עם אמאאאאאאאאא",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 4,
              "messageType": "TEXT",
              "text": "סבתא בבית???????????",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 5,
              "messageType": "TEXT",
              "text": "כן נחכה לאמא, נתכונן ונצא יפיופה",
              "senderID": 0,
              "addedOn": "12:00 PM"
          },
          {
              "id": 6,
              "messageType": "TEXT",
              "text": "ישששש! אין כמו אמא!",
              "senderID": 1,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "name": "Itamar Zaguri",
      "_id": "4548454",
      "img": "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/81697857_3137120692982893_582755546566754304_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EtZd5MgNXzIAX-Vja_R&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT8OV4tf52ZnrNMR48yCRqsl3CpxwlEPnxHyDeQvZ0-GJA&oe=6335F01D",
      "lastMsg": "איתמר אתה פה?",
      "lastMsgTime": Date.now(),
      "lastMsgId": 7,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Hey Itamar 😁",
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
              "text": "Have you subscribed The Indian Dev ?",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 7,
              "messageType": "TEXT",
              "text": "איתמר אתה פה?",
              "senderID": 0,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "name": "Matan Hatuli",
      "_id": "455845495",
      "img": "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/70505272_10218109318757002_5567079211132256256_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lZZQUf1hyCsAX86vUAt&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT9QgxSm67oVC5cgklu1EKYn2pJn84yd_R4BEdkax3GPsQ&oe=6336D838",
      "lastMsg": "Im a cat",
      "lastMsgTime": Date.now(),
      "lastMsgId": 6,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Hey Matan 😁",
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
              "text": "Have you subscribed The Indian Dev ?",
              "senderID": 1,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "_id": "35900268926",
      "name": "Alen Chernick",
      "img": "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/54255417_10212710478740823_758990888083914752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=84a396&_nc_ohc=LM5dvBoOf7gAX8iUBCe&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT89bIi8KY6dadHV_GDUKRqNMUIp7J9bsGqtrmfjNmbkAQ&oe=633B26C1",
      "lastMsg": "Im police!",
      "lastMsgTime": Date.now(),
      "lastMsgId": 7,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Hey Alen 😁",
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
              "text": "Have you subscribed The Indian Dev ?",
              "senderID": 1,
              "addedOn": "12:00 PM"
          },
          {
              "id": 7,
              "messageType": "TEXT",
              "text": "test",
              "senderID": 0,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "name": "Yuval Shmkler",
      "_id": "454196258715",
      "img": "https://scontent.fhfa2-2.fna.fbcdn.net/v/t39.30808-6/271554926_4863694470319876_5475864369642688973_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=g05s0B3I410AX-WZGB5&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT89kjFVmTYsY9hRlw3SZOSjBbphQAfz67TNslskJ3lxzg&oe=6319A183",
      "lastMsg": "Mister bit!!",
      "lastMsgTime": Date.now(),
      "lastMsgId": 6,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Hey Yuval 😁",
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
              "text": "Have you subscribed The Indian Dev ?",
              "senderID": 1,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "name": "Shoki",
      "_id": "454845446854",
      "img": "https://scontent.fhfa2-2.fna.fbcdn.net/v/t39.30808-1/285594330_10229152474585274_5369988111926164076_n.jpg?stp=c0.20.200.200a_dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kxhxEShWfjAAX9IoKms&tn=cy01C5YiP5UABt82&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT8bxmIC3v4E0pFkyK0eB8A_wsNMGotcNWIexpFIUawJsA&oe=631A9E5E",
      "lastMsg": "Mitcho Matcho?",
      "lastMsgTime": 1519911809934,
      "lastMsgId": 6,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Hey Shoki 😁",
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
              "text": "Have you subscribed The Indian Dev ?",
              "senderID": 1,
              "addedOn": "12:00 PM"
          }
      ]
  },
  {
      "name": "Zlil",
      "_id": "23926896364816599",
      "img": "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/205446347_10222018966935034_2113396743656864804_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=COEvhtkBo8oAX-zQFDo&_nc_oc=AQltquYUJbKBLdX6slrSwahid6Ucz26JnkmtWpcWgOfYxRGj3lib-3GGed01O9ZWKyE&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT84UsBeGztJCena4ilgWwXpTkSNi0veGMr_prvj6z0bAQ&oe=633AE8C0",
      "lastMsg": "Im a cat",
      "lastMsgTime":1519211809934,
      "lastMsgId": 6,
      "conversation": [
          {
              "id": 1,
              "messageType": "TEXT",
              "text": "Hey Zlil 😁",
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
              "text": "Have you subscribed The Indian Dev ?",
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
  console.log(currContact)
  let newMsg = {
    id: ++currContact.lastMsgId,
    messageType: "TEXT",
    text: msg,
    senderID: 0,
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
