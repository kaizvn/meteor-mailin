# Meteor packages for mailin.


### Current version: 0.1.0
##  Link package: https://atmospherejs.com/kaizvn/meteor-mailin

## What's mailin?
- Mailin is an artisanal inbound emails for every web app: start an SMTP server, listen for all email then parse into JSON and post to webhooks (optional).
- More infomation : please visit [mailin github](https://github.com/Flolagale/mailin).

## On-going
- Send email to sender if operation failed.
- Response maker, validate output.

## Version
- 1.0.0
    - Run latest mailin version (3.0.3) on meteor > 1.4.
- 0.1.0
    - Because mailin version > 3.0 only runnable on nodejs version 4.0+, so if you're running meteor lower than version 1.4, please use `meteor-mailin@0.1.0`.


## How to use
- Add package to your project
 ```
    meteor add kaizvn:meteor-mailin
 ```
 
- For meteor below 1.4
 ```
    meteor add kaizvn:meteor-mailin@=0.1.0
 ```
 
- Create new `Mailin` and set event handler

    All valid options and events in mailin are [here](https://github.com/Flolagale/mailin).
     
    ``` 
        let options = {port: 2525}; 
        let mailin = new MeteorMailin(options);
        
        /* Support two ways to add new event handler */
        
        /* #1 */
        mailin.setEventHandler('message', ()=>{ 
            console.log('hello')
        });
        
        /* #2 */
        let eventHandle = {
            startMessage : ()=> {
               console.log('this is on start message');
            }
            authorizeUser : () => {
              console.log('this is on authorize user');
            }
        };
        
        mailin.setEventHandler(eventHandle);
        
        /* Start server in Meteor.startup */
        Meteor.startup(() => {
            mailin.startServer();
        });
    ```


## License

  MIT
