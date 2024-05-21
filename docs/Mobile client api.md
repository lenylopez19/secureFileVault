## Objects

<dl>
<dt><a href="#FilesContext">FilesContext</a> : <code>object</code></dt>
<dd><p>Context for managing files.</p>
</dd>
<dt><a href="#AuthContext">AuthContext</a> : <code>object</code></dt>
<dd><p>Context for authentication.</p>
</dd>
<dt><a href="#UI_IMAGES">UI_IMAGES</a> : <code>object</code></dt>
<dd><p>UI images used throughout the application.</p>
</dd>
<dt><a href="#LABELS">LABELS</a> : <code>object</code></dt>
<dd><p>Labels used throughout the application forms.</p>
</dd>
<dt><a href="#ICON">ICON</a> : <code>object</code></dt>
<dd><p>Icons used throughout the application.</p>
</dd>
<dt><a href="#PLACEHOLDERS">PLACEHOLDERS</a> : <code>object</code></dt>
<dd><p>Placeholders used throughout the application.</p>
</dd>
<dt><a href="#SCREENS">SCREENS</a> : <code>object</code></dt>
<dd><p>Screen identifiers used for navigation throughout the application.</p>
</dd>
<dt><a href="#COLORS">COLORS</a> : <code>object</code></dt>
<dd><p>Color constants used throughout the application.</p>
</dd>
<dt><a href="#APP_TEXT">APP_TEXT</a> : <code>object</code></dt>
<dd><p>Holds all the text constants used in the application.</p>
</dd>
<dt><a href="#LOGIN">LOGIN</a> : <code>object</code></dt>
<dd><p>Text related to the login screen.</p>
</dd>
<dt><a href="#SIGNUP">SIGNUP</a> : <code>object</code></dt>
<dd><p>Text related to the signup process.</p>
</dd>
<dt><a href="#HOME">HOME</a> : <code>object</code></dt>
<dd><p>Text related to the home screen.</p>
</dd>
<dt><a href="#FILE_DETAIL">FILE_DETAIL</a> : <code>object</code></dt>
<dd><p>Text related to the file detail screen.</p>
</dd>
<dt><a href="#REGEX">REGEX</a> : <code>object</code></dt>
<dd><p>Regular expressions used for input validation throughout the application.</p>
</dd>
<dt><a href="#ERROR_MSG">ERROR_MSG</a> : <code>object</code></dt>
<dd><p>Error messages used throughout the application.</p>
</dd>
<dt><a href="#GENERIC">GENERIC</a> : <code>object</code></dt>
<dd><p>Generic error messages.</p>
</dd>
<dt><a href="#NAME">NAME</a> : <code>object</code></dt>
<dd><p>Error messages related to name fields.</p>
</dd>
<dt><a href="#LAST_NAME">LAST_NAME</a> : <code>object</code></dt>
<dd><p>Error messages related to last name fields.</p>
</dd>
<dt><a href="#PHONE">PHONE</a> : <code>object</code></dt>
<dd><p>Error messages related to phone number fields.</p>
</dd>
<dt><a href="#EMAIL">EMAIL</a> : <code>object</code></dt>
<dd><p>Error messages related to email fields.</p>
</dd>
<dt><a href="#USERNAME">USERNAME</a> : <code>object</code></dt>
<dd><p>Error messages related to username fields.</p>
</dd>
<dt><a href="#PASSWORD">PASSWORD</a> : <code>object</code></dt>
<dd><p>Error messages related to password fields.</p>
</dd>
<dt><a href="#CONFIRM_PASSWORD">CONFIRM_PASSWORD</a> : <code>object</code></dt>
<dd><p>Error messages related to confirm password fields.</p>
</dd>
<dt><a href="#VIEW_TYPE">VIEW_TYPE</a> : <code>object</code></dt>
<dd><p>View types used for displaying content throughout the application.</p>
</dd>
<dt><a href="#PLATFORM">PLATFORM</a> : <code>object</code></dt>
<dd><p>Platform constants used throughout the application.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#FilesProvider">FilesProvider(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Provider component that manages file state and provides file-related functions to its children.</p>
</dd>
<dt><a href="#AuthProvider">AuthProvider(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Provider component that supplies authentication state and actions to its children.</p>
</dd>
<dt><a href="#useDebounce">useDebounce(value, [delay])</a> ⇒ <code>*</code></dt>
<dd><p>Custom hook that debounces a value.</p>
</dd>
<dt><a href="#uploadFile">uploadFile(file, userToken, isIos)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Uploads a file to the server.</p>
</dd>
<dt><a href="#downloadFile">downloadFile(fileId, userToken)</a></dt>
<dd><p>Function to download a file from the server and share it.</p>
</dd>
<dt><a href="#setUserDataInStorage">setUserDataInStorage(userData)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Stores the user data securely in local storage.</p>
</dd>
<dt><a href="#getUserDataFromStorage">getUserDataFromStorage()</a> ⇒ <code>Promise.&lt;(string|null)&gt;</code></dt>
<dd><p>Retrieves the user data from local storage.</p>
</dd>
<dt><a href="#removeUserDataFromStorage">removeUserDataFromStorage()</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Removes the user data from local storage.</p>
</dd>
<dt><a href="#formatDateAndTime">formatDateAndTime(dateString)</a> ⇒ <code>string</code></dt>
<dd><p>Function to format a date string into a human-readable date and time string.</p>
</dd>
<dt><a href="#errorHandler">errorHandler(error)</a></dt>
<dd><p>Function to handle errors and display appropriate alerts or set error messages.</p>
</dd>
<dt><a href="#loginErrorHandler">loginErrorHandler(error, action)</a></dt>
<dd><p>Function to handle login errors and display appropriate alerts.</p>
</dd>
<dt><a href="#setTokenInStorage">setTokenInStorage(token)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Stores the access token securely in local storage.</p>
</dd>
<dt><a href="#getTokenFromStorage">getTokenFromStorage()</a> ⇒ <code>Promise.&lt;(string|null)&gt;</code></dt>
<dd><p>Retrieves the access token from local storage.</p>
</dd>
<dt><a href="#removeTokenFromStorage">removeTokenFromStorage()</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Removes the access token from local storage.</p>
</dd>
<dt><a href="#getFileHeader">getFileHeader(url, [headers])</a> ⇒ <code>Promise.&lt;(string|null)&gt;</code></dt>
<dd><p>Fetches the <code>Content-Disposition</code> header from the response of a HEAD request to the specified URL.</p>
</dd>
<dt><a href="#sortByDate">sortByDate(files)</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Sorts an array of files by date in descending order.</p>
</dd>
<dt><a href="#getLatestFiles">getLatestFiles(files)</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Returns the latest file from each group of files with the same name.</p>
</dd>
<dt><a href="#groupByName">groupByName(files)</a> ⇒ <code>Object</code></dt>
<dd><p>Groups an array of files by their filename.</p>
</dd>
<dt><a href="#validateEmail">validateEmail(email)</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#validateUsername">validateUsername(username)</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#validatePassword">validatePassword(password)</a> ⇒ <code>string</code></dt>
<dd><p>Validates a password.</p>
</dd>
<dt><a href="#validateConfirmPassword">validateConfirmPassword(password, confirmPassword)</a> ⇒ <code>string</code></dt>
<dd><p>Validates that the confirmation password matches the original password.</p>
</dd>
<dt><a href="#validateName">validateName(name)</a> ⇒ <code>string</code></dt>
<dd><p>Validates a name.</p>
</dd>
<dt><a href="#validateLastName">validateLastName(lastName)</a> ⇒ <code>string</code></dt>
<dd><p>Validates a last name.</p>
</dd>
<dt><a href="#validatePhone">validatePhone(phoneNumber)</a> ⇒ <code>string</code></dt>
<dd><p>Validates a phone number.</p>
</dd>
<dt><a href="#pickFile">pickFile()</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Opens a document picker for the user to select a file.</p>
</dd>
<dt><a href="#formatFileSize">formatFileSize(sizeInBytes)</a> ⇒ <code>string</code></dt>
<dd><p>Formats a file size in bytes into a human-readable string with appropriate units (bytes, KB, MB, GB).</p>
</dd>
<dt><a href="#extractFilenameFromHeader">extractFilenameFromHeader(header)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Extracts filename from a given header string.</p>
</dd>
</dl>

<a name="FilesContext"></a>

## FilesContext : <code>object</code>
Context for managing files.

**Kind**: global namespace  
<a name="AuthContext"></a>

## AuthContext : <code>object</code>
Context for authentication.

**Kind**: global namespace  
<a name="UI_IMAGES"></a>

## UI\_IMAGES : <code>object</code>
UI images used throughout the application.

**Kind**: global namespace  

* [UI_IMAGES](#UI_IMAGES) : <code>object</code>
    * [.BG_PURPLE](#UI_IMAGES.BG_PURPLE)
    * [.BG_BLUE](#UI_IMAGES.BG_BLUE)
    * [.HERO_IMAGE](#UI_IMAGES.HERO_IMAGE)

<a name="UI_IMAGES.BG_PURPLE"></a>

### UI_IMAGES.BG\_PURPLE
Background image with a purple theme.

**Kind**: static property of [<code>UI\_IMAGES</code>](#UI_IMAGES)  
<a name="UI_IMAGES.BG_BLUE"></a>

### UI_IMAGES.BG\_BLUE
Background image with a blue theme.

**Kind**: static property of [<code>UI\_IMAGES</code>](#UI_IMAGES)  
<a name="UI_IMAGES.HERO_IMAGE"></a>

### UI_IMAGES.HERO\_IMAGE
Hero image used on the login screen.

**Kind**: static property of [<code>UI\_IMAGES</code>](#UI_IMAGES)  
<a name="LABELS"></a>

## LABELS : <code>object</code>
Labels used throughout the application forms.

**Kind**: global namespace  

* [LABELS](#LABELS) : <code>object</code>
    * [.EMAIL](#LABELS.EMAIL)
    * [.PASSWORD](#LABELS.PASSWORD)
    * [.USERNAME](#LABELS.USERNAME)
    * [.CONFIRM_PASSWORD](#LABELS.CONFIRM_PASSWORD)
    * [.PASSWORD](#LABELS.PASSWORD)
    * [.NAME](#LABELS.NAME)
    * [.LAST_NAME](#LABELS.LAST_NAME)
    * [.PHONE_NUMBER](#LABELS.PHONE_NUMBER)

<a name="LABELS.EMAIL"></a>

### LABELS.EMAIL
Label for the email field.

**Kind**: static property of [<code>LABELS</code>](#LABELS)  
<a name="LABELS.PASSWORD"></a>

### LABELS.PASSWORD
Label for the password field.

**Kind**: static property of [<code>LABELS</code>](#LABELS)  
<a name="LABELS.USERNAME"></a>

### LABELS.USERNAME
Label for the username field.

**Kind**: static property of [<code>LABELS</code>](#LABELS)  
<a name="LABELS.CONFIRM_PASSWORD"></a>

### LABELS.CONFIRM\_PASSWORD
Label for the confirm password field.

**Kind**: static property of [<code>LABELS</code>](#LABELS)  
<a name="LABELS.PASSWORD"></a>

### LABELS.PASSWORD
Label for the password field (repeated entry).

**Kind**: static property of [<code>LABELS</code>](#LABELS)  
<a name="LABELS.NAME"></a>

### LABELS.NAME
Label for the name field.

**Kind**: static property of [<code>LABELS</code>](#LABELS)  
<a name="LABELS.LAST_NAME"></a>

### LABELS.LAST\_NAME
Label for the last name field.

**Kind**: static property of [<code>LABELS</code>](#LABELS)  
<a name="LABELS.PHONE_NUMBER"></a>

### LABELS.PHONE\_NUMBER
Label for the phone number field.

**Kind**: static property of [<code>LABELS</code>](#LABELS)  
<a name="ICON"></a>

## ICON : <code>object</code>
Icons used throughout the application.

**Kind**: global namespace  

* [ICON](#ICON) : <code>object</code>
    * [.USER_FILL](#ICON.USER_FILL)
    * [.LOCK_FILL](#ICON.LOCK_FILL)
    * [.TOUCH_ID](#ICON.TOUCH_ID)
    * [.FLIP_PHONE](#ICON.FLIP_PHONE)
    * [.ENVELOPE_FILL](#ICON.ENVELOPE_FILL)
    * [.EYE_FILL](#ICON.EYE_FILL)
    * [.EYE_SLASH_FILL](#ICON.EYE_SLASH_FILL)
    * [.SEARCH](#ICON.SEARCH)
    * [.GROUP_VIEW](#ICON.GROUP_VIEW)
    * [.LIST_VIEW](#ICON.LIST_VIEW)
    * [.CLOUD_DOWNLOAD](#ICON.CLOUD_DOWNLOAD)
    * [.SEARCH_CIRCLE](#ICON.SEARCH_CIRCLE)
    * [.FILE](#ICON.FILE)
    * [.CLOUD_LOCK](#ICON.CLOUD_LOCK)
    * [.DOC_DUO](#ICON.DOC_DUO)

<a name="ICON.USER_FILL"></a>

### ICON.USER\_FILL
Icon representing a user or profile.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.LOCK_FILL"></a>

### ICON.LOCK\_FILL
Icon representing a lock or password.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.TOUCH_ID"></a>

### ICON.TOUCH\_ID
Icon representing touch ID authentication.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.FLIP_PHONE"></a>

### ICON.FLIP\_PHONE
Icon representing a flip phone or mobile device.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.ENVELOPE_FILL"></a>

### ICON.ENVELOPE\_FILL
Icon representing an envelope or email.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.EYE_FILL"></a>

### ICON.EYE\_FILL
Icon representing an open eye or visibility.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.EYE_SLASH_FILL"></a>

### ICON.EYE\_SLASH\_FILL
Icon representing a crossed-out eye or hidden visibility.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.SEARCH"></a>

### ICON.SEARCH
Icon representing a search action.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.GROUP_VIEW"></a>

### ICON.GROUP\_VIEW
Icon representing a group view or collection.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.LIST_VIEW"></a>

### ICON.LIST\_VIEW
Icon representing a list view or list of items.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.CLOUD_DOWNLOAD"></a>

### ICON.CLOUD\_DOWNLOAD
Icon representing a cloud download action.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.SEARCH_CIRCLE"></a>

### ICON.SEARCH\_CIRCLE
Icon representing a search action within a circle.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.FILE"></a>

### ICON.FILE
Icon representing a generic file or document.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.CLOUD_LOCK"></a>

### ICON.CLOUD\_LOCK
Icon representing a locked cloud or secure file storage.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="ICON.DOC_DUO"></a>

### ICON.DOC\_DUO
Icon representing a document with another document inside.

**Kind**: static property of [<code>ICON</code>](#ICON)  
<a name="PLACEHOLDERS"></a>

## PLACEHOLDERS : <code>object</code>
Placeholders used throughout the application.

**Kind**: global namespace  

* [PLACEHOLDERS](#PLACEHOLDERS) : <code>object</code>
    * [.EMAIL](#PLACEHOLDERS.EMAIL)
    * [.USERNAME](#PLACEHOLDERS.USERNAME)
    * [.PASSWORD](#PLACEHOLDERS.PASSWORD)
    * [.CONFIRM_PASSWORD](#PLACEHOLDERS.CONFIRM_PASSWORD)
    * [.NAME](#PLACEHOLDERS.NAME)
    * [.LAST_NAME](#PLACEHOLDERS.LAST_NAME)
    * [.PHONE_NUMBER](#PLACEHOLDERS.PHONE_NUMBER)
    * [.SEARCH_BY_NAME](#PLACEHOLDERS.SEARCH_BY_NAME)

<a name="PLACEHOLDERS.EMAIL"></a>

### PLACEHOLDERS.EMAIL
Placeholder for the email field.

**Kind**: static property of [<code>PLACEHOLDERS</code>](#PLACEHOLDERS)  
<a name="PLACEHOLDERS.USERNAME"></a>

### PLACEHOLDERS.USERNAME
Placeholder for the username field.

**Kind**: static property of [<code>PLACEHOLDERS</code>](#PLACEHOLDERS)  
<a name="PLACEHOLDERS.PASSWORD"></a>

### PLACEHOLDERS.PASSWORD
Placeholder for the password field.

**Kind**: static property of [<code>PLACEHOLDERS</code>](#PLACEHOLDERS)  
<a name="PLACEHOLDERS.CONFIRM_PASSWORD"></a>

### PLACEHOLDERS.CONFIRM\_PASSWORD
Placeholder for the confirm password field.

**Kind**: static property of [<code>PLACEHOLDERS</code>](#PLACEHOLDERS)  
<a name="PLACEHOLDERS.NAME"></a>

### PLACEHOLDERS.NAME
Placeholder for the name field.

**Kind**: static property of [<code>PLACEHOLDERS</code>](#PLACEHOLDERS)  
<a name="PLACEHOLDERS.LAST_NAME"></a>

### PLACEHOLDERS.LAST\_NAME
Placeholder for the last name field.

**Kind**: static property of [<code>PLACEHOLDERS</code>](#PLACEHOLDERS)  
<a name="PLACEHOLDERS.PHONE_NUMBER"></a>

### PLACEHOLDERS.PHONE\_NUMBER
Placeholder for the phone number field.

**Kind**: static property of [<code>PLACEHOLDERS</code>](#PLACEHOLDERS)  
<a name="PLACEHOLDERS.SEARCH_BY_NAME"></a>

### PLACEHOLDERS.SEARCH\_BY\_NAME
Placeholder for the search by name field.

**Kind**: static property of [<code>PLACEHOLDERS</code>](#PLACEHOLDERS)  
<a name="SCREENS"></a>

## SCREENS : <code>object</code>
Screen identifiers used for navigation throughout the application.

**Kind**: global namespace  

* [SCREENS](#SCREENS) : <code>object</code>
    * [.LOGIN](#SCREENS.LOGIN)
    * [.SIGN_UP](#SCREENS.SIGN_UP)
    * [.SIGN_UP_CREDENTIALS](#SCREENS.SIGN_UP_CREDENTIALS)

<a name="SCREENS.LOGIN"></a>

### SCREENS.LOGIN
Identifier for the login screen.

**Kind**: static property of [<code>SCREENS</code>](#SCREENS)  
<a name="SCREENS.SIGN_UP"></a>

### SCREENS.SIGN\_UP
Identifier for the sign-up screen.

**Kind**: static property of [<code>SCREENS</code>](#SCREENS)  
<a name="SCREENS.SIGN_UP_CREDENTIALS"></a>

### SCREENS.SIGN\_UP\_CREDENTIALS
Identifier for the screen to enter sign-up credentials.

**Kind**: static property of [<code>SCREENS</code>](#SCREENS)  
<a name="COLORS"></a>

## COLORS : <code>object</code>
Color constants used throughout the application.

**Kind**: global namespace  

* [COLORS](#COLORS) : <code>object</code>
    * [.ACCENT](#COLORS.ACCENT) : <code>string</code>
    * [.AUX](#COLORS.AUX) : <code>string</code>
    * [.AUX_STRONG](#COLORS.AUX_STRONG) : <code>string</code>
    * [.FOREGROUND](#COLORS.FOREGROUND) : <code>string</code>
    * [.ERROR](#COLORS.ERROR) : <code>string</code>
    * [.ERROR_LIGHT](#COLORS.ERROR_LIGHT) : <code>string</code>
    * [.BASE](#COLORS.BASE) : <code>string</code>
    * [.BACKGROUND](#COLORS.BACKGROUND) : <code>string</code>
    * [.NEUTRAL](#COLORS.NEUTRAL) : <code>string</code>

<a name="COLORS.ACCENT"></a>

### COLORS.ACCENT : <code>string</code>
Light blue color used for accenting elements.

**Kind**: static constant of [<code>COLORS</code>](#COLORS)  
<a name="COLORS.AUX"></a>

### COLORS.AUX : <code>string</code>
Light purple color often used as a secondary accent color.

**Kind**: static constant of [<code>COLORS</code>](#COLORS)  
<a name="COLORS.AUX_STRONG"></a>

### COLORS.AUX\_STRONG : <code>string</code>
Darker purple color, possibly used for stronger emphasis.

**Kind**: static constant of [<code>COLORS</code>](#COLORS)  
<a name="COLORS.FOREGROUND"></a>

### COLORS.FOREGROUND : <code>string</code>
Dark blue color used for foreground elements like text.

**Kind**: static constant of [<code>COLORS</code>](#COLORS)  
<a name="COLORS.ERROR"></a>

### COLORS.ERROR : <code>string</code>
Light red color typically indicating error states.

**Kind**: static constant of [<code>COLORS</code>](#COLORS)  
<a name="COLORS.ERROR_LIGHT"></a>

### COLORS.ERROR\_LIGHT : <code>string</code>
Lighter shade of red, possibly used for softer error indicators.

**Kind**: static constant of [<code>COLORS</code>](#COLORS)  
<a name="COLORS.BASE"></a>

### COLORS.BASE : <code>string</code>
Light purple color serving as a base background color.

**Kind**: static constant of [<code>COLORS</code>](#COLORS)  
<a name="COLORS.BACKGROUND"></a>

### COLORS.BACKGROUND : <code>string</code>
Dark purple color used for the overall background.

**Kind**: static constant of [<code>COLORS</code>](#COLORS)  
<a name="COLORS.NEUTRAL"></a>

### COLORS.NEUTRAL : <code>string</code>
White color, likely used for neutral elements.

**Kind**: static constant of [<code>COLORS</code>](#COLORS)  
<a name="APP_TEXT"></a>

## APP\_TEXT : <code>object</code>
Holds all the text constants used in the application.

**Kind**: global namespace  
<a name="LOGIN"></a>

## LOGIN : <code>object</code>
Text related to the login screen.

**Kind**: global namespace  
<a name="SIGNUP"></a>

## SIGNUP : <code>object</code>
Text related to the signup process.

**Kind**: global namespace  
<a name="HOME"></a>

## HOME : <code>object</code>
Text related to the home screen.

**Kind**: global namespace  
<a name="FILE_DETAIL"></a>

## FILE\_DETAIL : <code>object</code>
Text related to the file detail screen.

**Kind**: global namespace  
<a name="REGEX"></a>

## REGEX : <code>object</code>
Regular expressions used for input validation throughout the application.

**Kind**: global namespace  

* [REGEX](#REGEX) : <code>object</code>
    * [.NAME](#REGEX.NAME)
    * [.LAST_NAME](#REGEX.LAST_NAME)
    * [.EMAIL](#REGEX.EMAIL)
    * [.PHONE](#REGEX.PHONE)
    * [.USERNAME](#REGEX.USERNAME)
    * [.PASSWORD](#REGEX.PASSWORD)
    * [.HAS_NUMBER](#REGEX.HAS_NUMBER)
    * [.HAS_UPPERCASE](#REGEX.HAS_UPPERCASE)
    * [.HAS_LOWERCASE](#REGEX.HAS_LOWERCASE)
    * [.HAS_SPECIAL_CHARACTER](#REGEX.HAS_SPECIAL_CHARACTER)

<a name="REGEX.NAME"></a>

### REGEX.NAME
Regular expression for validating names (excluding numbers and special characters).

**Kind**: static property of [<code>REGEX</code>](#REGEX)  
<a name="REGEX.LAST_NAME"></a>

### REGEX.LAST\_NAME
Regular expression for validating last names (excluding numbers and special characters).

**Kind**: static property of [<code>REGEX</code>](#REGEX)  
<a name="REGEX.EMAIL"></a>

### REGEX.EMAIL
Regular expression for validating email addresses.

**Kind**: static property of [<code>REGEX</code>](#REGEX)  
<a name="REGEX.PHONE"></a>

### REGEX.PHONE
Regular expression for validating phone numbers (exactly 10 digits).

**Kind**: static property of [<code>REGEX</code>](#REGEX)  
<a name="REGEX.USERNAME"></a>

### REGEX.USERNAME
Regular expression for validating usernames (alphanumeric with optional periods and underscores, 6-20 characters long, no consecutive periods or underscores).

**Kind**: static property of [<code>REGEX</code>](#REGEX)  
<a name="REGEX.PASSWORD"></a>

### REGEX.PASSWORD
Regular expression for validating passwords (at least 8 characters long, containing at least one lowercase letter).

**Kind**: static property of [<code>REGEX</code>](#REGEX)  
<a name="REGEX.HAS_NUMBER"></a>

### REGEX.HAS\_NUMBER
Regular expression for detecting presence of a number in a string.

**Kind**: static property of [<code>REGEX</code>](#REGEX)  
<a name="REGEX.HAS_UPPERCASE"></a>

### REGEX.HAS\_UPPERCASE
Regular expression for detecting presence of an uppercase letter in a string.

**Kind**: static property of [<code>REGEX</code>](#REGEX)  
<a name="REGEX.HAS_LOWERCASE"></a>

### REGEX.HAS\_LOWERCASE
Regular expression for detecting presence of a lowercase letter in a string.

**Kind**: static property of [<code>REGEX</code>](#REGEX)  
<a name="REGEX.HAS_SPECIAL_CHARACTER"></a>

### REGEX.HAS\_SPECIAL\_CHARACTER
Regular expression for detecting presence of a special character in a string.

**Kind**: static property of [<code>REGEX</code>](#REGEX)  
<a name="ERROR_MSG"></a>

## ERROR\_MSG : <code>object</code>
Error messages used throughout the application.

**Kind**: global namespace  
<a name="GENERIC"></a>

## GENERIC : <code>object</code>
Generic error messages.

**Kind**: global namespace  
<a name="NAME"></a>

## NAME : <code>object</code>
Error messages related to name fields.

**Kind**: global namespace  
<a name="LAST_NAME"></a>

## LAST\_NAME : <code>object</code>
Error messages related to last name fields.

**Kind**: global namespace  
<a name="PHONE"></a>

## PHONE : <code>object</code>
Error messages related to phone number fields.

**Kind**: global namespace  
<a name="EMAIL"></a>

## EMAIL : <code>object</code>
Error messages related to email fields.

**Kind**: global namespace  
<a name="USERNAME"></a>

## USERNAME : <code>object</code>
Error messages related to username fields.

**Kind**: global namespace  
<a name="PASSWORD"></a>

## PASSWORD : <code>object</code>
Error messages related to password fields.

**Kind**: global namespace  
<a name="CONFIRM_PASSWORD"></a>

## CONFIRM\_PASSWORD : <code>object</code>
Error messages related to confirm password fields.

**Kind**: global namespace  
<a name="VIEW_TYPE"></a>

## VIEW\_TYPE : <code>object</code>
View types used for displaying content throughout the application.

**Kind**: global namespace  

* [VIEW_TYPE](#VIEW_TYPE) : <code>object</code>
    * [.GRID](#VIEW_TYPE.GRID)
    * [.LIST](#VIEW_TYPE.LIST)

<a name="VIEW_TYPE.GRID"></a>

### VIEW_TYPE.GRID
View type for displaying content in a grid layout.

**Kind**: static property of [<code>VIEW\_TYPE</code>](#VIEW_TYPE)  
<a name="VIEW_TYPE.LIST"></a>

### VIEW_TYPE.LIST
View type for displaying content in a list layout.

**Kind**: static property of [<code>VIEW\_TYPE</code>](#VIEW_TYPE)  
<a name="PLATFORM"></a>

## PLATFORM : <code>object</code>
Platform constants used throughout the application.

**Kind**: global namespace  

* [PLATFORM](#PLATFORM) : <code>object</code>
    * [.IOS](#PLATFORM.IOS)
    * [.ANDROID](#PLATFORM.ANDROID)

<a name="PLATFORM.IOS"></a>

### PLATFORM.IOS
Constant representing the iOS platform.

**Kind**: static property of [<code>PLATFORM</code>](#PLATFORM)  
<a name="PLATFORM.ANDROID"></a>

### PLATFORM.ANDROID
Constant representing the Android platform.

**Kind**: static property of [<code>PLATFORM</code>](#PLATFORM)  
<a name="FilesProvider"></a>

## FilesProvider(props) ⇒ <code>JSX.Element</code>
Provider component that manages file state and provides file-related functions to its children.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The provider component with file context.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The properties object. |
| props.children | <code>ReactNode</code> | The child components that will receive the context. |


* [FilesProvider(props)](#FilesProvider) ⇒ <code>JSX.Element</code>
    * [~addFiles(file)](#FilesProvider..addFiles)
    * [~initializeFiles(fetchedFiles)](#FilesProvider..initializeFiles)

<a name="FilesProvider..addFiles"></a>

### FilesProvider~addFiles(file)
Adds a file to the list of files.

**Kind**: inner method of [<code>FilesProvider</code>](#FilesProvider)  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Object</code> | The file to add. |

<a name="FilesProvider..initializeFiles"></a>

### FilesProvider~initializeFiles(fetchedFiles)
Initializes the list of files with fetched files.

**Kind**: inner method of [<code>FilesProvider</code>](#FilesProvider)  

| Param | Type | Description |
| --- | --- | --- |
| fetchedFiles | <code>Array.&lt;Object&gt;</code> | The files fetched from storage. |

<a name="AuthProvider"></a>

## AuthProvider(props) ⇒ <code>JSX.Element</code>
Provider component that supplies authentication state and actions to its children.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The provider component with authentication context.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The properties object. |
| props.children | <code>ReactNode</code> | The child components that will receive the context. |


* [AuthProvider(props)](#AuthProvider) ⇒ <code>JSX.Element</code>
    * [~saveToken(token)](#AuthProvider..saveToken)
    * [~deleteToken()](#AuthProvider..deleteToken)
    * [~saveUserData(userData)](#AuthProvider..saveUserData)
    * [~deleteUserData()](#AuthProvider..deleteUserData)
    * [~signOut()](#AuthProvider..signOut)
    * [~isLoggedIn()](#AuthProvider..isLoggedIn)

<a name="AuthProvider..saveToken"></a>

### AuthProvider~saveToken(token)
Saves the authentication token in the state and storage.

**Kind**: inner method of [<code>AuthProvider</code>](#AuthProvider)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authentication token. |

<a name="AuthProvider..deleteToken"></a>

### AuthProvider~deleteToken()
Deletes the authentication token from the state and storage.

**Kind**: inner method of [<code>AuthProvider</code>](#AuthProvider)  
<a name="AuthProvider..saveUserData"></a>

### AuthProvider~saveUserData(userData)
Saves the user data in the state and storage.

**Kind**: inner method of [<code>AuthProvider</code>](#AuthProvider)  

| Param | Type | Description |
| --- | --- | --- |
| userData | <code>Object</code> | The user data. |

<a name="AuthProvider..deleteUserData"></a>

### AuthProvider~deleteUserData()
Deletes the user data from the state and storage.

**Kind**: inner method of [<code>AuthProvider</code>](#AuthProvider)  
<a name="AuthProvider..signOut"></a>

### AuthProvider~signOut()
Signs out the user by deleting the token and user data.

**Kind**: inner method of [<code>AuthProvider</code>](#AuthProvider)  
<a name="AuthProvider..isLoggedIn"></a>

### AuthProvider~isLoggedIn()
Checks if the user is logged in by retrieving the token and user data from storage.

**Kind**: inner method of [<code>AuthProvider</code>](#AuthProvider)  
<a name="useDebounce"></a>

## useDebounce(value, [delay]) ⇒ <code>\*</code>
Custom hook that debounces a value.

**Kind**: global function  
**Returns**: <code>\*</code> - The debounced value.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | The value to debounce. |
| [delay] | <code>number</code> | <code>650</code> | The delay in milliseconds before updating the debounced value. |

<a name="uploadFile"></a>

## uploadFile(file, userToken, isIos) ⇒ <code>Promise.&lt;Object&gt;</code>
Uploads a file to the server.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response from the server after the upload.  
**Throws**:

- <code>Error</code> Throws an error if the user token is not provided or if the upload fails.


| Param | Type | Description |
| --- | --- | --- |
| file | <code>Object</code> | The file to upload. |
| userToken | <code>string</code> | The user's authorization token. |
| isIos | <code>boolean</code> | Indicates whether the upload is being performed on iOS (optional). |

<a name="downloadFile"></a>

## downloadFile(fileId, userToken)
Function to download a file from the server and share it.

**Kind**: global function  
**Throws**:

- Will throw an error if userToken is not provided or if there is an error during download.


| Param | Type | Description |
| --- | --- | --- |
| fileId | <code>string</code> | The ID of the file to be downloaded. |
| userToken | <code>string</code> | The user's authentication token. |

<a name="setUserDataInStorage"></a>

## setUserDataInStorage(userData) ⇒ <code>Promise.&lt;void&gt;</code>
Stores the user data securely in local storage.

**Kind**: global function  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the user data is successfully stored.  

| Param | Type | Description |
| --- | --- | --- |
| userData | <code>string</code> | The user data to store. |

<a name="getUserDataFromStorage"></a>

## getUserDataFromStorage() ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
Retrieves the user data from local storage.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(string\|null)&gt;</code> - A promise that resolves with the user data, or null if not found.  
<a name="removeUserDataFromStorage"></a>

## removeUserDataFromStorage() ⇒ <code>Promise.&lt;void&gt;</code>
Removes the user data from local storage.

**Kind**: global function  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the user data is successfully removed.  
<a name="formatDateAndTime"></a>

## formatDateAndTime(dateString) ⇒ <code>string</code>
Function to format a date string into a human-readable date and time string.

**Kind**: global function  
**Returns**: <code>string</code> - - The formatted date and time string in 'MM/DD/YYYY, HH:MM:SS AM/PM' format.  

| Param | Type | Description |
| --- | --- | --- |
| dateString | <code>string</code> | The date string to be formatted. |

<a name="errorHandler"></a>

## errorHandler(error)
Function to handle errors and display appropriate alerts or set error messages.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>Object</code> | The error object received from the API or other sources. |
| error.data | <code>Object</code> | The data part of the error object, which contains detailed error information. |
| error.status | <code>number</code> | The HTTP status code of the error response. |

<a name="loginErrorHandler"></a>

## loginErrorHandler(error, action)
Function to handle login errors and display appropriate alerts.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>Object</code> | The error object received from the API or other sources. |
| error.data | <code>Object</code> | The data part of the error object, which contains detailed error information. |
| error.status | <code>number</code> | The HTTP status code of the error response. |
| action | <code>function</code> | The callback function to execute after the alert is dismissed. |

<a name="setTokenInStorage"></a>

## setTokenInStorage(token) ⇒ <code>Promise.&lt;void&gt;</code>
Stores the access token securely in local storage.

**Kind**: global function  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the token is successfully stored.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The access token to store. |

<a name="getTokenFromStorage"></a>

## getTokenFromStorage() ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
Retrieves the access token from local storage.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(string\|null)&gt;</code> - A promise that resolves with the access token, or null if not found.  
<a name="removeTokenFromStorage"></a>

## removeTokenFromStorage() ⇒ <code>Promise.&lt;void&gt;</code>
Removes the access token from local storage.

**Kind**: global function  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the token is successfully removed.  
<a name="getFileHeader"></a>

## getFileHeader(url, [headers]) ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
Fetches the `Content-Disposition` header from the response of a HEAD request to the specified URL.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(string\|null)&gt;</code> - The `Content-Disposition` header value, or null if an error occurs.  
**Throws**:

- <code>Error</code> Throws an error if the request fails.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  | The URL to send the HEAD request to. |
| [headers] | <code>Object</code> | <code>{}</code> | Optional headers to include in the request. |

<a name="sortByDate"></a>

## sortByDate(files) ⇒ <code>Array.&lt;Object&gt;</code>
Sorts an array of files by date in descending order.

**Kind**: global function  
**Returns**: <code>Array.&lt;Object&gt;</code> - The sorted array of files.  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array.&lt;Object&gt;</code> | The array of files to sort. |

<a name="getLatestFiles"></a>

## getLatestFiles(files) ⇒ <code>Array.&lt;Object&gt;</code>
Returns the latest file from each group of files with the same name.

**Kind**: global function  
**Returns**: <code>Array.&lt;Object&gt;</code> - The latest file from each group of files with the same name.  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array.&lt;Object&gt;</code> | The array of files. |

<a name="groupByName"></a>

## groupByName(files) ⇒ <code>Object</code>
Groups an array of files by their filename.

**Kind**: global function  
**Returns**: <code>Object</code> - An object where keys are filenames and values are arrays of files with the same name.  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array.&lt;Object&gt;</code> | The array of files to group. |

<a name="validateEmail"></a>

## validateEmail(email) ⇒ <code>String</code>
**Kind**: global function  
**Returns**: <code>String</code> - - An error message or and empty string if theres no error.  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>String</code> | The email address to validate |

<a name="validateUsername"></a>

## validateUsername(username) ⇒ <code>String</code>
**Kind**: global function  
**Returns**: <code>String</code> - - An error message or and empty string if theres no error.  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>String</code> | The username to validate |

<a name="validatePassword"></a>

## validatePassword(password) ⇒ <code>string</code>
Validates a password.

**Kind**: global function  
**Returns**: <code>string</code> - An error message if the password is invalid, or an empty string if the password is valid.  

| Param | Type | Description |
| --- | --- | --- |
| password | <code>string</code> | The password to validate. |

<a name="validateConfirmPassword"></a>

## validateConfirmPassword(password, confirmPassword) ⇒ <code>string</code>
Validates that the confirmation password matches the original password.

**Kind**: global function  
**Returns**: <code>string</code> - An error message if the passwords do not match, or an empty string if they do.  

| Param | Type | Description |
| --- | --- | --- |
| password | <code>string</code> | The original password. |
| confirmPassword | <code>string</code> | The confirmation password to validate. |

<a name="validateName"></a>

## validateName(name) ⇒ <code>string</code>
Validates a name.

**Kind**: global function  
**Returns**: <code>string</code> - An error message if the name is invalid, or an empty string if the name is valid.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name to validate. |

<a name="validateLastName"></a>

## validateLastName(lastName) ⇒ <code>string</code>
Validates a last name.

**Kind**: global function  
**Returns**: <code>string</code> - An error message if the last name is invalid, or an empty string if the last name is valid.  

| Param | Type | Description |
| --- | --- | --- |
| lastName | <code>string</code> | The last name to validate. |

<a name="validatePhone"></a>

## validatePhone(phoneNumber) ⇒ <code>string</code>
Validates a phone number.

**Kind**: global function  
**Returns**: <code>string</code> - An error message if the phone number is invalid, or an empty string if the phone number is valid.  

| Param | Type | Description |
| --- | --- | --- |
| phoneNumber | <code>string</code> | The phone number to validate. |

<a name="pickFile"></a>

## pickFile() ⇒ <code>Promise.&lt;Object&gt;</code>
Opens a document picker for the user to select a file.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The selected file data.  
**Throws**:

- <code>Error</code> Throws an error if the document picking process fails.

<a name="formatFileSize"></a>

## formatFileSize(sizeInBytes) ⇒ <code>string</code>
Formats a file size in bytes into a human-readable string with appropriate units (bytes, KB, MB, GB).

**Kind**: global function  
**Returns**: <code>string</code> - The formatted file size as a string with appropriate units.  

| Param | Type | Description |
| --- | --- | --- |
| sizeInBytes | <code>number</code> | The size of the file in bytes. |

<a name="extractFilenameFromHeader"></a>

## extractFilenameFromHeader(header) ⇒ <code>string</code> \| <code>null</code>
Extracts filename from a given header string.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The extracted filename, or null if not found.  

| Param | Type | Description |
| --- | --- | --- |
| header | <code>string</code> | The header string containing filename information. |

