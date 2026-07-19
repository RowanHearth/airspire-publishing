---
layout: page
title: "Mistworld"
permalink: /series/mistworld
nav_exclude: true
---
<p><i>Mistworld</i> is a YA epic fantasy adventure about a young hunter who refuses to accept that her dying world is beyond saving.</p> 
<p>With her friends by her side, Maeryn must uncover the truth behind the Mist before there is nothing left to save.</p>
<table class="recent-releases">
{% assign sorted_books = site.books | sort:"book_number" %}
{% for book in sorted_books %}
    <tr>
        <td>
            <a href="https://www.amazon.com/gp/product/{{book.amazon_id}}"><img src="{{ book.image_ref | relative_url }}" alt="{{book.name}}"></a>
            <br/>
            <a href="https://www.amazon.com/gp/product/{{book.amazon_id}}">Available on Amazon</a>
        </td>
        <td>
            <p style="font-size:large; font-weight:bold">{{book.blurb_opener}}</p>
            {% for body in book.blurb_body %}
                <p>{{body}}</p>    
            {% endfor %}
            <p style="font-weight:bold;font-style:italic">
                {% for body in book.blurb_closer %}
                    {{body}}<br/>
                {% endfor %}
            </p>
        </td>
    </tr>
{% endfor %}
</table>