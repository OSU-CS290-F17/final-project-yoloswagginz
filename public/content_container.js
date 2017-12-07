(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['content_container'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = container.invokePartial(partials.comment,depth0,{"name":"comment","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post\" data-dislikes=\""
    + alias4(((helper = (helper = helpers.NumDislikes || (depth0 != null ? depth0.NumDislikes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NumDislikes","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"post-container\">\n        <div class=\"button-container\">\n            <button class=\"dislike-button\">\n                <div>"
    + alias4(((helper = (helper = helpers.NumDislikes || (depth0 != null ? depth0.NumDislikes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NumDislikes","hash":{},"data":data}) : helper)))
    + "</div>\n                <div>⬇</div>\n            </button>\n            <button class=\"comment-button\">comment</button>\n        </div>\n        <div class=\"content-container\">\n            <h2 class=\"post-title\">"
    + alias4(((helper = (helper = helpers.postTitle || (depth0 != null ? depth0.postTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postTitle","hash":{},"data":data}) : helper)))
    + "</h2>\n            <p class=\"username\">"
    + alias4(((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userName","hash":{},"data":data}) : helper)))
    + "</p>\n            <p class=\"post-content\">"
    + alias4(((helper = (helper = helpers.postContent || (depth0 != null ? depth0.postContent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postContent","hash":{},"data":data}) : helper)))
    + "</p>\n        </div>\n    </div>\n    <div class=\"comment-container\">\n        "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n</div>";
},"usePartial":true,"useData":true});
})();