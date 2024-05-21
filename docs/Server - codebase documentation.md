## Modules

<dl>
<dt><a href="#module_encryptionService">encryptionService</a></dt>
<dd><p>Provides encryption and hashing functionalities, including password comparison, file encryption/decryption, and file hashing.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#UserController">UserController</a></dt>
<dd><p>Controller for handling user-related operations.</p>
</dd>
<dt><a href="#userModel">userModel</a></dt>
<dd><p>Model class for managing user-related database operations.</p>
</dd>
<dt><a href="#fileModel">fileModel</a></dt>
<dd><p>model class for managing file-related database operations.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#signTokenWith">signTokenWith(tokenPayload)</a> ⇒ <code>string</code></dt>
<dd><p>Signs a JWT token with the provided payload using the JWT_SECRET.</p>
</dd>
<dt><a href="#decodeToken">decodeToken(token)</a> ⇒ <code>object</code></dt>
<dd><p>Decode a JWT token and return its payload.</p>
</dd>
<dt><a href="#createError">createError(errorCode, errorMsj)</a> ⇒ <code>Error</code></dt>
<dd><p>Creates a custom error object with a specified status code and message.</p>
</dd>
<dt><a href="#ensureDestination">ensureDestination(destination)</a></dt>
<dd><p>Ensures that the specified destination directory exists. If it does not exist, it will be created recursively.</p>
</dd>
<dt><a href="#existfile">existfile(req)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if files exist in the request object.</p>
</dd>
<dt><a href="#saveFilelocal">saveFilelocal(destinationAndName, content)</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Saves a file locally with the provided content.</p>
</dd>
<dt><a href="#fileToBase64">fileToBase64(filepath)</a> ⇒ <code>string</code></dt>
<dd><p>Reads a file from the specified filepath and converts it to a base64 encoded string.</p>
</dd>
<dt><a href="#base64ToFile">base64ToFile(base64Data, outputPath)</a></dt>
<dd><p>Converts a base64 encoded string to a file and writes it to the specified output path.</p>
</dd>
<dt><a href="#validateUser">validateUser(object)</a> ⇒ <code>Promise.&lt;{success: boolean}&gt;</code></dt>
<dd><p>Validates user input data against the user schema.</p>
</dd>
</dl>

<a name="createAndPostBlock"></a>

## createAndPostBlock(tag, data) ⇒ <code>Promise.&lt;string&gt;</code>
Creates a new block with the provided tag and data, then posts it to the IOTA network.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - A promise that resolves to the ID of the created block.  
**Throws**:

- <code>Error</code> - Throws an error if there is an issue during the block creation and posting process.


| Param | Type | Description |
| --- | --- | --- |
| tag | <code>string</code> | The tag for the block. |
| data | <code>string</code> | The data to be included in the block. |


<a name="fetchBlock"></a>

## fetchBlock(block) ⇒ <code>Promise.&lt;{tag: string, data: string}&gt;</code>
Fetches a block from the IOTA network and converts its tag and data from hexadecimal format to UTF-8.

**Kind**: global function  
**Returns**: <code>Promise.&lt;{tag: string, data: string}&gt;</code> - - A promise that resolves to an object containing the tag and data of the fetched block in UTF-8 format.  
**Throws**:

- <code>Error</code> - Throws an error if there is an issue during the block fetching process.


| Param | Type | Description |
| --- | --- | --- |
| block | <code>any</code> | The ID of the block to fetch. |




<a name="module_encryptionService"></a>

## encryptionService
Provides encryption and hashing functionalities, including password comparison, file encryption/decryption, and file hashing.


