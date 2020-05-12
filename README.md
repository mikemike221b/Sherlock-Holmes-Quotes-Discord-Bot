# Sherlock-Holmes-Quotes-Discord-Bot
A discord bot to send quotes from the classic consulting detective Sherlock Holmes written originally by Sir Arthur Conan Doyle


# Requierments And Installations
To run the bot you need to have Node.JS and NPM installed.
### Windows Instlation:
Go to this link: https://nodejs.org/en/
and download the latest version of the software which in cludes NPM
### Linux Instalation
##### Way 1:  Automatic Install (Recommended)
Make setup.sh executable by typing in the command

    chmod +x setup.sh
    
Then run the setup.sh file and go through the installation process with this command
    
    ./setup.sh

##### Way 2:  Manual Install
First install Node.JS by using the following command

    sudo apt-get install node npm

Once you got them run the these commands:

    npm init -y

and then 

    npm install --save discord.js dotenv

these 2 will install the required dependincies

# Run The Bot
### In Linux
There are 2 ways to run the bot
#### Way 1: Automatic (Recommended)
Make start.sh an executable with this command:

    chmod +x start.sh
    
Then execute it with

    ./start.sh
    
#### Way 2: Manual:
Run the main bot script with
    
    node bot.js

### In Windows
In Windows we got 2 ways of running the bot
#### Way 1: Automatic (Reccomended)
Run start.bat file

#### Wat 2: Manual
start the command prompt and locate to the bot folde with this command
    
    cd LOCATION_OF_YOUR_FILE
    
Run the bot script with

    node bot.js
    
# Self Hosting
Please do NOT self host without changing the name of the bot and giving credit 
