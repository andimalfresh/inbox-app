<!-- Notes for INBOX -->
<!-- INSTALL YARN on MACHINE  -->

<!-- Story for Inbox -->
    - When a user views the app
    - Then they should see a list of messages with their subjects
    - If the message is read, it should have the read style
    - If the message is unread, it should have the unread
    - If the message is selected, it should have the selected style and the box should be checked
    If there are labels on a message, they should appear
If the message is starred, then the star should be filled in, otherwise it should be empty
<!-- End of Story -->

-paste style guides in 
     -ALL messages
     -SOME Messages
     - no messages
- use turnary operatiors to toggles between classes for styling

- install collective API locally
   -/api/messages - GET CHROME JSON Viewer
      ../api/messages/1  - pulls message 1 in API

-library folder 
  - contains seed data for API

  INBOX
  App.js most components live at APP level
  pass to everything else from props

  Components
   -messages
   -toolbar 
   -messageBody
   -label 
   -compose
   -message

lifeCYCLES METHOD
    async componentDidMount () {
        let responce = fetch req
        let json = away responce
    }

Methods will be used to create most functionality

