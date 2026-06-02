export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rami Kanawati",
    url: "https://ramikanawati.com",
    image: "https://ramikanawati.com/og-image.png",
    jobTitle: "Tech Lead & Co-founder",
    worksFor: {
      "@type": "Organization",
      name: "Makkinni LLC"
    },
    sameAs: [
      "https://www.linkedin.com/in/rkanawati96",
      "https://github.com/ramikanawati",
      "https://www.youtube.com/channel/UCSKbvK9feFJpXkNOyoxODDQ"
    ],
    knowsAbout: [
      "Full-Stack Development",
      "Next.js",
      "React Native",
      "ASP.NET Core",
      "AI Agents",
      "LLM Integration",
      "Cloud Architecture",
      "Product Leadership"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      url: "https://ramikanawati.com#contact",
      contactType: "Professional Inquiry"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
