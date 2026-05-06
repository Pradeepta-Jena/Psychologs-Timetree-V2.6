// ... [ALL EXISTING DATA & LOGIC AT THE START] ...

// ORIGINAL TIMELINE DATA
const timelineData = [
  {
    "id": 1,
    "date": "2024-11-13",
    "title": "Zero Point",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/13.11.24 Our Freshers.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 2,
    "date": "2024-11-13",
    "title": "A new beginning with a selfie",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/13.11.24 Our Freshers 2.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 3,
    "date": "2025-02-02",
    "title": "Saraswati Puja",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/2.02.25 Saraswati Puja.jpg",
    "aspectRatio": "square"
  },
 {
    "id": 4,
    "date": "2025-03-09",
    "title": "Ethnic day",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/Ethnic Day 9.3.25.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 5,
    "date": "2025-03-09",
    "title": "Ethnic Ladies",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/Ethnic Day 2.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 6,
    "date": "2025-03-20",
    "title": "Happiness Day 2025",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/20.03.25 Happiness Day.jpg",
    "aspectRatio": "landscape"
  },
  {
    "id": 7,
    "date": "2025-03-25",
    "title": "Happy Family",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/20.03.25 Happiness Day 2.jpg",
    "aspectRatio": "square"
  },
 {
    "id": 8,
    "date": "2025-02-25",
    "title": "Darcee's Annual Function",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/25.2.25 Darcee's Annual Function.jpg",
    "aspectRatio": "landscape"
  },
  {
    "id": 9,
    "date": "2025-08-22",
    "title": "Freshers' Event 2025",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/22.8.25 Jr Freshers.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 10,
    "date": "2025-08-22",
    "title": "Red Carpet",
    "description": "Ayo, who gave the budget to call celebrities",
    "imageUrl": "C24/22.8.25 Jr Freshers 2.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 11,
    "date": "2025-09-10",
    "title": "Suicide Prevention 2025",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/10.09.25 Suicide Prevention.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 12,
    "date": "2025-09-10",
    "title": "2 Generations together with their teachers",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/10.09.25 Suicide Prevention day 2.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 13,
    "date": "2025-11-19",
    "title": "Field Trip for Batch PSYC24",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/19.11.25 Field Trip.jpg",
    "aspectRatio": "landscape"
  },
  {
    "id": 14,
    "date": "2025-12-13",
    "title": "From Pratyasha Barla",
    "description": "We stood there on the last day of our third semester !  smiles wide, hearts light, relieved to have crossed another finish line. In that moment, all we knew was happiness… not a single thought spared for what lay ahead. But time, as it always does, moved quietly. That “near future” we once wondered about has already passed through us, slipping gently into memory. Those days in between... scattered, uncertain, almost unreal.. no classrooms, no routines, just us, suspended somewhere between what was and what could be. One foot stepping into the unknown, the other hesitating, questioning, Is this the right path? Is this who I’m meant to become? Some of us found answers along the way. Some are still wandering, still searching. But maybe that was never the point. Because in all this uncertainty, one thing remained certain, this was never the end of us. Just another beginning, disguised as an ending. ✨",
    "imageUrl": "C24/13.12.25 3rd Sem Khatam.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 15,
    "date": "2026-04-18",
    "title": "Absolute Chaos & iconic energy",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/18.04.26 Absolute Chaos & iconic energy.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 16,
    "date": "2024-12-01",
    "title": "Election day",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/1.12.24 Election day.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 17,
    "date": "2024-12-10",
    "title": "Library Tour",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/10.12.24 Library Tour.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 18,
    "date": "2025-01-23",
    "title": "batch day out",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/23.1.25 batch day out 2.jpg",
    "aspectRatio": "landscape"
  },
  {
    "id": 19,
    "date": "2025-01-23",
    "title": "batch day out with dogesh",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/23.1.25 batch day out Barunei Hill.jpg",
    "aspectRatio": "landscape"
  },
  {
    "id": 20,
    "date": "2025-04-25",
    "title": "Annual function 2025",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24/25.4.25 Annual function 2025.jpg",
    "aspectRatio": "landscape"
  },
  {
    "id": 21,
    "date": "2025-04-02",
    "title": "Autism day Lok sabha bhavan",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/2.4.25 Autism day Lok sabha bhavan.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 22,
    "date": "2025-04-25",
    "title": "Annual day 2025 1",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/25.4.25 Annual day 2025 1.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 23,
    "date": "2025-04-25",
    "title": "Annual day 2025 2",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/25.4.25 Annual day 2025 2.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 24,
    "date": "2025-04-25",
    "title": "From Vaibhavee Singh",
    "description": "It was our first big event together... Planning it... Executing it was definitely chaotic...But with these people it felt like the RIGHT place to be in... I miss the chaos...",
    "imageUrl": "C24 2/25.4.25 Annual day 2025 3.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 25,
    "date": "2025-05-10",
    "title": "Farewell of Batch 23 1",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/10.5.25 Farewell of Batch 23 1.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 26,
    "date": "2025-05-10",
    "title": "Farewell of Batch 23 2",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/10.5.25 Farewell of Batch 23 2.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 27,
    "date": "2025-05-10",
    "title": "Farewell of Batch 23 3",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/10.5.25 Farewell of Batch 23 3.jpg",
    "aspectRatio": "square"
  },
  {
    "id": 28,
    "date": "2025-07-23",
    "title": "New Jersey",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/23.7.25 New Jersey.jpg",
    "aspectRatio": "portrait"
  },
  {
    "id": 29,
    "date": "2025-11-13",
    "title": "Ipsita ma'am farewell",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/13.11.25 Ipsita ma'am farewell .jpg",
    "aspectRatio": "square"
  },
  {
    "id": 30,
    "date": "2025-12-19",
    "title": "International Conference 2025",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/19.12.25 International Conference 2025.jpg",
    "aspectRatio": "landscape"
  },
  {
    "id": 31,
    "date": "2025-12-22",
    "title": "Bonfire 2025",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "C24 2/22.12.25 Bonfire.jpg",
    "aspectRatio": "landscape"
  },
  {
    "id": 32,
    "date": "2025-12-22",
    "title": "From Swetapadma Baraik",
    "description": "Probably I'll miss this day more than anything or any other event, the very evening when i let my boundaries down a little and let these people enter forever, there might be a future when i might forget your names (i m sorry if i do) but the feelings, the love that i got that very night will forever be cherished, i just knew i love them a lot. This is definitely going to be a part of the last 7 minutes 🩷",
    "imageUrl": "C24 2/22.12.25 Bonfire 2.jpg",
    "aspectRatio": "landscape"
  },
];

