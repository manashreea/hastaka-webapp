# hastaka-webapp

>>pm2 command
sudo pm2 restart/start "/usr/lib/node_modules/npm" --name "hastaka-webapp" -- start


#json-server
>> Install jsoon-server global
npm install -g json-server

>> This create local storage of json data with creating json-server
>> Go to db.json file path >> [src\assets\data\]
>> Run below command to run local json-server
json-server db.json --port 5001  (Default port is 3000 if not mentioned --port)



