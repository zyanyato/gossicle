# GOSSICLE

## Overview

The Social Network API is designed to provide backend support for a social networking application, enabling users to share posts, react to friends' posts, and build a friend list. This project demonstrates how to structure and build a full-featured API using MongoDB and Express.js, ensuring fast data access and flexible data handling.

## Usage

Define User and Thought Models:

```md
* Models are created with MongoDB and Mongoose to store users, thoughts, and reactions.
```

API Endpoints:

```md
* Users: Create, retrieve, update, and delete users.
* Thoughts: Create, retrieve, update and delete thoughts.
* Friends: Add or remove friends from a user's friend list. 
* Reactions: Add or remove reactions to thoughts.
```

Testing with Insomnia:

```md
* Use Insomnia to create and test data for users, thoughts, and reactions. 
* Define JSON data for user profiles and thoughts to populate the database with sample entries. 
```
## Walkthrough video

https://drive.google.com/file/d/1Mlo56l2b-ew3339CXJKLAv54SMhFRyJx/view

## Features

```md
* User Management: Create, update, and delete user profiles. 
* Thoughts (Posts): Allow users to share their thoughts.
* Friend List: Build and manage a list of friends. 
* Reactions: React to friends' thoughts with comments or likes. 
* Timestamping: Consistent, readable timestamps for post and reactions using either the native JavaScript Date object or an optional JavaScript date library. 
```

## Technologies Used

```md
* Back-end Framework: Express.js
* Database: MongoDB with Mongoose ODM
* Testing: Insomnia for API endpoint testing and data creation
```
## Prerequisites

* Node.js and npm installed
* MongoDB installed locally

## Installation

Clone the repository:

```md
git clone https://github.com/zyanyato/gossicle.git
cd gossicle
```

Install dependencies:

```md
npm install
```

Configure environment variables:

* Create a .env file at the root directory.
* Define the MongoDB connection string and any other necessary environment variables:

```md
MONGODB_URI=your_mongodb_connection_string
```

Run the application locally:

```md
npm start
```

## API Routes

Users

```md
* POST /api/users - Create a new user
* GET /api/users - Retrieve all users
* GET /api/users/:userId - Retrieve a single user by ID
* PUT /api/users/:userId - Update a user by ID
* DELETE /api/users/:userId - Delete a user by ID
* POST /api/users/:userId/friends/:friendId - Add a friend to a user's friend list
* DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list
```
Thoughts

```md
* POST /api/thoughts - Create a new thought
* GET /api/thoughts - Retrieve all thoughts
* GET /api/thoughts/:thoughtId - Retrieve a single thought by ID
* PUT /api/thoughts/:thoughtId - Update a thought by ID
* DELETE /api/thoughts/:thoughtId - Delete a thought by ID
```

Reactions

```md
POST /api/thoughts/:thoughtId/reactions - Add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

![MIT License](https://img.shields.io/badge/License-MIT-purple)