// NEW DATA FOR SENIORS TAB
const seniorsData = [
  {
    "id": 101,
    "rollNumber": "PSYC24-001",
    "title": "Abhipsa sarangi",
    "description": "Desi Dreamer",
    "imageUrl": "KYS/Abhipsa sarangi PSYC24-001.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 102,
    "rollNumber": "PSYC24-002",
    "title": "Aishwarya Sahoo",
    "description": "Main Character",
    "imageUrl": "KYS/Aishwarya Sahoo PSYC24-002 .jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "square"
  },
  {
    "id": 103,
    "rollNumber": "PSYC24-003",
    "title": "Akankhya Kanungo",
    "description":"Babygirl Energy",
    "imageUrl": "KYS/Akankhya Kanungo PSYC24-003.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 104,
    "rollNumber": "PSYC24-004",
    "title": "Alaka Pattnaik",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS/Alaka Pattnaik PSYC24-004.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 105,
    "rollNumber": "PSYC24-005",
    "title": "Alpha Sethi",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS/Alpha Sethi PSYC24-005.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 106,
    "rollNumber": "PSYC24-007",
    "title": "Anchal Swain",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS/Anchal Swain PSYC24-007.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 107,
    "rollNumber": "PSYC24-008",
    "title": "Ankita Kujur",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS/Ankita Kujur PSYC24-008.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 108,
    "rollNumber": "PSYC24-009",
    "title": "Ansh Tudu",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS/Ansh Tudu PSYC24-009.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 109,
    "rollNumber": "PSYC24-010",
    "title": "Arpita Sahoo",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS/Arpita Sahoo PSYC24-010.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },{
    "id": 110,
    "rollNumber": "PSYC24-011",
    "title": "Binati Bibhusita",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS/Binati Bibhusita Sa PSYC24-011.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 111,
    "rollNumber": "PSYC24-012",
    "title": "Chandan Kumar Sen",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS/Chandan Kumar Sen PSYC24-012.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 112,
    "rollNumber": "PSYC24-013",
    "title": "Chandini Hikaka",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS/Chandini Hikaka PSYC24-013.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 113,
    "rollNumber": "PSYC24-014",
    "title": "Deepasmita Bhue",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 2/Deepasmita Bhue PSYC24-014.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 114,
    "rollNumber": "PSYC24-015",
    "title": "Esha Singh",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 2/Esha Singh PSYC24-015.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 115,
    "rollNumber": "PSYC24-016",
    "title": "Falguni Raul",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 2/Falguni Raul PSYC24-016.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 116,
    "rollNumber": "PSYC24-017",
    "title": "Hitesh Kutruka",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 2/Hitesh Kutruka PSYC24-017.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 117,
    "rollNumber": "PSYC24-018",
    "title": "Itishree Pradhan",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 2/Itishree Pradhan PSYC24-018.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 118,
    "rollNumber": "PSYC24-019",
    "title": "Jajnaseni Das",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 2/Jajnaseni Das PSYC24-019.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 119,
    "rollNumber": "PSYC24-020",
    "title": "Jashaswinee Jiban Dash",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 2/Jashaswinee Jiban Dash PSYC24-020.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 120,
    "rollNumber": "PSYC24-021",
    "title": "Manosmita Pattanaik",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 2/Manosmita Pattanaik PSYC24-021.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 121,
    "rollNumber": "PSYC24-022",
    "title": "Megha Agarwal",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 2/Megha Agarwal PSYC24-022.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 122,
    "rollNumber": "PSYC24-023",
    "title": "Monalisa Rout",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 2/Monalisa Rout PSYC24-023.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "square"
  },
  {
    "id": 123,
    "rollNumber": "PSYC24-024",
    "title": "Nandini Maharana",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 2/Nandini Maharana PSYC24-024.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 124,
    "rollNumber": "PSYC24-025",
    "title": "Padmini Sethi",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 2/Padmini Sethi PSYC24-025.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 125,
    "rollNumber": "PSYC24-027",
    "title": "Pratyasha Barla",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 3/Pratyasha Barla PSYC24-027.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 126,
    "rollNumber": "PSYC24-028",
    "title": "Priyanka Priyadarshani Sethy",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 3/Priyanka priyadarshani sethy PSYC24-028.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 127,
    "rollNumber": "PSYC24-030",
    "title": "Pujashree Ajagar",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 3/Pujashree Ajagar PSYC24-030.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 128,
    "rollNumber": "PSYC24-032",
    "title": "Satyapriya Patra",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 3/Satyapriya Patra PSYC24-032.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 129,
    "rollNumber": "PSYC24-033",
    "title": "Shakti Sampanna Parida",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 3/Shakti Sampanna Parida PSYC24-033.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "square"
  },
  {
    "id": 130,
    "rollNumber": "PSYC24-034",
    "title": "Shikha Rout",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 3/Shikha Rout PSYC24-034.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 131,
    "rollNumber": "PSYC24-035",
    "title": "Shovana Dash",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 3/Shovana Dash PSYC24-035..jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 132,
    "rollNumber": "PSYC24-036",
    "title": "Shrestha Padhi",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 3/Shrestha Padhi PSYC24-036.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 133,
    "rollNumber": "PSYC24-037",
    "title": "Siddharth Mohan Pradhan",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 3/Siddharth Mohan Pradhan PSYC24-037.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 134,
    "rollNumber": "PSYC24-038",
    "title": "Sneharani Sahoo",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 3/Sneharani Sahoo PSYC24-038.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 135,
    "rollNumber": "PSYC24-039",
    "title": "Sristi Sarangi",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 3/Sristi Sarangi PSYC24-039.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 136,
    "rollNumber": "PSYC24-040",
    "title": "Subhashree Mohanty",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 3/Subhashree Mohanty PSYC24-040.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 137,
    "rollNumber": "PSYC24-041",
    "title": "Subhramayee Gadhai",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 4/Subhramayee Gadhai PSYC24-041.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 138,
    "rollNumber": "PSYC24-042",
    "title": "Sunanda Badhei",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 4/Sunanda Badhei PSYC24-042.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 139,
    "rollNumber": "PSYC24-043",
    "title": "Sushree Pallabi Mishra",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 4/Sushree Pallabi Mishra PSYC24-043.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 140,
    "rollNumber": "PSYC24-044",
    "title": "Swetalin Das",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 4/Swetalin Das PSYC24-044.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 141,
    "rollNumber": "PSYC24-045",
    "title": "Swetapadma Baraik",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 4/Swetapadma Baraik PSYC24-045.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 142,
    "rollNumber": "PSYC24-046",
    "title": "Tanmayee Mohanty",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 4/Tanmayee Mohanty PSYC24-046.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
  {
    "id": 143,
    "rollNumber": "PSYC24-047",
    "title": "Tapaswini Sarangi",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 4/Tapaswini Sarangi PSYC24-047.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "square"
  },
  {
    "id": 144,
    "rollNumber": "PSYC24-048",
    "title": "Vaibhavee Singh",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "KYS 4/Vaibhavee Singh PSYC24-048.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "portrait"
  },
];

// ... [EXISTING GLOBAL VARIABLES] ...
let currentSlideIndex = 0;
let slideshowInterval;
let currentTrackIndex = 0;
const trackNames = ["M1 - Morning Mist", "M2 - Soulful Strums", "M3 - Evening Echo", "L1"]; 
let isPlaying = false;
let isMuted = false;

// NEW VARIABLES FOR SENIORS
let currentSeniorsSlideIndex = 0;
let seniorsSlideshowInterval;

// Calendar Global Variables
const MIN_CALENDAR_YEAR = 2023;
const MAX_CALENDAR_YEAR = 2030;
let currentCalendarDisplayDate = new Date(); // Tracks the month and year currently displayed in the calendar UI
let selectedCalendarDate = null; // Tracks the specific date clicked/selected by the user in the calendar
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Touch/Swipe variables
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50; // Minimum pixel distance for a swipe

// Audio tracks
const audioTracks = [
  document.getElementById('backgroundAudio'),
  document.getElementById('track2'),
  document.getElementById('track3'),
  document.getElementById('track4'), // New track added in HTML
  document.getElementById('track5'),
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const muteBtn = document.getElementById('muteBtn');
const timelineContainer = document.getElementById('timelineContainer');
const slideshowWrapper = document.getElementById('slideshowWrapper');
const slideshowIndicators = document.getElementById('slideshowIndicators');
const currentSlideElement = document.getElementById('currentSlide'); // Reference to the slide div itself

// New Calendar DOM Elements
const dateSearchToggle = document.getElementById('dateSearchToggle');
const dateSearchCalendar = document.getElementById('dateSearchCalendar');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const calendarDisplayMonth = document.getElementById('calendarDisplayMonth');
const calendarYearSelect = document.getElementById('calendarYearSelect');
const calendarMonthSelect = document.getElementById('calendarMonthSelect');
const calendarDays = document.getElementById('calendarDays');
const goToSelectedDateBtn = document.getElementById('goToSelectedDateBtn');
const closeCalendarBtn = document.getElementById('closeCalendarBtn');

// New Scroll Buttons
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');


// APP INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
  timelineData.sort((a, b) => new Date(a.date) - new Date(b.date));
  seniorsData.sort((a, b) => new Date(a.date) - new Date(b.date));

  initializeTheme();
  initializeTimeline(); // Original
  initializeSeniorsTimeline(); // New
  initializeSlideshow(); // Original
  initializeSeniorsSlideshow(); // New
  initializeMusicPlayer();
  initializeIntersectionObserver();
  initializeDateSearchCalendar();
  
  // Add event listeners
  themeToggle.addEventListener('click', toggleTheme);
  playPauseBtn.addEventListener('click', togglePlayPause);
  prevBtn.addEventListener('click', previousTrack);
  nextBtn.addEventListener('click', nextTrack);
  muteBtn.addEventListener('click', toggleMute);

  // Music Playlist logic
const playlistToggleBtn = document.getElementById('playlistToggleBtn');
const musicPlaylist = document.getElementById('musicPlaylist');
const trackItems = document.querySelectorAll('.track-item');

playlistToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    musicPlaylist.classList.toggle('visible');
});

