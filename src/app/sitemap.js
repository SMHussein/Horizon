export default async function sitemap() {
  const siteUrl = process.env.PUBLIC_SITE_URL;
  const lastModified = process.env.LAST_MODIFIED_DATE;

  return [
    {
      url: `${siteUrl}`,
      lastModified,
      changefreq: "monthly",
      priority: 1.0,
    },
  ];
}
