window.onload = function () {
  var tmpl = "\u003Cscript type=\"application/ld+json\"> {\n" +
"  \"@context\" : \"http://schema.org/\",\n" +
"  \"@type\" : \"JobPosting\",\n" +
"  \"title\" : \"{{title}}\",\n" +
"  \"description\" : \"{{description}}\",\n" +
"  \"identifier\": {\n" +
"    \"@type\" : \"PropertyValue\",\n" +
"    \"name\" : \"Kaimuki YMCA\",\n" +
"    \"value\" : \"{{postingId}}\"\n" +
"  },\n" +
"  \"datePosted\" : \"{{datePosted}}\",\n" +
"  \"validThrough\" : \"{{validThrough}}\",\n" +
"  \"employmentType\" : \"{{employmentType}}\",\n" +
"  \"hiringOrganization\" : {\n" +
"    \"@type\" : \"Organization\",\n" +
"    \"name\" : \"{{name}}\",\n" +
"    \"sameAs\" : \"{{sameAs}}\",\n" +
"    \"logo\" : \"{{logo}}\"\n" +
"  },\n" +
"  \"jobLocation\" : {\n" +
"    \"@type\" : \"Place\",\n" +
"    \"address\" : {\n" +
"      \"@type\" : \"PostalAddress\",\n" +
"      \"streetAddress\" : \"{{streetAddress}}\",\n" +
"      \"addressLocality\" : \"{{addressLocality}}\",\n" +
"      \"addressRegion\" : \"{{addressRegion}}\",\n" +
"      \"postalCode\" : \"{{postalCode}}\",\n" +
"      \"addressCountry\": \"US\"\n" +
"    }\n" +
"  }\n" +
"}\n" +
"\u003C/script>";

  function spaces2html(line) {
    // convert leading spaces to non-breaking space entities
    return new Array(line.length + 1).join('&nbsp;')
  }

  function line2html(line) {
    // convert line to HTML paragraph
    return line.replace(/^(\s)+/, spaces2html);
  }

  function formatLineBreak(str) {
    var lines = str.split("\n");
    return lines.map(function (x) {return line2html(x) + "<br>"}).join("\n");
  }

  // handle no data and missing properties
  var render = function (data) {
    return data ?
      tmpl.replace("{{name}}",data['name']||'')
          .replace("{{sameAs}}",data['sameAs']||'')
          .replace("{{logo}}",data['logo']||'')
          .replace("{{title}}", data['title']||'')
          .replace("{{description}}",data['description']||'')
          .replace("{{postingId}}",data['postingId']||'')
          .replace("{{datePosted}}",data['datePosted']||'')
          .replace("{{validThrough}}",data['validThrough']||'')
          .replace("{{employmentType}}",data['employmentType']||'')
          .replace("{{streetAddress}}",data['streetAddress']||'')
          .replace("{{addressLocality}}",data['addressLocality']||'')
          .replace("{{addressRegion}}",data['addressRegion']||'')
          .replace("{{postalCode}}",data['postalCode']||'')
      :
        {};
  }

  function getValue(elem) {
    var item = document.getElementsByName(elem);
    if (item.length < 1)
      return '';
    return item[0].value.trim();
  }

  var sbtn = document.getElementsByName("submit")[0];
  sbtn.onclick = function () {
    var data = {};
    data.name = getValue("name");
    data.sameAs = getValue("sameAs");
    data.logo = getValue("logo");
    data.title = getValue("title");
    data.streetAddress = getValue("streetAddress");
    data.addressLocality = getValue("addressLocality");
    data.addressRegion = getValue("addressRegion");
    data.postalCode = getValue("postalCode");
    data.description = formatLineBreak(getValue("description"));
    data.datePosted = getValue("datePosted");
    data.validThrough = getValue("validThrough");
    data.employmentType = getValue("employmentType");
    data.postingId = getValue("postingId");

    document.getElementsByTagName("pre")[0].innerText = render(data);
  }

  var cbtn = document.getElementsByName("clear")[0];
  cbtn.onclick = function () {
    document.getElementsByTagName("pre")[0].innerText = " ";
  }
}
