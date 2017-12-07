(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['comment'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

<<<<<<< HEAD
  return "<div class=\"comment\">\n	<div class=\"username\">"
    + alias4(((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userName","hash":{},"data":data}) : helper)))
    + "</div>\n	<div class=\"comment-content\">"
    + alias4(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</div>\n</div>";
=======
  return "		<div class=\"comment\">\n			<p class=\"username\">"
    + alias4(((helper = (helper = helpers.commentUsername || (depth0 != null ? depth0.commentUsername : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentUsername","hash":{},"data":data}) : helper)))
    + "</p>\n			<p class=\"comment-content\">"
    + alias4(((helper = (helper = helpers.commentContent || (depth0 != null ? depth0.commentContent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentContent","hash":{},"data":data}) : helper)))
    + "</p>\n		</div>\n";
>>>>>>> alpha
},"useData":true});
})();