trackItems.forEach(item => {
    item.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        playSpecificTrack(index);
        musicPlaylist.classList.remove('visible');
    });
});

// Close playlist when clicking outside
document.addEventListener('click', () => musicPlaylist.classList.remove('visible'));

  // Calendar related event listeners
  dateSearchToggle.addEventListener('click', toggleCalendar);
  closeCalendarBtn.addEventListener('click', toggleCalendar);
  goToSelectedDateBtn.addEventListener('click', () => scrollToDateFromCalendar(selectedCalendarDate));
  
  calendarYearSelect.addEventListener('change', updateCalendar);
  calendarMonthSelect.addEventListener('change', updateCalendar);
  calendarDays.addEventListener('click', handleDayClick); // Use event delegation for day clicks
  prevMonthBtn.addEventListener('click', prevMonth);
  nextMonthBtn.addEventListener('click', nextMonth);
  
  // Close calendar if clicking outside
  document.addEventListener('click', closeCalendarOnClickOutside);
  // Close calendar on escape key
  document.addEventListener('keydown', closeCalendarOnEscape);

  // Auto-start music (with user interaction fallback)
  document.addEventListener('click', autoStartMusic, { once: true });

  // New features:
  // Slideshow tap to go to timeline
  currentSlideElement.addEventListener('click', tapToTimelineEvent);
  // Add this line inside the DOMContentLoaded block
