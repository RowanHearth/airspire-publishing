---
layout: page
title: "Series"
permalink: /series
---
{% for series in site.series %}
<h2><a href="{{series.link}}"><i>{{series.name}}</i></a></h2>
<table>
    <tr>
        <th>Author</th>
        <td>{{series.author}}</td>
    </tr>
    <tr>
        <th>Genres</th>
        <td>{{series.genres}}</td>
    </tr>
    <tr>
        <th>Books Released</th>
        <td>{{series.books_published}}</td>
    </tr>
    <tr>
        <th>Books Planned</th>
        <td>{{series.books_total}}</td>
    </tr>
    <tr>
        <th>Summary</th>
        <td>{{series.summary}}</td>
    </tr>
</table>
{% endfor %}
