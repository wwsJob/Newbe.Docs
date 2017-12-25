--------------------------------------------------------------------------------

教程链接：

{% for post in site.posts %} {% if post.mahua != true %} {% continue %} {% endif %}

[{{ post.title }}]({{ site.baseurl }}{{ post.url }})

{% endfor %}
