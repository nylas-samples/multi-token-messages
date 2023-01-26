# multi-token-messages

This sample repo shows you how to make multiple requests to Nylas in order to retrieve the inbox messages 
across multiple accounts and sort them by received date (most recent at the top) to create a "joint" 
inbox data source.

## Setup

### System dependencies

- Node.js v16.x

### Gather environment variables

You'll need the following values:

```text
ACCESS_TOKEN_ARRAY = "Token_1,Token_2,..."
CLIENT_ID = ""
CLIENT_SECRET = ""
```

Add the above values to a `.env` file:

### Install dependencies

```bash
$ npm i
```

## Usage

Run the script using following commands:

```bash
$ node multi_token_messages.js
```

When you run the script, you'll get an array of messages from all tokens output in your terminal:

```bash
[{
    acccountId: '<ACCOUNT_ID>',
    id: '<MESSAGE_ID>',
    bcc: ['<EMAIL_PARTICIPANT>'],
    body: '<MESSAGE_BODY>'
    cc: ['<EMAIL_PARTICIPANT>'],
    date: '<EPOCH_TIMESTAMP>',
    events: ['<EVENT_IDS>'],
    files: ['<FILE_IDS>'],
    from: ['<EMAIL_PARTICIPANT>'],
    labels: ['<LABEL_OBJECT>'], OR, folders: ['<FOLDER_OBJECT>']
    replyTo: ['<EMAIL_PARTICIPANT>'],
    snippet: '<SNIPPET>',
    starred: '<BOOLEAN>',
    unread: '<BOOLEAN>',
    subject: '<SUBJECT>',
    thread_id: '<THREAD_ID>',
    to: ['<EMAIL_PARTICIPANT>']
}],
```

## Learn more

Visit our [Nylas Node.js SDK documentation](https://developer.nylas.com/docs/developer-tools/sdk/node-sdk/) to learn more.