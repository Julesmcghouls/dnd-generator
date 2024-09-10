# Dungeons & Dragons Character Backstory Generator

## Overview

The Dungeons & Dragons Character Backstory Generator is a web application designed to help Dungeon Masters (DMs) generate quirky and random backstories and quests for their Dungeons & Dragons campaigns. The application uses a simple API to fetch random backstories and quests.

## Features

- **Random Backstory Generation**: Get a unique backstory for your D&D character with a single click.
- **Random Quest Generation**: Receive a random quest to add to your campaign.
- **Minimalist Design**: Simple and intuitive interface for easy use during game sessions.

## Technology Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Data**: JSON files for backstories and quests
- **API Calls**: Axios for making HTTP requests

## Project Structure

generator/
│
├── backend/                  
│   ├── src/
│   │   ├── controllers/      
│   │   │   ├── backstoryController.js
│   │   │   └── questController.js
│   │   ├── models/           
│   │   │   ├── backstoryModel.js
│   │   │   └── questModel.jdnd-s
│   │   ├── routes/           
│   │   │   ├── backstoryRoutes.js
│   │   │   └── questRoutes.js
│   │   └── server.js         
│   │
│   ├── data/                 
│   │   ├── backstories.json
│   │   └── quests.json
│   │
│   ├── .gitignore            
│   ├── package.json          
│   └── README.md             
│
├── public/                   
│   └── index.html            
│
├── frontend
|   ├── src/                      
│   ├── components/           
│   │   ├── BackstoryGenerator.jsx
│   │   └── QuestGenerator.jsx
│   │
│   ├── services/             
│   │   └── apiService.js
│   │
│   ├── styles/               
│   │   └── App.css
│   │
│   ├── App.jsx               
│   └── main.jsx             
│
├── .gitignore                
├── package.json              
├── README.md                
└── vite.config.js
