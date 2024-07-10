# Tribal Tunes🎶🎵🎼

## Website Link
[https://tribal-tunes.vercel.app/](https://tribal-tunes.vercel.app/)

## Introduction
Welcome to Tribal Tunes!🎹🎺🎼 This project is designed to enrich the visitor experience at the Indira Gandhi Rashtriya Manav Sangrahalaya in Bhopal, Madhya Pradesh. By integrating the unique sounds of traditional tribal musical instruments🪗🎷 into the exhibits, we aim to create a more immersive and engaging experience for all visitors, with a special focus on accessibility for visually challenged individuals.

## How to Use
1. **Visit the Museum:** Head to the tribal musical instrument exhibits at the museum.
2. **Scan QR Codes:** Find QR codes next to each instrument🎻🪕 and scan them with your smartphone.
3. **Explore:** Listen👂🏻. to the recorded sounds🪈🎶 and learn about the cultural significance of each instrument🪗🎷 through the dedicated web pages.

## Features
- **QR Code Integration:** Convenient access to instrument details and audio through QR codes.
- **Informative Web Pages:** Each instrument🥁🪘 has a page with descriptions, cultural backgrounds, and audio players.
- **Enhanced Experience:** A multi-sensory approach that enriches both visual and auditory engagement.

## Setup and Installation

### Prerequisites
To get started, make sure you have the following tools installed:

- **Node.js:** Download and install from the [Node.js official website](https://nodejs.org/).
- **npm (Node Package Manager):** Included with the Node.js installation.
- **Vite:** A modern build tool and development server. 
- **Appwrite:** For backend services.
- **Git:** Download and install from the [Git official website](https://git-scm.com/).

## Architecture
Tribal Tunes features a robust and scalable architecture to ensure seamless performance and flexibility. Here’s an overview of the main components:

### Frontend
- **Library:** React
  - Utilizes a component-based architecture for building the user interface.

- **Styling:** Tailwind CSS
  - Provides a utility-first approach to CSS for rapid and responsive design.

### Backend
- **Framework:** Node.js with Express
  - Implements RESTful APIs to handle frontend requests.

- **Authentication:** Appwrite Authentication
  - Manages secure user login and registration.

- **Storage:** Appwrite Storage
  - Handles storage of audio files and other media assets.

- **Database:** Appwrite Database
  - A NoSQL database for managing metadata related to musical instruments.

### Database
- **Type:** NoSQL (Appwrite Database)
  - Flexible and scalable to accommodate unstructured data.

- **Collections:**
  - **Instruments:** Contains documents with details about each musical instrument.
  - **Admin:** Stores admin information for managing and updating the site.

### Integration and Communication

- **QR Code Integration:** 
  - Unique QR codes direct users to individual instrument web pages.
  
- **Audio Processing:** 
  - High-quality audio files are stored and managed in Appwrite Storage.

### Deployment
- **Platform:** Vercel
  - Provides a streamlined deployment process for both frontend and backend services.