document.getElementById('currentSlideSeniors').addEventListener('click', tapToSeniorsTimelineEvent);

  // Slideshow swipe gestures
  slideshowWrapper.addEventListener('touchstart', handleTouchStart);
  slideshowWrapper.addEventListener('touchmove', handleTouchMove);
  slideshowWrapper.addEventListener('touchend', handleTouchEnd);
  
  // Scroll to Top/Bottom buttons
  scrollToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  scrollToBottomBtn.addEventListener('click', () => { window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }); });
  
  // Show/hide scroll buttons on scroll
  window.addEventListener('scroll', toggleScrollButtonsVisibility);
  // Initial check for button visibility on load
  toggleScrollButtonsVisibility();
});

// NEW FUNCTION: Tab Switcher Logic
function openTab(evt, tabName) {
    var i, tabpane, tablinks;
    tabpane = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabpane.length; i++) {
        tabpane[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");

    // Scroll to top of tab when switching
    window.scrollTo({ top: document.querySelector('.tabs-nav').offsetTop - 100, behavior: 'smooth' });
}

// NEW FUNCTIONS FOR SENIORS TIMELINE & SLIDESHOW
function initializeSeniorsTimeline() {
    const seniorsContainer = document.getElementById('timelineContainerSeniors');
    seniorsContainer.innerHTML = '';
    seniorsData.forEach((item, index) => {
        const itemEl = createTimelineItem(item, index);
        seniorsContainer.appendChild(itemEl);
    });
}

function initializeSeniorsSlideshow() {
    createSeniorsIndicators();
    updateSeniorsSlideshow();
    startSeniorsSlideshowAutoplay();
}

function createSeniorsIndicators() {
    const indicatorsContainer = document.getElementById('slideshowIndicatorsSeniors');
    indicatorsContainer.innerHTML = '';
    seniorsData.forEach((_, index) => {
        const ind = document.createElement('div');
        ind.className = `indicator ${index === 0 ? 'active' : ''}`;
        ind.onclick = () => { currentSeniorsSlideIndex = index; updateSeniorsSlideshow(); restartSeniorsSlideshowAutoplay(); };
        indicatorsContainer.appendChild(ind);
    });
}

function updateSeniorsSlideshow() {
    if (seniorsData.length === 0) return;
    const currentItem = seniorsData[currentSeniorsSlideIndex];
    document.getElementById('slideImageSeniors').src = currentItem.imageUrl;
    document.getElementById('slideTitleSeniors').textContent = currentItem.title;
    document.getElementById('slideDateSeniors').textContent = currentItem.rollNumber;
    document.getElementById('slideDescriptionSeniors').textContent = currentItem.description;
     document.getElementById('currentSlideSeniors').dataset.timelineItemId = currentItem.id;

    const inds = document.querySelectorAll('#slideshowIndicatorsSeniors .indicator');
    inds.forEach((ind, i) => ind.classList.toggle('active', i === currentSeniorsSlideIndex));
}

function startSeniorsSlideshowAutoplay() {
    seniorsSlideshowInterval = setInterval(() => {
        currentSeniorsSlideIndex = (currentSeniorsSlideIndex + 1) % seniorsData.length;
        updateSeniorsSlideshow();
    }, 6000);
}

function restartSeniorsSlideshowAutoplay() {
    clearInterval(seniorsSlideshowInterval);
    startSeniorsSlideshowAutoplay();
}

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Add smooth transition effect
  document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  setTimeout(() => {
    document.body.style.transition = '';
  }, 300);
}

// Timeline Generation
function initializeTimeline() {
  timelineContainer.innerHTML = ''; // Clear existing timeline items
  
  timelineData.forEach((item, index) => {
    const timelineItem = createTimelineItem(item, index);
    timelineContainer.appendChild(timelineItem);
  });
}

function createTimelineItem(item, index) {
  const timelineItem = document.createElement('div');
  timelineItem.className = 'timeline-item';
  
  // Set data attributes
  if(item.date) timelineItem.setAttribute('data-date', item.date);
  timelineItem.setAttribute('data-id', item.id);
  timelineItem.style.animationDelay = `${index * 0.1}s`;
  
  // LOGIC: Check if rollNumber exists, otherwise use formatted date
  const subtextContent = item.rollNumber ? item.rollNumber : formatDate(item.date);
  
  timelineItem.innerHTML = `
    <div class="timeline-card">
      <div class="timeline-image-container ${item.aspectRatio}">
        <img src="${item.imageUrl}" alt="${item.title}" class="timeline-image" loading="lazy" onerror="handleImageError(this)">
      </div>
      <div class="timeline-content">
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-date">${subtextContent}</p> 
        <p class="timeline-description">${item.description}</p>
      </div>
    </div>
  `;
  
  return timelineItem;
}

// Slideshow Management
function initializeSlideshow() {
  if (timelineData.length === 0) {
    document.getElementById('currentSlide').style.display = 'none';
    slideshowIndicators.innerHTML = '<p style="text-align: center; color: var(--text-muted);">No memories available.</p>';
    return;
  }
  createSlideshowIndicators();
  updateSlideshow();
  startSlideshowAutoplay();
}

function createSlideshowIndicators() {
  slideshowIndicators.innerHTML = '';
  
  timelineData.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
    indicator.addEventListener('click', () => goToSlide(index));
    slideshowIndicators.appendChild(indicator);
  });
}

