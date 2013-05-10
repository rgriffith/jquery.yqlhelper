TITLE
=====

jQuery Plugin: YQL Helper - version 0.1


DESCRIPTION
===========

Provides a simple way to query [YQL](http://developer.yahoo.com/yql/) using jQuery Deferred objects.

YQL querying logic adopted from http://developer.yahoo.com/yql/

Usage
=====

Query YQL:

    var statement = "select * from feed where url='http://example.com/rss'";
    $.YQL.query(statement).then(function (data) {
      // do something with "data".
    });

Query YQL with output type og JSON:

    var statement = "select * from feed where url='http://example.com/rss'";
    $.YQL.query(statement, {type: "json"}).then(function (data) {
      // do something with "data".
    });

Query YQL with JSONP-X:

    var statement = "select * from html where url='http://example.com/' and xpath='//h1'";
    $.YQL.query(statement, {type: "xml"}).then(function (data) {
      // do something with "data".
    });

Query YQL with Open Data Table:

    var statement = "select * from github.users where user='github'";
    $.YQL.query(statement, {envUrl: "all"}.then(function (data) {
      // do something with "data".
    });

Query YQL with Open Data Table (custom URL):

    var statement = "select * from github.users where user='github'";
    $.queryYQL(statement, "http://example.com/tables.env", function (data) {
      // do something with "data".
    });


Contributing
=======

If YQL Helper has been beneficial to you and you'd like to give back, feel free to fork and create a pull request.