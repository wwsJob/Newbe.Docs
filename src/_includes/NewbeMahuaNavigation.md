--------------------------------------------------------------------------------

# 教程链接

{% for post in site.posts %}

{% if post.mahua != true %} {% continue %} {% endif %}

{% if post.releaseNodes == true %} {% continue %} {% endif %}

[{{ post.title }}]({{ site.baseurl }}{{ post.url }})

{% endfor %}

# 发布说明

{% for post in site.posts %}

{% if post.mahua != true %} {% continue %} {% endif %}

{% if post.releaseNodes != true %} {% continue %} {% endif %}

[{{ post.title }}]({{ site.baseurl }}{{ post.url }})

{% endfor %}