function updateSlideshow() {
  // If no data, the initializeSlideshow handles displaying a message.
  if (timelineData.length === 0) return; 

  const currentItem = timelineData[currentSlideIndex];
  const slideImage = document.getElementById('slideImage');
  const slideTitle = document.getElementById('slideTitle');
  const slideDate = document.getElementById('slideDate');
  const slideDescription = document.getElementById('slideDescription');
  
  const currentSlideElement = document.getElementById('currentSlide');
  currentSlideElement.classList.remove('active');
  // Store the ID of the current item for tap-to-scroll functionality
  currentSlideElement.dataset.timelineItemId = currentItem.id;

  // Use a tiny transparent GIF to prevent flickering during image loading transition
  slideImage.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; 
  slideImage.alt = ''; // Clear alt text while image is temporary
  slideTitle.textContent = ''; // Clear text content during transition
  slideDate.textContent = '';
  slideDescription.textContent = '';

  setTimeout(() => {
    slideImage.src = currentItem.imageUrl;
    slideImage.alt = currentItem.title;
    slideTitle.textContent = currentItem.title;
    slideDate.textContent = formatDate(currentItem.date);
    slideDescription.textContent = currentItem.description;

    const imageContainer = document.querySelector('.slide-image-container');
    imageContainer.className = `slide-image-container ${currentItem.aspectRatio}`;
    
    currentSlideElement.classList.add('active');
  }, 100); 
  
  document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlideIndex);
  });
}

function goToSlide(index) {
  // Ensure index is within bounds
  if (index < 0) index = timelineData.length - 1;
  if (index >= timelineData.length) index = 0;
  
  currentSlideIndex = index;
  updateSlideshow();
  restartSlideshowAutoplay();
}

function startSlideshowAutoplay() {
  clearInterval(slideshowInterval); // Clear any existing interval
  if (timelineData.length > 1) { // Only start if there's more than one slide
      slideshowInterval = setInterval(() => {
          // This ensures a random slide that isn't the current one,
          // or sequential if only one other option.
          const randomIndex = Math.floor(Math.random() * timelineData.length);
          if (randomIndex !== currentSlideIndex) {
            currentSlideIndex = randomIndex;
          } else {
            // If random picked current index, go to next sequentially to ensure a change
            currentSlideIndex = (currentSlideIndex + 1) % timelineData.length;
          }
          updateSlideshow();
      }, 6000); // 6 seconds interval
  }
}

function startSeniorsSlideshowAutoplay() {
    clearInterval(seniorsSlideshowInterval); // Clear any existing timer
    
    if (seniorsData.length > 1) { 
        seniorsSlideshowInterval = setInterval(() => {
            // Generate a random index
            const randomIndex = Math.floor(Math.random() * seniorsData.length);
            
            // Logic: If random picked the current one, just move to the next one 
            // to ensure the slide actually changes visually.
            if (randomIndex !== currentSeniorsSlideIndex) {
                currentSeniorsSlideIndex = randomIndex;
            } else {
                currentSeniorsSlideIndex = (currentSeniorsSlideIndex + 1) % seniorsData.length;
            }
            
            updateSeniorsSlideshow();
        }, 6000); // 6 seconds interval
    }
}

function restartSlideshowAutoplay() {
  clearInterval(slideshowInterval);
  startSlideshowAutoplay();
}

// New: Slideshow Tap Functionality
function tapToTimelineEvent() {
    const itemId = parseInt(currentSlideElement.dataset.timelineItemId);
    if (!isNaN(itemId)) {
        const itemToScroll = timelineData.find(item => item.id === itemId);
        if (itemToScroll) {
            // Scroll to the specific timeline item using its data-id attribute
            const targetElement = document.querySelector(`.timeline-item[data-id="${itemToScroll.id}"]`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Apply a temporary highlight
                const timelineCard = targetElement.querySelector('.timeline-card');
                if (timelineCard) {
                    const originalBackgroundColor = timelineCard.style.backgroundColor || '';
                    const originalColor = timelineCard.style.color || '';
                    const originalBoxShadow = timelineCard.style.boxShadow || '';

                    timelineCard.style.transition = 'box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease';
                    timelineCard.style.backgroundColor = 'var(--accent-secondary)';
                    timelineCard.style.color = 'white';
                    timelineCard.style.boxShadow = `0 0 0 5px var(--accent-secondary), ${originalBoxShadow}`;

                    setTimeout(() => {
                        timelineCard.style.backgroundColor = originalBackgroundColor;
                        timelineCard.style.color = originalColor;
                        timelineCard.style.boxShadow = originalBoxShadow;
                    }, 2000);
                    setTimeout(() => {
                        timelineCard.style.transition = '';
                    }, 2300);
                }
            } else {
                console.warn(`Timeline item DOM element not found for ID: ${itemId}`);
            }
        }
    }
}

function tapToSeniorsTimelineEvent() {
    const slideElement = document.getElementById('currentSlideSeniors');
    const itemId = parseInt(slideElement.dataset.timelineItemId);
    
    if (!isNaN(itemId)) {
        // Find the timeline item in the Seniors container
        const targetElement = document.querySelector(`#timelineContainerSeniors .timeline-item[data-id="${itemId}"]`);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Add a highlight effect
            const timelineCard = targetElement.querySelector('.timeline-card');
            if (timelineCard) {
                timelineCard.style.transition = 'all 0.3s ease';
                timelineCard.style.boxShadow = '0 0 20px var(--accent-primary)';
                timelineCard.style.borderColor = 'var(--accent-primary)';
                
                setTimeout(() => {
                    timelineCard.style.boxShadow = '';
                    timelineCard.style.borderColor = '';
                }, 2000);
            }
        }
    }
}

