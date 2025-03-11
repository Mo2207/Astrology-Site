
// scroll function for navigation
export const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: elementPosition, behavior: "smooth" });
  }
};

export const navs = [
  { id: 1, name: "About", href: "about" },
  { id: 2, name: "Course", href: "course" },
  { id: 3, name: "Reviews", href: "reviews" },
  { id: 4, name: "Contact", href: "contact" },
];