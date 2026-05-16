export default function sitemap() {
  const baseUrl = 'https://cybernova.systems';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/work`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/studio`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/process`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/news`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
  ];
}
