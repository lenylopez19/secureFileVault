# Set up locally
Instructions on how to set up the project locally for both server and client.

## Prerequisites

### Install Node.js

Make sure you have Node.js installed (which includes npm). You can download it from [nodejs.org](https://nodejs.org/).

### Database schema

Make sure you have available the necessary structure in your database. you can use the `databaseSchema.sql` file located in `Database`

## Server

### 1. Clone the Repository
First, clone the GitHub repository onto your machine
```sh
git clone https://github.com/lenylopez19/secureFileVault.git
```

### 2. Navigate to the Server directory

Within the project folder go to `Server`
```sh
cd Server
```

### 3. Install dependencies

```sh
npm install
```

### 4. Environment variables

Create a `.env` file in the root of your project if it doesn't exist. Copy the required environment variables from `dotenvExample`  and replace the values with yours.

You can copy it with:
```sh
cp dotenvExample .env
```
Then, edit the `.env` file to include the appropriate values.
### 5. Run the server

```sh
node server.js
```
you should see a `Running on port #portnumber` message if everything started correctly. 

Now you should have an up and running server.
## Mobile Client


### 1. Clone the Repository
>if you did the server set up previously omit this step, go to step 2

First, clone the GitHub repository onto your machine
```sh
git clone https://github.com/lenylopez19/secureFileVault.git
```

### 2. Navigate to the mobile client directory

Within the project folder go to `mobileClient`
```sh
cd mobileClient
```

### 3. Install dependencies

```sh
npm install
```

### 4. Edit the BASE_URL constant

To be able to connect to the server you should edit the BASE_URL constant located in `mobileClient/constant/API.js`
by default its `127.0.0.1:3000` you should change it to your sever ip address and port.

### 5. Run the Project
To start the project run:
```sh
npm start
```
> the easiest way of testing the app on a real device is through expo go app. download it through the App Store or google play store and scan the QR code generated that would be in your terminal.
