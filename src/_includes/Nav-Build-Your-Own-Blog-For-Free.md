=========================更多内容分割线=========================

{% for post in site.posts %}

{% if post.NavBuildYourOwnBlogForFree != true %} {% continue %} {% endif %}

{% if post.releaseNodes == true %} {% continue %} {% endif %}

[{{ post.title }}]({{ site.baseurl }}{{ post.url }})

{% endfor %}