function tapToTimelineEvent() {
    const itemId = parseInt(currentSlideElement.dataset.timelineItemId);
    if (!isNaN(itemId)) {
        // Find the specific timeline item in the Department container
        const targetElement = document.querySelector(`#timelineContainer .timeline-item[data-id="${itemId}"]`);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Use 'center' for better visibility
            
            // Apply the same high-quality highlight as the Seniors tab
            const timelineCard = targetElement.querySelector('.timeline-card');
            if (timelineCard) {
                timelineCard.style.transition = 'all 0.3s ease';
                timelineCard.style.boxShadow = '0 0 20px var(--accent-primary)';
                timelineCard.style.borderColor = 'var(--accent-primary)';

                setTimeout(() => {
                    timelineCard.style.boxShadow = '';
                    timelineCard.style.borderColor = '';
                }, 2000);
            }
        }
    }
}


// New: Slideshow Swipe Functionality
function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
  // This is important to prevent vertical scrolling if user means to swipe horizontally
  // but be careful not to block all scrolling, often better to do it only on touchmove
  // when swipe direction is confirmed horizontal enough.
}

function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX;
    // Prevent default scroll only if a significant horizontal drag is detected
    // This helps avoid interfering with normal vertical scrolling
    if (Math.abs(touchEndX - touchStartX) > 10 && e.cancelable) { // Only if more than tiny movement and browser allows
        e.preventDefault(); 
    }
}

function handleTouchEnd() {
  const diffX = touchEndX - touchStartX;
  
  if (Math.abs(diffX) > swipeThreshold) {
    if (diffX > 0) { // Swiped right (show previous chronological)
        goToSlide(currentSlideIndex - 1);
    } else { // Swiped left (show next chronological)
        goToSlide(currentSlideIndex + 1);
    }
  }
  // Reset touch coordinates
  touchStartX = 0;
  touchEndX = 0;
}


// Music Player Management
function initializeMusicPlayer() {
  audioTracks.forEach(track => {
    track.volume = 0.3; // 30% volume
  });
  
  audioTracks.forEach((track, index) => {
    track.addEventListener('ended', () => {
      nextTrack();
    });
    
    track.addEventListener('error', (e) => {
      console.warn(`Audio track ${index + 1} failed to load:`, e.message || e);
    });
  });
}

function autoStartMusic() {
  if (!isPlaying && audioTracks.length > 0) {
    audioTracks[currentTrackIndex].play().then(() => {
      isPlaying = true;
      playPauseBtn.textContent = '⏸️';
    }).catch(error => {
      console.info('Auto-playback prevented by browser, click play to start:', error);
      playPauseBtn.textContent = '▶️';
    });
  }
}

function togglePlayPause() {
  if (audioTracks.length === 0) return;
  const currentTrack = audioTracks[currentTrackIndex];
  
  if (isPlaying) {
    currentTrack.pause();
    playPauseBtn.textContent = '▶️';
    isPlaying = false;
  } else {
    audioTracks.forEach((track, index) => { // Pause other tracks
        if (index !== currentTrackIndex) track.pause();
    });
    
    currentTrack.play().then(() => {
      playPauseBtn.textContent = '⏸️';
      isPlaying = true;
    }).catch(error => {
      console.warn('Audio playback failed (user interaction needed to resume):', error);
      playPauseBtn.textContent = '▶️';
    });
  }
}

function previousTrack() {
  if (audioTracks.length === 0) return;
  audioTracks[currentTrackIndex].pause();
  currentTrackIndex = (currentTrackIndex - 1 + audioTracks.length) % audioTracks.length;
  document.querySelectorAll('.track-item').forEach((li, i) => li.classList.toggle('active', i === currentTrackIndex));
  const trackToPlay = audioTracks[currentTrackIndex];
  trackToPlay.currentTime = 0; // Reset track to start

  if (isPlaying) {
    trackToPlay.play().catch(error => {
      console.warn('Audio playback failed for previous track:', error);
    });
  }
}

function nextTrack() {
  if (audioTracks.length === 0) return;
  audioTracks[currentTrackIndex].pause();
  currentTrackIndex = (currentTrackIndex + 1) % audioTracks.length;
  document.querySelectorAll('.track-item').forEach((li, i) => li.classList.toggle('active', i === currentTrackIndex));
  const trackToPlay = audioTracks[currentTrackIndex];
  trackToPlay.currentTime = 0; // Reset track to start

  if (isPlaying) {
    trackToPlay.play().catch(error => {
      console.warn('Audio playback failed for next track:', error);
    });
  }
}

function playSpecificTrack(index) {
  if (audioTracks.length === 0) return;
  
  // Stop currently playing track
  audioTracks[currentTrackIndex].pause();
  audioTracks[currentTrackIndex].currentTime = 0;
  
  // Set new track
  currentTrackIndex = index;
  
  // Update UI indicators in the list
  document.querySelectorAll('.track-item').forEach((li, i) => {
    li.classList.toggle('active', i === index);
  });
  
  // Play
  const trackToPlay = audioTracks[currentTrackIndex];
  isPlaying = true;
  playPauseBtn.textContent = '⏸️';
  trackToPlay.play().catch(e => console.warn("Playback failed", e));
}

function toggleMute() {
  isMuted = !isMuted;
  
  audioTracks.forEach(track => {
    track.muted = isMuted;
  });
  
  muteBtn.textContent = isMuted ? '🔇' : '🔊';
}

// Date Search Calendar Management
function initializeDateSearchCalendar() {
    // Set current calendar display to the month of the earliest event or today
    if (timelineData.length > 0) {
        const firstEventDate = new Date(timelineData[0].date);
        currentCalendarDisplayDate = new Date(firstEventDate.getFullYear(), firstEventDate.getMonth(), 1);
        selectedCalendarDate = new Date(firstEventDate.getFullYear(), firstEventDate.getMonth(), firstEventDate.getDate());
    } else {
        const today = new Date();
        currentCalendarDisplayDate = new Date(today.getFullYear(), today.getMonth(), 1);
        selectedCalendarDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    }
    
    populateYearSelect();
    populateMonthSelect();
    // Set initial select values
    calendarYearSelect.value = currentCalendarDisplayDate.getFullYear();
    calendarMonthSelect.value = currentCalendarDisplayDate.getMonth();
    renderCalendar();
}

