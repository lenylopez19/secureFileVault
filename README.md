

[APP ANDROID AND IOS IMAGE HERE]
# secureFileVault

Protect your important files with secureFileVault, a robust solution designed to ensure the integrity and security of your data. With secureFileVault, you can confidently store, track, and verify the history of your files, guaranteeing that they remain in their original form without any tampering.

**How it Works:**

secureFileVault breaks down your file into key essential parts, distributing them securely across the tangle network, while storing only partial, non-usable segments locally.
    
When you need to access your file, secureFileVault retrieves the specific segments from the tangle network, decrypts, and reassembles your data.
    
Each file is verified with a unique hash to ensure it remains unchanged and authentic.

LINK TO KNOW MORE

# TECHNOLOGIES

**React native**  with **Expo framework**
> For the mobile clients.

**Node.js**  with **Express framework**
>For the server and the Restful api

**Mysql** 
>For the database

# Why the stack

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

# API


## Create User's Account

Create an Account if an Account for that email , or username does
not already exist. Each User can only have one Account.

**URL** : `/users`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

Provide user details:

```json
{
    "name": "string",
    "lastname": "string",
    "email":"string",
	"phoneNumber":"string",
	"username":"string",// Min length 6 characters
	"password":"string"// Min length: 8 characters, must include, lowercase, Uppercase, numbers
}
```

**Data example** All fields must be sent.

```json
{
    "name": "jhon",
    "lastName": "snow",
    "email":"winterIsComing@mail.com",
	"phoneNumber":"8091111111",
	"username":"lordCommander",
	"password":"SomeSecurePass02"   
}
```

## Success Response

**Condition** : If everything is OK and an Account didn't exist for that email or username.

**Code** : `201 CREATED`

**Content example**

```json
{
	"id": "aab5d5fd-70c1-11e5-a4fb-b026b977eb28",
	"name": "jhon",
	"lastName": "snow",
	"phoneNumber": "8091111111",
	"email": "winterIsComing@mail.com",
	"username": "lordCommander",
	"passwordHash": null,
	"isActive": 1,
	"createdAt": "2024-05-18T22:31:44.000Z"   
}
```

## Error Responses

**Condition** : If Account already exists for this email.

**Code** : `409`

**Content** : 
```json
{
	"error": {
		"message": "Email already exists"
	}
}
```

### Or

**Condition** : If Account already exists for this username.

**Code** : `409`

**Content** : 
```json
{
	"error": {
		"message": "Username already exists"
	}
}
```

### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
	"error": {
		"message": [
			{
				"code": "invalid_type",
				"expected": "string",
				"received": "undefined",
				"path": [
					"lastName"
				],
				"message": "lastName is required "
			}
		]
	}
}
```




## Log in

Grant an authorization token if email (or username) and password exists.

**URL** : `/users/login`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

Provide user details whether its email and password, or username and password:

**Email:**
```json
{
    "email": "string",
    "password": "string"
}
```
**Username:**
```json
{
    "username": "string",
    "password": "string"
}
```

**Data example** 

**Email:**
```json
{
    "email": "winterIsComing@mail.com",
	"password":"SomeSecurePass02"
}
```
**Username:**
```json
{
    "username": "lordCommander",
	"password":"SomeSecurePass02"
}
```

## Success Response

**Condition** : If email (or username) and password match with an existing account 

**Code** : `200`

**Content example**

```json
{
	"accessToken":  "eyJhbGsafadsfasdfasdIkpXVCJ9.eyJ1c2VySWQiOiJjNzEyMDMwYSasdfasdfghfdhqwXZcvOTM5MDEiLCJlbWFpbCI6IndpbnRlcklzQ29taW5nQG1czxvhgyjyqwtrsdfvbE2MDc1MjU4fQ.oPVsaVq65VzcxvnbhgfkiufsfmdpjfIsBwaezKzH8",
	"user":  {
		"id":  "c7eraf0a-1563-11ef-adf5-9ef7fcdsafww1",
		"name":  "jhon",
		"lastName":  "snow",
		"phoneNumber":  "8091111111",
		"email":  "winterIsComing@mail.com",
		"username":  "lordKnigth01",
		"passwordHash":  "$2b$10$foasdasfsdfasdftxB6.e6gpadsfgrfgHBtstHJq8.y4asdqwe7TrG",
		"isActive":  1,
		"createdAt":  "2024-05-18T22:12:55.000Z"
	}
}
```

## Error Responses

**Condition** : If email (or username) and password don't match with any existing user

**Code** : `401`

**Content** : 
```json
{
	"error":  {
		"message":  "Wrong username or password"
	}
}
```


# Upload a File

Upload a file for the authenticated user.

**URL**: `/file`

**Method**: `POST`

**Auth required**: YES

**Headers**:
`Authorization: Bearer {JWT Token}`
`Content-Type: multipart/form-data`

**Data constraints**

>The request body must include a `file` attribute, and the content type should be set to `multipart/form-data`.

**Data example**

```json
{
    "file": {
        "uri": "file:///path/to/file",
        "name": "example.txt",
        "type": "text/plain"
    }
}
```

>**Note**: The `file` attribute must be an object containing the file's `uri`, `name`, and `type`.


## Success Response

**Condition**: If the file is successfully uploaded.

**Code**: `201 CREATED`

**Content example**

```json
{
    "file": {
        "id": "8tg462ecc-1632c-167be-afsc5-9dfsg12d901",
        "filename": "example.txt",
        "mimetype": 'image/jpeg',
        "size": "1024",
        "uploaded_at": "2024-05-19T20:15:21.000Z"
    }
}
```

## Error Responses

**Condition**: If the user is not authenticated.

**Code**: `401 UNAUTHORIZED`

**Content example**

```json
{
    "error": "Unauthorized"
}
```

### Or

**Condition**: If there is an internal server error.

**Code**: `500 INTERNAL SERVER ERROR`

**Content example**

```json
{
	"error": {
		"message": "Internal server error"
	}
}
```

### Or

**Condition**: If the file is not included in the request body.

**Code**: `400 BAD REQUEST`

**Content example**

```json
{
	"error": {
		"message": "Unexpected field"
	}
}
```


# Download a File

Download a file if the token is valid, and the file id exist for the authenticated user.

**URL**: `/file/download/:fileId`

**Method**: `Get`

**Auth required**: YES

**Headers**:
`Authorization: Bearer {JWT Token}`
`Content-Type: multipart/form-data`

**Request example**

`file/download/84163ecc-161c-11ef-af05-9ef7fc093901`

## Success Response

**Condition**: if the token is valid, and the file id exist

**Code**: `200`

**Content example**

`storage/{userId}/example.jpg`

## Error Responses

**Condition**: If the user token is not valid.

**Code**: `401 UNAUTHORIZED`

**Content example**

```json
{
	"error": {
		"message": "Unauthorized"
	}
}
```

### Or

**Condition**: If the fileId is incomplete or malformed.

**Code**: `400 BAD REQUEST`

**Content example**

```json
{
	"error": {
		"message": "bad request invalid uuid format"
	}
}
```


### Or

**Condition**: if the file id is not related to the users id or said file id does not exist for that user

**Code**: `404`

**Content example**

```json
{
	"error": {
		"message": "file not found"
	}
}
```

### Or

**Condition**: If there is an internal server error.

**Code**: `500 INTERNAL SERVER ERROR`

**Content example**

```json
{
	"error": {
		"message": "Internal server error"
	}
}
```


# Get all user files metadata

get all the files metadata for the authenticated user

**URL**: `/file`

**Method**: `Get`

**Auth required**: YES

**Headers**:
`Authorization: Bearer {JWT Token}`

## Success Response

**Condition**: if the token is valid

**Code**: `200`

**Content example**

```json
{
	"files": [
		{
			"filename": "jpg_44-2.jpg",
			"mimetype": "image/jpeg",
			"size": "373507",
			"uploaded_at": "2024-05-13T01:06:31.000Z",
			"id": "07b20430-102335-11ef-af05-9ef7234093901"
		},
		{
			"filename": "ing Requerimientos.docx",
			"mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			"size": "21266",
			"uploaded_at": "2024-05-13T01:06:48.000Z",
			"id": "11f2ca74-10c5-11ef-af05-97fc09ff2901"
		}
	]
}
```
## Error Responses

**Condition**: If the user token is not valid.

**Code**: `401 UNAUTHORIZED`

**Content example**

```json
{
	"error": {
		"message": "Unauthorized"
	}
}
```

### Or

**Condition**: If there is an internal server error.

**Code**: `500 INTERNAL SERVER ERROR`

**Content example**

```json
{
	"error": {
		"message": "Internal server error"
	}
}
```

# Get file metadata by  file name

get all the files that match the name and are associated with the authorized user.

**URL**: `/file/:name`

**Method**: `Get`

**Auth required**: YES

**Headers**:
`Authorization: Bearer {JWT Token}`

**Request example**

`file/example.jpg`

## Success Response

**Condition**: if the token is valid 

**Code**: `200`

**Content example**

```json
[
	{
		"id": "aec93f24-10e1-11ef-af05-9ef7fc093901",
		"filename": "jpg_44-2.jpg",
		"mimetype": "image/jpeg",
		"size": 373507,
		"uploaded_at": "2024-05-13T04:31:37.000Z"
	},
	{
		"id": "07b20430-10c5-11ef-af05-9ef7fc093901",
		"filename": "jpg_44-2.jpg",
		"mimetype": "image/jpeg",
		"size": 373507,
		"uploaded_at": "2024-05-13T01:06:31.000Z"
	}
]
```
> it returns an array of object with the file metadata ordered by most recent first. useful to display the history changes of a particular file.
> 
## Error Responses

**Condition**: If the user token is not valid.

**Code**: `401 UNAUTHORIZED`

**Content example**

```json
{
	"error": {
		"message": "Unauthorized"
	}
}
```

### Or

**Condition**: if no file with said name exist for the authenticated user

**Code**: `404`

**Content example**

```json
{
	"error": {
		"message": "file not found"
	}
}
```

### Or

**Condition**: If there is an internal server error.

**Code**: `500 INTERNAL SERVER ERROR`

**Content example**

```json
{
	"error": {
		"message": "Internal server error"
	}
}
```





















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
