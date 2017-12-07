(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['content_container'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.comment,depth0,{"name":"comment","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<<<<<<< HEAD\r\n<div class=\"post\" data-dislikes=\"0\">\r\n    <div class=\"post-container\">\r\n        <div class=\"button-container\">\r\n            <button class=\"dislike-button\">\r\n                <div>0</div>\r\n                <div>⬇⬇️</div>\r\n            </button>\r\n            <button class=\"comment-button\">comment</button>\r\n        </div>\r\n        <div class=\"content-container\">\r\n            <h2 class=\"post-title\">"
    + alias4(((helper = (helper = helpers.postTitle || (depth0 != null ? depth0.postTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postTitle","hash":{},"data":data}) : helper)))
    + "</h2>\r\n            <p class=\"username\">"
    + alias4(((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userName","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p class=\"post-content\">"
    + alias4(((helper = (helper = helpers.postContent || (depth0 != null ? depth0.postContent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postContent","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"comment-container\">\r\n    </div>\r\n</div>\r\n=======\r\n<div class=\"post\" data-dislikes=\""
    + alias4(((helper = (helper = helpers.NumDislikes || (depth0 != null ? depth0.NumDislikes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NumDislikes","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"post-container\">\r\n		<div class=\"button-container\">\r\n			<button class=\"dislike-button\">\r\n				<div>"
    + alias4(((helper = (helper = helpers.NumDislikes || (depth0 != null ? depth0.NumDislikes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NumDislikes","hash":{},"data":data}) : helper)))
    + "</div>\r\n				<div>⬇</div>\r\n			</button>\r\n			<button class=\"comment-button\">comment</button>\r\n		</div>\r\n		<div class=\"content-container\">\r\n			<h2 class=\"post-title\">"
    + alias4(((helper = (helper = helpers.postTitle || (depth0 != null ? depth0.postTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postTitle","hash":{},"data":data}) : helper)))
    + "</h2>\r\n			<p class=\"username\">"
    + alias4(((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userName","hash":{},"data":data}) : helper)))
    + "</p>\r\n			<p class=\"post-content\">"
    + alias4(((helper = (helper = helpers.postContent || (depth0 != null ? depth0.postContent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postContent","hash":{},"data":data}) : helper)))
    + "</p>\r\n		</div>\r\n	</div>\r\n	<div class=\"comment-container\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n</div>\r\n>>>>>>> alpha\r\n";
},"usePartial":true,"useData":true});
})();