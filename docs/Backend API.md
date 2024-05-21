
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
