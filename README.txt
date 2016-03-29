Explain, generally, what is meant by a NoSQL database.

Meaning NOT a SQL Database and therefore also not relational database.
The data structures used by NoSQL databases (e.g. key-value, wide column, graph, or document)
are different from those used by default in relational databases, making some operations faster in NoSQL.

Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional
Relational SQL Database like MySQL.

Pros:
Your application, enforces the data’s structure. This can speed up initial
application development when the schema is changing frequently.

Creating the database isn’t required. Databases and collections are created only
when documents are first inserted.

Cons:
Joins aren’t supported
No support for transactions - certain atomic operations are supported, at a single document level


Explain how databases like MongoDB and redis would be classified in the NoSQL world

Redis:
Redis is often described as an in-memory persistent key-value store. Key values can be simple strings,
but they can also be more complex types like Hashes, Lists, Sets, or Sorted Sets (ordered/ranked collection of non-repeating values).
The entire data set is stored in-memory so it is extremely fast.

MongoDB:
MongoDB is a database management system designed for web applications and internet infrastructure.
The data model and persistence strategies are built for high read and write throughput
and the ability to scale easily with automatic failover.
MongoDB’s data model is document-oriented. MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents,
though it contains more data types than JSON. The values can be simple data types, such as strings, numbers, and dates.
But these values can also be arrays and even other documents


Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB

Many developers come from SQL database types, and feel very uncomfortable working with dynamic collections that have no any structure defined.
So Schemas in first place helps with that. Additionally to that it implements validation and other features in order to make sure your schema is well satisfied,
when inserting/updating/finding documents from collections.

Explain, using relevant examples, the strategy for querying MongoDB (all CRUD operations)

See Model/jokesMongo.js and test/testJokes.js

Demonstrate, using a REST-API, how to perform all CRUD operations on a MongoDB

See routes/index.js

Explain the benefits from using Mongoose, and provide an example involving all CRUD operations

Mongoose is an object modeling package for Node that essentially works like an ORM.
Moongoose uses models. Models are constructors that we define, which represent documents.
They define structure for our documents.

CRUD see: userMongoose.js

Explain how redis "fits" into the NoSQL world, and provide an example of how to use it.

Redis is often described as an in-memory persistent key-value store. Key values can be simple strings,
but they can also be more complex types like Hashes, Lists, Sets, or Sorted Sets (ordered/ranked collection of non-repeating values).
The entire data set is stored in-memory so it is extremely fast.

See: redisEx.js


Explain, using a relevant example, how redis (or a similar) can increase scalability (drastic) for a server using
server side sessions:



Explain, using a relevant example, a full MEAN application including relevant test cases to test the REST-API
(not on the production database)