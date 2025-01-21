2025-01-05
Emmanuel Onyia

"# PortfolioWebsite" 

Task
A personal project to create a protfolio website and deploy it using AWS cloud tools.

Goal
This project should afford my to learn basic html coding and practical application og AWS tools.

Skills i've practices
//This list will be updated as I progress.
1. html/css and javasript
2. AWS tool: Amazon S3, Cloudfront, Amazon Certificate Manager, Route 53
3. Windows CMD
4. Git


2025-01-08
I made some edits to the text on my site.
Giving some detail about projects and what I'm working on.

2025-01-13
22:52 
I'm back, Had to work a couple of days straight at walmart.

23:45
I have been trying to create a website visit counter
I used dynamodb to create a serverless storage and intialised a lambda function
The deployment worked but I tried curling and using the UI link but there was an internal server error.
I searched to find out what it could mean and I fould it was a permissions issue. Lambdas IAM role does not have the getitem and put item policy.
I said fuckiit and gave it full access. FORNOW xD.


2025-01-14
01:10
I'm losing my mind with this troubleshooting.
I tried fixing the permissions because I felt it wasn't okay to just give full access.
I added singular policies and failed.
So I tried to allow unlimited acces to dynamodb from lambda again
Didin't work.
I'll try again when I wake up.
.....

2025-01-15
22:16
Got back from walmart shift. Back on the project.
The Goal today is to make some edits to the website to practice my html and css. 
Also I would like to continue troubleshooting the previous permission issue with my lambda function.


2025-01-18
I began learning terraform to automate the deployment of Iaac on AWS.

2025-01-20
I spent 2 hours trying to debug an issue with my terraform code.
Issue: I had left my AWS Akey and Skey in the code while committing.
I could not commit so I had to learn how to edit a previous commit using the git filter-repo tool. Most frustrasting so far. But fun :).

2025-01-21
Made some edits to the website
I will continue on the 23rd.
