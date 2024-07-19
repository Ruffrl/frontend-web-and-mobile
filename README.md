# Ruffrl Frontend

This repository contains the frontend codebase for an easy to use, pet friendly, care services application called Ruffrl. The application is built using React, TypeScript, and React Native, and is designed to be responsive across multiple platforms including desktop, mobile web, Android, and iOS.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Extensions](#extensions)
- [Accessibility Considerations](#accessibility-considerations)
- [Software Architecture](#software-architecture)
- [Developer Environment](#developer-environment)
- [About the Creators](#about-the-creators)
<!-- - [Contributing](#contributing) -->
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Demo

[ video ]

[ desktop screengrab ]

[ mobile web screengrab ]

[ android screengrab ]

[ ios screengrab ]

## Features

- **Cross-platform Compatibility**: Supports desktop browsers, mobile web browsers, Android devices, and iOS devices.
- **Easy Onboarding and Research Caretakers**: Pet owners can skip sign in and directly browse services before signing up.
- **User Authentication**: Secure user authentication and authorization flows with phone number, email, and social sign on.
- **Community Referrals**: Pet owners can provide referrals (Ruffrls) to give insight into their experience with Caretakers and pet owners can see referral details while searching.
- **Build or View Pet Profiles**: Fill out pet profiles to provide details about pet care as well as
- **Gain Trust**: Caretakers can show off their qualifications via friendly and fun icons as well as set transparent prices.
- **Book Care for Your Pet**: Pet owners can book various pet care services.
- **Book Gigs**: Caretakers can browse available services by Pet and see
- **Switch Modes**: Easily switch between Pet owner or Caretaker to book gigs or book services.
- **Payment Integration**: Integration with a secure payment gateway for handling transactions.
- **Profile Management**: Users can manage their profiles and pet information.

## Extensions

- **Notifications**: Push notifications for appointment and payment reminders, messaging notifications, and updates.
- **Internal Messaging**: 1:1 messaging between Pet owners and caretakers to communicate details, discuss payment, receive updates about their pets, and so much more.
- **AI Powered Care Plans**: Pet Owners can use our AI powered assistant, Ruffles, to create caretaker friendly care plan to attach to their pet's profile that can include walking details, overnight details, elderly pet details, pet medical details, and more
- Details about Ruffles
  - Ruffles would be a charming and distinctive companion, known for their unique fluffy coat and friendly demeanor. They would capture hearts with their adorable appearance and playful personality, making them a cherished member of any household.
  - Physical Characteristics:
    - Breed: A mixed breed with a uniquely fluffy and slightly unkempt appearance, possibly a combination of breeds like a Shih Tzu and Pomeranian mix.
    - Size: Small to medium-sized, compact but with a fluffy and slightly tousled coat.
    - Coat: Soft and voluminous, resembling the texture of wind-blown fur, with slight waves or curls.
    - Color: Varied shades of cream and light brown, with patches or streaks of darker colors adding to their distinctive look.
  - Facial Features:
    - Eyes: Round and expressive, often dark brown or amber in color, conveying curiosity and intelligence.
    - Ears: Medium-sized and covered with tufts of fur, often perking up at the slightest sound or movement.
    - Expression: Sweet and endearing, with a hint of mischievousness in their gaze.
  - Personality Traits:
    - Cheerful: Always wearing a bright, happy expression, eager to explore and engage in playful activities.
    - Affectionate: Loves cuddling and being close to their human family members, seeking attention and affection.
    - Energetic: Despite their fluffy appearance, Ruffles is surprisingly agile and enjoys running around and playing fetch.
    - Intelligent: Quick to learn new tricks and commands, showing off their cleverness and eagerness to please.

## Accessibility Considerations

[ axe and other services screenshots, or walkthrough, or whatever evidence we can produce here]

[ details/list ]

## Software Architecture

[ link to backend repository ]

[ diagram goes here ]

### Tech Stack

- **React**: JavaScript library for building user interfaces.
- **React Native**: Framework for building native applications using React.
- **TypeScript**: Strict syntactical superset of JavaScript.
- **MobX**: State management library for React applications.
- **Styled Components**: CSS-in-JS styling solution.
  - **EXTENSION**: Tailwind refactor
- **React Navigation**: Routing and navigation for React Native applications.
- **Axios**: Promise-based HTTP client for making API requests.
- **EXTENSION Apollo Client**: A JavaScript library that helps manage data with GraphQL, both locally and remotely.

## Developer Environment

To get a local copy of the project up and running follow these steps:

### Prerequisites

- Node
- npm
- Get permissions

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pet-care-services.git
   cd pet-care-services
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

- **Web** (React):
  
  ```bash
  npm run start
  ```

  Open [http://localhost:3000](http://localhost:3000) in your browser.

- **Mobile** (React Native):

  Ensure you have set up the development environment for React Native based on your target platform (iOS or Android).

  ```bash
  npm run android  # For Android
  npm run ios      # For iOS
  ```

- Fullstack server?
- Debugging servers?

### Building for Production

- **Web**:

  ```bash
  npm run build
  ```

- **Mobile** (React Native):

  Follow the React Native documentation for building APK/IPA files.

## About the Creators

- Sara Flores
- Priya Power

<!-- ## Contributing

Contributions are welcome! Please follow the guidelines outlined in [CONTRIBUTING.md](CONTRIBUTING.md). -->

## License

This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.
