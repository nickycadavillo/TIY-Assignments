# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

> Do I need to authenticate?
- In order to do more, like read and write private information, the GitHub API requires authentication.

> What can I do with an unauthenticated request?
- If the client is unauthenticated, they can make 60 requests per hour.  
- Unauthenticated requests are associated with your IP address, and not the user making request

> What _can't_ I do with an unauthenticated request?
- You will get a 404 Not Found for requests that require authentication. This happens in order to prevent the accidental leakage of private repositories to unauthorized users.

> How can I authenticate my request?

- You can authenticate three different ways below:


#### Basic Authentication
Requires your username and password

```
$ curl -u "username" https://api.github.com

```
#### Two-factor authentication
A way of logging into websites that requires more than just a password. i.e. an authentication code delivered to your cell phone by an app or via sms.



##### OAuth2 Token (sent in a header)
OAuth2 lets external apps request authorization to private details in a user’s GitHub account without getting their password.

```
$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
```
##### OAuth2 Token (sent in a parameter)

```
$ curl https://api.github.com/?access_token=OAUTH-TOKEN
```

## [Users](https://developer.github.com/v3/users/)

> How do I ask the API for the profile information for a specific user?

Single User

````
GET /users/:username
````
Authenticated User

````
GET /user
````

Update the Authenticated User
````
PATCH /user
````

> The repository listing for a specific user?

Lists public repos for a user

````
GET /users/:username/repos
````

> The recent, public activity for a specific user?

Lists Public Events for a User
````
GET /events
````

Feeds API
````
GET /feeds
````
Timeline: The GitHub global public timeline
User: The public timeline for any user, using URI template
Current user public: The public timeline for the authenticated user
Current user: The private timeline for the authenticated user
Current user actor: The private timeline for activity created by the authenticated user
Current user organizations: The private timeline for the organizations the authenticated user is a member of.


> Is there a limit to the number of requests I can make?

- For requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hour

- For unauthenticated requests, the rate limit allows you to make up to 60 requests per hour.

> Is there a way of extending that limit?


- If your OAuth application needs to make unauthenticated calls with a higher rate limit, you can pass your app’s client ID and secret as part of the query string.

````

$ curl -i 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'

HTTP/1.1 200 OK
Date: Mon, 01 Jul 2013 17:27:06 GMT
Status: 200 OK
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4966
X-RateLimit-Reset: 1372700873
````
- This method should only be used for server-to-server calls. You should never share your client secret with anyone or include it in client-side browser code.

> What happens when I hit the limit?

Once you go over the rate limit you will receive an error response:
````
HTTP/1.1 403 Forbidden
Date: Tue, 20 Aug 2013 14:50:41 GMT
Status: 403 Forbidden
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1377013266

{
    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
    "documentation_url": "https://developer.github.com/v3/#rate-limiting"
}
````


> What if there is a lot of data returned?


> How can I ask for more (or less) data from a request?


> How do I know that there is more data available?

You can check the returned HTTP headers of any API request to see your current rate limit status:
````
$ curl -i https://api.github.com/users/whatever

HTTP/1.1 200 OK
Date: Mon, 01 Jul 2013 17:27:06 GMT
Status: 200 OK
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 56
X-RateLimit-Reset: 1372700873
````

#### What are the endpoints for fetching...
An endpoint is any URL that will return info back.

The profile data for a user?
https://api.github.com/users/USERNAME

The organizations a user belongs to?
https://api.github.com/users/USERNAME/orgs

The repositories a user has created?
https://api.github.com/users/USERNAME/repos

A filtered list of repositories?
- You can use parameters such as `visibility`, `affilitiation`, `type`, and `direction` to filter your results.

A sorted list of repositories?
- Use the `sort` parameter to sort the results into `created`, `updated` `pushed`, and `full_name`.

Public events for a user?
https://api.github.com/users/USERNAME/events/public

#### When fetching public events for a user...

How many results are returned by default?
- The fixed page size is 30 items. Fetching up to ten pages is supported, for a total of 300 events.

What limitations exist on fetching _more_ results?
- Only events created within the past 90 days will be included in timelines. Events older than 90 days will not be included (even if the total number of events in the timeline is less than 300).


What is the basic structure of the results?
  - Below is the response format for public events:

  ````
  Status: 200 OK
Link: <https://api.github.com/resource?page=2>; rel="next",
      <https://api.github.com/resource?page=5>; rel="last"
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4999
[
  {
    "type": "Event",
    "public": true,
    "payload": {
    },
    "repo": {
      "id": 3,
      "name": "octocat/Hello-World",
      "url": "https://api.github.com/repos/octocat/Hello-World"
    },
    "actor": {
      "id": 1,
      "login": "octocat",
      "gravatar_id": "",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "url": "https://api.github.com/users/octocat"
    },
    "org": {
      "id": 1,
      "login": "github",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/github",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
    "created_at": "2011-09-06T17:26:27Z",
    "id": "12345"
  }
]
  ````

What fields are included in each result?
- type, public, payload, repo (id, name, url), actor (id, login, gravatar_id, avatar_url, url), org (id, login, gravatar_id, url, avatar_url), created_at and id.

What are the data types for each field?
- all data types are represented as Strings except for the "id" field which is represented as a Number and the "public" field which is represented as a Boolean.

What are some of the different values for the type field?
- links, file paths, strings, empty strings, string of numbers, Numbers
```[
  {
    "type": "Event",
    "public": true,
    "payload": {
    },
    "repo": {
      "id": 3,
      "name": "octocat/Hello-World",
      "url": "https://api.github.com/repos/octocat/Hello-World"
    },
    "actor": {
      "id": 1,
      "login": "octocat",
      "gravatar_id": "",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "url": "https://api.github.com/users/octocat"
    },
    "org": {
      "id": 1,
      "login": "github",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/github",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
    "created_at": "2011-09-06T17:26:27Z",
    "id": "12345"
  }
]

. . .

. . .
