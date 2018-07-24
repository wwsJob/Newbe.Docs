--------------------------------------------------------------------------------

{% for post in site.posts reversed %}

{% if post.NavBuildYourOwnBlogForFree != true %} {% continue %} {% endif %}

{% if post.releaseNodes == true %} {% continue %} {% endif %}

[{{ post.title }}]({{ site.baseurl }}{{ post.url }})

{% endfor %}
