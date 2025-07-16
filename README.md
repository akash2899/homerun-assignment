HomeRun Store Locator App (React Native + Node.js)

📁 Project Structure
homerun-assignment/
├── /technical-exercise              # Contains frontend + backend for Part 1
│   ├── backend/                     # Express API
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── index.js                 # Entry point
│   │   └── .env                     # Environment variables
│   ├── frontend/                    # React Native app (Expo)
│   │   ├── App.js                   # Navigation entry
│   │   ├── components/StoreItem.js
│   │   ├── screens/StoreList.js
│   │   ├── screens/StoreDetail.js
│   │   └── ...
│   └── README.md                    # Technical README with run instructions
│
├── Native_App_Proposal.md          # Part 2: Strategic proposal
└── README.md                       # Master README

🚀 How to Run the Technical Exercise (Part 1)

🔧 Prerequisites

Node.js + npm installed

Expo CLI: npm install -g expo-cli

Android/iOS simulator or physical device (with Expo Go app)

1. Clone the Repository
git clone https://github.com/akash2899/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME/technical-exercise

2. ⚙️ Start the Backend
cd backend
npm install
node index.js

This should start the server at:
http://<YOUR_LOCAL_IP>:3000/api/stores Important: Replace localhost in frontend API call with your local IP (e.g., http://192.168.1.x:3000/api/stores) so your phone/emulator can access it.

3. Start the Frontend (React Native)

cd ../frontend
npm install
npx expo start

Features Implemented

✅ Screen 1: Store List with loading state

✅ Screen 2: Store Detail with map and pin

✅ Navigation between screens

✅ Search stores by name (bonus)

🛠️ Tech Stack

Frontend (Expo)

React Native (Expo CLI)

React Navigation

react-native-maps

Backend (Node.js)

Express.js

dotenv
Part 2: Strategic Proposal

A well-structured plan to build the native version of HomeRun is documented in:
👉 Native_App_Proposal.md

Includes:

✅ Feature breakdown (MVP)

✅ Proposed methodology

✅ Timeline with justification