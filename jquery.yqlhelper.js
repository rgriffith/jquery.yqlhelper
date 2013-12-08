/*
 * jquery.yqlhelper.js
 *
 * YQl Helper is a jQuery plugin that provides a simple way to query YQL
 * http://developer.yahoo.com/yql/
 *
 * Documentation:   http://github.com/rgriffith/jquery.yqlhelper
 * Support:         https://github.com/rgriffith/jquery.yqlhelper/issues
 * Bug Fixes:       https://github.com/rgriffith/jquery.yqlhelper/pulls
 * Author:          Ryan Griffith
 *
 * Contribute:
 *
 * If YQL Helper has been beneficial to you and you'd like to give back, feel free to fork and create a
 * pull request.
 *
 * License:
 *
 * This software is open source and free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

(function ($) {
  $.YQL = {
    query: function (query, opts) {
      opts = opts || {};
      var dfr = $.Deferred(),
        type = opts.type || "json",
        scheme = opts.scheme || (document.location.protocol === "https:" ? "https" : "http"),
        envUrl = opts.envUrl || undefined,
        maxAge = opts.maxAge || 90000,
        url = scheme + "://query.yahooapis.com/v1/public/yql",
        data = {
          format: type,
          q: query,
          _maxage: maxAge
        };

      if (envUrl === "all") {
        envUrl = scheme + "://datatables.org/alltables.env";
      }

      if (envUrl) {
        data.env = envUrl;
      }

      $.ajax({
        url: url,
        data: data,
        cache: true,
        dataType: "jsonp",
        jsonpCallback: "cbfunc",
        error: dfr.reject
      });

      cbfunc = function(data) {
        dfr.resolve(data);
      };

      return dfr.promise();
    }
  };
}(jQuery));