function populateYearSelect() {
    calendarYearSelect.innerHTML = '';
    for (let year = MIN_CALENDAR_YEAR; year <= MAX_CALENDAR_YEAR; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        calendarYearSelect.appendChild(option);
    }
}

function populateMonthSelect() {
    calendarMonthSelect.innerHTML = '';
    MONTH_NAMES.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index; // Month index (0-11)
        option.textContent = month;
        calendarMonthSelect.appendChild(option);
    });
}

function renderCalendar() {
    const year = parseInt(calendarYearSelect.value);
    const month = parseInt(calendarMonthSelect.value);

    // Update the internal display date tracker
    currentCalendarDisplayDate = new Date(year, month, 1);
    calendarDisplayMonth.textContent = `${MONTH_NAMES[month]} ${year}`;

    calendarDays.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay(); // 0 for Sunday, 6 for Saturday
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Prepare a set of event dates for quick lookup
    const timelineEventDates = new Set(timelineData.map(item => new Date(item.date).toDateString()));

    // Fill preceding empty days
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day-cell empty';
        calendarDays.appendChild(emptyCell);
    }

    // Populate days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day-cell';
        dayCell.textContent = day;
        dayCell.dataset.date = new Date(year, month, day).toDateString(); // Store full date string
        dayCell.tabIndex = 0; // Make day cells focusable

        const cellDate = new Date(year, month, day);

        if (selectedCalendarDate && cellDate.toDateString() === selectedCalendarDate.toDateString()) {
            dayCell.classList.add('selected');
        }

        if (timelineEventDates.has(cellDate.toDateString())) {
            dayCell.classList.add('event-day');
        }

        calendarDays.appendChild(dayCell);
    }
}

function updateCalendar() {
    // This function is called when year or month dropdown changes
    const selectedYear = parseInt(calendarYearSelect.value);
    const selectedMonth = parseInt(calendarMonthSelect.value);
    
    // Attempt to maintain the previously selected day, but cap it to the new month's last day
    let dayToSet = selectedCalendarDate ? selectedCalendarDate.getDate() : 1;
    const lastDayOfNewMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    if (dayToSet > lastDayOfNewMonth) {
        dayToSet = lastDayOfNewMonth;
    }
    
    // Update the selectedCalendarDate based on the new month/year and adjusted day
    selectedCalendarDate = new Date(selectedYear, selectedMonth, dayToSet);
    
    renderCalendar();
}

function handleDayClick(event) {
    // Only respond to clicks on day cells that are not empty fillers
    const dayCell = event.target.closest('.calendar-day-cell:not(.empty)');
    if (dayCell) {
        // Remove 'selected' from all previously selected cells
        document.querySelectorAll('.calendar-day-cell.selected').forEach(cell => {
            cell.classList.remove('selected');
        });

        // Add 'selected' to the clicked cell
        dayCell.classList.add('selected');
        // Update the globally tracked selected date object
        selectedCalendarDate = new Date(dayCell.dataset.date); 
    }
}

function prevMonth() {
    let year = parseInt(calendarYearSelect.value);
    let month = parseInt(calendarMonthSelect.value);
    
    if (month === 0) { // If January, go to previous year's December
        month = 11;
        year--;
    } else {
        month--;
    }

    // Ensure we don't go below the minimum year
    if (year < MIN_CALENDAR_YEAR) {
        year = MIN_CALENDAR_YEAR;
        month = 0; // Force to January of min year
    }
    
    calendarYearSelect.value = year;
    calendarMonthSelect.value = month;
    updateCalendar(); // Re-render the calendar for the new month/year
}

function nextMonth() {
    let year = parseInt(calendarYearSelect.value);
    let month = parseInt(calendarMonthSelect.value);

    if (month === 11) { // If December, go to next year's January
        month = 0;
        year++;
    } else {
        month++;
    }
    
    // Ensure we don't go above the maximum year
    if (year > MAX_CALENDAR_YEAR) {
        year = MAX_CALENDAR_YEAR;
        month = 11; // Force to December of max year
    }

    calendarYearSelect.value = year;
    calendarMonthSelect.value = month;
    updateCalendar(); // Re-render the calendar for the new month/year
}

function toggleCalendar() {
    const isVisible = dateSearchCalendar.classList.contains('visible');
    if (isVisible) {
        dateSearchCalendar.classList.remove('visible');
        dateSearchToggle.setAttribute('aria-expanded', 'false');
    } else {
        // When opening, ensure calendar state reflects the last selected date or a sensible default
        if (selectedCalendarDate) {
            calendarYearSelect.value = selectedCalendarDate.getFullYear();
            calendarMonthSelect.value = selectedCalendarDate.getMonth();
        } else if (timelineData.length > 0) {
            // If no date selected yet, default to the first timeline event date
            const firstEventDate = new Date(timelineData[0].date);
            selectedCalendarDate = new Date(firstEventDate.getFullYear(), firstEventDate.getMonth(), firstEventDate.getDate());
            calendarYearSelect.value = firstEventDate.getFullYear();
            calendarMonthSelect.value = firstEventDate.getMonth();
        } else {
             // Fallback to current date if no timeline data at all
            const today = new Date();
            selectedCalendarDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            calendarYearSelect.value = today.getFullYear();
            calendarMonthSelect.value = today.getMonth();
        }
        
        renderCalendar(); // Re-render to ensure display is current
        dateSearchCalendar.classList.add('visible');
        dateSearchToggle.setAttribute('aria-expanded', 'true');
        dateSearchCalendar.focus(); // Set focus to calendar for accessibility
    }
}

function closeCalendarOnClickOutside(event) {
    if (dateSearchCalendar.classList.contains('visible') &&
        !dateSearchCalendar.contains(event.target) &&
        event.target !== dateSearchToggle) {
        toggleCalendar();
    }
}

function closeCalendarOnEscape(event) {
    if (event.key === 'Escape' && dateSearchCalendar.classList.contains('visible')) {
        toggleCalendar();
    }
}

