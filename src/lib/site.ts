type SiteConfig = {
  name: string;
  tagline: string;
  owner: string;
  /** Short, plain-language summary. Used for metadata and link previews. */
  description: string;
  /** Who the work is for. Shown in the hero badge. */
  audience: string;
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
  name: "Abdirahman Systems",
  tagline: "AI Automation & Business Systems",
  owner: "Abdirahman",
  description:
    "I help local businesses stop losing customers between the first message and the follow-up. I build simple systems that capture every lead, organize the details, and draft a reply the owner approves.",
  audience: "Built for local service businesses",
  email: "abdirahmansheikh413@gmail.com",
  photo: "",
  linkedin: "https://www.linkedin.com/in/abdirahman-sheikh-034185296/",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
};
