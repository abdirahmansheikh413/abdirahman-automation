type SiteConfig = {
  name: string;
  tagline: string;
  owner: string;
  description: string;
  /** Shown on the page and used as the contact form's fallback recipient. */
  email: string;
  /** Optional photo in /public, e.g. "/abdirahman.jpg". Leave empty to show an initial instead. */
  photo: string;
  /** Optional LinkedIn profile URL. Leave empty to hide the link. */
  linkedin: string;
  /**
   * Optional form service endpoint (e.g. a Formspree form URL).
   * When empty, the contact form opens the visitor's email app with their message filled in.
   */
  formEndpoint: string;
};

export const site: SiteConfig = {
  name: "Abdirahman Automation",
  tagline: "AI Automation & Business Systems",
  owner: "Abdirahman",
  description:
    "I help local businesses respond to leads faster, stay organized, and stop potential customers from getting forgotten.",
  email: "abdirahmansheikh413@gmail.com",
  photo: "",
  linkedin: "https://www.linkedin.com/in/abdirahman-sheikh-034185296/",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
};
