# job-posting-formatter
Easily generate JSON-LD structured data for job postings in Google for Jobs searches.

## Background
I created this simple web app to make it easy for the Kaimuki YMCA organization
to add the structured data to their job postings. This should help them increase
visibility of their job openings. It doesn't include salary information because
they don't normally provide it.

Google for Jobs can substantially increase the number of searchers who see your
job postings, but only if the Google web crawler can access them. Job listing
web pages must be indexable and follow good SEO practices, otherwise Google will
ignore them. See **6 Ways to Make Your Careers Site More
Accessible** in the **Links** section below.

## How to use

  - Just click on the job-posting.html link or open the file.
  - Fill in the blanks with a single job posting.
  - Click on the **Show HTML to embed** button to format an HTML snippet.
  - Copy and paste the snippet into your web page source.

Once you website page has the job posting snippet, Google will automatically see
that data and will make your job posting available in searches. It will take a
day or so depending how fast and often Google crawls your website.

You can check you job posting structured data this way:

  - Copy and paste the snippet into Google's **Structured Data Testing
    Tool** (see **Links** section below).
  - After checking the snippet, preview the job search results by clicking on
    the JobPosting item. From there, click on the Preview button.

## Developers information

### Example of structured data for a job posting

Here's an example of the structured data from Google's
documentation on **Job Posting content type** (see **Links** section below)
taken from the markup of the example in the **Structured Data Testing
Tool**:

```javascript
<script type="application/ld+json"> {
  "@context" : "http://schema.org/",
  "@type" : "JobPosting",
  "title" : "Fitter and Turner",
  "description" : "<p>Widget assembly role for pressing wheel assemblies.</p>
    <p><strong>Educational Requirements:</strong> Completed level 2 ISTA
    Machinist Apprenticeship.</p>
    <p><strong>Required Experience:</strong> At
    least 3 years in a machinist role.</p>",
  "identifier": {
    "@type": "PropertyValue",
    "name": "MagsRUs Wheel Company",
    "value": "1234567"
  },
  "datePosted" : "2017-01-18",
  "validThrough" : "2017-03-18T00:00",
  "employmentType" : "CONTRACTOR",
  "hiringOrganization" : {
    "@type" : "Organization",
    "name" : "MagsRUs Wheel Company",
    "sameAs" : "http://www.magsruswheelcompany.com",
    "logo" : "http://www.example.com/images/logo.png"
  },
  "jobLocation" : {
    "@type" : "Place",
    "address" : {
      "@type" : "PostalAddress",
      "streetAddress" : "555 Clancy St",
      "addressLocality" : "Detroit",
      "addressRegion" : "MI",
      "postalCode" : "48201",
      "addressCountry": "US"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": {
      "@type": "QuantitativeValue",
      "value": 40.00,
      "unitText": "HOUR"
    }
  }
}
</script>
```


### Guidelines to follow

From **Structured Data General Guidelines** (see **Links** section below), keep
these in mind:

  - Preferred format is JSON-LD, **JSON for Linking Data** (see **Links**
    section below).
  - Do not block your structured data pages to Googlebot using robots.txt,
    noindex, or any other access control methods.
  - Put the structured data on the page that it describes
  - If you have duplicate pages for the same content, you should put the same
    structured data in all page duplicates, not just the canonical page.


### Links

* [Job Posting (Content Type)](https://developers.google.com/search/docs/data-types/job-posting)
* [How to Optimize Job Listings for Google Search](https://www.shrm.org/resourcesandtools/hr-topics/talent-acquisition/pages/google-job-listings-search-seo-ats.aspx)
* [6 Ways to Make Your Careers Site More Accessible](https://www.shrm.org/resourcesandtools/hr-topics/talent-acquisition/pages/6-ways-to-make-your-careers-site-more-accessible.aspx)
* [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/u/0/)
* [Introduction to Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data)
* [Build, Test, and Release Your Structured Data](https://developers.google.com/search/docs/guides/prototype)
* [Structured Data General Guidelines](https://developers.google.com/search/docs/guides/sd-policies)
* [About Search Features](https://developers.google.com/search/docs/guides/search-features)
* [JSON for Linking Data](https://json-ld.org/)
