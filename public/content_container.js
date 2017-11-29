(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['content_container'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"content-container\">\r\n	<h2 class=\"post-title\">"
    + alias4(((helper = (helper = helpers.postTitle || (depth0 != null ? depth0.postTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postTitle","hash":{},"data":data}) : helper)))
    + "</h2>\r\n	<p class=\"username\">"
    + alias4(((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userName","hash":{},"data":data}) : helper)))
    + "</p>\r\n	<p class=\"post-content\">"
    + alias4(((helper = (helper = helpers.postContent || (depth0 != null ? depth0.postContent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postContent","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>";
},"useData":true});
})();