function scrollToDateFromCalendar(targetDateObj) {
  if (!targetDateObj) {
    alert("Please select a date on the calendar.");
    return;
  }

  toggleCalendar(); // Close calendar once date is selected

  const targetTime = targetDateObj.getTime();
  let closestItem = null;
  let minDifference = Infinity;

  // Find the closest event in the timeline based on date
  timelineData.forEach(item => {
    const eventTime = new Date(item.date).getTime();
    const difference = Math.abs(targetTime - eventTime);

    if (difference < minDifference) {
      minDifference = difference;
      closestItem = item;
    }
  });

  if (closestItem) {
    // Find the corresponding DOM element. Prefer exact ID if available for same-date items, else first by date.
    const targetElement = document.querySelector(`.timeline-item[data-date="${closestItem.date}"]`) ||
                          document.querySelector(`.timeline-item[data-id="${closestItem.id}"]`);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Add a temporary highlight effect for the card within the timeline item
      const timelineCard = targetElement.querySelector('.timeline-card');
      if (timelineCard) {
          // Store original styles to revert smoothly
          const originalBackgroundColor = timelineCard.style.backgroundColor || '';
          const originalColor = timelineCard.style.color || '';
          const originalBoxShadow = timelineCard.style.boxShadow || '';

          // Apply new styles
          timelineCard.style.transition = 'box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease';
          timelineCard.style.backgroundColor = 'var(--accent-secondary)';
          timelineCard.style.color = 'white'; // Adjust text color for contrast
          timelineCard.style.boxShadow = '0 0 0 5px var(--accent-secondary), ' + originalBoxShadow;

          // Revert styles after a delay
          setTimeout(() => {
              timelineCard.style.backgroundColor = originalBackgroundColor;
              timelineCard.style.color = originalColor;
              // Remove our added box-shadow part while keeping any original ones if they exist
              timelineCard.style.boxShadow = originalBoxShadow;
          }, 2000); 

          // Optionally, remove transition style after animation if not used elsewhere for card
          setTimeout(() => {
              timelineCard.style.transition = '';
          }, 2300); // Slightly longer than animation duration
      }
    } else {
      console.warn("Corresponding timeline item DOM element not found for date:", closestItem.date);
    }
  } else {
    // This case should ideally not happen if timelineData is not empty,
    // as there will always be a "closest" item.
    alert("No timeline events available to scroll to.");
  }
}

// New: Scroll To Top/Bottom button visibility
function toggleScrollButtonsVisibility() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = document.documentElement.clientHeight;

    // Show scroll to top button after scrolling down a bit
    if (scrollPosition > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }

    // Show scroll to bottom button if not near the bottom
    // We check if current scroll position + viewport height is less than document height minus a threshold
    if ((scrollPosition + viewportHeight + 100) < documentHeight) { // 100px buffer from bottom
        scrollToBottomBtn.classList.add('show');
    } else {
        scrollToBottomBtn.classList.remove('show');
    }
}

// Utility Functions
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

// Intersection Observer for Timeline Animations
function initializeIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);
  
  // Observe timeline items after they are added to the DOM
  setTimeout(() => {
    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });
  }, 100);
}

// Image Loading Error Handling
function handleImageError(img) {
  // Prevent infinite loops if fallback also fails or image is already marked
  if (img.dataset.hasError) return; 

  img.src = 'https://via.placeholder.com/600x400/cccccc/666666?text=Image+Not+Found';
  img.alt = 'Image not available';
  img.dataset.hasError = 'true'; // Mark as error handled
  console.warn("Failed to load image:", img.src);
}

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
  // If calendar is open, prioritize calendar keyboard navigation
  if (dateSearchCalendar.classList.contains('visible')) {
    switch(e.key) {
        case 'Escape':
            closeCalendarOnEscape(e);
            break;
        case 'ArrowLeft':
            prevMonth();
            break;
        case 'ArrowRight':
            nextMonth();
            break;
        case 'Enter': // Optionally trigger Go to Date on Enter when a date is selected/focused
            if (selectedCalendarDate) {
                const focusedElement = document.activeElement;
                if (focusedElement && focusedElement.classList.contains('calendar-day-cell') && !focusedElement.classList.contains('empty')) {
                    // Trigger handleDayClick if a day is focused and Enter is pressed
                    handleDayClick({ target: focusedElement }); 
                    scrollToDateFromCalendar(selectedCalendarDate);
                } else if (focusedElement === goToSelectedDateBtn) {
                     scrollToDateFromCalendar(selectedCalendarDate);
                }
            }
            break;
    }
    // Prevent default behavior for arrows and enter to avoid page scrolling while calendar is open
    if (['Escape', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(e.key)) {
        e.preventDefault();
    }
    return; // Exit if calendar is handled
  }

  // General keyboard shortcuts when calendar is not open
  switch(e.key) {
    case ' ':
      e.preventDefault(); // Prevent page scroll
      togglePlayPause();
      break;
    case 'ArrowLeft':
      // For slideshow manual navigation
      goToSlide(currentSlideIndex - 1);
      break;
    case 'ArrowRight':
      // For slideshow manual navigation
      goToSlide(currentSlideIndex + 1);
      break;
    case 'm':
    case 'M':
      toggleMute();
      break;
    case 't':
    case 'T':
      toggleTheme();
      break;
    case 'd':
    case 'D': // Shortcut to open date search calendar
      toggleCalendar();
      break;
  }
});

// Performance Optimization utility (not explicitly used with new feature yet but good to have)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Smooth scrolling for timeline section (Existing utility)
function scrollToTimeline() {
  document.querySelector('.timeline-section').scrollIntoView({
    behavior: 'smooth'
  });
}

// Export functions for potential external use
window.PsychologyTimeline = {
  goToSlide,
  toggleTheme,
  togglePlayPause,
  scrollToTimeline,
  toggleCalendar,
  handleImageError // Export handleImageError if used inline in HTML
};

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}