# RBA-with-Pi
A respberry pi base attandance system

//User Creation

Method: POST
URL: POST /{USER}/users
Header: Content type= Application/JSON
Body:

    {
	"name": "osama",
	"email" : "osama@example.com",
	"password" : "qwertyuiop",
	"age" : 27,
	"rffid": "1234567891020",
	"title": "admin"
}

Status Code: 201
Response:

    {
    "user": {
        "age": 27,
        "_id": "5e8b39895c836f5e2802ecb2",
        "name": "osama",
        "email": "osama@example.com",
        "password": "$2a$08$5z1106hcMfK04LnZn9ZmSusv.wCVXfdldY3xX5mUyhVn7DnEZmxuu",
        "rffid": "1234567891020",
        "title": "admin",
        "tokens": [
            {
                "_id": "5e8b39895c836f5e2802ecb3",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThiMzk4OTVjODM2ZjVlMjgwMmVjYjIiLCJpYXQiOjE1ODYxODI1Mzd9.4O05WhN9I-4nwrZ9_AyBby8rTRWUOSh-YAfSMuABNdU"
            }
        ],
        "__v": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThiMzk4OTVjODM2ZjVlMjgwMmVjYjIiLCJpYXQiOjE1ODYxODI1Mzd9.4O05WhN9I-4nwrZ9_AyBby8rTRWUOSh-YAfSMuABNdU"
}




//User Login

Method: POST

URL: POST /{USER}/users/login

Header: Content type= Application/JSON
Body:

    {
	"rffid" : "1234567891020"
}

Status code: 200

response:

    {
    "user": {
        "age": 27,
        "_id": "5e8b2c146541de0214799cdb",
        "name": "osama",
        "email": "osama@example.com",
        "password": "$2a$08$KsPVxwevDpV3Jh1l7/R36.1MTRXmFgSoftGVxZXYxMS7J/INfxjWG",
        "rffid": "1234567891020",
        "title": "admin",
        "tokens": [
            {
                "_id": "5e8b2c146541de0214799cdc",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThiMmMxNDY1NDFkZTAyMTQ3OTljZGIiLCJpYXQiOjE1ODYxNzkwOTJ9.dS80v2z9s6Fnd6E34ymxnAvOEfxdGkT0LgxvBR5XdM4"
            }
        ],
        "__v": 7
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThiMmMxNDY1NDFkZTAyMTQ3OTljZGIiLCJpYXQiOjE1ODYxODIxNTN9.VBZ-Xq58Fpy3h3f59wJGk7uOrMEMt-ZLtX-aizvE-Us"
}




//Fetching Profile


Method: GET
URL: GET /{USER}/users/me
Header: 
    Content-type= Application/JSON
    Autherization: Bearer [Token-id]


Body:

    {
	"rffid" : "1234567891020"
}
Status Code": 200
Response:

    {
    "age": 27,
    "role": "user",
    "_id": "5e8b39895c836f5e2802ecb2",
    "name": "osama",
    "email": "osama@example.com",
    "password": "$2a$08$5z1106hcMfK04LnZn9ZmSusv.wCVXfdldY3xX5mUyhVn7DnEZmxuu",
    "rffid": "1234567891020",
    "title": "admin",
    "tokens": [
        {
            "_id": "5e8b39895c836f5e2802ecb3",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThiMzk4OTVjODM2ZjVlMjgwMmVjYjIiLCJpYXQiOjE1ODYxODI1Mzd9.4O05WhN9I-4nwrZ9_AyBby8rTRWUOSh-YAfSMuABNdU"
        },
        {
            "_id": "5e9d82298a696203084e47b2",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThiMzk4OTVjODM2ZjVlMjgwMmVjYjIiLCJpYXQiOjE1ODczODA3Nzd9.kG2qhlWh3PSVSmJDlnyEDvKacrCY2oLdAk3aHD999Ak"
        }
    ],
    "__v": 2
}
Status Code": 200


//Logout

-> Method: POST
URL: POST /{USER}/users/logout
     POST /{USER}/users/logoutall
Header: 
    Content-type= Application/JSON
    Autherization: Bearer [Token-id]


Body:

    {
	"rffid" : "1234567891020"
}
status code: 200

response:

    {NULL}

