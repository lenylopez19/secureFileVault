
[APP ANDROID AND IOS IMAGE HERE]

# Secure File Vault

Protect your important files with secureFileVault, a robust solution designed to ensure the integrity and security of your data. With secureFileVault, you can confidently store, track, and verify the history of your files, guaranteeing that they remain in their original form without any tampering.

**How it Works:**

secureFileVault breaks down your file into key essential parts, distributing them securely across the tangle network, while storing only partial, non-usable segments locally.
    
When you need to access your file, secureFileVault retrieves the specific segments from the tangle network, decrypts, and reassembles your data.
    
Each file is verified with a unique hash to ensure it remains unchanged and authentic.

# Technologies

**React native** with **Expo framework**
> For the mobile clients.

**Node.js** with **Express framework**
>For the server and the Restful api

**Mysql** 
>For the database

# Stack Justification

### React Native with Expo for Mobile Client

Cross-platform Development: **React Native** allows to build mobile apps for both **iOS** and **Android** using a **single codebase**, which saves development **time and resources**.

Expo for Rapid Development: Expo provides a set of tools and services that simplify and **speed up** the **development process**, offering crutial features like **hot reloading** and many more

Large Community and Ecosystem: React Native has a large and **active community**, along with **extensive documentation** and a rich ecosystem of libraries and plugins, which can help **accelerate development** and provide solutions to common challenges.

### Node.js with Express for Server

Using Node.js and Express allows to **maintain a unified development** **environment** with JavaScript across both the client and server sides, **reducing context switching** and improving developer productivity.

Asynchronous I/O: Node.js is known for its **non-blocking**, **event-driven architecture**, making it well-suited for **handling I/O-bound tasks** like file uploads and network requests efficiently.

Express for RESTful APIs: Express as a minimalist web framework for Node.js **simplifies the process** of building **robust** and **scalable** RESTful APIs, which is essential for handling file uploads and interacting with the **Tangle network**.

### **Local Storage on Node.js Server:**

Storing files locally on the Node.js server can provide simplicity and control over the storage mechanism, It **eliminates** the need for additional **third-party** services or cloud storage solutions, reducing **complexity** and potential **costs**.

### **MySQL for Database:**

Relational Data Structure: MySQL is well-suited for **structured** data storage, which could be **beneficial** for managing **file metadata**, user information, and other structured data associated with the application.

MySQL is widely used in various industries, proving **maturity** and **stability**, offering reliability, and **extensive documentation**. It also provides features like **indexing**, and **ACID compliance**, which are important for data integrity and consistency.

# Project Structure

### **MobileClient**
```
│
├── assets/               # Contains images, fonts, and other static assets
├── components/           # Reusable UI components
├── constants/            # Constants used throughout the application
├── context/              # Context API for state management
├── customHooks/          # Custom React hooks
├── helpers/              # Utility functions
├── navigation/           # Navigation configuration and components
├── screens/              # Screen components for different app views
├── App.js                # Main entry point of the application
├── app.json              # Configuration file for the Expo project
├── babel.config.js       # Babel configuration file
├── package.json          # Project metadata and dependencies
└── package-lock.json     # Exact versions of dependencies for reproducible builds
```

### **Server**

```
│
├── api/                  # API route handlers
├── config/               # Configuration files and settings
├── controllers/          # Controller functions for handling requests
├── helpers/              # Utility functions and helpers
├── middlewares/          # Middleware functions
├── model/                # Database models
├── schemas/              # Database schemas
├── storage/              # Storage directory for files
├── .env                  # Environment variables
├── app.js                # Main application entry point
├── package-lock.json     # Exact versions of dependencies for reproducible builds
├── package.json          # Project metadata and dependencies
└── server.js             # Server setup and configuration
```



# App architecture

