var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Mongoc.jl",
    "title": "Mongoc.jl",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Mongoc.jl-1",
    "page": "Mongoc.jl",
    "title": "Mongoc.jl",
    "category": "section",
    "text": "MongoDB driver for the Julia Language.This is a thin wrapper around libmongoc, the official client library for C applications."
},

{
    "location": "index.html#Requirements-1",
    "page": "Mongoc.jl",
    "title": "Requirements",
    "category": "section",
    "text": "MongoDB 3.0 or newer\nOn Linux x64: Julia v0.6, v0.7, v1.0.\nOn Mac: Julia v0.7, v1.0."
},

{
    "location": "index.html#MongoDB-C-Driver-1",
    "page": "Mongoc.jl",
    "title": "MongoDB C Driver",
    "category": "section",
    "text": "This packages downloads precompiled binaries for MongoDB C Driver v1.12.0 from mongo-c-driver-builder.The binaries are compiled by Travis CI, using BinaryBuilder.jl.Windows is currently not supported because the C driver requires Visual Studio to be compiled.If your platform is not supported and can be compiled by BinaryBuilder.jl, please open an issue."
},

{
    "location": "index.html#Instructions-1",
    "page": "Mongoc.jl",
    "title": "Instructions",
    "category": "section",
    "text": "The public API for this package is available at api.jl source file.Check tests/runtests.jl for code examples."
},

{
    "location": "api.html#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "api.html#Mongoc.BSON",
    "page": "API",
    "title": "Mongoc.BSON",
    "category": "type",
    "text": "BSON is a wrapper for C struct bson_t.\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.BSONError",
    "page": "API",
    "title": "Mongoc.BSONError",
    "category": "type",
    "text": "Mirrors C struct bson_error_t and can be allocated in the stack.\n\nBSONError instances addresses are passed to libbson/libmongoc API using Ref(error), and are owned by the Julia process.\n\ntypedef struct {\n   uint32_t domain;\n   uint32_t code;\n   char message[504];\n} bson_error_t;\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.BSONIter",
    "page": "API",
    "title": "Mongoc.BSONIter",
    "category": "type",
    "text": "BSONIter mirrors C struct bsonitert and can be allocated in the stack.\n\nAccording to libbson documentation, it is meant to be used on the stack and can be discarded at any time as it contains no external allocation. The contents of the structure should be considered private and may change between releases, however the structure size will not change.\n\nInspecting its size in C, we get:\n\nsizeof(bson_iter_t) == 80\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.BSONObjectId",
    "page": "API",
    "title": "Mongoc.BSONObjectId",
    "category": "type",
    "text": "Mirrors C struct bson_oid_t.\n\nBSONObjectId instances addresses are passed to libbson/libmongoc API using Ref(oid), and are owned by the Julia process.\n\ntypedef struct {\n   uint8_t bytes[12];\n} bson_oid_t;\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.BSONType",
    "page": "API",
    "title": "Mongoc.BSONType",
    "category": "type",
    "text": "BSONType mirrors C enum bsontypet.\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.Client",
    "page": "API",
    "title": "Mongoc.Client",
    "category": "type",
    "text": "Client is a wrapper for C struct mongoc_client_t.\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.Collection",
    "page": "API",
    "title": "Mongoc.Collection",
    "category": "type",
    "text": "Collection is a wrapper for C struct mongoc_collection_t.\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.Cursor",
    "page": "API",
    "title": "Mongoc.Cursor",
    "category": "type",
    "text": "Cursor is a wrapper for C struct mongoc_cursor_t.\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.Database",
    "page": "API",
    "title": "Mongoc.Database",
    "category": "type",
    "text": "Database is a wrapper for C struct mongoc_database_t.\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.URI",
    "page": "API",
    "title": "Mongoc.URI",
    "category": "type",
    "text": "URI is a wrapper for C struct mongoc_uri_t.\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.as_json-Tuple{Mongoc.BSON}",
    "page": "API",
    "title": "Mongoc.as_json",
    "category": "method",
    "text": "as_json(bson::BSON; canonical::Bool=false) :: String\n\nConverts a bson object to a JSON string.\n\nExample\n\njulia> document = Mongoc.BSON(\"{ \"hey\" : 1 }\")\nBSON(\"{ \"hey\" : 1 }\")\n\njulia> Mongoc.as_json(document)\n\"{ \"hey\" : 1 }\"\n\njulia> Mongoc.as_json(document, canonical=true)\n\"{ \"hey\" : { \"$numberInt\" : \"1\" } }\"\n\nC API\n\nbson_as_canonical_extended_json\nbson_as_relaxed_extended_json\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.command_simple-Tuple{Mongoc.Client,String,Mongoc.BSON}",
    "page": "API",
    "title": "Mongoc.command_simple",
    "category": "method",
    "text": "command_simple(client::Client, database::String, command::Union{String, BSON}) :: BSON\n\nExecutes a command given by a JSON string or a BSON instance.\n\nIt returns the first document from the result cursor.\n\nExample\n\njulia> client = Mongoc.Client() # connects to localhost at port 27017\nClient(URI(\"mongodb://localhost:27017\"))\n\njulia> bson_result = Mongoc.command_simple(client, \"admin\", \"{ \"ping\" : 1 }\")\nBSON(\"{ \"ok\" : 1.0 }\")\n\nC API\n\nmongoc_client_command_simple\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.find_one",
    "page": "API",
    "title": "Mongoc.find_one",
    "category": "function",
    "text": "find_one(collection::Collection, bson_filter::BSON=BSON(); options::Union{Nothing, BSON}=nothing) :: Union{Nothing, BSON}\n\nExecute a query to a collection and returns the first element of the result set.\n\nReturns nothing if the result set is empty.\n\n\n\n\n\n"
},

{
    "location": "api.html#Mongoc.set_appname!-Tuple{Mongoc.Client,String}",
    "page": "API",
    "title": "Mongoc.set_appname!",
    "category": "method",
    "text": "set_appname!(client::Client, appname::String)\n\nSets the application name for this client.\n\nThis string, along with other internal driver details, is sent to the server as part of the initial connection handshake.\n\nC API\n\nmongoc_client_set_appname.\n\n\n\n\n\n"
},

{
    "location": "api.html#API-1",
    "page": "API",
    "title": "API",
    "category": "section",
    "text": "Modules = [Mongoc]"
},

]}
