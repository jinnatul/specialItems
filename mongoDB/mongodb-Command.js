Start MongoDB: sudo service mongod start
Stop MongoDB: sudo service mongod stop
Restart MongoDB: sudo service mongod restart
Begin using MongoDB: mongo



db create: db (name)  Ex: db customer

database show: db

create user:
db.createUser({user:"morol",pwd:"1234",roles: ["readWrite", "dbAdmin"]});

collection create (table)
db.createCollection('table');


***
Insert data on collection:
db.table.insert({first_name: "Jinnat", last_name: "Morol"});
db.table.insert([{first_name: "Arif", last_name: "Mia"}, {first_name: "Farhana", last_name: "Morol", gender: "Female"}]);


***
Update data on collection:
db.table.update({first_name:"Jinnat"},{first_name:"Jinnat",last_name:"Morol",Age:"23", Gender:"Male"});
db.table.find();
{ "_id" : ObjectId("5d26df27109c1daca9ec6ba9"), "first_name" : "Arif", "last_name" : "Mia" }
{ "_id" : ObjectId("5d26df27109c1daca9ec6baa"), "first_name" : "Farhana", "last_name" : "Morol", "gender" : "Female" }
{ "_id" : ObjectId("5d26df54109c1daca9ec6bab"), "Age" : "23", "Gender" : "Male" }
{ "_id" : ObjectId("5d26e507109c1daca9ec6bac"), "first_name" : "Jinnat", "last_name" : "Morol", "Age" : "23", "Gender" : "Male" }


***
Search/Find data from collection:
db.table.find({first_name:"Jinnat"});
{ "_id" : ObjectId("5d26e507109c1daca9ec6bac"), "first_name" : "Jinnat", "last_name" : "Morol", "Age" : "23", "Gender" : "Male" }


***
Remove data from collection:
db.table.find();
{ "_id" : ObjectId("5d26df27109c1daca9ec6baa"), "first_name" : "Farhana", "last_name" : "Morol", "gender" : "Female" }
{ "_id" : ObjectId("5d26e71b109c1daca9ec6bad"), "first_name" : "Jinnat", "last_name" : "morol", "gender" : "male" }
{ "_id" : ObjectId("5d26e72e109c1daca9ec6bae"), "first_name" : "arif", "last_name" : "mia", "gender" : "male" }

> db.table.remove({first_name:"arif"});

> db.table.find();
{ "_id" : ObjectId("5d26df27109c1daca9ec6baa"), "first_name" : "Farhana", "last_name" : "Morol", "gender" : "Female" }
{ "_id" : ObjectId("5d26e71b109c1daca9ec6bad"), "first_name" : "Jinnat", "last_name" : "morol", "gender" : "male" }

show data from table (search):
db.table.find();
{ "_id" : ObjectId("5d26df54109c1daca9ec6bab"), "first_name" : "Jinnat", "last_name" : "Morol" }

db.table.find().pretty();  (json format)
{
	"_id" : ObjectId("5d26df27109c1daca9ec6ba9"),
	"first_name" : "Arif",
	"last_name" : "Mia"
}
{
	"_id" : ObjectId("5d26df27109c1daca9ec6baa"),
	"first_name" : "Farhana",
	"last_name" : "Morol",
	"gender" : "Female"
}
{
	"_id" : ObjectId("5d26df54109c1daca9ec6bab"),
	"first_name" : "Jinnat",
	"last_name" : "Morol"
}


db.table.find({last_name: "Morol"})
{ "_id" : ObjectId("5d26df27109c1daca9ec6baa"), "first_name" : "Farhana", "last_name" : "Morol", "gender" : "Female" }
{ "_id" : ObjectId("5d26df54109c1daca9ec6bab"), "first_name" : "Jinnat", "last_name" : "Morol" }


count element:
db.table.find().count();
3

sort:
Assending:
db.table.find().sort({last_name:1});
{ "_id" : ObjectId("5d26df27109c1daca9ec6ba9"), "first_name" : "Arif", "last_name" : "Mia" }
{ "_id" : ObjectId("5d26df27109c1daca9ec6baa"), "first_name" : "Farhana", "last_name" : "Morol", "gender" : "Female" }
{ "_id" : ObjectId("5d26df54109c1daca9ec6bab"), "first_name" : "Jinnat", "last_name" : "Morol" }

Dessending:
db.table.find().sort({last_name:-1});
{ "_id" : ObjectId("5d26df27109c1daca9ec6baa"), "first_name" : "Farhana", "last_name" : "Morol", "gender" : "Female" }
{ "_id" : ObjectId("5d26df54109c1daca9ec6bab"), "first_name" : "Jinnat", "last_name" : "Morol" }
{ "_id" : ObjectId("5d26df27109c1daca9ec6ba9"), "first_name" : "Arif", "last_name" : "Mia" }



db.table.find().forEach(function(value){ print("Customer name: " + value.first_name)});
Customer name: Arif
Customer name: Farhana
Customer name: Jinnat
