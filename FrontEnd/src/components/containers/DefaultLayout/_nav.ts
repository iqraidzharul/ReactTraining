export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Book',
      url: '/book',
      icon: 'icon-note',
    },
    {
      name: 'Author',
      url: '/author',
      icon: 'icon-user',
    },
    {
      title: true,
      name: 'Theme',
      wrapper: { // optional wrapper object
        element: '', // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '', // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Example',
      url: '/example/dashboard',
      icon: 'icon-pencil',
    },
  ],
};