* [encryptionService](#module_encryptionService)
    * [.encryptionService](#module_encryptionService.encryptionService)
        * [.comparePasswords(plainPassword, hashedPassword)](#module_encryptionService.encryptionService.comparePasswords) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.createHash(plainText, strength)](#module_encryptionService.encryptionService.createHash) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.encryptFile(filepath, destinationPath)](#module_encryptionService.encryptionService.encryptFile) ⇒ <code>string</code>
        * [.decryptFile(filePath, destinationPath, iv)](#module_encryptionService.encryptionService.decryptFile)
        * [.verifyHash(data, hashToVerify)](#module_encryptionService.encryptionService.verifyHash) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.hashFile(filePath)](#module_encryptionService.encryptionService.hashFile) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="module_encryptionService.encryptionService"></a>

### encryptionService.encryptionService
Provides encryption and hashing functionalities.

**Kind**: static class of [<code>encryptionService</code>](#module_encryptionService)  

* [.encryptionService](#module_encryptionService.encryptionService)
    * [.comparePasswords(plainPassword, hashedPassword)](#module_encryptionService.encryptionService.comparePasswords) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.createHash(plainText, strength)](#module_encryptionService.encryptionService.createHash) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.encryptFile(filepath, destinationPath)](#module_encryptionService.encryptionService.encryptFile) ⇒ <code>string</code>
    * [.decryptFile(filePath, destinationPath, iv)](#module_encryptionService.encryptionService.decryptFile)
    * [.verifyHash(data, hashToVerify)](#module_encryptionService.encryptionService.verifyHash) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.hashFile(filePath)](#module_encryptionService.encryptionService.hashFile) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="module_encryptionService.encryptionService.comparePasswords"></a>

#### encryptionService.comparePasswords(plainPassword, hashedPassword) ⇒ <code>Promise.&lt;boolean&gt;</code>
Compares a plain password with a hashed password.

**Kind**: static method of [<code>encryptionService</code>](#module_encryptionService.encryptionService)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - - A promise that resolves to a boolean indicating if the passwords match.  

| Param | Type | Description |
| --- | --- | --- |
| plainPassword | <code>string</code> | The plain text password. |
| hashedPassword | <code>string</code> | The hashed password. |

<a name="module_encryptionService.encryptionService.createHash"></a>

#### encryptionService.createHash(plainText, strength) ⇒ <code>Promise.&lt;string&gt;</code>
Creates a hash of a plain text string with a specified strength.

**Kind**: static method of [<code>encryptionService</code>](#module_encryptionService.encryptionService)  
**Returns**: <code>Promise.&lt;string&gt;</code> - - A promise that resolves to the hashed string.  

| Param | Type | Description |
| --- | --- | --- |
| plainText | <code>string</code> | The plain text to hash. |
| strength | <code>number</code> | The cost factor (strength) for the hashing algorithm. |

<a name="module_encryptionService.encryptionService.encryptFile"></a>

#### encryptionService.encryptFile(filepath, destinationPath) ⇒ <code>string</code>
Encrypts a file and saves the encrypted data to a destination path.

**Kind**: static method of [<code>encryptionService</code>](#module_encryptionService.encryptionService)  
**Returns**: <code>string</code> - - The initialization vector (IV) used for encryption, encoded in hex format.  

| Param | Type | Description |
| --- | --- | --- |
| filepath | <code>string</code> | The path to the file to encrypt. |
| destinationPath | <code>string</code> | The path to save the encrypted file. |

<a name="module_encryptionService.encryptionService.decryptFile"></a>

#### encryptionService.decryptFile(filePath, destinationPath, iv)
Decrypts an encrypted file and saves the decrypted data to a destination path.

**Kind**: static method of [<code>encryptionService</code>](#module_encryptionService.encryptionService)  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | The path to the encrypted file. |
| destinationPath | <code>string</code> | The path to save the decrypted file. |
| iv | <code>string</code> | The initialization vector (IV) used for decryption, encoded in hex format. |

<a name="module_encryptionService.encryptionService.verifyHash"></a>

#### encryptionService.verifyHash(data, hashToVerify) ⇒ <code>Promise.&lt;boolean&gt;</code>
Verifies if the hash of the data matches a given hash.

**Kind**: static method of [<code>encryptionService</code>](#module_encryptionService.encryptionService)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - - A promise that resolves to a boolean indicating if the hash matches.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | The data to hash and verify. |
| hashToVerify | <code>string</code> | The hash to verify against. |

<a name="module_encryptionService.encryptionService.hashFile"></a>

#### encryptionService.hashFile(filePath) ⇒ <code>Promise.&lt;string&gt;</code>
Computes the SHA-256 hash of a file.

**Kind**: static method of [<code>encryptionService</code>](#module_encryptionService.encryptionService)  
**Returns**: <code>Promise.&lt;string&gt;</code> - - A promise that resolves to the hash of the file, encoded in hex format.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | The path to the file to hash. |



<a name="UserController"></a>

## UserController
Controller for handling user-related operations.

**Kind**: global class  

* [UserController](#UserController)
    * [.login(req, res, next)](#UserController.login) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.getByEmail(req, res)](#UserController.getByEmail) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.create(req, res, next)](#UserController.create) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="UserController.login"></a>

### UserController.login(req, res, next) ⇒ <code>Promise.&lt;void&gt;</code>
Login user.

**Kind**: static method of [<code>UserController</code>](#UserController)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the response is sent.  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | The request object. |
| req.body | <code>object</code> | The request body. |
| req.body.username | <code>string</code> | The username of the user. |
| req.body.email | <code>string</code> | The email of the user. |
| req.body.password | <code>string</code> | The password of the user. |
| res | <code>object</code> | The response object. |
| next | <code>function</code> | The next middleware function. |

<a name="UserController.getByEmail"></a>

### UserController.getByEmail(req, res) ⇒ <code>Promise.&lt;void&gt;</code>
Get user by email.

**Kind**: static method of [<code>UserController</code>](#UserController)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the response is sent.  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | The request object. |
| req.query | <code>object</code> | The query parameters. |
| req.query.email | <code>string</code> | The email of the user to retrieve. |
| res | <code>object</code> | The response object. |

<a name="UserController.create"></a>

### UserController.create(req, res, next) ⇒ <code>Promise.&lt;void&gt;</code>
Create a new user.

**Kind**: static method of [<code>UserController</code>](#UserController)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the response is sent.  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | The request object. |
| req.body | <code>object</code> | The request body. |
| res | <code>object</code> | The response object. |
| next | <code>function</code> | The next middleware function. |

<a name="userModel"></a>

## userModel
Model class for managing user-related database operations.

**Kind**: global class  

* [userModel](#userModel)
    * [.comparePasswords(plainPassword, hashedPassword)](#userModel.comparePasswords) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getByEmail(email)](#userModel.getByEmail) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.getByUsername(username)](#userModel.getByUsername) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.getByUuid(uuid)](#userModel.getByUuid) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.create(input)](#userModel.create) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>

<a name="userModel.comparePasswords"></a>

### userModel.comparePasswords(plainPassword, hashedPassword) ⇒ <code>Promise.&lt;boolean&gt;</code>
Compares a plain password with a hashed password.

**Kind**: static method of [<code>userModel</code>](#userModel)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - - A promise that resolves to a boolean indicating whether the passwords match.  

| Param | Type | Description |
| --- | --- | --- |
| plainPassword | <code>string</code> | The plain password to compare. |
| hashedPassword | <code>string</code> | The hashed password for comparison. |

<a name="userModel.getByEmail"></a>

### userModel.getByEmail(email) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
Retrieves a user by email.

**Kind**: static method of [<code>userModel</code>](#userModel)  
**Returns**: <code>Promise.&lt;Array.&lt;object&gt;&gt;</code> - - A promise that resolves to an array of user data.  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The email of the user to retrieve. |

<a name="userModel.getByUsername"></a>

### userModel.getByUsername(username) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
Retrieves a user by username.

**Kind**: static method of [<code>userModel</code>](#userModel)  
**Returns**: <code>Promise.&lt;Array.&lt;object&gt;&gt;</code> - - A promise that resolves to an array of user data.  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | The username of the user to retrieve. |

<a name="userModel.getByUuid"></a>

### userModel.getByUuid(uuid) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
Retrieves a user by UUID.

**Kind**: static method of [<code>userModel</code>](#userModel)  
**Returns**: <code>Promise.&lt;Array.&lt;object&gt;&gt;</code> - - A promise that resolves to an array of user data.  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | The UUID of the user to retrieve. |

<a name="userModel.create"></a>

### userModel.create(input) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
Creates a new user.

**Kind**: static method of [<code>userModel</code>](#userModel)  
**Returns**: <code>Promise.&lt;Array.&lt;object&gt;&gt;</code> - - A promise that resolves to an array of user data for the created user.  
**Throws**:

- <code>Error</code> - Throws an error if there is an issue during user creation.


| Param | Type | Description |
| --- | --- | --- |
| input | <code>object</code> | The user input data. |

<a name="fileModel"></a>

## fileModel
model class for managing file-related database operations.

**Kind**: global class  

* [fileModel](#fileModel)
    * [.genUUID()](#fileModel.genUUID) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.getById(uuid)](#fileModel.getById) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.getByName(name, userId)](#fileModel.getByName) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.getAll(userId)](#fileModel.getAll) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.download(fileId)](#fileModel.download) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.upload(file, userId)](#fileModel.upload) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>

<a name="fileModel.genUUID"></a>

### fileModel.genUUID() ⇒ <code>Promise.&lt;string&gt;</code>
Generates a UUID.

**Kind**: static method of [<code>fileModel</code>](#fileModel)  
**Returns**: <code>Promise.&lt;string&gt;</code> - - A promise that resolves to the generated UUID.  
<a name="fileModel.getById"></a>

### fileModel.getById(uuid) ⇒ <code>Promise.&lt;object&gt;</code>
Retrieves file metadata by UUID.

**Kind**: static method of [<code>fileModel</code>](#fileModel)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - A promise that resolves to the file metadata.  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | The UUID of the file. |

<a name="fileModel.getByName"></a>

### fileModel.getByName(name, userId) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
Retrieves files by name and user ID.

**Kind**: static method of [<code>fileModel</code>](#fileModel)  
**Returns**: <code>Promise.&lt;Array.&lt;object&gt;&gt;</code> - - A promise that resolves to an array of file metadata.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the file. |
| userId | <code>string</code> | The ID of the user. |

<a name="fileModel.getAll"></a>

### fileModel.getAll(userId) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
Retrieves all files by user ID.

**Kind**: static method of [<code>fileModel</code>](#fileModel)  
**Returns**: <code>Promise.&lt;Array.&lt;object&gt;&gt;</code> - - A promise that resolves to an array of file metadata.  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | The ID of the user. |

<a name="fileModel.download"></a>

### fileModel.download(fileId) ⇒ <code>Promise.&lt;string&gt;</code>
Downloads a file.

**Kind**: static method of [<code>fileModel</code>](#fileModel)  
**Returns**: <code>Promise.&lt;string&gt;</code> - - A promise that resolves to the file path after downloading.  
**Throws**:

- <code>Error</code> - Throws an error if the file is altered or if there is an error during the download process.


| Param | Type | Description |
| --- | --- | --- |
| fileId | <code>string</code> | The ID of the file to download. |

<a name="fileModel.upload"></a>

### fileModel.upload(file, userId) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
Uploads a file.

**Kind**: static method of [<code>fileModel</code>](#fileModel)  
**Returns**: <code>Promise.&lt;Array.&lt;object&gt;&gt;</code> - - A promise that resolves to an array of file metadata after upload.  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Express.Multer.File</code> | The uploaded file object. |
| userId | <code>string</code> | The ID of the user uploading the file. |

<a name="storage"></a>

## storage
Middleware for handling file uploads using multer.
Sets up a multer instance with custom disk storage configuration.

**Kind**: global constant  
<a name="signTokenWith"></a>

## signTokenWith(tokenPayload) ⇒ <code>string</code>
Signs a JWT token with the provided payload using the JWT_SECRET.

**Kind**: global function  
**Returns**: <code>string</code> - - The signed JWT token.  

| Param | Type | Description |
| --- | --- | --- |
| tokenPayload | <code>object</code> | The payload to be included in the token. |

<a name="decodeToken"></a>

## decodeToken(token) ⇒ <code>object</code>
Decode a JWT token and return its payload.

**Kind**: global function  
**Returns**: <code>object</code> - - The payload of the decoded token.  
**Throws**:

- <code>Error</code> - Throws an error if the token is invalid or if the decoding process fails.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The JWT token to decode. |

<a name="createError"></a>

## createError(errorCode, errorMsj) ⇒ <code>Error</code>
Creates a custom error object with a specified status code and message.

**Kind**: global function  
**Returns**: <code>Error</code> - - The custom error object.  

| Param | Type | Description |
| --- | --- | --- |
| errorCode | <code>number</code> | The HTTP status code for the error. |
| errorMsj | <code>string</code> | The error message. |

<a name="ensureDestination"></a>

## ensureDestination(destination)
Ensures that the specified destination directory exists. If it does not exist, it will be created recursively.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| destination | <code>string</code> | The path to the destination directory. |

<a name="existfile"></a>

## existfile(req) ⇒ <code>boolean</code>
Checks if files exist in the request object.

**Kind**: global function  
**Returns**: <code>boolean</code> - - Returns true if files exist in the request, otherwise returns false.  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | The request object. |

<a name="saveFilelocal"></a>

## saveFilelocal(destinationAndName, content) ⇒ <code>Promise.&lt;boolean&gt;</code>
Saves a file locally with the provided content.

**Kind**: global function  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - - A promise that resolves to true if the file is saved successfully, otherwise rejects with an error.  

| Param | Type | Description |
| --- | --- | --- |
| destinationAndName | <code>string</code> | The destination path and filename where the file will be saved. |
| content | <code>string</code> | The content of the file to be saved, provided as a base64 encoded string. |

<a name="fileToBase64"></a>

## fileToBase64(filepath) ⇒ <code>string</code>
Reads a file from the specified filepath and converts it to a base64 encoded string.

**Kind**: global function  
**Returns**: <code>string</code> - - The base64 encoded string representing the file.  

| Param | Type | Description |
| --- | --- | --- |
| filepath | <code>string</code> | The path to the file. |

<a name="base64ToFile"></a>

## base64ToFile(base64Data, outputPath)
Converts a base64 encoded string to a file and writes it to the specified output path.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| base64Data | <code>string</code> | The base64 encoded string representing the file. |
| outputPath | <code>string</code> | The path where the file will be written. |

<a name="validateUser"></a>

## validateUser(object) ⇒ <code>Promise.&lt;{success: boolean}&gt;</code>
Validates user input data against the user schema.

**Kind**: global function  
**Returns**: <code>Promise.&lt;{success: boolean}&gt;</code> - - A promise that resolves to an object indicating validation success or failure.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The user input data object to validate. |

