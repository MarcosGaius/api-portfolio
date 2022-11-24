# Portfolio API - Marcos Gaius

This is an REST API that allows users send e-mails through sending a request to `/emails` route.

So far, there is one route:

## POST - /emails

All fields are required.

**Request**

```json
{
  "senderName": "John Doe",
  "fromEmail": "john@doe.com",
  "message": "Hello World!"
}
```

**Response** - 200 OK

```json
{
  "message": "E-mail sent with success."
}
```