![high level architecture](https://github.com/lenylopez19/secureFileVault/assets/20192486/b9ead121-81a3-406f-864d-0aeff22e49e6)

### Server 
![backend mvc](https://github.com/lenylopez19/secureFileVault/assets/20192486/a2eae40c-b27f-4a70-9aa1-c9eefd32a478)

## DB Schema

![database scheema](https://github.com/lenylopez19/secureFileVault/assets/20192486/eaad170f-5786-444f-a933-b5b305dee958)


## Processes

### Sign Up

 The **user details** are sent through post request, the servers verifies its data and writes it on the database 

![SIGNUP PROCESS](https://github.com/lenylopez19/secureFileVault/assets/20192486/09f0415c-f424-453c-8a4c-2895733786da)



## Login 

The user email and password are sent through **post request**, the server verifies its data against the database and **sign the token** with the user email and user id ([see token sign process](#token-sign-process)) said **token** is sent back to the user

![LOGIN PROCESS](https://github.com/lenylopez19/secureFileVault/assets/20192486/c4247409-8a90-4751-8a0f-0a485be4f47b)


## Upload file

The file, along with the user token, is sent through a POST request from the client to the server. The server then verifies the token ([see Token verify/decode process](#Token-verify/decode-process)) and processes the file. The file gets hashed, encrypted ([see encryption process](#Encryption-process)), and encoded to base64. The base64 is then deconstructed, and a block is created with the hash, the public decryption key, and the first 10 characters of the deconstructed base64. The rest of the base64 is stored on the server, and the block is sent to the Tangle network ([see block posting to the tangle](#Block-posting-to-the-tangle)). Finally, the file metadata along with the block ID is stored in the database.



![upload file process](https://github.com/lenylopez19/secureFileVault/assets/20192486/f4c4f722-a50f-45c1-a4bf-900bb5918a8a)


## Download file

The file ID, along with the user token, is sent through a POST request from the client to the server. The server then verifies the token ([see Token verify/decode process](#Token-verify/decode-process)) and queries the database for the file metadata, the destructured base64 file URL, and the block ID. It then fetches the block from the Tangle network using its block ID ([see Fetching block from the tangle](#Fetching-block-from-the-tangle)). The payload data is used to reconstruct the base64 file, decrypt the file ([see Decryption process](#Decryption-process)), and verify it against the original hash obtained from the block's payload. Finally, the file is sent to the user.


![download file process](https://github.com/lenylopez19/secureFileVault/assets/20192486/0fdace60-37ff-42dd-9705-f2615b445f14)


## Block posting to the tangle

A new client instance with the node address of the network gets initialized. The block is constructed using a mnemonic phrase and the payload data, which is formed by the tag and the data to be sent to the Tangle. If successful, the Tangle network responds with a block ID.
> This process takes place in the server.

![build and post to tangle](https://github.com/lenylopez19/secureFileVault/assets/20192486/626f7c61-90ec-4a36-9462-a76fa1ccc5b5)

## Fetching block from the tangle

We initialize a new client instance with the node address of the network. With the supplied block ID we retreive the block from the tangle network, said block contains in its payload the data needed to assemble the file back. 
> This process takes place in the server.

![fetch block tangle](https://github.com/lenylopez19/secureFileVault/assets/20192486/9038953f-b41a-4d95-8998-95ab58c3546d)

## Token sign process

The token gets signed using the provided payload (user id and email), the JWT_SECRET and the HS256 Algorithm.
getting as result the token string ready to be sent to the user.

> This process takes place in the server.

> The JWT_SECRET its a 32 bytes key that is stored in the enviroment variable of the server.


<p align="center" >
<img src="https://github.com/lenylopez19/secureFileVault/assets/20192486/6ed13854-7468-4b30-9b72-fb834c7a309b"  width="40%">
</p>

## Token verify/decode process

The provided token (tipically obtained in the header of the user request) gets verfied using the JWT_SECRET and the HS256 algorithm
if the providen token is valid we get its payload data (user id and email).

> This process takes place in the server.

> The JWT_SECRET its a 32 bytes key that is stored in the enviroment variable of the server.

<p align="center" >
<img src="https://github.com/lenylopez19/secureFileVault/assets/20192486/4765a79b-4505-4374-a65e-c51d49b5bb54" align="center" width="50%">
</p>

## Encryption process

To encrypt the data it generates a random 16 bytes public key for the initializer vector(iv), then it encrypts the data using the aes-256-cbc algorithm, the PRIVATE_KEY, and the generated iv.

> This process takes place in the server.

> The PRIVATE_KEY its a 32 bytes key that is stored in the enviroment variable of the server.

<p align="center" >
<img src="https://github.com/lenylopez19/secureFileVault/assets/20192486/7a6273ee-97c9-4125-b51a-e0ce80316633" align="center" width="50%">
</p>


## Decryption process

To Dencrypt the data it utilize the provided initializer vector(iv), the aes-256-cbc algorithm and the PRIVATE_KEY

> This process takes place in the server.

> The PRIVATE_KEY its a 32 bytes key that is stored in the enviroment variable of the server.

<p align="center" >
<img src="https://github.com/lenylopez19/secureFileVault/assets/20192486/ceed6273-ce5e-4e2d-a07c-1dcf3376cd7e" align="center" width="50%">
</p>


# APP FLOW

# Sign up 
![sign up user flow](https://github.com/lenylopez19/secureFileVault/assets/20192486/0d8a4787-6b4c-42e3-a137-dd4a19fcd99e)

# Log in
![Login user flow](https://github.com/lenylopez19/secureFileVault/assets/20192486/15bb8aec-85d5-448e-9bd2-b117f34acc6a)

# Upload file

![upload file user flow](https://github.com/lenylopez19/secureFileVault/assets/20192486/7c135311-82a4-4ee3-a559-f17d39d980cf)

# Download file

![download file user flow](https://github.com/lenylopez19/secureFileVault/assets/20192486/49dfaae1-4463-40eb-8983-a6b772885b59)


# DEVELOPMENT

[API](#API)

[On device tests](#On-device-tests)

[Features to implement](#Features-to-implement)

[Area of improvement](#Area-of-Improvement) 

[Bugs](#Bugs)


## On Device Tests

Results of real device tests in development environment through expo go app.

| Device                 | OS      | VERSION | Visual bugs                                           | Functional bugs |
|------------------------|---------|---------|-------------------------------------------------------|-----------------|
| iPhone 13 mini         | IOS     | 17.4    | NONE                                                  | NONE            |
| iPhone 12              | IOS     | 17.5    | NONE                                                  | NONE            |
| iPhone XS              | IOS     | 17.4    | NONE                                                  | NONE            |
| iPhone X               | IOS     | 17.4    | NONE                                                  | NONE            |
| Huawei Y6 2018 ATU-LX3 | ANDROID | 8.0.0   | Loading screen doesn't reach the bottom of the screen | NONE            |
| samsung galaxy A20     | ANDROID | 10.0.0  | Loading screen doesn't reach the bottom of the screen | NONE            |

> The above chart represents a list of device specific bugs, global bugs are ignored in this context as those affect all platforms.

## **Features to implement**

**Add sorting options for files, like name file size, file type, recents, date**

***Deleting files.**
>**Note**
Not actually deleting but rather setting it as non-active

**File search.**

**Add pictures from phone gallery.**
> **Note**
> Right now its only possible to upload ‘files’ within the file explorer of each platform

**Edit user profile picture, and other personal info.**

**Show the user the storage that their files are ocuppating**

**Implement some method of localization to support more than one language.**

**Internationalize phone number**
**How:**
- Allowing user to manually insert their phone area code.

**User feedback section.**


# Area of Improvement 

  
## **VISUAL FEEDBACK**

  Visual feedback when successfully created an account
 **HOW:**

- Adding a new view before the redirection to the login screen.

 Visual feedback when doing important process like uploading/downloading files, or waiting on other services process.
**HOW:**

- Adding sutil animation in key user actions to improve user experience

 ~~Visual feedback when pressing interact-able items
**HOW:**
 Replacing all the pressable with touchableOpacity components~~

  

## **PERFORMANCE:**

**Improve slow scroll on low-end devices when a lot of file are being rendered in a list.**

**HOW:**

- Replacing the flatlist component with a more performant one like flashlist or similars

  

## **ERROR HANDLING:**

 - Implement a normalize, centric way of handling errors.

## **TESTING**

- Create unit test

- Test the behavior of different process of the app under bad network conditions.

## **CODE MAINTAINABILITY**
- Normalize font-weight values by creating a constant file with predefined values.


# **Bugs:**

**[CRITICAL] Error Uploading a file**

**Description:**
at the moment of sending the block data to the tangle network, **if there’s no healthy node**, the block is not sent, causing the description key,  bas64key and hash data of the file get lost, this means, that the encrypted file its stored with **no way of decrypting** nor decoding it.

**Proposed solution:**
- If there’s no healthy node on the tangle we should cancel the process return a network error and delete the uploaded file from the server and database, OR, we could check first for a healthy node before doing any file processing at all. 
- **HOTFIXED**: If theres no blockID retreived from the posted block (the post block failed), the desconstructed base64 file gets deleted
  
**[MID]UPLOADED FILE TIME IS OFF BY 4 HOURS**

**Description:**
On the time section in the file detail , there’s a difference of 4 hours in the time section of said uploaded file.

**Proposed solution:**
- Get the user region information and format the time based on that. It’s currently based on US time Zone.

**[LOW]Filename gets cutted when in detail view**

With a filename of a specific length of character the words can get cut by a few ones.
**Proposed solution:**
- *need inspection...
 

**[LOW]Long loading screen:**
While login in, experienced a long loading screen followed by a request time out message.

**Proposed solution:**
 - Make the request time out time lower

 
~~**[LOW]MOST OR ANY OF THE TEXT INPUT:**
When inserting a long enough text the input overflows its container.
**Proposed solution:**
 Set the overflow property to hidden in the container,~~



# API

[Backend Service API](docs/Backend%20API.md)

# Useful resources

[Mobile Client codebase documentation](docs/Client%20mobile%20-%20codebase%20documentation.md)

[Server codebase documentation](docs/Client%20mobile%20-%20codebase%20documentation.md)
